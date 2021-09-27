(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{14:function(e,t,n){e.exports={_nav:"Navigation__nav__3bsi8",_link:"Navigation__link__UAz3_",_activeLink:"Navigation__activeLink__3JKDl"}},16:function(e,t,n){e.exports={_goBackButton:"FilmInfo__goBackButton__2ajhQ",_infoSection:"FilmInfo__infoSection__35vGL",_imageWrapper:"FilmInfo__imageWrapper__2tNs2",_posterImage:"FilmInfo__posterImage__3fXUY"}},17:function(e,t,n){e.exports={_filmList:"FilmList__filmList__3W2mF",_filmLink:"FilmList__filmLink__nP15H"}},22:function(e,t,n){e.exports={_searchInput:"SearchBox__searchInput__1O67z",_searchButton:"SearchBox__searchButton__2VMyP"}},23:function(e,t,n){e.exports={_autorName:"Reviews__autorName__1jflS",_autorLink:"Reviews__autorLink__ACb82"}},41:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(34),s=n.n(c),i=n(11),o=(n(41),n(3)),u=n(2),l=n.n(u),j=n(5),h=n(6),p=n(17),b=n.n(p),d=n(0);var f=function(e){var t=e.films,n=Object(o.g)();return Object(d.jsx)("ul",{className:b.a._filmList,children:t.map((function(e){return Object(d.jsx)("li",{className:b.a._filmItem,children:Object(d.jsx)(i.b,{to:{pathname:"movies/"+e.id,state:{pathback:n}},className:b.a._filmLink,children:e.title})},e.id)}))})},v=n(12),x=n.n(v);x.a.defaults.baseURL="https://api.themoviedb.org/3/",x.a.defaults.params={api_key:"8948cf34f147d17edd39edcb74badce4",language:"en-US"};var O=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"day",e.next=3,x.a.get("/trending/movie/".concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/search/movie",{params:{query:t,page:n,include_adult:!1}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,x.a.get("/movie/".concat(t,"/reviews"),{params:{page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var k=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:if(200!==(t=e.sent).status){e.next=8;break}a(t.data.results),e.next=9;break;case 8:throw new Error("Error - "+t.status);case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Trending today"}),n&&Object(d.jsx)(f,{films:n})]})},N=n(24),y=n(22),S=n.n(y);var L=function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(h.a)(n,2),c=a[0],s=a[1];function i(){t(c),s("")}return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"",children:Object(d.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},onKeyDown:function(e){"Enter"===e.code&&i()},className:S.a._searchInput,value:c,placeholder:"Film name"})}),Object(d.jsx)("button",{className:S.a._searchButton,onClick:i,children:"Search"})]})};var F=function(e){var t=e.films,n=e.response;return t?Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Search result"}),t&&Object(d.jsx)(f,{films:t,response:n}),0===t.length&&Object(d.jsx)("h2",{children:"Not found. Please search another film."})]}):Object(d.jsx)("h2",{children:"loading..."})};var I=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(h.a)(c,2),i=s[0],u=s[1],p=Object(r.useState)(null),b=Object(h.a)(p,2),f=b[0],v=b[1],x=Object(o.f)(),O=Object(o.g)(),_=new URLSearchParams(O.search).get("query"),g=n||_;return Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,r,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(g,1);case 3:if(200!==(t=e.sent).status){e.next=11;break}n=t.data,r=n.page,a=n.total_pages,c=n.results,s=n.total_results,v({page:r,total_pages:a,total_results:s,search_query:g}),u(c),x.push(Object(N.a)(Object(N.a)({},O),{},{search:"query=".concat(g)})),e.next=12;break;case 11:throw new Error("Error - "+t.status);case 12:e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),v(null),u(null),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}g&&(f&&f.search_query===g||function(){e.apply(this,arguments)}())}),[x,O,f,g]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(L,{onSearch:function(e){a(e),v(null)}}),_&&Object(d.jsx)(F,{films:i,response:f})]})},B=n(16),E=n.n(B),C=n.p+"static/media/no-image-available.ae2f3efe.png";var A=function(e){var t=e.cast;return t?Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.name,a=e.character,c=e.profile_path,s=c?"https://image.tmdb.org/t/p/w300"+c:C;return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("img",{src:s,alt:n+" as "+a,width:"100px"},t+"_1"),Object(d.jsxs)("li",{children:[Object(d.jsx)("p",{children:n},t+"_3"),Object(d.jsx)("p",{children:a},t+"_4")]},t+"_2")]},t+"_0")}))})}):Object(d.jsx)("h3",{children:"loading..."})};var P=function(e){var t=e.comment;return t?t.map((function(e,t){return Object(d.jsx)("p",{children:e},t)})):Object(d.jsx)("h3",{children:"no comments"})},U=n(23),q=n.n(U);var R=function(e){var t=e.reviews;return e.page,!t||t.length<1?Object(d.jsx)("h3",{children:"We don't have any reviews for this movie."}):Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content,a=e.url,c=r.split("\r\n\r\n");return Object(d.jsxs)("li",{children:[Object(d.jsxs)("p",{className:q.a._autorName,children:["Author:",Object(d.jsxs)("a",{href:a,className:q.a._autorLink,children:[" ",n," "]})]}),Object(d.jsx)(P,{comment:c})]},t)}))})};var W=function(e){var t=e.film,n=Object(r.useState)(null),a=Object(h.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)({cast:[],results:[],page:1}),u=Object(h.a)(i,2),p=u[0],b=u[1],f=Object(o.i)().url,v=Object(o.f)(),x=Object(o.g)(),O=x.pathname.includes("cast")?"cast":x.pathname.includes("reviews")?"reviews":"";function m(e){e.preventDefault();var t=e.target.innerText.toLowerCase();return c&&c===t?c===t?(s(null),v.push(v.location.pathname.split(c)[0]),void(O="")):void 0:(s(t),void v.push((f+"/"+t).split("//").join("/")))}if(O!==c&&s(O),Object(r.useEffect)((function(){if(!t||!O)return Object(d.jsx)("h1",{children:"loading..."});var e=t.id;function n(){return n=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"cast"!==n){t.next=7;break}return t.next=4,g(e);case 4:case 10:r=t.sent,t.next=15;break;case 7:if("reviews"!==n){t.next=13;break}return t.next=10,w(e);case 13:return b(null),t.abrupt("return",Object(d.jsx)("h1",{children:"No cast"}));case 15:if(200!==r.status){t.next=19;break}b(r.data),t.next=20;break;case 19:throw new Error("Error - "+r.status);case 20:t.next=26;break;case 22:return t.prev=22,t.t0=t.catch(0),console.log("rejected   "+t.t0.message),t.abrupt("return",null);case 26:case"end":return t.stop()}}),t,null,[[0,22]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(c)}),[t,c,O]),!t)return Object(d.jsx)("h1",{children:"loading..."});var _=t.id,k=t.title,N=t.poster_path,y=t.popularity,S=t.overview,L=t.genres,F=t.release_date.split("-")[0],I=L.map((function(e){return e.name})).join(", ");return console.log(p),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:E.a._goBackButton,onClick:function(){if(!x.state)return v.push("/");v.push(x.state.pathback)},children:"Go Back"}),Object(d.jsxs)("section",{className:E.a._infoSection,children:[Object(d.jsx)("h1",{className:"visually-hidden",children:"Film info"}),Object(d.jsx)("div",{className:E.a._imageWrapper,children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+N,alt:k,className:E.a._posterImage})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"".concat(k," (").concat(F,")")}),Object(d.jsxs)("p",{children:["User Score: ",y.toFixed(0)," %"]}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:S}),Object(d.jsx)("h4",{children:"Genres"}),Object(d.jsx)("p",{children:I})]})]},_),Object(d.jsx)("hr",{}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Additional information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:f+"/cast",onClick:m,children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:f+"/reviews",onClick:m,children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("section",{children:[Object(d.jsx)(o.a,{path:f+"/cast",children:"cast"===c&&Object(d.jsx)(A,{cast:p.cast})}),Object(d.jsx)(o.a,{path:f+"/reviews",children:"reviews"===c&&Object(d.jsx)(R,{reviews:p.results,page:p.page})})]})]})};var D=function(){return Object(d.jsx)("h1",{children:"404 No such page :("})};var T=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(h.a)(c,2),i=s[0],u=s[1],p=Object(o.h)().movieId;return parseInt(p).toString().length===p.length||i||u(!0),Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t,n,r,c,s,i,o,j,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(parseInt(p));case 3:if(200!==(t=e.sent).status){e.next=10;break}n=t.data,r=n.id,c=n.title,s=n.poster_path,i=n.popularity,o=n.overview,j=n.genres,h=n.release_date,a({id:r,title:c,poster_path:s,popularity:i,overview:o,genres:j,release_date:h}),u(!1),e.next=11;break;case 10:throw new Error("Error - "+t.status);case 11:e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log("rejected   "+e.t0.message),e.t0.response&&404===e.t0.response.status&&u(!0),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[p]),i?Object(d.jsx)(D,{}):Object(d.jsx)("div",{className:"container",children:p&&Object(d.jsx)(W,{film:n})})},G=n(14),J=n.n(G);var M=function(){var e=Object(o.g)();return Object(d.jsxs)("nav",{className:J.a._nav,children:[Object(d.jsx)(i.c,{exact:!0,to:"/",className:J.a._link,activeClassName:J.a._activeLink,children:"Home"}),Object(d.jsx)(i.c,{to:{pathname:"/movies",state:{pathback:e}},className:J.a._link,activeClassName:J.a._activeLink,children:"Movies"})]})};var z=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(M,{})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,children:Object(d.jsx)(k,{})}),Object(d.jsx)(o.a,{path:"/movies/:movieId",children:Object(d.jsx)(T,{})}),Object(d.jsx)(o.a,{path:"/movies",children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(D,{})})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(z,{})})}),document.getElementById("root")),H()}},[[68,1,2]]]);
//# sourceMappingURL=main.07a9020a.chunk.js.map