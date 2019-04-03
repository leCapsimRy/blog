<template>
  <div class="theme-container">
    <Loading :dis="dis"></Loading>
    <Header></Header>
    <Container v-if="isHome"></Container >
    <VBlog v-else-if="isBlog"></VBlog>
    <!-- <Content/> -->
  </div>
</template>
<script>
import Loading from './components/loading'
import Header from './layouts/header'
import Container from './layouts/container'
import VBlog from './vblog/index'
export default {
  data() {
    return {
      dis:true
    }
  },
  components:{
    Loading,
    Header,
    Container,
    VBlog
  },
  mounted() {
    this.dis=false;
    console.log(this.$site);
  },
  computed:{
    isHome() {
      return this.$page.path === '/';
    },
    isBlog() {
      return this.$page.path === '/vblog/';
    }
  }
}
</script>

