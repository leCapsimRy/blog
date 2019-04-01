<template>
  <div class="theme-container">
    <Loading v-if="display"></Loading>
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
      display:true
    }
  },
  components:{
    Loading,
    Header,
    Container
  },
  created() {
    this.display=true;
  },
  mounted() {
    this.display=false;
  }
}
</script>

