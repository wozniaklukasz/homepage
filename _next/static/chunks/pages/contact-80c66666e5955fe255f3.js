_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{ALdH:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return nt}));var r=n("nKUr"),o=(n("g4pe"),n("CafY")),i=n("Z4Yb"),a=n.n(i),s=n("o0o1"),u=n.n(s);function c(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n("q1tI"),h=n.n(d);var p=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))};var y=function(t){return new this((function(e,n){if(!t||"undefined"===typeof t.length)return n(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,n){if(n&&("object"===typeof n||"function"===typeof n)){var a=n.then;if("function"===typeof a)return void a.call(n,(function(e){i(t,e)}),(function(n){r[t]={status:"rejected",reason:n},0===--o&&e(r)}))}r[t]={status:"fulfilled",value:n},0===--o&&e(r)}for(var a=0;a<r.length;a++)i(a,r[a])}))},b=setTimeout;function m(t){return Boolean(t&&"undefined"!==typeof t.length)}function v(){}function w(t){if(!(this instanceof w))throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],O(t,this)}function g(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,w._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(o){return void j(e.promise,o)}_(e.promise,r)}else(1===t._state?_:j)(e.promise,t._value)}))):t._deferreds.push(e)}function _(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===typeof e||"function"===typeof e)){var n=e.then;if(e instanceof w)return t._state=3,t._value=e,void A(t);if("function"===typeof n)return void O((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,A(t)}catch(i){j(t,i)}var r,o}function j(t,e){t._state=2,t._value=e,A(t)}function A(t){2===t._state&&0===t._deferreds.length&&w._immediateFn((function(){t._handled||w._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)g(t,t._deferreds[e]);t._deferreds=null}function x(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function O(t,e){var n=!1;try{t((function(t){n||(n=!0,_(e,t))}),(function(t){n||(n=!0,j(e,t))}))}catch(r){if(n)return;n=!0,j(e,r)}}w.prototype.catch=function(t){return this.then(null,t)},w.prototype.then=function(t,e){var n=new this.constructor(v);return g(this,new x(t,e,n)),n},w.prototype.finally=p,w.all=function(t){return new w((function(e,n){if(!m(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,a){try{if(a&&("object"===typeof a||"function"===typeof a)){var s=a.then;if("function"===typeof s)return void s.call(a,(function(e){i(t,e)}),n)}r[t]=a,0===--o&&e(r)}catch(u){n(u)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},w.allSettled=y,w.resolve=function(t){return t&&"object"===typeof t&&t.constructor===w?t:new w((function(e){e(t)}))},w.reject=function(t){return new w((function(e,n){n(t)}))},w.race=function(t){return new w((function(e,n){if(!m(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=t.length;r<o;r++)w.resolve(t[r]).then(e,n)}))},w._immediateFn="function"===typeof setImmediate&&function(t){setImmediate(t)}||function(t){b(t,0)},w._unhandledRejectionFn=function(t){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var E=w,T=n("FBMA"),S=n.n(T);function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e,n){return e&&B(t.prototype,e),n&&B(t,n),t}var U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var C,I=function(t){return function(t){for(var e,n,r,o,i="",a=0,s=(t=String(t)).length%3;a<t.length;){if((n=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=U.charAt((e=n<<16|r<<8|o)>>18&63)+U.charAt(e>>12&63)+U.charAt(e>>6&63)+U.charAt(63&e)}return s?i.slice(0,s-3)+"===".substring(s):i}(JSON.stringify(t))},k=function(t){var e="@formspree/core@".concat("2.6.2");return t?"".concat(t," ").concat(e):e},D=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!R.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(3&t.length));for(var e,n,r,o="",i=0;i<t.length;)e=U.indexOf(t.charAt(i++))<<18|U.indexOf(t.charAt(i++))<<12|(n=U.indexOf(t.charAt(i++)))<<6|(r=U.indexOf(t.charAt(i++))),o+=64===n?String.fromCharCode(e>>16&255):64===r?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,255&e);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},N=function(){function t(){F(this,t),this.loadedAt=1*new Date,this.webdriver=D()}return P(t,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),t}(),L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};F(this,t),this.project=e.project,"undefined"!==typeof window&&this.startBrowserSession()}return P(t,[{key:"startBrowserSession",value:function(){this.session||(this.session=new N)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.endpoint||"https://formspree.io",o=n.fetchImpl||S()({Promise:E}).fetch,i=this.project?"".concat(r,"/p/").concat(this.project,"/f/").concat(t):"".concat(r,"/f/").concat(t),a=function(t){return t instanceof FormData?t:JSON.stringify(t)},s={Accept:"application/json","Formspree-Client":k(n.clientName)};this.session&&(s["Formspree-Session-Data"]=I(this.session.data())),e instanceof FormData||(s["Content-Type"]="application/json");var u={method:"POST",mode:"cors",body:a(e),headers:s};return o(i,u).then((function(t){return t.json().then((function(e){return{body:e,response:t}}))}))}}]),t}(),q=function(t){return new L(t)};function H(t){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function X(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=h.a.createContext({client:void 0});J.displayName="Formspree";function G(){return Object(d.useContext)(J).client||(C||(C=q()),C)}var K="2.2.3";function V(t){return void 0!==t.preventDefault}var Z=function(t){var e=t.prefix,n=t.field,r=t.errors,o=M(t,["prefix","field","errors"]),i=(r||[]).find((function(t){return t.field==n}));return i?h.a.createElement("div",o,e," ",i.message):null},Y=n("Uid6"),Q=n.n(Y),W=n("M09o");function $(){var t=l(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=X(Object(d.useState)(!1),2),r=n[0],o=n[1],i=X(Object(d.useState)(!1),2),a=i[0],s=i[1],u=X(Object(d.useState)([]),2),c=u[0],f=u[1],l=G(),h=e.client||l;if(!h)throw new Error("You must provide a Formspree client");if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var p=!!e.debug,y=e.data;return[{submitting:r,succeeded:a,errors:c},function(n){var r=V(n)?function(t){t.preventDefault();var e=t.target;if("FORM"!=e.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(e)}(n):n,i=function(t,e){r instanceof FormData?r.append(t,e):r=Object.assign(r,z({},t,e))};if("object"===H(y))for(var a in y)"function"===typeof y[a]?i(a,y[a].call(null)):i(a,y[a]);return o(!0),h.submitForm(t,r,{endpoint:e.endpoint,clientName:"@formspree/react@".concat(K)}).then((function(t){var e,n=t.response.status;return 200===n?(p&&console.log("Form submitted",t),s(!0),f([])):n>=400&&n<500?((e=t.body).errors&&f(e.errors),p&&console.log("Validation error",t),s(!1)):(p&&console.log("Unexpected error",t),s(!1)),t})).catch((function(t){throw p&&console.log("Unexpected error",t),s(!1),t})).finally((function(){o(!1)}))}]}("mayawojj"),2),e=t[0],n=t[1];if(e.succeeded)return Object(r.jsx)("p",{children:"Thanks for message!"});var o=function(){var t,e=(t=u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),W.a({action:"submit_form",category:"Contact",label:e.target[1].value}),t.next=4,n(e);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:Q.a.container,onSubmit:o,children:[Object(r.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email Address",className:Q.a.input}),Object(r.jsx)(Z,{prefix:"Email",field:"email",errors:e.errors}),Object(r.jsx)("textarea",{id:"message",name:"message",placeholder:"Message",className:Q.a.input}),Object(r.jsx)(Z,{prefix:"Message",field:"message",errors:e.errors}),Object(r.jsx)("button",{className:Q.a.button,type:"submit",disabled:e.submitting,children:"Submit"})]})}var tt=n("Bn4x"),et=n("UkKX");function nt(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(et.a,{title:"Contact | ".concat(tt.b),description:"".concat(tt.b," contact page.")}),Object(r.jsx)("h1",{className:a.a.heading2Xl,children:"Contact"}),Object(r.jsx)("section",{className:a.a.headingMd,children:Object(r.jsx)($,{})})]})}},FBMA:function(t,e,n){(function(r){var o;!function(r){"use strict";function i(t){var e=t&&t.Promise||r.Promise,n=t&&t.XMLHttpRequest||r.XMLHttpRequest,o=r;return function(){var t=Object.create(o,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var r="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in t,s="ArrayBuffer"in t;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=function(t){return t&&DataView.prototype.isPrototypeOf(t)},f=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};b.prototype.append=function(t,e){t=h(t),e=p(e);var n=this.map[t];this.map[t]=n?n+","+e:e},b.prototype.delete=function(t){delete this.map[h(t)]},b.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},b.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},b.prototype.set=function(t,e){this.map[h(t)]=p(e)},b.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},b.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),y(t)},b.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),y(t)},b.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),y(t)},o&&(b.prototype[Symbol.iterator]=b.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];j.prototype.clone=function(){return new j(this,{body:this._bodyInit})},_.call(j.prototype),_.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},O.error=function(){var t=new O(null,{status:0,statusText:""});return t.type="error",t};var d=[301,302,303,307,308];O.redirect=function(t,e){if(-1===d.indexOf(e))throw new RangeError("Invalid status code");return new O(null,{status:e,headers:{location:t}})},t.Headers=b,t.Request=j,t.Response=O,t.fetch=function(t,r){return new e((function(e,o){var a=new j(t,r),s=new n;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:x(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;e(new O(n,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),s.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!==typeof t&&(t=String(t)),t}function y(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function b(t){this.map={},t instanceof b?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function m(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new e((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function w(t){var e=new FileReader,n=v(e);return e.readAsArrayBuffer(t),n}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(i&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(a&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(r&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(s&&i&&c(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(t)&&!f(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?m(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t=m(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=v(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}function j(t,e){var n=(e=e||{}).body;if(t instanceof j){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new b(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new b(e.headers)),this.method=function(t){var e=t.toUpperCase();return l.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function A(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function x(t){var e=new b;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e}function O(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new b(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}("undefined"!==typeof self?self:"undefined"!==typeof r?r:this)}).call(this,n("ntbh"))},M09o:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n("Bn4x"),o=function(t){window.gtag("config",r.a,{page_path:t})},i=function(t){var e=t.action,n=t.category,r=t.label,o=t.value;window.gtag("event",e,{event_category:n,event_label:r,value:o})}},Uid6:function(t,e,n){t.exports={container:"contactForm_container__fQQSm",input:"contactForm_input__3zSX5",button:"contactForm_button__1iyP0"}},UkKX:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("nKUr"),o=n("9ixD"),i=n("Bn4x");function a(t){var e=t.title,n=t.description,a=t.imageSrc,s=t.imageAlt;return Object(r.jsx)(o.b,{title:e,description:n,openGraph:{url:i.c,title:e,description:n,images:[{url:a?"https://lukaszwozniak.dev".concat(a):"https://lukaszwozniak.dev/images/lukasz-wozniak.jpg",width:800,height:600,alt:s||i.b}],site_name:i.b},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}})}},lqnA:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])},ntbh:function(t,e){(function(e){t.exports=function(){var t={149:function(t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"===typeof window&&(e=window)}t.exports=e}},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}return r.ab=e+"/",r(149)}()}).call(this,"/")}},[["lqnA",0,2,1,3,4]]]);