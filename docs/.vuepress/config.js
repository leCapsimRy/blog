module.exports = {
    title: '杯酒故事 - 邵十一的博客', // 设置网站标题
    description: '我有故事，你有酒么？', //描述
    dest: './dist',   // 设置输出目录
    base:'/blog/',
    port: 2233, //端口
    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "./favicon.ico" }]
   ],
    themeConfig: { //主题配置
      avatar:'http://beijiu.ink/wp-content/uploads/2018/05/微信图片_20180427155534.jpg',
      about:'我是邵十一，一个自由作家和诗人。我喜欢收集有意境的照片与我的作品摆在一处相互印证，尽可能的表达出我所理解到的各自所要表达的意义与精妙。希望我的故事能够得到大家的喜欢。',
      menus:[
        {name:'首页',value:'home',url:'/'},
        {name:'博客',value:'blog',url:'/vblog/'},
        {name:'故事与酒',value:'feelings',url:'/'}
      ],
      links:[
        {name:'github',url:'/'},
        {name:'weibo',url:'/'},
        {name:'instagram',url:'/'}
      ],
      categories:[
        {name:'古韵',url:'/'},
        {name:'当下',url:'/'},
        {name:'斗酒话评',url:'/'},
        {name:'酒巷小调',url:'/'}
      ],
      copyright1: '©2018-2019',
      copyright2: 'All Rights Reserved by Dr.Cycle',
      copyright3: '黑ICP备18002691号',
      copyright4: '黑公网安备 23011002000137号',
    }
  }