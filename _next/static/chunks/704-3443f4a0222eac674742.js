(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{3892:function(e,n,t){"use strict";var r=t(5893),i=t(1163),a=t(4983),o=t(5712),s=t(6763),c=t(4943),l=t(5766),u=t(9574);n.Z=function(e){var n=e.children,t=e.allPosts,d=(0,i.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{fixed:"top",inverted:!0,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(a.Z.Item,{as:"a",header:!0,onClick:function(){return d.push("/")},children:[(0,r.jsx)(s.Z,{size:"mini",src:"/assets/MainHUD_Heroes.png",style:{marginRight:"1.5em"}})," Characters"]}),(0,r.jsx)(a.Z.Item,{as:"a",onClick:function(){return d.push("/items")},children:"Items"}),(0,r.jsx)(a.Z.Item,{as:"a",onClick:function(){return d.push("/missions")},children:"Missions"}),(0,r.jsx)(a.Z.Item,{as:"a",onClick:function(){return d.push("/wiki/about")},children:"About"}),(0,r.jsx)(c.Z,{item:!0,simple:!0,text:"Wiki pages",children:(0,r.jsx)(c.Z.Menu,{children:t.map((function(e){return(0,r.jsx)(c.Z.Item,{onClick:function(){return d.push("/wiki/".concat(e.slug))},children:e.title},e.slug)}))})})]})}),(0,r.jsx)(o.Z,{style:{paddingTop:"7em"},children:n}),(0,r.jsx)(l.Z,{inverted:!0,vertical:!0,style:{margin:"2em 0em 0em",padding:"1.5em 0em"},children:(0,r.jsxs)(o.Z,{textAlign:"center",children:[(0,r.jsxs)(u.Z,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[(0,r.jsx)(u.Z.Item,{as:"a",href:"https://discord.gg/SzkVaFJCa5",children:"Official Discord"}),(0,r.jsx)(u.Z.Item,{as:"a",href:"https://tpgames.co/g3t",children:"Official Forums"}),(0,r.jsx)(u.Z.Item,{as:"a",href:"https://tpgames.co/4f6fc",children:"Official Game FAQs"}),(0,r.jsx)(u.Z.Item,{as:"a",href:"https://github.com/TemporalAgent7/LegendsDataCore",children:"This project's GitHub"})]}),(0,r.jsx)("p",{style:{fontSize:"0.75em"},children:"Note: Assets and some text elements like names and descriptions are owned by Tilting Point or their licensors. This project is not associated with nor endorsed by Tilting Point, Emerald City Games, or ViacomCBS."})]})})]})}},9394:function(e,n,t){"use strict";t.d(n,{S:function(){return C}});var r=t(5893),i=t(4699),a=t(7329),o=t(7294),s=t(1300),c=t(416),l=t(5382),u=t(8237),d=t(4943),f=t(4616),h=t(3409);function m(e,n){var t=n.field,r=n.direction,i=e,a=n.keepSortOptions||!1;return!a&&n.rotateFields&&"descending"===n.direction&&(t=function(e,n){var t=n.indexOf(e)+1,r=t===n.length?0:t;return n[r]}(t,n.rotateFields)),a||(r=g(r)),n.secondary&&(n.secondary.direction=null===n.secondary.direction?g(null):n.secondary.direction,n.secondary.direction=!0===a?n.secondary.direction:g(n.secondary.direction)),i=n.secondary?i.sort((function(e,r){return function(e,n,t,r){if(!isNaN(e)&&!isNaN(n)&&!isNaN(t)&&!isNaN(r))return e-n||t-r;return(e>n?1:n>e?-1:0)||(t>r?1:r>t?-1:0)}(v(e,t),v(r,t),v("ascending"===n.secondary.direction?e:r,n.secondary.field),v("ascending"===n.secondary.direction?r:e,n.secondary.field))})):i.sort((function(e,n){return function(e,n){if(!isNaN(e)&&!isNaN(n))return e-n;return e>n?1:n>e?-1:0}(v(e,t),v(n,t))})),"descending"===r&&i.reverse(),{field:t,direction:r,result:i}}function v(e,n){return n.split(".").reduce((function(e,n){return(e||{b:0})[n]}),e)}function g(e){return"ascending"===e?"descending":"ascending"}var p=t(9483),y={rememberForever:!1,useDefault:!1,useAndStoreDefault:!1},x=function(e,n,t){t||(t=y);var r=o.useState((function(){return t.useAndStoreDefault?(j(e,n,t.rememberForever),n):t.useDefault?n:w(e,n,t.rememberForever)})),a=(0,i.Z)(r,2),s=a[0],c=a[1];return o.useEffect((function(){j(e,s,t.rememberForever)}),[s]),[s,c]},j=function(e,n,t){t?p.setItem(e,JSON.stringify(n)):sessionStorage.setItem(e,JSON.stringify(n))},w=function(e,n,t){var r=t?p.getItem(e):sessionStorage.getItem(e);return r&&"string"==typeof r?JSON.parse(r):n},Z=t(7265),b=[{key:"0",value:"Exact",text:"Exact match only"},{key:"1",value:"Whole word",text:"Whole word only"},{key:"2",value:"Any match",text:"Match any text"}],k=[{key:"0",value:"10",text:"10"},{key:"1",value:"25",text:"25"},{key:"2",value:"50",text:"50"},{key:"3",value:"100",text:"100"}],C=function(e){var n=(0,a.Z)(e.data),t=e.id?e.id:"",o="",v=!1,g=new URLSearchParams(window.location.search);g.has("search")&&(o=g.get("search"),v=!0);var p=x(t+"searchFilter",o,{useAndStoreDefault:v}),y=(0,i.Z)(p,2),j=y[0],w=y[1],C=x(t+"filterType","Any match"),S=(0,i.Z)(C,2),N=S[0],A=S[1],I=x(t+"column",null),O=(0,i.Z)(I,2),F=O[0],E=O[1],L=x(t+"direction",null),R=(0,i.Z)(L,2),D=R[0],P=R[1],T=x(t+"paginationRows",10),_=(0,i.Z)(T,2),H=_[0],M=_[1],z=x(t+"paginationPage",1),W=(0,i.Z)(z,2),J=W[0],G=W[1];function U(e,t){var r={field:e,direction:D};t?(t.includes(F)?r.field=F:r.direction=null,r.rotateFields=t):e!==F&&(r.direction="ascending");var i=m(n,r);E(i.field),P(i.direction),G(1)}function B(e){w(e),G(1)}if(F){var V={field:F,direction:D,keepSortOptions:!0},Q=m((0,a.Z)(e.data),V);n=Q.result}var $=[];j&&j.split(/\s+OR\s+/i).forEach((function(e){$.push(Z.parse(e))}));n=n.filter((function(n){return e.filterRow(n,$,N)}));var q=J,K=Math.ceil(n.length/H);q>K&&(q=K),n=n.slice(H*(q-1),H*q);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c.Z,{style:{width:"50%"},iconPosition:"left",placeholder:"Search...",value:j,onChange:function(e,n){return B(n.value)},children:[(0,r.jsx)("input",{}),(0,r.jsx)(l.Z,{name:"search"}),(0,r.jsx)(u.Z,{icon:!0,onClick:function(){return B("")},children:(0,r.jsx)(l.Z,{name:"delete"})})]}),e.showFilterOptions&&(0,r.jsx)("span",{style:{paddingLeft:"2em"},children:(0,r.jsx)(d.Z,{inline:!0,options:b,value:N,onChange:function(e,n){var t=n.value;return A(t)}})}),(0,r.jsx)(f.Z,{wide:!0,trigger:(0,r.jsx)(l.Z,{name:"help"}),header:"Advanced search",content:e.explanation?e.explanation:(0,r.jsx)("div",{children:(0,r.jsxs)("p",{children:["Search for characters by name or tag (with optional '-' for exclusion). For example, ",(0,r.jsx)("b",{children:"TODO: examples"})]})})}),(0,r.jsxs)(s.Z,{sortable:!0,celled:!0,selectable:!0,striped:!0,collapsing:!0,unstackable:!0,compact:"very",children:[(0,r.jsx)(s.Z.Header,{children:function(n,t){return(0,r.jsx)(s.Z.Row,{children:e.config.map((function(e,i){var a;return(0,r.jsxs)(s.Z.HeaderCell,{width:e.width,sorted:e.pseudocolumns&&e.pseudocolumns.includes(n)||n===e.column?t:null,onClick:function(){return U(e.column,e.pseudocolumns)},children:[e.title,(null===(a=e.pseudocolumns)||void 0===a?void 0:a.includes(n))&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:n})]})]},i)}))})}(F,D)}),(0,r.jsx)(s.Z.Body,{children:n.map((function(n,t){return e.renderTableRow(n,t)}))}),(0,r.jsx)(s.Z.Footer,{children:(0,r.jsx)(s.Z.Row,{children:(0,r.jsxs)(s.Z.HeaderCell,{colSpan:e.config.length,children:[(0,r.jsx)(h.Z,{totalPages:K,activePage:q,onPageChange:function(e,n){var t=n.activePage;return G(t)}}),(0,r.jsxs)("span",{style:{paddingLeft:"2em"},children:["Rows per page:"," ",(0,r.jsx)(d.Z,{inline:!0,options:k,value:H,onChange:function(e,n){var t=n.value;G(1),M(t)}})]})]})})})]})]})}},214:function(e,n,t){"use strict";function r(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(c)throw o}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t){if(0==n.length)return!0;var i,a={Exact:function(e,n){return e.toLowerCase()==n.toLowerCase()},"Whole word":function(e,n){return new RegExp("\\b"+n+"\\b","i").test(e)},"Any match":function(e,n){return e.toLowerCase().indexOf(n.toLowerCase())>=0}}[t],o=!1,s=r(n);try{for(s.s();!(i=s.n()).done;){var c=i.value,l=!0;if(0===c.conditionArray.length){var u,d=r(c.textSegments);try{var f=function(){var n=u.value,t=a(e.locName,n.text)||e.tags.some((function(e){return a(e,n.text)}))||e.bridgeStations.some((function(e){return a(e,n.text)}));l=l&&(n.negated?!t:t)};for(d.s();!(u=d.n()).done;)f()}catch(j){d.e(j)}finally{d.f()}}else{var h,m=[],v=r(c.conditionArray);try{var g=function(){var n=h.value,t=!0;if("name"===n.keyword)t=a(e.locName,n.value);else if("tag"===n.keyword)t=e.tags.some((function(e){return a(e,n.value)}));else if("rarity"===n.keyword){if(!n.negated)return m.push(Number.parseInt(n.value)),"continue";t=e.computed_rarity===Number.parseInt(n.value)}l=l&&(n.negated?!t:t)};for(v.s();!(h=v.n()).done;)g()}catch(j){v.e(j)}finally{v.f()}m.length>0&&(l=l&&m.includes(e.computed_rarity));var p,y=r(c.textSegments);try{var x=function(){var n=p.value,t=a(e.locName,n.text)||e.tags.some((function(e){return a(e,n.text)}));l=l&&(n.negated?!t:t)};for(y.s();!(p=y.n()).done;)x()}catch(j){y.e(j)}finally{y.f()}}if(l){o=!0;break}}}catch(j){s.e(j)}finally{s.f()}return o}function o(e,n,t){if(0==n.length)return!0;var i,a={Exact:function(e,n){return e.toLowerCase()==n.toLowerCase()},"Whole word":function(e,n){return new RegExp("\\b"+n+"\\b","i").test(e)},"Any match":function(e,n){return e.toLowerCase().indexOf(n.toLowerCase())>=0}}[t],o=!1,s=r(n);try{for(s.s();!(i=s.n()).done;){var c=i.value,l=!0;if(0===c.conditionArray.length){var u,d=r(c.textSegments);try{for(d.s();!(u=d.n()).done;){var f=u.value,h=a(e.locName,f.text)||a(e.locDescription,f.text);l=l&&(f.negated?!h:h)}}catch(b){d.e(b)}finally{d.f()}}else{var m,v=[],g=r(c.conditionArray);try{for(g.s();!(m=g.n()).done;){var p=m.value,y=!0;if("name"===p.keyword)y=a(e.locName,p.value);else if("rarity"===p.keyword){if(!p.negated){v.push(Number.parseInt(p.value));continue}y=e.computed_rarity===Number.parseInt(p.value)}l=l&&(p.negated?!y:y)}}catch(b){g.e(b)}finally{g.f()}v.length>0&&(l=l&&v.includes(e.computed_rarity));var x,j=r(c.textSegments);try{for(j.s();!(x=j.n()).done;){var w=x.value,Z=a(e.locName,w.text)||a(e.locDescription,w.text);l=l&&(w.negated?!Z:Z)}}catch(b){j.e(b)}finally{j.f()}}if(l){o=!0;break}}}catch(b){s.e(b)}finally{s.f()}return o}t.d(n,{k:function(){return a},C:function(){return o}})}}]);