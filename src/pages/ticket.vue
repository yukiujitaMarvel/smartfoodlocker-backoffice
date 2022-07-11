<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>チケット一覧</h1>
            </div>
            
            <v-row>
              <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div class="modal-btn">
                    <v-btn
                      color="orange"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      新規チケット追加
                    </v-btn>
                  </div>
                </template>
                <v-card>
                  <v-toolbar
                    dark
                    color="orange"
                  >
                    <v-btn
                      icon
                      dark
                      @click="dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>チケット登録</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn
                        dark
                        text
                        @click="createTicket"
                      >
                        保存
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-list
                    three-line
                    subheader
                  >
                    <v-card>
                      <v-card-text>
                        <div>
                          <v-text-field
                            v-model="ticket_title"
                            label="タイトル"
                            hide-details="auto"
                          ></v-text-field>
                          <div class="file-wrap">
                            <label for="form-image">ファイルを選択</label>
                            <input type="file" id="form-image">
                            <!-- <div class="upload-img" v-if="postData.thumbnail != ''">
                              <img :src="postData.thumbnail" alt="">
                            </div> -->
                            <span class="select-image">選択されていません</span>
                          </div>
                          <v-container fluid>
                            <v-textarea
                              v-model="ticket_content"
                              counter
                              label="内容"
                            ></v-textarea>
                          </v-container>
                          <div class="use-ticket-wrap">
                            <h1>使用開始日</h1>
                            <input type="date" name="example" value="2022-05-20" v-model="start_use">
                          </div>
                          <div class="expiry-ticket-wrap">
                            <h1>有効期限</h1>
                            <input type="date" name="example" value="2022-05-20" v-model="expiry">
                          </div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-list>
                </v-card>
              </v-dialog>
            </v-row>



            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="検索"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>

            
            
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              :search="search"
              class="elevation-1 my-3 mx-auto"
            >
              <template v-slot:top>
                <v-dialog v-model="editdialog" max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">チケット編集</span>
                    </v-card-title>

                    <v-card-text>
                      <div>
                        <v-text-field
                          v-model="edititems.ticket_title"
                          label="チケットタイトル"
                          hide-details="auto"
                        ></v-text-field>
                        <div class="file-wrap">
                          <label for="form-images">ファイルを選択</label>
                          <input type="file" id="form-images"  @change="changeImg">
                          <div class="upload-img" v-if="editData.thumbnail != ''">
                            <img :src="editData.thumbnail" alt="">
                          </div>
                          <div v-else>
                            <div class="upload-img" v-if="edititems.ticket_img != null">
                              <img :src="edititems.ticket_img" alt="">
                            </div>
                            <span class="select-image" v-else>選択されていません</span>
                          </div>
                        </div>
                        <v-container fluid>
                          <v-textarea
                            v-model="edititems.ticket_content"
                            counter
                            label="内容"
                          ></v-textarea>
                        </v-container>
                        <v-container fluid>

                        <div class="use-ticket-wrap">
                          <h1>使用開始日</h1>
                          <input type="date" name="example" value="2022-05-20" v-model="edititems.start_use">
                        </div>
                        <div class="expiry-ticket-wrap">
                          <h1>有効期限</h1>
                          <input type="date" name="example" value="2022-05-20" v-model="edititems.expiry">
                        </div>

                      </v-container>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                    <div class="item-add-btn">
                        <v-btn
                          color="warning"
                          dark
                          @click="updateItem()"
                        >
                          商品を更新する
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              


              <!-- サムネイル -->
              <template v-slot:[`item.ticket_img`]="{ item }">
                  <v-img :src="item.ticket_img" 
                          :aspect-ratop="16/9" 
                          height="7vw" 
                          min-height="100px"
                          width="7vw" 
                          min-width="100px" 
                          class="ma-0 pa-0"
                  ></v-img>
              </template>

              <template v-slot:[`item.actions`]="{ item }">
                 <v-menu
                    bottom
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        nomal
                        class="ma-2"
                        v-bind="attrs"
                        v-on="on"
                        @click="check(item)"
                      >
                        mdi-dots-vertical
                      </v-icon>
                    </template>

                    <v-list>
                      <v-list-item @click="editItem(item)">
                        <v-list-item-title>編集</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="deleteItem(item)">
                        <v-list-item-title>削除</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
              </template>
               

            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { API, graphqlOperation} from 'aws-amplify'
import { listTickets } from '../graphql/queries'
import { createTickets, deleteTickets,} from '../graphql/mutations'
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'


export default {
  head() {
    return {
      title: 'チケット一覧 | smartfoodlocker管理画面'
    }
  },
  components: {
    Sidebar,
  },
  data () {
    return {
      dialog: false,
      editdialog: false,
      search: '',

      ticket_title: '',
      ticket_content: '',
      start_use: '',
      expiry: '',


      headers: [
        {
          text: 'チケットID',
          align: 'start',
          value: 'id',
        },
        { text: '画像', value: 'ticket_img' },
        { text: 'タイトル', value: 'ticket_title' },
        { text: '内容', value: 'ticket_content' },
        { text: '使用期間', value: 'start_use' },
        { text: '有効期間', value: 'expiry' },
        { text: '操作', value: 'actions' },
      ],
      desserts: [],
      edititems: [],
      editData: {
        thumbnail: '',
      },
      
    }
  },
  async created() {
    await this.getTicket();
  },
  methods: {

    async getTicket() {
      const tickets = await API.graphql(graphqlOperation(listTickets));
      const ticketLists = tickets.data.listTickets.items;

      this.desserts = ticketLists
    },

    async createTicket() {
      this.dialog = false;

      this.start_use = new Date(this.start_use).toISOString();
      this.expiry =  new Date(this.expiry).toISOString();

      const addTicket = {
        ticket_title: this.ticket_title,
        ticket_content: this.ticket_content,
        start_use: this.start_use,
        expiry: this.expiry,
      };
      await API.graphql(graphqlOperation(createTickets, {input: addTicket}))
      .then(response => {
          console.log(response);
          
      }).catch(error => {
          console.log(error)
      });

      await this.getTicket()
      
    },

    check(item) {
      console.log(item.id);
    },

    changeImg (e) {
      this.thumbnail = e.target.files[0]
      console.log(this.thumbnail)
 
      if (this.thumbnail) {
        const reader = new FileReader()
        reader.onload = () => {
          this.editData.thumbnail = reader.result + ''
        }
        reader.readAsDataURL(this.thumbnail)
        console.log('選択完了')
      }
    },

    async editItem(item){
      this.editdialog = true

      // console.log(item)

      this.edititems = Object.assign({}, item)

      console.log(this.edititems)
      
    },

    async deleteItem(item){
      const deleteItemsInput = {
        id: item.id
      };
      const deleteItem = await API.graphql(graphqlOperation(deleteTickets,{input: deleteItemsInput}));
      console.log(deleteItem)
      
      await this.getTicket()
    },

    
  }
}
</script>

<style scoped>
.order-title{
  padding: 10px;
}
.order-title h1{
  font-size: 20px;
}
.file-wrap{
  margin: 30px 0 30px 0;
}
label {
  padding: 5px 20px;
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
  border-radius:10px;
  transition: .3s;
  font-weight: bold;
}
label:hover {
  opacity: 0.8;
}
input[type="file"] {
  display: none;
}
.v-card__title{
  justify-content: center;
  color: black;
  font-weight: bold;
}
.v-card__title span {
  font-weight: bold;

}
.v-card__actions{
  display: block;
  text-align: center;
}
button {
  font-weight: bold;
}
.upload-img{
  width: 100px;
  height: 100px;
  margin: 10px 0 0 10px;
}
.upload-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.modal-btn{
  margin: 20px;
}
.use-ticket-wrap{
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(151, 151, 151);
}
.use-ticket-wrap h1{
  font-size: 16px;
  padding-top: 8px;
  color: rgb(151, 151, 151);
}
.expiry-ticket-wrap{
  margin-top: 5px;
  margin-bottom: 10px;
}
.expiry-ticket-wrap h1{
  font-size: 16px;
  padding-top: 8px;
  color: rgb(151, 151, 151);
}
.v-toolbar__title{
  font-weight: bold;
}
</style>
