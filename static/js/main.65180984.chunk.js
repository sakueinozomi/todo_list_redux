(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(6),a=n.n(i),s=(n(26),n(27),n(20)),d=(n(28),n(7)),r=n(13),u=Object(r.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.push(t.payload)},setCheck:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(!0===e.done?e.done=!1:e.done=!0)}))}}}),j=u.actions,l=j.saveTodo,b=j.setCheck,h=function(e){return e.todos.todoList},m=u.reducer,p=n(2),O=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(d.b)();return Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("button",{onClick:function(){console.log("Adding ".concat(n)),i(l({item:n,done:!1,id:Date.now()}))},children:"Add TODO"})]})},v=n(51),f=(n(33),function(e){var t=e.name,n=e.done,o=e.id,c=Object(d.b)();return Object(p.jsxs)("div",{className:"todoItem",children:[Object(p.jsx)(v.a,{checked:n,color:"primary",onChange:function(){c(b(o))},inputProps:{"aria-label":"Checkbox demo"}}),Object(p.jsx)("p",{className:n&&"todoItem--done",children:t})]})});var x=function(){var e=Object(d.c)(h);return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"app__container",children:[Object(p.jsx)("div",{className:"app___todoContainer",children:e.map((function(e){return Object(p.jsx)(f,{name:e.item,done:e.done,id:e.id})}))}),Object(p.jsx)(O,{})]})})},g=Object(r.a)({reducer:{todos:m}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(d.a,{store:g,children:Object(p.jsx)(x,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.65180984.chunk.js.map