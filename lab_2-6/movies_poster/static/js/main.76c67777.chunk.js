(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(15),r=n.n(s),a=(n(5),n(4)),j=n.n(a),d=(n(14),n(16)),o=n(0);var l=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/poster/movies/"}).then((function(e){i(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"movie_bar",children:Object(o.jsx)("div",{class:"container movie_items",children:n.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("div",{className:"item_title info",children:Object(o.jsx)("p",{children:e.movie_name})}),Object(o.jsx)("div",{className:"item_year info",children:Object(o.jsx)("p",{children:e.year})}),Object(o.jsx)("div",{className:"item_type info",children:Object(o.jsx)("p",{children:e.type})})]},e.id)}))})})})};var b=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()},5:function(e,t,n){}},[[40,1,2]]]);
//# sourceMappingURL=main.76c67777.chunk.js.map