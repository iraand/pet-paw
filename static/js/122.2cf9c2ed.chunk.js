"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[122],{7122:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});var s=n(4165),t=n(5861),l=n(885),r=n(2791),i=n(2299),c=n.n(i),u=n(9501),o=n(6602),d=n(4918),m=n(1609),h=n(2364),g=n(3671),p=n(5709),f=n(8622),x=n(184);function v(e){var a=[{value:"Rand",label:"Random"},{value:"Desc",label:"Desc"},{value:"Asc",label:"Asc"}];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.ZP,{defaultValue:a[0],options:a,onChange:function(a){e.onChange(a.value)},classNamePrefix:"react-select",className:e.className})})}function b(e){var a=[{value:"gif,jpg,png",label:"All"},{value:"jpg,png",label:"Static"},{value:"gif",label:"Animated"}];return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.ZP,{defaultValue:a[0],options:a,onChange:function(a){return e.onChange(a.value)},classNamePrefix:"react-select",className:e.className})})}var j=n(3439);function N(){var e=(0,r.useState)(null),a=(0,l.Z)(e,2),n=a[0],i=a[1],f=(0,r.useState)("images/search"),N=(0,l.Z)(f,2),_=N[0],Z=N[1],w=(0,r.useState)(10),y=(0,l.Z)(w,2),C=y[0],S=y[1],k=(0,r.useState)("Rand"),P=(0,l.Z)(k,2),E=P[0],R=P[1],A=(0,r.useState)(null),F=(0,l.Z)(A,2),B=F[0],D=F[1],L=(0,r.useState)(null),V=(0,l.Z)(L,2),I=V[0],M=V[1],T=(0,r.useState)(100),G=(0,l.Z)(T,2),O=G[0],X=G[1],Y=(0,r.useState)(1),z=(0,l.Z)(Y,2),U=z[0],q=z[1],H=(0,r.useState)(!0),J=(0,l.Z)(H,2),K=J[0],Q=J[1],W=(0,r.useState)(1),$=(0,l.Z)(W,2),ee=$[0],ae=$[1],ne=(0,r.useState)(!1),se=(0,l.Z)(ne,2),te=se[0],le=se[1],re=(0,r.useState)(!0),ie=(0,l.Z)(re,2),ce=ie[0],ue=ie[1],oe=!1;document.title="PatsPaw - Gallery",(0,r.useEffect)((function(){function e(){return(e=(0,t.Z)((0,s.Z)().mark((function e(){var a,n,t,l,r,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){return Math.ceil(t/C)},a={limit:C,page:O,order:E,mime_types:B,uri:_},t=0,e.next=5,(0,u.Z)(a);case 5:n=e.sent,t=n.pagination_count,r=[],"breeds"===_?(c=n.response_data.filter((function(e){return e.image&&e.image.url})),r=c.map((function(e){return{breed_id:e.id,image_url:e.image.url,image_name:e.name,image_id:e.image.id}}))):r=n.response_data.map((function(e){return{image_url:e.url,image_id:e.id}})),i((0,d.Z)(r)),Q(!1),ae(1),q(l()),r.length<5||O===U?le(!0):le(!1),ue(1===O),console.log(r),console.log(O,U);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return oe||function(){e.apply(this,arguments)}(),function(){oe=!0}}),[_,O,B,C,E]);var de=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q(!0),ae(.5),a.preventDefault(),1!==O&&X(O-1);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),me=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q(!0),ae(.5),O!==U&&X(O+1);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"content",children:[(0,x.jsx)(m.h,{}),(0,x.jsxs)("div",{className:"breeds__container",children:[(0,x.jsxs)("div",{className:"breeds__select-section",children:[(0,x.jsx)(g.X,{navigate:-1}),(0,x.jsx)("h1",{className:"title-page",children:"GALLERY"}),(0,x.jsx)("div",{className:"wrapper",children:(0,x.jsxs)("button",{type:"button","aria-label":"upload",className:"button button-upload",children:[(0,x.jsx)("svg",{className:"icon-upload",viewBox:"0 0 16 16",children:(0,x.jsx)("use",{width:"16",height:"16",href:"".concat(j.Z,"#upload")})}),"UPLOAD"]})})]}),(0,x.jsxs)("div",{className:"gallery__select-section",children:[(0,x.jsx)("span",{className:"label",children:"ORDER"}),(0,x.jsx)("span",{className:"label",children:"TYPE"}),(0,x.jsx)(v,{onChange:function(e){Q(!0),ae(.5),R(e)},className:"select-order"}),(0,x.jsx)(b,{onChange:function(e){if(X(1),M(null),Q(!0),ae(.5),e){D(e);var a="images/search?mime_types=".concat(e);Z(a)}},className:"select-order"}),(0,x.jsx)("span",{className:"label",children:"BREED"}),(0,x.jsx)("span",{className:"label",children:"LIMIT"}),(0,x.jsx)(h.j,{onChange:function(e){if(Q(!0),ae(.5),e){X(1),M(e),D("gif,jpg,png");var a="";a="All breeds"===e.value?"breeds":"images/search?breed_ids=".concat(e.value),Z(a)}},placeholder:"None",defaultValue:null,value:I,className:"gallery__breeds-select"}),(0,x.jsxs)("div",{className:"wrapper",children:[(0,x.jsx)(p.c,{onChange:function(e){return S(e)},className:"gallery__limit"}),(0,x.jsx)("button",{type:"button",className:"button button-reload",onClick:me,disabled:te,children:(0,x.jsx)("svg",{className:"icon-reload",viewBox:"0 0 18 20",children:(0,x.jsx)("use",{width:"18",height:"20",href:"".concat(j.Z,"#reload")})})})]})]}),function(){if(n){for(var e=n.length,a=[],s=0;s<e;s++)a.push((0,x.jsx)("div",{className:"images__container",style:{opacity:ee},children:n[s].map((function(e,a){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"img".concat(a+1," breeds__image"),style:{backgroundImage:"url('".concat(e.image_url,"')")},children:(0,x.jsx)("div",{className:"breeds__tiltle",children:(0,x.jsx)("button",{className:"button button__love",onClick:function(){(0,o.t)(e.image_id)},children:(0,x.jsx)("svg",{className:"icon-love",viewBox:"0 0 20 17",children:(0,x.jsx)("use",{width:"20",height:"17",href:"".concat(j.Z,"#smile-love")})})})},e.image_name)},e.image_id)})}))},O+s));return(0,x.jsxs)(x.Fragment,{children:[a,(0,x.jsxs)("div",{className:"button-group",children:[(0,x.jsxs)("button",{type:"button","aria-label":"Prev page",onClick:de,disabled:ce,className:"button button--prev",children:[(0,x.jsx)("svg",{className:"arrow arrow--left",viewBox:"0 0 7 12",children:(0,x.jsx)("use",{width:"7",height:"12",href:"".concat(j.Z,"#arrow-left")})}),"PREV"]}),(0,x.jsxs)("button",{type:"button","aria-label":"Next page",onClick:me,disabled:te,className:"button button--next",children:["NEXT",(0,x.jsx)("svg",{className:"arrow arrow--right",viewBox:"0 0 7 12",children:(0,x.jsx)("use",{width:"7",height:"12",href:"".concat(j.Z,"#arrow-left")})})]})]})]})}}(),K&&(0,x.jsx)(c(),{speedMultiplier:1,color:"#FF868E",size:150,className:"loader"})]})]})})}}}]);
//# sourceMappingURL=122.2cf9c2ed.chunk.js.map