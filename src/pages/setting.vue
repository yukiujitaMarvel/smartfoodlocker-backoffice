<template>
  <div class="display-wrap">
  <Sidebar />
    <v-card class="right-wrap" >
      <h1>設定</h1>
      <div>
        <p class="subTitle"><v-icon>mdi-account</v-icon>登録情報</p>
        <div>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
              dense
              label="企業名"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
              dense
              label="ユーザー名"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="8"
            >
              <v-text-field
              dense
              label="住所"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
              dense
              label="電話番号"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
              dense
              label="パスワード"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </div>
      </div>
      <div>
        <p class="subTitle"><v-icon>mdi-av-timer</v-icon>提供時間情報</p>
        <div class="weekTime">
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              月曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
            火曜日</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              水曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              木曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              金曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              土曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              日曜日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col 
            v-for="align in alignments"
            :key="align"
            :align-self="align"
            >
              祝日
            </v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="開始時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
            <v-col class="center">~</v-col>
            <v-col>
              <template>
                <vue-timepicker
                  placeholder="終了時間"
                  format="HH:mm"
                  hour-label="時"
                  minute-label="分"
                  minute-interval="15"
                  hide-dropdown
                  auto-scroll
                  close-on-complete
                  >
                </vue-timepicker>
              </template>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { API, graphqlOperation} from 'aws-amplify'
import { listUsers } from '../graphql/queries'
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

  export default {
    head() {
      return {
        title: '顧客一覧 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    components: {
      'vue-timepicker': VueTimepicker,
    },
    data: () => ({
      alignments: [
        'center',
      ]
    }),
  // data () {
  //   return {
  //     dialog: false,
  //     search: '',
  //     headers: [
  //       { text: 'ユーザーID', value: 'user_id' },
  //       { text: '名前', value: 'user_name' },
  //       { text: 'メールアドレス', value: 'user_email' },
  //       { text: '電話番号', value: 'user_number' },
  //       // { text: '最終更新', value: 'updatedAt' }
  //     ],
  //     user: [],
  //   }
  // },


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
.right-wrap{
  padding: 20px 20px;
}

.subTitle {
  margin-top: 20px;
  color: #EA5303;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.mdi-account::before , .mdi-av-timer::before {
  color: #EA5303;
}

.weekTime{
  max-width: 60%;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  max-width: 20px !important;
}

.my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active,
.my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active:focus,
.my-time-picker >>> .vue__time-picker .dropdown ul li:not([disabled]).active:hover {
  background: #999;
}

</style>