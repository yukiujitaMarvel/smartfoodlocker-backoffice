<template>
  <amplify-authenticator>
    <div>
      My App
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator>
</template>

<script>
import { Hub } from 'aws-amplify'
export default {
  created() {
    Hub.listen('auth', this.listener)
  },
  destroyed() {
    Hub.remove('auth', this.listener)
  },
  methods: {
    listener(data){
      console.log(data)
      if(data.payload.event == 'signIn') {
        this.$router.push('/')
      }
    }
  }
}
</script>