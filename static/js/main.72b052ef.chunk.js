(this.webpackJsonprandom_users_api=this.webpackJsonprandom_users_api||[]).push([[0],{40:function(e,s,a){},42:function(e,s,a){"use strict";a.r(s);var c=a(2),n=a(13),t=a.n(n),i=a(4),r=a.n(i),l=a(14),d=a(16),j=a(15),o=a.n(j),u=(a(40),a(0)),m=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{className:"heading",children:"Random Users API"})})})},b=function(e){var s,a,c,n,t,i=e.details;return Object(u.jsxs)("div",{className:"card-wrapper",children:[Object(u.jsx)("div",{className:"img-wrapper",children:Object(u.jsx)("img",{src:null===(s=i.picture)||void 0===s?void 0:s.large,alt:""})}),Object(u.jsx)("div",{className:"name",children:Object(u.jsxs)("h2",{children:[null===(a=i.name)||void 0===a?void 0:a.first," ",null===(c=i.name)||void 0===c?void 0:c.last," (",null===(n=i.dob)||void 0===n?void 0:n.age,")"]})}),Object(u.jsxs)("div",{className:"city",children:[Object(u.jsx)("i",{className:"fa fa-map-marker"}),Object(u.jsx)("p",{children:null===(t=i.location)||void 0===t?void 0:t.city})]}),Object(u.jsxs)("div",{className:"email",children:[Object(u.jsx)("i",{className:"fa fa-envelope"}),Object(u.jsx)("p",{children:i.email})]}),Object(u.jsxs)("div",{className:"phone",children:[Object(u.jsx)("i",{className:"fa fa-phone",children:"  "}),Object(u.jsxs)("p",{children:["  ",i.phone]})]})]})},h=function(){var e=Object(c.useState)({}),s=Object(d.a)(e,2),a=s[0],n=s[1],t=function(){var e=Object(l.a)(r.a.mark((function e(){var s,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://randomuser.me/api/");case 2:s=e.sent,a=s.data,c=a.results[0],n(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(m,{}),Object(u.jsx)(b,{details:a})]})};t.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.72b052ef.chunk.js.map