(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a20cedb0"],{"694d":function(t,e,i){"use strict";i("c9c4")},7832:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"exception-page"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.config[t.type].img}})]),e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.config[t.type].title))]),e("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),e("div",{staticClass:"action"},[e("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回首页")])],1)])])},c=[],a=(i("14d9"),{403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}}),o=a,n={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:o}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}},p=n,r=(i("694d"),i("2877")),h=Object(r["a"])(p,s,c,!1,null,"206e07da",null);e["a"]=h.exports},a42a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("exception-page",{style:"min-height: ".concat(t.minHeight),attrs:{"home-route":"/dashboard/workplace",type:"404"}})},c=[],a=i("5530"),o=i("7832"),n=i("5880"),p={name:"Exp404",components:{ExceptionPage:o["a"]},computed:Object(a["a"])(Object(a["a"])({},Object(n["mapState"])("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},r=p,h=i("2877"),g=Object(h["a"])(r,s,c,!1,null,"2c852621",null);e["default"]=g.exports},c9c4:function(t,e,i){}}]);