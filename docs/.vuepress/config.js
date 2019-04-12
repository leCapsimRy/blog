module.exports = {
    title: '杯酒故事 - 邵十一的博客', // 设置网站标题
    description: '我有故事，你有酒么？', //描述
    dest: './dist',   // 设置输出目录
    // base:'/blog/',
    port: 2233, //端口
    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "./favicon.ico" }]
   ],
    theme:'cycle',
    themeConfig: { //主题配置
      avatar:'images/avatar.jpg',
      about:'我是邵十一，一个自由作家和诗人。我喜欢收集有意境的照片与我的作品摆在一处相互印证，尽可能的表达出我所理解到的各自所要表达的意义与精妙。希望我的故事能够得到大家的喜欢。',
      mail:'marsak@live.cn',
      wechat:'lecapsimry',
      subscription:'如果你也喜欢我的故事，请留下你的邮箱，以便于第一时间看到更新的故事。',
      menus:[
        {name:'首页',value:'home',url:'/'},
        {name:'博客',value:'blog',url:'/posts/'},
        {name:'画廊',value:'gallery',url:'/gallery/'},
        {name:'故事与酒',value:'story',url:'/story/'}
      ],
      links:[
        {name:'github',url:'https://github.com/leCapsimRy/blog'},
        {name:'weibo',url:'https://weibo.com/DyrieNnn'},
        {name:'instagram',url:'/'}
      ],
      categories:[
        {name:'古韵',url:'/posts/'},
        {name:'当下',url:'/posts/'},
        {name:'斗酒话评',url:'/posts/'},
        {name:'酒巷小调',url:'/posts/'}
      ],
      copyright1: '©2018-2019',
      copyright2: 'All Rights Reserved by Dr.Cycle',
      copyright3: '黑ICP备18002691号',
      copyright4: '黑公网安备 23011002000137号',
    }
  }