<template>
  <div class="display-wrap">
  <Sidebar />
    <div class="right-wrap">
      <v-row class="fill-height">
        <v-col>
          <v-card>
            <div class="order-title">
              <h1>商品一覧</h1>
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
              :items="desserts"
              :search="search"
            ></v-data-table>
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
    components: {
      Sidebar,
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: '商品番号',
            align: 'start',
            // filterable: false,
            value: 'name',
          },
          { text: '画像', value: 'item_img' },
          { text: 'カテゴリ', value: 'category' },
          { text: '商品名', value: 'item_name' },
          { text: '値段(税込み)', value: 'item_price' },
          { text: '備考', value: 'remarks' },
          { text: '操作', value: 'operation' },
        ],
        desserts: [
          {
            name: 'p-6768',
            item_img: 'img',
            category: '弁当',
            item_name: '焼肉弁当',
            item_price: '600円',
            remarks: 'オプション　ご飯　味噌汁',
          },
          {
            name: 'p-6767',
            item_img: 'img',
            category: '弁当',
            item_name: '焼き魚弁当',
            item_price: '580円',
            remarks: 'オプション　ご飯　味噌汁',
          },
          {
            name: 'p-6766',
            item_img: 'img',
            category: '弁当',
            item_name: 'たまごサンド',
            item_price: '450円',
            remarks: '-',
          },
          {
            name: 'p-6765',
            item_img: 'img',
            category: '弁当',
            item_name: 'わかめスープ',
            item_price: '380円',
            remarks: '-',
          },
          
          
        ],
      }
    },
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