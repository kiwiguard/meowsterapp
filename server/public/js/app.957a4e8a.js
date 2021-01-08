(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b20ff":"e4db4f09"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"085f":function(e,t,n){"use strict";n("46f6")},"15c1":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-profile_container"},e._l(e.Meows,(function(t){return n("div",{key:t._id,staticClass:"meow-item"},[n("div",{staticClass:"user-profile_meow"},[n("div",{staticClass:"meow-item_user"},[e._v(e._s(t.name))]),n("div",{staticClass:"meow-item_content"},[e._v(e._s(t.content))]),n("div",{staticClass:"meow-item_controllers"},[n("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"edit",params:{id:t._id}}}},[e._v("Edit ")]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return n.preventDefault(),e.deleteMeow(t._id)}}},[e._v("Delete")])],1)])])})),0)},r=[],a=(n("c740"),n("a434"),n("bc3a")),i=n.n(a),c={name:"MeowItem",data:function(){return{Meows:[]}},created:function(){var e=this,t="/api";i.a.get(t).then((function(t){e.Meows=t.data})).catch((function(e){console.log(e)}))},methods:{deleteMeow:function(e){var t=this,n="/api/delete-meow/".concat(e),o=this.Meows.findIndex((function(t){return t._id===e}));window.confirm("Do you really want to delete?")&&i.a.delete(n).then((function(){t.Meows.splice(o,1)})).catch((function(e){console.log(e)}))}}},s=c,u=(n("b5fa"),n("2877")),l=Object(u["a"])(s,o,r,!1,null,"fb32c944",null);t["default"]=l.exports},"46f6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[n("div",{staticClass:"navigation_logo"},[e._v(" MEVN Stack - Meowster ")])]),n("ul",[n("li",[n("router-link",{attrs:{to:"/view"}},[n("div",[e._v(" View Meows ")])])],1)])],1),n("div",{staticClass:"container mt-5"},[n("router-view")],1)])},a=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,r,a,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-profile"},[n("div",{staticClass:"user-profile_sidebar"},[e._m(0),n("CreateMeowPanel")],1),n("div",{staticClass:"user-profile_meows-wrapper"},[n("MeowItem")],1)])},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-profile_user-panel"},[n("h1",{staticClass:"user-profile_username"},[e._v("Leave a Meow")])])}],m=n("15c1"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"create-meow-panel",class:{"--exceeded":e.newMeowCharacterCount>180},on:{submit:function(t){return t.preventDefault(),e.createNewMeow(t)}}},[n("div",[e._m(0),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.meow.name,expression:"meow.name"}],attrs:{id:"username",type:"text",required:""},domProps:{value:e.meow.name},on:{input:function(t){t.target.composing||e.$set(e.meow,"name",t.target.value)}}})]),n("br"),n("div",{staticClass:"createMeow",class:{"--exceeded":e.newMeowCharacterCount>180}},[n("label",{attrs:{for:"newMeow"}},[n("strong",[e._v("Your Meow")]),e._v(" ("+e._s(e.newMeowCharacterCount)+"/180) ")]),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.meow.content,expression:"meow.content"}],attrs:{id:"newMeow",rows:"4",required:""},domProps:{value:e.meow.content},on:{input:function(t){t.target.composing||e.$set(e.meow,"content",t.target.value)}}})]),n("div",{staticClass:"create-meow-panel_submit createMeow",class:{"--exceeded":e.newMeowCharacterCount>180}},[n("button",[e._v("Meow It!")])])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"username"}},[n("strong",[e._v("Name")])])}],v=n("bc3a"),h=n.n(v),b={name:"CreateMeowPanel",data:function(){return{meow:{name:"",content:""}}},computed:{newMeowCharacterCount:function(){return this.meow.content.length}},methods:{createNewMeow:function(){var e=this,t="api/create-meow";this.meow.content.length<=180&&h.a.post(t,this.meow).then((function(){e.$router.push("/view"),e.meow={name:"",content:""}})).catch((function(e){console.log(e)}))}}},_=b,g=(n("085f"),Object(i["a"])(_,p,w,!1,null,"2b1ca04c",null)),M=g.exports,C={name:"Home",components:{MeowItem:m["default"],CreateMeowPanel:M}},y=C,x=(n("a727"),Object(i["a"])(y,f,d,!1,null,"63065e2d",null)),j=x.exports;o["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:j},{path:"/view",name:"view",component:function(){return Promise.resolve().then(n.bind(null,"15c1"))}},{path:"/edit/:id",name:"edit",component:function(){return n.e("chunk-2d0b20ff").then(n.bind(null,"2308"))}}],P=new l["a"]({mode:"history",base:"/",routes:O}),k=P;n("ab8b");o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},a727:function(e,t,n){"use strict";n("ad5e")},ad5e:function(e,t,n){},add0:function(e,t,n){},b5fa:function(e,t,n){"use strict";n("add0")}});
//# sourceMappingURL=app.957a4e8a.js.map