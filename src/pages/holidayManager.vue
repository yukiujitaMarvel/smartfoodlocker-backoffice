<template>
<!-- 休日管理ページレイアウト保管 -->
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-row>
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <div class="modal-btn">
                  <v-btn
                    color="orange"
                    light
                    v-bind="attrs"
                    v-on="on"
                  >
                    休日追加
                  </v-btn>
                </div>
              </template>
              <v-card>
                <v-toolbar
                  light
                  color="orange"
                >
                  <v-btn
                    icon
                    light
                    @click="dialog = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>休日設定</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn
                      light
                      text
                      @click="dialog = false"
                    >
                      保存
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-list
                  three-line
                  subheader
                >
                  <!-- カレンダー -->
                  <template>
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
                              Today
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
                                  <v-list-item-title>Day</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'week'">
                                  <v-list-item-title>Week</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="type = 'month'">
                                  <v-list-item-title>Month</v-list-item-title>
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
                          <v-menu
                            v-model="selectedOpen"
                            :close-on-content-click="false"
                            :activator="selectedElement"
                            offset-x
                          >
                            <v-card
                              color="grey lighten-4"
                              min-width="350px"
                              flat
                            >
                              <v-toolbar
                                :color="selectedEvent.color"
                                light
                              >
                                <v-btn icon>
                                  <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                  <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                  <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                              </v-toolbar>
                              <v-card-text>
                                <span v-html="selectedEvent.details"></span>
                              </v-card-text>
                              <v-card-actions>
                                <v-btn
                                  text
                                  color="secondary"
                                  @click="selectedOpen = false"
                                >
                                  Cancel
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-menu>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </template>
                  <!-- カレンダー終了 -->
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    日時
                  </th>
                  <th class="text-left">
                    カテゴリ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
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
        title: '休日管理 | smartfoodlocker管理画面'
      }
    },
    components: {
      Sidebar,
    },
    data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,



      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],



      desserts: [
          {
            name: '2022/07/01',
            calories: '休日',
          },
          {
            name: '2022/07/02',
            calories: '休日',
          },
          {
            name: '2022/07/03',
            calories: '休日',
          },
          {
            name: '2022/07/04',
            calories: '休日',
          },
          {
            name: '2022/07/05',
            calories: '休日',
          },
          {
            name: '2022/07/06',
            calories: '休日',
          },
          
        ],
    }
  },
  methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
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
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
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
.modal-btn{
  padding: 50px;
}
.v-toolbar__title{
  font-weight: bold;
}

</style>