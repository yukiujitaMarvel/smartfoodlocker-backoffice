<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>売上一覧</h1>
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
import { API, graphqlOperation} from 'aws-amplify'
import { listOrders } from '../graphql/queries'
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
            value: 'id',
          },
          { text: '注文詳細', value: 'order_detail' },
          { text: '商品数', value: 'item_num' },
          { text: '顧客番号', value: 'user_id' },
          { text: '注文日時', value: 'createdAt' },
          { text: '売上', value: 'earning' },
          { text: '操作', value: 'actions' },
        ],
        desserts: [],
      }
    },
    async created() {
      await this.getOrders()
    },
    methods: {
      async getOrders() {
        const orders = await API.graphql(graphqlOperation(listOrders));
        const orderLists = orders.data.listOrders.items;

        const earningItem = orderLists.filter((value) => {
          return value.statas == '03';
        })

        var status1 = '準備中'
        var status2 = 'キャンセル'
        var status3 = '完了'

        earningItem.forEach((value, index) => {
          if(value.statas == '01') {
            earningItem[index].statas = status1
          }else if(value.statas == '02') {
            earningItem[index].statas = status2
          }else {
            earningItem[index].statas = status3
          }
        })

        this.desserts = earningItem
      },
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