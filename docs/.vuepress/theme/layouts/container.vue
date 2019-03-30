<template>
    <a-layout id="layout-container">
        <a-layout-content class="container">
            <a-button type="primary">这里是container</a-button>  
        </a-layout-content>
    </a-layout>
</template>
<style lang="less" scoped>
#layout-container{
    background:rgba(0,0,0,0);
    .container{
        background:rgba(0,0,0,0);
        height:calc(~'100vh - 64px');
    }
}
</style>
