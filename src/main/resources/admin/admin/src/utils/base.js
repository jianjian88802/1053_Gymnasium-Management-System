const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2yx3h/",
            name: "springboot2yx3h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2yx3h/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "海滨体育馆管理系统"
        } 
    }
}
export default base
