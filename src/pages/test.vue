<template>
  <v-menu
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-2"
            v-bind="attrs"
            v-on="on"
          >
            A Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="() => {}"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            title: '編集',
          },
          {
            title: '削除',
          },
          
        ],
        
      }
    },
  }
</script>