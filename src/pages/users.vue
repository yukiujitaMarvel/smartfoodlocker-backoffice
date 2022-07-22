<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>顧客一覧</h1>
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
              :items="user"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
            >
            </v-data-table>
          </v-card>
         
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { API, graphqlOperation} from 'aws-amplify'
import { listUsers } from '../graphql/queries'
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'

  export default {
    head() {
      return {
        title: '顧客一覧 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    data () {
    return {
      dialog: false,
      search: '',
      headers: [
        { text: 'ユーザーID', value: 'user_id' },
        { text: '名前', value: 'user_name' },
        { text: 'メールアドレス', value: 'user_email' },
        { text: '電話番号', value: 'user_number' },
        // { text: '最終更新', value: 'updatedAt' }
      ],
      user: [],
    }
  },
  async created() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      const users = await API.graphql(graphqlOperation(listUsers));
      this.user = users.data.listUsers.items;
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


</style>