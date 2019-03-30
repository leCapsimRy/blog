<template>
    <a-layout id="layout-header">
        <a-layout-header class="header">
            <Drawer></Drawer>
            <Menu></Menu>
        </a-layout-header>
    </a-layout>
</template>
<script>
import Menu from '../components/menu'
import Drawer from '../components/drawer'

export default {
    components:{
        Menu,
        Drawer,
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
#layout-header{
    background:rgba(0,0,0,0);
    .header{
        background:rgba(0,0,0,0);
    }
}
</style>

