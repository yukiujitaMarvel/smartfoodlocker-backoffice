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
            <Modal />
            
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
                      <v-list-item>
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
import { deleteItems } from '../graphql/mutations'
import Sidebar from '~/components/Sidebar'
import Modal from '~/components/Modal'
import '~/assets/css/style.css'

export default {
  head() {
    return {
      title: '商品一覧 | smartfoodlocker管理画面'
    }
  },
  components: {
    Sidebar,
    Modal
  },
  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        {
          text: '商品番号',
          align: 'start',
          value: 'item_id',
        },
        { text: '画像', value: 'item_img' },
        { text: 'カテゴリ', value: 'category_id' },
        { text: '商品名', value: 'item_name' },
        { text: '値段(税込み)', value: 'item_price' },
        { text: '在庫', value: 'item_stock' },
        { text: '操作', value: 'actions' },
      ],
      desserts: [
        // {
        //   name: 'p-6768',
        //   item_img: require('@/assets/img/yakiniku.png'),
        //   category: '弁当',
        //   item_name: '焼肉弁当',
        //   item_price: '600円',
        //   remarks: 'オプション　ご飯　味噌汁',
        // },
      ],
    }
  },
  async created() {
    await this.getItems();
  },
  methods: {
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
      // console.log(itemLists)
      this.desserts = itemLists
    },


    check(item) {
      console.log(item.item_id);
    },

    async deleteItem(item){
      const deleteItemsInput = {
        item_id: item.item_id
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
.col{
  height: 100vh;
}


</style>