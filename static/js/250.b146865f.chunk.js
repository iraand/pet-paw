"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[250],{3439:function(e,t,n){n(2791);t.Z=n.p+"static/media/icons.f12380dd9d519a5ef343df67d3048d30.svg"},3671:function(e,t,n){n.d(t,{X:function(){return c}});n(2791);var a=n(6871),r=n(3439),s=n(184);function c(e){var t=(0,a.s0)();return(0,s.jsx)("button",{type:"button","aria-label":"Back",className:"button button-back",onClick:function(){return t(e.navigate)},children:(0,s.jsx)("svg",{className:"arrow arrow-back",viewBox:"0 0 12 20",children:(0,s.jsx)("use",{width:"12",height:"20",href:"".concat(r.Z,"#arrow-left-big")})})})}},1609:function(e,t,n){n.d(t,{h:function(){return h}});var a=n(4165),r=n(5861),s=n(885),c=n(2791),i=n(4569),u=n.n(i),o=n(1970),l=(n(6602),n(3439)),f=n(184),h=function(){var e=(0,c.useState)(""),t=(0,s.Z)(e,2),n=t[0],i=t[1],h=(0,c.useState)([]),p=(0,s.Z)(h,2),d=p[0],m=p[1],v=(0,c.useState)([]),b=(0,s.Z)(v,2),x=b[0],g=(b[1],function(e){i(e)});return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",e.next=3,u().get("https://api.thecatapi.com/v1/breeds/search?q=".concat(n));case 3:t=e.sent,m(t.data.map((function(e){return{value:e.id,label:e.name}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&n.length>1&&function(){e.apply(this,arguments)}()}),[n]),(0,f.jsxs)("div",{className:"header",children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,f.jsx)(o.Z,{cacheOptions:!0,loadOptions:function(){return new Promise((function(e){return setTimeout((function(){e(d)}),1e3)}))},defaultOptions:!0,onInputChange:g,placeholder:"Search for breeds by name",onChange:g,classNamePrefix:"react-select",className:"search-breeds"}),(0,f.jsx)("button",{className:"search-button",children:(0,f.jsx)("svg",{className:"search-icon",viewBox:"0 0 20 20",children:(0,f.jsx)("use",{width:"20",height:"20",href:"".concat(l.Z,"#find")})})})]}),(0,f.jsxs)("div",{className:"smiles",children:[(0,f.jsx)("button",{className:"smile-button",children:(0,f.jsx)("svg",{className:"smile-like",viewBox:"0 0 30 30",children:(0,f.jsx)("use",{width:"30",height:"30",href:"".concat(l.Z,"#smile-like")})})}),(0,f.jsx)("button",{className:"smile-button",children:(0,f.jsx)("svg",{className:"smile-love",viewBox:"0 0 30 26",children:(0,f.jsx)("use",{width:"30",height:"26",href:"".concat(l.Z,"#smile-love")})})}),(0,f.jsx)("button",{className:"smile-button",children:(0,f.jsx)("svg",{className:"smile-dislike",viewBox:"0 0 30 30",children:(0,f.jsx)("use",{width:"30",height:"30",href:"".concat(l.Z,"#smile-dislike")})})})]}),x.map((function(e,t){return(0,f.jsx)("img",{src:e.url,alt:e.name},t)}))]})}},5709:function(e,t,n){n.d(t,{c:function(){return s}});n(2791);var a=n(8622),r=n(184);function s(e){var t=[{value:5,label:"Limit: 5"},{value:10,label:"Limit: 10"},{value:15,label:"Limit: 15"},{value:20,label:"Limit: 20"}];return(0,r.jsx)(a.ZP,{defaultValue:t[1],options:t,onChange:function(t){return e.onChange(t.value)},classNamePrefix:"react-select",className:e.className})}},2364:function(e,t,n){n.d(t,{j:function(){return l}});var a=n(4165),r=n(2982),s=n(5861),c=n(885),i=n(2791),u=(n(4569),n(8622)),o=n(184),l=function(e){var t=(0,i.useState)([{value:"All breeds",label:"All breeds"}]),n=(0,c.Z)(t,2),l=n[0],f=n[1];return(0,i.useEffect)((function(){function e(){return e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("breeds"));case 2:t=e.sent,n=t.map((function(e){return{value:e.id,label:e.name}})),f((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))}));case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,o.jsx)(u.ZP,{value:e.value,defaultValue:e.defaultValue||l[0],options:l,onChange:function(t){return e.onChange(t)},classNamePrefix:"react-select",className:e.className,placeholder:e.placeholder})}},6602:function(e,t,n){n.d(t,{t:function(){return i}});var a=n(4165),r=n(5861),s=n(4569),c=n.n(s);function i(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={image_id:t,sub_id:"User-123"},e.next=4,c().post("https://api.thecatapi.com/v1/favourites",n);case 4:return r=e.sent,console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}},9501:function(e,t,n){var a=n(4165),r=n(5861),s=n(4569),c=n.n(s);function i(){return(i=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,s,i,u,o,l,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,r=t.order,s=t.page,i=t.type,u=t.uri,e.prev=1,o={limit:n,page:s-1,order:r,mime_types:i},c().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",e.next=6,c().get("https://api.thecatapi.com/v1/".concat(u),{params:o});case 6:return l=e.sent,f=l.headers["pagination-count"],e.abrupt("return",{response_data:l.data,pagination_count:f});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}t.Z=function(e){return i.apply(this,arguments)}},4918:function(e,t,n){function a(e){for(var t=[],n=0;n<e.length;n+=10)t.push(e.slice(n,n+10));return t}n.d(t,{Z:function(){return a}})},8622:function(e,t,n){var a=n(9421),r=n(7462),s=n(2791),c=n(9652),i=n(5671),u=n(3144),o=n(9340),l=n(5076),f=n(1688),h=n(76),p=n(5781),d=(n(4164),(0,s.forwardRef)((function(e,t){var n=(0,a.u)(e);return s.createElement(c.S,(0,r.Z)({ref:t},n))})));s.Component;t.ZP=d}}]);
//# sourceMappingURL=250.b146865f.chunk.js.map