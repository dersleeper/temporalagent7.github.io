(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{3892:function(e,t,n){"use strict";var i=n(5893),r=n(1163),s=n(4983),l=n(5712),a=n(6763),o=n(4943),c=n(5766),u=n(9574);t.Z=function(e){var t=e.children,n=e.allPosts,d=(0,r.useRouter)();return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{fixed:"top",inverted:!0,children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(s.Z.Item,{as:"a",header:!0,onClick:function(){return d.push("/")},children:[(0,i.jsx)(a.Z,{size:"mini",src:"/assets/MainHUD_Heroes.png",style:{marginRight:"1.5em"}})," Characters"]}),(0,i.jsx)(s.Z.Item,{as:"a",onClick:function(){return d.push("/tools")},children:"Player Tools"}),(0,i.jsx)(s.Z.Item,{as:"a",onClick:function(){return d.push("/items")},children:"Items"}),(0,i.jsx)(s.Z.Item,{as:"a",onClick:function(){return d.push("/missions")},children:"Missions"}),(0,i.jsx)(s.Z.Item,{as:"a",onClick:function(){return d.push("/wiki/about")},children:"About"}),(0,i.jsx)(o.Z,{item:!0,simple:!0,text:"Wiki pages",children:(0,i.jsx)(o.Z.Menu,{children:n.map((function(e){return(0,i.jsx)(o.Z.Item,{onClick:function(){return d.push("/wiki/".concat(e.slug))},children:e.title},e.slug)}))})})]})}),(0,i.jsx)(l.Z,{style:{paddingTop:"7em"},children:t}),(0,i.jsx)(c.Z,{inverted:!0,vertical:!0,style:{margin:"2em 0em 0em",padding:"1.5em 0em"},children:(0,i.jsxs)(l.Z,{textAlign:"center",children:[(0,i.jsxs)(u.Z,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[(0,i.jsx)(u.Z.Item,{as:"a",href:"https://discord.gg/SzkVaFJCa5",children:"Official Discord"}),(0,i.jsx)(u.Z.Item,{as:"a",href:"https://tpgames.co/g3t",children:"Official Forums"}),(0,i.jsx)(u.Z.Item,{as:"a",href:"https://tpgames.co/4f6fc",children:"Official Game FAQs"}),(0,i.jsx)(u.Z.Item,{as:"a",href:"https://github.com/TemporalAgent7/LegendsDataCore",children:"This project's GitHub"})]}),(0,i.jsx)("p",{style:{fontSize:"0.75em"},children:"Note: Assets and some text elements like names and descriptions are owned by Tilting Point or their licensors. This project is not associated with nor endorsed by Tilting Point, Emerald City Games, or ViacomCBS."})]})})]})}},900:function(e,t,n){"use strict";var i=n(4575),r=n(3913),s=n(2205),l=n(8585),a=n(9754);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return l(this,n)}}var c=n(5318);t.__esModule=!0,t.default=void 0;var u=c(n(7294)),d=c(n(7947)),h={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p=function(e){s(n,e);var t=o(n);function n(){return i(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||h[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:m.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e,": ",t)),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:m.h1},e):null,u.default.createElement("div",{style:m.desc},u.default.createElement("h2",{style:m.h2},t,"."))))}}]),n}(u.default.Component);t.default=p,p.displayName="ErrorPage",p.getInitialProps=f,p.origGetInitialProps=f;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},6147:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var i=n(5893),r=n(9008),s=n(1163),l=n(2918),a=(n(7294),n(9445)),o=n(3892),c=!0;t.default=function(e){var t=e.post,n=e.allPosts,c=(0,s.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,i.jsx)("div",{children:(0,i.jsx)(o.Z,{allPosts:n,children:c.isFallback?(0,i.jsx)(a.Z,{as:"h1",children:"Loading..."}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsxs)("title",{children:["Star Trek: Legends Wiki - ",t.title]}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(a.Z,{as:"h1",children:t.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})}):(0,i.jsx)(l.default,{statusCode:404})}},1315:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wiki/[slug]",function(){return n(6147)}])},2918:function(e,t,n){e.exports=n(900)}},function(e){e.O(0,[774,351,299],(function(){return t=1315,e(e.s=t);var t}));var t=e.O();_N_E=t}]);