<template>
  <div class="display-wrap">
  <Sidebar />
    <v-card class="right-wrap" >
      <h1>設定</h1>
      <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="subTitle"><v-icon>mdi-account</v-icon>登録情報</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="accounInf">
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
            <div class="saveBtn">
              <v-btn
                color="secondary"
                dark
                large
              >
                保存
              </v-btn>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h2 class="subTitle"><v-icon>mdi-av-timer</v-icon>提供日時情報</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>
            <div class="weekTime">
              <p>定休日</p>
              <v-row class="dayBtn">
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected01=!isSelected01'
                    v-bind:class='{active:isSelected01}'
                  >
                    月
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected02=!isSelected02'
                    v-bind:class='{active:isSelected02}'
                  >
                    火
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected03=!isSelected03'
                    v-bind:class='{active:isSelected03}'
                  >
                    水
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected04=!isSelected04'
                    v-bind:class='{active:isSelected04}'
                  >
                    木
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected05=!isSelected05'
                    v-bind:class='{active:isSelected05}'
                  >
                    金
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected06=!isSelected06'
                    v-bind:class='{active:isSelected06}'
                  >
                    土
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected07=!isSelected07'
                    v-bind:class='{active:isSelected07}'
                  >
                    日
                  </v-btn>
                </v-col>
                <!-- <v-col>
                  <v-btn class="daySetting"
                    fab
                    small
                    v-on:click='isSelected08=!isSelected08'
                    v-bind:class='{active:isSelected08}'
                  >
                    祝
                  </v-btn>
                </v-col> -->
              </v-row>
              <p>提供時間</p>
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected01}'
              >
                <v-col>
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected02}'
              >
                <v-col>
                  火曜日
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected03}'
              >
                <v-col>
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected04}'
              >
                <v-col>
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected05}'
              >
                <v-col>
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected06}'
              >
                <v-col>
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
              <v-row class="timeSetting"
                v-bind:class='{active:isSelected07}'
              >
                <v-col>
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
              <!-- <v-row class="timeSetting"
                v-bind:class='{active:isSelected08}'
              >
                <v-col>
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
              </v-row> -->
              <div class="saveBtn">
                <v-btn
                  color="secondary"
                  dark
                  large
                >
                  保存
                </v-btn>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>
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
    data(){
      return {
        panel: [1],
        disabled: false,
        isSelected01: false,
        isSelected02: false,
        isSelected03: false,
        isSelected04: false,
        isSelected05: false,
        isSelected06: false,
        isSelected07: false
        // isSelected08: false
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
.right-wrap{
  padding: 20px 20px;
}

h1{
  margin-bottom: 10px;
}

.saveBtn {
  margin: 20px 0;
}

.subTitle {
  /* margin-top: 20px; */
  color: #EA5303;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 16px ;
}

.accounInf {
  margin: 20px 15px;
  font-size: 14px !important;
}

.weekTime{
  max-width: 60%;
  margin: 0 auto 30px 15px;
}
.mdi-account::before , .mdi-av-timer::before {
  color: #EA5303;
  margin-right: 5px;
}
.weekTime p {
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
}
.dayBtn {
  margin-left: 15px;
}
.daySetting.active.theme--light.v-btn.v-btn--has-bg{
  background-color: #14B855 !important;
  color: #fff;
}
.timeSetting {
  margin-left: 15px;
  font-size: 14px;
}
.timeSetting.active {
  opacity: 0.5;
  pointer-events: none;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
  max-width: 20px !important;
}

</style>