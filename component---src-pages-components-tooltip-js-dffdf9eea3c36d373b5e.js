(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{266:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(1),l=t(245),m=t(249),o=(t(5),t(6),t(3),t(9),t(26),t(125)),r=t(246);var p=function(){return s.a.createElement(c.Card,{size:"XS"},s.a.createElement("header",null,"Popover Placement"),s.a.createElement(c.CardBody,{id:"scrollPlacementId"},["start","end","right","top","left","bottom"].map((function(e){return s.a.createElement(c.Tooltip,{key:e,eventListener:"#scrollPlacementId",className:"with-margin inline-block",trigger:"hint",placement:e,content:"Hello",icon:"ion-ios-home"},s.a.createElement(c.Button,{fullWidth:!0},e))}))))};var u=function(){return s.a.createElement(c.Card,{size:"XS"},s.a.createElement("header",null,"Popover Trigger"),s.a.createElement(c.CardBody,{id:"scrollTriggerId"},["click","hover","focus","hint"].map((function(e){return s.a.createElement(c.Tooltip,{key:e,eventListener:"#scrollTriggerId",className:"with-margin inline-block",trigger:e,placement:"top",icon:"ion-ios-home"},s.a.createElement(c.Button,{fullWidth:!0},e))}))))};var i=function(){return s.a.createElement(c.Card,{size:"XS"},s.a.createElement("header",null,"Popover Status"),s.a.createElement(c.CardBody,{id:"scrollStatusId"},["Info","Success","Danger","Primary","Warning"].map((function(e){return s.a.createElement(c.Tooltip,{key:e,eventListener:"#scrollStatusId",className:"with-margin inline-block",trigger:"hint",placement:"top",content:"hello",status:e},s.a.createElement(c.Button,{fullWidth:!0},e))}))))},E=t(247);var k={},N=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).layout=E.a,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},k,t),components:a},s.a.createElement(o.MDXTag,{name:"h2",components:a},"Tooltip"),s.a.createElement(o.MDXTag,{name:"p",components:a},"Powerful Tooltip Component, which provides the best UX for your users."),s.a.createElement("div",{className:"note note-info"},s.a.createElement("div",{className:"note-title"},"Note"),s.a.createElement("div",{className:"note-body"},s.a.createElement("p",null,"The pest hard work in OAH UI Tooltip component placement will be changes automatically with clockwise if default placement hide any popover content and if no placement will cover popover content will choose the best one to show the most of contents"))),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Usage"),s.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},s.a.createElement("pre",{className:"language-js"},s.a.createElement("code",{className:"language-js"},s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," Tooltip ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token comment"},"//or"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," Tooltip ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui/Tooltip'"),s.a.createElement("span",{className:"token punctuation"},";")))),s.a.createElement(o.MDXTag,{name:"p",components:a},"Tooltip has different placements, such as: top, bottom, left, right, start and end which can be used as following:"),s.a.createElement(r.a,{code:s.a.createElement("div",{className:"gatsby-highlight"},s.a.createElement("pre",{className:"language-jsx"},s.a.createElement("code",null,s.a.createElement("span",{className:"token keyword"},"import")," React ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'react'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," Card",s.a.createElement("span",{className:"token punctuation"},",")," CardBody",s.a.createElement("span",{className:"token punctuation"},",")," Button",s.a.createElement("span",{className:"token punctuation"},",")," Tooltip ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"function")," ",s.a.createElement("span",{className:"token function"},"Placement"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token punctuation"},")")," ",s.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",s.a.createElement("span",{className:"token keyword"},"return")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Card"))," ",s.a.createElement("span",{className:"token attr-name"},"size"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"XS",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"Popover Placement"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"CardBody"))," ",s.a.createElement("span",{className:"token attr-name"},"id"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"scrollPlacementId",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","        "),s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("span",{className:"token punctuation"},"["),s.a.createElement("span",{className:"token string"},"'start'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'end'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'right'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'top'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'left'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'bottom'"),s.a.createElement("span",{className:"token punctuation"},"]"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",{className:"token function"},"map"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token parameter"},"place")," ",s.a.createElement("span",{className:"token operator"},"=>")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","          ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"key"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"place",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"eventListener"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"#scrollPlacementId",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"className"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"with-margin inline-block",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"trigger"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"hint",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"placement"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"place",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"content"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"Hello",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"icon"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"ion-ios-home",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","          ",s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","            "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Button"))," ",s.a.createElement("span",{className:"token attr-name"},"fullWidth"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token punctuation"},"{"),"place",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Button")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","          "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"CardBody")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","    "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Card")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"export")," ",s.a.createElement("span",{className:"token keyword"},"default")," Placement",s.a.createElement("span",{className:"token punctuation"},";"),"\n")))},s.a.createElement(p,null)),s.a.createElement(o.MDXTag,{name:"p",components:a},"Tooltip has a number of triggers which provides an ability to show and hide the component in different ways:"),s.a.createElement(o.MDXTag,{name:"ul",components:a},s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Click mode shows the component when a user clicks on the host element and hides when the user clicks somewhere on the document outside the component.")),s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Hint provides capability to show the component when the user hovers over the host element and hide when the user hovers out of the host.")),s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Hover works like hint mode with one exception - when the user moves mouse from host element to the container element the component remains open, so that it is possible to interact with it content.")),s.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},s.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"Focus mode is applied when user focuses the element."))),s.a.createElement(r.a,{code:s.a.createElement("div",{className:"gatsby-highlight"},s.a.createElement("pre",{className:"language-jsx"},s.a.createElement("code",null,s.a.createElement("span",{className:"token keyword"},"import")," React ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'react'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," Card",s.a.createElement("span",{className:"token punctuation"},",")," CardBody",s.a.createElement("span",{className:"token punctuation"},",")," Button",s.a.createElement("span",{className:"token punctuation"},",")," Tooltip ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"function")," ",s.a.createElement("span",{className:"token function"},"Trigger"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token punctuation"},")")," ",s.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",s.a.createElement("span",{className:"token keyword"},"return")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Card"))," ",s.a.createElement("span",{className:"token attr-name"},"size"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"XS",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"Popover Trigger"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"CardBody"))," ",s.a.createElement("span",{className:"token attr-name"},"id"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"scrollTriggerId",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","        "),s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("span",{className:"token punctuation"},"["),s.a.createElement("span",{className:"token string"},"'click'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'hover'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'focus'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'hint'"),s.a.createElement("span",{className:"token punctuation"},"]"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",{className:"token function"},"map"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token parameter"},"trigger")," ",s.a.createElement("span",{className:"token operator"},"=>")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","          ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"key"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"trigger",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"eventListener"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"#scrollTriggerId",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"className"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"with-margin inline-block",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"trigger"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"trigger",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"placement"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"top",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"icon"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"ion-ios-home",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","          ",s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","            "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Button"))," ",s.a.createElement("span",{className:"token attr-name"},"fullWidth"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token punctuation"},"{"),"trigger",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Button")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","          "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"CardBody")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","    "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Card")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"export")," ",s.a.createElement("span",{className:"token keyword"},"default")," Trigger",s.a.createElement("span",{className:"token punctuation"},";"),"\n")))},s.a.createElement(u,null)),s.a.createElement(o.MDXTag,{name:"p",components:a},"It is also possible to specify tooltip color using ",s.a.createElement("code",{className:"language-text"},"status"),":"),s.a.createElement(r.a,{code:s.a.createElement("div",{className:"gatsby-highlight"},s.a.createElement("pre",{className:"language-jsx"},s.a.createElement("code",null,s.a.createElement("span",{className:"token keyword"},"import")," React ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'react'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token keyword"},"import")," ",s.a.createElement("span",{className:"token punctuation"},"{")," Card",s.a.createElement("span",{className:"token punctuation"},",")," CardBody",s.a.createElement("span",{className:"token punctuation"},",")," Button",s.a.createElement("span",{className:"token punctuation"},",")," Tooltip ",s.a.createElement("span",{className:"token punctuation"},"}")," ",s.a.createElement("span",{className:"token keyword"},"from")," ",s.a.createElement("span",{className:"token string"},"'oah-ui'"),s.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"function")," ",s.a.createElement("span",{className:"token function"},"Status"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token punctuation"},")")," ",s.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",s.a.createElement("span",{className:"token keyword"},"return")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Card"))," ",s.a.createElement("span",{className:"token attr-name"},"size"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"XS",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"Popover Status"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),"header"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"CardBody"))," ",s.a.createElement("span",{className:"token attr-name"},"id"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"scrollStatusId",s.a.createElement("span",{className:"token punctuation"},'"')),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","        "),s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("span",{className:"token punctuation"},"["),s.a.createElement("span",{className:"token string"},"'Info'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'Success'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'Danger'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'Primary'"),s.a.createElement("span",{className:"token punctuation"},",")," ",s.a.createElement("span",{className:"token string"},"'Warning'"),s.a.createElement("span",{className:"token punctuation"},"]"),s.a.createElement("span",{className:"token punctuation"},"."),s.a.createElement("span",{className:"token function"},"map"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token parameter"},"state")," ",s.a.createElement("span",{className:"token operator"},"=>")," ",s.a.createElement("span",{className:"token punctuation"},"("),"\n","          ",s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"key"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"state",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"eventListener"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"#scrollStatusId",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"className"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"with-margin inline-block",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"trigger"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"hint",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"placement"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"top",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"content"),s.a.createElement("span",{className:"token attr-value"},s.a.createElement("span",{className:"token punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},'"'),"hello",s.a.createElement("span",{className:"token punctuation"},'"')),"\n","            ",s.a.createElement("span",{className:"token attr-name"},"status"),s.a.createElement("span",{className:"token script language-javascript"},s.a.createElement("span",{className:"token script-punctuation punctuation"},"="),s.a.createElement("span",{className:"token punctuation"},"{"),"state",s.a.createElement("span",{className:"token punctuation"},"}")),"\n","          ",s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","            "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"<"),s.a.createElement("span",{className:"token class-name"},"Button"))," ",s.a.createElement("span",{className:"token attr-name"},"fullWidth"),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token punctuation"},"{"),"state",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Button")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","          "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Tooltip")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token plain-text"},"\n","      "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"CardBody")),s.a.createElement("span",{className:"token punctuation"},">")),s.a.createElement("span",{className:"token plain-text"},"\n","    "),s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token tag"},s.a.createElement("span",{className:"token punctuation"},"</"),s.a.createElement("span",{className:"token class-name"},"Card")),s.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},";"),"\n",s.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",s.a.createElement("span",{className:"token keyword"},"export")," ",s.a.createElement("span",{className:"token keyword"},"default")," Status",s.a.createElement("span",{className:"token punctuation"},";"),"\n")))},s.a.createElement(i,null)),s.a.createElement(o.MDXTag,{name:"h3",components:a},"Note"),s.a.createElement("div",{className:"note note-warning"},s.a.createElement("div",{className:"note-title"},"Warning!"),s.a.createElement("div",{className:"note-body"},"Please note that ",s.a.createElement("strong",null,"it is not possible")," to add Tooltip component outside Layout component to work with Layout event")))},n}(s.a.Component),g=t(248),d=t(250),h=[{name:"trigger",type:"string",description:"Describes when the container will be shown. Available options: click, hover, hint, focus and it Required"},{name:"placement",type:"string",description:"Position will be calculated relatively host element based on the position. Can be top, right, bottom, left, start or end. and it Required"},{name:"content",type:"any",description:"Tooltip message"},{name:"icon",type:"string",description:"icon css classes"},{name:"status",type:"string",description:"adds specific styles first letter capital: Primary, Info, Success, Warning, Danger"},{name:"children",type:"any",description:"this target content can be button link any thing and it Required"},{name:"eventListener",type:"function",description:"component have eventListener to scrollArea but if you want to add eventListener to any other container just pass value that accepted in `querySelector` id: #scroll class: .scroll"},{name:"className",type:"string",description:"You can pass any css class to modify style"},{name:"style",type:"object",description:"You can pass any css object to modify style"}];function y(){return s.a.createElement(c.Row,null,s.a.createElement(l.a,{title:"Tooltip Component",keywords:["OAH","application","react"]}),s.a.createElement(c.Col,{xs:12},s.a.createElement(m.a,{title:"Tooltip Component"},s.a.createElement(N,null),s.a.createElement(g.a,{name:"Tooltip",props:h}),s.a.createElement(d.a,{keys:["tooltip"]}))))}t.d(a,"default",(function(){return y}))}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-js-dffdf9eea3c36d373b5e.js.map