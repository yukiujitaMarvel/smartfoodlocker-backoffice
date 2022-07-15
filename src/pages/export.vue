<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <div class="order-title">
            <h1>各種出力</h1>
          </div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    名前
                  </th>
                  <!-- <th class="text-left">
                    Calories
                  </th> -->
                  <th class="text-left">
                    PDF出力
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>注文状況一覧(日単位)</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>注文状況一覧(週単位)</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>商品一覧</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>事前商品登録一覧</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>売上一覧</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>顧客一覧</td>
                  <td>
                    <div class="my-2">
                      <v-btn
                        color="warning"
                        light
                      >
                        PDF出力
                      </v-btn>
                    </div>
                  </td>
                </tr>
                <tr>
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
        title: '各種出力 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    data () {
    return {
      
      
    }
  },
  methods: {
    
    
  }
    
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
.order-title{
  padding: 10px;
}
.order-title h1{
  font-size: 20px;
}


</style>