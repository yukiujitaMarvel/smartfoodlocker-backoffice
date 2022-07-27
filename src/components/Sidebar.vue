<template>
  <v-card>
    <v-navigation-drawer
      permanent
      class="navbar"
      expand-on-hover
    >
      <a href="/">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon>mdi-locker-multiple</v-icon>
          </v-list-item-avatar>

          <v-list-item-title>Smart food locker</v-list-item-title>

            <!-- <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn> -->
        </v-list-item>
      </a>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-list-item v-if="Object.keys(users).length"
        class="navBar_btm singoutBtn"
        >
            <v-listitem-icon>
              <img src="@/assets/img/logout.png" alt="logOutIcon" width="24" height="24">
            </v-listitem-icon>
            <v-list-item-title>{{ users.username }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-else
        class="navBar_btm singinBtn" 
        >
            <v-listitem-icon>
              <img src="@/assets/img/login.png" alt="logOutIcon" width="24" height="24">
            </v-listitem-icon>
            <v-list-item-title>ログイン/新規登録</v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="link">
        <div v-if="Object.keys(users).length">
          <a href="#" @click="logout"></a>
          <!-- <amplify-sign-out></amplify-sign-out> -->
        </div>
        <div v-else>
          <a href="/signin"></a>
        </div>
      </div>

    </v-navigation-drawer>

    <v-row justify="center">
      <v-dialog
        v-model="logoutdialog"
        max-width="290"
      >
        <v-card>
          <h5>本当にログアウトしてもよろしいですか？</h5>
          <v-card-actions>
            <div class="cansel-btn-wrap">
              <!-- <button
                color="green darken-1"
                text
                class="back-btn"
                @click="logoutdialog = false"
              >
                いいえ
              </button> -->
              <amplify-sign-out></amplify-sign-out>
              <!-- <button
                color="green darken-1"
                text
                class="cancel-btn"
              >
                はい
              </button> -->
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>



  </v-card>
</template>

<script>
  import Auth from "@aws-amplify/auth";
  import { Hub } from 'aws-amplify'

  export default {
    data () {
      return {
        drawer: true,
        logoutdialog: false,
        items: [
          { title: '注文状況一覧', icon: 'mdi-cart', link: '/orderlist' },
          { title: '商品一覧', icon: 'mdi-food-outline', link: '/itemlist' },
          { title: '顧客一覧', icon: 'mdi-account', link: '/users' },
          { title: '売上一覧', icon: 'mdi-database-outline', link: '/sales' },
          { title: '各種出力', icon: 'mdi-export-variant', link: '/export' },
          // { title: 'チケット管理', icon: 'mdi-ticket', link: '/ticket' },
          { title: '設定', icon: 'mdi-cog-outline', link: '/setting' },
        ],
        mini: true,
        users: {}
      }
    },
    
    destroyed() {
      Hub.remove('auth', this.listener)
    },
    async created() {
    await this.getUser()
    Hub.listen('auth', this.listener)
    },
    methods: {
      async getUser() {
        try {
          await Auth.currentAuthenticatedUser()
            .then((data) => {
              if(data && data.signInUserSession) {
                console.log(data)
                this.users = data
              }
            })
        } catch(e){
        } 
      },
      logout(){
        this.logoutdialog = true
      },
      listener(data){
        if(data.payload.event == 'signOut') {
          this.$router.push('/')
        }
      },
    },
  }
</script>

<style scoped>
a {
  text-decoration: none;
}
.v-navigation-drawer{
  background-color: #EA5303 !important;
}
.v-sheet.v-card {
  border-radius: 0px;
  position: relative;
}
.v-card .v-sheet .theme--light{
  color: white;
  font-weight: bold;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: white;
  font-weight: bold;
}
.v-icon.v-icon {
  color: white;
}
.v-list-item {
  padding-bottom: 10px;
}
.v-list-item__title {
  font-weight: bold !important;
}
.conpany-wrap {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2px 2px 5px 2px;
}
.conpany-inner-wrap{
  width: 100%;
  border: 1px solid #ddd;
}
.conpany-inner-wrap .v-list-item__title{ 
  font-size: 12px;
}
.v-btn:not(.v-btn--round).v-size--default {
  font-weight: bold !important;
}

/* edit yajima */
/* .v-navigation-drawer__content {
  width: 100% !important;
} */

.navBar_btm {
  position: fixed;
  bottom: 40px;
  width: 100%;
  padding: 10px 16px;
}
.navBar_btm v-listitem-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.singinBtn {
  background-color: #fff;
}
.singinBtn .v-list-item__title {
  color: #EA5303;
}
.singoutBtn {
  border-top: #fff 1px solid;
  border-bottom: #fff 1px solid;
}


.link {
  position: fixed;
  bottom: 40px;
  z-index: 150;
  width: 100%;
  height: 60px;
}
.link div {
  width: 100%;
  height: 100%;
}
.link a {
  width: 100%;
  height: 100%;
  display: block;
}
.button {
  display: none !important;
}

</style>