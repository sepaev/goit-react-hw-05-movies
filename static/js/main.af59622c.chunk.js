(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{14:function(e,t,n){e.exports={_nav:"Navigation__nav__3bsi8",_link:"Navigation__link__UAz3_",_activeLink:"Navigation__activeLink__3JKDl"}},16:function(e,t,n){e.exports={_goBackButton:"FilmInfo__goBackButton__2ajhQ",_infoSection:"FilmInfo__infoSection__35vGL",_imageWrapper:"FilmInfo__imageWrapper__2tNs2",_posterImage:"FilmInfo__posterImage__3fXUY"}},17:function(e,t,n){e.exports={_filmList:"FilmList__filmList__3W2mF",_filmLink:"FilmList__filmLink__nP15H"}},22:function(e,t,n){e.exports={_searchInput:"SearchBox__searchInput__1O67z",_searchButton:"SearchBox__searchButton__2VMyP"}},23:function(e,t,n){e.exports={_autorName:"Reviews__autorName__1jflS",_autorLink:"Reviews__autorLink__ACb82"}},41:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(34),s=n.n(c),i=n(8),o=(n(41),n(3)),u=n(2),l=n.n(u),j=n(5),h=n(9),b=n(17),p=n.n(b),d=n(0);var f=function(e){var t=e.films,n=Object(o.i)().url;return Object(d.jsx)("ul",{className:p.a._filmList,children:t.map((function(e){return Object(d.jsx)("li",{className:p.a._filmItem,children:Object(d.jsx)(i.b,{to:n+"/"+e.id,className:p.a._filmLink,children:e.title})},e.id)}))})},v=n(12),x=n.n(v);x.a.defaults.baseURL="https://api.themoviedb.org/3/",x.a.defaults.params={api_key:"8948cf34f147d17edd39edcb74badce4",language:"en-US"};var O=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"day",e.next=3,x.a.get("/trending/movie/".concat(t),{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/search/movie",{params:{query:t,page:n,include_adult:!1}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t,"/credits"),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/movie/".concat(t,"/reviews"),{params:{page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var w=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:if(200!==(t=e.sent).status){e.next=9;break}console.dir(t.data.results),a(t.data.results),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Trending today"}),n&&Object(d.jsx)(f,{films:n})]})},N=n(24),y=n(22),S=n.n(y);var L=function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],s=a[1];function i(){console.log(c),t(c),s("")}return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"",children:Object(d.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&i()},className:S.a._searchInput,value:c,placeholder:"Film name"})}),Object(d.jsx)("button",{className:S.a._searchButton,onClick:i,children:"Search"})]})};var F=function(e){var t=e.films;return e.response,Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Search result"}),t&&Object(d.jsx)(f,{films:t})]})};var B=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(h.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(null),p=Object(h.a)(b,2),f=p[0],v=p[1],x=Object(o.f)(),O=Object(o.g)(),_=new URLSearchParams(O.search).get("query");return Object(r.useEffect)((function(){var e=_;function t(){return(t=Object(j.a)(l.a.mark((function t(){var n,r,a,c,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e,1);case 3:if(n=t.sent,console.dir(n),200!==n.status){t.next=13;break}r=n.data,a=r.page,c=r.total_pages,s=r.results,i=r.total_results,v({page:a,total_pages:c,total_results:i}),u(s),console.log(x),x.push(Object(N.a)(Object(N.a)({},O),{},{search:"query=".concat(e)})),t.next=14;break;case 13:throw new Error("Error - "+n.status);case 14:t.next=22;break;case 16:return t.prev=16,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),v(null),u(null),t.abrupt("return",null);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}e||(e=n),e&&(f||function(){t.apply(this,arguments)}())}),[x,_,O,n,f]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{onSearch:function(e){a(e),v(null)}}),_&&Object(d.jsx)(F,{films:i,response:f})]})},I=n(16),E=n.n(I),C=n.p+"static/media/no-image-available.ae2f3efe.png";var A=function(e){var t=e.cast;if(t)return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path,c=a?"https://image.tmdb.org/t/p/w300"+a:C;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:c,alt:n+" as "+r,width:"100px"}),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:n}),Object(d.jsx)("p",{children:r})]},t)]})}))})})};var D=function(e){var t=e.comment;return t?t.map((function(e,t){return console.log(e),Object(d.jsx)("p",{children:e},t)})):Object(d.jsx)("h3",{children:"no comments"})},U=n(23),W=n.n(U);var P=function(e){var t=e.reviews;return e.page,t?Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.url,c=r.split("\r\n\r\n");return console.dir(c),Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{className:W.a._autorName,children:["Author:",Object(d.jsxs)("a",{href:a,className:W.a._autorLink,children:[" ",n," "]})]}),Object(d.jsx)(D,{comment:c})]},t)}))}):Object(d.jsx)("h3",{children:"We don't have any reviews for this movie."})};var R=function(e){e.block;var t=e.blockData;if(!t)return Object(d.jsx)("h3",{children:"loading..."});var n=t.cast,r=void 0===n?[]:n,a=t.results,c=void 0===a?[]:a,s=t.page,i=void 0===s?1:s;return r.length>0?Object(d.jsx)(A,{cast:r}):c.length>0?Object(d.jsx)(P,{reviews:c,page:i}):Object(d.jsx)("h3",{children:"We don't have any reviews for this movie."})};var T=function(e){var t=e.film,n=Object(r.useState)(null),a=Object(h.a)(n,2),c=a[0],s=a[1],u=Object(r.useState)(null),b=Object(h.a)(u,2),p=b[0],f=b[1],v=Object(o.f)().goBack;function x(e){e.preventDefault();var t=e.target.innerText.toLowerCase();c&&c===t?c!==t||s(null):s(t)}if(Object(r.useEffect)((function(){if(!t)return Object(d.jsx)("h1",{children:"loading..."});var e=t.id;function n(){return n=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"cast"!==n){t.next=7;break}return t.next=4,g(e);case 4:case 10:r=t.sent,t.next=15;break;case 7:if("reviews"!==n){t.next=13;break}return t.next=10,k(e);case 13:return f(null),t.abrupt("return");case 15:if(200!==r.status){t.next=19;break}f(r.data),t.next=20;break;case 19:throw new Error("Error - "+r.status);case 20:t.next=26;break;case 22:return t.prev=22,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),t.abrupt("return",null);case 26:case"end":return t.stop()}}),t,null,[[0,22]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(c)}),[t,c]),!t)return Object(d.jsx)("h1",{children:"loading..."});var O=t.id,m=t.title,_=t.poster_path,w=t.popularity,N=t.overview,y=t.genres,S=t.release_date.split("-")[0];console.log(S);var L=y.map((function(e){return e.name})).join(", ");return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:E.a._goBackButton,onClick:v,children:"Go Back"}),Object(d.jsxs)("section",{className:E.a._infoSection,children:[Object(d.jsx)("h1",{className:"visually-hidden",children:"Film info"}),Object(d.jsx)("div",{className:E.a._imageWrapper,children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+_,alt:m,className:E.a._posterImage})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"".concat(m," (").concat(S,")")}),Object(d.jsxs)("p",{children:["User Score: ",w.toFixed(0)," %"]}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:N}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("p",{children:L})]})]},O),Object(d.jsx)("hr",{}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Additional information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"++/cast",onClick:x,children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"++/reviews",onClick:x,children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("section",{children:c&&Object(d.jsx)(R,{block:c,blockData:p})})]})};var q=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(o.h)().movieId;return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,r,s,i,o,u,j,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(c);case 3:if(200!==(t=e.sent).status){e.next=9;break}n=t.data,r=n.id,s=n.title,i=n.poster_path,o=n.popularity,u=n.overview,j=n.genres,h=n.release_date,a({id:r,title:s,poster_path:i,popularity:o,overview:u,genres:j,release_date:h}),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(d.jsx)("div",{className:"container",children:c&&Object(d.jsx)(T,{film:n})})},G=n(14),J=n.n(G);var M=function(){return Object(d.jsxs)("nav",{className:J.a._nav,children:[Object(d.jsx)(i.c,{exact:!0,to:"/",className:J.a._link,activeClassName:J.a._activeLink,children:"Home"}),Object(d.jsx)(i.c,{to:"/movies",className:J.a._link,activeClassName:J.a._activeLink,children:"Movies"})]})};var z=function(){return Object(d.jsx)("h1",{children:"404 No such page :("})};var H=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(M,{})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{path:"/movies/:movieId",children:Object(d.jsx)(q,{})}),Object(d.jsx)(o.a,{path:"/movies",children:Object(d.jsx)(B,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(z,{})})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(H,{})})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.af59622c.chunk.js.map