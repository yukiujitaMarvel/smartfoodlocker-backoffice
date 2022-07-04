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
                  dark
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
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'
import { Hub } from 'aws-amplify'

export default {
  head() {
    return {
      title: 'TOPページ | smartfoodlocker管理画面'
    }
  },
  data: () => ({
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
    events: [
      {
          name: '休み',
          start: '2022-06-04 09:00',
          end: '2022-06-05 17:00',
          color: 'grey darken-1'
      },
      {
          name: '休み',
          start: '2022-06-11 09:00',
          end: '2022-06-12 17:00',
          color: 'grey darken-1'
      },
      {
          name: '休み',
          start: '2022-06-18 09:00',
          end: '2022-06-19 17:00',
          color: 'grey darken-1'
      },
      {
          name: '休み',
          start: '2022-06-25 09:00',
          end: '2022-06-26 17:00',
          color: 'grey darken-1'
      },
      {
          name: 'クリームパン 他　50個',
          start: '2022-06-01 09:00',
          end: '2022-06-01 17:00',
          color: 'orange'
      },
      {
          name: 'たまごパン 他　20個',
          start: '2022-06-07 09:00',
          end: '2022-06-07 17:00',
          color: 'orange'
      },
      {
          name: 'コッペパン 他　45個',
          start: '2022-06-17 09:00',
          end: '2022-06-17 17:00',
          color: 'orange'
      },
      {
          name: 'あんパン 他　100個',
          start: '2022-06-27 09:00',
          end: '2022-06-27 17:00',
          color: 'orange'
      },
      
    ],
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
    }
    // showEvent ({ nativeEvent, event }) {
    //   const open = () => {
    //     this.selectedEvent = event
    //     this.selectedElement = nativeEvent.target
    //     requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
    //   }

    //   if (this.selectedOpen) {
    //     this.selectedOpen = false
    //     requestAnimationFrame(() => requestAnimationFrame(() => open()))
    //   } else {
    //     open()
    //   }

    //   nativeEvent.stopPropagation()
    // },
    // updateRange ({ start, end }) {
    //   const events = []

    //   const min = new Date(`${start.date}T00:00:00`)
    //   const max = new Date(`${end.date}T23:59:59`)
    //   const days = (max.getTime() - min.getTime()) / 86400000
    //   const eventCount = this.rnd(days, days + 20)

    //   for (let i = 0; i < eventCount; i++) {
    //     const allDay = this.rnd(0, 3) === 0
    //     const firstTimestamp = this.rnd(min.getTime(), max.getTime())
    //     const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    //     const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
    //     const second = new Date(first.getTime() + secondTimestamp)

    //     events.push({
    //       name: this.names[this.rnd(0, this.names.length - 1)],
    //       start: first,
    //       end: second,
    //       color: this.colors[this.rnd(0, this.colors.length - 1)],
    //       timed: !allDay,
    //     })
    //   }

    //   this.events = events
    // },
    // rnd (a, b) {
    //   return Math.floor((b - a + 1) * Math.random()) + a
    // },
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
</style>
