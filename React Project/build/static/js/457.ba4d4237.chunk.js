"use strict";(self.webpackChunkmuslim_website=self.webpackChunkmuslim_website||[]).push([[457],{4102:function(n,e,t){var r=t(9439),i=t(4554),a=t(9658),o=t(2791),s=t(184);e.Z=function(){var n=(0,o.useState)(!0),e=(0,r.Z)(n,2),t=e[0],c=e[1],u=(0,o.useCallback)((function(){c(!1)}),[]);return t&&(0,s.jsx)(i.Z,{sx:{position:"fixed",bottom:"20px",right:"20px",zIndex:1e3},children:(0,s.jsx)(a.Z,{severity:"warning",onClose:u,children:"Somthing went wrong!, refresh the page and try again."})})}},1229:function(n,e,t){t.d(e,{VZ:function(){return l},hg:function(){return c},d6:function(){return u},ib:function(){return s}});var r=t(4165),i=t(5861),a=t(9439),o=t(2791),s=function(n,e){var t=n.url,s=(0,o.useState)(null),c=(0,a.Z)(s,2),u=c[0],l=c[1],h=(0,o.useState)("loading"),d=(0,a.Z)(h,2),x=d[0],f=d[1],m=(0,o.useState)(null),p=(0,a.Z)(m,2),g=p[0],j=p[1];return(0,o.useEffect)((function(){function n(){return(n=(0,i.Z)((0,r.Z)().mark((function n(){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("Something went wrong");case 6:return n.next=8,e.json();case 8:i=n.sent,l(i),f("success"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),f("error"),j(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}t?(f("loading"),function(){n.apply(this,arguments)}()):f("error")}),e),{data:u,status:x,error:g}},c=function(n){return"loading"===n},u=function(n){return"success"===n},l=function(n){return"error"===n}},7457:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r=t(4554),i=t(9164),a=t(184);function o(){return(0,a.jsx)(r.Z,{component:"header",sx:{pt:10,pb:4},children:(0,a.jsx)(i.Z,{maxWidth:"lg",children:(0,a.jsx)(r.Z,{component:"img",src:"images/doaa-man.png",alt:"Mohammed",sx:{filter:"drop-shadow(2px 2px 2px #170f052e)",height:"200px",width:"auto",display:"block",margin:"auto"}})})})}var s=t(9439),c=t(2791),u=t(1229),l=function(){return"https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json"},h=t(5527),d=t(890);function x(n){var e=n.cardData,t=n.isChosen,r=n.setChosenAdhkar,i=(0,c.useCallback)((function(){r(e)}),[]);return(0,a.jsx)(h.Z,{onClick:i,sx:{cursor:"pointer",p:2,textAlign:"center",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t?"primary.main":"primary.light",color:t?"white":"text.secondary","&:hover":{backgroundColor:"primary.main",color:"white"}},children:(0,a.jsx)(d.Z,{variant:"h6",component:"div",children:e})})}var f=(0,c.memo)(x),m=t(1889),p=t(2810);function g(n){var e=n.data,t=n.chosenAdhkar,o=n.setChosenAdhkar;return(0,a.jsx)(r.Z,{component:"main",sx:{flexGrow:1,pb:3},children:(0,a.jsx)(i.Z,{maxWidth:"lg",children:(0,a.jsx)(m.ZP,{container:!0,spacing:2,children:e.map((function(n){return(0,a.jsx)(m.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,a.jsx)(f,{cardData:n,isChosen:n===t,setChosenAdhkar:o})},(0,p.Z)())}))})})})}var j=(0,c.memo)(g),Z=t(9877);function v(n){var e=n.initialCounter,t=(0,c.useState)(e),i=(0,s.Z)(t,2),o=i[0],u=i[1],l=(0,c.useCallback)((function(){0!==o&&u((function(n){return n-1}))}),[o]);return(0,a.jsx)(r.Z,{sx:{"& > :not(style)":{m:1}},onClick:l,children:(0,a.jsx)(Z.Z,{color:"primary","aria-label":"edit",children:(0,a.jsx)(d.Z,{variant:"h6",component:"h3",sx:{textAlign:"center",lineHeight:"1.6"},children:o})})})}function k(n){var e=n.data;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{variant:"h5",component:"h3",sx:{textAlign:"center",lineHeight:"1.6"},children:e.content.replace(/\\|n|'|,/g,"")}),e.description&&(0,a.jsx)(d.Z,{variant:"body1",component:"p",sx:{textAlign:"center",lineHeight:"1.6"},children:e.description}),(0,a.jsx)(v,{initialCounter:+e.count})]})}function b(n){var e=n.content;return(0,a.jsx)(r.Z,{sx:{py:2},children:e?e.map((function(n,e){return(0,a.jsx)(r.Z,{component:"section",sx:{backgroundColor:e%2===0?"primary.light":"primary.contrastText",py:4},children:(0,a.jsx)(i.Z,{maxWidth:"lg",sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"},children:(0,a.jsx)(k,{data:n})})},(0,p.Z)())})):(0,a.jsx)(d.Z,{variant:"h6",component:"h3",sx:{textAlign:"center",lineHeight:"1.6"},children:"\u0627\u062e\u062a\u0631 \u0630\u0643\u0631\u0627\u064b \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"})})}var y=(0,c.memo)(b),C=t(921),w=t(4102);function A(){var n=(0,u.ib)({url:l()},[]),e=n.data,t=n.status,r=(0,c.useState)(""),i=(0,s.Z)(r,2),o=i[0],h=i[1],d=(0,c.useMemo)((function(){return e?Object.keys(e):null}),[e]),x=(0,c.useMemo)((function(){var n;return e?null===(n=e[o])||void 0===n?void 0:n.flat().filter((function(n){return"stop"!==n.content})):null}),[e,o]);return(0,a.jsxs)("main",{children:[(0,u.hg)(t)&&(0,a.jsx)(C.Z,{}),(0,u.VZ)(t)&&(0,a.jsx)(w.Z,{}),(0,u.d6)(t)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j,{chosenAdhkar:o,setChosenAdhkar:h,data:d}),(0,a.jsx)(y,{content:x})]})]})}var S=t(4270);function H(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.q,{children:(0,a.jsx)("title",{children:"Adhkar"})}),(0,a.jsx)(o,{}),(0,a.jsx)(A,{})]})}}}]);
//# sourceMappingURL=457.ba4d4237.chunk.js.map