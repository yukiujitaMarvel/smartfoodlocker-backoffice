<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-locker-multiple</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>Smart food locker</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

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
      </v-list>

      <div class="conpany-wrap">
        <v-list-item class="px-2">
          <v-list-item-avatar></v-list-item-avatar>
          <v-list-item-title></v-list-item-title>
          <amplify-sign-out></amplify-sign-out>
        </v-list-item>
        <div class="conpany-inner-wrap">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-icon>mdi-office-building</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>コマジャパン株式会社</v-list-item-title>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-list-item>
        </div>
      </div>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: '注文状況一覧', icon: 'mdi-cart', link: '/orderlist' },
          { title: '商品一覧', icon: 'mdi-food-outline', link: '/itemlist' },
          { title: '売上・顧客管理表', icon: 'mdi-database-outline', link: '/users' },
          { title: '各種出力', icon: 'mdi-export-variant' },
          { title: '休日管理', icon: 'mdi-calendar-blank' },
          { title: '設定', icon: 'mdi-cog-outline' },
        ],
        mini: true,
      }
    },
  }
</script>

<style scoped>
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

</style>