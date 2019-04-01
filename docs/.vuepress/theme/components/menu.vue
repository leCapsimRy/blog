<template>
    <div 
    class="menu ant-menu ant-menu-horizontal"
    v-if="data.menus && data.menus.length">
        <span 
        v-for="(menu, index) in data.menus"
        :key="index"
        :data-value="menu.value" 
        :class="index==0?'check':''">
        <a :href="menu.url">{{ menu.name }}</a>
        </span>
        <span><a-icon type="search" class="search" /></span>
    </div>
</template>
<script>
export default {
    computed: {
        data() {
                return this.$page.frontmatter
            }
    }
}
</script>

<style lang="less" scoped>
.menu{
    line-height: 64px;
    float:right;
    border-bottom:0;
    span{
        padding:0 10px;
        cursor: pointer;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
        a{
            color:rgba(0, 0, 0, 0.65);
        }
    }
    span:hover{
        a{
            color:#1890ff;
        }
    }
    .check{
        a{
            color:#1890ff;
        }
     }
}
</style>

