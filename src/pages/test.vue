<template>
  <div>
    <v-text-field
        v-model="benched"
        type="number"
        label="個数"
        min="0"
        max="10"
      ></v-text-field>
  </div>
</template>

<script>
  export default {
    data: () => ({
      benched: 1,
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 7000
      },
    },
  }
</script>