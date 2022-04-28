import VueRouter from 'vue-router'

//导入组件
import appHomepage from '../components/appHomepage'

//配置当前项目的路由路径
const routes = [
    //  如果浏览器地址是 ：/foo,我就将  组件 Foo 打开
    { path: '/', component: appHomepage,name:'appHomepage',
      children:[
      ]
  },
]

// 3. 创建 router 实例,并将其暴露出去
// // 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
  routes
})
