<template>
  <v-row justify="left">
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
              label="商品名"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-file-input
              label="画像"
              accept="image/*"
            ></v-file-input>
            <v-row align="center">
              <!-- <v-col cols="12"> -->
                <v-select
                  v-model="value"
                  label="カテゴリ名"
                  :items="items"
                  item-text="name"
                  item-value="value"
                  required>
                ></v-select>
              <!-- </v-col> -->
            </v-row>
            <v-text-field
              label="値段"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
          </div>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         <div class="item-add-btn">
            <v-btn
              color="warning"
              dark
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
  export default {
    data: () => ({
      dialog: false,
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
    }),
    
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
</style>