<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>注文状況一覧</h1>
              <p>2023-10-01-2023-10-31 現在</p>
            </div>
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
              :search="search"
            >
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                nomal
                @click="edit(item)"
              >
                mdi-dots-vertical
              </v-icon>
            </template>
            </v-data-table>
          </v-card>
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
        title: '注文一覧 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: '注文番号',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: '注文日時', value: 'order_date' },
          { text: '顧客番号', value: 'user_id' },
          { text: '商品数', value: 'item_num' },
          { text: '注文詳細', value: 'order_detail' },
          { text: 'ステータス', value: 'status' },
          { text: '操作', value: 'actions' },
        ],
        desserts: [
          {
            name: '31-0007',
            order_date: '2023-10-31 10:30',
            user_id: 'a6f7ab85-a8db-4f2f-a169-958b6baddb94',
            item_num: 2,
            order_detail: '焼肉弁当　フレッシュサラダ',
            status: '準備中',
          },
          {
            name: '31-0006',
            order_date: '2023-10-31 10:30',
            user_id: 'a6f7ab85-a8db-4f2f-a169-958b6baddb94',
            item_num: 2,
            order_detail: '焼肉弁当　フレッシュサラダ',
            status: '準備中',
          },
          {
            name: '31-0005',
            order_date: '2023-10-31 10:30',
            user_id: 'a6f7ab85-a8db-4f2f-a169-958b6baddb94',
            item_num: 2,
            order_detail: '焼肉弁当　フレッシュサラダ',
            status: '準備中',
          },
          {
            name: '31-0004',
            order_date: '2023-10-31 10:30',
            user_id: 'a6f7ab85-a8db-4f2f-a169-958b6baddb94',
            item_num: 2,
            order_detail: '焼肉弁当　フレッシュサラダ',
            status: '準備中',
          },
          {
            name: '31-0003',
            order_date: '2023-10-31 10:30',
            user_id: 'a6f7ab85-a8db-4f2f-a169-958b6baddb94',
            item_num: 2,
            order_detail: '焼肉弁当　フレッシュサラダ',
            status: '準備中',
          },
          
        ],
      }
    },
    methods: {
      edit(item) {
        console.log(item.name)
      }
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
.order-title p{
  font-size: 14px;
  margin-top: 10px;
}

</style>