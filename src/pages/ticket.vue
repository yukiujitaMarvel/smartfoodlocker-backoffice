<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
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
                      @click="dialog = false"
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
                          label="チケット名"
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
                        <v-text-field
                          label="タイトル"
                          hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                          label="内容"
                          hide-details="auto"
                        ></v-text-field>
                        <div class="use-ticket-wrap">
                          <h1>使用開始日</h1>
                          <input type="date" name="example" value="2022-05-20">
                        </div>
                        <div class="expiry-ticket-wrap">
                          <h1>有効期限</h1>
                          <input type="date" name="example" value="2022-05-20">
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    チケットID
                  </th>
                  <th class="text-left">
                    画像
                  </th>
                  <th class="text-left">
                    タイトル
                  </th>
                  <th class="text-left">
                    内容
                  </th>
                  <th class="text-left">
                    使用開始日
                  </th>
                  <th class="text-left">
                    有効期限
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                >
                  <td>{{ item.id }}</td>
                  <td>{{ item.img }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.contents }}</td>
                  <td>{{ item.start_use }}</td>
                  <td>{{ item.expiry }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'

  export default {
    head() {
      return {
        title: '休日管理 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,



      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],



      desserts: [
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
          {
            id: 't-1234',
            img: 'img',
            title: 'チケット１',
            contents: 'testtesttesttesttesttesttest',
            start_use: '2022/07/07',
            expiry: '2022/10/22',
          },
         
          
          
          
          
        ],
    }
  },
  methods: {
      
    },
  }
</script>

<style scoped>
td {
  font-weight: bold;
  color: gray;
}
button{
  font-weight: bold;
}
.modal-btn{
  padding: 50px;
}
.v-toolbar__title{
  font-weight: bold;
}
.order-title{
  padding: 10px;
}
.order-title h1{
  font-size: 20px;
}
.use-ticket-wrap{
  margin-top: 10px;
  padding-top: 8px;
  border-bottom: 1px solid rgba(105, 103, 103, 0.87);
}
.use-ticket-wrap h1{
  font-size: 16px;
  padding-bottom: 5px;
  color: rgba(136, 133, 133, 0.87);
}
.expiry-ticket-wrap{
  margin-top: 10px;
  padding-top: 8px;
}
.expiry-ticket-wrap h1{
  font-size: 16px;
  padding-bottom: 5px;
  color: rgba(136, 133, 133, 0.87);
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
</style>