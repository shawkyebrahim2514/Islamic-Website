"use strict";(self.webpackChunkmuslim_website=self.webpackChunkmuslim_website||[]).push([[999],{4702:function(n,e,t){t.d(e,{L:function(){return o},b:function(){return c}});var r=t(4165),a=t(5861),i=t(8955);function o(n){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(e.day,"-").concat(e.month,"-").concat(e.year),n.next=3,(0,i.mH)();case 3:return a=(0,i.yV)(),o="https://api.aladhan.com/v1/timings/".concat(t,"?latitude=").concat(a.latitude,"&longitude=").concat(a.longitude,"&method=5"),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(n){var e=n.month,t=n.year;return"https://api.aladhan.com/v1/gToHCalendar/".concat(e,"/").concat(t)}},4102:function(n,e,t){var r=t(9439),a=t(4554),i=t(9658),o=t(2791),s=t(184);e.Z=function(){var n=(0,o.useState)(!0),e=(0,r.Z)(n,2),t=e[0],c=e[1],u=(0,o.useCallback)((function(){c(!1)}),[]);return t&&(0,s.jsx)(a.Z,{sx:{position:"fixed",bottom:"20px",right:"20px",zIndex:1e3},children:(0,s.jsx)(i.Z,{severity:"warning",onClose:u,children:"Somthing went wrong!, refresh the page and try again."})})}},2309:function(n,e,t){t.d(e,{Z:function(){return v}});var r=t(9439),a=t(4554),i=t(9164),o=t(2791),s=t(890),c=t(184);function u(n){var e=n.hijriDate,t=n.gregorianDate;return(0,c.jsxs)(a.Z,{sx:{textAlign:"center",mb:2},children:[(0,c.jsxs)(s.Z,{variant:"h3",sx:{color:"primary.main",mb:2},children:[e.day," ",e.month," ",e.year]}),(0,c.jsxs)(s.Z,{variant:"h4",children:[e.dateInNumbers," / ",t.dateInNumbers]})]})}var l=t(9212);function d(n){var e=n.prayerName,t=n.prayerTime;return(0,c.jsxs)(a.Z,{sx:{width:"100%",color:"quranPlayer.main",display:"flex",justifyContent:"space-between",border:"inherit",borderRadius:"inherit",py:1,"&:hover":{backgroundColor:"primary.main",color:"primary.contrastText",cursor:"pointer"}},children:[(0,c.jsx)(s.Z,{variant:"h6",sx:{px:2},children:t}),(0,c.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",px:2,gap:1},children:[(0,c.jsx)(s.Z,{variant:"h6",children:e}),(0,c.jsx)(l.Z,{})]})]})}var x=t(2810),h=t(1918);function m(n){var e=n.timezone;return(0,c.jsxs)(a.Z,{component:"header",sx:{width:"100%",color:"primary.main",display:"flex",justifyContent:"space-between",p:1,px:2},children:[(0,c.jsx)(s.Z,{variant:"h6",children:"\u0627\u0644\u0635\u0644\u0627\u0629"}),(0,c.jsx)(h.Z,{sx:{fontSize:"1rem"},label:e,color:"primary"}),(0,c.jsx)(s.Z,{variant:"h6",children:"\u0627\u0644\u0648\u0642\u062a"})]})}function f(n){var e=n.timezone,t=n.prayerTimes;return(0,c.jsx)(a.Z,{children:(0,c.jsxs)(i.Z,{maxWidth:"sm",sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",border:"2px solid",borderColor:"quranPlayer.main",borderRadius:"20px",gap:1,pb:3,pt:1,backgroundColor:"primary.contrastText"},children:[(0,c.jsx)(m,{timezone:e}),Object.entries(t).map((function(n){var e=(0,r.Z)(n,2),t=e[0],a=e[1];return(0,c.jsx)(d,{prayerName:t,prayerTime:a},(0,x.Z)())}))]})})}var p=t(1229),g=t(4702),j=t(921),Z=t(4102),y=t(3230);function v(n){var e=n.pageDate,t=void 0===e?y.cQ:e,s=(0,o.useState)(null),l=(0,r.Z)(s,2),d=l[0],x=l[1],h=(0,p.ib)({url:d},[d]),m=h.data,v=h.status,b=(0,o.useMemo)((function(){return m?(0,y.fQ)(m.data.date.hijri):null}),[m]),w=(0,o.useMemo)((function(){return m?(0,y.XC)(m.data.date.gregorian):null}),[m]),S=(0,o.useMemo)((function(){return m?(0,y.Hy)(m.data.timings):null}),[m]);return(0,o.useEffect)((function(){(0,g.L)(t).then((function(n){x(n)}))}),[t]),(0,c.jsx)(a.Z,{component:"header",children:(0,c.jsxs)(i.Z,{maxWidth:"lg",sx:{py:4},children:[(0,p.hg)(v)&&(0,c.jsx)(j.Z,{}),(0,p.VZ)(v)&&d&&(0,c.jsx)(Z.Z,{}),(0,p.d6)(v)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{hijriDate:b,gregorianDate:w}),(0,c.jsx)(f,{timezone:m.data.meta.timezone,prayerTimes:S})]})]})})}},3230:function(n,e,t){t.d(e,{cQ:function(){return x},yD:function(){return h},XC:function(){return d},fQ:function(){return l},Hy:function(){return u}});var r=t(4942),a="\u0627\u0644\u0641\u062c\u0631",i="\u0627\u0644\u0638\u0647\u0631",o="\u0627\u0644\u0639\u0635\u0631",s="\u0627\u0644\u0645\u063a\u0631\u0628",c="\u0627\u0644\u0639\u0634\u0627\u0621",u=function(n){var e;return e={},(0,r.Z)(e,a,n.Fajr),(0,r.Z)(e,i,n.Dhuhr),(0,r.Z)(e,o,n.Asr),(0,r.Z)(e,s,n.Maghrib),(0,r.Z)(e,c,n.Isha),e},l=function(n){return{dateInNumbers:n.date,day:n.weekday.ar,month:n.month.ar,year:n.year}},d=function(n){return{dateInNumbers:n.date}},x={day:(new Date).getDate(),month:(new Date).getMonth()+1,year:(new Date).getFullYear()};function h(n){if(n.match(/^\d{2}-\d{2}-\d{4}$/)){var e=n.split("-")[0],t=n.split("-")[1],r=n.split("-")[2];return e<1||e>30||t<1||t>12||r<1?x:{day:parseInt(e),month:parseInt(t),year:parseInt(r)}}return x}},1229:function(n,e,t){t.d(e,{VZ:function(){return l},hg:function(){return c},d6:function(){return u},ib:function(){return s}});var r=t(4165),a=t(5861),i=t(9439),o=t(2791),s=function(n,e){var t=n.url,s=(0,o.useState)(null),c=(0,i.Z)(s,2),u=c[0],l=c[1],d=(0,o.useState)("loading"),x=(0,i.Z)(d,2),h=x[0],m=x[1],f=(0,o.useState)(null),p=(0,i.Z)(f,2),g=p[0],j=p[1];return(0,o.useEffect)((function(){function n(){return(n=(0,a.Z)((0,r.Z)().mark((function n(){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("Something went wrong");case 6:return n.next=8,e.json();case 8:a=n.sent,l(a),m("success"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),m("error"),j(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))).apply(this,arguments)}t?(m("loading"),function(){n.apply(this,arguments)}()):m("error")}),e),{data:u,status:h,error:g}},c=function(n){return"loading"===n},u=function(n){return"success"===n},l=function(n){return"error"===n}},8955:function(n,e,t){t.d(e,{Aw:function(){return u},hM:function(){return c},mH:function(){return l},yV:function(){return d}});var r=t(4165),a=t(9439),i=t(5861),o=t(4942),s=t(1413),c=function(){var n={activeAyah:null,endAyahPage:null,currentPage:1,currentSurahNumber:1,isAudioPlaying:!1,recitation:"AbdulBaset_Mujawwad"},e=JSON.parse(localStorage.getItem("quranPlayer"));return e||(localStorage.setItem("quranPlayer",JSON.stringify(n)),n)},u=function(n,e){var t=JSON.parse(localStorage.getItem("quranPlayer")),r=(0,s.Z)((0,s.Z)({},t),{},(0,o.Z)({},n,e));localStorage.setItem("quranPlayer",JSON.stringify(r))},l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t,i,o,s,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(localStorage.getItem("location")){n.next=10;break}return"https://ipinfo.io/41.44.83.12?token=87c42456f0ae82",n.next=4,fetch("https://ipinfo.io/41.44.83.12?token=87c42456f0ae82");case 4:return n.next=6,n.sent.json();case 6:e=n.sent,t=e.loc.split(","),i=(0,a.Z)(t,2),o=i[0],s=i[1],c={latitude:o,longitude:s},localStorage.setItem("location",JSON.stringify(c));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){return JSON.parse(localStorage.getItem("location"))}},6384:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(4554),a=t(9164),i=t(890),o=t(184);function s(){return(0,o.jsxs)(r.Z,{component:"header",sx:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,o.jsx)(r.Z,{sx:{position:"absolute",width:"100%",height:"100%",backgroundImage:"url(images/home-header.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",filter:"blur(2px) brightness(0.7) contrast(1.2) sepia(0.8) hue-rotate(10deg)"}}),(0,o.jsxs)(a.Z,{maxWidth:"lg",sx:{zIndex:1},children:[(0,o.jsx)(r.Z,{component:"img",src:"svg/basmala.svg",alt:"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062d\u0645\u0646 \u0627\u0644\u0631\u062d\u064a\u0645",sx:{width:"100%",maxWidth:"500px",display:"block",margin:"auto",filter:"brightness(0) invert(1)"}}),(0,o.jsx)(i.Z,{className:"ayah-font",variant:"h4",sx:{color:"white",textAlign:"center",mt:3},children:"\u0643\u0650\u062a\u064e\u0670\u0628\u064c \u0623\u064e\u0646\u0632\u064e\u0644\u06e1\u0646\u064e\u0670\u0647\u064f \u0625\u0650\u0644\u064e\u064a\u06e1\u0643\u064e \u0645\u064f\u0628\u064e\u0670\u0631\u064e\u0643\u065e \u0644\u0651\u0650\u064a\u064e\u062f\u0651\u064e\u0628\u0651\u064e\u0631\u064f\u0648\u0653\u0627\u0652 \u0621\u064e\u0627\u064a\u064e\u0670\u062a\u0650\u0647\u0650\u06e6 \u0648\u064e\u0644\u0650\u064a\u064e\u062a\u064e\u0630\u064e\u0643\u0651\u064e\u0631\u064e \u0623\u064f\u0648\u0652\u0644\u064f\u0648\u0627\u0652 \u0671\u0644\u06e1\u0623\u064e\u0644\u06e1\u0628\u064e\u0670\u0628\u0650"})]})]})}var c=[{imageSrc:"images/muslim-quran.png",imageAlt:"\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645",description:"\u0625\u0650\u0646\u0651\u064e \u0647\u064e\u0670\u0630\u064e\u0627 \u0671\u0644\u06e1\u0642\u064f\u0631\u06e1\u0621\u064e\u0627\u0646\u064e \u064a\u064e\u0647\u06e1\u062f\u0650\u064a \u0644\u0650\u0644\u0651\u064e\u062a\u0650\u064a \u0647\u0650\u064a\u064e \u0623\u064e\u0642\u06e1\u0648\u064e\u0645\u064f \u0648\u064e\u064a\u064f\u0628\u064e\u0634\u0651\u0650\u0631\u064f \u0671\u0644\u06e1\u0645\u064f\u0624\u06e1\u0645\u0650\u0646\u0650\u064a\u0646\u064e \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u064a\u064e\u0639\u06e1\u0645\u064e\u0644\u064f\u0648\u0646\u064e \u0671\u0644\u0635\u0651\u064e\u0670\u0644\u0650\u062d\u064e\u0670\u062a\u0650 \u0623\u064e\u0646\u0651\u064e \u0644\u064e\u0647\u064f\u0645\u06e1 \u0623\u064e\u062c\u06e1\u0631\u0657\u0627 \u0643\u064e\u0628\u0650\u064a\u0631\u0657\u0627",buttonText:"\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645",targetURL:"/quran"},{imageSrc:"images/doaa-man.png",imageAlt:"\u064a\u064e\u0670\u0653\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u0652 \u0671\u0630\u06e1\u0643\u064f\u0631\u064f\u0648\u0627\u0652 \u0671\u0644\u0644\u0651\u064e\u0647\u064e \u0630\u0650\u0643\u06e1\u0631\u0657\u0627 \u0643\u064e\u062b\u0650\u064a\u0631\u0657\u0627",description:"\u064a\u064e\u0670\u0653\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627 \u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u0652 \u0671\u0630\u06e1\u0643\u064f\u0631\u064f\u0648\u0627\u0652 \u0671\u0644\u0644\u0651\u064e\u0647\u064e \u0630\u0650\u0643\u06e1\u0631\u0657\u0627 \u0643\u064e\u062b\u0650\u064a\u0631\u0657\u0627",buttonText:"\u0627\u0644\u0623\u0630\u0643\u0627\u0631",targetURL:"/adhkar"}],u=t(1889),l=t(4294),d=(t(2791),t(1087)),x=t(6075);function h(n){var e=n.data,t=n.index;return(0,o.jsx)(r.Z,{component:"section",sx:{py:8,backgroundColor:t%2?"transparent":"primary.light"},children:(0,o.jsx)(a.Z,{maxWidth:"lg",children:(0,o.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,o.jsx)(u.ZP,{item:!0,xs:12,md:4,children:(0,o.jsx)(r.Z,{component:"img",src:e.imageSrc,alt:e.imageAlt,sx:{filter:"drop-shadow(2px 2px 2px #170f052e)",maxHeight:"300px",width:{xs:"240px",md:"300px"},display:"block",margin:"auto"}})}),(0,o.jsxs)(u.ZP,{item:!0,container:!0,rowSpacing:3,xs:12,md:8,sx:{justifyContent:"center",alignItems:"center",alignContent:"center"},children:[(0,o.jsx)(u.ZP,{item:!0,xs:12,children:(0,o.jsx)(i.Z,{sx:{textAlign:"center",lineHeight:"1.7",fontSize:"1.8rem"},children:e.description})}),(0,o.jsx)(u.ZP,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,o.jsx)(d.rU,{to:e.targetURL,sx:{width:"fit-content"},children:(0,o.jsx)(l.Z,{endIcon:(0,o.jsx)(x.Z,{sx:{mr:2}}),size:"large",sx:{fontSize:"1.2rem"},variant:"contained",children:e.buttonText})})})]})]})})})}function m(){return(0,o.jsx)(o.Fragment,{children:c.map((function(n,e){return(0,o.jsx)(h,{index:e,data:n},n.imageSrc)}))})}var f=t(2309);function p(){return(0,o.jsx)(r.Z,{component:"section",sx:{pt:2,pb:4,backgroundColor:"transparent"},children:(0,o.jsxs)(a.Z,{maxWidth:"lg",children:[(0,o.jsx)(f.Z,{}),(0,o.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(d.rU,{to:"/hijri-calendar",sx:{width:"fit-content"},children:(0,o.jsx)(l.Z,{endIcon:(0,o.jsx)(x.Z,{sx:{mr:2}}),size:"large",sx:{fontSize:"1.2rem"},variant:"contained",children:"\u0627\u0644\u062a\u0642\u0648\u064a\u0645 \u0627\u0644\u0647\u062c\u0631\u064a"})})})]})})}function g(){return(0,o.jsxs)(r.Z,{component:"main",children:[(0,o.jsx)(p,{}),(0,o.jsx)(m,{})]})}function j(){return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(s,{}),(0,o.jsx)(g,{})]})}},6075:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)([(0,i.jsx)("path",{d:"M18.29 17.29c.39-.39.39-1.02 0-1.41L14.42 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12.3 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"},"0"),(0,i.jsx)("path",{d:"M11.7 17.29c.39-.39.39-1.02 0-1.41L7.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L5.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01z"},"1")],"KeyboardDoubleArrowLeftRounded");e.Z=o}}]);
//# sourceMappingURL=999.09007dae.chunk.js.map