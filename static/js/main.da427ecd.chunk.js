(this.webpackJsonpjetflix=this.webpackJsonpjetflix||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(110),a(70)),o=a(15),l=(a(111),a(112),a.p+"static/media/maskedShape.eed6dd4c.svg"),d=a(2),u={margin:"0 auto",textAlign:"center",backgroundImage:"url(".concat(l,")"),backgroundSize:"cover",backgroundPosition:"50%",backgroundRepeat:"no-repeat",width:"auto",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent"},j=function(){return Object(d.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header maskText",children:Object(d.jsx)("span",{className:"",style:u,children:"Jetflix"})})},b=a(8),p=a(216),f=a(219),h=a(221),g=a(94),v=a.n(g),O=a(93),m=a.n(O),x=a(65),w=a.n(x),_=a(92),y=a.n(_),k=Object(p.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#000",boxShadow:"0px 2px 15px #7e7979",zIndex:100}});function S(){var e=k(),t=c.a.useState(0),a=Object(b.a)(t,2),r=a[0],s=a[1],i=Object(o.f)();return Object(n.useEffect)((function(){0===r?i.push("/"):1===r?i.push("/movies"):2===r?i.push("/series"):3===r&&i.push("/search")}),[r,i]),Object(d.jsxs)(f.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(d.jsx)(h.a,{style:{color:"#f0f0f0"},label:"Trending",icon:Object(d.jsx)(y.a,{})}),Object(d.jsx)(h.a,{style:{color:"#f0f0f0"},label:"Movies",icon:Object(d.jsx)(m.a,{})}),Object(d.jsx)(h.a,{style:{color:"#f0f0f0"},label:"TV Series",icon:Object(d.jsx)(v.a,{})}),Object(d.jsx)(h.a,{style:{color:"#f0f0f0"},label:"Search",icon:Object(d.jsx)(w.a,{})})]})}var N=a(14),C=a.n(N),P=a(20),T=a(21),W=a.n(T),A=a(73),E=a(233),M=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,r=e.setGenres,s=e.type,i=e.setPage,o=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/genre/".concat(s,"/list?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:t=e.sent,a=t.data,r(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){r({})}}),[]),Object(d.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(d.jsx)(E.a,{style:{margin:2,background:"#7e7979",color:"#f0f0f0"},label:e.name,clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),r([].concat(Object(A.a)(c),[e])),i(1)}(e)}},e.id)})),c.map((function(e){return Object(d.jsx)(E.a,{style:{margin:2,background:"#212121",color:"#f0f0f0"},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(A.a)(t),[e])),r(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},B=a(225),U="https://image.tmdb.org/t/p/w300",G="https://image.tmdb.org/t/p/w500",I="https://www.movienewz.com/img/films/poster-holder.jpg",z=(a(143),a(232)),D=a(222),L=a(183),R=(a(144),a(223)),F=a(224),J=a(96),V=a.n(J),q=a(97),H=a.n(q),$=a(95),K=a.n($),Q=(a(178),a(179),function(e){return e.preventDefault()}),X=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],i=r[1],o=s.map((function(e){return Object(d.jsxs)("div",{className:"carouselItem",children:[Object(d.jsx)("img",{src:e.profile_path?"".concat(U,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:Q,className:"carouselItem__img"}),Object(d.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),l=function(){var e=Object(P.a)(C.a.mark((function e(){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(d.jsx)(K.a,{mouseTracking:s.length>5,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:4},666:{items:5},1241:{items:6},1361:{items:7}},items:o,touchTracking:s.length>5,autoPlay:s.length>5})},Y=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",borderRadius:4,color:"white",padding:e.spacing(1,1,3)}}}));function Z(e){var t=e.children,a=e.media_type,c=e.id,r=e.backgroundCardColor,s=Y(),i=Object(n.useState)(!1),o=Object(b.a)(i,2),l=o[0],u=o[1],j=Object(n.useState)(),p=Object(b.a)(j,2),f=p[0],h=p[1],g=Object(n.useState)(),v=Object(b.a)(g,2),O=v[0],m=v[1],x=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:t=e.sent,n=t.data,h(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US"));case 2:n=e.sent,r=n.data,m(null===(t=r.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(),w()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"media",style:{cursor:"pointer",backgroundColor:r},color:"inherit",onClick:function(){u(!0)},children:t}),Object(d.jsx)(z.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:l,onClose:function(){u(!1)},closeAfterTransition:!0,style:{backgroundColor:r},BackdropComponent:D.a,BackdropProps:{timeout:500},children:Object(d.jsx)(L.a,{in:l,children:f&&Object(d.jsx)("div",{className:s.paper,children:Object(d.jsxs)("div",{className:"ContentModal",children:[Object(d.jsx)("img",{src:f.poster_path?"".concat(G,"/").concat(f.poster_path):I,alt:f.name||f.title,className:"ContentModal__portrait"}),Object(d.jsx)("img",{src:f.backdrop_path?"".concat(G,"/").concat(f.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:f.name||f.title,className:"ContentModal__landscape"}),Object(d.jsxs)("div",{className:"ContentModal__about",children:[Object(d.jsxs)("span",{className:"ContentModal__title",children:[f.name||f.title," (",(f.first_air_date||f.release_date||"-----").substring(0,4),")"]}),f.tagline&&Object(d.jsx)("i",{className:"tagline",children:f.tagline}),Object(d.jsx)("span",{className:"ContentModal__description",children:f.overview}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{id:c,media_type:a})}),Object(d.jsxs)(R.a,{container:!0,spacing:2,children:[Object(d.jsx)(R.a,{item:!0,xs:12,children:Object(d.jsx)(F.a,{variant:"contained",startIcon:Object(d.jsx)(V.a,{}),target:"__blank",color:"primary",href:"https://www.youtube.com/watch?v=".concat(O),children:"Watch the Trailer"})}),window.screen.width<=420?Object(d.jsx)(R.a,{item:!0,xs:12,children:Object(d.jsx)(F.a,{variant:"contained",startIcon:Object(d.jsx)(H.a,{}),target:"__blank",color:"secondary",href:"whatsapp://send?text=%0AHere's a movie worth watching!\ud83d\udd25\ud83c\udfac%0A%0A*".concat(f.name||f.title,"*%0A").concat(f.overview,"%0A%0Ahttps://www.youtube.com/watch?v=").concat(O),children:"Share on Whatsapp"})}):null]})]})]})})})})]})}var ee=a(98),te=function(e){var t=e.id,a=e.poster,c=e.title,r=e.date,s=e.media_type,i=e.vote_average,o=Object(n.useState)([]),l=Object(b.a)(o,2),u=l[0],j=l[1],p=Object(n.createRef)();var f,h={color:.299*u[0]+.587*u[1]+.114*u[2]>149?"#000000":"#ffffff",fontWeight:"bold"};return Object(d.jsxs)(Z,{backgroundCardColor:(f=u,"undefined"===typeof f?null:"rgb("+f.join(", ")+")"),media_type:s,id:t,children:[Object(d.jsx)(B.a,{badgeContent:i,color:i>6?"primary":"secondary"}),Object(d.jsx)("img",{ref:p,onLoad:function(){return function(){var e=new ee.a;j(e.getColor(p.current))}()},crossOrigin:"anonymous",className:"poster",src:a?"".concat(U).concat(a):I,alt:c}),Object(d.jsx)("b",{className:"title",style:h,children:c}),Object(d.jsxs)("span",{style:h,className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(d.jsx)("span",{className:"subTitle",style:h,children:r})]})]})},ae=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ne=a(231),ce=a(99),re=a(226),se=Object(ce.a)({palette:{type:"dark"}});function ie(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(d.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(d.jsx)(re.a,{theme:se,children:Object(d.jsx)(ne.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:n,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var oe=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(1),u=Object(b.a)(l,2),j=u[0],p=u[1],f=Object(n.useState)([]),h=Object(b.a)(f,2),g=h[0],v=h[1],O=Object(n.useState)(),m=Object(b.a)(O,2),x=m[0],w=m[1],_=ae(i),y=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("26ba5e77849587dbd7df199727859189","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(j,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,v(a.results.sort((function(e,t){return e.vote_average<t.vote_average?1:-1}))),w(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),y()}),[_,j]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(d.jsx)(M,{type:"movie",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(d.jsx)("div",{className:"trending",children:g&&g.map((function(e){return Object(d.jsx)(te,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),x>1&&Object(d.jsx)(ie,{setPage:p,numOfPages:x})]})},le=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(1),u=Object(b.a)(l,2),j=u[0],p=u[1],f=Object(n.useState)([]),h=Object(b.a)(f,2),g=h[0],v=h[1],O=Object(n.useState)(),m=Object(b.a)(O,2),x=m[0],w=m[1],_=ae(i),y=function(){var e=Object(P.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("26ba5e77849587dbd7df199727859189","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(j,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,v(a.results.sort((function(e,t){return e.vote_average<t.vote_average?1:-1}))),w(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),y()}),[_,j]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(d.jsx)(M,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(d.jsx)("div",{className:"trending",children:g&&g.map((function(e){return Object(d.jsx)(te,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),x>1&&Object(d.jsx)(ie,{setPage:p,numOfPages:x})]})},de=(a(180),function(){var e=Object(n.useState)(1),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(b.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("26ba5e77849587dbd7df199727859189","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),l()}),[a]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pageTitle",children:"Trending Today"}),Object(d.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(d.jsx)(te,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(ie,{setPage:c})]})}),ue=a(229),je=a(230),be=a(227),pe=(a(181),function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(1),u=Object(b.a)(l,2),j=u[0],p=u[1],f=Object(n.useState)([]),h=Object(b.a)(f,2),g=h[0],v=h[1],O=Object(n.useState)(),m=Object(b.a)(O,2),x=m[0],_=m[1],y=Object(ce.a)({palette:{type:"dark",primary:{main:"#fff"}}}),k=function(){var e=Object(P.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("26ba5e77849587dbd7df199727859189","&language=en-US&query=").concat(i,"&page=").concat(j,"&include_adult=false"));case 3:t=e.sent,n=t.data,v(n.results),_(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),k()}),[a,j]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(re.a,{theme:y,children:[Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(ue.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)(F.a,{onClick:k,variant:"contained",style:{marginLeft:10,background:"#212121",color:"#f0f0f0"},children:Object(d.jsx)(w.a,{fontSize:"large"})})]}),Object(d.jsxs)(je.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(d.jsx)(be.a,{style:{width:"50%"},label:"Search Movies"}),Object(d.jsx)(be.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(d.jsxs)("div",{className:"trending",children:[g&&g.map((function(e){return Object(d.jsx)(te,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!g&&(a?Object(d.jsx)("h2",{children:"No Series Found"}):Object(d.jsx)("h2",{children:"No Movies Found"}))]}),x>1&&Object(d.jsx)(ie,{setPage:p,numOfPages:x})]})}),fe=a(228);var he=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(fe.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",component:de,exact:!0}),Object(d.jsx)(o.a,{path:"/movies",component:oe}),Object(d.jsx)(o.a,{path:"/series",component:le}),Object(d.jsx)(o.a,{path:"/search",component:pe})]})})}),Object(d.jsx)(S,{})]})},ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(d.jsx)(he,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/jetflix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/jetflix","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ve(t,e)}))}}()}},[[182,1,2]]]);
//# sourceMappingURL=main.da427ecd.chunk.js.map