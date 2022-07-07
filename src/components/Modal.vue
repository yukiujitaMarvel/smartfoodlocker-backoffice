<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="add-btn">
          <v-btn
            class="mx-2"
            fab
            dark
            v-bind="attrs"
            v-on="on"
            color="orange"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </template>


      <v-card>
        <v-card-title>
          <span class="text-h5">商品登録</span>
        </v-card-title>

        <v-card-text>
          <div>
            <v-text-field
              v-model="item_name"
              label="商品名"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <div class="file-wrap">
              <label for="form-image">ファイルを選択</label>
              <input type="file" id="form-image" @change="changeImg">
              <div class="upload-img" v-if="postData.thumbnail != ''">
                <img :src="postData.thumbnail" alt="">
              </div>
              <span class="select-image" v-else>選択されていません</span>
            </div>
            <v-row align="center">
            <v-col cols="12">
              <v-select
                v-model="category_id"
                label="カテゴリ名"
                :items="items"
                item-text="name"
                item-value="value"
                required>
              ></v-select>
            </v-col>
            </v-row>
            <v-text-field
              v-model="item_price"
              label="値段"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-select
              v-model="item_stock"
              :items="num_items"
              label="数"
            ></v-select>
            <v-container fluid>
    
            <v-radio-group
              v-model="release"
              row
            >
              <v-radio
                label="公開"
                v-bind:value='true'
              ></v-radio>
              <v-radio
                label="非公開"
                v-bind:value='false'
              ></v-radio>
            </v-radio-group>

          </v-container>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         <div class="item-add-btn">
            <v-btn
              color="warning"
              dark
              @click="createItem"
            >
              商品を登録する
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>
</template>

<script>
import { API, graphqlOperation} from 'aws-amplify'
import { createItems } from '../graphql/mutations'
const maxAge = 100; //表示したい数字より+1で設定。
const numRange = [...Array(maxAge).keys()]

export default {
  data() {
    return {
    dialog: false,
    switch1: true,
    
    item_name: '',
    postData: {
      thumbnail: '',
    },
    category_id: '',
    item_price: '',
    num_items: numRange,
    item_stock: '',
    release: true,

    create_at: "",
    update_at: "",
    value: '',
    items: [
      {name:'弁当', value:'01'},
      {name:'サンドイッチ', value:'02'},
      {name:'サラダ', value:'03'},
      {name:'スープ', value:'04'}
    ],
    rules: [
      value => !!value || '必ず入力してください',
    ],
    }
  },
  
  methods: {
    changeImg (e) {
      this.thumbnail = e.target.files[0]
      console.log(this.thumbnail)
 
      if (this.thumbnail) {
        const reader = new FileReader()
        reader.onload = () => {
          this.postData.thumbnail = reader.result + ''
        }
        reader.readAsDataURL(this.thumbnail)
        console.log('選択完了')
      }
    },
    async createItem() {
      const addItem = {
        item_name: this.item_name,
        item_img: this.postData.thumbnail,
        category_id: this.category_id,
        item_price: this.item_price,
        item_stock: this.item_stock,
        release: this.release
      };
      await API.graphql(graphqlOperation(createItems, {input: addItem}))
      .then(response => {
          console.log(response);
          
      }).catch(error => {
          console.log(error)
      });
      setTimeout(() => {
        let url = '/itemlist'
        window.location.href = url
      }, 1000)
    },
  }
  
}
</script>

<style scoped>
.v-btn--fab.v-size--default {
  margin-left: 30px;
}
.add-btn{
  margin: 20px;
}
.item-add-btn{
  text-align: center;
}
.v-btn{
  font-weight: bold;
}
.v-card__actions{
  display: block;
}
.v-input__prepend-outer{
  text-align: right;
}
.v-card__title{
  justify-content: center;
  color: black;
}
.v-card__title span {
  font-weight: bold;

}
.file-wrap{
  margin: 30px 0 30px 0;
}
label {
  padding: 5px 20px;
  color: #ffffff;
  background-color: orange;
  cursor: pointer;
  border-radius:10px;
  transition: .3s;
  font-weight: bold;
}
label:hover {
  opacity: 0.8;
}
input[type="file"] {
  display: none;
}
.upload-img{
  width: 100px;
  height: 100px;
  margin: 10px 0 0 10px;
}
.upload-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.radio-group{
  margin-top: 30px;
}
</style>