<template>
    <div class="menu ant-menu ant-menu-horizontal">
        <span data-value="home" class="check">首页</span>
        <span data-value="blog">博客</span>
        <span data-value="feelings">故事与酒</span>
        <span><a-icon type="search" class="search" /></span>
    </div>
</template>
<style lang="less" scoped>
.menu{
    line-height: 64px;
    float:right;
    border-bottom:0;
    span{
        padding:0 10px;
        cursor: pointer;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    span:hover{
        color:#1890ff;
    }
    .check{
        color:#1890ff;
     }
}
</style>

