(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"a":"goit-react-hw-05-movies"}')},15:function(e,t,n){e.exports={_nav:"Navigation__nav__3bsi8",_link:"Navigation__link__UAz3_",_activeLink:"Navigation__activeLink__3JKDl"}},17:function(e,t,n){e.exports={_goBackButton:"FilmInfo__goBackButton__2ajhQ",_infoSection:"FilmInfo__infoSection__35vGL",_imageWrapper:"FilmInfo__imageWrapper__2tNs2",_posterImage:"FilmInfo__posterImage__3fXUY"}},18:function(e,t,n){e.exports={_filmList:"FilmList__filmList__3W2mF",_filmLink:"FilmList__filmLink__nP15H"}},23:function(e,t,n){e.exports={_searchInput:"SearchBox__searchInput__1O67z",_searchButton:"SearchBox__searchButton__2VMyP"}},24:function(e,t,n){e.exports={_autorName:"Reviews__autorName__1jflS",_autorLink:"Reviews__autorLink__ACb82"}},42:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(35),s=n.n(c),i=n(8),o=(n(42),n(3)),u=n(2),l=n.n(u),j=n(5),h=n(9),b=n(18),p=n.n(b),d=n(12),f=n(0);var v=function(e){var t=e.films,n=Object(o.i)().url,r=1===n.length?n+d.a+"/":n;return Object(f.jsx)("ul",{className:p.a._filmList,children:t.map((function(e){return Object(f.jsx)("li",{className:p.a._filmItem,children:Object(f.jsx)(i.b,{to:r+"/"+e.id,className:p.a._filmLink,children:e.title})},e.id)}))})},x=n(13),O=n.n(x);O.a.defaults.baseURL="https://api.themoviedb.org/3/",O.a.defaults.params={api_key:"8948cf34f147d17edd39edcb74badce4",language:"en-US"};var m=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"day",e.next=3,O.a.get("/trending/movie/".concat(t),{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,O.a.get("/search/movie",{params:{query:t,page:n,include_adult:!1}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/movie/".concat(t),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/movie/".concat(t,"/credits"),{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,O.a.get("/movie/".concat(t,"/reviews"),{params:{page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var N=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:if(200!==(t=e.sent).status){e.next=9;break}console.dir(t.data.results),a(t.data.results),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{children:"Trending today"}),n&&Object(f.jsx)(v,{films:n})]})},y=n(25),S=n(23),L=n.n(S);var F=function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],s=a[1];function i(){console.log(c),t(c),s("")}return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"",children:Object(f.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&i()},className:L.a._searchInput,value:c,placeholder:"Film name"})}),Object(f.jsx)("button",{className:L.a._searchButton,onClick:i,children:"Search"})]})};var B=function(e){var t=e.films;return e.response,Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{children:"Search result"}),t&&Object(f.jsx)(v,{films:t})]})};var I=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(h.a)(c,2),i=s[0],u=s[1],b=Object(r.useState)(null),p=Object(h.a)(b,2),d=p[0],v=p[1],x=Object(o.f)(),O=Object(o.g)(),m=new URLSearchParams(O.search).get("query");return Object(r.useEffect)((function(){var e=m;function t(){return(t=Object(j.a)(l.a.mark((function t(){var n,r,a,c,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e,1);case 3:if(n=t.sent,console.dir(n),200!==n.status){t.next=12;break}r=n.data,a=r.page,c=r.total_pages,s=r.results,i=r.total_results,v({page:a,total_pages:c,total_results:i}),u(s),x.push(Object(y.a)(Object(y.a)({},O),{},{search:"query=".concat(e)})),t.next=13;break;case 12:throw new Error("Error - "+n.status);case 13:t.next=21;break;case 15:return t.prev=15,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),v(null),u(null),t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}e||(e=n),e&&(d||function(){t.apply(this,arguments)}())}),[x,m,O,n,d]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{onSearch:function(e){a(e),v(null)}}),m&&Object(f.jsx)(B,{films:i,response:d})]})},E=n(17),C=n.n(E);var A=function(e){var t=e.cast;if(t)return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+a,alt:n+" as "+r,width:"100px"}),Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:n}),Object(f.jsx)("p",{children:r})]},t)]})}))})})};var D=function(e){var t=e.comment;return t?t.map((function(e,t){return console.log(e),Object(f.jsx)("p",{children:e},t)})):Object(f.jsx)("h3",{children:"no comments"})},U=n(24),W=n.n(U);var P=function(e){var t=e.reviews;return e.page,t?Object(f.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.url,c=r.split("\r\n\r\n");return console.dir(c),Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{className:W.a._autorName,children:["Author:",Object(f.jsxs)("a",{href:a,className:W.a._autorLink,children:[" ",n," "]})]}),Object(f.jsx)(D,{comment:c})]},t)}))}):Object(f.jsx)("h3",{children:"We don't have any reviews for this movie."})};var R=function(e){e.block;var t=e.blockData;if(!t)return Object(f.jsx)("h3",{children:"loading..."});var n=t.cast,r=void 0===n?[]:n,a=t.results,c=void 0===a?[]:a,s=t.page,i=void 0===s?1:s;return r.length>0?Object(f.jsx)(A,{cast:r}):c.length>0?Object(f.jsx)(P,{reviews:c,page:i}):Object(f.jsx)("h3",{children:"We don't have any reviews for this movie."})};var J=function(e){var t=e.film,n=Object(r.useState)(null),a=Object(h.a)(n,2),c=a[0],s=a[1],u=Object(r.useState)(null),b=Object(h.a)(u,2),p=b[0],d=b[1],v=Object(o.f)().goBack;function x(e){e.preventDefault();var t=e.target.innerText.toLowerCase();c&&c===t?c!==t||s(null):s(t)}if(Object(r.useEffect)((function(){if(!t)return Object(f.jsx)("h1",{children:"loading..."});var e=t.id;function n(){return n=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"cast"!==n){t.next=7;break}return t.next=4,k(e);case 4:case 10:r=t.sent,t.next=15;break;case 7:if("reviews"!==n){t.next=13;break}return t.next=10,w(e);case 13:return d(null),t.abrupt("return");case 15:if(200!==r.status){t.next=19;break}d(r.data),t.next=20;break;case 19:throw new Error("Error - "+r.status);case 20:t.next=26;break;case 22:return t.prev=22,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),t.abrupt("return",null);case 26:case"end":return t.stop()}}),t,null,[[0,22]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(c)}),[t,c]),!t)return Object(f.jsx)("h1",{children:"loading..."});var O=t.id,m=t.title,_=t.poster_path,g=t.popularity,N=t.overview,y=t.genres,S=t.release_date.split("-")[0];console.log(S);var L=y.map((function(e){return e.name})).join(", ");return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:C.a._goBackButton,onClick:v,children:"Go Back"}),Object(f.jsxs)("section",{className:C.a._infoSection,children:[Object(f.jsx)("h1",{className:"visually-hidden",children:"Film info"}),Object(f.jsx)("div",{className:C.a._imageWrapper,children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+_,alt:m,className:C.a._posterImage})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"".concat(m," (").concat(S,")")}),Object(f.jsxs)("p",{children:["User Score: ",g.toFixed(0)," %"]}),Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:N}),Object(f.jsx)("h4",{children:"Genres"}),Object(f.jsx)("p",{children:L})]})]},O),Object(f.jsx)("hr",{}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"++/cast",onClick:x,children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"++/reviews",onClick:x,children:"Reviews"})})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("section",{children:c&&Object(f.jsx)(R,{block:c,blockData:p})})]})};var T=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(o.h)().movieId;return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,r,s,i,o,u,j,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(c);case 3:if(200!==(t=e.sent).status){e.next=9;break}n=t.data,r=n.id,s=n.title,i=n.poster_path,o=n.popularity,u=n.overview,j=n.genres,h=n.release_date,a({id:r,title:s,poster_path:i,popularity:o,overview:u,genres:j,release_date:h}),e.next=10;break;case 9:throw new Error("Error - "+t.status);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(f.jsx)("div",{className:"container",children:c&&Object(f.jsx)(J,{film:n})})},q=n(15),G=n.n(q);var M=function(){var e=Object(o.i)().url;return Object(f.jsxs)("nav",{className:G.a._nav,children:[Object(f.jsx)(i.c,{exact:!0,to:e+d.a+"/",className:G.a._link,activeClassName:G.a._activeLink,children:"Home"}),Object(f.jsx)(i.c,{to:e+d.a+"/movies",className:G.a._link,activeClassName:G.a._activeLink,children:"Movies"})]})};var z=function(){return Object(f.jsx)("h1",{children:"404 No such page :("})};var H=function(){var e=Object(o.i)().url;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(M,{})}),Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:e+"/",exact:!0,children:Object(f.jsx)(N,{})}),Object(f.jsx)(o.a,{path:e+d.a+"/",exact:!0,children:Object(f.jsx)(N,{})}),Object(f.jsx)(o.a,{path:e+d.a+"/movies/:movieId",children:Object(f.jsx)(T,{})}),Object(f.jsx)(o.a,{path:e+d.a+"/movies",children:Object(f.jsx)(I,{})}),Object(f.jsx)(o.a,{path:e+d.a+"/",children:Object(f.jsx)(z,{})})]})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(H,{})})}),document.getElementById("root")),K()}},[[69,1,2]]]);
//# sourceMappingURL=main.12bd1add.chunk.js.map