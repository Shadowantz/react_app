!function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],p=0,m=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={0:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([84,1]),r()}({83:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(10),o=r.n(i),s=r(22),c=r(129),l=r(133),u=r(16),p=r(121),m=r(124),y=r(125),f=r(135),d=r(63),b=r(132),g=r(119),E=r(120),v=r(67),k=r(116),w=r(56),h=r(131),P=r(66),S=r(117),O=r(134),j=r(118);function T(e,t,r){var n,a=this,i=arguments;return function(){var o=a,s=i,c=r&&!n;clearTimeout(n),n=setTimeout((function(){n=null,r||e.apply(o,s)}),t),c&&e.apply(o,s)}}var N=function(e){return"String"===w.a(e)?h.a(e):h.a(P.a(e))};var B={desc:function(e){return S.a(O.a(e))},asc:function(e){return j.a(O.a(e))}},A=[{ticketType:"Bug",ticketNumber:1,ticketSummary:"",assignee:"unassigned",reporter:"user2",priority:"medium",status:"in progress",estimate:"8h"},{ticketType:"User Story",ticketNumber:2,ticketSummary:"",assignee:"unassigned",reporter:"user1",priority:"blocker",status:"open",estimate:"0"},{ticketType:"Bug",ticketNumber:3,ticketSummary:"",assignee:"unassigned",reporter:"user1",priority:"critical",status:"open",estimate:"0"},{ticketType:"Epic",ticketNumber:4,ticketSummary:"",assignee:"user3",reporter:"user1",priority:"minor",status:"closed",estimate:"1h"},{ticketType:"Bug",ticketNumber:5,ticketSummary:"",assignee:"unassigned",reporter:"user1",priority:"blocker",status:"in progress",estimate:"1h"},{ticketType:"Epic",ticketNumber:6,ticketSummary:"",assignee:"user1",reporter:"user2",priority:"blocker",status:"open",estimate:"0"},{ticketType:"Task",ticketNumber:7,ticketSummary:"",assignee:"unassigned",reporter:"user2",priority:"minor",status:"in progress",estimate:"8"},{ticketType:"Epic",ticketNumber:8,ticketSummary:"",assignee:"unassigned",reporter:"user1",priority:"blocker",status:"open",estimate:"0"},{ticketType:"User Story",ticketNumber:9,ticketSummary:"",assignee:"unassigned",reporter:"user3",priority:"blocker",status:"open",estimate:"0.5h"},{ticketType:"User Story",ticketNumber:10,ticketSummary:"",assignee:"user1",reporter:"user3",priority:"critical",status:"open",estimate:"2h"}];function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={orderBy:"name",orderDirection:"desc",page:0,rowsPerView:5,tableElements:A,displayElements:b.a(5,A)[0],splitElements:b.a(5,A)},C=Object(d.a)(x,(function(e,t){switch(t.type){case"sortElements":var r=e.orderDirection,n=e.tableElements,a=e.rowsPerView,i=e.page,o="desc"===r?"asc":"desc",s=B[r],c=g.a(s(t.payload),n),p=E.a(a,c);return z({},e,{orderBy:t.payload,orderDirection:o,tableElements:c,displayElements:p[i],splitElements:p});case"setPage":var m=t.payload;return z({},e,{page:m,displayElements:e.splitElements[m]});case"setRowsPerView":var y=t.payload,f=e.tableElements,d=e.page,b=E.a(y,f);return z({},e,{splitElements:b,rowsPerView:t.payload,displayElements:b[d]});case"filterBySearch":var w=e.splitElements,h=e.page;return z({},e,{displayElements:v.a((function(e){return k.a(!0,(r=e,n=t.payload,l.a((function(e){var t=N(n),a=N(r[e]);return k.a(t,a)}),u.a(r))));var r,n}),w[h])});default:return e}})),R={ticketType:"Ticket Type",ticketNumber:"Ticket Number",ticketSummary:"Ticket Summary",assignee:"Assignee",reporter:"Reporter",priority:"Priority",status:"Status",estimate:"Estimate"};var _=Object(s.b)((function(e){return{orderBy:e.orderBy,orderDirection:e.orderDirection}}),{sortElementsAction:function(e){return{type:"sortElements",payload:e}}})((function(e){var t=e.sortElementsAction,r=e.orderBy,n=e.orderDirection;return a.a.createElement(p.a,null,a.a.createElement(m.a,null,l.a((function(e){return a.a.createElement(y.a,{key:e,padding:"default",sortDirection:n,size:"small"},a.a.createElement(f.a,{active:r===e,direction:n,onClick:function(){return t(e)}},R[e]))}),u.a(R))))})),I=r(126);var M=Object(s.b)((function(e){return{displayElements:e.displayElements}}))((function(e){var t=e.displayElements;return t?a.a.createElement(I.a,null,l.a((function(e){return r=(t=e).ticketType,n=t.ticketNumber,i=t.ticketSummary,o=t.assignee,s=t.reporter,c=t.priority,l=t.status,u=t.estimate,a.a.createElement(m.a,{tabIndex:-1,key:n},a.a.createElement(y.a,{id:n,size:"small"},r),a.a.createElement(y.a,{align:"center",size:"small"},n),a.a.createElement(y.a,{size:"small"},i),a.a.createElement(y.a,{size:"small"},o),a.a.createElement(y.a,{size:"small"},s),a.a.createElement(y.a,{size:"small"},c),a.a.createElement(y.a,{size:"small"},l),a.a.createElement(y.a,{align:"center",size:"small"},u));var t,r,n,i,o,s,c,l,u}),t)):null})),U=r(130),J=r(127),q=r(136),K=r(128),W=r(65),F=r.n(W);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=Object(s.b)((function(e){return{page:e.page,rowsPerView:e.rowsPerView,elementsCount:e.tableElements.length}}),{setPageAction:function(e){return{type:"setPage",payload:e}},setRowsPerViewAction:function(e){return{type:"setRowsPerView",payload:e}},filterBySearchAction:function(e){return{type:"filterBySearch",payload:e}}})((function(e){var t=e.elementsCount,r=e.page,i=e.rowsPerView,o=e.setRowsPerViewAction,s=e.setPageAction,c=e.filterBySearchAction,l=G(Object(n.useState)(""),2),u=l[0],p=l[1];return a.a.createElement(J.a,null,a.a.createElement(m.a,null,a.a.createElement(y.a,{colSpan:3},a.a.createElement(q.a,{className:"inputClass",placeholder:"Search...",onChange:function(e){return T(((t=e.target.value)||c(""),void p(t)),300);var t},onKeyPress:function(e){return T(void("Enter"===e.key&&c(u)),300)},type:"search"}),a.a.createElement(K.a,{"aria-label":"search",onClick:function(){return c(u)}},a.a.createElement(F.a,null))),a.a.createElement(U.a,{colSpan:6,rowsPerPageOptions:[5,10],count:t,rowsPerPage:i,page:r,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:function(e,t){return s(t)},onChangeRowsPerPage:function(e){return o(e.target.value)}})))}));var L=function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"tableWrapper"},a.a.createElement(c.a,{className:"table",size:"small"},a.a.createElement(_,null),a.a.createElement(M,null),a.a.createElement(H,null))))},Q=r(39),X=Object(Q.b)(C,void 0);r(83);o.a.render(a.a.createElement(s.a,{store:X},a.a.createElement(L,null)),document.querySelector("#app"))}});