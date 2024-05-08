(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{352:function(t,a,s){t.exports=s.p+"assets/img/admin-layout.538ade29.png"},353:function(t,a,s){t.exports=s.p+"assets/img/page-layout.a45de70f.png"},354:function(t,a,s){t.exports=s.p+"assets/img/common-layout.1680e466.png"},355:function(t,a,s){t.exports=s.p+"assets/img/tabs-view.64ed8eb1.png"},356:function(t,a,s){t.exports=s.p+"assets/img/page-view.5fe6cc90.png"},357:function(t,a,s){t.exports=s.p+"assets/img/blank-view.d5483c86.png"},390:function(t,a,s){"use strict";s.r(a);var n=s(18),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),n("p",[t._v("页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。")]),t._v(" "),n("h2",{attrs:{id:"admin-的布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#admin-的布局"}},[t._v("#")]),t._v(" Admin 的布局")]),t._v(" "),n("p",[t._v("在 Vue Antd Admin 中，我们抽离了使用过程中一些常用的布局，都放在 layouts 目录中，分别为：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/AdminLayout.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdminLayout"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("管理后台布局")]),t._v("，包含了头部导航，侧边导航、内容区和页脚，一般用于后台系统的整体布局")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(352),alt:"admin-layout"}})]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/PageLayout.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("PageLayout"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("页面布局")]),t._v("，包含了页头和内容区，常用于需要页头（包含面包屑、标题、额外操作等）的页面")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(353),alt:"page-layout"}})]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/CommonLayout.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonLayout"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("通用布局")]),t._v("，仅包含内容区和页脚的简单布局，项目中常用于注册、登录或展示页面")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(354),alt:"common-layout"}})]),t._v(" "),n("h2",{attrs:{id:"admin-的视图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#admin-的视图"}},[t._v("#")]),t._v(" Admin 的视图")]),t._v(" "),n("p",[t._v("在 Vue Antd Admin 中，除了基本布局外，通常有很多页面的结构是相似的。因此，我们把这部分结构抽离为视图组件。"),n("br"),t._v("\n一个视图组件通常包含一个基本布局组件、视图公共区块、路由视图内容区、页脚等，常常结合路由配置使用。它们也被放入了 layouts 目录中，分别为：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/TabsView.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("TabsView"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("多页签视图")]),t._v("，包含了 AdminLayout 布局、多页签头和路由视图内容区")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(355),alt:"tabs-view"}})]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/PageView.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("PageView"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("页面视图")]),t._v("，包含了 PageLayout 布局和路由视图内容区")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(356),alt:"page-view"}})]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/BlankView.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("BlankView"),n("OutboundLink")],1),t._v(" / "),n("strong",[t._v("空白视图")]),t._v("，仅包含一个路由视图内容区")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(357),alt:"blank-view"}})]),t._v(" "),n("h2",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),n("p",[t._v("通常我们会把视图组件和路由配置结合一起使用，我们把配置信息抽离在路由配置文件中 "),n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/router/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/router/config.js"),n("OutboundLink")],1),t._v(" 。如下：")]),t._v(" "),n("div",{staticClass:"language-jsx line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'表单页'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    icon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PageView"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'基础表单'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/pages/form/basic/BasicForm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("p",[t._v("当然，如果这满足不了你的需求，你也可以自定义一些视图组件，或者直接在页面组件中使用布局。参考\n"),n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/pages/dashboard/workplace/WorkPlace.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("workplace"),n("OutboundLink")],1),t._v(" 页面:")]),t._v(" "),n("div",{staticClass:"language-vue line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("page-layout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":avatar")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("currUser.avatar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("headerContent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$t('timeFix')}}，{{currUser.name}}，{{$t('welcome')}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{$t('position')}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extra"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head-info")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("split-right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$t("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("56"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head-info")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("split-right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$t("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("ranking"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8/24"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head-info")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("split-right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$t("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("visit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2,223"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("page-layout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h2",{attrs:{id:"其它布局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它布局组件"}},[t._v("#")]),t._v(" 其它布局组件")]),t._v(" "),n("p",[t._v("除了 Admin 里的内建布局以外，在一些页面中需要进行布局，还可以使用 Ant Design Vue 提供的布局组件：Grid 和 Layout。")]),t._v(" "),n("h3",{attrs:{id:"grid-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grid-组件"}},[t._v("#")]),t._v(" Grid 组件")]),t._v(" "),n("p",[t._v("栅格布局是网页中最常用的布局，其特点就是按照一定比例划分页面，能够随着屏幕的变化依旧保持比例，从而具有弹性布局的特点。")]),t._v(" "),n("p",[t._v("而 Ant Design Vue 的栅格组件提供的功能更为强大，能够设置间距、具有支持响应式的比例设置，以及支持 flex 模式，基本上涵盖了大部分的布局场景，详情查看："),n("a",{attrs:{href:"https://www.antdv.com/components/grid-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grid"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"layout-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#layout-组件"}},[t._v("#")]),t._v(" Layout 组件")]),t._v(" "),n("p",[t._v("如果你需要辅助页面框架级别的布局设计，那么 Layout 则是你最佳的选择，它抽象了大部分框架布局结构，使得只需要填空就可以开发规范专业的页面整体布局，详情查看："),n("a",{attrs:{href:"https://www.antdv.com/components/layout-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Layout"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"根据不同场景区分抽离布局组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据不同场景区分抽离布局组件"}},[t._v("#")]),t._v(" 根据不同场景区分抽离布局组件")]),t._v(" "),n("p",[t._v("在大部分场景下，我们需要基于上面两个组件封装一些适用于当下具体业务的组件，包含了通用的导航、侧边栏、顶部通知、页面标题等元素。例如 Vue Antd Admin 的 "),n("a",{attrs:{href:"https://github.com/iczer/vue-antd-admin/blob/master/src/layouts/AdminLayout.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdminLayout"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("通常，我们会把抽象出来的布局组件，放到 layouts 文件夹中方便管理。需要注意的是，这些布局组件和我们平时使用的其它组件并没有什么不同，只不过功能性上是为了处理布局问题而单独归类。")])])}),[],!1,null,null,null);a.default=r.exports}}]);