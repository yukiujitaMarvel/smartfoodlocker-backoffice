<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>注文状況一覧</h1>
              <!-- <p>2023-10-01-2023-10-31 現在</p> -->
            </div>
            <div class="select-day">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateRangeText"
                        label="日付範囲指定"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dates"
                      no-title
                      scrollable
                      range
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="selectDay"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
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
                  light
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
              <template v-slot:item="props">
                <tr :class="{'notReceave': props.item.status === '未受取'}">
                  <td>{{props.item.id}}</td>
                  <td>{{props.item.items.item_name}}</td>
                  <td>{{props.item.user_id}}</td>
                  <td>{{props.item.createdAt}}</td>
                  <td>{{props.item.status}}</td>
                </tr>
              </template>
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
        dates: [],
        orders: [],
        search: '',
        headers: [
          {
            text: '注文番号',
            align: 'start',
            filterable: false,
            value: 'id',
          },
          { text: '商品名', value: 'item_name' },
          { text: '顧客番号', value: 'user_id' },
          { text: '注文日時', value: 'createdAt' },
          { text: 'ステータス', value: 'status' },
          // { text: '操作', value: 'actions' },
        ],
        desserts: [{
          items: {
            item_name: '',
          }
        }],
      }
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    async created() {
      await this.getOrders()
    },
    methods: {
      async getOrders() {
        const orders = await API.graphql(
          graphqlOperation(
            listOrders
          )
        );
        const orderLists = orders.data.listOrders.items;

        this.orders = orderLists;

        var status1 = '準備中'
        var status2 = '投入完了'
        var status3 = '受取完了'
        var status4 = '未受取'
        var status5 = '事前キャンセル'

        orderLists.forEach((value, index) => {
          if(value.status == '01') {
            orderLists[index].status = status1
          }else if(value.status == '02') {
            orderLists[index].status = status2
          }else if(value.status == '03') {
            orderLists[index].status = status3
          }else if(value.status == '04') {
            orderLists[index].status = status4
          }else {
            orderLists[index].status = status5
          }
        })

        this.desserts = orderLists

        console.log(this.desserts)
      },
      edit(item) {
        console.log(item.name)
      },
      async selectDay(){
        this.menu = false

        const selectDay = this.dates;
        const data = this.orders;

        console.log(data);

        data.forEach((value) => {
          let d_day = new Date(value.createdAt);
          let d_y = d_day.getFullYear();
          let d_m = ('0' + (d_day.getMonth() + 1)).slice(-2);
          let d_d = ('0' + d_day.getDate()).slice(-2);

          const filterData = (d_y + '-' + d_m + '-' + d_d)
          value.createdAt = filterData;
        })

        this.desserts = [];

        data.filter((value) => {
          if(value.createdAt >= selectDay[0] && value.createdAt <= selectDay[1]) {
            this.desserts.push(value);
          }else if(value.createdAt == selectDay){
            this.desserts.push(value);
          }else {
            console.log('条件に一致しません。')
          }
        })
      },
    }
  }
</script>

<style >
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
.select-day{
  padding-left: 10px;
}
.notReceave {
  background-color: #D4320880;
}

</style>