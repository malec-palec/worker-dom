let e=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(8);return{execute:(e,r,s)=>(o&&s&&(e=t.getNode(e[r+1]))&&(s=e.transferControlToOffscreen(),n.messageToWorker({12:9,13:[e._index_],38:s},[s])),r+2)}},t=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],n=(e,t)=>Array.prototype.forEach.call(e,t);class r{constructor(e,t){this.nodes=this.count=this.stringContext=this.baseElement=void 0,this.createNodes=(e,t)=>{let n=(e=new Uint16Array(e)).length;for(let s=0;s<n;s+=5){var r=void 0;if(3===e[s+1])r=document.createTextNode(this.stringContext.get(e[s+3]));else if(8===e[s+1])r=document.createComment(this.stringContext.get(e[s+3]));else if(11===e[s+1])r=document.createDocumentFragment();else if(r=this.stringContext.get(e[s+2]),r=0!==e[s+4]?document.createElementNS(this.stringContext.get(e[s+4]),r):document.createElement(r),t&&!t.sanitize(r))continue;this.storeNode(r,e[s])}},this.getNode=e=>(e=this.nodes.get(e))&&"BODY"===e.nodeName?this.baseElement:e,this.storeNodes=e=>{this.storeNode(e,++this.count),n(e.childNodes,(e=>this.storeNodes(e)))},this.count=2,this.stringContext=e,this.nodes=new Map([[1,t],[2,t]]),this.baseElement=t,t._index_=2,n(t.childNodes,(e=>this.storeNodes(e)))}storeNode(e,t){e._index_=t,this.nodes.set(t,e)}}let s=new Map,o=(e,t)=>{t&&"value"in t&&null===t.oninput&&(t.oninput=()=>l(e,t))},i=(e,t)=>{t&&"value"in t&&!s.get(t)&&(new MutationObserver((t=>t.map((t=>l(e,t.target))))).observe(t,{attributes:!0}),s.set(t,!0))},l=(e,t)=>e.messageToWorker({12:4,40:{7:t._index_,21:t.value}}),u=e=>Object.values(e).map((e=>[e.identifier,e.screenX,e.screenY,e.clientX,e.clientY,e.pageX,e.pageY,e.target._index_])),a=(e,t,n,r,s)=>{const a=[],c=s.executorsAllowed.includes(4);let d=[window.innerWidth,window.innerHeight];const h=(e,t)=>r=>{t&&r.preventDefault();var s=r.currentTarget;if(s&&"value"in s)l(n,r.currentTarget);else if("resize"===r.type){const{innerWidth:e,innerHeight:t}=window;if(d[0]===e&&d[1]===t)return;d=[window.innerWidth,window.innerHeight],n.messageToWorker({12:5,40:d})}n.messageToWorker({12:1,39:{7:e,25:r.bubbles,26:r.cancelable,27:r.cancelBubble,28:[r.currentTarget._index_||0],29:r.defaultPrevented,30:r.eventPhase,31:r.isTrusted,32:r.returnValue,13:[r.target._index_||0],33:r.timeStamp,12:r.type,35:"keyCode"in r?r.keyCode:void 0,60:"pageX"in r?r.pageX:void 0,61:"pageY"in r?r.pageY:void 0,65:"offsetX"in r?r.offsetX:void 0,66:"offsetY"in r?r.offsetY:void 0,62:"touches"in r?u(r.touches):void 0,63:"changedTouches"in r?u(r.changedTouches):void 0}})};return{execute(r,s,l){var u=r[s+2];const d=s+4+2*u;if(u=s+4+6*r[s+3]+2*u,c&&l&&(l=t.getNode(r[s+1]))){let c=s+4;for(;c<u;){const u=c<=d;e:{s=l;var g=u,f=r,p=c;const d=e.get(f[p]),m=f[p+1];if(s===t.baseElement){g?addEventListener(d,a[m]=h(1,!!f[p+5])):removeEventListener(d,a[m]);break e}let w=null!==s.oninput;const x="change"===d;g?(x&&(w=!0,s.onchange=null),s.addEventListener(d,a[m]=h(s._index_,!!f[p+5]))):(x&&(w=!1),s.removeEventListener(d,a[m])),s&&"value"in s&&(w||o(n,s),i(n,s))}c+=u?2:6}}return u}}},c=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(5);return{execute:(e,r,s)=>(o&&s&&(e=t.getNode(e[r+1]))&&(s=e.getBoundingClientRect(),n.messageToWorker({12:6,13:[e._index_],38:[s.top,s.right,s.bottom,s.left,s.width,s.height]})),r+2)}},d=(e,{getNode:t},n,r,s)=>{const l=s.executorsAllowed.includes(2);return{execute(e,r,s){const u=e[r+4],a=e[r+5];if(l&&s){const s=t(e[r+1]);s&&(0<a&&e.slice(r+6+u,r+6+u+a).forEach((e=>{(e=t(e))&&e.remove()})),0<u&&e.slice(r+6,r+6+u).forEach((l=>{const u=e[r+2];(l=t(l))&&(s.insertBefore(l,u&&t(u)||null),o(n,l),i(n,l))})))}return r+6+u+a}}},h=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(0);return{execute(n,r,i){if(o&&i){i=t.getNode(n[r+1]);const o=e.get(n[r+2]);n=0!==(n=n[r+4])?e.get(n-1):null,i&&null!=o&&(s.sanitizer?s.sanitizer.setAttribute(i,o,n):null==n?i.removeAttribute(o):i.setAttribute(o,n))}return r+5}}},g=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(1);return{execute:(n,r,s)=>(o&&s&&(s=t.getNode(n[r+1]),n=n[r+2],s&&n&&(s.textContent=e.get(n))),r+3)}},f=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(3);return{execute(n,r,i){if(o&&i){i=t.getNode(n[r+1]);const o=e.get(n[r+2]);{const t=n[r+4];n=1===n[r+3]?1===t:0!==t?e.get(t):null}i&&o&&null!=n&&(s.sanitizer?s.sanitizer.setProperty(i,o,String(n)):i[o]=n)}return r+5}}},p=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(6);let i,l=0;return{execute(e,t,n){if(o&&n&&s.longTask)if(6===e[t]){if(l++,!i){const e=new Promise((e=>i=e));Promise.resolve().then((()=>s.longTask&&s.longTask(e)))}}else 7===e[t]&&(l--,i&&0>=l&&(i(),i=null,l=0));return t+2},get active(){return null!==i}}},m=new Float32Array(1),w=new Uint16Array(m.buffer);function x(e,t,n,r,s,o){let i=[];for(let u=0;u<n;u++)switch(e[t++]){case 1:i.push(e[t++]);break;case 2:w[0]=e[t++],w[1]=e[t++],i.push(m[0]);break;case 3:i.push(r.get(e[t++]));break;case 4:var l=e[t++];t=x(e,t,l,r,s,o),i.push(t.args),t=t.offset;break;case 5:if(!o)throw Error("objectContext not provided.");i.push(o.get(e[t++]));break;case 6:l=s.getNode(e[t++]),i.push(l.getContext("2d"));break;case 7:i.push(s.getNode(e[t++]));break;default:throw Error("Cannot deserialize argument.")}return{args:i,offset:t}}let v=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(9);return{execute(n,s,i){const l=e.get(n[s+1]),u=n[s+2],{offset:a,args:c}=x(n,s+3,1,e,t,r);s=c[0];const{offset:d,args:h}=x(n,a,u,e,t,r);return o&&i&&(b(s,l)?s[l]=h[0]:s[l](...h)),d}}};function b(e,t){if(!e)throw Error(`Property ${t} does not exist on ${e}.`);let n=Object.getOwnPropertyDescriptor(e,t);return void 0!==n?"set"in n:b(Object.getPrototypeOf(e),t)}let k=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(10);if(!r)throw Error("objectContext is not defined.");return{execute(n,s,i){const l=e.get(n[s+1]),u=n[s+2],a=n[s+3],{offset:c,args:d}=x(n,s+4,1,e,t,r);s=d[0];const{offset:h,args:g}=x(n,c,a,e,t,r);return o&&i&&"new"!==l&&r.store(u,s[l](...g)),h}}},y=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(11);return{execute:(e,r,s)=>(o&&s&&(s=t.getNode(e[r+1]))&&self.createImageBitmap(s).then((t=>{n.messageToWorker({12:10,73:e[r+2],38:t},[t])})),r+3)}},N=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(12);return{execute(t,r,i){if(o&&i){i=t[r+1];var l=t[r+2],u=t[r+3];const o=t[r+4];if(t=0<u?e.get(u-1):"",u=0<o?e.get(o-1):null,1===i)((e,t)=>{s.sanitizer&&2===e&&s.sanitizer.getStorage(e,t).then((r=>{n.messageToWorker({12:11,74:t,75:e,21:r})}))})(l,t);else if(2===i)if(i=l,l=t,t=u,s.sanitizer)s.sanitizer.setStorage(i,l,t);else{let e;if(0===i?e=window.localStorage:1===i&&(e=window.sessionStorage),e)if(null==l){if(null!=t)throw Error("Unexpected storage operation.");e.clear()}else null==t?e.removeItem(l):e.setItem(l,t)}}return r+5}}},C=0,A={};let O=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(13);return{execute(t,n){if(o){const r=t[n+1],s=t[n+2];t=t[n+3],t=e.hasIndex(t)?JSON.parse(e.get(t)):void 0,1===r?A[s].resolve(t):A[s].reject(t),delete A[s]}return n+4}}},_=(e,t,n,r,s)=>{const o=s.executorsAllowed.includes(14);return{execute:(e,n,r)=>(o&&r&&(e=t.getNode(e[n+1]))&&e.scrollIntoView(),n+2)}};class T{constructor(t,n,r,s,o){this.nodeContext=this.stringContext=void 0,this.mutationQueue=[],this.pendingMutations=!1,this.executors=this.sanitizer=this.mutationPumpFunction=void 0,this.syncFlush=(e=!0)=>{let t=[];return this.mutationQueue.forEach((n=>{let r=n.length,s=0;for(;s<r;){let r=n[s];var o;if(!(o=e)){e:switch(r){case 4:case 5:case 6:case 7:case 12:case 8:case 13:o=!1;break e;default:o=!0}o=!o}o||t.push(r),s=this.executors[r].execute(n,s,o)}})),this.mutationQueue=[],this.pendingMutations=!1,t},this.stringContext=t,this.nodeContext=n,this.sanitizer=s.sanitizer,this.mutationPumpFunction=s.mutationPump,n=p.apply(null,t=[t,n,r,o,s]),this.executors={2:d.apply(null,t),0:h.apply(null,t),1:g.apply(null,t),3:f.apply(null,t),4:a.apply(null,t),5:c.apply(null,t),6:n,7:n,8:e.apply(null,t),9:v.apply(null,t),10:k.apply(null,t),11:y.apply(null,t),12:N.apply(null,t),13:O.apply(null,t),14:_.apply(null,t)}}mutate(e,t,n,r){this.stringContext.storeValues(n),this.nodeContext.createNodes(t,this.sanitizer),this.mutationQueue=this.mutationQueue.concat(r),this.pendingMutations||(this.pendingMutations=!0,this.mutationPumpFunction(this.syncFlush,e))}}class E{constructor(){this.strings=[]}get(e){return this.strings[e]||""}hasIndex(e){return void 0!==this.strings[e]}store(e){return this.strings.push(e),this.strings.length-1}storeValues(e){e.forEach((e=>this.store(e)))}}let M=[8,3];function S(e,t,n,r){var s=[].slice.call(e.childNodes).filter(n);return s={7:e._index_,11:0,0:e.nodeType,1:t(e.localName||e.nodeName),4:s.map((e=>S(e,t,n,r))),2:[].map.call(e.attributes||[],(e=>[t(e.namespaceURI||"null"),t(e.name),t(e.value)]))},null!=e.namespaceURI&&(s[6]=t(e.namespaceURI)),M.includes(e.nodeType)&&null!==e.textContent&&(s[5]=t(e.textContent)),o(r,e),i(r,e),s}class U{constructor(e,t,n,r,s){this[55]=void 0,this.nodeContext=t,this.config=s;let{skeleton:o,strings:i}=function(e,t,n){t=t.hydrateFilter||(()=>!0);let r=[],s=new Map;return{skeleton:S(e,(e=>{if(s.has(e))return s.get(e);const t=r.length;return s.set(e,t),r.push(e),t}),t,n),strings:r}}(e,s,this);t=[];let l=[],u=W("localStorage"),a=W("sessionStorage");for(let n in e.style)t.push(n);for(let t in e)t.startsWith("on")&&l.push(t);n=`\n'use strict';\n(function(){\n${n}\nself['window']=self;\nvar workerDOM=WorkerThread.workerDOM;\nWorkerThread.hydrate(\nworkerDOM.document,\n${JSON.stringify(i)},\n${JSON.stringify(o)},\n${JSON.stringify(t)},\n${JSON.stringify(l)},\n[${window.innerWidth},${window.innerHeight}],\n${JSON.stringify(u)},\n${JSON.stringify(a)}\n);\nworkerDOM.document[59](this);\nObject.assign(self,workerDOM);\n}).call(self);\n${r}\n//# sourceURL=${encodeURI(s.authorURL)}`,s.sandbox||(this[55]=new Worker(URL.createObjectURL(new Blob([n])))),s.onCreateWorker&&s.onCreateWorker(e,i,o,t)}ready(){return this.worker.readyPromise||Promise.resolve()}get worker(){return this[55]}messageToWorker(e,t){this.config.onSendMessage&&this.config.onSendMessage(e),this.worker.postMessage(e,t||[])}}function W(e,t){try{return t?{storage:t.getStorage("localStorage"==e?0:1),errorMsg:null}:{storage:window[e],errorMsg:null}}catch(e){return{errorMsg:e.message,storage:null}}}class P{constructor(){this.objects=void 0,this.objects=new Map}store(e,t){this.objects.set(e,t)}get(e){let t=this.objects.get(e);if(t)return t;throw Error("Object with id ("+e+") does not exist.")}}class L{constructor(e,t){this.workerContext_=e,this.config=t}callFunction(e,...t){if(!this.config.executorsAllowed.includes(13))throw Error(`[worker-dom]: Error calling ${e}. You must enable the FUNCTION_CALL executor within the config.`);let{promise:n,index:r}=function(){let e,t,n=new Promise(((n,r)=>{e=n,t=r}));C>=Number.MAX_VALUE&&(C=0);let r=C++;return A[r]={promise:n,resolve:e,reject:t},{promise:n,index:r}}();return e={12:12,77:e,78:JSON.stringify(t),7:r},this.workerContext_.messageToWorker(e),n}set onerror(e){this.workerContext_.worker.onerror=e}terminate(){this.workerContext_.worker.terminate()}}let R=[3,2];function j(e,n,s){var o=n.dataset.shadowDom;if("open"===o||"closed"===o){o=n.attachShadow({mode:o});let e=n.cloneNode(!0);o.appendChild(e),n=e}let i=new E,l=new P,u=new r(i,n),a=function(e){return Object.assign({},{mutationPump:requestAnimationFrame.bind(null),executorsAllowed:t},e)}(s);return e.then((([e,t])=>{if(e&&t&&s.authorURL){let r=new U(n,u,e,t,a),o=new T(i,u,r,a,l);return r.worker.onmessage=e=>{let{data:t}=e;R.includes(t[12])&&(o.mutate(t[54],t[37],t[41],new Uint16Array(t[36])),s.onReceiveMessage)&&s.onReceiveMessage(e)},r.ready().then((()=>new L(r,a)))}return null}))}function z(e,t){let n=e.getAttribute("src");return n?function(e,t){return j(Promise.all([fetch(t.domURL).then((e=>e.text())),fetch(t.authorURL).then((e=>e.text()))]),e,t)}(e,{authorURL:n,domURL:t}):Promise.resolve(null)}export{j as install,z as upgradeElement};
//# sourceMappingURL=main.mjs.map
