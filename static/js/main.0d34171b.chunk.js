(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{14:function(e,t,n){e.exports={_nav:"Navigation__nav__3bsi8",_link:"Navigation__link__UAz3_",_activeLink:"Navigation__activeLink__3JKDl"}},16:function(e,t,n){e.exports={_goBackButton:"FilmInfo__goBackButton__2ajhQ",_infoSection:"FilmInfo__infoSection__35vGL",_imageWrapper:"FilmInfo__imageWrapper__2tNs2",_posterImage:"FilmInfo__posterImage__3fXUY"}},17:function(e,t,n){e.exports={_filmList:"FilmList__filmList__3W2mF",_filmLink:"FilmList__filmLink__nP15H"}},22:function(e,t,n){e.exports={_autorName:"Reviews__autorName__1jflS",_autorLink:"Reviews__autorLink__ACb82"}},23:function(e,t,n){e.exports={_searchInput:"SearchBox__searchInput__1O67z",_searchButton:"SearchBox__searchButton__2VMyP"}},40:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(33),s=n.n(c),i=n(10),o=(n(40),n(3)),u=n(2),l=n.n(u),j=n(7),h=n(11),p=n(17),b=n.n(p),d=n(0);var f=function(e){var t=e.films,n=Object(o.f)().url;return Object(d.jsx)("ul",{className:b.a._filmList,children:t.map((function(e){return Object(d.jsx)("li",{className:b.a._filmItem,children:Object(d.jsx)(i.b,{to:n+"/movies/"+e.id,className:b.a._filmLink,children:e.title})},e.id)}))})},v=n(12),x=n.n(v);x.a.defaults.baseURL="https://api.themoviedb.org/3/",x.a.defaults.params={api_key:"8948cf34f147d17edd39edcb74badce4",language:"en-US"};var m=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"week",e.next=3,x.a.get("/trending/movie/".concat(t),{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/search/movie",{params:{query:t,page:n,include_adult:!1}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t,"/credits"),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/movie/".concat(t,"/reviews"),{params:{page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var w=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:if(200!==(t=e.sent).status){e.next=9;break}console.dir(t.data.results),a(t.data.results),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Trending today"}),n&&Object(d.jsx)(f,{films:n})]})},N=n(16),y=n.n(N);var L=function(e){var t=e.cast;if(t)return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+a,alt:n+" as "+r,width:"100px"}),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)("p",{children:r})]},t)]})}))})})};var S=function(e){var t=e.comment;return t?t.map((function(e,t){return console.log(e),Object(d.jsx)("p",{children:e},t)})):Object(d.jsx)("h3",{children:"no comments"})},F=n(22),B=n.n(F);var I=function(e){var t=e.reviews;return e.page,t?Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.url,c=r.split("\r\n\r\n");return console.dir(c),Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{className:B.a._autorName,children:["Author:",Object(d.jsxs)("a",{href:a,className:B.a._autorLink,children:[" ",n," "]})]}),Object(d.jsx)(S,{comment:c})]},t)}))}):Object(d.jsx)("h3",{children:"We don't have any reviews for this movie."})};var C=function(e){e.block;var t=e.blockData;if(!t)return Object(d.jsx)("h3",{children:"loading..."});var n=t.cast,r=void 0===n?[]:n,a=t.results,c=void 0===a?[]:a,s=t.page,i=void 0===s?1:s;return r.length>0?Object(d.jsx)(L,{cast:r}):c.length>0?Object(d.jsx)(I,{reviews:c,page:i}):Object(d.jsx)("h3",{children:"loading..."})};var E=function(e){var t=e.film,n=Object(r.useState)(null),a=Object(h.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(null),u=Object(h.a)(o,2),p=u[0],b=u[1];function f(e){e.preventDefault();var t=e.target.innerText.toLowerCase();c&&c===t?c!==t||s(null):s(t)}if(Object(r.useEffect)((function(){if(!t)return Object(d.jsx)("h1",{children:"loading..."});var e=t.id;function n(){return n=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"cast"!==n){t.next=7;break}return t.next=4,g(e);case 4:case 10:r=t.sent,t.next=15;break;case 7:if("reviews"!==n){t.next=13;break}return t.next=10,k(e);case 13:return b(null),t.abrupt("return");case 15:if(200!==r.status){t.next=19;break}b(r.data),t.next=20;break;case 19:throw new Error("Error - "+r.status);case 20:t.next=26;break;case 22:return t.prev=22,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),t.abrupt("return",null);case 26:case"end":return t.stop()}}),t,null,[[0,22]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(c)}),[t,c]),!t)return Object(d.jsx)("h1",{children:"loading..."});var v=t.id,x=t.title,m=t.poster_path,O=t.popularity,_=t.overview,w=t.genres,N=t.release_date.split("-")[0];console.log(N);var L=w.map((function(e){return e.name})).join(", ");return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:y.a._goBackButton,children:" Go Back"}),Object(d.jsxs)("section",{className:y.a._infoSection,children:[Object(d.jsx)("h1",{className:"visually-hidden",children:"Film info"}),Object(d.jsx)("div",{className:y.a._imageWrapper,children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+m,alt:x,className:y.a._posterImage})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"".concat(x," (").concat(N,")")}),Object(d.jsxs)("p",{children:["User Score: ",O.toFixed(0)," %"]}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:_}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("p",{children:L})]})]},v),Object(d.jsx)("hr",{}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Additional information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"++/cast",onClick:f,children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"++/reviews",onClick:f,children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{children:c&&Object(d.jsx)(C,{block:c,blockData:p})})]})},A=n(23),D=n.n(A);var U=function(e){var t=e.onSearch;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"",children:Object(d.jsx)("input",{type:"text",className:D.a._searchInput,placeholder:"Film name"})}),Object(d.jsx)("button",{className:D.a._searchButton,onClick:t,children:"Search"})]})};var W=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!0),s=Object(h.a)(c,2),i=s[0],o=(s[1],Object(r.useState)("")),u=Object(h.a)(o,2),p=u[0],b=u[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,r,c,s,i,o,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(604);case 3:if(200!==(t=e.sent).status){e.next=9;break}n=t.data,r=n.id,c=n.title,s=n.poster_path,i=n.popularity,o=n.overview,u=n.genres,j=n.release_date,a({id:r,title:c,poster_path:s,popularity:i,overview:o,genres:u,release_date:j}),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(p,1);case 3:t=e.sent,console.dir(t),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}p&&function(){e.apply(this,arguments)}()}),[p]),i?Object(d.jsx)(U,{onSearch:function(e){b(e)}}):Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(E,{film:n})})},P=n(14),R=n.n(P);var T=function(){var e=Object(o.f)().url;return Object(d.jsxs)("nav",{className:R.a._nav,children:[Object(d.jsx)(i.c,{exact:!0,to:e+"/",className:R.a._link,activeClassName:R.a._activeLink,children:"Home"}),Object(d.jsx)(i.c,{to:e+"/movies",className:R.a._link,activeClassName:R.a._activeLink,children:"Movies"})]})};var G=function(){return Object(d.jsx)("h1",{children:"404 No such page :("})};var J=function(){var e=Object(o.f)().url;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(T,{})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:e+"/",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{path:e+"/movies",children:Object(d.jsx)(W,{})}),Object(d.jsx)(o.a,{path:e+"/",children:Object(d.jsx)(G,{})})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(J,{})})}),document.getElementById("root")),M()}},[[67,1,2]]]);
//# sourceMappingURL=main.0d34171b.chunk.js.map