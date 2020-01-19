(function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],y=0,p=[];y<l.length;y++)a=l[y],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/encryptor/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"row center-xs title"},[e._v(" Liam & Carter's Encryption ")]),n("div",{staticClass:"row center-xs"},[n("div",{staticClass:"col-xs-6 col-md-3 start-xs"},[n("label",[e._v("Enter a new key")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newKey,expression:"newKey"}],staticClass:"uk-input",attrs:{type:"text"},domProps:{value:e.newKey},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setNewKey(t)},input:function(t){t.target.composing||(e.newKey=t.target.value)}}})])]),e.key&&e.encryptedKey?n("div",{staticClass:"row center-xs middle-xs Encryptors"},[n("div",{staticClass:"col-xs-10 col-md-4 start-xs"},[n("label",[e._v("English")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.englishText,expression:"englishText"}],attrs:{rows:"10"},domProps:{value:e.englishText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.encryption(t)},input:function(t){t.target.composing||(e.englishText=t.target.value)}}})]),n("div",{staticClass:"col-xs-10 col-md-2"},[n("button",{staticClass:"uk-button uk-button-primary uk-text-capitalize",attrs:{type:"button"},on:{click:e.encryption}},[e._v(" Run Encryption ")]),n("br"),n("button",{staticClass:"uk-button uk-button-primary uk-text-capitalize",attrs:{type:"button"},on:{click:e.decryption}},[e._v(" Run Decryption ")])]),n("div",{staticClass:"col-xs-10 col-md-4 start-xs"},[n("label",[e._v("Encrypted")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.encryptedText,expression:"encryptedText"}],attrs:{rows:"10"},domProps:{value:e.encryptedText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.decryption(t)},input:function(t){t.target.composing||(e.encryptedText=t.target.value)}}})])]):e._e()])},o=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("c975"),n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("ddb0"),{data:function(){return{alpha:"`1234567890-=~!@#$%^&*()_+qwertyuiop[]\\QWERTYUIOP{}|asdfghjkl;'ASDFGHJKL:\"zxcvbnm,./ZXCVBNM<>? \n",key:null,encryptedKey:null,newKey:null,englishText:null,encryptedText:null}},methods:{findChar:function(e,t,n){var r=t.indexOf(e);if(r>=0&&r<t.length)return n[r];console.log("Could not find: "+e)},removeByIndex:function(e,t){return e.substring(0,t)+e.substring(t+1)},buildEncrypted:function(e){this.encryptedKey=this.alpha;var t,n=e.split("").filter((function(e,t,n){return n.indexOf(e)==t})),r=!0,i=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var s=a.value;(t=this.encryptedKey.indexOf(s))>=0&&(this.encryptedKey=s+this.removeByIndex(this.encryptedKey,t))}}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}this.encryptedKey.length!=this.alpha.length&&alert("Failed to encrypt alpha key correctly")},getKey:function(){this.key=localStorage.getItem("EncryptKey"),this.key?this.buildEncrypted(this.key):alert("Could not find Key in localStorage!")},setNewKey:function(){this.newKey?(localStorage.setItem("EncryptKey",this.newKey),this.newKey=null,this.getKey()):alert("Please enter a key first")},translate:function(e,t,n){if(e&&t&&n&&this.encryptedKey){var r="",i=!0,o=!1,a=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;r+=this.findChar(c,t,n)}}catch(u){o=!0,a=u}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return r}return e?this.encryptedKey||alert("Encryption key not built"):alert("Nothing to encrypt"),null},encryption:function(){this.encryptedText=this.translate(this.englishText,this.alpha,this.encryptedKey)},decryption:function(){this.englishText=this.translate(this.encryptedText,this.encryptedKey,this.alpha)}},mounted:function(){this.getKey()}}),l=a,s=(n("034f"),n("2877")),c=Object(s["a"])(l,i,o,!1,null,null,null),u=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.5630ef74.js.map