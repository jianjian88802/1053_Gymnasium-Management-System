import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import xiaoduiqiandao from '@/views/modules/xiaoduiqiandao/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import qicaiguihai from '@/views/modules/qicaiguihai/list'
    import qicaifenlei from '@/views/modules/qicaifenlei/list'
    import dengguangbaoxiu from '@/views/modules/dengguangbaoxiu/list'
    import huodongyuyue from '@/views/modules/huodongyuyue/list'
    import forum from '@/views/modules/forum/list'
    import likaidengji from '@/views/modules/likaidengji/list'
    import jinrudengji from '@/views/modules/jinrudengji/list'
    import qicai from '@/views/modules/qicai/list'
    import config from '@/views/modules/config/list'
    import qicaijiechu from '@/views/modules/qicaijiechu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '体育资讯',
        component: news
      }
      ,{
	path: '/xiaoduiqiandao',
        name: '校队签到',
        component: xiaoduiqiandao
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/qicaiguihai',
        name: '器材归还',
        component: qicaiguihai
      }
      ,{
	path: '/qicaifenlei',
        name: '器材分类',
        component: qicaifenlei
      }
      ,{
	path: '/dengguangbaoxiu',
        name: '灯光保修',
        component: dengguangbaoxiu
      }
      ,{
	path: '/huodongyuyue',
        name: '活动预约',
        component: huodongyuyue
      }
      ,{
	path: '/forum',
        name: '体育论坛',
        component: forum
      }
      ,{
	path: '/likaidengji',
        name: '离开登记',
        component: likaidengji
      }
      ,{
	path: '/jinrudengji',
        name: '进入登记',
        component: jinrudengji
      }
      ,{
	path: '/qicai',
        name: '器材',
        component: qicai
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/qicaijiechu',
        name: '器材借出',
        component: qicaijiechu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
