<template>
  <div class="theme-container">
    <Loading :dis="dis"></Loading>
    <Header></Header>
    <Container></Container >
    <!-- <Content/> -->
  </div>
</template>
<script>
import Loading from './components/loading'
import Header from './layouts/header'
import Container from './layouts/container'
export default {
  data() {
    return {
      dis:true
    }
  },
  components:{
    Loading,
    Header,
    Container
  },
  mounted() {
    this.dis=false;
  }
}
</script>

