(this.webpackJsonpjetflix=this.webpackJsonpjetflix||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(107),a(69)),o=a(15),l=(a(108),a(109),a(2)),d=function(){return Object(l.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac Jetflix \ud83c\udfa5"})},u=a(9),j=a(213),b=a(216),p=a(218),f=a(93),h=a.n(f),O=a(92),v=a.n(O),m=a(65),g=a.n(m),x=a(91),_=a.n(x),w=Object(j.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#000",boxShadow:"0px 2px 15px #EA2027",zIndex:100}});function y(){var e=w(),t=c.a.useState(0),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(o.f)();return Object(n.useEffect)((function(){0===r?i.push("/"):1===r?i.push("/movies"):2===r?i.push("/series"):3===r&&i.push("/search")}),[r,i]),Object(l.jsxs)(b.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(l.jsx)(p.a,{style:{color:"#f0f0f0"},label:"Trending",icon:Object(l.jsx)(_.a,{})}),Object(l.jsx)(p.a,{style:{color:"#f0f0f0"},label:"Movies",icon:Object(l.jsx)(v.a,{})}),Object(l.jsx)(p.a,{style:{color:"#f0f0f0"},label:"TV Series",icon:Object(l.jsx)(h.a,{})}),Object(l.jsx)(p.a,{style:{color:"#f0f0f0"},label:"Search",icon:Object(l.jsx)(g.a,{})})]})}var k=a(14),S=a.n(k),N=a(20),C=a(21),P=a.n(C),T=a(72),E=a(229),M=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,r=e.setGenres,s=e.type,i=e.setPage,o=function(){var e=Object(N.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/genre/".concat(s,"/list?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:t=e.sent,a=t.data,r(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){r({})}}),[]),Object(l.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(l.jsx)(E.a,{style:{margin:2,background:"#EA2027",color:"#f0f0f0"},label:e.name,clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),r([].concat(Object(T.a)(c),[e])),i(1)}(e)}},e.id)})),c.map((function(e){return Object(l.jsx)(E.a,{style:{margin:2,background:"#212121",color:"#f0f0f0"},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(T.a)(t),[e])),r(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},U=a(221),B="https://image.tmdb.org/t/p/w300",G="https://image.tmdb.org/t/p/w500",W="https://www.movienewz.com/img/films/poster-holder.jpg",I=(a(140),a(228)),A=a(219),D=a(180),z=(a(141),a(220)),L=a(95),F=a.n(L),J=a(94),V=a.n(J),R=(a(175),a(176),function(e){return e.preventDefault()}),q=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],i=r[1],o=s.map((function(e){return Object(l.jsxs)("div",{className:"carouselItem",children:[Object(l.jsx)("img",{src:e.profile_path?"".concat(B,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:R,className:"carouselItem__img"}),Object(l.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(N.a)(S.a.mark((function e(){var n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(l.jsx)(V.a,{mouseTracking:s.length>5,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:4},666:{items:5},1241:{items:6},1361:{items:7}},items:o,touchTracking:s.length>5,autoPlay:s.length>5})},$=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#212121",borderRadius:4,color:"white",padding:e.spacing(1,1,3)}}}));function H(e){var t=e.children,a=e.media_type,c=e.id,r=$(),s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)(),b=Object(u.a)(j,2),p=b[0],f=b[1],h=Object(n.useState)(),O=Object(u.a)(h,2),v=O[0],m=O[1],g=function(){var e=Object(N.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(N.a)(S.a.mark((function e(){var t,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:n=e.sent,r=n.data,m(null===(t=r.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(),x()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){d(!0)},children:t}),Object(l.jsx)(I.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:o,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500},children:Object(l.jsx)(D.a,{in:o,children:p&&Object(l.jsx)("div",{className:r.paper,children:Object(l.jsxs)("div",{className:"ContentModal",children:[Object(l.jsx)("img",{src:p.poster_path?"".concat(G,"/").concat(p.poster_path):W,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(l.jsx)("img",{src:p.backdrop_path?"".concat(G,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(l.jsxs)("div",{className:"ContentModal__about",children:[Object(l.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(l.jsx)("i",{className:"tagline",children:p.tagline}),Object(l.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(l.jsx)("div",{children:Object(l.jsx)(q,{id:c,media_type:a})}),Object(l.jsx)(z.a,{variant:"contained",startIcon:Object(l.jsx)(F.a,{}),target:"__blank",href:"https://www.youtube.com/watch?v=".concat(v),children:"Watch the Trailer"})]})]})})})})]})}var K=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,r=e.media_type,s=e.vote_average;return Object(l.jsxs)(H,{media_type:r,id:t,children:[Object(l.jsx)(U.a,{badgeContent:s,color:s>6?"primary":"secondary"}),Object(l.jsx)("img",{className:"poster",src:a?"".concat(B).concat(a):W,alt:n}),Object(l.jsx)("b",{className:"title",children:n}),Object(l.jsxs)("span",{className:"subTitle",children:["tv"===r?"TV Series":"Movie",Object(l.jsx)("span",{className:"subTitle",children:c})]})]})},Q=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},X=a(227),Y=a(96),Z=a(222),ee=Object(Y.a)({palette:{type:"dark"}});function te(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(l.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(l.jsx)(Z.a,{theme:ee,children:Object(l.jsx)(X.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:n,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var ae=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(n.useState)(),g=Object(u.a)(m,2),x=g[0],_=g[1],w=Q(i),y=function(){var e=Object(N.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("26ba5e77849587dbd7df199727859189","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(w));case 2:t=e.sent,a=t.data,v(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),y()}),[w,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(l.jsx)(M,{type:"movie",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(l.jsx)("div",{className:"trending",children:O&&O.map((function(e){return Object(l.jsx)(K,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),x>1&&Object(l.jsx)(te,{setPage:p,numOfPages:x})]})},ne=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(n.useState)(),g=Object(u.a)(m,2),x=g[0],_=g[1],w=Q(i),y=function(){var e=Object(N.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("26ba5e77849587dbd7df199727859189","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(w));case 2:t=e.sent,a=t.data,v(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),y()}),[w,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(l.jsx)(M,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(l.jsx)("div",{className:"trending",children:O&&O.map((function(e){return Object(l.jsx)(K,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),x>1&&Object(l.jsx)(te,{setPage:p,numOfPages:x})]})},ce=(a(177),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],o=s[1],d=function(){var e=Object(N.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("26ba5e77849587dbd7df199727859189","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),d()}),[a]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Trending Today"}),Object(l.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(l.jsx)(K,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(l.jsx)(te,{setPage:c})]})}),re=a(225),se=a(226),ie=a(223),oe=(a(178),function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),h=Object(u.a)(f,2),O=h[0],v=h[1],m=Object(n.useState)(),x=Object(u.a)(m,2),_=x[0],w=x[1],y=Object(Y.a)({palette:{type:"dark",primary:{main:"#fff"}}}),k=function(){var e=Object(N.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,v(n.results),w(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),k()}),[a,b]),Object(l.jsxs)("div",{children:[Object(l.jsxs)(Z.a,{theme:y,children:[Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(re.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(l.jsx)(z.a,{onClick:k,variant:"contained",style:{marginLeft:10,background:"#212121",color:"#f0f0f0"},children:Object(l.jsx)(g.a,{fontSize:"large"})})]}),Object(l.jsxs)(se.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(l.jsx)(ie.a,{style:{width:"50%"},label:"Search Movies"}),Object(l.jsx)(ie.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(l.jsxs)("div",{className:"trending",children:[O&&O.map((function(e){return Object(l.jsx)(K,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!O&&(a?Object(l.jsx)("h2",{children:"No Series Found"}):Object(l.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(l.jsx)(te,{setPage:p,numOfPages:_})]})}),le=a(224);var de=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(le.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:ce,exact:!0}),Object(l.jsx)(o.a,{path:"/movies",component:ae}),Object(l.jsx)(o.a,{path:"/series",component:ne}),Object(l.jsx)(o.a,{path:"/search",component:oe})]})})}),Object(l.jsx)(y,{})]})},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(l.jsx)(de,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jetflix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jetflix","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):je(t,e)}))}}()}},[[179,1,2]]]);
//# sourceMappingURL=main.d590f9e8.chunk.js.map