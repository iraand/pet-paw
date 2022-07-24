"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[630],{3439:function(e,t,n){n(2791);t.Z=n.p+"static/media/icons.785553fa1f748a60debee1e4f840adb6.svg"},3671:function(e,t,n){n.d(t,{X:function(){return c}});n(2791);var a=n(6871),s=n(3439),r=n(184);function c(e){var t=(0,a.s0)();return(0,r.jsx)("button",{type:"button","aria-label":"Back",className:"button button-back",onClick:function(){return t(e.navigate)},children:(0,r.jsx)("svg",{className:"arrow arrow-back",viewBox:"0 0 12 20",children:(0,r.jsx)("use",{width:"12",height:"20",href:"".concat(s.Z,"#arrow-left-big")})})})}},8552:function(e,t,n){n.d(t,{h:function(){return x}});var a=n(4165),s=n(5861),r=n(885),c=n(2791),i=n(3504),l=n(6871),o=n(4569),u=n.n(o),h=n(1970),d=n(3439),m=n(184),f=function(e){var t=e.handleClose,n=e.show,a=e.children,s=n?"hamburger-menu move-to":"hamburger-menu move-from";return(0,m.jsx)("div",{className:s,children:(0,m.jsxs)("section",{className:"modal-menu",children:[a,(0,m.jsx)("button",{type:"button",onClick:t,className:"button button-close-menu",children:(0,m.jsx)("svg",{className:"close-menu",viewBox:"0 0 26 26",children:(0,m.jsx)("use",{width:"26",height:"26",href:"".concat(d.Z,"#close-menu")})})})]})})},v=n(8155),x=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],o=t[1],x=(0,c.useState)(""),p=(0,r.Z)(x,2),b=p[0],j=p[1],g=(0,c.useState)([]),N=(0,r.Z)(g,2),w=N[0],Z=N[1],_=(0,c.useState)(!1),k=(0,r.Z)(_,2),y=k[0],S=k[1],O=(0,l.s0)();return(0,c.useEffect)((function(){function e(){return(e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",e.next=3,u().get("https://api.thecatapi.com/v1/breeds/search?q=".concat(n));case 3:t=e.sent,Z(t.data.map((function(e){return{value:e.id,label:e.name}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&n.length>1&&function(){e.apply(this,arguments)}()}),[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"header",children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)(h.Z,{value:b,cacheOptions:!0,loadOptions:function(){return new Promise((function(e){return setTimeout((function(){e(w)}),1e3)}))},defaultOptions:!0,onInputChange:function(e){o(e)},placeholder:"Search for breeds by name",onChange:function(e){j(e.value),O("/search/".concat(e.value))},classNamePrefix:"react-select",className:"search-breeds"}),(0,m.jsx)("button",{className:"search-button",children:(0,m.jsx)("svg",{className:"search-icon",viewBox:"0 0 20 20",children:(0,m.jsx)("use",{width:"20",height:"20",href:"".concat(d.Z,"#find")})})})]}),(0,m.jsxs)("div",{className:"smiles",children:[(0,m.jsx)("div",{to:"/",className:"menu-burger",children:(0,m.jsx)("button",{className:"smile-button",onClick:function(){return S(!0)},children:(0,m.jsx)("svg",{className:"burger",viewBox:"0 0 30 18",children:(0,m.jsx)("use",{width:"30",height:"18",href:"".concat(d.Z,"#burger")})})})}),(0,m.jsx)(i.OL,{to:"/likes","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-like",viewBox:"0 0 30 30",children:(0,m.jsx)("use",{width:"30",height:"30",href:"".concat(d.Z,"#smile-like")})})})}),(0,m.jsx)(i.OL,{to:"/favourites","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-love",viewBox:"0 0 30 26",children:(0,m.jsx)("use",{width:"30",height:"26",href:"".concat(d.Z,"#smile-love")})})})}),(0,m.jsx)(i.OL,{to:"/dislikes","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-dislike",viewBox:"0 0 30 30",children:(0,m.jsx)("use",{width:"30",height:"30",href:"".concat(d.Z,"#smile-dislike")})})})})]})]}),(0,m.jsxs)(f,{show:y,handleClose:function(){return S(!1)},children:[(0,m.jsxs)(i.OL,{to:v.OO,"arial-label":"VOTING",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav1"}),(0,m.jsx)("div",{className:"navbar__button",children:"VOTING"})]}),(0,m.jsxs)(i.OL,{to:v.nF,"arial-label":"BREEDS",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav2"}),(0,m.jsx)("div",{className:"navbar__button",children:"BREEDS"})]}),(0,m.jsxs)(i.OL,{to:v.yg,"arial-label":"GALLERY",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav3"}),(0,m.jsx)("div",{className:"navbar__button",children:"GALLERY"})]})]})]})}},8630:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(4165),s=n(5861),r=n(885),c=n(2791),i=n(6871),l=n(2299),o=n.n(l),u=n(9501),h=n(4918),d=n(8552),m=n(3671),f=n(3439),v=n(184);function x(){var e=(0,i.UO)().id;document.title="PatsPaw - ".concat(e);var t=(0,c.useState)(null),n=(0,r.Z)(t,2),l=n[0],x=n[1],p=(0,c.useState)(""),b=(0,r.Z)(p,2),j=b[0],g=b[1],N=(0,c.useState)(!0),w=(0,r.Z)(N,2),Z=w[0],_=w[1],k=(0,c.useState)(1),y=(0,r.Z)(k,2),S=y[0],O=y[1],B=(0,c.useState)(1),C=(0,r.Z)(B,2),E=C[0],L=C[1],F=(0,c.useState)(0),G=(0,r.Z)(F,2),I=G[0],T=G[1],P=(0,c.useState)(!1),R=(0,r.Z)(P,2),V=R[0],A=R[1],D=(0,c.useState)(!0),X=(0,r.Z)(D,2),M=X[0],Y=X[1],q=!1;(0,c.useEffect)((function(){function t(){return(t=(0,s.Z)((0,a.Z)().mark((function t(){var n,s,r,c,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){return Math.ceil(s/10)},n={limit:10,page:E,order:"Asc",uri:"images/search?breed_ids=".concat(e)},s=0,t.next=5,(0,u.Z)(n);case 5:r=t.sent,s=r.pagination_count,r&&r.response_data&&r.response_data[0]?(i=r.response_data.map((function(e){return{image_url:e.url,image_id:e.id}})),g("".concat(r.response_data[0].breeds[0].name)),x((0,h.Z)(i)),_(!1),O(1),T(c),A(E===I||s<10),Y(1===E)):g("No images found!");case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return q||function(){t.apply(this,arguments)}(),function(){q=!0}}),[E,e]);var z=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!0),O(.5),t.preventDefault(),1!==E&&L(E-1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(!0),O(.5),E!==I&&L(E+1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"content",children:[(0,v.jsx)(d.h,{}),(0,v.jsxs)("div",{className:"breeds__container",children:[(0,v.jsxs)("div",{className:"breeds__select-section",children:[(0,v.jsx)(m.X,{navigate:-1}),(0,v.jsx)("h1",{className:"title-page",children:"SEARCH"})]}),function(){if(l){for(var e=l.length,t=[],n=0;n<e;n++)t.push((0,v.jsx)("div",{className:"images__container",style:{opacity:S},children:l[n].map((function(e,t){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"img".concat(t+1," breeds__image"),style:{backgroundImage:"url('".concat(e.image_url,"')")},children:(0,v.jsx)("div",{className:"breeds__tiltle",children:(0,v.jsx)("button",{className:"button button__love",children:(0,v.jsx)("svg",{className:"icon-love",viewBox:"0 0 20 17",children:(0,v.jsx)("use",{width:"20",height:"17",href:"".concat(f.Z,"#smile-love")})})})},e.image_name)},e.image_id)})}))},E+n));return(0,v.jsxs)(v.Fragment,{children:[l&&(0,v.jsxs)("p",{className:"search",children:["Search results for: ",(0,v.jsx)("span",{children:j})]}),t,(0,v.jsxs)("div",{className:"button-group",children:[(0,v.jsxs)("button",{type:"button","aria-label":"Prev page",onClick:z,disabled:M,className:"button button--prev",children:[(0,v.jsx)("svg",{className:"arrow arrow--left",viewBox:"0 0 7 12",children:(0,v.jsx)("use",{width:"7",height:"12",href:"".concat(f.Z,"#arrow-left")})}),"PREV"]}),(0,v.jsxs)("button",{type:"button","aria-label":"Next page",onClick:H,disabled:V,className:"button button--next",children:["NEXT",(0,v.jsx)("svg",{className:"arrow arrow--right",viewBox:"0 0 7 12",children:(0,v.jsx)("use",{width:"7",height:"12",href:"".concat(f.Z,"#arrow-left")})})]})]})]})}}(),Z&&(0,v.jsx)(o(),{speedMultiplier:1,color:"#FF868E",size:150,className:"loader"})]})]})})}},9501:function(e,t,n){var a=n(4165),s=n(5861),r=n(4569),c=n.n(r);function i(){return(i=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,r,i,l,o,u,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,s=t.order,r=t.page,i=t.type,l=t.uri,e.prev=1,o={limit:n,page:r-1,order:s,mime_types:i},e.next=5,c().get("https://api.thecatapi.com/v1/".concat(l),{params:o});case 5:return u=e.sent,h=u.headers["pagination-count"],e.abrupt("return",{response_data:u.data,pagination_count:h});case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}c().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",t.Z=function(e){return i.apply(this,arguments)}},4918:function(e,t,n){function a(e){for(var t=[],n=0;n<e.length;n+=10)t.push(e.slice(n,n+10));return t}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=630.e7197268.chunk.js.map