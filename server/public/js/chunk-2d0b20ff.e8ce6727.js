(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b20ff"],{2308:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-6"},[o("h3",{staticClass:"text-center"},[t._v("Update your Meow")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.updateMeow(e)}}},[o("div",{staticClass:"form-group"},[o("label",[t._v("Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.meow.name,expression:"meow.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.meow.name},on:{input:function(e){e.target.composing||t.$set(t.meow,"name",e.target.value)}}})]),o("div",{staticClass:"form-group updateMeow"},[o("label",{attrs:{for:"updateMeow"}},[t._v("Message")]),o("br"),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.meow.content,expression:"meow.content"}],staticClass:"form-control",attrs:{id:"updateMeow",rows:"4",required:""},domProps:{value:t.meow.content},on:{input:function(e){e.target.composing||t.$set(t.meow,"content",e.target.value)}}})]),t._m(0)])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group updateMeow"},[o("button",{staticClass:"btn btn-danger btn-block"},[t._v("Update")])])}],s=o("bc3a"),r=o.n(s),i={data:function(){return{meow:{}}},created:function(){var t=this,e="/api/edit-meow/".concat(this.$route.params.id);r.a.get(e).then((function(e){t.meow=e.data}))},methods:{updateMeow:function(){var t=this,e="/api/update-meow/".concat(this.$route.params.id);r.a.post(e,this.meow).then((function(e){console.log(e),t.$router.push("/view")})).catch((function(t){console.log(t)}))}}},c=i,u=o("2877"),m=Object(u["a"])(c,a,n,!1,null,"c98adf16",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0b20ff.e8ce6727.js.map