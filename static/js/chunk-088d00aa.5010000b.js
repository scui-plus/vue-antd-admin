(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-088d00aa"],{"52bb":function(o,c,r){},"7c75":function(o,c,r){"use strict";r("52bb")},e842:function(o,c,r){"use strict";r.r(c);var t=function(){var o=this,c=o._self._c;return c("div",{staticStyle:{"text-align":"center","margin-top":"48px"}},[c("color-checkbox-group",{staticStyle:{display:"inline-block"},attrs:{defaultValues:["1","3","4"],multiple:!0},on:{change:o.changeColor}},[c("color-checkbox",{attrs:{color:"rgb(245, 34, 45)",value:"1"}}),c("color-checkbox",{attrs:{color:"rgb(250, 84, 28)",value:"2"}}),c("color-checkbox",{attrs:{color:"rgb(250, 173, 20)",value:"3"}}),c("color-checkbox",{attrs:{color:"rgb(19, 194, 194)",value:"4"}}),c("color-checkbox",{attrs:{color:"rgb(82, 196, 26)",value:"5"}}),c("color-checkbox",{attrs:{color:"rgb(24, 144, 255)",value:"6"}}),c("color-checkbox",{attrs:{color:"rgb(47, 84, 235)",value:"7"}}),c("color-checkbox",{attrs:{color:"rgb(114, 46, 209)",value:"8"}}),c("color-checkbox",{attrs:{color:"rgb(256, 0, 0)",value:"9"}}),c("color-checkbox",{attrs:{color:"rgb(0, 256, 0)",value:"10"}}),c("color-checkbox",{attrs:{color:"rgb(0, 0, 256)",value:"11"}}),c("color-checkbox",{attrs:{color:"rgb(256, 256, 0)",value:"12"}})],1),c("div"),c("div",{staticClass:"view-color",style:{backgroundColor:o.color}})],1)},l=[],a=(r("d3b7"),r("0643"),r("4e3e"),r("159b"),r("59d6")),e=a["a"].Group,n={name:"Palette",data:function(){return{color:"rgb(245, 34, 45)"}},components:{ColorCheckbox:a["a"],ColorCheckboxGroup:e},methods:{changeColor:function(o,c){this.color=this.calculateColor(c)},calculateColor:function(o){var c,r=0,t=0,l=0;return o.forEach((function(o){c=o.split("(")[1].split(")")[0].split(","),r=Math.max(r,parseInt(c[0])),t+=Math.max(t,parseInt(c[1])),l+=Math.max(l,parseInt(c[2]))})),"rgb("+r+","+t+","+l+")"}}},b=n,s=(r("7c75"),r("2877")),u=Object(s["a"])(b,t,l,!1,null,"04b61512",null);c["default"]=u.exports}}]);