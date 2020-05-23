(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{jeFy:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),s=n.n(t),c=n("dsAS"),p=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("7ljp")),b=n("sx3M");var o={_frontmatter:{}},m=b.a;function i(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(p.b)(m,Object.assign({},o,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("h2",null,"Grid System"),Object(p.b)("p",null,"OAH UI Grid like bootstrap grid the different in use here we use javaScript functions and React Component"),Object(p.b)("p",null,"Grid system use this variables."),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// this default grid system"),"\n\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," gridSize ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"12"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// grid column number"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," gridGutter ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"24"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"//padding 24 (12px on each side of a column)"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// default breakpoints"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," breakpoints ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  xs",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  is",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"400"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  sm",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"576"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  md",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"768"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  lg",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"992"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1200"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xxl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1400"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xxxl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1600"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," maxContainer ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  is",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"380"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  sm",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"540"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  md",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"720"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  lg",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"960"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1140"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xxl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1320"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  xxxl",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1500"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("h3",null,"Customize"),Object(p.b)("p",null,"To customize this variables you need to send your values with theme settings\nsorry for now you can't customize breakpoints but will work on it"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"jsx"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-jsx"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// here you can pass variables"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"ThemeProvider"))," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"theme"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"themes"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"theme",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," dir",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," gridSize",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token number"}),"10"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," gridGutter",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token number"}),"30")," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n  "),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Layout"))," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"dir"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"dir",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"ThemeProvider")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.b)("h2",null,"Breakpoint functions"),Object(p.b)("p",null,"OAH themes have 4 breakpoint functions to use simply in styled components"),Object(p.b)("h4",null,"breakpointUp"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," css ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'styled-components'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," breakpointUp ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'oah-ui'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Example: Hide starting at `min-width: 0`, and then show at the `md` breakpoint"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," Component ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"div",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n  display: none;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"breakpointUp"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'md'"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n    display: block;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("h4",null,"breakpointDown"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," css ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'styled-components'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," breakpointDown ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'oah-ui'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Example: Hide from `xxxl`, and then show at the `md` breakpoint to `min-width: 0;`"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," Component ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"div",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n  display: none;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"breakpointDown"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'md'"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n    display: block;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("h4",null,"breakpointBetween"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," css ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'styled-components'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," breakpointBetween ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'oah-ui'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Example: show in width between 768 and 1200 this take lower breakpoint, upper breakpoint"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," Component ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"div",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n  display: none;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"breakpointBetween"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'md'"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'xl'"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n    display: block;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("h4",null,"breakpointOnly"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(p.b)("pre",Object.assign({parentName:"div"},{className:"language-js"}),Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," css ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'styled-components'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," breakpointOnly ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'oah-ui'"),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Example: show in width between 768 and 991 from md to under lg"),"\n",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," Component ",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," styled",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"div",Object(p.b)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n  display: none;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"breakpointOnly"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"'md'"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-string"}),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n    display: block;\n  "),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token string"}),"\n"),Object(p.b)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(p.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("h2",null,"Related Articles"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object.assign({parentName:"li"},{href:"/components/grid"}),"Grid Components"),".")))}i.isMDXComponent=!0;var r=n("1Yd/"),j=n("rQZ2");a.default=function(){return s.a.createElement(c.K,null,s.a.createElement(r.a,{title:"Grid System"}),s.a.createElement(c.p,{breakPoint:{xs:12}},s.a.createElement(j.a,null,s.a.createElement(i,null))))}},rQZ2:function(e,a,n){"use strict";var t=n("vOnD"),s=n("dsAS"),c=t.d.div.withConfig({displayName:"GuideStyle",componentId:"sc-1myfg2q-0"})(["","{padding:2rem;& > *:last-child{margin-bottom:0;& *:last-child{margin-bottom:0;}}}ul{margin-bottom:1.5rem;ul{padding-left:2.5rem;list-style-type:none;& > li{text-indent:-5px;position:relative;margin-bottom:0;&::before{content:'-';position:absolute;left:-1.25rem;}}}li{font-size:0.9375rem;line-height:1.5;margin-bottom:1.5rem;}}"],s.i);a.a=c},sx3M:function(e,a,n){"use strict";var t=n("q1tI"),s=n.n(t),c=n("7ljp"),p=n("Wbzz"),b=n("dsAS"),o=n("vOnD"),m=Object(o.d)(b.h).withConfig({displayName:"style__MdxLayoutStyle",componentId:"p38842-0"})(["",""],(function(e){var a=e.theme;return Object(o.c)(["margin-bottom:1rem;.note{padding:1.25rem 3rem 1.5rem 1.25rem;border-radius:0.25rem;margin-bottom:3rem;.note-title{font-weight:500;text-transform:uppercase;margin-bottom:1.5rem;}.note-body{font-size:0.875rem;line-height:1.5;}&.note-info,&.note-info p{color:",";background-color:#f0f6ff;}&.note-warning{color:",";background-color:#fffae4;}}.color-swatch{display:inline-block;border:1px solid black;width:0.875rem;height:0.875rem;margin-left:7px;margin-bottom:-2px;border-radius:2px;}p{font-size:",";line-height:1.5;}a{color:",";font-weight:",";text-decoration:none;&:hover{color:",";text-decoration:underline;}}.menu-items > .menu-item{margin-bottom:0.5rem;font-weight:bold;a:hover{font-weight:bold;text-decoration:none;}li{font-size:0.875rem;font-weight:normal;}li.menu-group{font-weight:bold;padding-top:1.25rem;padding-bottom:1rem;}}"],a.colorInfo600,a.colorWarning600,a.textParagraphFontSize,a.linkTextColor,a.cardTextFontWeight,a.linkTextHoverColor)})),i=function(e){var a=e.href,n=e.children;return/^\/(?!\/)/.test(a)?s.a.createElement(p.Link,{to:a},n):s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n)};a.a=function(e){var a=e.children;return s.a.createElement(c.a,{components:{a:i}},s.a.createElement(m,null,s.a.createElement(b.i,null,a)))}}}]);
//# sourceMappingURL=component---src-pages-guides-grid-system-tsx-8502c1d8de05666a4e9d.js.map