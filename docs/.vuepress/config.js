module.exports = {
    title: '杯酒故事', // 设置网站标题
    description: '我有故事，你有酒么？', //描述
    dest: './dist',   // 设置输出目录
    base:'/',
    port: 2233, //端口
    plugins: {
      '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: true
      }
    },
    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/favicon.ico" }],
      ['link', { rel: 'apple-touch-icon', sizes: "200x200", href: "/images/icon/apple-icon.png" }],
      ['link', { rel: 'manifest', href: '/manifest.json',crossOrigin: 'use-credentials' }],
      ['meta', {name:'author', content: '邵十一(leCapsimRy, Dr.Cycle)'}],
      ['meta', {name:'keywords', content: '博客, 杯酒故事, 小说, 诗歌, 文学, 短篇, 中篇, 邵十一, leCapsimRy, Dr.Cycle, cycle, vue, vuepress, vuepress-theme, vuepress-theme-cycle'}],
      ['meta', {name:'viewport', content: 'initial-scale=1,maximum-scale=3,minimum-scale=1'}]
   ],
    theme:'cycle',
    themeConfig: { //主题配置
      avatar:'images/avatar.jpg',
      about:'我是邵十一，一个自由作家和诗人。我喜欢收集有意境的照片与我的作品摆在一处相互印证，尽可能的表达出我所理解到的各自所要表达的意义与精妙。希望我的故事能够得到大家的喜欢。',
      mail:'marsak@live.cn',
      wechat:'lecapsimry',
      subscription:'如果你也喜欢我的故事，请留下你的邮箱，以便于第一时间看到更新的故事。',
      id:'IAnNOYyMOUag6VRK7BOqnGiv-gzGzoHsz',
      key:'Htf6rewl561a8EUbdL9f8jIB',
      menus:[
        {name:'首页',value:'home',url:'/'},
        {name:'三杯',value:'blog',url:'/posts/'},
        {name:'两盏',value:'gallery',url:'/gallery/'},
        {name:'淡酒',value:'story',url:'/story/'}
      ],
      links:[
        {name:'github',url:'https://github.com/leCapsimRy/blog'},
        {name:'weibo',url:'https://weibo.com/DyrieNnn'},
        {name:'instagram',url:'/'}
      ],
      // categories:[
      //   {name:'古韵',url:'/posts/'},
      //   {name:'当下',url:'/posts/'},
      //   {name:'斗酒话评',url:'/posts/'},
      //   {name:'酒巷小调',url:'/posts/'}
      // ],
      footer: '© 2018-2019 🎐 杯酒故事',
      copyright: ''
    }
  }