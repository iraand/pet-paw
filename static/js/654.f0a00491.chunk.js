"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[654],{3439:function(e,s,a){a(2791);s.Z=a.p+"static/media/icons.785553fa1f748a60debee1e4f840adb6.svg"},3671:function(e,s,a){a.d(s,{X:function(){return r}});a(2791);var n=a(6871),t=a(3439),i=a(184);function r(e){var s=(0,n.s0)();return(0,i.jsx)("button",{type:"button","aria-label":"Back",className:"button button-back",onClick:function(){return s(e.navigate)},children:(0,i.jsx)("svg",{className:"arrow arrow-back",viewBox:"0 0 12 20",children:(0,i.jsx)("use",{width:"12",height:"20",href:"".concat(t.Z,"#arrow-left-big")})})})}},8552:function(e,s,a){a.d(s,{h:function(){return p}});var n=a(4165),t=a(5861),i=a(885),r=a(2791),c=a(3504),l=a(6871),o=a(4569),u=a.n(o),d=a(1970),h=a(3439),m=a(184),x=function(e){var s=e.handleClose,a=e.show,n=e.children,t=a?"hamburger-menu move-to":"hamburger-menu move-from";return(0,m.jsx)("div",{className:t,children:(0,m.jsxs)("section",{className:"modal-menu",children:[n,(0,m.jsx)("button",{type:"button",onClick:s,className:"button button-close-menu",children:(0,m.jsx)("svg",{className:"close-menu",viewBox:"0 0 26 26",children:(0,m.jsx)("use",{width:"26",height:"26",href:"".concat(h.Z,"#close-menu")})})})]})})},f=a(8155),p=function(){var e=(0,r.useState)(""),s=(0,i.Z)(e,2),a=s[0],o=s[1],p=(0,r.useState)(""),v=(0,i.Z)(p,2),b=v[0],j=v[1],g=(0,r.useState)([]),N=(0,i.Z)(g,2),w=N[0],Z=N[1],_=(0,r.useState)(!1),k=(0,i.Z)(_,2),O=k[0],S=k[1],y=(0,l.s0)();return(0,r.useEffect)((function(){function e(){return(e=(0,t.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",e.next=3,u().get("https://api.thecatapi.com/v1/breeds/search?q=".concat(a));case 3:s=e.sent,Z(s.data.map((function(e){return{value:e.id,label:e.name}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a&&a.length>1&&function(){e.apply(this,arguments)}()}),[a]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"header",children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,m.jsx)(d.Z,{value:b,cacheOptions:!0,loadOptions:function(){return new Promise((function(e){return setTimeout((function(){e(w)}),1e3)}))},defaultOptions:!0,onInputChange:function(e){o(e)},placeholder:"Search for breeds by name",onChange:function(e){j(e.value),y("/search/".concat(e.value))},classNamePrefix:"react-select",className:"search-breeds"}),(0,m.jsx)("button",{className:"search-button",children:(0,m.jsx)("svg",{className:"search-icon",viewBox:"0 0 20 20",children:(0,m.jsx)("use",{width:"20",height:"20",href:"".concat(h.Z,"#find")})})})]}),(0,m.jsxs)("div",{className:"smiles",children:[(0,m.jsx)("div",{to:"/",className:"menu-burger",children:(0,m.jsx)("button",{className:"smile-button",onClick:function(){return S(!0)},children:(0,m.jsx)("svg",{className:"burger",viewBox:"0 0 30 18",children:(0,m.jsx)("use",{width:"30",height:"18",href:"".concat(h.Z,"#burger")})})})}),(0,m.jsx)(c.OL,{to:"/likes","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-like",viewBox:"0 0 30 30",children:(0,m.jsx)("use",{width:"30",height:"30",href:"".concat(h.Z,"#smile-like")})})})}),(0,m.jsx)(c.OL,{to:"/favourites","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-love",viewBox:"0 0 30 26",children:(0,m.jsx)("use",{width:"30",height:"26",href:"".concat(h.Z,"#smile-love")})})})}),(0,m.jsx)(c.OL,{to:"/dislikes","arial-label":"VOTING",children:(0,m.jsx)("button",{className:"smile-button",children:(0,m.jsx)("svg",{className:"smile-dislike",viewBox:"0 0 30 30",children:(0,m.jsx)("use",{width:"30",height:"30",href:"".concat(h.Z,"#smile-dislike")})})})})]})]}),(0,m.jsxs)(x,{show:O,handleClose:function(){return S(!1)},children:[(0,m.jsxs)(c.OL,{to:f.OO,"arial-label":"VOTING",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav1"}),(0,m.jsx)("div",{className:"navbar__button",children:"VOTING"})]}),(0,m.jsxs)(c.OL,{to:f.nF,"arial-label":"BREEDS",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav2"}),(0,m.jsx)("div",{className:"navbar__button",children:"BREEDS"})]}),(0,m.jsxs)(c.OL,{to:f.yg,"arial-label":"GALLERY",className:"navbar__item",children:[(0,m.jsx)("div",{className:"nav nav3"}),(0,m.jsx)("div",{className:"navbar__button",children:"GALLERY"})]})]})]})}},5654:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var n=a(4165),t=a(5861),i=a(885),r=a(2791),c=a(2299),l=a.n(c),o=a(9501),u=a(6871),d=a(8552),h=a(5605),m=a.n(h),x=a(184),f=function(e){var s=(0,r.useState)(null),a=(0,i.Z)(s,2),n=a[0],t=a[1],c=(0,r.useState)(null),l=(0,i.Z)(c,2),o=l[0],u=l[1],d=(0,r.useState)(""),h=(0,i.Z)(d,2),f=h[0],p=h[1],v="550px",b=window.innerWidth;return v=b<720?"250px":b>720&&b<1024?"400px":"550px",(0,r.useEffect)((function(){e.images&&e.images[0]&&(u(e.images[0].breeds[0]),t(e.images.map((function(e){return{url:e.url,id:e.id}}))),p(e.images[0].id))}),[e]),(0,x.jsxs)("div",{className:"slider",children:[(0,x.jsx)("div",{className:"breed-id",children:f}),n&&(0,x.jsx)(m(),{width:"100%",height:v,bgColor:"#fff",images:n,showBullets:!0,showNavs:!0,autoPlay:!1,loop:!0,slideDuration:1,onStartSlide:function(e,s){p(n[e-1].id)},title:n.id,navStyle:2}),o&&(0,x.jsxs)("div",{className:"breed-text",children:[(0,x.jsx)("h1",{className:"breed-name",children:o.name}),(0,x.jsx)("p",{className:"breed-description",children:o.description}),(0,x.jsxs)("div",{className:"breed-info",children:[(0,x.jsxs)("p",{className:"breed-temperament",children:[(0,x.jsx)("span",{className:"bold",children:"Temperament:"})," ",o.temperament]}),(0,x.jsxs)("div",{className:"breed-span",children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"bold",children:"Origin:"})," ",o.origin]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"bold",children:"Weight:"})," ",o.weight.metric," kgs"]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:"bold",children:"Life span:"})," ",o.life_span," years"]})]})]})]})]})},p=a(3671);function v(){var e=(0,u.UO)().id;document.title="PatsPaw - Breeds - ".concat(e);var s=(0,r.useState)(null),a=(0,i.Z)(s,2),c=a[0],h=a[1],m=(0,r.useState)(!0),v=(0,i.Z)(m,2),b=v[0],j=v[1],g=(0,r.useState)(1),N=(0,i.Z)(g,2),w=(N[0],N[1]),Z=!1;return(0,r.useEffect)((function(){function s(){return(s=(0,t.Z)((0,n.Z)().mark((function s(){var a,t,i;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a={limit:10,page:1,order:"Desc",uri:"images/search?breed_ids=".concat(e)},s.next=3,(0,o.Z)(a);case 3:t=s.sent,i=t.response_data,h(i),j(!1),w(1);case 8:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Z||function(){s.apply(this,arguments)}(),function(){Z=!0}}),[]),(0,x.jsxs)("div",{className:"content",children:[(0,x.jsx)(d.h,{}),(0,x.jsxs)("div",{className:"breeds__container",children:[(0,x.jsxs)("div",{className:"breeds__select-section",children:[(0,x.jsx)(p.X,{navigate:-1}),(0,x.jsx)("h1",{className:"title-page title-page__notactive",children:"BREEDS"})]}),function(){if(c)return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f,{images:c})})}(),b&&(0,x.jsx)(l(),{speedMultiplier:1,color:"#FF868E",size:150,className:"loader"})]})]})}},9501:function(e,s,a){var n=a(4165),t=a(5861),i=a(4569),r=a.n(i);function c(){return(c=(0,t.Z)((0,n.Z)().mark((function e(s){var a,t,i,c,l,o,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.limit,t=s.order,i=s.page,c=s.type,l=s.uri,e.prev=1,o={limit:a,page:i-1,order:t,mime_types:c},e.next=5,r().get("https://api.thecatapi.com/v1/".concat(l),{params:o});case 5:return u=e.sent,d=u.headers["pagination-count"],e.abrupt("return",{response_data:u.data,pagination_count:d});case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}r().defaults.headers.common["x-api-key"]="531a21b2-f437-4298-809c-b7c57253fac4",s.Z=function(e){return c.apply(this,arguments)}}}]);
//# sourceMappingURL=654.f0a00491.chunk.js.map