(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/card-default.5e7a07dd.jpeg"},11:function(e,a,t){e.exports=t(21)},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),l=t.n(c),s=(t(20),t(3)),i=t(7),o=t.n(i),u=t(4);function m(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"IMAGES FROM NASA"),r.a.createElement("nav",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:o.a,alt:"NASA logo"}))))}function h(e){var a=e.search,t=e.handleChange,n=e.onSubmit;return r.a.createElement("div",{className:"searchform"},r.a.createElement("form",{className:"searchform__form",onSubmit:n},r.a.createElement("input",{className:"searchform__input",type:"search",id:"search",value:a,onChange:t,placeholder:"What are you looking for?"}),r.a.createElement("button",{className:"searchform__button",disabled:""===a,type:"submit",id:"submit-search-btn"},"Search")))}function d(){return r.a.createElement("i",{className:"circle-preloader"})}var f=t(1);function E(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Tyler Maraist"))}function _(e){var a=e.search,t=e.handleSearchChange,n=e.handleSearchSubmit,c=e.isLoaded;return r.a.createElement("div",null,c?r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(h,{search:a,handleChange:t,onSubmit:n}),r.a.createElement(f.a,null),r.a.createElement(E,null)):r.a.createElement(d,null))}function b(e){var a=e.card,t=e.handleImageClick;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__image",src:a.links[0].href,alt:a.data[0].title,onClick:function(){t(a)}}),r.a.createElement("div",null,r.a.createElement("p",{className:"card__title"},a.data[0].title),r.a.createElement("p",{className:"card__description"},a.data[0].description)))}function p(e){var a=e.cards,t=e.handleImageClick;return r.a.createElement("section",null,r.a.createElement("ul",{className:"cards"},a.map(function(e){return r.a.createElement(b,{key:e.data[0].nasa_id,card:e,handleImageClick:t})})))}var v=t(8),g=t(9),S=new(function(){function e(a){var t=a.baseUrl,n=a.headers;Object(v.a)(this,e),this._baseUrl=t,this._headers=n}return Object(g.a)(e,[{key:"_handleServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/asset/?orderby=popular"),{headers:this._headers}).then(this._handleServerResponse)}},{key:"search",value:function(e){return fetch("".concat(this._baseUrl,"/search?media_type=image&q=").concat(e),{headers:this._headers}).then(this._handleServerResponse)}},{key:"getImage",value:function(e){return fetch("".concat(this._baseUrl,"/asset/").concat(e),{headers:this._headers}).then(this._handleServerResponse)}},{key:"getDetails",value:function(e){return fetch("".concat(this._baseUrl,"/metadata/").concat(e),{headers:this._headers}).then(this._handleServerResponse).then(function(e){var a=e.location;return fetch(a)}).then(this._handleServerResponse)}}]),e}())({baseUrl:"https://images-api.nasa.gov",headers:{Authorization:"KNwVoypkMlR1eO8crEcvjgcm2fOaCoejuwIyKQ8b","Content-Type":"application/json"}});function N(){var e=Object(f.h)().nasa_id,a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),m=o[0],h=o[1],d=Object(n.useState)([]),E=Object(s.a)(d,2),_=E[0],b=E[1];return Object(n.useEffect)(function(){S.getImage(e).then(function(e){var a=e.collection.items;l(a[1])}).catch(function(e){return console.error(e)})},[]),Object(n.useEffect)(function(){S.getDetails(e).then(function(e){var a=e["AVAIL:Description"],t=e["AVAIL:Title"];h(a),b(t)}).catch(function(e){return console.error(e)})},[]),r.a.createElement("article",{className:"details"},r.a.createElement("img",{className:"details__image",src:c.href,alt:_}),r.a.createElement("h2",{className:"details__title"},_),r.a.createElement("p",{className:"details__subtitle"},"NASA ID: ",e),r.a.createElement("p",{className:"details__info"},m),r.a.createElement("nav",null,r.a.createElement(u.b,{to:"/",className:"details__info link"},"Home")))}var j=t(10),O=t.n(j);var k=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),i=Object(s.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(""),h=Object(s.a)(m,2),d=h[0],E=h[1],b=Object(f.g)();return Object(n.useEffect)(function(){S.getInitialCards().then(function(e){var a=e.collection.items;c(!0),u(a)}).catch(function(e){return console.error(e)})},[]),r.a.createElement("div",{className:"page"},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",element:r.a.createElement(_,{search:d,handleSearchChange:function(e){E(e.target.value)},handleSearchSubmit:function(e){e.preventDefault(),S.search(d).then(function(e){var a=e.collection.items;c(!0),u(a)}).catch(function(e){return console.error(e)}),b("/")},isLoaded:t})},r.a.createElement(f.b,{path:"/:nasa_id",element:r.a.createElement(N,{img:O.a,isLoaded:t})}),r.a.createElement(f.b,{path:"/",element:r.a.createElement(p,{cards:o,search:d,handleImageClick:function(e){b("/".concat(e.data[0].nasa_id))}})}))))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(k,null))))},7:function(e,a,t){e.exports=t.p+"static/media/nasa-logo.72c1338e.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.3d3ca60f.chunk.js.map