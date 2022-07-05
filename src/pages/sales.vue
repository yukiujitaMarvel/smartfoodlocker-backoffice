<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card v-if="users">
            <div class="order-title">
              <h1>売上一覧</h1>
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
                  dark
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
              :items="users"
              :items-per-page="5"
              :search="search"
              class="elevation-1"
            >
            
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">ユーザー編集</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="6">
                            <v-text-field v-model="user.email" label="メールアドレス" />
                          </v-col>
                          <v-col cols="6">
                            <v-text-field v-model="user.name" label="名前" />
                          </v-col>
                          <v-col cols="12">
                            <v-text-field v-model="user.memo" label="メモ" />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn @click="close">閉じる</v-btn>
                      <v-btn v-if="isPersistedUser" class="primary" @click="update">更新する</v-btn>
                      <v-btn v-else class="primary" @click="create">追加する</v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
              
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                  small
                  @click="edit(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  @click="remove(item)"
                >
                  mdi-delete
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
import Sidebar from '~/components/Sidebar'
import '~/assets/css/style.css'

  export default {
    head() {
      return {
        title: '売上一覧 | smartfoodlocker管理画面'
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
        { text: 'ID', value: 'id' },
        { text: 'メールアドレス', value: 'email' },
        { text: '名前', value: 'name' },
        { text: 'メモ', value: 'memo' },
        { text: '操作', value: 'actions' }
      ],
      user: {},
    }
  },
  computed: {
    users () {
      return this.$store.getters['getUsers']
    },
    // isPersistedUser () {
    //   return !!this.user.id
    // },
    // formTitle () {
    //   return this.isPersistedUser ? 'ユーザー編集' : 'ユーザー追加'
    // }
  },
  methods: {
    add (user) {
      this.user = {}
      this.dialog = true
    },
    create () {
      const payload = { user: this.user }
      this.$store.commit('addUser', payload)
      this.close()
    },
    edit (user) {
      this.user = Object.assign({}, user)
      this.dialog = true
    },
    update () {
      const payload = { user: this.user }
      this.$store.commit('updateUser', payload)
      this.close()
    },
    remove (user) {
      const payload = { user: user }
      this.$store.commit('removeUser', payload)
    },
    close () {
      this.dialog = false
      this.user = {}
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