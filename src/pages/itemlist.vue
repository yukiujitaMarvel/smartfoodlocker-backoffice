<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>商品一覧</h1>
            </div>
            <template>
              <v-row>
                <v-dialog
                  v-model="createdialog"
                  width="600px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div class="add-btn">
                      <v-btn
                        class="mx-2"
                        fab
                        dark
                        v-bind="attrs"
                        v-on="on"
                        color="orange"
                      >
                        <v-icon dark>
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </div>
                  </template>


                  <v-card>
                    <v-card-title>
                      <span class="text-h5">商品登録</span>
                    </v-card-title>

                    <v-card-text>
                      <div>
                        <v-text-field
                          v-model="name"
                          label="商品名"
                          :rules="rules"
                          hide-details="auto"
                        ></v-text-field>
                        <div class="file-wrap">
                          <label for="form-image">ファイルを選択</label>
                          <input type="file" id="form-image" @change="createImg">
                          <div class="upload-img" v-if="createData.img != ''">
                            <img :src="createData.img" alt="">
                          </div>
                          <span class="select-image" v-else>選択されていません</span>
                        </div>
                        <v-row align="center">
                        <v-col cols="12">
                          <v-select
                            v-model="category"
                            label="カテゴリ名"
                            :items="items"
                            item-text="name"
                            item-value="value"
                            required>
                          ></v-select>
                        </v-col>
                        </v-row>
                        <v-text-field
                          v-model="price"
                          label="値段"
                          :rules="rules"
                          hide-details="auto"
                        ></v-text-field>
                        <v-select
                          v-model="stock"
                          :items="num_items"
                          label="数"
                        ></v-select>
                        <v-container fluid>
                
                        <v-radio-group
                          v-model="createrelease"
                          row
                        >
                          <v-radio
                            label="公開"
                            v-bind:value='true'
                          ></v-radio>
                          <v-radio
                            label="非公開"
                            v-bind:value='false'
                          ></v-radio>
                        </v-radio-group>

                      </v-container>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                    <div class="item-add-btn">
                        <v-btn
                          color="warning"
                          dark
                          @click="createItem"
                        >
                          商品を登録する
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>

                </v-dialog>
              </v-row>
            </template>
            
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="検索"
                single-line
                hide-details
              ></v-text-field>

              <div class="my-2" style="margin-left:10px;">
                <v-btn
                  color="warning"
                  dark
                >
                  <v-icon
                    middle
                    color="white"
                  >
                    mdi-export-variant
                  </v-icon>
                  PDF出力
                </v-btn>
              </div>

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
                      <span class="text-h5">商品編集</span>
                    </v-card-title>

                    <v-card-text>
                      <div>
                        <v-text-field
                          v-model="edititems.item_name"
                          label="商品名"
                          hide-details="auto"
                        ></v-text-field>
                        <div class="file-wrap">
                          <label for="form-images">ファイルを選択</label>
                          <input type="file" id="form-images" @change="changeImg">
                          <div class="upload-img" v-if="editData.thumbnail != ''">
                            <img :src="editData.thumbnail" alt="">
                          </div>
                          <div v-else>
                            <div class="upload-img" v-if="edititems.item_img != ''">
                              <img :src="edititems.item_img" alt="">
                            </div>
                            <span class="select-image" v-else>選択されていません</span>
                          </div>
                        </div>
                        <v-row align="center">
                          <v-col cols="12">
                          <v-select
                            v-model="edititems.category_id"
                            label="カテゴリ名"
                            :items="items"
                            item-text="name"
                            item-value="value"
                            required>
                          ></v-select>
                          </v-col>
                        </v-row>
                        <v-text-field
                          v-model="edititems.item_price"
                          label="値段"
                          hide-details="auto"
                        ></v-text-field>
                        <v-select
                          v-model="edititems.item_stock"
                          :items="num_items"
                          label="数"
                        ></v-select>
                        <v-container fluid>
                
                        <v-radio-group
                          v-model="edititems.release"
                          row
                        >
                          <v-radio
                            label="公開"
                            v-bind:value='true'
                          ></v-radio>
                          <v-radio
                            label="非公開"
                            v-bind:value='false'
                          ></v-radio>
                        </v-radio-group>

                      </v-container>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                    <div class="item-add-btn">
                        <v-btn
                          color="warning"
                          dark
                        >
                          商品を更新する
                        </v-btn>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>


              <!-- サムネイル -->
              <template v-slot:[`item.item_img`]="{ item }">
                  <v-img :src="item.item_img" 
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
import { listItems } from '../graphql/queries'
import { createItems, deleteItems, updateItems } from '../graphql/mutations'
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'
const maxAge = 100; //表示したい数字より+1で設定。
const numRange = [...Array(maxAge).keys()]

export default {
  head() {
    return {
      title: '商品一覧 | smartfoodlocker管理画面'
    }
  },
  components: {
    Sidebar,
  },
  data () {
    return {
      editdialog: false,
      createdialog: false,
      search: '',

      name: '',
      createData: {
        img: '',
      },
      category: '',
      price: '',
      num_items: numRange,
      stock: '',
      createrelease: true,
      create_at: "",
      update_at: "",
      value: '',

      rules: [
        value => !!value || '必ず入力してください',
      ],

      headers: [
        {
          text: '商品番号',
          align: 'start',
          value: 'id',
        },
        { text: '画像', value: 'item_img' },
        { text: 'カテゴリ', value: 'category_id' },
        { text: '商品名', value: 'item_name' },
        { text: '値段(税込み)', value: 'item_price' },
        { text: '在庫', value: 'item_stock' },
        { text: '公開・非公開', value: 'release' },
        { text: '操作', value: 'actions' },
      ],
      desserts: [],
      items: [
        {name:'弁当', value:'01'},
        {name:'サンドイッチ', value:'02'},
        {name:'サラダ', value:'03'},
        {name:'スープ', value:'04'}
      ],
      edititems: [],
      release: true,
      editData: {
        thumbnail: '',
      },
    }
  },
  async created() {
    await this.getItems();
  },
  methods: {
    // 新規登録画像用
    createImg (e) {
      this.img = e.target.files[0]
      console.log(this.img)
 
      if (this.img) {
        const reader = new FileReader()
        reader.onload = () => {
          this.createData.img = reader.result + ''
        }
        reader.readAsDataURL(this.img)
        console.log('選択完了')
      }
    },
    // 商品新規登録
    async createItem() {
      this.createdialog = false

      const addItem = {
        item_name: this.name,
        item_img: this.createData.img,
        category_id: this.category,
        item_price: this.price,
        item_stock: this.stock,
        release: this.createrelease
      };
      await API.graphql(graphqlOperation(createItems, {input: addItem}))
      .then(response => {
          console.log(response);
          
      }).catch(error => {
          console.log(error)
      });
      
      await this.getItems();
    },

    // 商品データ取得
    async getItems() {
      const items = await API.graphql(graphqlOperation(listItems));
      const itemLists = items.data.listItems.items;

      var category_name1 = '弁当'
      var category_name2 = 'サンドイッチ'
      var category_name3 = 'サラダ'
      var category_name4 = 'スープ'

      itemLists.forEach((value,index) => {
        if(value.category_id == '01'){
          itemLists[index].category_id = category_name1
        }else if (value.category_id == '02'){
          itemLists[index].category_id = category_name2
        }else if(value.category_id == '03'){
          itemLists[index].category_id = category_name3
        }else {
          itemLists[index].category_id = category_name4
        }
      })

      itemLists.forEach((value,index) => {
        if(value.release == true) {
          itemLists[index].release = '公開'
        } else {
          itemLists[index].release = '非公開'
        }
      })

      this.desserts = itemLists
      // console.log(this.desserts)
    },

    // 操作アイコン
    check(item) {
      console.log(item.id);
    },

    // 商品編集データ取得
    async editItem(item){
      this.editdialog = true

      if(item.category_id == '弁当'){
        item.category_id = '01'
      }else if (item.category_id == 'サンドイッチ'){
        item.category_id = '02'
      }else if(item.category_id == 'サラダ'){
        item.category_id = '03'
      }else {
        item.category_id = '04'
      }

      if(item.release == '公開'){
        item.release = true
      }else {
        item.release = false
      }

      this.edititems = Object.assign({}, item)
      
      await this.getItems();
    },

    // 商品編集画像用
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

    // 商品削除
    async deleteItem(item){
      const deleteItemsInput = {
        id: item.id
      };
      const deleteItem = await API.graphql(graphqlOperation(deleteItems,{input: deleteItemsInput}));
      console.log(deleteItem)
      
      await this.getItems()
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
.add-btn{
  margin: 20px;
}
</style>
