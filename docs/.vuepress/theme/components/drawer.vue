<template>
  <div class="logo">
    <a-icon type="bars" class="bars" @click="showMe" />
    <a class="text">杯酒故事</a>
    <a-drawer
    placement="left"
    :closable="false"
    @close="onClose"
    :visible="visible">
        <div id="search-box">
            <a-icon 
            type="search" 
            style=
            "color:#bfbfbf;
            float:left;
            position:relative;
            top:9px;" />
            <a-select
            showSearch
            :value="value"
            placeholder="请输入文章标题 ..."
            style="width:194px;float:left;"
            :defaultActiveFirstOption="false"
            :showArrow="false"
            :filterOption="false"
            @search="handleSearch"
            @change="handleChange"
            :notFoundContent="null">
                <a-select-option 
                v-for="d in data" 
                :key="d.value">
                    {{d.text}}
                </a-select-option>
            </a-select>
        </div>
        <h2>关于我</h2>
        <div class="avatar">
            <img src="https://thumbnail10.baidupcs.com/thumbnail/1c04e5cbac17dcdeba46858f19b8a293?fid=3459852807-250528-711562429621590&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-2GQ1CzpZDvpR6h4l3NOU2XtDI1g%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2073648665867677557&dp-callid=0&time=1553994000&size=c1920_u1080&quality=90&vuk=3459852807&ft=image&autopolicy=1" alt="">
        </div>
        <p class="introduce">I am Shao XI, a freelance writer and poet. I like to collect interesting pictures and put them together to prove each other and to express as much meaning and subtlety as I can. I hope my story can be liked by everyone.</p>
        <p class="copyright">©2018-2019</br> All Rights Reserved</br>黑ICP备18002691号</br>黑公网安备 23011002000137号</p>
    </a-drawer>
  </div>
</template>
<script>
// 模糊搜索效果
import jsonp from 'fetch-jsonp'
import querystring from 'querystring'


let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default {
    data() {
        return {
            data: [],
            value: undefined,
            visible:false,
            bottom:10,
        }
  },
    methods: {
        showMe() {
          this.visible = true
        },
        onClose() {
          this.visible = false;
        },
        handleSearch (value) {
            fetch(value, data => this.data = data);
        },
        handleChange (value) {
            console.log(value)
            this.value = value
            fetch(value, data => this.data = data);
        },
    }
}
</script>
<style lang="less" scoped>
.logo{
            height: 31px;
            color:#000;
            margin:16px 28px 16px 0;
            float: left;
            line-height: 31px;
            .bars{
                font-size:18px;
                cursor: pointer;
                margin-right: 10px;
            }
            .text{
                font-size:1.459em;
                color:#000;
            }
        }
</style>
