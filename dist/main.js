"use strict";var MainThread=function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){var t=Array.isArray(e)?s(e):void 0;if(t||(t="undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"]?Array.from(e):void 0),!(e=t||u(e)))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");return e}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){e:if("object"==typeof e&&null!==e){var t=e[Symbol.toPrimitive];if(void 0!==t){if("object"!=typeof(e=t.call(e,"string")))break e;throw new TypeError("@@toPrimitive must return a primitive value.")}e=String(e)}return"symbol"==typeof e?e:String(e)}function c(e,t,n,r,o,i){for(var u=[],s=0;s<n;s++)switch(e[t++]){case 1:u.push(e[t++]);break;case 2:M[0]=e[t++],M[1]=e[t++],u.push(_[0]);break;case 3:u.push(r.get(e[t++]));break;case 4:var a=e[t++];t=c(e,t,a,r,o,i),u.push(t.args),t=t.offset;break;case 5:if(!i)throw Error("objectContext not provided.");u.push(i.get(e[t++]));break;case 6:a=o.getNode(e[t++]),u.push(a.getContext("2d"));break;case 7:u.push(o.getNode(e[t++]));break;default:throw Error("Cannot deserialize argument.")}return{args:u,offset:t}}function l(e,t){if(!e)throw Error("Property ".concat(t," does not exist on ").concat(e,"."));var n=Object.getOwnPropertyDescriptor(e,t);return void 0!==n?"set"in n:l(Object.getPrototypeOf(e),t)}function f(e,t,n,r){var i=[].slice.call(e.childNodes).filter(n);return i=o(o(o(o(o(o({},7,e._index_),11,0),0,e.nodeType),1,t(e.localName||e.nodeName)),4,i.map((function(e){return f(e,t,n,r)}))),2,[].map.call(e.attributes||[],(function(e){return[t(e.namespaceURI||"null"),t(e.name),t(e.value)]}))),null!=e.namespaceURI&&(i[6]=t(e.namespaceURI)),J.includes(e.nodeType)&&null!==e.textContent&&(i[5]=t(e.textContent)),b(r,e),x(r,e),i}function d(e,t){try{return t?{storage:t.getStorage("localStorage"==e?0:1),errorMsg:null}:{storage:window[e],errorMsg:null}}catch(e){return{errorMsg:e.message,storage:null}}}function h(e,t,n){var r=t.dataset.shadowDom;if("open"===r||"closed"===r){r=t.attachShadow({mode:r});var o=t.cloneNode(!0);r.appendChild(o),t=o}var i=new Y,s=new B,a=new m(i,t),c=function(e){return Object.assign({},{mutationPump:requestAnimationFrame.bind(null),executorsAllowed:v},e)}(n);return e.then((function(e){var r=function(e,t){var n=Array.isArray(e)?e:void 0;if(!n)e:{var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,s,a=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r){n=void 0;break e}c=!1}else for(;!(c=(o=i.call(r)).done)&&(a.push(o.value),a.length!==t);c=!0);}catch(e){l=!0;var f=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s)){n=void 0;break e}}finally{if(l)throw f}}n=a}else n=void 0}if(!(e=n||u(e,t)))throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");return e}(e,2);if(e=r[0],r=r[1],e&&r&&n.authorURL){var o=new X(t,a,e,r,c),l=new D(i,a,o,c,s);return o.worker.onmessage=function(e){var t=e.data;V.includes(t[12])&&(l.mutate(t[54],t[37],t[41],new Uint16Array(t[36])),n.onReceiveMessage)&&n.onReceiveMessage(e)},o.ready().then((function(){return new Q(o,c)}))}return null}))}var g=function(e,t,n,r,i){var u=i.executorsAllowed.includes(8);return{execute:function(e,r,i){return u&&i&&(e=t.getNode(e[r+1]))&&(i=e.transferControlToOffscreen(),n.messageToWorker(o(o(o({},12,9),13,[e._index_]),38,i),[i])),r+2}}},v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],p=function(e,t){return Array.prototype.forEach.call(e,t)},m=function(){function e(n,r){var o=this;t(this,e),this.nodes=this.count=this.stringContext=this.baseElement=void 0,this.createNodes=function(e,t){for(var n=(e=new Uint16Array(e)).length,r=0;r<n;r+=5){if(3===e[r+1])var i=document.createTextNode(o.stringContext.get(e[r+3]));else if(8===e[r+1])i=document.createComment(o.stringContext.get(e[r+3]));else if(11===e[r+1])i=document.createDocumentFragment();else if(i=o.stringContext.get(e[r+2]),i=0!==e[r+4]?document.createElementNS(o.stringContext.get(e[r+4]),i):document.createElement(i),t&&!t.sanitize(i))continue;o.storeNode(i,e[r])}},this.getNode=function(e){return(e=o.nodes.get(e))&&"BODY"===e.nodeName?o.baseElement:e},this.storeNodes=function(e){o.storeNode(e,++o.count),p(e.childNodes,(function(e){return o.storeNodes(e)}))},this.count=2,this.stringContext=n,this.nodes=new Map([[1,r],[2,r]]),this.baseElement=r,r._index_=2,p(r.childNodes,(function(e){return o.storeNodes(e)}))}return r(e,[{key:"storeNode",value:function(e,t){e._index_=t,this.nodes.set(t,e)}}]),e}(),w=new Map,y=function(e){return e&&"value"in e},b=function(e,t){y(t)&&null===t.oninput&&(t.oninput=function(){return k(e,t)})},x=function(e,t){y(t)&&!w.get(t)&&(new MutationObserver((function(t){return t.map((function(t){return k(e,t.target)}))})).observe(t,{attributes:!0}),w.set(t,!0))},k=function(e,t){return e.messageToWorker(o(o({},12,4),40,o(o({},7,t._index_),21,t.value)))},N=function(e){return Object.values(e).map((function(e){return[e.identifier,e.screenX,e.screenY,e.clientX,e.clientY,e.pageX,e.pageY,e.target._index_]}))},A=function(e,t,n,r,i){var u=[],s=i.executorsAllowed.includes(4),a=[window.innerWidth,window.innerHeight],c=function(e,t){return function(r){var i;if(t&&r.preventDefault(),y(r.currentTarget))k(n,r.currentTarget);else if("resize"===r.type){var u=window,s=u.innerHeight;if(a[0]===u.innerWidth&&a[1]===s)return;u=a=[window.innerWidth,window.innerHeight],n.messageToWorker(o(o({},12,5),40,u))}n.messageToWorker(o(o({},12,1),39,(o(o(o(o(o(o(o(o(o(o(i={},7,e),25,r.bubbles),26,r.cancelable),27,r.cancelBubble),28,[r.currentTarget._index_||0]),29,r.defaultPrevented),30,r.eventPhase),31,r.isTrusted),32,r.returnValue),13,[r.target._index_||0]),o(o(o(o(o(o(o(o(o(i,33,r.timeStamp),12,r.type),35,"keyCode"in r?r.keyCode:void 0),60,"pageX"in r?r.pageX:void 0),61,"pageY"in r?r.pageY:void 0),65,"offsetX"in r?r.offsetX:void 0),66,"offsetY"in r?r.offsetY:void 0),62,"touches"in r?N(r.touches):void 0),63,"changedTouches"in r?N(r.changedTouches):void 0))))}};return{execute:function(r,o,i){var a=r[o+2],l=o+4+2*a;if(a=o+4+6*r[o+3]+2*a,s&&i&&(i=t.getNode(r[o+1])))for(o+=4;o<a;){var f=o<=l,d=i,h=f,g=r,v=o,p=e.get(g[v]),m=g[v+1];if(d===t.baseElement)h?addEventListener(p,u[m]=c(1,!!g[v+5])):removeEventListener(p,u[m]);else{var w=null!==d.oninput,k="change"===p;h?(k&&(w=!0,d.onchange=null),d.addEventListener(p,u[m]=c(d._index_,!!g[v+5]))):(k&&(w=!1),d.removeEventListener(p,u[m])),y(d)&&(w||b(n,d),x(n,d))}o+=f?2:6}return a}}},C=function(e,t,n,r,i){var u=i.executorsAllowed.includes(5);return{execute:function(e,r,i){return u&&i&&(e=t.getNode(e[r+1]))&&(i=e.getBoundingClientRect(),n.messageToWorker(o(o(o({},12,6),13,[e._index_]),38,[i.top,i.right,i.bottom,i.left,i.width,i.height]))),r+2}}},O=function(e,t,n,r,o){var i=t.getNode,u=o.executorsAllowed.includes(2);return{execute:function(e,t,r){var o=e[t+4],s=e[t+5];if(u&&r){var a=i(e[t+1]);a&&(0<s&&e.slice(t+6+o,t+6+o+s).forEach((function(e){(e=i(e))&&e.remove()})),0<o&&e.slice(t+6,t+6+o).forEach((function(r){var o=e[t+2];(r=i(r))&&(a.insertBefore(r,o&&i(o)||null),b(n,r),x(n,r))})))}return t+6+o+s}}},S=function(e,t,n,r,o){var i=o.executorsAllowed.includes(0);return{execute:function(n,r,u){if(i&&u){u=t.getNode(n[r+1]);var s=e.get(n[r+2]);n=0!==(n=n[r+4])?e.get(n-1):null,u&&null!=s&&(o.sanitizer?o.sanitizer.setAttribute(u,s,n):null==n?u.removeAttribute(s):u.setAttribute(s,n))}return r+5}}},T=function(e,t,n,r,o){var i=o.executorsAllowed.includes(1);return{execute:function(n,r,o){return i&&o&&(o=t.getNode(n[r+1]),n=n[r+2],o&&n&&(o.textContent=e.get(n))),r+3}}},E=function(e,t,n,r,o){var i=o.executorsAllowed.includes(3);return{execute:function(n,r,u){if(i&&u){u=t.getNode(n[r+1]);var s=e.get(n[r+2]),a=n[r+4];n=1===n[r+3]?1===a:0!==a?e.get(a):null,u&&s&&null!=n&&(o.sanitizer?o.sanitizer.setProperty(u,s,String(n)):u[s]=n)}return r+5}}},j=function(e,t,n,r,o){var i,u=o.executorsAllowed.includes(6),s=0;return{execute:function(e,t,n){if(u&&n&&o.longTask)if(6===e[t]){if(s++,!i){var r=new Promise((function(e){return i=e}));Promise.resolve().then((function(){return o.longTask&&o.longTask(r)}))}}else 7===e[t]&&(s--,i&&0>=s&&(i(),i=null,s=0));return t+2},get active(){return null!==i}}},_=new Float32Array(1),M=new Uint16Array(_.buffer),P=function(e,t,n,r,o){var u=o.executorsAllowed.includes(9);return{execute:function(n,o,s){var a=e.get(n[o+1]),f=n[o+2],d=c(n,o+3,1,e,t,r);return o=d.args[0],n=(f=c(n,d.offset,f,e,t,r)).offset,f=f.args,u&&s&&(l(o,a)?o[a]=f[0]:o[a].apply(o,i(f))),n}}},U=function(e,t,n,r,o){var u=o.executorsAllowed.includes(10);if(!r)throw Error("objectContext is not defined.");return{execute:function(n,o,s){var a=e.get(n[o+1]),l=n[o+2],f=n[o+3],d=c(n,o+4,1,e,t,r);return o=d.args[0],n=(f=c(n,d.offset,f,e,t,r)).offset,f=f.args,u&&s&&"new"!==a&&r.store(l,o[a].apply(o,i(f))),n}}},W=function(e,t,n,r,i){var u=i.executorsAllowed.includes(11);return{execute:function(e,r,i){return u&&i&&(i=t.getNode(e[r+1]))&&self.createImageBitmap(i).then((function(t){n.messageToWorker(o(o(o({},12,10),73,e[r+2]),38,t),[t])})),r+3}}},I=function(e,t,n,r,i){var u=i.executorsAllowed.includes(12);return{execute:function(t,r,s){if(u&&s){s=t[r+1];var a=t[r+2],c=t[r+3];if(t=t[r+4],c=0<c?e.get(c-1):"",t=0<t?e.get(t-1):null,1===s)!function(e,t){i.sanitizer&&2===e&&i.sanitizer.getStorage(e,t).then((function(r){r=o(o(o(o({},12,11),74,t),75,e),21,r),n.messageToWorker(r)}))}(a,c);else if(2===s)if(i.sanitizer)i.sanitizer.setStorage(a,c,t);else{if(0===a)var l=window.localStorage;else 1===a&&(l=window.sessionStorage);if(l)if(null==c){if(null!=t)throw Error("Unexpected storage operation.");l.clear()}else null==t?l.removeItem(c):l.setItem(c,t)}}return r+5}}},L=0,R={},z=function(e,t,n,r,o){var i=o.executorsAllowed.includes(13);return{execute:function(t,n){if(i){var r=t[n+1],o=t[n+2];t=t[n+3],t=e.hasIndex(t)?JSON.parse(e.get(t)):void 0,1===r?R[o].resolve(t):R[o].reject(t),delete R[o]}return n+4}}},F=function(e,t,n,r,o){var i=o.executorsAllowed.includes(14);return{execute:function(e,n,r){return i&&r&&(e=t.getNode(e[n+1]))&&e.scrollIntoView(),n+2}}},D=function(){function e(n,r,i,u,s){var a,c=this;t(this,e),this.nodeContext=this.stringContext=void 0,this.mutationQueue=[],this.pendingMutations=!1,this.executors=this.sanitizer=this.mutationPumpFunction=void 0,this.syncFlush=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=[];return c.mutationQueue.forEach((function(n){for(var r=n.length,o=0;o<r;){var i,u=n[o];if(!(i=e)){e:switch(u){case 4:case 5:case 6:case 7:case 12:case 8:case 13:i=!1;break e;default:i=!0}i=!i}i||t.push(u),o=c.executors[u].execute(n,o,i)}})),c.mutationQueue=[],c.pendingMutations=!1,t},this.stringContext=n,this.nodeContext=r,this.sanitizer=u.sanitizer,this.mutationPumpFunction=u.mutationPump,r=j.apply(null,n=[n,r,i,s,u]),this.executors=(o(o(o(o(o(o(o(o(o(o(a={},2,O.apply(null,n)),0,S.apply(null,n)),1,T.apply(null,n)),3,E.apply(null,n)),4,A.apply(null,n)),5,C.apply(null,n)),6,r),7,r),8,g.apply(null,n)),9,P.apply(null,n)),o(o(o(o(o(a,10,U.apply(null,n)),11,W.apply(null,n)),12,I.apply(null,n)),13,z.apply(null,n)),14,F.apply(null,n)))}return r(e,[{key:"mutate",value:function(e,t,n,r){this.stringContext.storeValues(n),this.nodeContext.createNodes(t,this.sanitizer),this.mutationQueue=this.mutationQueue.concat(r),this.pendingMutations||(this.pendingMutations=!0,this.mutationPumpFunction(this.syncFlush,e))}}]),e}(),Y=function(){function e(){t(this,e),this.strings=[]}return r(e,[{key:"get",value:function(e){return this.strings[e]||""}},{key:"hasIndex",value:function(e){return void 0!==this.strings[e]}},{key:"store",value:function(e){return this.strings.push(e),this.strings.length-1}},{key:"storeValues",value:function(e){var t=this;e.forEach((function(e){return t.store(e)}))}}]),e}(),J=[8,3],X=function(){function e(n,r,o,i,u){t(this,e),this[55]=void 0,this.nodeContext=r,this.config=u;var s=function(e,t,n){t=t.hydrateFilter||function(){return!0};var r=[],o=new Map;return{skeleton:f(e,(function(e){if(o.has(e))return o.get(e);var t=r.length;return o.set(e,t),r.push(e),t}),t,n),strings:r}}(n,u,this);r=s.skeleton,s=s.strings;var a,c=[],l=[],h=d("localStorage"),g=d("sessionStorage");for(a in n.style)c.push(a);for(var v in n)v.startsWith("on")&&l.push(v);o="\n'use strict';\n(function(){\n".concat(o,"\nself['window']=self;\nvar workerDOM=WorkerThread.workerDOM;\nWorkerThread.hydrate(\nworkerDOM.document,\n").concat(JSON.stringify(s),",\n").concat(JSON.stringify(r),",\n").concat(JSON.stringify(c),",\n").concat(JSON.stringify(l),",\n[").concat(window.innerWidth,",").concat(window.innerHeight,"],\n").concat(JSON.stringify(h),",\n").concat(JSON.stringify(g),"\n);\nworkerDOM.document[",59,"](this);\nObject.assign(self,workerDOM);\n}).call(self);\n").concat(i,"\n//# sourceURL=").concat(encodeURI(u.authorURL)),u.sandbox||(this[55]=new Worker(URL.createObjectURL(new Blob([o])))),u.onCreateWorker&&u.onCreateWorker(n,s,r,c)}return r(e,[{key:"ready",value:function(){return this.worker.readyPromise||Promise.resolve()}},{key:"worker",get:function(){return this[55]}},{key:"messageToWorker",value:function(e,t){this.config.onSendMessage&&this.config.onSendMessage(e),this.worker.postMessage(e,t||[])}}]),e}(),B=function(){function e(){t(this,e),this.objects=void 0,this.objects=new Map}return r(e,[{key:"store",value:function(e,t){this.objects.set(e,t)}},{key:"get",value:function(e){var t=this.objects.get(e);if(t)return t;throw Error("Object with id ("+e+") does not exist.")}}]),e}(),Q=function(){function e(n,r){t(this,e),this.workerContext_=n,this.config=r}return r(e,[{key:"callFunction",value:function(e){if(!this.config.executorsAllowed.includes(13))throw Error("[worker-dom]: Error calling ".concat(e,". You must enable the FUNCTION_CALL executor within the config."));var t=function(){var e,t,n=new Promise((function(n,r){e=n,t=r}));L>=Number.MAX_VALUE&&(L=0);var r=L++;return R[r]={promise:n,resolve:e,reject:t},{promise:n,index:r}}(),n=t.promise;t=t.index;for(var r=arguments.length,i=Array(1<r?r-1:0),u=1;u<r;u++)i[u-1]=arguments[u];return t=o(o(o(o({},12,12),77,e),78,JSON.stringify(i)),7,t),this.workerContext_.messageToWorker(t),n}},{key:"onerror",set:function(e){this.workerContext_.worker.onerror=e}},{key:"terminate",value:function(){this.workerContext_.worker.terminate()}}]),e}(),V=[3,2];return e.install=h,e.upgradeElement=function(e,t){var n=e.getAttribute("src");return n?function(e,t){return h(Promise.all([fetch(t.domURL).then((function(e){return e.text()})),fetch(t.authorURL).then((function(e){return e.text()}))]),e,t)}(e,{authorURL:n,domURL:t}):Promise.resolve(null)},e}({});
//# sourceMappingURL=main.js.map
