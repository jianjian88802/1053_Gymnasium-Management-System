
var projectName = '海滨体育馆管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [

{
	name: '器材',
	url: './pages/qicai/list.html'
}, 

{
	name: '体育论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '体育资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot2yx3h/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"器材","menuJump":"列表","tableName":"qicai"}],"menu":"器材管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"器材借出","menuJump":"列表","tableName":"qicaijiechu"}],"menu":"器材借出管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"器材归还","menuJump":"列表","tableName":"qicaiguihai"}],"menu":"器材归还管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"器材分类","menuJump":"列表","tableName":"qicaifenlei"}],"menu":"器材分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"校队签到","menuJump":"列表","tableName":"xiaoduiqiandao"}],"menu":"校队签到管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"进入登记","menuJump":"列表","tableName":"jinrudengji"}],"menu":"进入登记管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"离开登记","menuJump":"列表","tableName":"likaidengji"}],"menu":"离开登记管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"活动预约","menuJump":"列表","tableName":"huodongyuyue"}],"menu":"活动预约管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"灯光保修","menuJump":"列表","tableName":"dengguangbaoxiu"}],"menu":"灯光保修管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"体育论坛","tableName":"forum"}],"menu":"体育论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"体育资讯","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"器材列表","menuJump":"列表","tableName":"qicai"}],"menu":"器材模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"器材","menuJump":"列表","tableName":"qicai"}],"menu":"器材管理"},{"child":[{"buttons":["查看","新增"],"menu":"器材借出","menuJump":"列表","tableName":"qicaijiechu"}],"menu":"器材借出管理"},{"child":[{"buttons":["查看","新增"],"menu":"器材归还","menuJump":"列表","tableName":"qicaiguihai"}],"menu":"器材归还管理"},{"child":[{"buttons":["查看","新增"],"menu":"校队签到","menuJump":"列表","tableName":"xiaoduiqiandao"}],"menu":"校队签到管理"},{"child":[{"buttons":["查看","新增"],"menu":"进入登记","menuJump":"列表","tableName":"jinrudengji"}],"menu":"进入登记管理"},{"child":[{"buttons":["查看","新增"],"menu":"离开登记","menuJump":"列表","tableName":"likaidengji"}],"menu":"离开登记管理"},{"child":[{"buttons":["查看","新增"],"menu":"活动预约","menuJump":"列表","tableName":"huodongyuyue"}],"menu":"活动预约管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"器材列表","menuJump":"列表","tableName":"qicai"}],"menu":"器材模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
