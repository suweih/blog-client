webpackJsonp([9],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o=n("Dd8w"),a=n.n(o),i=n("NYxO"),s=n("p+dL"),u="/auth/register",c="/auth/login",l="/auth/logout",d="/auth",g={register:function(t){var e=t.username,n=t.password;return Object(s.a)(u,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(s.a)(c,"POST",{username:e,password:n})},logout:function(){return localStorage.removeItem("token"),Object(s.a)(l)},getInfo:function(){return Object(s.a)(d)}};window.auth=g;var f={data:function(){return{}},computed:a()({},Object(i.c)(["isLogin","user"])),methods:a()({},Object(i.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}}),created:function(){this.checkLogin()}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[t._v("Let's shaer")]),t._v(" "),n("p",[t._v("精品博客")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Let's shaer")])],1),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-edit"})]),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("This is my first VUE project")])])}]};var v={name:"App",components:{Header:n("VU/8")(f,p,!1,function(t){n("qlaF")},null,null).exports,Footer:n("VU/8")(null,h,!1,function(t){n("l7KQ")},"data-v-fccd79a4",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var b=n("VU/8")(v,m,!1,function(t){n("fgrz")},null,null).exports,L=n("/ocq"),w=n("Xxa5"),_=n.n(w),I=n("exGp"),E=n.n(I),k={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,o=e.password;return g.login({username:r,password:o}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,o=e.username,a=e.password;return E()(_.a.mark(function t(){var e;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.register({username:o,password:a});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return E()(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return E()(_.a.mark(function t(){var o;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.prev=2,t.next=5,g.getInfo();case 5:if(o=t.sent,n("setLogin",{isLogin:o.isLogin}),o.isLogin){t.next=9;break}return t.abrupt("return",!1);case 9:return n("setUser",{user:o.data}),t.abrupt("return",!0);case 13:return t.prev=13,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,e,[[2,13]])}))()}}};n("ZYmg");r.default.use(i.a);var x=new i.a.Store({modules:{auth:k,blog:{state:{},getters:{},mutations:{},actions:{}}}});window.store=x,r.default.use(L.a);var T=new L.a({routes:[{path:"/",component:function(){return n.e(1).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(4).then(n.bind(null,"OpX7"))}},{path:"/detail/:blogId",component:function(){return n.e(0).then(n.bind(null,"YE8u"))}},{path:"/edit/:blogId",component:function(){return n.e(7).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return n.e(2).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return n.e(6).then(n.bind(null,"bywM"))}},{path:"/my",component:function(){return n.e(5).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(3).then(n.bind(null,"YDhy"))}}]});T.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?x.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})},function(){n({path:"/login",query:{redirect:t.fullPath}})}):n()});var O=T,A=n("zL8q"),j=n.n(A),y=(n("tvR6"),n("pFYg")),D=n.n(y);function U(t){var e=("object"===(void 0===t?"undefined":D()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var q={install:function(t,e){t.prototype.friendlyDate=U}};r.default.use(j.a),r.default.config.productionTip=!1,r.default.use(q),new r.default({el:"#app",router:O,store:x,components:{App:b},template:"<App/>"})},ZYmg:function(t,e,n){"use strict";var r=n("p+dL"),o={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"};e.a={getBlogs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},e=t.page,n=void 0===e?1:e,a=t.userId,i=t.atIndex;return Object(r.a)(o.GET_LIST,"GET",{page:n,userId:a,atIndex:i})},getIndexBlogs:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,e=void 0===t?1:t;return this.getBlogs({page:e,atIndex:!0})},getBlogsByUserId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=e.page,r=void 0===n?1:n,o=e.atIndex;return this.getBlogs({userId:t,page:r,atIndex:o})},getDetail:function(t){var e=t.blogId;return Object(r.a)(o.GET_DETAIL.replace(":blogId",e))},updateBlog:function(t,e){var n=t.blogId,a=e.title,i=e.content,s=e.description,u=e.atIndex;return Object(r.a)(o.UPDATE.replace(":blogId",n),"PATCH",{title:a,content:i,description:s,atIndex:u})},deleteBlog:function(t){var e=t.blogId;return Object(r.a)(o.DELETE.replace(":blogId",e),"DELETE")},createBlog:function(t){var e=t.title,n=void 0===e?"":e,a=t.content,i=void 0===a?"":a,s=t.description,u=void 0===s?"":s,c=t.atIndex,l=void 0!==c&&c;return Object(r.a)(o.CREATE,"POST",{title:n,content:i,description:u,atIndex:l})}}},fgrz:function(t,e){},l7KQ:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=u;var r=n("//Fk"),o=n.n(r),a=n("mtWM"),i=n.n(a),s=n("zL8q");n.n(s);function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new o.a(function(r,o){var a={url:t,method:e};"get"===e.toLowerCase()?a.params=n:a.data=n,localStorage.token&&(i.a.defaults.headers.common.Authorization=localStorage.token),i()(a).then(function(t){console.log(t.data),"ok"===t.data.status?(t.data.token&&(localStorage.token=t.data.token),r(t.data)):(s.Message.error(t.data.msg),o(t.data))}).catch(function(t){s.Message.error("网络异常"),o({msg:"网络异常"})})})}i.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.a.defaults.baseURL="//blog-server.hunger-valley.com",window.request=u},qlaF:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a76ce24a6075322daefd.js.map