(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"748I":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),s=t.n(n),o=t("dsAS"),c=(t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("7ljp")),l=t("sx3M");var i={_frontmatter:{}},b=l.a;function r(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(c.b)(b,Object.assign({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Install Based on Starter Kit"),Object(c.b)("p",null,"Starting OAH UI from ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/AhmedElywa/oah-admin"}),"oah-admin")," starter kit is the easiest way to run your first OAH UI application."),Object(c.b)("p",null,"Please note, that ",Object(c.b)("strong",{parentName:"p"},"oah-admin")," is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects.\nIf you want the data to be dynamic, you should consider developing a backend integration by your own.\nThe OAH UI team doesn't consider providing generic integration layer as a part of this project because every backend API has a different structure in terms of data format and URLs."),Object(c.b)("h2",null,"Install tools"),Object(c.b)("p",null,"To install oah-admin on your machine you need to have the following tools installed:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Git - ",Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://git-scm.com"}),"https://git-scm.com")),Object(c.b)("li",{parentName:"ul"},"Node.js - ",Object(c.b)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org"}),"https://nodejs.org")," Please note the ",Object(c.b)("strong",{parentName:"li"},"version")," should be ",Object(c.b)("strong",{parentName:"li"},">=8")),Object(c.b)("li",{parentName:"ul"},"Npm - Node.js package manager, comes with Node.js. Please make sure npm ",Object(c.b)("strong",{parentName:"li"},"version")," is ",Object(c.b)("strong",{parentName:"li"},">=5")),Object(c.b)("li",{parentName:"ul"},"You might also need some specific native packages depending on your operating system like ",Object(c.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"build-essential")," on Ubuntu")),Object(c.b)("div",{className:"note note-warning"},Object(c.b)("div",{className:"note-title"},"Warning!"),Object(c.b)("div",{className:"note-body"},"Please note that ",Object(c.b)("strong",null,"it is not possible")," to build oah-admin",Object(c.b)("strong",null," without these tools")," and it will not be possible because of the way how React is built.")),Object(c.b)("h2",null,"Download the code"),Object(c.b)("p",null,"When you completed tools setup, you need to download the code of ",Object(c.b)("strong",{parentName:"p"},"oah-admin")," application. The easiest way to do that is to clone GitHub repository:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"git")," clone https://github.com/AhmedElywa/oah-admin.git"))),Object(c.b)("p",null,"After clone is completed, you need to install npm modules:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token builtin class-name"}),"cd")," oah-admin ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"&&")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," i ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")))),Object(c.b)("div",{className:"note note-warning"},Object(c.b)("div",{className:"note-title"},"Warning!"),Object(c.b)("div",{className:"note-body"},"Please make sure that installation process successfully completed without errors.")),Object(c.b)("h2",null,"Run local copy"),Object(c.b)("p",null,"To run a local copy in development mode, execute:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," run dev ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")," dev"))),Object(c.b)("p",null,"Go to ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"http://localhost:8000"}),"http://localhost:8000")," in your browser."),Object(c.b)("h2",null,"Production bundle"),Object(c.b)("p",null,"To create a bundle in production mode, execute:"),Object(c.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(c.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," run build ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"||")," ",Object(c.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")," build"))),Object(c.b)("p",null,"This will clear up your ",Object(c.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"public")," folder (where release files are located) and generate a release build.\nNow you can copy the sources from the ",Object(c.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"public")," folder and use it with any backend frameworks"))}r.isMDXComponent=!0;var m=t("1Yd/"),p=t("rQZ2");a.default=function(){return s.a.createElement(o.I,null,s.a.createElement(m.a,{title:"Install Based on Starter Kit"}),s.a.createElement(o.n,{breakPoint:{xs:12}},s.a.createElement(p.a,null,s.a.createElement(r,null))))}},rQZ2:function(e,a,t){"use strict";var n=t("vOnD"),s=t("dsAS"),o=n.d.div.withConfig({displayName:"GuideStyle",componentId:"sc-1myfg2q-0"})(["","{padding:2rem;& > *:last-child{margin-bottom:0;& *:last-child{margin-bottom:0;}}}ul{margin-bottom:1.5rem;ul{padding-left:2.5rem;list-style-type:none;& > li{text-indent:-5px;position:relative;margin-bottom:0;&::before{content:'-';position:absolute;left:-1.25rem;}}}li{font-size:0.9375rem;line-height:1.5;margin-bottom:1.5rem;}}"],s.i);a.a=o}}]);
//# sourceMappingURL=component---src-pages-guides-install-based-on-starter-kit-tsx-ba3f482521f488e92811.js.map