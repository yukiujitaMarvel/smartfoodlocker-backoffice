<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar
              flat
            >
              <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
              >
                今日
              </v-btn>
              <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="prev"
              >
                <v-icon small>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-btn
                fab
                text
                small
                color="grey darken-2"
                @click="next"
              >
                <v-icon small>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu
                bottom
                right
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>
                      mdi-menu-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>日</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>週</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>月</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>

            <v-row justify="center">
              <v-dialog
                v-model="adddialog"
                persistent
                max-width="290"
              >
                <v-card>
                  <h5>{{ selectedday }}を「休み」として登録してもよろしいですか？</h5>
                  <v-card-actions>
                    <div class="cansel-btn-wrap">
                      <button
                        color="green darken-1"
                        text
                        class="back-btn"
                        @click="adddialog = false"
                      >
                        いいえ
                      </button>
                      <button
                        color="green darken-1"
                        text
                        class="cancel-btn"
                        @click="createSchedule"
                      >
                        はい
                      </button>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

            <v-row justify="center">
              <v-dialog
                v-model="deletedialog"
                persistent
                max-width="290"
              >
                <v-card>
                  <h5>{{ eventday.start }}の「休み」を削除してもよろしいですか？</h5>
                  <v-card-actions>
                    <div class="cansel-btn-wrap">
                      <button
                        color="green darken-1"
                        text
                        class="back-btn"
                        @click="deletedialog = false"
                      >
                        いいえ
                      </button>
                      <button
                        color="green darken-1"
                        text
                        class="cancel-btn"
                        @click="deleteSchedule"
                      >
                        はい
                      </button>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>


          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'
import { Hub } from 'aws-amplify'
import { API, graphqlOperation, Storage} from 'aws-amplify'
import { listSchedules } from '../graphql/queries'
import { createSchedules, deleteSchedules } from '../graphql/mutations'

export default {
  head() {
    return {
      title: 'TOPページ | smartfoodlocker管理画面'
    }
  },
  data: () => ({
    adddialog: false,
    deletedialog: false,
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    selectedday: '',
    eventday: '',
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  components: {
    Sidebar,
  },
   created() {
    Hub.listen('auth', this.listener)
  },
  destroyed() {
    Hub.remove('auth', this.listener)
  },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  async created() {
    await this.getSchedule();
  },
  methods: {
    async getSchedule(){
      const schedules = await API.graphql(graphqlOperation(listSchedules));
      const scheduleLists = schedules.data.listSchedules.items;

      scheduleLists.forEach((value) => {
        value.name = "休日"
        value.color = 'grey darken-1'
        value.start = value.date
        delete value.date
      })

      // console.log(scheduleLists)
      this.events = scheduleLists

      this.getSchedule()
    },
    async createSchedule(){
      this.adddialog = false

      const addschedule = {
        merchant_id: 'aaa',
        date: this.selectedday,
      }
      await API.graphql(graphqlOperation(createSchedules, {input: addschedule}))
      .then(response => {
          console.log(response);
          
      }).catch(error => {
          console.log(error)
      });
    },
    viewDay ({ date }) {
      this.adddialog = true

      this.selectedday = date
      // this.focus = date
      // this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },

    updateRange () {
      setTimeout(() => {
        const dayList = Array.from(this.$refs.calendar.$vnode.elm.getElementsByClassName('v-calendar-weekly__week'))
        dayList.map(el => {
          el.children[0].classList.add('sunday')
          el.children[6].classList.add('saturday')
        })
      }, 200)
    },
    listener(data){
      if(data.payload.event == 'signOut') {
        this.$router.push('/signin')
      }
    },
    showEvent ({ event }) {
      this.deletedialog = true;

      this.eventday = event;
    },
    async deleteSchedule() {
      // console.log(this.eventday)
      this.deletedialog = false

      const deleteScheduleInput = {
        id: this.eventday.id
      };
      const deleteSchedule = await API.graphql(graphqlOperation(deleteSchedules,{input: deleteScheduleInput}));
      // console.log(deleteSchedule);

      this.getSchedule();
    },
    
    
  },
}
</script>

<style>
.saturday {
  background-color: rgba(0, 0, 255, .1) !important;
}
.sunday {
  background-color: rgba(255, 0, 0, .1)  !important;
}
.v-event-summary{
  font-weight: bold;
}
.v-event-summary strong {
  display: none;
}
.v-card__actions{
  display: block;
  text-align: center;
}
.cansel-btn-wrap{
  padding: 10px;
}
.back-btn{
  font-size: 12px;
  border: 1px solid orange;
  border-radius: 20px;
  color: orange;
  padding: 10px 20px 10px 20px;
  margin-right: 30px;
}
.back-btn:hover{
  font-size: 12px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: orange;
  color: white;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
}
.cancel-btn{
  font-size: 12px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: orange;
  color: white;
  font-weight: bold;
  width: 85px;
  padding: 10px;
}
.cancel-btn:hover{
  font-size: 12px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: white;
  color: orange;
  padding: 10px;
}
h5{
  padding: 30px;
}
</style>
