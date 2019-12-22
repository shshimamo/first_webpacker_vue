<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
    <div class="message">
      <img class="img" src="../images/logo.png" /><br>
      This is a page 2
    </div>
    <router-link to="/">前のページへ</router-link>
  </div>
</template>

<script>
  export default {
    name: 'global_footer',
    props: {
      msg: "ページ1"
    }
  }
</script>

<style scoped lang="scss">
  .footer{
    background: aliceblue;
  }
  .message{
    margin: 0.2em;
    margin: 1em;
    padding: 1em;
    background: #EFEFEF;
    border: solid darkred;
  }
  img{
    background-image: image-url('/cat.png');
  }
</style>
