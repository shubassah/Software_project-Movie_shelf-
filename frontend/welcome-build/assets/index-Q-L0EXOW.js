(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const X of document.querySelectorAll('link[rel="modulepreload"]'))y(X);new MutationObserver(X=>{for(const Q of X)if(Q.type==="childList")for(const vt of Q.addedNodes)vt.tagName==="LINK"&&vt.rel==="modulepreload"&&y(vt)}).observe(document,{childList:!0,subtree:!0});function U(X){const Q={};return X.integrity&&(Q.integrity=X.integrity),X.referrerPolicy&&(Q.referrerPolicy=X.referrerPolicy),X.crossOrigin==="use-credentials"?Q.credentials="include":X.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function y(X){if(X.ep)return;X.ep=!0;const Q=U(X);fetch(X.href,Q)}})();function fy(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var Eo={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function oy(){if(th)return q;th=1;var E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),vt=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),bt=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),O=Symbol.for("react.view_transition"),Mt=Symbol.iterator;function le(r){return r===null||typeof r!="object"?null:(r=Mt&&r[Mt]||r["@@iterator"],typeof r=="function"?r:null)}var kt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},st=Object.assign,ge={};function ae(r,b,_){this.props=r,this.context=b,this.refs=ge,this.updater=_||kt}ae.prototype.isReactComponent={},ae.prototype.setState=function(r,b){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,b,"setState")},ae.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Zl(){}Zl.prototype=ae.prototype;function Ge(r,b,_){this.props=r,this.context=b,this.refs=ge,this.updater=_||kt}var Be=Ge.prototype=new Zl;Be.constructor=Ge,st(Be,ae.prototype),Be.isPureReactComponent=!0;var ne=Array.isArray;function Z(){}var tt={H:null,A:null,T:null,S:null},Ye=Object.prototype.hasOwnProperty;function xe(r,b,_){var N=_.ref;return{$$typeof:E,type:r,key:b,ref:N!==void 0?N:null,props:_}}function Te(r,b){return xe(r.type,b,r.props)}function ue(r){return typeof r=="object"&&r!==null&&r.$$typeof===E}function vl(r){var b={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(_){return b[_]})}var Kl=/\/+/g;function Ot(r,b){return typeof r=="object"&&r!==null&&r.key!=null?vl(""+r.key):b.toString(36)}function H(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Z,Z):(r.status="pending",r.then(function(b){r.status==="pending"&&(r.status="fulfilled",r.value=b)},function(b){r.status==="pending"&&(r.status="rejected",r.reason=b)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function G(r,b,_,N,$){var I=typeof r;(I==="undefined"||I==="boolean")&&(r=null);var et=!1;if(r===null)et=!0;else switch(I){case"bigint":case"string":case"number":et=!0;break;case"object":switch(r.$$typeof){case E:case w:et=!0;break;case D:return et=r._init,G(et(r._payload),b,_,N,$)}}if(et)return $=$(r),et=N===""?"."+Ot(r,0):N,ne($)?(_="",et!=null&&(_=et.replace(Kl,"$&/")+"/"),G($,b,_,"",function(Pe){return Pe})):$!=null&&(ue($)&&($=Te($,_+($.key==null||r&&r.key===$.key?"":(""+$.key).replace(Kl,"$&/")+"/")+et)),b.push($)),1;et=0;var A=N===""?".":N+":";if(ne(r))for(var Y=0;Y<r.length;Y++)N=r[Y],I=A+Ot(N,Y),et+=G(N,b,_,I,$);else if(Y=le(r),typeof Y=="function")for(r=Y.call(r),Y=0;!(N=r.next()).done;)N=N.value,I=A+Ot(N,Y++),et+=G(N,b,_,I,$);else if(I==="object"){if(typeof r.then=="function")return G(H(r),b,_,N,$);throw b=String(r),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return et}function B(r,b,_){if(r==null)return r;var N=[],$=0;return G(r,N,"","",function(I){return b.call(_,I,$++)}),N}function ot(r){if(r._status===-1){var b=r._result,_=b();_.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N,_.status===void 0&&(_.status="fulfilled",_.value=N))},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N,_.status===void 0&&(_.status="rejected",_.reason=N))}),r._status===-1&&(r._status=0,r._result=_)}if(r._status===1)return r._result.default;throw r._result}var at=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function _e(r){var b=tt.T,_={};_.types=b!==null?b.types:null,tt.T=_;try{var N=r(),$=tt.S;$!==null&&$(_,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Z,at)}catch(I){at(I)}finally{b!==null&&_.types!==null&&(b.types=_.types),tt.T=b}}function Ie(r){var b=tt.T;if(b!==null){var _=b.types;_===null?b.types=[r]:_.indexOf(r)===-1&&_.push(r)}else _e(Ie.bind(null,r))}var Wl={map:B,forEach:function(r,b,_){B(r,function(){b.apply(this,arguments)},_)},count:function(r){var b=0;return B(r,function(){b++}),b},toArray:function(r){return B(r,function(b){return b})||[]},only:function(r){if(!ue(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return q.Activity=x,q.Children=Wl,q.Component=ae,q.Fragment=U,q.Profiler=X,q.PureComponent=Ge,q.StrictMode=y,q.Suspense=yt,q.ViewTransition=O,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,q.__COMPILER_RUNTIME={__proto__:null,c:function(r){return tt.H.useMemoCache(r)}},q.addTransitionType=Ie,q.cache=function(r){return function(){return r.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(r,b,_){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var N=st({},r.props),$=r.key;if(b!=null)for(I in b.key!==void 0&&($=""+b.key),b)!Ye.call(b,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&b.ref===void 0||(N[I]=b[I]);var I=arguments.length-2;if(I===1)N.children=_;else if(1<I){for(var et=Array(I),A=0;A<I;A++)et[A]=arguments[A+2];N.children=et}return xe(r.type,$,N)},q.createContext=function(r){return r={$$typeof:vt,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:Q,_context:r},r},q.createElement=function(r,b,_){var N,$={},I=null;if(b!=null)for(N in b.key!==void 0&&(I=""+b.key),b)Ye.call(b,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&($[N]=b[N]);var et=arguments.length-2;if(et===1)$.children=_;else if(1<et){for(var A=Array(et),Y=0;Y<et;Y++)A[Y]=arguments[Y+2];$.children=A}if(r&&r.defaultProps)for(N in et=r.defaultProps,et)$[N]===void 0&&($[N]=et[N]);return xe(r,I,$)},q.createRef=function(){return{current:null}},q.forwardRef=function(r){return{$$typeof:Tt,render:r}},q.isValidElement=ue,q.lazy=function(r){return{$$typeof:D,_payload:{_status:-1,_result:r},_init:ot}},q.memo=function(r,b){return{$$typeof:bt,type:r,compare:b===void 0?null:b}},q.startTransition=_e,q.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()},q.use=function(r){return tt.H.use(r)},q.useActionState=function(r,b,_){return tt.H.useActionState(r,b,_)},q.useCallback=function(r,b){return tt.H.useCallback(r,b)},q.useContext=function(r){return tt.H.useContext(r)},q.useDebugValue=function(){},q.useDeferredValue=function(r,b){return tt.H.useDeferredValue(r,b)},q.useEffect=function(r,b){return tt.H.useEffect(r,b)},q.useEffectEvent=function(r){return tt.H.useEffectEvent(r)},q.useId=function(){return tt.H.useId()},q.useImperativeHandle=function(r,b,_){return tt.H.useImperativeHandle(r,b,_)},q.useInsertionEffect=function(r,b){return tt.H.useInsertionEffect(r,b)},q.useLayoutEffect=function(r,b){return tt.H.useLayoutEffect(r,b)},q.useMemo=function(r,b){return tt.H.useMemo(r,b)},q.useOptimistic=function(r,b){return tt.H.useOptimistic(r,b)},q.useReducer=function(r,b,_){return tt.H.useReducer(r,b,_)},q.useRef=function(r){return tt.H.useRef(r)},q.useState=function(r){return tt.H.useState(r)},q.useSyncExternalStore=function(r,b,_){return tt.H.useSyncExternalStore(r,b,_)},q.useTransition=function(){return tt.H.useTransition()},q.version="19.3.1",q}var eh;function _o(){return eh||(eh=1,Eo.exports=oy()),Eo.exports}var rn=_o();const Ht=fy(rn);var bo={exports:{}},uu={},So={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function ry(){return lh||(lh=1,(function(E){function w(H,G){var B=H.length;H.push(G);t:for(;0<B;){var ot=B-1>>>1,at=H[ot];if(0<X(at,G))H[ot]=G,H[B]=at,B=ot;else break t}}function U(H){return H.length===0?null:H[0]}function y(H){if(H.length===0)return null;var G=H[0],B=H.pop();if(B!==G){H[0]=B;t:for(var ot=0,at=H.length,_e=at>>>1;ot<_e;){var Ie=2*(ot+1)-1,Wl=H[Ie],r=Ie+1,b=H[r];if(0>X(Wl,B))r<at&&0>X(b,Wl)?(H[ot]=b,H[r]=B,ot=r):(H[ot]=Wl,H[Ie]=B,ot=Ie);else if(r<at&&0>X(b,B))H[ot]=b,H[r]=B,ot=r;else break t}}return G}function X(H,G){var B=H.sortIndex-G.sortIndex;return B!==0?B:H.id-G.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;E.unstable_now=function(){return Q.now()}}else{var vt=Date,Tt=vt.now();E.unstable_now=function(){return vt.now()-Tt}}var yt=[],bt=[],D=1,x=null,O=3,Mt=!1,le=!1,kt=!1,st=!1,ge=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,Zl=typeof setImmediate<"u"?setImmediate:null;function Ge(H){for(var G=U(bt);G!==null;){if(G.callback===null)y(bt);else if(G.startTime<=H)y(bt),G.sortIndex=G.expirationTime,w(yt,G);else break;G=U(bt)}}function Be(H){if(kt=!1,Ge(H),!le)if(U(yt)!==null)le=!0,ne||(ne=!0,ue());else{var G=U(bt);G!==null&&Ot(Be,G.startTime-H)}}var ne=!1,Z=-1,tt=5,Ye=-1;function xe(){return st?!0:!(E.unstable_now()-Ye<tt)}function Te(){if(st=!1,ne){var H=E.unstable_now();Ye=H;var G=!0;try{t:{le=!1,kt&&(kt=!1,ae(Z),Z=-1),Mt=!0;var B=O;try{e:{for(Ge(H),x=U(yt);x!==null&&!(x.expirationTime>H&&xe());){var ot=x.callback;if(typeof ot=="function"){x.callback=null,O=x.priorityLevel;var at=ot(x.expirationTime<=H);if(H=E.unstable_now(),typeof at=="function"){x.callback=at,Ge(H),G=!0;break e}x===U(yt)&&y(yt),Ge(H)}else y(yt);x=U(yt)}if(x!==null)G=!0;else{var _e=U(bt);_e!==null&&Ot(Be,_e.startTime-H),G=!1}}break t}finally{x=null,O=B,Mt=!1}G=void 0}}finally{G?ue():ne=!1}}}var ue;if(typeof Zl=="function")ue=function(){Zl(Te)};else if(typeof MessageChannel<"u"){var vl=new MessageChannel,Kl=vl.port2;vl.port1.onmessage=Te,ue=function(){Kl.postMessage(null)}}else ue=function(){ge(Te,0)};function Ot(H,G){Z=ge(function(){H(E.unstable_now())},G)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(H){H.callback=null},E.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<H?Math.floor(1e3/H):5},E.unstable_getCurrentPriorityLevel=function(){return O},E.unstable_next=function(H){switch(O){case 1:case 2:case 3:var G=3;break;default:G=O}var B=O;O=G;try{return H()}finally{O=B}},E.unstable_requestPaint=function(){st=!0},E.unstable_runWithPriority=function(H,G){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var B=O;O=H;try{return G()}finally{O=B}},E.unstable_scheduleCallback=function(H,G,B){var ot=E.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ot+B:ot):B=ot,H){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=B+at,H={id:D++,callback:G,priorityLevel:H,startTime:B,expirationTime:at,sortIndex:-1},B>ot?(H.sortIndex=B,w(bt,H),U(yt)===null&&H===U(bt)&&(kt?(ae(Z),Z=-1):kt=!0,Ot(Be,B-ot))):(H.sortIndex=at,w(yt,H),le||Mt||(le=!0,ne||(ne=!0,ue()))),H},E.unstable_shouldYield=xe,E.unstable_wrapCallback=function(H){var G=O;return function(){var B=O;O=G;try{return H.apply(this,arguments)}finally{O=B}}}})(Ho)),Ho}var ah;function sy(){return ah||(ah=1,So.exports=ry()),So.exports}var Mo={exports:{}},Vt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function dy(){if(nh)return Vt;nh=1;var E=_o();function w(D){var x="https://react.dev/errors/"+D;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)x+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+D+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var y={d:{f:U,r:function(){throw Error(w(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},X=Symbol.for("react.portal"),Q=Symbol.for("react.recoverable"),vt=Symbol.for("react.optimistic_key");function Tt(D,x,O){var Mt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:Mt==null?null:Mt===vt?vt:""+Mt,children:D,containerInfo:x,implementation:O}}var yt=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function bt(D,x){if(D==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Vt.browser=function(D){return{$$typeof:Q,_reason:D}},Vt.createPortal=function(D,x){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(w(299));return Tt(D,x,null,O)},Vt.flushSync=function(D){var x=yt.T,O=y.p;try{if(yt.T=null,y.p=2,D)return D()}finally{yt.T=x,y.p=O,y.d.f()}},Vt.preconnect=function(D,x){typeof D=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,y.d.C(D,x))},Vt.prefetchDNS=function(D){typeof D=="string"&&y.d.D(D)},Vt.preinit=function(D,x){if(typeof D=="string"&&x&&typeof x.as=="string"){var O=x.as,Mt=bt(O,x.crossOrigin),le=typeof x.integrity=="string"?x.integrity:void 0,kt=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;O==="style"?y.d.S(D,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:Mt,integrity:le,fetchPriority:kt}):O==="script"&&y.d.X(D,{crossOrigin:Mt,integrity:le,fetchPriority:kt,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Vt.preinitModule=function(D,x){if(typeof D=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var O=bt(x.as,x.crossOrigin);y.d.M(D,{crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}}else x==null&&y.d.M(D)},Vt.preload=function(D,x){if(typeof D=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var O=x.as,Mt=bt(O,x.crossOrigin);y.d.L(D,O,{crossOrigin:Mt,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Vt.preloadModule=function(D,x){if(typeof D=="string")if(x){var O=bt(x.as,x.crossOrigin);y.d.m(D,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:O,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0})}else y.d.m(D)},Vt.requestFormReset=function(D){y.d.r(D)},Vt.unstable_batchedUpdates=function(D,x){return D(x)},Vt.useFormState=function(D,x,O){return yt.H.useFormState(D,x,O)},Vt.useFormStatus=function(){return yt.H.useHostTransitionStatus()},Vt.version="19.3.1",Vt}var uh;function hy(){if(uh)return Mo.exports;uh=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(w){console.error(w)}}return E(),Mo.exports=dy(),Mo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function my(){if(ih)return uu;ih=1;var E=sy(),w=_o(),U=hy();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Q(t){for(var e=t,l=e;l&&!l.alternate;)e=l,(e.flags&4098)!==0&&(t=e.return),l=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function vt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yt(t){if(Q(t)!==t)throw Error(y(188))}function bt(t){var e=t.alternate;if(!e){if(e=Q(t),e===null)throw Error(y(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return yt(n),t;if(u===a)return yt(n),e;u=u.sibling}throw Error(y(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?t:e}function D(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=D(t),e!==null)return e;t=t.sibling}return null}function x(t,e,l,a,n,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&l(t,a,n,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&x(t.child,e,l,a,n,u))return!0;t=t.sibling}return!1}function O(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function Mt(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function le(t){var e=[null,null],l=O(t);return l===null||kt(e,t,l.child,{foundSelf:!1}),e}function kt(t,e,l,a){for(;l!==null;){if(l===e)a.foundSelf=!0;else if(l.tag===5||l.tag===27||l.tag===6){if(a.foundSelf)return t[1]=l,!0;t[0]=l}else if((l.tag!==22||l.memoizedState===null)&&kt(t,e,l.child,a))return!0;l=l.sibling}return!1}function st(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(y(559))}}var ge=null,ae=null;function Zl(t,e,l){return t===l?!0:t===e?(ge=t,!0):!1}function Ge(t,e,l){return t===l?(ae=t,!1):t===e?(ae!==null&&(ge=t),!0):!1}function Be(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function ne(t,e,l){for(var a=0,n=t;n;n=l(n))a++;n=0;for(var u=e;u;u=l(u))n++;for(;0<a-n;)t=l(t),a--;for(;0<n-a;)e=l(e),n--;for(;a--;){if(t===e||e!==null&&t===e.alternate)return t;t=l(t),e=l(e)}return null}var Z=Object.assign,tt=Symbol.for("react.element"),Ye=Symbol.for("react.transitional.element"),xe=Symbol.for("react.portal"),Te=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Kl=Symbol.for("react.consumer"),Ot=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),Ie=Symbol.for("react.legacy_hidden"),Wl=Symbol.for("react.memo_cache_sentinel"),r=Symbol.for("react.view_transition"),b=Symbol.for("react.recoverable"),_=Symbol.iterator;function N(t){return t===null||typeof t!="object"?null:(t=_&&t[_]||t["@@iterator"],typeof t=="function"?t:null)}var $=Symbol.for("react.client.reference");function I(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Te:return"Fragment";case vl:return"Profiler";case ue:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case _e:return"Activity";case r:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case xe:return"Portal";case Ot:return t.displayName||"Context";case Kl:return(t._context.displayName||"Context")+".Consumer";case H:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return e=t.displayName||null,e!==null?e:I(t.type)||"Memo";case at:e=t._payload,t=t._init;try{return I(t(e))}catch{}}return null}var et=Array.isArray,A=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe={pending:!1,data:null,method:null,action:null},Yi=[],ga=-1;function qe(t){return{current:t}}function Gt(t){0>ga||(t.current=Yi[ga],Yi[ga]=null,ga--)}function dt(t,e){ga++,Yi[ga]=t.current,t.current=e}var Xe=qe(null),sn=qe(null),yl=qe(null),cu=qe(null);function fu(t,e){switch(dt(yl,e),dt(sn,t),dt(Xe,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?od(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=od(e),t=rd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Gt(Xe),dt(Xe,t)}function xa(){Gt(Xe),Gt(sn),Gt(yl)}function qi(t){var e=t.memoizedState;e!==null&&(un._currentValue=e.memoizedState,dt(cu,t)),e=Xe.current;var l=rd(e,t.type);e!==l&&(dt(sn,t),dt(Xe,l))}function ou(t){sn.current===t&&(Gt(Xe),Gt(sn)),cu.current===t&&(Gt(cu),un._currentValue=Pe)}var Xi,No;function gl(t){if(Xi===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Xi=e&&e[1]||"",No=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+No}var ji=!1;function Li(t,e){if(!t||ji)return"";ji=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(S){var s=S}Reflect.construct(t,[],p)}else{try{p.call()}catch(S){s=S}p=!1;try{var v=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new t}finally{p&&(v!==void 0?Object.defineProperty(t.prototype,"props",v):delete t.prototype.props)}}}else{try{throw Error()}catch(S){s=S}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(S){if(S&&s&&typeof S.stack=="string")return[S.stack,s.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),h=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===h.length)for(a=f.length-1,n=h.length-1;1<=a&&0<=n&&f[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==h[n]){var g=`
`+f[a].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=a&&0<=n);break}}}finally{ji=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?gl(l):""}function dh(t,e){switch(t.tag){case 26:case 27:case 5:return gl(t.type);case 16:return gl("Lazy");case 13:return t.child!==e&&e!==null?gl("Suspense Fallback"):gl("Suspense");case 19:return gl("SuspenseList");case 0:case 15:return Li(t.type,!1);case 11:return Li(t.type.render,!1);case 1:return Li(t.type,!0);case 31:return gl("Activity");case 30:return gl("ViewTransition");default:return""}}function Oo(t){try{var e="",l=null;do e+=dh(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Vi=Object.prototype.hasOwnProperty,Qi=E.unstable_scheduleCallback,Zi=E.unstable_cancelCallback,hh=E.unstable_shouldYield,mh=E.unstable_requestPaint,ie=E.unstable_now,vh=E.unstable_getCurrentPriorityLevel,Do=E.unstable_ImmediatePriority,Co=E.unstable_UserBlockingPriority,ru=E.unstable_NormalPriority,yh=E.unstable_LowPriority,wo=E.unstable_IdlePriority,gh=E.log,xh=E.unstable_setDisableYieldValue,dn=null,ce=null;function xl(t){if(typeof gh=="function"&&xh(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(dn,t)}catch{}}var fe=Math.clz32?Math.clz32:Eh,Th=Math.log,ph=Math.LN2;function Eh(t){return t>>>=0,t===0?32:31-(Th(t)/ph|0)|0}var su=256,du=262144,hu=4194304;function Jl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mu(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Jl(a):(i&=c,i!==0?n=Jl(i):l||(l=c&~t,l!==0&&(n=Jl(l))))):(c=a&~u,c!==0?n=Jl(c):i!==0?n=Jl(i):l||(l=a&~t,l!==0&&(n=Jl(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function hn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Uo(t,e){(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var a=31-fe(l),n=1<<a;e|=t[a],l&=~n}return e}function bh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Go(){var t=hu;return hu<<=1,(hu&62914560)===0&&(hu=4194304),t}function Ki(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function mn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sh(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,h=t.hiddenUpdates;for(l=i&~l;0<l;){var g=31-fe(l),p=1<<g;c[g]=0,f[g]=-1;var s=h[g];if(s!==null)for(h[g]=null,g=0;g<s.length;g++){var v=s[g];v!==null&&(v.lane&=-536870913)}l&=~p}a!==0&&Bo(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function Bo(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Yo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-fe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function qo(t,e){var l=e&-e;return l=(l&42)!==0?1:Wi(l),(l&(t.suspendedLanes|e))!==0?0:l}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ji(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xo(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Wd(t.type))}function jo(t,e){var l=Y.p;try{return Y.p=t,e()}finally{Y.p=l}}var tl=Math.random().toString(36).slice(2),Bt="__reactFiber$"+tl,Ft="__reactProps$"+tl,Ta="__reactContainer$"+tl,Lo="__reactEvents$"+tl,Hh="__reactListeners$"+tl,Mh="__reactHandles$"+tl,Vo="__reactResources$"+tl,vn="__reactMarker$"+tl,vu="__reactLoad$"+tl;function yu(t){delete t[Bt],delete t[Ft],delete t[Hh],delete t[Mh]}function kl(t){var e;if(e=t[Bt])return e;for(var l=t.parentNode;l;){if(e=l[Ta]||l[Bt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ad(t);t!==null;){if(l=t[Bt])return l;t=Ad(t)}return e}t=l,l=t.parentNode}return null}function pa(t){if(t=t[Bt]||t[Ta]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function yn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Ea(t){var e=t[Vo];return e||(e=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Dt(t){t[vn]=!0}function Qo(t){t[vu]=void 0}var Zo=new Set,Ko={};function Fl(t,e){ba(t,e),ba(t+"Capture",e)}function ba(t,e){for(Ko[t]=e,t=0;t<e.length;t++)Zo.add(e[t])}var zh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wo={},Jo={};function Ah(t){return Vi.call(Jo,t)?!0:Vi.call(Wo,t)?!1:zh.test(t)?Jo[t]=!0:(Wo[t]=!0,!1)}var P=!1;function ko(){var t=P;return P=!1,t}function gu(t,e,l){if(Ah(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,l)}}function xu(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,l)}}function el(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,a)}}function oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rh(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ki(t){if(!t._valueTracker){var e=Fo(t)?"checked":"value";t._valueTracker=Rh(t,e,""+t[e])}}function $o(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Fo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}var _h=/[\n"\\]/g;function pe(t){return t.replace(_h,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Fi(t,e,l,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+oe(e)):t.value!==""+oe(e)&&(t.value=""+oe(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?i==="number"&&t.value==e?$i(t,oe(t.value)):$i(t,oe(e)):l!=null?$i(t,oe(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+oe(c):t.removeAttribute("name")}function Io(t,e,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){ki(t);return}l=l!=null?""+oe(l):"",e=e!=null?""+oe(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),ki(t)}function $i(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Sa(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+oe(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Po(t,e,l){if(e!=null&&(e=""+oe(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+oe(l):""}function tr(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(y(92));if(et(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=oe(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),ki(t)}function Ha(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Nh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function er(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Nh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function lr(t,e,l){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="",P=!0);for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&(er(t,n,a),P=!0)}else for(var u in e)e.hasOwnProperty(u)&&er(t,u,e[u])}function Ii(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tu(t){return Dh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function je(){}var Pi=null;function tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ma=null,za=null;function ar(t){var e=pa(t);if(e&&(t=e.stateNode)){var l=t[Ft]||null;t:switch(t=e.stateNode,e.type){case"input":if(Fi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Ft]||null;if(!n)throw Error(y(90));Fi(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&$o(a)}break t;case"textarea":Po(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Sa(t,!!l.multiple,e,!1)}}}var ec=!1;function nr(t,e,l){if(ec)return t(e,l);ec=!0;try{var a=t(e);return a}finally{if(ec=!1,(Ma!==null||za!==null)&&(Ti(),Ma&&(e=Ma,t=za,za=Ma=null,ar(e),t)))for(e=0;e<t.length;e++)ar(t[e])}}function gn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Ft]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(y(231,e,typeof l));return l}var ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=!1;if(ll)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){lc=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{lc=!1}var Tl=null,ac=null,pu=null;function ur(){if(pu)return pu;var t,e=ac,l=e.length,a,n="value"in Tl?Tl.value:Tl.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return pu=n.slice(t,1<a?1-a:void 0)}function Eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bu(){return!0}function ir(){return!1}function Zt(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?bu:ir,this.isPropagationStopped=ir,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=bu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=bu)},persist:function(){},isPersistent:bu}),e}var pl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=Zt(pl),Tn=Z({},pl,{view:0,detail:0}),Ch=Zt(Tn),nc,uc,pn,Hu=Z({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pn&&(pn&&t.type==="mousemove"?(nc=t.screenX-pn.screenX,uc=t.screenY-pn.screenY):uc=nc=0,pn=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),cr=Zt(Hu),wh=Z({},Hu,{dataTransfer:0}),Uh=Zt(wh),Gh=Z({},Tn,{relatedTarget:0}),ic=Zt(Gh),Bh=Z({},pl,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=Zt(Bh),qh=Z({},pl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xh=Zt(qh),jh=Z({},pl,{data:0}),fr=Zt(jh),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qh[t])?!!e[t]:!1}function cc(){return Zh}var Kh=Z({},Tn,{key:function(t){if(t.key){var e=Lh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(t){return t.type==="keypress"?Eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wh=Zt(Kh),Jh=Z({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=Zt(Jh),kh=Z({},pl,{submitter:0}),Fh=Zt(kh),$h=Z({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),Ih=Zt($h),Ph=Z({},pl,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=Zt(Ph),em=Z({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=Zt(em),am=Z({},pl,{newState:0,oldState:0,source:0}),nm=Zt(am),um=[9,13,27,32],fc=ll&&"CompositionEvent"in window,En=null;ll&&"documentMode"in document&&(En=document.documentMode);var im=ll&&"TextEvent"in window&&!En,rr=ll&&(!fc||En&&8<En&&11>=En),sr=" ",dr=!1;function hr(t,e){switch(t){case"keyup":return um.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Aa=!1;function cm(t,e){switch(t){case"compositionend":return mr(e);case"keypress":return e.which!==32?null:(dr=!0,sr);case"textInput":return t=e.data,t===sr&&dr?null:t;default:return null}}function fm(t,e){if(Aa)return t==="compositionend"||!fc&&hr(t,e)?(t=ur(),pu=ac=Tl=null,Aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rr&&e.locale!=="ko"?null:e.data;default:return null}}var om={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!om[t.type]:e==="textarea"}function yr(t,e,l,a){Ma?za?za.push(a):za=[a]:Ma=a,e=Mi(e,"onChange"),0<e.length&&(l=new Su("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var bn=null,Sn=null;function rm(t){ad(t,0)}function Mu(t){var e=yn(t);if($o(e))return t}function gr(t,e){if(t==="change")return e}var xr=!1;if(ll){var oc;if(ll){var rc="oninput"in document;if(!rc){var Tr=document.createElement("div");Tr.setAttribute("oninput","return;"),rc=typeof Tr.oninput=="function"}oc=rc}else oc=!1;xr=oc&&(!document.documentMode||9<document.documentMode)}function pr(){bn&&(bn.detachEvent("onpropertychange",Er),Sn=bn=null)}function Er(t){if(t.propertyName==="value"&&Mu(Sn)){var e=[];yr(e,Sn,t,tc(t)),nr(rm,e)}}function sm(t,e,l){t==="focusin"?(pr(),bn=e,Sn=l,bn.attachEvent("onpropertychange",Er)):t==="focusout"&&pr()}function dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Sn)}function hm(t,e){if(t==="click")return Mu(e)}function mm(t,e){if(t==="input"||t==="change")return Mu(e)}function vm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:vm;function Hn(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Vi.call(e,n)||!re(t[n],e[n]))return!1}return!0}function sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function br(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sr(t,e){var l=br(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=br(l)}}function Hr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=sc(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=sc(t.document)}return e}function dc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ym=ll&&"documentMode"in document&&11>=document.documentMode,Ra=null,hc=null,Mn=null,mc=!1;function zr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mc||Ra==null||Ra!==sc(a)||(a=Ra,"selectionStart"in a&&dc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Mn&&Hn(Mn,a)||(Mn=a,a=Mi(hc,"onSelect"),0<a.length&&(e=new Su("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Ra)))}function $l(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var _a={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionrun:$l("Transition","TransitionRun"),transitionstart:$l("Transition","TransitionStart"),transitioncancel:$l("Transition","TransitionCancel"),transitionend:$l("Transition","TransitionEnd")},vc={},Ar={};ll&&(Ar=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Il(t){if(vc[t])return vc[t];if(!_a[t])return t;var e=_a[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Ar)return vc[t]=e[l];return t}var Rr=Il("animationend"),_r=Il("animationiteration"),Nr=Il("animationstart"),gm=Il("transitionrun"),xm=Il("transitionstart"),Tm=Il("transitioncancel"),Or=Il("transitionend"),Dr=new Map,yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yc.push("scrollEnd");function Ne(t,e){Dr.set(t,e),Fl(e,[t])}var pm=0;function al(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=we.identifierPrefix;var l=pm++;return t="_"+t+"t_"+l.toString(32)+"_",e.autoName=t}function Cr(t){if(t==null||typeof t=="string")return t;var e=null,l=ka;if(l!==null)for(var a=0;a<l.length;a++){var n=t[l[a]];if(n!=null){if(n==="none")return"none";e=e==null?n:e+(" "+n)}}return e??t.default}function nl(t,e){return t=Cr(t),e=Cr(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ee=[],Na=0,gc=0;function Au(){for(var t=Na,e=gc=Na=0;e<t;){var l=Ee[e];Ee[e++]=null;var a=Ee[e];Ee[e++]=null;var n=Ee[e];Ee[e++]=null;var u=Ee[e];if(Ee[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&wr(l,n,u)}}function Ru(t,e,l,a){Ee[Na++]=t,Ee[Na++]=e,Ee[Na++]=l,Ee[Na++]=a,gc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function xc(t,e,l,a){return Ru(t,e,l,a),_u(t)}function Pl(t,e){return Ru(t,null,null,e),_u(t)}function wr(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-fe(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function _u(t){if(50<Wn)throw Wn=0,xi=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Oa={};function Em(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,l,a){return new Em(t,e,l,a)}function Tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ul(t,e){var l=t.alternate;return l===null?(l=$t(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&1206910976,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Ur(t,e){t.flags&=1206910978;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Nu(t,e,l,a,n,u){var i=0;if(a=t,typeof a=="function")Tc(a)&&(i=1);else if(typeof a=="string")i=kv(t,l,Xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(a){case _e:return t=$t(31,l,e,n),t.elementType=_e,t.lanes=u,t;case Te:return ta(l.children,n,u,e);case ue:i=8,n|=24;break;case vl:return t=$t(12,l,e,n|2),t.elementType=vl,t.lanes=u,t;case G:return t=$t(13,l,e,n),t.elementType=G,t.lanes=u,t;case B:return t=$t(19,l,e,n),t.elementType=B,t.lanes=u,t;case Ie:case r:return t=n|32,t=$t(30,l,e,t),t.elementType=r,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ot:i=10;break t;case Kl:i=9;break t;case H:i=11;break t;case ot:i=14;break t;case at:i=16,a=null;break t}i=29,l=Error(y(130,t===null?"null":typeof t,"")),a=null}return e=$t(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function ta(t,e,l,a){return t=$t(7,t,a,e),t.lanes=l,t}function pc(t,e,l){return t=$t(6,t,null,e),t.lanes=l,t}function Gr(t){var e=$t(18,null,null,0);return e.stateNode=t,e}function Ec(t,e,l){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Br=new WeakMap;function be(t,e){if(typeof t=="object"&&t!==null){var l=Br.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Oo(e)},Br.set(t,e),e)}return{value:t,source:e,stack:Oo(e)}}var Da=[],Ca=0,Ou=null,zn=0,Se=[],He=0,El=null,Le=1,Ve="";function il(t,e){Da[Ca++]=zn,Da[Ca++]=Ou,Ou=t,zn=e}function Yr(t,e,l){Se[He++]=Le,Se[He++]=Ve,Se[He++]=El,El=t;var a=Le;t=Ve;var n=32-fe(a)-1;a&=~(1<<n),l+=1;var u=32-fe(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Le=1<<32-fe(e)+n|l<<n|a,Ve=u+t}else Le=1<<u|l<<n|a,Ve=t}function Du(t){t.return!==null&&(il(t,1),Yr(t,1,0))}function bc(t){for(;t===Ou;)Ou=Da[--Ca],Da[Ca]=null,zn=Da[--Ca],Da[Ca]=null;for(;t===El;)El=Se[--He],Se[He]=null,Ve=Se[--He],Se[He]=null,Le=Se[--He],Se[He]=null}function qr(t,e){Se[He++]=Le,Se[He++]=Ve,Se[He++]=El,Le=e.id,Ve=e.overflow,El=t}var Ct=null,ht=null,V=!1,bl=null,Me=!1,Sc=Error(y(519));function Sl(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw An(be(e,t)),Sc}function Xr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Bt]=t,e[Ft]=a,l){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(l=0;l<kn.length;l++)W(kn[l],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),Io(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),tr(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||cd(e.textContent,l)?(a.popover!=null&&(W("beforetoggle",e),W("toggle",e)),a.onScroll!=null&&W("scroll",e),a.onScrollEnd!=null&&W("scrollend",e),a.onClick!=null&&(e.onclick=je),e=!0):e=!1,e||Sl(t,!0)}function Cu(t){for(Ct=t.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:Me=!1;return;case 27:case 3:Me=!0;return;default:Ct=Ct.return}}function wa(t){if(t!==Ct)return!1;if(!V)return Cu(t),V=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||to(t.type,t.memoizedProps)),l=!l),l&&ht&&Sl(t),Cu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ht=zd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));ht=zd(t)}else e===27?(e=ht,ql(t.type)?(t=oo,oo=null,ht=t):ht=e):ht=Ct?Ae(t.stateNode.nextSibling):null;return!0}function ea(){ht=Ct=null,V=!1}function Hc(){var t=bl;return t!==null&&(te===null?te=t:te.push.apply(te,t),bl=null),t}function An(t){bl===null?bl=[t]:bl.push(t)}var Mc=qe(null),la=null,cl=null;function Hl(t,e,l){dt(Mc,e._currentValue),e._currentValue=l}function fl(t){t._currentValue=Mc.current,Gt(Mc)}function wu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function zc(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var f=0;f<e.length;f++)if(c.context===e[f]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),wu(u.return,l,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(y(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),wu(i,l,t),i=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=l,i=n.alternate,i!==null&&(i.lanes|=l),wu(n.return,l,t),i=n.child,i=i!==null?i.sibling:null):i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function aa(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=n.type;re(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===cu.current){if(i=n.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(un):t=[un])}n=n.return}return t!==null&&zc(e,t,l,a),e.flags|=262144,t!==null}function Uu(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function na(t){la=t,cl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yt(t){return jr(la,t)}function Gu(t,e){return la===null&&na(t),jr(t,e)}function jr(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},cl===null){if(t===null)throw Error(y(308));cl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cl=cl.next=e;return l}var bm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Sm=E.unstable_scheduleCallback,Hm=E.unstable_NormalPriority,zt={$$typeof:Ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ac(){return{controller:new bm,data:new Map,refCount:0}}function Rn(t){t.refCount--,t.refCount===0&&Sm(Hm,function(){t.controller.abort()})}function Lr(t,e){if((t.pendingLanes&4194048)!==0){var l=t.transitionTypes;for(l===null&&(l=t.transitionTypes=[]),t=0;t<e.length;t++){var a=e[t];l.indexOf(a)===-1&&l.push(a)}}}var _n=null;function Mm(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Nn=null,Rc=0,ua=0,Ua=null;function zm(t,e){if(Nn===null){var l=Nn=[];Rc=0,ua=Zf(),Ua={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Rc++,e.then(Vr,Vr),e}function Vr(){if(--Rc===0&&(_n=null,Nn!==null)){Ua!==null&&(Ua.status="fulfilled");var t=Nn;Nn=null,ua=0,Ua=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Am(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Qr=A.S;A.S=function(t,e){if(G0=ie(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&zm(t,e),_n!==null)for(var l=Pa;l!==null;)Lr(l,_n),l=l.next;if(l=t.types,l!==null){for(var a=Pa;a!==null;)Lr(a,l),a=a.next;if(ua!==0){a=_n,a===null&&(a=_n=[]);for(var n=0;n<l.length;n++){var u=l[n];a.indexOf(u)===-1&&a.push(u)}}}Qr!==null&&Qr(t,e)};var ia=qe(null);function _c(){var t=ia.current;return t!==null?t:rt.pooledCache}function Bu(t,e){e===null?dt(ia,ia.current):dt(ia,e.pool)}function Zr(){var t=_c();return t===null?null:{parent:zt._currentValue,pool:t}}var Ga=Error(y(460)),Nc=Error(y(474)),Yu=Error(y(542)),qu={then:function(){}};function Kr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(je,je),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kr(t),t===void 0&&!("reason"in e)?Error(y(600)):t;default:if(typeof e.status=="string")e.then(je,je);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kr(t),t}throw fa=e,Ga}}function ca(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(fa=l,Ga):l}}var fa=null;function Jr(){if(fa===null)throw Error(y(459));var t=fa;return fa=null,t}function kr(t){if(t===Ga||t===Yu)throw Error(y(483))}var Ba=null,On=0;function Xu(t){var e=On;return On+=1,Ba===null&&(Ba=[]),Wr(Ba,t,e)}function Ml(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ju(t,e){throw e.$$typeof===tt?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fr(t){function e(d,o){if(t){var m=d.deletions;m===null?(d.deletions=[o],d.flags|=16):m.push(o)}}function l(d,o){if(!t)return null;for(;o!==null;)e(d,o),o=o.sibling;return null}function a(d){for(var o=new Map;d!==null;)d.key===null?o.set(d.index,d):o.set(d.key,d),d=d.sibling;return o}function n(d,o){return d=ul(d,o),d.index=0,d.sibling=null,d}function u(d,o,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<o?(d.flags|=2,o):m):(d.flags|=134217730,o)):(d.flags|=1048576,o)}function i(d){return t&&d.alternate===null&&(d.flags|=134217730),d}function c(d,o,m,T){return o===null||o.tag!==6?(o=pc(m,d.mode,T),o.return=d,o):(o=n(o,m),o.return=d,o)}function f(d,o,m,T){var M=m.type;return M===Te?(d=g(d,o,m.props.children,T,m.key),Ml(d,m),d):o!==null&&(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===at&&ca(M)===o.type)?(o=n(o,m.props),Ml(o,m),o.return=d,o):(o=Nu(m.type,m.key,m.props,null,d.mode,T),Ml(o,m),o.return=d,o)}function h(d,o,m,T){return o===null||o.tag!==4||o.stateNode.containerInfo!==m.containerInfo||o.stateNode.implementation!==m.implementation?(o=Ec(m,d.mode,T),o.return=d,o):(o=n(o,m.children||[]),o.return=d,o)}function g(d,o,m,T,M){return o===null||o.tag!==7?(o=ta(m,d.mode,T,M),o.return=d,o):(o=n(o,m),o.return=d,o)}function p(d,o,m){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=pc(""+o,d.mode,m),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ye:return m=Nu(o.type,o.key,o.props,null,d.mode,m),Ml(m,o),m.return=d,m;case xe:return o=Ec(o,d.mode,m),o.return=d,o;case at:return o=ca(o),p(d,o,m)}if(et(o)||N(o))return o=ta(o,d.mode,m,null),o.return=d,o;if(typeof o.then=="function")return p(d,Xu(o),m);if(o.$$typeof===Ot)return p(d,Gu(d,o),m);ju(d,o)}return null}function s(d,o,m,T){var M=o!==null?o.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return M!==null?null:c(d,o,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ye:return m.key===M?f(d,o,m,T):null;case xe:return m.key===M?h(d,o,m,T):null;case at:return m=ca(m),s(d,o,m,T)}if(et(m)||N(m))return M!==null?null:g(d,o,m,T,null);if(typeof m.then=="function")return s(d,o,Xu(m),T);if(m.$$typeof===Ot)return s(d,o,Gu(d,m),T);ju(d,m)}return null}function v(d,o,m,T,M){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return d=d.get(m)||null,c(o,d,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ye:return d=d.get(T.key===null?m:T.key)||null,f(o,d,T,M);case xe:return d=d.get(T.key===null?m:T.key)||null,h(o,d,T,M);case at:return T=ca(T),v(d,o,m,T,M)}if(et(T)||N(T))return d=d.get(m)||null,g(o,d,T,M,null);if(typeof T.then=="function")return v(d,o,m,Xu(T),M);if(T.$$typeof===Ot)return v(d,o,m,Gu(o,T),M);ju(o,T)}return null}function S(d,o,m,T){for(var M=null,k=null,R=o,C=o=0,_t=null;R!==null&&C<m.length;C++){R.index>C?(_t=R,R=null):_t=R.sibling;var F=s(d,R,m[C],T);if(F===null){R===null&&(R=_t);break}t&&R&&F.alternate===null&&e(d,R),o=u(F,o,C),k===null?M=F:k.sibling=F,k=F,R=_t}if(C===m.length)return l(d,R),V&&il(d,C),M;if(R===null){for(;C<m.length;C++)R=p(d,m[C],T),R!==null&&(o=u(R,o,C),k===null?M=R:k.sibling=R,k=R);return V&&il(d,C),M}for(R=a(R);C<m.length;C++)_t=v(R,d,C,m[C],T),_t!==null&&(t&&(F=_t.alternate,F!==null&&R.delete(F.key===null?C:F.key)),o=u(_t,o,C),k===null?M=_t:k.sibling=_t,k=_t);return t&&R.forEach(function(Ql){return e(d,Ql)}),V&&il(d,C),M}function z(d,o,m,T){if(m==null)throw Error(y(151));for(var M=null,k=null,R=o,C=o=0,_t=null,F=m.next();R!==null&&!F.done;C++,F=m.next()){R.index>C?(_t=R,R=null):_t=R.sibling;var Ql=s(d,R,F.value,T);if(Ql===null){R===null&&(R=_t);break}t&&R&&Ql.alternate===null&&e(d,R),o=u(Ql,o,C),k===null?M=Ql:k.sibling=Ql,k=Ql,R=_t}if(F.done)return l(d,R),V&&il(d,C),M;if(R===null){for(;!F.done;C++,F=m.next())F=p(d,F.value,T),F!==null&&(o=u(F,o,C),k===null?M=F:k.sibling=F,k=F);return V&&il(d,C),M}for(R=a(R);!F.done;C++,F=m.next())F=v(R,d,C,F.value,T),F!==null&&(t&&(_t=F.alternate,_t!==null&&R.delete(_t.key===null?C:_t.key)),o=u(F,o,C),k===null?M=F:k.sibling=F,k=F);return t&&R.forEach(function(cy){return e(d,cy)}),V&&il(d,C),M}function L(d,o,m,T){if(typeof m=="object"&&m!==null&&m.type===Te&&m.key===null&&m.props.ref===void 0&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ye:t:{for(var M=m.key;o!==null;){if(o.key===M){if(M=m.type,M===Te){if(o.tag===7){l(d,o.sibling),T=n(o,m.props.children),Ml(T,m),T.return=d,d=T;break t}}else if(o.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===at&&ca(M)===o.type){l(d,o.sibling),T=n(o,m.props),Ml(T,m),T.return=d,d=T;break t}l(d,o);break}else e(d,o);o=o.sibling}m.type===Te?(T=ta(m.props.children,d.mode,T,m.key),Ml(T,m),T.return=d,d=T):(T=Nu(m.type,m.key,m.props,null,d.mode,T),Ml(T,m),T.return=d,d=T)}return i(d);case xe:t:{for(M=m.key;o!==null;){if(o.key===M)if(o.tag===4&&o.stateNode.containerInfo===m.containerInfo&&o.stateNode.implementation===m.implementation){l(d,o.sibling),T=n(o,m.children||[]),T.return=d,d=T;break t}else{l(d,o);break}else e(d,o);o=o.sibling}T=Ec(m,d.mode,T),T.return=d,d=T}return i(d);case at:return m=ca(m),L(d,o,m,T)}if(et(m))return S(d,o,m,T);if(N(m)){if(M=N(m),typeof M!="function")throw Error(y(150));return m=M.call(m),z(d,o,m,T)}if(typeof m.then=="function")return L(d,o,Xu(m),T);if(m.$$typeof===Ot)return L(d,o,Gu(d,m),T);ju(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,o!==null&&o.tag===6?(l(d,o.sibling),T=n(o,m),T.return=d,d=T):(l(d,o),T=pc(m,d.mode,T),T.return=d,d=T),i(d)):l(d,o)}return function(d,o,m,T){try{On=0;var M=L(d,o,m,T);return Ba=null,M}catch(R){if(R===Ga||R===Yu)throw R;var k=$t(29,R,null,d.mode);return k.lanes=T,k.return=d,k}finally{}}}var oa=Fr(!0),$r=Fr(!1),zl=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(lt&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=_u(t),wr(t,null,l),e}return Ru(t,a,e,l),_u(t)}function Dn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Yo(t,l)}}function Cc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var wc=!1;function Cn(){if(wc){var t=Ua;if(t!==null)throw t}}function wn(t,e,l,a){wc=!1;var n=t.updateQueue;zl=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,h=f.next;f.next=null,i===null?u=h:i.next=h,i=f;var g=t.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==i&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=f))}if(u!==null){var p=n.baseState;i=0,g=h=f=null,c=u;do{var s=c.lane&-536870913,v=s!==c.lane;if(v?(J&s)===s:(a&s)===s){s!==0&&s===ua&&(wc=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var S=t,z=c;s=e;var L=l;switch(z.tag){case 1:if(S=z.payload,typeof S=="function"){p=S.call(L,p,s);break t}p=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=z.payload,s=typeof S=="function"?S.call(L,p,s):S,s==null)break t;p=Z({},p,s);break t;case 2:zl=!0}}s=c.callback,s!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[s]:v.push(s))}else v={lane:s,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=v,f=p):g=g.next=v,i|=s;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;v=c,c=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);g===null&&(f=p),n.baseState=f,n.firstBaseUpdate=h,n.lastBaseUpdate=g,u===null&&(n.shared.lanes=0),Ul|=i,t.lanes=i,t.memoizedState=p}}function Ir(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function Pr(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Ir(l[t],e)}var _l=qe(null),Lu=qe(0);function ts(t,e){t=hl,dt(Lu,t),dt(_l,e),hl=t|e.baseLanes}function Uc(){dt(Lu,hl),dt(_l,_l.current)}function Gc(){hl=Lu.current,Gt(_l),Gt(Lu)}var qt=qe(null),Qt=null;function Nl(t){var e=t.alternate;dt(Xt,Xt.current&1),dt(qt,t),Qt===null&&(e===null||_l.current!==null||e.memoizedState!==null)&&(Qt=t)}function Bc(t){dt(Xt,Xt.current),dt(qt,t),Qt===null&&(Qt=t)}function es(t){t.tag===22?(dt(Xt,Xt.current),dt(qt,t),Qt===null&&(Qt=t)):Ol()}function Ol(){dt(Xt,Xt.current),dt(qt,qt.current)}function se(t){Gt(qt),Qt===t&&(Qt=null),Gt(Xt)}var Xt=qe(0);function Un(t,e){dt(qt,qt.current),dt(Xt,e)}function Yc(t){Gt(Xt),Gt(qt),Qt===t&&(Qt=null)}function Vu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||co(l)||fo(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ol=0,j=null,ft=null,At=null,Qu=!1,Ya=!1,ra=!1,Zu=0,Gn=0,qa=null,Rm=0;function pt(){throw Error(y(321))}function qc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function Xc(t,e,l,a,n,u){return ol=u,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=t===null||t.memoizedState===null?Ys:qs,ra=!1,u=l(a,n),ra=!1,Ya&&(u=as(e,l,a,n)),ls(t),u}function ls(t){A.H=Iu;var e=ft!==null&&ft.next!==null;if(ol=0,At=ft=j=null,Qu=!1,Gn=0,qa=null,e)throw Error(y(300));t===null||Rt||(t=t.dependencies,t!==null&&Uu(t)&&(Rt=!0))}function as(t,e,l,a){j=t;var n=0;do{if(Ya&&(qa=null),Gn=0,Ya=!1,25<=n)throw Error(y(301));if(n+=1,At=ft=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}A.H=Gm,u=e(l,a)}while(Ya);return u}function _m(){var t=A.H,e=t.useState()[0];return e=typeof e.then=="function"?Bn(e):e,t=t.useState()[0],(ft!==null?ft.memoizedState:null)!==t&&(j.flags|=1024),e}function jc(){var t=Zu!==0;return Zu=0,t}function Lc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Vc(t){if(Qu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Qu=!1}ol=0,At=ft=j=null,Ya=!1,Gn=Zu=0,qa=null}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?j.memoizedState=At=t:At=At.next=t,At}function St(){if(ft===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=At===null?j.memoizedState:At.next;if(e!==null)At=e,ft=t;else{if(t===null)throw j.alternate===null?Error(y(467)):Error(y(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},At===null?j.memoizedState=At=t:At=At.next=t}return At}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bn(t){var e=Gn;return Gn+=1,qa===null&&(qa=[]),t=Wr(qa,t,e),e=j,(At===null?e.memoizedState:At.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?Ys:qs),t}function Wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bn(t);if(t.$$typeof===b)return;if(t.$$typeof===Ot)return Yt(t)}throw Error(y(438,String(t)))}function Qc(t){var e=null,l=j.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=j.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Ku(),j.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Wl;return e.index++,l}function rl(t,e){return typeof e=="function"?e(t):e}function Ju(t){var e=St();return Zc(e,ft,t)}function Zc(t,e,l){var a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var c=i=null,f=null,h=e,g=!1;do{var p=h.lane&-536870913;if(p!==h.lane?(J&p)===p:(ol&p)===p){var s=h.revertLane;if(s===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),p===ua&&(g=!0);else if((ol&s)===s){h=h.next,s===ua&&(g=!0);continue}else p={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=p,i=u):f=f.next=p,j.lanes|=s,Ul|=s;p=h.action,ra&&l(u,p),u=h.hasEagerState?h.eagerState:l(u,p)}else s={lane:p,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},f===null?(c=f=s,i=u):f=f.next=s,j.lanes|=p,Ul|=p;h=h.next}while(h!==null&&h!==e);if(f===null?i=u:f.next=c,!re(u,t.memoizedState)&&(Rt=!0,g&&(l=Ua,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Kc(t){var e=St(),l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);re(u,e.memoizedState)||(Rt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function ns(t,e,l){var a=j,n=St(),u=V;if(u){if(l===void 0)throw Error(y(407));l=l()}else l=e();var i=!re((ft||n).memoizedState,l);if(i&&(n.memoizedState=l,Rt=!0),n=n.queue,kc(cs.bind(null,a,n,t),[t]),t=n.getSnapshot!==e||i||At!==null&&(At.memoizedState.tag&1)!==0,Xa(t?9:8,{destroy:void 0},is.bind(null,a,n,l,e),null),t){if(a.flags|=2048,rt===null)throw Error(y(349));u||(ol&127)!==0||us(a,e,l)}return l}function us(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=j.updateQueue,e===null?(e=Ku(),j.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function is(t,e,l,a){e.value=l,e.getSnapshot=a,fs(e)&&os(t)}function cs(t,e,l){return l(function(){fs(e)&&os(t)})}function fs(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function os(t){var e=Pl(t,2);e!==null&&ee(e,t,2)}function Wc(t){var e=Kt();if(typeof t=="function"){var l=t;if(t=l(),ra){xl(!0);try{l()}finally{xl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e}function rs(t,e,l,a){return t.baseState=l,Zc(t,ft,typeof a=="function"?a:rl)}function Nm(t,e,l,a,n){if($u(t))throw Error(y(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};A.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,ss(e,u)):(u.next=l.next,e.pending=l.next=u)}}function ss(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=A.T,i={};i.types=u!==null?u.types:null,A.T=i;try{var c=l(n,a),f=A.S;f!==null&&f(i,c),ds(t,e,c)}catch(h){Jc(t,e,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),A.T=u}}else try{u=l(n,a),ds(t,e,u)}catch(h){Jc(t,e,h)}}function ds(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){hs(t,e,a)},function(a){return Jc(t,e,a)}):hs(t,e,l)}function hs(t,e,l){e.status="fulfilled",e.value=l,ms(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,ss(t,l)))}function Jc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,ms(e),e=e.next;while(e!==a)}t.action=null}function ms(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function vs(t,e){return e}function ys(t,e){if(V){var l=rt.formState;if(l!==null){t:{var a=j;if(V){if(ht){e:{for(var n=ht,u=Me;n.nodeType!==8;){if(!u){n=null;break e}if(n=Ae(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ht=Ae(n.nextSibling),a=n.data==="F!";break t}}Sl(a)}a=!1}a&&(e=l[0])}}return l=Kt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},l.queue=a,l=Us.bind(null,j,a),a.dispatch=l,a=Wc(!1),u=tf.bind(null,j,!1,a.queue),a=Kt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Nm.bind(null,j,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function gs(t){var e=St();return xs(e,ft,t)}function xs(t,e,l){if(e=Zc(t,e,vs)[0],t=Ju(rl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Bn(e)}catch(i){throw i===Ga?Yu:i}else a=e;e=St();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(j.flags|=2048,Xa(9,{destroy:void 0},Om.bind(null,n,l),null)),[a,u,t]}function Om(t,e){t.action=e}function Ts(t){var e=St(),l=ft;if(l!==null)return xs(e,l,t);St(),e=e.memoizedState,l=St();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Xa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=j.updateQueue,e===null&&(e=Ku(),j.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ps(){return St().memoizedState}function ku(t,e,l,a){var n=Kt();j.flags|=t,n.memoizedState=Xa(1|e,{destroy:void 0},l,a===void 0?null:a)}function Fu(t,e,l,a){var n=St();a=a===void 0?null:a;var u=n.memoizedState.inst;ft!==null&&a!==null&&qc(a,ft.memoizedState.deps)?n.memoizedState=Xa(e,u,l,a):(j.flags|=t,n.memoizedState=Xa(1|e,u,l,a))}function Es(t,e){ku(8390656,8,t,e)}function kc(t,e){Fu(2048,8,t,e)}function Dm(t){j.flags|=4;var e=j.updateQueue;if(e===null)e=Ku(),j.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function bs(t){var e=St().memoizedState;return Dm({ref:e,nextImpl:t}),function(){if((lt&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function Ss(t,e){return Fu(4,2,t,e)}function Hs(t,e){return Fu(4,4,t,e)}function Ms(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zs(t,e,l){l=l!=null?l.concat([t]):null,Fu(4,4,Ms.bind(null,e,t),l)}function Fc(){}function As(t,e){var l=St();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&qc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Rs(t,e){var l=St();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&qc(e,a[1]))return a[0];if(a=t(),ra){xl(!0);try{t()}finally{xl(!1)}}return l.memoizedState=[a,e],a}function $c(t,e,l){return l===void 0||(ol&1073741824)!==0&&(J&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Y0(),j.lanes|=t,Ul|=t,l)}function _s(t,e,l,a){return re(l,e)?l:_l.current!==null?(t=$c(t,l,a),re(t,e)||(Rt=!0),t):(ol&106)===0||(ol&1073741824)!==0&&(J&261930)===0?(Rt=!0,t.memoizedState=l):(t=Y0(),j.lanes|=t,Ul|=t,e)}function Ns(t,e,l,a,n){var u=Y.p;Y.p=u!==0&&8>u?u:8;var i=A.T,c={};c.types=i!==null?i.types:null,A.T=c,tf(t,!1,e,l);try{var f=n(),h=A.S;if(h!==null&&h(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var g=Am(f,a);Yn(t,e,g,ve(t))}else Yn(t,e,a,ve(t))}catch(p){Yn(t,e,{then:function(){},status:"rejected",reason:p},ve())}finally{Y.p=u,i!==null&&c.types!==null&&(i.types=c.types),A.T=i}}function Cm(){}function Ic(t,e,l,a){if(t.tag!==5)throw Error(y(476));var n=Os(t).queue;Ns(t,n,e,Pe,l===null?Cm:function(){return Ds(t),l(a)})}function Os(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Pe,baseState:Pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:Pe},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ds(t){var e=Os(t);e.next===null&&(e=t.alternate.memoizedState),Yn(t,e.next.queue,{},ve())}function Pc(){return Yt(un)}function Cs(){return St().memoizedState}function ws(){return St().memoizedState}function wm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ve();t=Al(l);var a=Rl(e,t,l);a!==null&&(ee(a,e,l),Dn(a,e,l)),e={cache:Ac()},t.payload=e;return}e=e.return}}function Um(t,e,l){var a=ve();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},$u(t)?Gs(e,l):(l=xc(t,e,l,a),l!==null&&(ee(l,t,a),Bs(l,e,a)))}function Us(t,e,l){var a=ve();Yn(t,e,l,a)}function Yn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if($u(t))Gs(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,re(c,i))return Ru(t,e,n,0),rt===null&&Au(),!1}catch{}finally{}if(l=xc(t,e,n,a),l!==null)return ee(l,t,a),Bs(l,e,a),!0}return!1}function tf(t,e,l,a){if(a={lane:2,revertLane:Zf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$u(t)){if(e)throw Error(y(479))}else e=xc(t,l,a,2),e!==null&&ee(e,t,2)}function $u(t){var e=t.alternate;return t===j||e!==null&&e===j}function Gs(t,e){Ya=Qu=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Bs(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Yo(t,l)}}var Iu={readContext:Yt,use:Wu,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt,useEffectEvent:pt},Ys={readContext:Yt,use:Wu,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Es,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ku(4194308,4,Ms.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ku(4194308,4,t,e)},useInsertionEffect:function(t,e){ku(4,2,t,e)},useMemo:function(t,e){var l=Kt();e=e===void 0?null:e;var a=t();if(ra){xl(!0);try{t()}finally{xl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Kt();if(l!==void 0){var n=l(e);if(ra){xl(!0);try{l(e)}finally{xl(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=Um.bind(null,j,t),[a.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:function(t){t=Wc(t);var e=t.queue,l=Us.bind(null,j,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Fc,useDeferredValue:function(t,e){var l=Kt();return $c(l,t,e)},useTransition:function(){var t=Wc(!1);return t=Ns.bind(null,j,t.queue,!0,!1),Kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=j,n=Kt();if(V){if(l===void 0)throw Error(y(407));l=l()}else{if(l=e(),rt===null)throw Error(y(349));(J&127)!==0||us(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,Es(cs.bind(null,a,u,t),[t]),a.flags|=2048,Xa(9,{destroy:void 0},is.bind(null,a,u,l,e),null),l},useId:function(){var t=Kt(),e=rt.identifierPrefix;if(V){var l=Ve,a=Le;l=(a&~(1<<32-fe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Zu++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Rm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Pc,useFormState:ys,useActionState:ys,useOptimistic:function(t){var e=Kt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=tf.bind(null,j,!0,l),l.dispatch=e,[t,e]},useMemoCache:Qc,useCacheRefresh:function(){return Kt().memoizedState=wm.bind(null,j)},useEffectEvent:function(t){var e=Kt(),l={impl:t};return e.memoizedState=l,function(){if((lt&2)!==0)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},qs={readContext:Yt,use:Wu,useCallback:As,useContext:Yt,useEffect:kc,useImperativeHandle:zs,useInsertionEffect:Ss,useLayoutEffect:Hs,useMemo:Rs,useReducer:Ju,useRef:ps,useState:function(){return Ju(rl)},useDebugValue:Fc,useDeferredValue:function(t,e){var l=St();return _s(l,ft.memoizedState,t,e)},useTransition:function(){var t=Ju(rl)[0],e=St().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:ns,useId:Cs,useHostTransitionStatus:Pc,useFormState:gs,useActionState:gs,useOptimistic:function(t,e){var l=St();return rs(l,ft,t,e)},useMemoCache:Qc,useCacheRefresh:ws,useEffectEvent:bs},Gm={readContext:Yt,use:Wu,useCallback:As,useContext:Yt,useEffect:kc,useImperativeHandle:zs,useInsertionEffect:Ss,useLayoutEffect:Hs,useMemo:Rs,useReducer:Kc,useRef:ps,useState:function(){return Kc(rl)},useDebugValue:Fc,useDeferredValue:function(t,e){var l=St();return ft===null?$c(l,t,e):_s(l,ft.memoizedState,t,e)},useTransition:function(){var t=Kc(rl)[0],e=St().memoizedState;return[typeof t=="boolean"?t:Bn(t),e]},useSyncExternalStore:ns,useId:Cs,useHostTransitionStatus:Pc,useFormState:Ts,useActionState:Ts,useOptimistic:function(t,e){var l=St();return ft!==null?rs(l,ft,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:ws,useEffectEvent:bs};function ef(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:Z({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var lf={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ve(),n=Al(a);n.payload=e,l!=null&&(n.callback=l),e=Rl(t,n,a),e!==null&&(ee(e,t,a),Dn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ve(),n=Al(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Rl(t,n,a),e!==null&&(ee(e,t,a),Dn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ve(),a=Al(l);a.tag=2,e!=null&&(a.callback=e),e=Rl(t,a,l),e!==null&&(ee(e,t,l),Dn(e,t,l))}};function Xs(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!Hn(l,a)||!Hn(n,u):!0}function js(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&lf.enqueueReplaceState(e,e.state,null)}function sa(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=Z({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Ls(t){zu(t)}function Vs(t){console.error(t)}function Qs(t){zu(t)}function Pu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Zs(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function af(t,e,l){return l=Al(l),l.tag=3,l.payload={element:null},l.callback=function(){Pu(t,e)},l}function Ks(t){return t=Al(t),t.tag=3,t}function Ws(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){Zs(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Zs(e,l,a),typeof n!="function"&&(Gl===null?Gl=new Set([this]):Gl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Bm(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&aa(e,l,n,!0),l=qt.current,l!==null){switch(l.tag){case 31:case 13:case 19:return Qt===null?pi():l.alternate===null&&Et===0&&(Et=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===qu?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Lf(t,a,n)),!1;case 22:return l.flags|=65536,a===qu?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Lf(t,a,n)),!1}throw Error(y(435,l.tag))}return Lf(t,a,n),pi(),!1}if(V)return e=qt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Sc&&(t=Error(y(422),{cause:a}),An(be(t,l)))):(a!==Sc&&(e=Error(y(423),{cause:a}),An(be(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=be(a,l),n=af(t.stateNode,a,n),Cc(t,n),Et!==4&&(Et=2)),!1;var u=Error(y(520),{cause:a});if(u=be(u,l),Kn===null?Kn=[u]:Kn.push(u),Et!==4&&(Et=2),e===null)return!0;a=be(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=af(l.stateNode,a,t),Cc(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Gl===null||!Gl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ks(n),Ws(n,t,l,a),Cc(l,n),!1;break;case 22:if(l.memoizedState!==null)return l.flags|=65536,!1}l=l.return}while(l!==null);return!1}var nf=Error(y(461)),Rt=!1;function Nt(t,e,l,a){e.child=t===null?$r(e,null,l,a):oa(e,t.child,l,a)}function Js(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return na(e),a=Xc(t,e,l,i,u,n),c=jc(),t!==null&&!Rt?(Lc(t,e,n),sl(t,e,n)):(V&&c&&Du(e),e.flags|=1,Nt(t,e,a,n),e.child)}function ks(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!Tc(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Fs(t,e,u,a,n)):(t=Nu(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!hf(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Hn,l(i,a)&&t.ref===e.ref)return sl(t,e,n)}return e.flags|=1,t=ul(u,a),t.ref=e.ref,t.return=e,e.child=t}function Fs(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(Hn(u,a)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=a=u,hf(t,n))(t.flags&131072)!==0&&(Rt=!0);else return e.lanes=t.lanes,sl(t,e,n)}return uf(t,e,l,a,n)}function $s(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,e.child=null;return Is(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bu(e,u!==null?u.cachePool:null),u!==null?ts(e,u):Uc(),es(e);else return a=e.lanes=536870912,Is(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Bu(e,u.cachePool),ts(e,u),Ol(),e.memoizedState=null):(t!==null&&Bu(e,null),Uc(),Ol());return Nt(t,e,n,l),e.child}function qn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Is(t,e,l,a,n){var u=_c();return u=u===null?null:{parent:zt._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Bu(e,null),Uc(),es(e),t!==null&&aa(t,e,a,!0),e.childLanes=n,null}function ti(t,e){return e=ei({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Ps(t,e,l){return oa(e,t.child,null,l),t=ti(e,e.pendingProps),t.flags|=2,se(e),e.memoizedState=null,t}function Ym(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(V){if(a.mode==="hidden")return t=ti(e,a),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qn(null,t);if(Bc(e),(t=ht)?(t=Md(t,Me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:El!==null?{id:Le,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=Gr(t),l.return=e,e.child=l,Ct=e,ht=null)):t=null,t===null)throw Sl(e);return e.lanes=536870912,null}return ti(e,a)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Bc(e),n)if(e.flags&256)e.flags&=-257,e=Ps(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(Rt||aa(t,e,l,!1),n=(l&t.childLanes)!==0,Rt||n){if(_l.current===null){if(a=rt,a!==null&&(i=qo(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Pl(t,i),ee(a,t,i),nf;pi()}e=Ps(t,e,l)}else t=u.treeContext,ht=Ae(i.nextSibling),Ct=e,V=!0,bl=null,Me=!1,t!==null&&qr(e,t),e=ti(e,a),e.flags|=134221824;return e}return t=ul(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ja(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function uf(t,e,l,a,n){return na(e),l=Xc(t,e,l,a,void 0,n),a=jc(),t!==null&&!Rt?(Lc(t,e,n),sl(t,e,n)):(V&&a&&Du(e),e.flags|=1,Nt(t,e,l,n),e.child)}function t0(t,e,l,a,n,u){return na(e),e.updateQueue=null,l=as(e,a,l,n),ls(t),a=jc(),t!==null&&!Rt?(Lc(t,e,u),sl(t,e,u)):(V&&a&&Du(e),e.flags|=1,Nt(t,e,l,u),e.child)}function e0(t,e,l,a,n){if(na(e),e.stateNode===null){var u=Oa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Yt(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=lf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},Oc(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Yt(i):Oa,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ef(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&lf.enqueueReplaceState(u,u.state,null),wn(e,a,u,n),Cn(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,f=sa(l,c);u.props=f;var h=u.context,g=l.contextType;i=Oa,typeof g=="object"&&g!==null&&(i=Yt(g));var p=l.getDerivedStateFromProps;g=typeof p=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&js(e,u,a,i),zl=!1;var s=e.memoizedState;u.state=s,wn(e,a,u,n),Cn(),h=e.memoizedState,c||s!==h||zl?(typeof p=="function"&&(ef(e,l,p,a),h=e.memoizedState),(f=zl||Xs(e,l,f,a,s,h,i))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),u.props=a,u.state=h,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Dc(t,e),i=e.memoizedProps,g=sa(l,i),u.props=g,p=e.pendingProps,s=u.context,h=l.contextType,f=Oa,typeof h=="object"&&h!==null&&(f=Yt(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==p||s!==f)&&js(e,u,a,f),zl=!1,s=e.memoizedState,u.state=s,wn(e,a,u,n),Cn();var v=e.memoizedState;i!==p||s!==v||zl||t!==null&&t.dependencies!==null&&Uu(t.dependencies)?(typeof c=="function"&&(ef(e,l,c,a),v=e.memoizedState),(g=zl||Xs(e,l,g,a,s,v,f)||t!==null&&t.dependencies!==null&&Uu(t.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,v,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,v,f)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&s===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&s===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=v),u.props=a,u.state=v,u.context=f,a=g):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&s===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&s===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,ja(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=oa(e,t.child,null,n),e.child=oa(e,null,l,n)):Nt(t,e,l,n),e.memoizedState=u.state,t=e.child):t=sl(t,e,n),t}function l0(t,e,l,a){return ea(),e.flags|=256,Nt(t,e,l,a),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:Zr()}}function of(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=me),t}function a0(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(Xt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(V){if(n?Nl(e):Ol(),(t=ht)?(t=Md(t,Me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:El!==null?{id:Le,overflow:Ve}:null,retryLane:536870912,hydrationErrors:null},l=Gr(t),l.return=e,e.child=l,Ct=e,ht=null)):t=null,t===null)throw Sl(e);return fo(t)?e.lanes=32:e.lanes=536870912,null}return u=a.children,a=a.fallback,n?(Ol(),n=e.mode,u=ei({mode:"hidden",children:u},n),a=ta(a,n,l,null),u.return=e,a.return=e,u.sibling=a,e.child=u,a=e.child,a.memoizedState=ff(l),a.childLanes=of(t,i,l),e.memoizedState=cf,qn(null,a)):(Nl(e),rf(e,u))}var c=t.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return qm(t,e,u,i,a,f,c,l)}return n?(Ol(),n=a.fallback,u=e.mode,c=t.child,f=c.sibling,a=ul(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,f!==null?n=ul(f,n):(n=ta(n,u,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,qn(null,a),a=e.child,n=t.child.memoizedState,n===null?n=ff(l):(u=n.cachePool,u!==null?(c=zt._currentValue,u=u.parent!==c?{parent:c,pool:c}:u):u=Zr(),n={baseLanes:n.baseLanes|l,cachePool:u}),a.memoizedState=n,a.childLanes=of(t,i,l),e.memoizedState=cf,qn(t.child,a)):(Nl(e),l=t.child,t=l.sibling,l=ul(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function rf(t,e){return e=ei({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ei(t,e){return t=$t(22,t,null,e),t.lanes=0,t}function li(t,e,l){return oa(e,t.child,null,l),t=rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qm(t,e,l,a,n,u,i,c){if(l)return e.flags&256?(Nl(e),e.flags&=-257,li(t,e,c)):e.memoizedState!==null?(Ol(),e.child=t.child,e.flags|=128,null):(Ol(),u=n.fallback,i=e.mode,n=ei({mode:"visible",children:n.children},i),u=ta(u,i,c,null),u.flags|=2,n.return=e,u.return=e,n.sibling=u,e.child=n,oa(e,t.child,null,c),n=e.child,n.memoizedState=ff(c),n.childLanes=of(t,a,c),e.memoizedState=cf,qn(null,n));if(Nl(e),fo(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var f=a.dgst;return a=f,a!==""&&(n=Error(y(419)),n.stack="",n.digest=a,An({value:n,source:null,stack:null})),li(t,e,c)}if(Rt||aa(t,e,c,!1),a=(c&t.childLanes)!==0,Rt||a){if(_l.current!==null)return li(t,e,c);if(a=rt,a!==null&&(n=qo(a,c),n!==0&&n!==i.retryLane))throw i.retryLane=n,Pl(t,n),ee(a,t,n),nf;return co(u)||pi(),li(t,e,c)}return co(u)?(e.flags|=192,e.child=t.child,null):(t=i.treeContext,ht=Ae(u.nextSibling),Ct=e,V=!0,bl=null,Me=!1,t!==null&&qr(e,t),e=rf(e,n.children),e.flags|=134221824,e)}function n0(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),wu(t.return,e,l)}function u0(t){for(var e=null;t!==null;){var l=t.alternate;l!==null&&Vu(l)===null&&(e=t),t=t.sibling}return e}function ai(t,e,l,a,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function sf(t){var e=t.child;for(t.child=null;e!==null;){var l=e.sibling;e.sibling=t.child,t.child=e,e=l}}function df(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Xt.current;if(e.flags&128)return Un(e,i),null;var c=(i&2)!==0;if(c?(i=i&1|2,e.flags|=128):i&=1,Un(e,i),n==="backwards"&&t!==null?(sf(t),Nt(t,e,a,l),sf(t)):Nt(t,e,a,l),a=V?zn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n0(t,l,e);else if(t.tag===19)n0(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"backwards":l=u0(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null,sf(e)),ai(e,!0,n,null,u,a);break;case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Vu(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}ai(e,!0,l,null,u,a);break;case"together":ai(e,!1,null,null,void 0,a);break;case"independent":e.memoizedState=null;break;default:l=u0(e.child),l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),ai(e,!1,n,l,u,a)}return e.child}function i0(t,e,l){var a=e.pendingProps;return Hl(e,e.type,a.value),Nt(t,e,a.children,l),e.child}function sl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ul|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(aa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,l=ul(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=ul(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function hf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Uu(t)))}function Xm(t,e,l){switch(e.tag){case 3:fu(e,e.stateNode.containerInfo),Hl(e,zt,t.memoizedState.cache),ea();break;case 27:case 5:qi(e);break;case 4:fu(e,e.stateNode.containerInfo);break;case 10:Hl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Bc(e),null;break;case 13:var a=e.memoizedState;if(a!==null){if(a.dehydrated!==null)return Nl(e),e.flags|=128,null;a=aa(t,e,l,!1);var n=e.child.childLanes;return a||(l&n)!==0?a0(t,e,l):(Nl(e),t=sl(t,e,l),t!==null?t.sibling:null)}Nl(e);break;case 19:if(e.flags&128)return df(t,e,l);if(n=(t.flags&128)!==0,a=(l&e.childLanes)!==0,a||(aa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return df(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Un(e,Xt.current),a)break;return null;case 22:return e.lanes=0,$s(t,e,l,e.pendingProps);case 24:Hl(e,zt,t.memoizedState.cache)}return sl(t,e,l)}function c0(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Rt=!0;else{if(!hf(t,l)&&(e.flags&128)===0)return Rt=!1,Xm(t,e,l);Rt=(t.flags&131072)!==0}else Rt=!1,V&&(e.flags&1048576)!==0&&Yr(e,zn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ca(e.elementType),e.type=t,typeof t=="function")Tc(t)?(a=sa(t,a),e.tag=1,e=e0(null,e,t,a,l)):(e.tag=0,e=uf(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===H){e.tag=11,e=Js(null,e,t,a,l);break t}else if(n===ot){e.tag=14,e=ks(null,e,t,a,l);break t}else if(n===Ot){e.tag=10,e.type=t,e=i0(null,e,l);break t}}throw e=I(t)||t,Error(y(306,e,""))}}return e;case 0:return uf(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=sa(a,e.pendingProps),e0(t,e,a,n,l);case 3:t:{if(fu(e,e.stateNode.containerInfo),t===null)throw Error(y(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Dc(t,e),wn(e,a,null,l);var i=e.memoizedState;if(a=i.cache,Hl(e,zt,a),a!==u.cache&&zc(e,[zt],l,!0),Cn(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=l0(t,e,a,l);break t}else if(a!==n){n=be(Error(y(424)),e),An(n),e=l0(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Ae(t.firstChild),Ct=e,V=!0,bl=null,Me=!0,l=$r(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|134221824,l=l.sibling}else{if(ea(),a===n){e=sl(t,e,l);break t}Nt(t,e,a,l)}e=e.child}return e;case 26:return ja(t,e),t===null?(l=Dd(e.type,null,e.pendingProps,null))?e.memoizedState=l:V||(e.stateNode=sd(e.type,e.pendingProps,yl.current,e)):e.memoizedState=Dd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qi(e),t===null&&V&&(a=e.stateNode=Rd(e.type,e.pendingProps,yl.current),Ct=e,Me=!0,n=ht,ql(e.type)?(oo=n,ht=Ae(a.firstChild)):ht=n),Nt(t,e,e.pendingProps.children,l),ja(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&V&&((n=a=ht)&&(a=wv(a,e.type,e.pendingProps,Me),a!==null?(e.stateNode=a,Ct=e,ht=Ae(a.firstChild),Me=!1,n=!0):n=!1),n||Sl(e)),qi(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,to(n,u)?a=null:i!==null&&to(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Xc(t,e,_m,null,null,l),un._currentValue=n),ja(t,e),Nt(t,e,a,l),e.child;case 6:return t===null&&V&&((t=l=ht)&&(l=Uv(l,e.pendingProps,Me),l!==null?(e.stateNode=l,Ct=e,ht=null,t=!0):t=!1),t||Sl(e)),null;case 13:return a0(t,e,l);case 4:return fu(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=oa(e,null,a,l):Nt(t,e,a,l),e.child;case 11:return Js(t,e,e.type,e.pendingProps,l);case 7:return a=e.pendingProps,ja(t,e),Nt(t,e,a,l),e.child;case 8:return Nt(t,e,e.pendingProps.children,l),e.child;case 12:return Nt(t,e,e.pendingProps.children,l),e.child;case 10:return i0(t,e,l);case 9:return n=e.type._context,a=e.pendingProps.children,na(e),n=Yt(n),a=a(n),e.flags|=1,Nt(t,e,a,l),e.child;case 14:return ks(t,e,e.type,e.pendingProps,l);case 15:return Fs(t,e,e.type,e.pendingProps,l);case 19:return df(t,e,l);case 31:return Ym(t,e,l);case 22:return $s(t,e,l,e.pendingProps);case 24:return na(e),a=Yt(zt),t===null?(n=_c(),n===null&&(n=rt,u=Ac(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},Oc(e),Hl(e,zt,n)):((t.lanes&l)!==0&&(Dc(t,e),wn(e,null,null,l),Cn()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Hl(e,zt,a)):(a=u.cache,Hl(e,zt,a),a!==n.cache&&zc(e,[zt],l,!0))),Nt(t,e,e.pendingProps.children,l),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=e.pendingProps,a.name!=null&&a.name!=="auto"?e.flags|=t===null?18882560:18874368:V&&Du(e),t!==null&&t.memoizedProps.name!==a.name?e.flags|=4194816:ja(t,e),Nt(t,e,a.children,l),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function dl(t){t.flags|=4}function mf(t,e,l,a,n){var u;if((u=(t.mode&32)!==0)&&(u=l===null?Gd(e,a):Gd(e,a)&&(a.src!==l.src||a.srcSet!==l.srcSet)),u){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(L0())t.flags|=8192;else throw fa=qu,Nc}else t.flags&=-16777217}function f0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bd(e))if(L0())t.flags|=8192;else throw fa=qu,Nc}function ni(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Go():536870912,t.lanes|=e,Ka|=e)}function Xn(t,e){if(!V)switch(t.tailMode){case"visible":break;case"collapsed":for(var l=t.tail,a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null;break;default:for(e=t.tail,l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function jm(t,e,l){var a=e.pendingProps;switch(bc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return mt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fl(zt),xa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wa(e)?dl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hc())),mt(e),null;case 26:var n=e.type,u=e.memoizedState;return t===null?(dl(e),u!==null?(mt(e),f0(e,u)):(mt(e),mf(e,n,null,a,l))):u?u!==t.memoizedState?(dl(e),mt(e),f0(e,u)):(mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&dl(e),mt(e),mf(e,n,t,a,l)),null;case 27:if(ou(e),l=yl.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return mt(e),e.subtreeFlags&=-33554433,null}t=Xe.current,wa(e)?Xr(e):(t=Rd(n,a,l),e.stateNode=t,dl(e))}return mt(e),e.subtreeFlags&=-33554433,null;case 5:if(ou(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return mt(e),e.subtreeFlags&=-33554433,null}if(u=Xe.current,wa(e))Xr(e);else{var i=$n(yl.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Bt]=e,u[Ft]=a;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=u;t:switch(Lt(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&dl(e)}}return mt(e),e.subtreeFlags&=-33554433,mf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&dl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(y(166));if(t=yl.current,wa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Ct,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Bt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||cd(t.nodeValue,l)),t||Sl(e,!0)}else t=$n(t).createTextNode(a),t[Bt]=e,e.stateNode=t}return mt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=wa(e),l!==null){if(t===null){if(!a)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[Bt]=e}else ea(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),t=!1}else l=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(se(e),e):(se(e),null);if((e.flags&128)!==0)throw Error(y(558))}return mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=wa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(y(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[Bt]=e}else ea(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),n=!1}else n=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(se(e),e):(se(e),null)}return se(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),ni(e,e.updateQueue),mt(e),null);case 4:return xa(),t===null&&kf(e.stateNode.containerInfo),e.flags|=67108864,mt(e),null;case 10:return fl(e.type),mt(e),null;case 19:if(Yc(e),a=e.memoizedState,a===null)return mt(e),null;if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)Xn(a,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=Vu(t),u!==null){for(e.flags|=128,Xn(a,!1),t=u.updateQueue,e.updateQueue=t,ni(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Ur(l,t),l=l.sibling;return Un(e,Xt.current&1|2),V&&il(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ie()>yi&&(e.flags|=128,n=!0,Xn(a,!1),e.lanes=4194304)}else{if(!n)if(t=Vu(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,ni(e,t),Xn(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!u.alternate&&!V)return mt(e),null}else 2*ie()-a.renderingStartTime>yi&&l!==536870912&&(e.flags|=128,n=!0,Xn(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}if(a.tail!==null){t=a.tail;t:{for(l=t;l!==null;){if(l.alternate!==null){l=!1;break t}l=l.sibling}l=!0}return a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ie(),t.sibling=null,u=Xt.current,u=n?u&1|2:u&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!l||V?Un(e,u):(l=u,dt(qt,e),dt(Xt,l),Qt===null&&(Qt=e)),V&&il(e,a.treeForkCount),t}return mt(e),null;case 22:case 23:return se(e),Gc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),l=e.updateQueue,l!==null&&ni(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&Gt(ia),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),fl(zt),mt(e),null;case 25:return null;case 30:return e.flags|=33554432,mt(e),null}throw Error(y(156,e.tag))}function Lm(t,e){switch(bc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fl(zt),xa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ou(e),null;case 31:if(e.memoizedState!==null){if(se(e),e.alternate===null)throw Error(y(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(se(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Yc(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return xa(),null;case 10:return fl(e.type),null;case 22:case 23:return se(e),Gc(),t!==null&&Gt(ia),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fl(zt),null;case 25:return null;default:return null}}function o0(t,e){switch(bc(e),e.tag){case 3:fl(zt),xa();break;case 26:case 27:case 5:ou(e);break;case 4:xa();break;case 31:e.memoizedState!==null&&se(e);break;case 13:se(e);break;case 19:Yc(e);break;case 10:fl(e.type);break;case 22:case 23:se(e),Gc(),t!==null&&Gt(ia);break;case 24:fl(zt)}}function jn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){it(e,e.return,c)}}function Dl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=e;var f=l,h=c;try{h()}catch(g){it(n,f,g)}}}a=a.next}while(a!==u)}}catch(g){it(e,e.return,g)}}function r0(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Pr(e,l)}catch(a){it(t,t.return,a)}}}function s0(t,e,l){l.props=sa(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){it(t,e,a)}}function Qe(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:var n=t.stateNode,u=al(t.memoizedProps,n);(n.ref===null||n.ref.name!==u)&&(n.ref=xd(u)),a=n.ref;break;case 7:if(t.stateNode===null){var i=new ye(t);x(t.child,!1,Dv,i,void 0,void 0),t.stateNode=i}a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(c){it(t,e,c)}}function jt(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){it(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){it(t,e,n)}else l.current=null}function ui(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var l=0;l<e.length;l++)Hd(t.stateNode,e[l])}function d0(t){for(var e=t.return;e!==null&&(yf(e)&&Hd(t.stateNode,e.stateNode),!vf(e));)e=e.return}function Ln(t){for(var e=t.return;e!==null&&(yf(e)&&Cv(t.stateNode,e.stateNode),!vf(e));)e=e.return}function vf(t){return t.tag===5||t.tag===3||t.tag===27}function yf(t){return t&&t.tag===7&&t.stateNode!==null}function gf(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){it(t,t.return,n)}}function xf(t,e,l){try{var a=t.stateNode;mv(a,t.type,l,e),a[Ft]=e}catch(n){it(t,t.return,n)}}function h0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ql(t.type)||t.tag===4}function Tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||h0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ql(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(n,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(n),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=je)),ui(t,a),P=!0;else if(n!==4&&(n===27&&(ui(t,a),a=null,ql(t.type)&&(l=t.stateNode,e=null)),t=t.child,t!==null))for(pf(t,e,l,a),t=t.sibling;t!==null;)pf(t,e,l,a),t=t.sibling}function ii(t,e,l,a){var n=t.tag;if(n===5||n===6)n=t.stateNode,e?l.insertBefore(n,e):l.appendChild(n),ui(t,a),P=!0;else if(n!==4&&(n===27&&(ui(t,a),a=null,ql(t.type)&&(l=t.stateNode)),t=t.child,t!==null))for(ii(t,e,l,a),t=t.sibling;t!==null;)ii(t,e,l,a),t=t.sibling}function m0(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lt(e,a,l),e[Bt]=t,e[Ft]=l}catch(u){it(t,t.return,u)}}var ci=!1,de=null;function v0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(ci=!0)}var Ze=null;function y0(){var t=Ze;return Ze=null,t}var It=0;function La(t,e,l,a,n){return It=0,g0(t.child,e,l,a,n)}function g0(t,e,l,a,n){for(var u=!1;t!==null;){if(t.tag===5){var i=t.stateNode;if(a!==null){var c=ao(i);a.push(c),c.view&&(u=!0)}else u||ao(i).view&&(u=!0);ci=!0,yd(i,It===0?e:e+"_"+It,l),It++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||g0(t.child,e,l,a,n)&&(u=!0));t=t.sibling}return u}function Ke(t,e){for(;t!==null;)t.tag===5?gd(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Ke(t.child,e)),t=t.sibling}function fi(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(fi(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(y(544));var l=e.name;e=nl(e.default,e.share),e!=="none"&&(La(t,l,e,null,!1)||Ke(t.child,!1))}t=t.sibling}}function Ef(t,e){if(t.tag===30){var l=t.stateNode,a=t.memoizedProps,n=al(a,l),u=nl(a.default,l.paired?a.share:a.enter);u!=="none"?La(t,n,u,null,!1)?(fi(t),l.paired||e||Fa(t,a.onEnter)):Ke(t.child,!1):fi(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling;else fi(t)}function bf(t){if(de!==null&&de.size!==0){var e=de;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var l=t.memoizedProps,a=l.name;if(a!=null&&a!=="auto"){var n=e.get(a);if(n!==void 0){var u=nl(l.default,l.share);if(u!=="none"&&(La(t,a,u,null,!1)?(u=t.stateNode,n.paired=u,u.paired=n,Fa(t,l.onShare)):Ke(t.child,!1)),e.delete(a),e.size===0)break}}}bf(t)}t=t.sibling}}}function Sf(t){if(t.tag===30){var e=t.memoizedProps,l=al(e,t.stateNode),a=de!==null?de.get(l):void 0,n=nl(e.default,a!==void 0?e.share:e.exit);n!=="none"&&(La(t,l,n,null,!1)?a!==void 0?(n=t.stateNode,a.paired=n,n.paired=a,de.delete(l),Fa(t,e.onShare)):Fa(t,e.onExit):Ke(t.child,!1)),de!==null&&bf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Sf(t),t=t.sibling;else de!==null&&bf(t)}function x0(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,l=al(e,t.stateNode);e=nl(e.default,e.update),t.flags&=-5,e!=="none"&&La(t,l,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&x0(t);t=t.sibling}}function Hf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Ke(t.child,!1))}Hf(t)}t=t.sibling}}function oi(t){if(t.tag===30)t.stateNode.paired=null,Ke(t.child,!1),Hf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)oi(t),t=t.sibling;else Hf(t)}function T0(t){for(t=t.child;t!==null;)t.tag===30?Ke(t.child,!1):(t.subtreeFlags&33554432)!==0&&T0(t),t=t.sibling}function Mf(t,e,l,a,n,u,i){for(var c=!1;e!==null;){if(e.tag===5){var f=e.stateNode;if(u!==null&&It<u.length){var h=u[It],g=ao(f);(h.view||g.view)&&(c=!0);var p;if(p=(t.flags&4)===0)if(g.clip)p=!0;else{p=h.rect;var s=g.rect;p=p.y!==s.y||p.x!==s.x||p.height!==s.height||p.width!==s.width}p&&(t.flags|=4),g.abs?g=!h.abs:(h=h.rect,g=g.rect,g=h.height!==g.height||h.width!==g.width),g&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&yd(f,It===0?l:l+"_"+It,n),c&&(t.flags&4)!==0||(Ze===null&&(Ze=[]),Ze.push(f,It===0?a:a+"_"+It,e.memoizedProps)),It++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i?t.flags|=e.flags&32:Mf(t,e.child,l,a,n,u,i)&&(c=!0));e=e.sibling}return c}function p0(t,e){for(t=t.child;t!==null;){if(t.tag===30){var l=t.memoizedProps,a=t.stateNode,n=al(l,a),u=nl(l.default,l.update),i;i=t.memoizedState,t.memoizedState=null,a=t;var c=t.child;It=0,n=Mf(a,c,n,n,u,i,!1),(t.flags&4)!==0&&n&&Fa(t,l.onUpdate)}else(t.subtreeFlags&33554432)!==0&&p0(t);t=t.sibling}}var wt=!1,nt=!1,We=!1,zf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,Ut=null,Je=!1,Vn=!1,ri=!1,Af=!1;function Vm(t,e,l){if(t=t.containerInfo,If=cn,t=Mr(t),dc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var u=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var c=0,f=-1,h=-1,g=0,p=0,s=t,v=null;e:for(;;){for(var S;s!==a||u!==0&&s.nodeType!==3||(f=c+u),s!==i||n!==0&&s.nodeType!==3||(h=c+n),s.nodeType===3&&(c+=s.nodeValue.length),(S=s.firstChild)!==null;)v=s,s=S;for(;;){if(s===t)break e;if(v===a&&++g===u&&(f=c),v===i&&++p===n&&(h=c),(S=s.nextSibling)!==null)break;s=v,v=s.parentNode}s=S}a=f===-1||h===-1?null:{start:f,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:t,selectionRange:a},cn=!1,l=(l&335544064)===l,Ut=e,e=l?9270:1024;Ut!==null;){if(t=Ut,l&&(a=t.deletions,a!==null))for(u=0;u<a.length;u++)l&&Sf(a[u]);if(t.alternate===null&&(t.flags&2)!==0)l&&v0(t),si(l);else{if(t.tag===22){if(a=t.alternate,t.memoizedState!==null){a!==null&&a.memoizedState===null&&l&&Sf(a),si(l);continue}else if(a!==null&&a.memoizedState!==null){l&&v0(t),si(l);continue}}a=t.child,(t.subtreeFlags&e)!==0&&a!==null?(a.return=t,Ut=a):(l&&x0(t),si(l))}}de=null}function si(t){for(;Ut!==null;){var e=Ut,l=t,a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){l=void 0,n=a.memoizedProps,a=a.memoizedState;var u=e.stateNode;try{var i=sa(e.type,n);l=u.getSnapshotBeforeUpdate(i,a),u.__reactInternalSnapshotBeforeUpdate=l}catch(c){it(e,e.return,c)}}break;case 3:if((n&1024)!==0){if(a=e.stateNode.containerInfo,l=a.nodeType,l===9)io(a);else if(l===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":io(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:l&&a!==null&&(l=al(a.memoizedProps,a.stateNode),n=e.memoizedProps,n=nl(n.default,n.update),n!=="none"&&La(a,l,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(y(163))}if(a=e.sibling,a!==null){a.return=e.return,Ut=a;break}Ut=e.return}}function b0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ke(t,l),a&4&&jn(5,l);break;case 1:if(ke(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){it(l,l.return,i)}else{var n=sa(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){it(l,l.return,i)}}a&64&&r0(l),a&512&&Qe(l,l.return);break;case 3:if(ke(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Pr(t,e)}catch(i){it(l,l.return,i)}}break;case 27:e===null&&a&4&&m0(l);case 26:case 5:ke(t,l),e===null&&a&4&&gf(l),a&512&&Qe(l,l.return);break;case 12:ke(t,l);break;case 31:ke(t,l),a&4&&z0(t,l);break;case 13:ke(t,l),a&4&&A0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ev.bind(null,l),Gv(t,l))));break;case 22:if(a=l.memoizedState!==null||wt,!a){var u=e!==null&&e.memoizedState!==null||nt;e=wt,n=nt,wt=a,(nt=u)&&!n?(a=2,(l.subtreeFlags&8772)!==0&&(a|=1),Ce(t,l,a)):ke(t,l),wt=e,nt=n}break;case 30:ke(t,l),a&512&&Qe(l,l.return);break;case 7:a&512&&Qe(l,l.return);default:ke(t,l)}}function Rf(t,e){for(t=t.child;t!==null;)S0(t,e),t=t.sibling}function S0(t,e){switch(t.tag){case 5:case 26:try{var l=t.stateNode;if(e){var a=l.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=t.stateNode,u=t.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null;n.style.display=i==null||typeof i=="boolean"?"":(""+i).trim()}}catch(f){it(t,t.return,f)}_f(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,P=!0}catch(f){it(t,t.return,f)}break;case 18:try{var c=t.stateNode;e?vd(c,!0):vd(t.stateNode,!1)}catch(f){it(t,t.return,f)}break;case 22:case 23:t.memoizedState===null&&Rf(t,e);break;default:Rf(t,e)}}function _f(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var l=t,a=e;switch(l.tag){case 4:S0(l,a);break t;case 22:l.memoizedState===null&&_f(l,a);break t;default:_f(l,a)}}t=t.sibling}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&yu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Pt=!1;function Oe(t,e,l){for(l=l.child;l!==null;)M0(t,e,l),l=l.sibling}function M0(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(dn,l)}catch{}switch(l.tag){case 26:nt||jt(l,e),Oe(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&!nt&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:nt||jt(l,e),Ln(l);var a=gt,n=Pt;ql(l.type)&&(gt=l.stateNode,Pt=!1),Oe(t,e,l),_d(l.stateNode,l.type,l.memoizedProps),gt=a,Pt=n;break;case 5:nt||jt(l,e),Ln(l);case 6:if(l.tag===6&&Ln(l),a=gt,n=Pt,gt=null,Oe(t,e,l),gt=a,Pt=n,gt!==null)if(Pt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(l.stateNode),P=!0}catch(u){it(l,e,u)}else try{gt.removeChild(l.stateNode),P=!0}catch(u){it(l,e,u)}break;case 18:gt!==null&&(Pt?(t=gt,md(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),fn(t)):md(gt,l.stateNode));break;case 4:a=gt,n=Pt,gt=l.stateNode.containerInfo,Pt=!0,Oe(t,e,l),gt=a,Pt=n;break;case 0:case 11:case 14:case 15:Dl(2,l,e),nt||Dl(4,l,e),Oe(t,e,l);break;case 1:nt||(jt(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&s0(l,e,a)),Oe(t,e,l);break;case 21:Oe(t,e,l);break;case 22:nt=(a=nt)||l.memoizedState!==null,Oe(t,e,l),nt=a;break;case 30:jt(l,e),Oe(t,e,l);break;case 7:nt||jt(l,e),Oe(t,e,l);break;default:Oe(t,e,l)}}function z0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fn(t)}catch(l){it(e,e.return,l)}}}function A0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fn(t)}catch(l){it(e,e.return,l)}}function Qm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new E0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new E0),e;default:throw Error(y(435,t.tag))}}function di(t,e){var l=Qm(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=lv.bind(null,t,a);a.then(n,n)}})}function Wt(t,e,l){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var u=a[n],i=t,c=e,f=c;t:for(;f!==null;){switch(f.tag){case 27:if(ql(f.type)){gt=f.stateNode,Pt=!1;break t}break;case 5:gt=f.stateNode,Pt=!1;break t;case 3:case 4:gt=f.stateNode.containerInfo,Pt=!0;break t}f=f.return}if(gt===null)throw Error(y(160));M0(i,c,u),gt=null,Pt=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)R0(e,t,l),e=e.sibling}var De=null;function R0(t,e,l){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=t.updateQueue,a=a!==null?a.events:null,a!==null))for(var u=0;u<a.length;u++){var i=a[u];i.ref.impl=i.nextImpl}Wt(e,t,l),Jt(t),n&4&&(Dl(3,t,t.return),jn(3,t),Dl(5,t,t.return));break;case 1:Wt(e,t,l),Jt(t),n&512&&(nt||a===null||jt(a,a.return)),n&64&&wt&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:if(u=De,Wt(e,t,l),Jt(t),n&512&&(nt||a===null||jt(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null)if(wt)t.stateNode=sd(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,l=t.memoizedProps,n=u.ownerDocument||u;e:switch(e){case"title":a=n.getElementsByTagName("title")[0],(!a||a[vn]||a[Bt]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(e),n.head.insertBefore(a,n.querySelector("head > title"))),Lt(a,e,l),a[Bt]=t,Dt(a),e=a;break t;case"link":if(u=Ud("link","href",n).get(e+(l.href||""))){for(i=0;i<u.length;i++)if(a=u[i],a.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&a.getAttribute("rel")===(l.rel==null?null:l.rel)&&a.getAttribute("title")===(l.title==null?null:l.title)&&a.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(i,1);break e}}a=n.createElement(e),Lt(a,e,l),n.head.appendChild(a);break;case"meta":if(u=Ud("meta","content",n).get(e+(l.content||""))){for(i=0;i<u.length;i++)if(a=u[i],a.getAttribute("content")===(l.content==null?null:""+l.content)&&a.getAttribute("name")===(l.name==null?null:l.name)&&a.getAttribute("property")===(l.property==null?null:l.property)&&a.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&a.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(i,1);break e}}a=n.createElement(e),Lt(a,e,l),n.head.appendChild(a);break;default:throw Error(y(468,e))}a[Bt]=t,Dt(a),e=a}t.stateNode=e}else wt||mo(u,t.type,t.stateNode);else t.stateNode=wd(u,l,t.memoizedProps);else n!==l?(n===null?(e=a.stateNode,e===null||nt||e.parentNode.removeChild(e)):n.count--,l===null?wt||mo(u,t.type,t.stateNode):wd(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps);break;case 27:Wt(e,t,l),Jt(t),n&512&&(nt||a===null||jt(a,a.return)),a!==null&&n&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(u=We,We=!1,Wt(e,t,l),We=u,Jt(t),n&512&&(nt||a===null||jt(a,a.return)),t.flags&32){e=t.stateNode;try{Ha(e,""),P=!0}catch(g){it(t,t.return,g)}}n&4&&t.stateNode!=null&&(e=t.memoizedProps,xf(t,e,a!==null?a.memoizedProps:e)),n&1024&&(zf=!0);break;case 6:if(Wt(e,t,l),Jt(t),n&4){if(t.stateNode===null)throw Error(y(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e,P=!0}catch(g){it(t,t.return,g)}}break;case 3:if(P=!1,Ai=null,u=De,De=In(e.containerInfo),Wt(e,t,l),De=u,Jt(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{fn(e.containerInfo)}catch(g){it(t,t.return,g)}zf&&(zf=!1,_0(t)),P=!1;break;case 4:n=We,We=wt,a=ko(),u=De,De=In(t.stateNode.containerInfo),Wt(e,t,l),Jt(t),De=u,P&&Vn&&(ri=!0),P=a,We=n;break;case 12:Wt(e,t,l),Jt(t);break;case 31:Wt(e,t,l),Jt(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,di(t,e)));break;case 13:Wt(e,t,l),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vi=ie()),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,di(t,e)));break;case 22:u=t.memoizedState!==null,i=a!==null&&a.memoizedState!==null;var c=wt,f=nt,h=We;wt=c||u,We=h||u,nt=f||i,Wt(e,t,l),nt=f,We=h,wt=c,Jt(t),n&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||a===null||i||wt||nt||(e=i||nt,l=wt,a=nt,wt=u||wt,nt=e,Cl(t,2),wt=l,nt=a),!u&&We||Rf(t,u)),n&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,di(t,l))));break;case 19:Wt(e,t,l),Jt(t),n&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,di(t,e)));break;case 30:n&512&&(nt||a===null||jt(a,a.return)),n=ko(),u=Vn,i=(l&335544064)===l,c=t.memoizedProps,Vn=i&&nl(c.default,c.update)!=="none",Wt(e,t,l),Jt(t),i&&a!==null&&P&&(t.flags|=4),Vn=u,P=n;break;case 21:break;case 7:n&512&&(nt||a===null||jt(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=t);default:Wt(e,t,l),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(h0(a)){l=a;break}a=a.return}a=null;for(var n=t.return;n!==null;){if(yf(n)){var u=n.stateNode;a===null?a=[u]:a.push(u)}if(vf(n))break;n=n.return}var i=a;if(l==null)throw Error(y(160));switch(l.tag){case 27:var c=l.stateNode,f=Tf(t);ii(t,f,c,i);break;case 5:var h=l.stateNode;l.flags&32&&(Ha(h,""),l.flags&=-33);var g=Tf(t);ii(t,g,h,i);break;case 3:case 4:var p=l.stateNode.containerInfo,s=Tf(t);pf(t,s,p,i);break;default:throw Error(y(161))}}catch(v){it(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_0(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,cn=!0,e.reset(),cn=!1),t=t.sibling}}function Va(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)N0(e,t),e=e.sibling;else p0(e)}function N0(t,e){var l=t.alternate;if(l===null)Ef(t,!1);else switch(t.tag){case 3:if(Af=Je=!1,y0(),Va(e,t),!Je&&!ri){if(t=Ze,t!==null)for(var a=0;a<t.length;a+=3){l=t[a];var n=t[a+1];gd(l,t[a+2]),l=l.ownerDocument.documentElement,l!==null&&l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Af=!0}Ze=null;break;case 5:Va(e,t);break;case 4:a=Je,Je=!1,Va(e,t),Je&&(ri=!0),Je=a;break;case 22:t.memoizedState===null&&(l.memoizedState!==null?Ef(t,!1):Va(e,t));break;case 30:a=Je,n=y0(),Je=!1,Va(e,t),Je&&(t.flags|=4);var u=t.memoizedProps,i=t.stateNode;e=al(u,i),i=al(l.memoizedProps,i);var c=nl(u.default,u.update);c==="none"?e=!1:(u=l.memoizedState,l.memoizedState=null,l=t.child,It=0,e=Mf(t,l,e,i,c,u,!0),It!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Fa(t,t.memoizedProps.onUpdate),Ze=n):n!==null&&(n.push.apply(n,Ze),Ze=n),Je=(t.flags&32)!==0?!0:a;break;default:Va(e,t)}}function ke(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)b0(t,e.alternate,e),e=e.sibling}function Cl(t,e){for(t=t.child;t!==null;){var l=t,a=e;switch(l.tag){case 0:case 11:case 14:case 15:Dl(4,l,l.return),Cl(l,a);break;case 1:jt(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&s0(l,l.return,n),Cl(l,a);break;case 27:(a&2)!==0&&_d(l.stateNode,l.type,l.memoizedProps);case 5:jt(l,l.return),l.tag!==5&&l.tag!==27||Ln(l),Cl(l,a);break;case 6:Ln(l);break;case 26:jt(l,l.return),n=l.stateNode,l.memoizedState!==null||n===null||nt||n.parentNode.removeChild(n),Cl(l,a);break;case 22:l.memoizedState===null&&Cl(l,a);break;case 30:jt(l,l.return),Cl(l,a);break;case 7:jt(l,l.return);default:Cl(l,a)}t=t.sibling}}function Ce(t,e,l){for(l=(e.subtreeFlags&8772)!==0?l:l&-2,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags,c=(l&1)!==0;switch(u.tag){case 0:case 11:case 15:Ce(n,u,l),jn(4,u);break;case 1:if(Ce(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){it(a,a.return,g)}if(a=u,n=a.updateQueue,n!==null){var f=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Ir(h[n],f)}catch(g){it(a,a.return,g)}}c&&i&64&&r0(u),Qe(u,u.return);break;case 27:(l&2)!==0&&m0(u);case 5:u.tag!==5&&u.tag!==27||d0(u),Ce(n,u,l),c&&a===null&&i&4&&gf(u),Qe(u,u.return);break;case 6:d0(u);break;case 26:f=u.stateNode,u.memoizedState!==null||f===null||wt||mo(In(f.ownerDocument),u.type,f),Ce(n,u,l),c&&a===null&&i&4&&gf(u),Qe(u,u.return);break;case 12:Ce(n,u,l);break;case 31:Ce(n,u,l),c&&i&4&&z0(n,u);break;case 13:Ce(n,u,l),c&&i&4&&A0(n,u);break;case 22:u.memoizedState===null&&Ce(n,u,l),Qe(u,u.return);break;case 30:Ce(n,u,l),Qe(u,u.return);break;case 7:Qe(u,u.return);default:Ce(n,u,l)}e=e.sibling}}function Nf(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Rn(l))}function Of(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Rn(t))}function ze(t,e,l,a){var n=(l&335544064)===l;if(e.subtreeFlags&(n?10262:10256))for(e=e.child;e!==null;)O0(t,e,l,a),e=e.sibling;else n&&T0(e)}function O0(t,e,l,a){var n=(l&335544064)===l;n&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&oi(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:ze(t,e,l,a),u&2048&&jn(9,e);break;case 1:ze(t,e,l,a);break;case 3:ze(t,e,l,a),n&&Af&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&Rn(u)));break;case 12:if(u&2048){ze(t,e,l,a),u=e.stateNode;try{var i=e.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(h){it(e,e.return,h)}}else ze(t,e,l,a);break;case 31:ze(t,e,l,a);break;case 13:ze(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?(n&&c!==null&&c.memoizedState===null&&oi(c),i._visibility&2?ze(t,e,l,a):Qn(t,e)):(n&&c!==null&&c.memoizedState!==null&&oi(e),i._visibility&2?ze(t,e,l,a):(i._visibility|=2,Qa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1))),u&2048&&Nf(c,e);break;case 24:ze(t,e,l,a),u&2048&&Of(e.alternate,e);break;case 30:n&&(u=e.alternate,u!==null&&(Ke(u.child,!0),Ke(e.child,!0))),ze(t,e,l,a);break;default:ze(t,e,l,a)}}function Qa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,i=e,c=l,f=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:Qa(u,i,c,f,n),jn(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?Qa(u,i,c,f,n):Qn(u,i):(g._visibility|=2,Qa(u,i,c,f,n)),n&&h&2048&&Nf(i.alternate,i);break;case 24:Qa(u,i,c,f,n),n&&h&2048&&Of(i.alternate,i);break;default:Qa(u,i,c,f,n)}e=e.sibling}}function Qn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Qn(l,a),n&2048&&Nf(a.alternate,a);break;case 24:Qn(l,a),n&2048&&Of(a.alternate,a);break;default:Qn(l,a)}e=e.sibling}}var da=8192;function ha(t,e,l){if(t.subtreeFlags&da)for(t=t.child;t!==null;)D0(t,e,l),t=t.sibling}function D0(t,e,l){switch(t.tag){case 26:ha(t,e,l),t.flags&da&&(t.memoizedState!==null?Fv(l,De,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&qd(l,t)));break;case 5:ha(t,e,l),t.flags&da&&(t=t.stateNode,(e&335544128)===e&&qd(l,t));break;case 3:case 4:var a=De;De=In(t.stateNode.containerInfo),ha(t,e,l),De=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=da,da=16777216,ha(t,e,l),da=a):ha(t,e,l));break;case 30:if((t.flags&da)!==0&&(a=t.memoizedProps.name,a!=null&&a!=="auto")){var n=t.stateNode;n.paired=null,de===null&&(de=new Map),de.set(a,n)}ha(t,e,l);break;default:ha(t,e,l)}}function C0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Zn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ut=a,U0(a,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(t),t=t.sibling}function w0(t){switch(t.tag){case 0:case 11:case 15:Zn(t),t.flags&2048&&Dl(9,t,t.return);break;case 3:Zn(t);break;case 12:Zn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,hi(t)):Zn(t);break;default:Zn(t)}}function hi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ut=a,U0(a,t)}C0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Dl(8,e,e.return),hi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,hi(e));break;default:hi(e)}t=t.sibling}}function U0(t,e){for(;Ut!==null;){var l=Ut;switch(l.tag){case 0:case 11:case 15:Dl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Rn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ut=a;else t:for(l=t;Ut!==null;){a=Ut;var n=a.sibling,u=a.return;if(H0(a),a===l){Ut=null;break t}if(n!==null){n.return=u,Ut=n;break t}Ut=u}}}var Zm={getCacheForType:function(t){var e=Yt(zt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Yt(zt).controller.signal}},Km=typeof WeakMap=="function"?WeakMap:Map,lt=0,rt=null,K=null,J=0,ut=0,he=null,wl=!1,Za=!1,Df=!1,hl=0,Et=0,Ul=0,ma=0,mi=0,me=0,Ka=0,Kn=null,te=null,Cf=!1,vi=0,G0=0,yi=1/0,gi=null,Gl=null,xt=0,we=null,va=null,Fe=0,wf=0,Uf=null,B0=null,Wa=null,Ja=null,ka=null,Wn=0,xi=null;function ve(){return(lt&2)!==0&&J!==0?J&-J:A.T!==null?Zf():Xo()}function Y0(){if(me===0)if((J&536870912)===0||V){var t=du;du<<=1,(du&3932160)===0&&(du=262144),me=t}else me=536870912;return t=qt.current,t!==null&&(t.flags|=32),me}function Fa(t,e){if(e!=null){var l=t.stateNode,a=l.ref;a===null&&(a=l.ref=xd(al(t.memoizedProps,l))),Ja===null&&(Ja=[]),Ja.push(e.bind(null,a))}}function ee(t,e,l){(t===rt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&($a(t,0),Bl(t,J,me,!1)),mn(t,l),((lt&2)===0||t!==rt)&&(t===rt&&((lt&2)===0&&(ma|=l),Et===4&&Bl(t,J,me,!1)),$e(t))}function q0(t,e,l){if((lt&6)!==0)throw Error(y(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||hn(t,e),n=a?km(t,e):Bf(t,e,!0),u=a;do{if(n===0){Za&&!a&&Bl(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!Wm(l)){n=Bf(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;n=Kn;var f=c.current.memoizedState.isDehydrated;if(f&&($a(c,i).flags|=256),i=Bf(c,i,!1),i!==2&&i!==6){if(Df&&!f){c.errorRecoveryDisabledLanes|=u,ma|=u,n=4;break t}u=te,te=n,u!==null&&(te===null?te=u:te.push.apply(te,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){$a(t,0),Bl(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Bl(a,e,me,!wl);break t;case 2:te=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(n=vi+300-ie(),10<n)){if(Bl(a,e,me,!wl),mu(a,0,!0)!==0)break t;Fe=e,a.timeoutHandle=lo(X0.bind(null,a,l,te,gi,Cf,e,me,ma,Ka,wl,u,"Throttled",-0,0),n);break t}X0(a,l,te,gi,Cf,e,me,ma,Ka,wl,u,null,-0,0)}}break}while(!0);$e(t)}function X0(t,e,l,a,n,u,i,c,f,h,g,p,s,v){t.timeoutHandle=-1;var S=e.subtreeFlags,z=(u&335544064)===u;if(p=null,(z||S&8192||(S&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:je},de=null,D0(e,u,p),z&&(S=p,z=t.containerInfo,z=(z.nodeType===9?z:z.ownerDocument).__reactViewTransition,z!=null&&(S.count++,S.waitingForViewTransition=!0,S=eu.bind(S),z.finished.then(S,S))),S=(u&62914560)===u?vi-ie():(u&4194048)===u?G0-ie():0,S=$v(p,S),S!==null)){Fe=u,t.cancelPendingCommit=S(J0.bind(null,t,e,u,l,a,n,i,c,f,h,g,p,null,s,v)),Bl(t,u,i,!h);return}J0(t,e,u,l,a,n,i,c,f,h,g,p)}function Wm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!re(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bl(t,e,l,a){e=Uo(t,e),e&=~mi,e&=~ma,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-fe(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Bo(t,l,e)}function Ti(){return(lt&6)===0?(Jn(0),!1):!0}function Gf(){if(K!==null){if(ut===0)var t=K.return;else t=K,cl=la=null,Vc(t),Ba=null,On=0,t=K;for(;t!==null;)o0(t.alternate,t),t=t.return;K=null}}function $a(t,e){var l=t.timeoutHandle;return l!==-1&&(t.timeoutHandle=-1,gv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Fe=0,Gf(),rt=t,K=l=ul(t.current,null),J=e,ut=0,he=null,wl=!1,Za=hn(t,e),Df=!1,Ka=me=mi=ma=Ul=Et=0,te=Kn=null,Cf=!1,hl=Uo(t,e),Au(),l}function j0(t,e){j=null,A.H=Iu,e===Ga||e===Yu?(e=Jr(),ut=3):e===Nc?(e=Jr(),ut=4):ut=e===nf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,he=e,K===null&&(Et=1,Pu(t,be(e,t.current)))}function L0(){var t=qt.current;return t===null?!0:(J&4194048)===J?Qt===null:(J&62914560)===J||(J&536870912)!==0?t===Qt:!1}function V0(){var t=A.H;return A.H=Iu,t===null?Iu:t}function Q0(){var t=A.A;return A.A=Zm,t}function pi(){Et=4,wl||(J&4194048)!==J&&qt.current!==null||(Za=!0),(Ul&134217727)===0&&(ma&134217727)===0||rt===null||Bl(rt,J,me,!1)}function Bf(t,e,l){var a=lt;lt|=2;var n=V0(),u=Q0();(rt!==t||J!==e)&&(gi=null,$a(t,e)),e=!1;var i=Et;t:do try{if(ut!==0&&K!==null){var c=K,f=he;switch(ut){case 8:Gf(),i=6;break t;case 3:case 2:case 9:case 6:qt.current===null&&(e=!0);var h=ut;if(ut=0,he=null,Ia(t,c,f,h),l&&Za){i=0;break t}break;default:h=ut,ut=0,he=null,Ia(t,c,f,h)}}Jm(),i=Et;break}catch(g){j0(t,g)}while(!0);return e&&t.shellSuspendCounter++,cl=la=null,lt=a,A.H=n,A.A=u,K===null&&(rt=null,J=0,Au()),i}function Jm(){for(;K!==null;)Z0(K)}function km(t,e){var l=lt;lt|=2;var a=V0(),n=Q0();rt!==t||J!==e?(gi=null,yi=ie()+500,$a(t,e)):Za=hn(t,e);t:do try{if(ut!==0&&K!==null){e=K;var u=he;e:switch(ut){case 1:ut=0,he=null,Ia(t,e,u,1);break;case 2:case 9:if(Kr(u)){ut=0,he=null,K0(e);break}e=function(){ut!==2&&ut!==9||rt!==t||(ut=7),$e(t)},u.then(e,e);break t;case 3:ut=7;break t;case 4:ut=5;break t;case 7:Kr(u)?(ut=0,he=null,K0(e)):(ut=0,he=null,Ia(t,e,u,7));break;case 5:var i=null;switch(K.tag){case 26:i=K.memoizedState;case 5:case 27:var c=K;if(i?Bd(i):c.stateNode.complete){ut=0,he=null;var f=c.sibling;if(f!==null)K=f;else{var h=c.return;h!==null?(K=h,Ei(h)):K=null}break e}}ut=0,he=null,Ia(t,e,u,5);break;case 6:ut=0,he=null,Ia(t,e,u,6);break;case 8:Gf(),Et=6;break t;default:throw Error(y(462))}}Fm();break}catch(g){j0(t,g)}while(!0);return cl=la=null,A.H=a,A.A=n,lt=l,K!==null?0:(rt=null,J=0,Au(),Et)}function Fm(){for(;K!==null&&!hh();)Z0(K)}function Z0(t){var e=c0(t.alternate,t,hl);t.memoizedProps=t.pendingProps,e===null?Ei(t):K=e}function K0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=t0(l,e,e.pendingProps,e.type,void 0,J);break;case 11:e=t0(l,e,e.pendingProps,e.type.render,e.ref,J);break;case 5:Vc(e);var a=e;a===Ct&&(V?(Cu(a),a.tag===5&&a.stateNode!=null&&(ht=a.stateNode)):(Cu(a),V=!0));default:o0(l,e),e=K=Ur(e,hl),e=c0(l,e,hl)}t.memoizedProps=t.pendingProps,e===null?Ei(t):K=e}function Ia(t,e,l,a){cl=la=null,Vc(e),Ba=null,On=0;var n=e.return;try{if(Bm(t,n,e,l,J)){Et=1,Pu(t,be(l,t.current)),K=null;return}}catch(u){if(n!==null)throw K=n,u;Et=1,Pu(t,be(l,t.current)),K=null;return}e.flags&32768?(V||a===1?t=!0:Za||(J&536870912)!==0?t=!1:(wl=t=!0,(a===2||a===9||a===3||a===6)&&(a=qt.current,a!==null&&a.tag===13&&(a.flags|=16384))),W0(e,t)):Ei(e)}function Ei(t){var e=t;do{if((e.flags&32768)!==0){W0(e,wl);return}t=e.return;var l=jm(e.alternate,e,hl);if(l!==null){K=l;return}if(e=e.sibling,e!==null){K=e;return}K=e=t}while(e!==null);Et===0&&(Et=5)}function W0(t,e){do{var l=Lm(t.alternate,t);if(l!==null){l.flags&=32767,K=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){K=t;return}K=t=l}while(t!==null);Et=6,K=null}function J0(t,e,l,a,n,u,i,c,f,h,g,p){t.cancelPendingCommit=null;do bi();while(xt!==0);if((lt&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));t===rt&&(K=rt=null,J=0),va=e,we=t,Fe=l,Uf=n,B0=a,$m(t,e,l,i,c,f,p)}}function $m(t,e,l,a,n,u,i){var c=e.lanes|e.childLanes;if(wf=c,c|=gc,Sh(t,l,c,a,n,u),Ja=null,(l&335544064)===l?(ka=Mm(t),a=10262):(ka=null,a=10256),(e.subtreeFlags&a)!==0||(e.flags&a)!==0?(t.callbackNode=null,t.callbackPriority=0,av(ru,function(){return jf(),null})):(t.callbackNode=null,t.callbackPriority=0),ci=!1,a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,n=Y.p,Y.p=2,u=lt,lt|=4;try{Vm(t,e,l)}finally{lt=u,Y.p=n,A.T=a}}xt=1,ci?Wa=Sv(i,t.containerInfo,ka,Yf,qf,Pm,Xf,jf,Im):(Yf(),qf(),Xf())}function Im(t){if(xt!==0){var e=we.onRecoverableError;e(t,{componentStack:null})}}function Pm(){xt===3&&(xt=0,N0(va,we),xt=4)}function Yf(){if(xt===1){xt=0;var t=we,e=va,l=Fe,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=Y.p;Y.p=2;var u=lt;lt|=4;try{Vn=ri=!1,R0(e,t,l),l=Pf;var i=Mr(t.containerInfo),c=l.focusedElem,f=l.selectionRange;if(i!==c&&c&&c.ownerDocument&&Hr(c.ownerDocument.documentElement,c)){if(f!==null&&dc(c)){var h=f.start,g=f.end;if(g===void 0&&(g=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(g,c.value.length);else{var p=c.ownerDocument||document,s=p&&p.defaultView||window;if(s.getSelection){var v=s.getSelection(),S=c.textContent.length,z=Math.min(f.start,S),L=f.end===void 0?z:Math.min(f.end,S);!v.extend&&z>L&&(i=L,L=z,z=i);var d=Sr(c,z),o=Sr(c,L);if(d&&o&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var m=p.createRange();m.setStart(d.node,d.offset),v.removeAllRanges(),z>L?(v.addRange(m),v.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),v.addRange(m))}}}}for(p=[],v=c;v=v.parentNode;)v.nodeType===1&&p.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<p.length;c++){var T=p[c];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}cn=!!If,Pf=If=null}finally{lt=u,Y.p=n,A.T=a}}t.current=e,xt=2}}function qf(){if(xt===2){xt=0;var t=we,e=va,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=A.T,A.T=null;var a=Y.p;Y.p=2;var n=lt;lt|=4;try{b0(t,e.alternate,e)}finally{lt=n,Y.p=a,A.T=l}}xt=3}}function Xf(){if(xt===4||xt===3){xt=0;var t=Wa;Wa=null,mh();var e=we,l=va,a=Fe,n=B0,u=(a&335544064)===a?10262:10256;if((l.subtreeFlags&u)!==0||(l.flags&u)!==0?xt=5:(xt=0,va=we=null,k0(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(Gl=null),Ji(a),l=l.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(dn,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=A.T,u=Y.p,Y.p=2,A.T=null;try{for(var i=e.onRecoverableError,c=0;c<n.length;c++){var f=n[c];i(f.value,{componentStack:f.stack})}}finally{A.T=l,Y.p=u}}if(n=Ja,i=ka,ka=null,n!==null&&(Ja=null,i===null&&(i=[]),t!==null))for(f=0;f<n.length;f++)l=(0,n[f])(i),l!==void 0&&t.finished.finally(l);(Fe&3)!==0&&bi(),$e(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===xi?Wn++:(Wn=0,xi=e):(Wn=0,xi=null),Jn(0)}}function k0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Rn(e)))}function bi(){return Wa!==null&&(Wa.skipTransition(),Wa=null),Yf(),qf(),Xf(),jf()}function jf(){if(xt!==5)return!1;var t=we,e=wf;wf=0;var l=Ji(Fe),a=A.T,n=Y.p;try{Y.p=32>l?32:l,A.T=null,l=Uf,Uf=null;var u=we,i=Fe;if(xt=0,va=we=null,Fe=0,(lt&6)!==0)throw Error(y(331));var c=lt;if(lt|=4,w0(u.current),O0(u,u.current,i,l),lt=c,Jn(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(dn,u)}catch{}return!0}finally{Y.p=n,A.T=a,k0(t,e)}}function F0(t,e,l){e=be(l,e),e=af(t.stateNode,e,2),t=Rl(t,e,2),t!==null&&(mn(t,2),$e(t))}function it(t,e,l){if(t.tag===3)F0(t,t,l);else for(;e!==null;){if(e.tag===3){F0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Gl===null||!Gl.has(a))){t=be(l,t),l=Ks(2),a=Rl(e,l,2),a!==null&&(Ws(l,a,e,t),mn(a,2),$e(a));break}}e=e.return}}function Lf(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Km;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Df=!0,n.add(l),t=tv.bind(null,t,e,l),e.then(t,t))}function tv(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,rt===t&&(J&l)===l&&((Et===4||Et===3&&(J&62914560)===J&&300>ie()-vi)&&(lt&2)===0?$a(t,0):mi|=l,Ka===J&&(Ka=0)),$e(t)}function $0(t,e){e===0&&(e=Go()),t=Pl(t,e),t!==null&&(mn(t,e),$e(t))}function ev(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),$0(t,l)}function lv(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(e),$0(t,l)}function av(t,e){return Qi(t,e)}var Pa=null,tn=null,Vf=!1,Si=!1,Qf=!1,Yl=0;function $e(t){t!==tn&&t.next===null&&(tn===null?Pa=tn=t:tn=tn.next=t),Si=!0,Vf||(Vf=!0,uv())}function Jn(t,e){if(!Qf&&Si){Qf=!0;do for(var l=!1,a=Pa;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-fe(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,ed(a,u))}else u=J,u=mu(a,a===rt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||hn(a,u)||(l=!0,ed(a,u));a=a.next}while(l);Qf=!1}}function nv(){I0()}function I0(){Si=Vf=!1;var t=0;Yl!==0&&yv()&&(t=Yl);for(var e=ie(),l=null,a=Pa;a!==null;){var n=a.next,u=P0(a,e);u===0?(a.next=null,l===null?Pa=n:l.next=n,n===null&&(tn=l)):(l=a,(t!==0||(u&3)!==0)&&(Si=!0)),a=n}xt!==0&&xt!==5||Jn(t),Yl!==0&&(Yl=0)}function P0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-fe(u),c=1<<i,f=n[i];f===-1?((c&l)===0||(c&a)!==0)&&(n[i]=bh(c,e)):f<=e&&(t.expiredLanes|=c),u&=~c}if(e=rt,l=J,l=mu(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Zi(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||hn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Zi(a),Ji(l)){case 2:case 8:l=Co;break;case 32:l=ru;break;case 268435456:l=wo;break;default:l=ru}return a=td.bind(null,t),l=Qi(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Zi(a),t.callbackPriority=2,t.callbackNode=null,2}function td(t,e){if(xt!==0&&xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(bi()&&t.callbackNode!==l)return null;var a=J;return a=mu(t,t===rt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(q0(t,a,e),P0(t,ie()),t.callbackNode!=null&&t.callbackNode===l?td.bind(null,t):null)}function ed(t,e){if(bi())return null;q0(t,e,!0)}function uv(){xv(function(){(lt&6)!==0?Qi(Do,nv):I0()})}function Zf(){if(Yl===0){var t=ua;t===0&&(t=su,su<<=1,(su&261888)===0&&(su=256)),Yl=t}return Yl}function ld(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Tu(t)}function iv(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=ld((n[Ft]||null).action),i=a.submitter;i&&(e=(e=i[Ft]||null)?ld(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Su("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Yl!==0){var f=new FormData(n,i);Ic(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=new FormData(n,i),Ic(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Kf=0;Kf<yc.length;Kf++){var Wf=yc[Kf],cv=Wf.toLowerCase(),fv=Wf[0].toUpperCase()+Wf.slice(1);Ne(cv,"on"+fv)}Ne(Rr,"onAnimationEnd"),Ne(_r,"onAnimationIteration"),Ne(Nr,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(gm,"onTransitionRun"),Ne(xm,"onTransitionStart"),Ne(Tm,"onTransitionCancel"),Ne(Or,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Fl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kn));function ad(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,h=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(g){zu(g)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,h=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(g){zu(g)}n.currentTarget=null,u=f}}}}function W(t,e){var l=e[Lo];l===void 0&&(l=e[Lo]=new Set);var a=t+"__bubble";l.has(a)||(nd(e,t,2,!1),l.add(a))}function Jf(t,e,l){var a=0;e&&(a|=4),nd(l,t,a,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Hi]){t[Hi]=!0,Zo.forEach(function(l){l!=="selectionchange"&&(ov.has(l)||Jf(l,!1,t),Jf(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,Jf("selectionchange",!1,e))}}function nd(t,e,l,a){switch(Wd(e)){case 2:var n=ey;break;case 8:n=ly;break;default:n=yo}l=n.bind(null,e,l,t),n=void 0,!lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Ff(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=kl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue t}c=c.parentNode}}a=a.return}nr(function(){var h=u,g=tc(l),p=[];t:{var s=Dr.get(t);if(s!==void 0){var v=Su,S=t;switch(t){case"keypress":if(Eu(l)===0)break t;case"keydown":case"keyup":v=Wh;break;case"focusin":S="focus",v=ic;break;case"focusout":S="blur",v=ic;break;case"beforeblur":case"afterblur":v=ic;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ih;break;case Rr:case _r:case Nr:v=Yh;break;case Or:v=tm;break;case"scroll":case"scrollend":v=Ch;break;case"wheel":v=lm;break;case"copy":case"cut":case"paste":v=Xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=or;break;case"submit":v=Fh;break;case"toggle":case"beforetoggle":v=nm}var z=(e&4)!==0,L=!z&&(t==="scroll"||t==="scrollend"),d=z?s!==null?s+"Capture":null:s;z=[];for(var o=h,m;o!==null;){var T=o;if(m=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||m===null||d===null||(T=gn(o,d),T!=null&&z.push(Fn(o,T,m))),L)break;o=o.return}0<z.length&&(s=new v(s,S,null,l,g),p.push({event:s,listeners:z}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",s=t==="mouseout"||t==="pointerout",v&&l!==Pi&&(S=l.relatedTarget||l.fromElement)&&(kl(S)||S[Ta]))break t;(s||v)&&(S=g.window===g?g:(v=g.ownerDocument)?v.defaultView||v.parentWindow:window,s?(v=l.relatedTarget||l.toElement,s=h,v=v?kl(v):null,v!==null&&(L=Q(v),z=v.tag,v!==L||z!==5&&z!==27&&z!==6)&&(v=null)):(s=null,v=h),s!==v&&(z=cr,T="onMouseLeave",d="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(z=or,T="onPointerLeave",d="onPointerEnter",o="pointer"),L=s==null?S:yn(s),m=v==null?S:yn(v),S=new z(T,o+"leave",s,l,g),S.target=L,S.relatedTarget=m,T=null,kl(g)===h&&(z=new z(d,o+"enter",v,l,g),z.target=m,z.relatedTarget=L,T=z),L=T,z=s&&v?ne(s,v,rv):null,s!==null&&ud(p,S,s,z,!1),v!==null&&L!==null&&ud(p,L,v,z,!0)))}t:{if(s=h?yn(h):window,v=s.nodeName&&s.nodeName.toLowerCase(),v==="select"||v==="input"&&s.type==="file")var M=gr;else if(vr(s))if(xr)M=mm;else{M=dm;var k=sm}else v=s.nodeName,!v||v.toLowerCase()!=="input"||s.type!=="checkbox"&&s.type!=="radio"?h&&Ii(h.elementType)&&(M=gr):M=hm;if(M&&(M=M(t,h))){yr(p,M,l,g);break t}k&&k(t,s,h)}switch(k=h?yn(h):window,t){case"focusin":(vr(k)||k.contentEditable==="true")&&(Ra=k,hc=h,Mn=null);break;case"focusout":Mn=hc=Ra=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,zr(p,l,g);break;case"selectionchange":if(ym)break;case"keydown":case"keyup":zr(p,l,g)}var R;if(fc)t:{switch(t){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else Aa?hr(t,l)&&(C="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(C="onCompositionStart");C&&(rr&&l.locale!=="ko"&&(Aa||C!=="onCompositionStart"?C==="onCompositionEnd"&&Aa&&(R=ur()):(Tl=g,ac="value"in Tl?Tl.value:Tl.textContent,Aa=!0)),k=Mi(h,C),0<k.length&&(C=new fr(C,t,null,l,g),p.push({event:C,listeners:k}),R?C.data=R:(R=mr(l),R!==null&&(C.data=R)))),(R=im?cm(t,l):fm(t,l))&&(C=Mi(h,"onBeforeInput"),0<C.length&&(k=new fr("onBeforeInput","beforeinput",null,l,g),p.push({event:k,listeners:C}),k.data=R)),iv(p,t,h,l,g)}ad(p,e)})}function Fn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Mi(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=gn(t,l),n!=null&&a.unshift(Fn(t,n,u)),n=gn(t,e),n!=null&&a.push(Fn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function rv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ud(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var c=l,f=c.alternate,h=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||h===null||(f=h,n?(h=gn(l,u),h!=null&&i.unshift(Fn(l,h,f))):n||(h=gn(l,u),h!=null&&i.push(Fn(l,h,f)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var sv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function id(t){return(typeof t=="string"?t:""+t).replace(sv,`
`).replace(dv,"")}function cd(t,e){return e=id(e),id(t)===e}function ct(t,e,l,a,n,u){switch(l){case"children":if(typeof a=="string")e==="body"||e==="textarea"&&a===""||Ha(t,a);else if(typeof a=="number"||typeof a=="bigint")e!=="body"&&Ha(t,""+a);else return;break;case"className":xu(t,"class",a);break;case"tabIndex":xu(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":xu(t,l,a);break;case"style":lr(t,a,u);return;case"data":if(e!=="object"){xu(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Tu(a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&ct(t,e,"name",n.name,n,null),ct(t,e,"formEncType",n.formEncType,n,null),ct(t,e,"formMethod",n.formMethod,n,null),ct(t,e,"formTarget",n.formTarget,n,null)):(ct(t,e,"encType",n.encType,n,null),ct(t,e,"method",n.method,n,null),ct(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Tu(a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=je);return;case"onScroll":a!=null&&W("scroll",t);return;case"onScrollEnd":a!=null&&W("scrollend",t);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));(u!=null?u.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Tu(a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":W("beforetoggle",t),W("toggle",t),gu(t,"popover",a);break;case"xlinkActuate":el(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":el(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":el(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":el(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":el(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":el(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":el(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":el(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":el(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":gu(t,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")l=Oh.get(l)||l,gu(t,l,a);else return}P=!0}function $f(t,e,l,a,n,u){switch(l){case"style":lr(t,a,u);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));(u!=null?u.__html:void 0)!==l&&(t.innerHTML=l)}}break;case"children":if(typeof a=="string")Ha(t,a);else if(typeof a=="number"||typeof a=="bigint")Ha(t,""+a);else return;break;case"onScroll":a!=null&&W("scroll",t);return;case"onScrollEnd":a!=null&&W("scrollend",t);return;case"onClick":a!=null&&(t.onclick=je);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ko.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),u=l.slice(2,n?l.length-7:void 0),e=t[Ft]||null,e=e!=null?e[l]:null,typeof e=="function"&&t.removeEventListener(u,e,n),typeof a=="function")){typeof e!="function"&&e!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(u,a,n);break t}P=!0,l in t?t[l]=a:a===!0?t.setAttribute(l,""):gu(t,l,a)}return}P=!0}function Lt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:ct(t,e,u,i,l,null)}}n&&ct(t,e,"srcSet",l.srcSet,l,null),a&&ct(t,e,"src",l.src,l,null);return;case"input":W("invalid",t);var c=u=i=n=null,f=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var g=l[a];if(g!=null)switch(a){case"name":n=g;break;case"type":i=g;break;case"checked":f=g;break;case"defaultChecked":h=g;break;case"value":u=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,e));break;default:ct(t,e,a,g,l,null)}}Io(t,u,c,f,h,i,n,!1);return;case"select":W("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ct(t,e,n,c,l,null)}e=u,l=i,t.multiple=!!a,e!=null?Sa(t,!!a,e,!1):l!=null&&Sa(t,!!a,l,!0);return;case"textarea":W("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:ct(t,e,i,c,l,null)}tr(t,a,n,u);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ct(t,e,f,a,l,null)}return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(a=0;a<kn.length;a++)W(kn[a],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:ct(t,e,h,a,l,null)}return;default:if(Ii(e)){for(g in l)l.hasOwnProperty(g)&&(a=l[g],a!==void 0&&$f(t,e,g,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ct(t,e,c,a,l,null))}var hv={};function mv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,h=null,g=null;for(v in l){var p=l[v];if(l.hasOwnProperty(v)&&p!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=p;default:a.hasOwnProperty(v)||ct(t,e,v,null,a,p)}}for(var s in a){var v=a[s];if(p=l[s],a.hasOwnProperty(s)&&(v!=null||p!=null))switch(s){case"type":v!==p&&(P=!0),u=v;break;case"name":v!==p&&(P=!0),n=v;break;case"checked":v!==p&&(P=!0),h=v;break;case"defaultChecked":v!==p&&(P=!0),g=v;break;case"value":v!==p&&(P=!0),i=v;break;case"defaultValue":v!==p&&(P=!0),c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(y(137,e));break;default:v!==p&&ct(t,e,s,v,a,p)}}Fi(t,i,c,f,h,g,u,n);return;case"select":v=i=c=s=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":v=f;default:a.hasOwnProperty(u)||ct(t,e,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":u!==f&&(P=!0),s=u;break;case"defaultValue":u!==f&&(P=!0),c=u;break;case"multiple":u!==f&&(P=!0),i=u;default:u!==f&&ct(t,e,n,u,a,f)}e=c,l=i,a=v,s!=null?Sa(t,!!l,s,!1):!!a!=!!l&&(e!=null?Sa(t,!!l,e,!0):Sa(t,!!l,l?[]:"",!1));return;case"textarea":v=s=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ct(t,e,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":n!==u&&(P=!0),s=n;break;case"defaultValue":n!==u&&(P=!0),v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==u&&ct(t,e,i,n,a,u)}Po(t,s,v);return;case"option":for(var S in l)if(s=l[S],l.hasOwnProperty(S)&&s!=null&&!a.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:ct(t,e,S,null,a,s)}for(f in a)if(s=a[f],v=l[f],a.hasOwnProperty(f)&&s!==v&&(s!=null||v!=null))switch(f){case"selected":s!==v&&(P=!0),t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ct(t,e,f,s,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in l)s=l[z],l.hasOwnProperty(z)&&s!=null&&!a.hasOwnProperty(z)&&ct(t,e,z,null,a,s);for(h in a)if(s=a[h],v=l[h],a.hasOwnProperty(h)&&s!==v&&(s!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(137,e));break;default:ct(t,e,h,s,a,v)}return;default:if(Ii(e)){for(var L in l)s=l[L],l.hasOwnProperty(L)&&s!==void 0&&!a.hasOwnProperty(L)&&$f(t,e,L,void 0,a,s);for(g in a)s=a[g],v=l[g],!a.hasOwnProperty(g)||s===v||s===void 0&&v===void 0||$f(t,e,g,s,a,v);return}}for(var d in l)s=l[d],l.hasOwnProperty(d)&&s!=null&&!a.hasOwnProperty(d)&&ct(t,e,d,null,a,s);for(p in a)s=a[p],v=l[p],!a.hasOwnProperty(p)||s===v||s==null&&v==null||ct(t,e,p,s,a,v)}function fd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&fd(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],h=f.startTime;if(h>c)break;var g=f.transferSize,p=f.initiatorType;g&&fd(p)&&(f=f.responseEnd,i+=g*(f<c?1:(c-h)/(f-h)))}if(--a,e+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var If=null,Pf=null;function $n(t){return t.nodeType===9?t:t.ownerDocument}function od(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function sd(t,e,l,a){return l=$n(l).createElement(t),l[Bt]=a,l[Ft]=e,Lt(l,t,e),Dt(l),l}function to(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eo=null;function yv(){var t=window.event;return t&&t.type==="popstate"?t===eo?!1:(eo=t,!0):(eo=null,!1)}var lo=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,hd=typeof requestAnimationFrame=="function"?requestAnimationFrame:lo,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(Tv)}:lo;function Tv(t){setTimeout(function(){throw t})}function ql(t){return t==="head"}function md(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),fn(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ro(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ro(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[vn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&ro(t.ownerDocument.body);l=n}while(l);fn(e)}function vd(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function yd(t,e,l){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,l!=null&&(t.style.viewTransitionClass=l),l=getComputedStyle(t),l.display==="inline"){if(e=t.getClientRects(),e.length===1)var a=1;else for(var n=a=0;n<e.length;n++){var u=e[n];0<u.width&&0<u.height&&a++}a===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+l.paddingTop,t.marginBottom="-"+l.paddingBottom)}}function gd(t,e){t=t.style,e=e.style;var l=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=l==null||typeof l=="boolean"?"":(""+l).trim(),l=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=l==null||typeof l=="boolean"?"":(""+l).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(l=e.display,t.display=l==null||typeof l=="boolean"?"":l,l=e.margin,l!=null?t.margin=l:(l=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=l==null||typeof l=="boolean"?"":l,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function pv(t,e,l){return l=l.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=l.innerHeight&&t.left<=l.innerWidth}}function ao(t){var e=t.getBoundingClientRect(),l=getComputedStyle(t);return pv(e,l,t)}function Ev(t){return t.documentElement.clientHeight}function bv(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Sv(t,e,l,a,n,u,i,c,f){var h=e.nodeType===9?e:e.ownerDocument;try{var g=h.startViewTransition({update:function(){var s=h.defaultView,v=s.navigation&&s.navigation.transition,S=h.fonts.status;a();var z=[];if(S==="loaded"&&(Ev(h),h.fonts.status==="loading"&&z.push(h.fonts.ready)),S=z.length,t!==null)for(var L=t.suspenseyImages,d=0,o=0;o<L.length;o++){var m=L[o];if(!m.complete){var T=m.getBoundingClientRect();if(0<T.bottom&&0<T.right&&T.top<s.innerHeight&&T.left<s.innerWidth){if(d+=Yd(m),d>Ri){z.length=S;break}m=new Promise(bv.bind(m)),z.push(m)}}}if(0<z.length)return s=Promise.race([Promise.all(z),new Promise(function(M){return setTimeout(M,500)})]).then(n,n),(v?Promise.allSettled([v.finished,s]):s).then(u,u);if(n(),v)return v.finished.then(u,u);u()},types:l});h.__reactViewTransition=g;var p=[];return g.ready.then(function(){for(var s=h.documentElement.getAnimations({subtree:!0}),v=0;v<s.length;v++){var S=s[v],z=S.effect,L=z.pseudoElement;if(L!=null&&L.startsWith("::view-transition")){p.push(S),S=z.getKeyframes();for(var d=L=void 0,o=!0,m=0;m<S.length;m++){var T=S[m],M=T.width;if(L===void 0)L=M;else if(L!==M){o=!1;break}if(M=T.height,d===void 0)d=M;else if(d!==M){o=!1;break}delete T.width,delete T.height,T.transform==="none"&&delete T.transform}o&&L!==void 0&&d!==void 0&&(z.setKeyframes(S),o=getComputedStyle(z.target,z.pseudoElement),o.width!==L||o.height!==d)&&(o=S[0],o.width=L,o.height=d,o=S[S.length-1],o.width=L,o.height=d,z.setKeyframes(S))}}i()},function(s){h.__reactViewTransition===g&&(h.__reactViewTransition=null);try{if(typeof s=="object"&&s!==null)switch(s.name){case"InvalidStateError":(s.message==="View transition was skipped because document visibility state is hidden."||s.message==="Skipping view transition because document visibility state has become hidden."||s.message==="Skipping view transition because viewport size changed."||s.message==="Transition was aborted because of invalid state")&&(s=null)}s!==null&&f(s)}finally{a(),n(),i()}}),g.finished.finally(function(){for(var s=0;s<p.length;s++)p[s].cancel();h.__reactViewTransition===g&&(h.__reactViewTransition=null),c()}),g}catch{return a(),n(),i(),null}}function ya(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}ya.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Z({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},ya.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,l=t.getAnimations({subtree:!0}),a=[],n=0;n<l.length;n++){var u=l[n].effect;u!==null&&u.target===t&&u.pseudoElement===e&&a.push(l[n])}return a},ya.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function xd(t){return{name:t,group:new ya("group",t),imagePair:new ya("image-pair",t),old:new ya("old",t),new:new ya("new",t)}}function ye(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ye.prototype.addEventListener=function(t,e,l){var a=null,n=null;if(!(l!=null&&typeof l!="boolean"&&(a=l.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(pd(u,t,e,l)===-1){var i=this,c=e;l!=null&&typeof l!="boolean"&&l.once===!0&&(c=function(f){i.removeEventListener(t,e,l),typeof e=="function"?e.call(this,f):e.handleEvent(f)}),a!==null&&(n=i.removeEventListener.bind(i,t,e,l),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=en(l),u.push({type:t,listener:e,optionsOrUseCapture:l,attachedListener:c,cleanup:n}),x(this._fragmentFiber.child,!1,Hv,t,c,a)}this._eventListeners=u}};function Hv(t,e,l,a){return st(t).addEventListener(e,l,a),!1}ye.prototype.removeEventListener=function(t,e,l){var a=this._eventListeners;if(a!==null&&(e=pd(a,t,e,l),e!==-1)){var n=a[e];l=n.attachedListener;var u=n.cleanup;n=en(n.optionsOrUseCapture),x(this._fragmentFiber.child,!1,Mv,t,l,n),a.splice(e,1),u!==null&&u()}};function Mv(t,e,l,a){return st(t).removeEventListener(e,l,a),!1}function en(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Td(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function pd(t,e,l,a){if(t.length===0)return-1;a=Td(a);for(var n=0;n<t.length;n++){var u=t[n];if(u.type===e&&u.listener===l&&Td(u.optionsOrUseCapture)===a)return n}return-1}ye.prototype.dispatchEvent=function(t){var e=O(this._fragmentFiber);if(e===null)return!0;e=st(e);var l=this._eventListeners;if(l!==null&&0<l.length||!t.bubbles){var a=e.nodeType===9?e.createComment(""):document.createTextNode("");if(l)for(var n=0;n<l.length;n++){var u=l[n];a.addEventListener(u.type,u.attachedListener,en(u.optionsOrUseCapture))}if(e.appendChild(a),t=a.dispatchEvent(t),l)for(n=0;n<l.length;n++)u=l[n],a.removeEventListener(u.type,u.attachedListener,en(u.optionsOrUseCapture));return e.removeChild(a),t}return e.dispatchEvent(t)},ye.prototype.focus=function(t){x(this._fragmentFiber.child,!0,Ed,t,void 0,void 0)};function Ed(t,e){return t.tag===6?!1:(t=st(t),Bv(t,e))}ye.prototype.focusLast=function(t){var e=[];x(this._fragmentFiber.child,!0,no,e,void 0,void 0);for(var l=e.length-1;0<=l&&!Ed(e[l],t);l--);};function no(t,e){return e.push(t),!1}ye.prototype.blur=function(){var t=O(this._fragmentFiber);t!==null&&(t=st(t),t=$n(t).activeElement,t!==null&&x(this._fragmentFiber.child,!1,zv,t,void 0,void 0))};function zv(t,e){return t.tag===6?!1:(t=st(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ye.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),x(this._fragmentFiber.child,!1,Av,t,void 0,void 0)};function Av(t,e){return t.tag===6||(t=st(t),e.observe(t)),!1}ye.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),x(this._fragmentFiber.child,!1,Rv,t,void 0,void 0);for(var l=e=0;l<Ue.length;l++){var a=Ue[l];a.fragmentInstance===this&&a.observer===t?t.unobserve(a.instance):Ue[e++]=a}Ue.length=e}};function Rv(t,e){return t.tag===6||(t=st(t),e.unobserve(t)),!1}var Ue=[],uo=!1;function _v(t,e,l){Ue.push({fragmentInstance:t,observer:e,instance:l}),uo||(uo=!0,Yv(function(){uo=!1;var a=Ue;Ue=[];for(var n=0;n<a.length;n++){var u=a[n];u.observer.unobserve(u.instance)}}))}ye.prototype.getClientRects=function(){var t=[];return x(this._fragmentFiber.child,!1,Nv,t,void 0,void 0),t};function Nv(t,e){if(t.tag===6){t=t.stateNode;var l=t.ownerDocument.createRange();l.selectNodeContents(t),e.push.apply(e,l.getClientRects())}else t=st(t),e.push.apply(e,t.getClientRects());return!1}ye.prototype.getRootNode=function(t){var e=O(this._fragmentFiber);return e===null?this:st(e).getRootNode(t)},ye.prototype.compareDocumentPosition=function(t){var e=O(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var l=[];x(this._fragmentFiber.child,!1,no,l,void 0,void 0);var a=st(e);if(l.length===0){if(l=a,Mt(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(l=e)}e=this._fragmentFiber;var n=a=l.compareDocumentPosition(t);return l===t?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(l=le(e)[1],l===null?n=Node.DOCUMENT_POSITION_PRECEDING:(t=st(l).compareDocumentPosition(t),n=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=st(l[0]),n=st(l[l.length-1]);var u=Mt(this._fragmentFiber)?e.parentElement:a;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var i=e.compareDocumentPosition(t),c=n.compareDocumentPosition(t),f=i&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&u&&i&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,e=a&&e===t||u&&n===t||f||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&e===t||!u&&n===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:i,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ov(e,this._fragmentFiber,l[0],l[l.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ov(t,e,l,a,n){var u=kl(n);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(l=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){l=!0;break t}u=u.return}l=!1}return l}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=n.ownerDocument,n===u||n===u.documentElement||n===u.body;t:{for(u=e,e=O(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===l)&&(e=ne(l,u,Be),e===null?e=!1:(x(e,!0,Zl,u,l),u=ge,ge=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===a)&&(e=ne(a,u,Be),e===null?e=!1:(x(e,!0,Ge,u,a),u=ge,ae=ge=null,e=u!==null)),e):!1}function bd(t,e){var l=t.ownerDocument.createRange();l.selectNodeContents(t),t=l.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ye.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(y(566));var e=[];x(this._fragmentFiber.child,!1,no,e,void 0,void 0);var l=t!==!1;if(e.length===0){var a=le(this._fragmentFiber);if(a=l?a[1]||a[0]||O(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){t=st(a),bd(t,l);return}if(a=st(a),a.nodeType!==9){if(a.nodeType===11){l="host"in a?a.host:null,l!==null&&l.scrollIntoView(t);return}a.scrollIntoView(t)}}for(a=l?e.length-1:0;a!==(l?-1:e.length);){var n=e[a];n.tag===6?(n=st(n),bd(n,l)):st(n).scrollIntoView(t),a+=l?-1:1}};function Dv(t,e){return t=st(t),Sd(t,e),!1}function Sd(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function Hd(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.addEventListener(n.type,n.attachedListener,en(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(u){for(var i=0,c=0;c<Ue.length;c++){var f=Ue[c];(f.fragmentInstance!==e||f.observer!==u||f.instance!==t)&&(Ue[i++]=f)}Ue.length=i,u.observe(t)}),Sd(t,e))}function Cv(t,e){var l=e._eventListeners;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];t.removeEventListener(n.type,n.attachedListener,en(n.optionsOrUseCapture))}t.nodeType!==3&&(l=e._observers,l!==null&&l.forEach(function(u){typeof u.rootMargin=="string"?_v(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function io(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":io(l),yu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function wv(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[vn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ae(t.nextSibling),t===null)break}return null}function Uv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ae(t.nextSibling),t===null))return null;return t}function Md(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ae(t.nextSibling),t===null))return null;return t}function co(t){return t.data==="$?"||t.data==="$~"}function fo(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gv(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ae(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var oo=null;function zd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ae(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Ad(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Bv(t,e){function l(){a=!0}if(t.ownerDocument.activeElement===t)return!0;var a=!1;try{t.ownerDocument.addEventListener("focus",l,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",l,!0)}return a}function Yv(t){hd(function(){hd(function(e){return t(e)})})}function Rd(t,e,l){switch(e=$n(l),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function _d(t,e,l){for(var a in l){var n=l[a];l.hasOwnProperty(a)&&n!=null&&ct(t,e,a,null,hv,n)}l.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===je&&(t.onclick=null),yu(t)}function ro(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);yu(t)}var Re=new Map,Nd=new Set;function In(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ml=Y.d;Y.d={f:qv,r:Xv,D:jv,C:Lv,L:Vv,m:Qv,X:Kv,S:Zv,M:Wv};function qv(){var t=ml.f(),e=Ti();return t||e}function Xv(t){var e=pa(t);e!==null&&e.tag===5&&e.type==="form"?Ds(e):ml.r(t)}var ln=typeof document>"u"?null:document;function Od(t,e,l){var a=ln;if(a&&typeof e=="string"&&e){var n=pe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Nd.has(n)||(Nd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Lt(e,"link",t),Dt(e),a.head.appendChild(e)))}}function jv(t){ml.D(t),Od("dns-prefetch",t,null)}function Lv(t,e){ml.C(t,e),Od("preconnect",t,e)}function Vv(t,e,l){ml.L(t,e,l);var a=ln;if(a&&t&&e){var n='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+pe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+pe(l.imageSizes)+'"]')):n+='[href="'+pe(t)+'"]';var u=n;switch(e){case"style":u=an(t);break;case"script":u=nn(t)}if(!(Re.has(u)||(t=Z({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Re.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(Pn(u))||e==="script"&&a.querySelector(tu(u))))){var i=a.createElement("link");Lt(i,"link",t),e==="style"&&(i[vu]=!0,i.onload=i.onerror=function(){Qo(i)}),Dt(i),a.head.appendChild(i)}}}function Qv(t,e){ml.m(t,e);var l=ln;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+pe(a)+'"][href="'+pe(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=nn(t)}if(!Re.has(u)&&(t=Z({rel:"modulepreload",href:t},e),Re.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(tu(u)))return}a=l.createElement("link"),Lt(a,"link",t),Dt(a),l.head.appendChild(a)}}}function Zv(t,e,l){ml.S(t,e,l);var a=ln;if(a&&t){var n=Ea(a).hoistableStyles,u=an(t);e=e||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(Pn(u)))c.loading=5;else{t=Z({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Re.get(u))&&so(t,l);var f=i=a.createElement("link");Dt(f),Lt(f,"link",t),f._p=new Promise(function(h,g){f.onload=h,f.onerror=g}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,zi(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Kv(t,e){ml.X(t,e);var l=ln;if(l&&t){var a=Ea(l).hoistableScripts,n=nn(t),u=a.get(n);u||(u=l.querySelector(tu(n)),u||(t=Z({src:t,async:!0},e),(e=Re.get(n))&&ho(t,e),u=l.createElement("script"),Dt(u),Lt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Wv(t,e){ml.M(t,e);var l=ln;if(l&&t){var a=Ea(l).hoistableScripts,n=nn(t),u=a.get(n);u||(u=l.querySelector(tu(n)),u||(t=Z({src:t,async:!0,type:"module"},e),(e=Re.get(n))&&ho(t,e),u=l.createElement("script"),Dt(u),Lt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Dd(t,e,l,a){var n=(n=yl.current)?In(n):null;if(!n)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(l=an(l.href),e=Ea(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=an(l.href);var u=Ea(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(Pn(t)))?u._p||(i.instance=u,i.state.loading=5):(u=Re.get(t),u||(u={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Re.set(t,u)),Jv(n,t,u,i.state))),e&&a===null)throw Error(y(528,""));return i}if(e&&a!==null)throw Error(y(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(l=nn(l),e=Ea(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function an(t){return'href="'+pe(t)+'"'}function Pn(t){return'link[rel="stylesheet"]['+t+"]"}function Cd(t){return Z({},t,{"data-precedence":t.precedence,precedence:null})}function Jv(t,e,l,a){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[vu]!==!0){a.loading=1;return}}else e=t.createElement("link"),e[vu]=!0,e.onload=e.onerror=Qo.bind(null,e),Lt(e,"link",l),Dt(e),t.head.appendChild(e);a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2})}function nn(t){return'[src="'+pe(t)+'"]'}function tu(t){return"script[async]"+t}function wd(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+pe(l.href)+'"]');if(a)return e.instance=a,Dt(a),a;var n=Z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Dt(a),Lt(a,"style",n),zi(a,l.precedence,t),e.instance=a;case"stylesheet":n=an(l.href);var u=t.querySelector(Pn(n));if(u)return e.state.loading|=4,e.instance=u,Dt(u),u;a=Cd(l),(n=Re.get(n))&&so(a,n),u=(t.ownerDocument||t).createElement("link"),Dt(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Lt(u,"link",a),e.state.loading|=4,zi(u,l.precedence,t),e.instance=u;case"script":return u=nn(l.src),(n=t.querySelector(tu(u)))?(e.instance=n,Dt(n),n):(a=l,(n=Re.get(u))&&(a=Z({},l),ho(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Dt(n),Lt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,zi(a,l.precedence,t));return e.instance}function zi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function so(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ho(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ai=null;function Ud(t,e,l){if(Ai===null){var a=new Map,n=Ai=new Map;n.set(l,a)}else n=Ai,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[vn]||u[Bt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function mo(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function kv(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Gd(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Bd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yd(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qd(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=Yd(e),t.suspenseyImages.push(e)),t=Iv.bind(t),e.decode().then(t,t))}function Fv(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=an(a.href),u=e.querySelector(Pn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=eu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,Dt(u);return}u=e.ownerDocument||e,a=Cd(a),(n=Re.get(n))&&so(a,n),u=u.createElement("link"),Dt(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Lt(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=eu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Ri=0;function $v(t,e){return t.stylesheets&&t.count===0&&Ni(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Ni(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Ri===0&&(Ri=62500*vv());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ni(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Ri?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Xd(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ni(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function eu(){this.count--,Xd(this)}function Iv(){this.imgCount--,Xd(this)}var _i=null;function Ni(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_i=new Map,e.forEach(Pv,t),_i=null,eu.call(t))}function Pv(t,e){if(!(e.state.loading&4)){var l=_i.get(t);if(l)var a=l.get(null);else{l=new Map,_i.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=eu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var un={$$typeof:Ot,Provider:null,Consumer:null,_currentValue:Pe,_currentValue2:Pe,_threadCount:0};function ty(t,e,l,a,n,u,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.hiddenUpdates=Ki(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.transitionTypes=null,this.incompleteTransitions=new Map}function jd(t,e,l,a,n,u,i,c,f,h,g,p){return t=new ty(t,e,l,i,f,h,g,p,c),e=1,u===!0&&(e|=24),u=$t(3,null,null,e),t.current=u,u.stateNode=t,e=Ac(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},Oc(u),t}function Ld(t){return t?(t=Oa,t):Oa}function Vd(t,e,l,a,n,u){n=Ld(n),a.context===null?a.context=n:a.pendingContext=n,a=Al(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Rl(t,a,e),l!==null&&(ee(l,t,e),Dn(l,t,e))}function Qd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function vo(t,e){Qd(t,e),(t=t.alternate)&&Qd(t,e)}function Zd(t){if(t.tag===13||t.tag===31){var e=Pl(t,67108864);e!==null&&ee(e,t,67108864),vo(t,67108864)}}function Kd(t){if(t.tag===13||t.tag===31){var e=ve();e=Wi(e);var l=Pl(t,e);l!==null&&ee(l,t,e),vo(t,e)}}var cn=!0;function ey(t,e,l,a){var n=A.T;A.T=null;var u=Y.p;try{Y.p=2,yo(t,e,l,a)}finally{Y.p=u,A.T=n}}function ly(t,e,l,a){var n=A.T;A.T=null;var u=Y.p;try{Y.p=8,yo(t,e,l,a)}finally{Y.p=u,A.T=n}}function yo(t,e,l,a){if(cn){var n=go(a);if(n===null)Ff(t,e,a,Oi,l),Jd(t,a);else if(ny(n,t,e,l,a))a.stopPropagation();else if(Jd(t,a),e&4&&-1<ay.indexOf(t)){for(;n!==null;){var u=pa(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Jl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-fe(i);c.entanglements[1]|=f,i&=~f}$e(u),(lt&6)===0&&(yi=ie()+500,Jn(0))}}break;case 31:case 13:c=Pl(u,2),c!==null&&ee(c,u,2),Ti(),vo(u,2)}if(u=go(a),u===null&&Ff(t,e,a,Oi,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Ff(t,e,a,null,l)}}function go(t){return t=tc(t),xo(t)}var Oi=null;function xo(t){if(Oi=null,t=kl(t),t!==null){var e=Q(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=vt(e),t!==null)return t;t=null}else if(l===31){if(t=Tt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Oi=t,null}function Wd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vh()){case Do:return 2;case Co:return 8;case ru:case yh:return 32;case wo:return 268435456;default:return 32}default:return 32}}var To=!1,Xl=null,jl=null,Ll=null,lu=new Map,au=new Map,Vl=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jd(t,e){switch(t){case"focusin":case"focusout":Xl=null;break;case"dragenter":case"dragleave":jl=null;break;case"mouseover":case"mouseout":Ll=null;break;case"pointerover":case"pointerout":lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":au.delete(e.pointerId)}}function nu(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=pa(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function ny(t,e,l,a,n){switch(e){case"focusin":return Xl=nu(Xl,t,e,l,a,n),!0;case"dragenter":return jl=nu(jl,t,e,l,a,n),!0;case"mouseover":return Ll=nu(Ll,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return lu.set(u,nu(lu.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,au.set(u,nu(au.get(u)||null,t,e,l,a,n)),!0}return!1}function kd(t){var e=kl(t.target);if(e!==null){var l=Q(e);if(l!==null){if(e=l.tag,e===13){if(e=vt(l),e!==null){t.blockedOn=e,jo(t.priority,function(){Kd(l)});return}}else if(e===31){if(e=Tt(l),e!==null){t.blockedOn=e,jo(t.priority,function(){Kd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Di(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=go(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Pi=a,l.target.dispatchEvent(a),Pi=null}else return e=pa(l),e!==null&&Zd(e),t.blockedOn=l,!1;e.shift()}return!0}function Fd(t,e,l){Di(t)&&l.delete(e)}function uy(){To=!1,Xl!==null&&Di(Xl)&&(Xl=null),jl!==null&&Di(jl)&&(jl=null),Ll!==null&&Di(Ll)&&(Ll=null),lu.forEach(Fd),au.forEach(Fd)}function Ci(t,e){t.blockedOn===e&&(t.blockedOn=null,To||(To=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,uy)))}var wi=null;function $d(t){wi!==t&&(wi=t,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){wi===t&&(wi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(xo(a||l)===null)continue;break}var u=pa(l);u!==null&&(t.splice(e,3),e-=3,Ic(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function fn(t){function e(f){return Ci(f,t)}Xl!==null&&Ci(Xl,t),jl!==null&&Ci(jl,t),Ll!==null&&Ci(Ll,t),lu.forEach(e),au.forEach(e);for(var l=0;l<Vl.length;l++){var a=Vl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Vl.length&&(l=Vl[0],l.blockedOn===null);)kd(l),l.blockedOn===null&&Vl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Ft]||null;if(typeof u=="function")i||$d(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ft]||null)c=i.formAction;else if(xo(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),$d(l)}}}function Id(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function po(t){this._internalRoot=t}Ui.prototype.render=po.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var l=e.current,a=ve();Vd(l,a,t,e,null,null)},Ui.prototype.unmount=po.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vd(t.current,2,null,t,null,null),Ti(),e[Ta]=null}};function Ui(t){this._internalRoot=t}Ui.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Vl.length&&e!==0&&e<Vl[l].priority;l++);Vl.splice(l,0,t),l===0&&kd(t)}};var Pd=w.version;if(Pd!=="19.3.1")throw Error(y(527,Pd,"19.3.1"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=bt(e),t=t!==null?D(t):null,t=t===null?null:t.stateNode,t};var iy={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{dn=Gi.inject(iy),ce=Gi}catch{}}return uu.createRoot=function(t,e){if(!X(t))throw Error(y(299));var l=!1,a="",n=Ls,u=Vs,i=Qs;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jd(t,1,!1,null,null,l,a,null,n,u,i,Id),t[Ta]=e.current,kf(t),new po(e)},uu.hydrateRoot=function(t,e,l){if(!X(t))throw Error(y(299));var a=!1,n="",u=Ls,i=Vs,c=Qs,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=jd(t,1,!0,e,l??null,a,n,f,u,i,c,Id),e.context=Ld(null),l=e.current,a=ve(),a=Wi(a),n=Al(a),n.callback=null,Rl(l,n,a),l=a,e.current.lanes=l,mn(e,l),$e(e),t[Ta]=e.current,kf(t),new Ui(e)},uu.version="19.3.1",uu}var ch;function vy(){if(ch)return bo.exports;ch=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(w){console.error(w)}}return E(),bo.exports=my(),bo.exports}var yy=vy(),zo={exports:{}},iu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function gy(){if(fh)return iu;fh=1;var E=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function U(y,X,Q){var vt=null;if(Q!==void 0&&(vt=""+Q),X.key!==void 0&&(vt=""+X.key),"key"in X){Q={};for(var Tt in X)Tt!=="key"&&(Q[Tt]=X[Tt])}else Q=X;return X=Q.ref,{$$typeof:E,type:y,key:vt,ref:X!==void 0?X:null,props:Q}}return iu.Fragment=w,iu.jsx=U,iu.jsxs=U,iu}var oh;function xy(){return oh||(oh=1,zo.exports=gy()),zo.exports}var Bi=xy();const Ty=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Lumina Weavers · Kinetic Textiles, Kyoto</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="text-[#e8dcc4] overflow-hidden antialiased selection:bg-[#b02330] selection:text-white font-serif" style="background: radial-gradient(120% 100% at 50% 30%, #2a1113 0%, #1a0a0c 55%, #0f0607 100%); height: 100dvh; width: 100vw;">

    <!-- Aura Asset Background -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-[0.15] mix-blend-screen" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Stage / Background -->
    <div class="fixed inset-0 overflow-hidden z-0">
        <canvas id="cloth" class="absolute inset-0 w-full h-full block pointer-events-none"></canvas>
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(90% 80% at 50% 46%, transparent 55%, rgba(10,5,6,.72) 100%);"></div>
    </div>

    <!-- UI Overlay -->
    <div class="absolute inset-0 z-10 flex flex-col p-6 md:p-12 pointer-events-none font-sans">
        
        <!-- Header -->
        <header class="flex justify-between items-center w-full pointer-events-auto">
            <div class="overflow-hidden">
                <div class="reveal-item opacity-0 translate-y-8 text-xs tracking-[0.28em] uppercase text-[#b99a8f] font-medium">
                    Est. 2024 · Kyoto, Japan
                </div>
            </div>
            <nav class="hidden md:flex gap-8">
                <div class="overflow-hidden">
                    <a href="#library" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Material Library</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#trade" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Partnerships</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#mill" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">The Studio</a>
                </div>
            </nav>
        </header>

        <!-- Footer / Content -->
        <div class="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pointer-events-auto w-full">
            
            <div class="max-w-md space-y-6">
                <div>
                    <p class="word-reveal text-sm md:text-base leading-relaxed text-[#e8dcc4]/90">
                        <strong class="text-white font-semibold block mb-1 text-base md:text-lg tracking-tight font-serif">Kinetic textiles, rendered to order.</strong>
                        Every meter is simulated on bespoke kinetic engines. Digital threads, authentic physics, designed for infinite virtual environments.
                    </p>
                </div>
                
                <div class="overflow-hidden pt-2">
                    <div class="reveal-item opacity-0 translate-y-8 inline-block rounded-sm p-[1px] bg-gradient-to-b from-white/30 via-[#e03848]/30 to-[#7c1622]/10 shadow-[0_10px_30px_rgba(124,22,34,0.4)] transition-transform duration-300 hover:-translate-y-0.5 group">
                        <a href="#commission" class="flex items-center gap-3 bg-[#b02330] group-hover:bg-[#961c27] text-white px-6 py-3 rounded-[1px] text-sm font-semibold tracking-wide transition-colors relative overflow-hidden">
                            <span class="relative z-10">Commission a textile</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="18" class="relative z-10 transition-transform group-hover:translate-x-1"></iconify-icon>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-left sm:text-right mt-8 sm:mt-0">
                <div class="word-reveal text-xs tracking-[0.24em] uppercase text-[#b99a8f] leading-[1.9] font-medium">
                    Vector &amp; matrix<br>
                    No. 42 azure thread<br>
                    Node 7 · Grid 2024
                </div>
            </div>

        </div>
    </div>

    <script>
        // --- GSAP Animation ---
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Standard reveals
            gsap.to(".reveal-item", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Masked Word Reveal implementation
            document.querySelectorAll('.word-reveal').forEach(node => {
                function wrapWords(el) {
                    const childNodes = Array.from(el.childNodes);
                    childNodes.forEach(child => {
                        if (child.nodeType === 3) {
                            const words = child.nodeValue.split(/(\\s+)/);
                            const fragment = document.createDocumentFragment();
                            words.forEach(word => {
                                if (word.trim().length > 0) {
                                    const wrapper = document.createElement('span');
                                    wrapper.className = 'inline-flex overflow-hidden pb-1 -mb-1';
                                    const inner = document.createElement('span');
                                    inner.className = 'word-anim translate-y-[110%] opacity-0 inline-block';
                                    inner.textContent = word;
                                    wrapper.appendChild(inner);
                                    fragment.appendChild(wrapper);
                                } else {
                                    fragment.appendChild(document.createTextNode(word));
                                }
                            });
                            el.replaceChild(fragment, child);
                        } else if (child.nodeType === 1) {
                            wrapWords(child);
                        }
                    });
                }
                wrapWords(node);

                // ScrollTrigger staggered reveal
                gsap.to(node.querySelectorAll('.word-anim'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: node,
                        start: "top 95%",
                    }
                });
            });
        });

        // --- Three.js Cloth Simulation ---
        (() => {
            const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
            const canvas = document.getElementById('cloth');
            if (!window.THREE) return;

            // Generate Woven Texture
            function makeClothTexture() {
                const W = 1280, H = 800;
                const c = document.createElement('canvas'); 
                c.width = W; 
                c.height = H;
                const x = c.getContext('2d');
                
                // Ivory ground gradient
                const g = x.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, '#efe6d4'); 
                g.addColorStop(0.5, '#e9dfca'); 
                g.addColorStop(1, '#e3d7bf');
                x.fillStyle = g; 
                x.fillRect(0, 0, W, H);

                // Crimson hem border
                x.strokeStyle = '#a5202c'; 
                x.lineWidth = 10;
                x.strokeRect(46, 46, W-92, H-92);
                x.lineWidth = 3; 
                x.strokeStyle = '#7c1622';
                x.strokeRect(66, 66, W-132, H-132);

                // Typography
                x.fillStyle = '#a5202c';
                x.font = 'bold 78px Georgia, "Times New Roman", serif';
                x.textAlign = 'center'; 
                x.textBaseline = 'middle';
                x.fillText('L W', W/2, 190);
                
                x.font = 'normal 20px "Helvetica Neue", Arial, sans-serif';
                x.fillStyle = '#7c1622';
                x.fillText('· KYOTO ·', W/2, 246);

                x.fillStyle = '#9e1e2a';
                x.font = 'bold 118px Georgia, "Times New Roman", serif';
                x.fillText('LUMINA', W/2, 400);
                x.fillText('WEAVERS', W/2, 520);

                x.fillStyle = '#7c1622';
                x.font = '600 30px "Helvetica Neue", Arial, sans-serif';
                x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);

                // Weave overlay (Thread grid)
                x.globalAlpha = 1;
                for(let yy=0; yy<H; yy+=3){
                    x.strokeStyle = 'rgba(60,30,20,0.05)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(0,yy+.5); x.lineTo(W,yy+.5); x.stroke();
                }
                for(let xx=0; xx<W; xx+=3){
                    x.strokeStyle = 'rgba(255,250,235,0.06)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(xx+.5,0); x.lineTo(xx+.5,H); x.stroke();
                }

                // Fabric Slub Noise
                const id = x.getImageData(0, 0, W, H), d = id.data;
                for(let i=0; i<d.length; i+=4){
                    const n = (Math.random()*2-1)*10;
                    d[i]+=n; d[i+1]+=n; d[i+2]+=n;
                }
                x.putImageData(id, 0, 0);

                const tex = new THREE.CanvasTexture(c);
                tex.anisotropy = 4; 
                tex.colorSpace = THREE.SRGBColorSpace;
                return tex;
            }

            // Scene Setup
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            let camera;

            const BW = 4.4, BH = 2.75; 
            const GX = 40, GY = 26;
            const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);
            const mat = new THREE.MeshPhongMaterial({
                map: makeClothTexture(), 
                side: THREE.DoubleSide,
                shininess: 6, 
                specular: 0x2a1410, 
                color: 0xffffff
            });
            const mesh = new THREE.Mesh(geo, mat); 
            scene.add(mesh);

            // Lighting
            scene.add(new THREE.AmbientLight(0xffe9d0, 0.62));
            const key = new THREE.DirectionalLight(0xfff0dc, 1.15); 
            key.position.set(-3, 3.5, 3.2); 
            scene.add(key);
            const rim = new THREE.DirectionalLight(0xb02330, 0.42); 
            rim.position.set(3, -1.5, 2.0); 
            scene.add(rim);

            // Verlet Physics Data
            const pos = geo.attributes.position;
            const N = (GX + 1) * (GY + 1);
            const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
            const pinned = new Uint8Array(N);
            
            for(let i=0; i<N; i++){
                const ax = pos.getX(i), ay = pos.getY(i), az = 0;
                cur[i*3] = prev[i*3] = rest[i*3] = ax;
                cur[i*3+1] = prev[i*3+1] = rest[i*3+1] = ay;
                cur[i*3+2] = prev[i*3+2] = rest[i*3+2] = az;
            }
            
            for(let ix=0; ix<=GX; ix++){ pinned[ix] = 1; }
            const idx = (ix, iy) => ix + iy * (GX + 1);

            const restH = BW / GX, restV = BH / GY;
            const GRAV = -3.1, DAMP = 0.985, DT = 0.016;

            function wind(ix, iy, t) {
                const cx = ix / GX, cy = iy / GY;
                const travel = t * 1.7 - cy * 4.2;
                const gust = 0.6 + 0.42 * Math.sin(t * 0.6) + 0.18 * Math.sin(t * 1.9 + 1.3);
                const amp = 4.3 * cy;
                const fz = (Math.sin(travel + cx * 3.3) + 0.5 * Math.sin(travel * 1.7 + cx * 6.0)) * amp * gust;
                const fx = Math.sin(t * 0.9 + cy * 2.2) * 0.6 * cy;
                const fy = -0.4 * cy;
                return [fx, fy, fz];
            }

            function step(t) {
                for(let iy=0; iy<=GY; iy++){
                    for(let ix=0; ix<=GX; ix++){
                        const i = idx(ix, iy);
                        if(pinned[i]) continue;
                        const [fx, fy, fz] = wind(ix, iy, t);
                        for(let k=0; k<3; k++){
                            const j = i * 3 + k;
                            const a = (k===0 ? fx : k===1 ? (fy+GRAV) : fz);
                            const v = (cur[j] - prev[j]) * DAMP;
                            prev[j] = cur[j];
                            cur[j] = cur[j] + v + a * DT * DT;
                        }
                    }
                }
                
                for(let it=0; it<3; it++){
                    for(let iy=0; iy<=GY; iy++){
                        for(let ix=0; ix<GX; ix++){ solve(idx(ix,iy), idx(ix+1,iy), restH); }
                    }
                    for(let iy=0; iy<GY; iy++){
                        for(let ix=0; ix<=GX; ix++){ solve(idx(ix,iy), idx(ix,iy+1), restV); }
                    }
                }
                
                for(let ix=0; ix<=GX; ix++){
                    const i = ix;
                    cur[i*3] = rest[i*3]; cur[i*3+1] = rest[i*3+1]; cur[i*3+2] = rest[i*3+2];
                    prev[i*3] = rest[i*3]; prev[i*3+1] = rest[i*3+1]; prev[i*3+2] = rest[i*3+2];
                }
            }

            function solve(a, b, rl) {
                const ax = cur[a*3], ay = cur[a*3+1], az = cur[a*3+2];
                const bx = cur[b*3], by = cur[b*3+1], bz = cur[b*3+2];
                let dx = bx - ax, dy = by - ay, dz = bz - az;
                const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1e-6;
                const diff = (d - rl) / d * 0.5;
                dx *= diff; dy *= diff; dz *= diff;
                
                const pa = pinned[a], pb = pinned[b];
                if(!pa && !pb){ 
                    cur[a*3]+=dx; cur[a*3+1]+=dy; cur[a*3+2]+=dz; 
                    cur[b*3]-=dx; cur[b*3+1]-=dy; cur[b*3+2]-=dz; 
                }
                else if(pa && !pb){ cur[b*3]-=dx*2; cur[b*3+1]-=dy*2; cur[b*3+2]-=dz*2; }
                else if(!pa && pb){ cur[a*3]+=dx*2; cur[a*3+1]+=dy*2; cur[a*3+2]+=dz*2; }
            }

            function commit() {
                for(let i=0; i<N; i++){ pos.setXYZ(i, cur[i*3], cur[i*3+1], cur[i*3+2]); }
                pos.needsUpdate = true;
                geo.computeVertexNormals();
            }

            function fit() {
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(w, h, false);
                const aspect = w / h;
                camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
                const vFit = (BH/2) / Math.tan(42 * Math.PI / 360);
                const hFit = (BW/2) / Math.tan(42 * Math.PI / 360) / aspect;
                camera.position.set(0, 0.05, Math.max(vFit, hFit) * 1.16 + 0.4);
                camera.lookAt(0, 0, 0);
            }
            
            window.addEventListener('resize', fit); 
            fit();

            let running = false, raf = 0, t = 0;
            function loop() {
                if(!running) return;
                t += DT; 
                step(t); 
                commit();
                renderer.render(scene, camera);
                raf = requestAnimationFrame(loop);
            }
            
            function start() { if(running)return; running=true; raf=requestAnimationFrame(loop); }
            function stop() { running=false; cancelAnimationFrame(raf); }

            if(reduce) {
                for(let s=0; s<220; s++) step(s*DT);
                commit(); 
                renderer.render(scene, camera);
            } else {
                for(let s=0; s<40; s++) step(s*DT);
                t = 40 * DT;
                start();
                document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
            }
        })();
    <\/script>
</body>
</html>`,on={hue:0,saturation:1,brightness:1},py={luminaWeaversCloth:{title:"Woven Cloth kinetic textile",source:Ty,background:"#16090b",targets:[{selector:"body > div.fixed.inset-0.overflow-hidden.z-0",role:"background"}],presentation:"woven-cloth-label"}};function Ao(E,w,U){return Math.min(U,Math.max(w,E))}function rh(E,w,U){if(!E.includes(w))throw new Error(`Neuform source adapter could not find: ${w}`);return E.replace(w,U)}function Ey(E){return[["return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };","return { t0: after + 1.25 + frnd() * 1.75, dur: total, segs: segs };"],["if (!ev) ev = nextEvent(4.2);","if (!ev) ev = nextEvent(0.55);"],["cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);","cap = Math.min((W - W * 0.20) / blockW, (H - H * 0.28) / blockH);"],["var y0 = (H - blockH * cap) * 0.48;","var y0 = (H - blockH * cap) / 2;"]].reduce((w,[U,y])=>rh(w,U,y),E)}function by(E){return[["x.fillText('L W', W/2, 190);","x.fillText('W C', W/2, 190);"],["x.fillText('· KYOTO ·', W/2, 246);","x.fillText('· WOVEN CLOTH ·', W/2, 246);"],["x.fillText('LUMINA', W/2, 400);","x.fillText('WOVEN', W/2, 400);"],["x.fillText('WEAVERS', W/2, 520);","x.fillText('CLOTH', W/2, 520);"],["x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);","x.fillText('T E X T I L E   S I M U L A T I O N', W/2, 626);"]].reduce((w,[U,y])=>rh(w,U,y),E)}function sh(E,w){return typeof E.background=="function"?E.background(w):E.background}function Sy(E,w){const U=JSON.stringify(E.targets).replace(/</g,"\\u003c"),y=sh(E,w),X=w==="light"?"grayscale(1) invert(1) contrast(1.08)":"grayscale(1) contrast(1.08)",Q=E.presentation==="animated-typography"?`
@keyframes sf-neon-type-breathe {
  0%, 100% { transform: translate3d(0, 3px, 0) scale(0.988); opacity: 0.88; }
  45% { transform: translate3d(0, -3px, 0) scale(1); opacity: 1; }
  68% { transform: translate3d(0, 0, 0) scale(0.996); opacity: 0.96; }
}
#board { overflow: visible !important; }
#neon {
  transform-origin: 50% 52%;
  animation: sf-neon-type-breathe 5.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  filter: ${X};
  will-change: transform, opacity;
}
@media (prefers-reduced-motion: reduce) {
  #neon { animation: none !important; transform: none !important; opacity: 1 !important; }
}
`:"",vt=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${y} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${Q}
</style>`,Tt=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${U};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return(E.presentation==="animated-typography"?Ey(E.source):E.presentation==="woven-cloth-label"?by(E.source):E.source).replace(/<\/head>/i,`${vt}</head>`).replace(/<\/body>/i,`${Tt}</body>`)}function Hy({definition:E,mode:w="dark",hue:U=on.hue,saturation:y=on.saturation,brightness:X=on.brightness,className:Q,style:vt}){const Tt=w==="light"?"light":"dark",yt=sh(E,Tt),bt=rn.useMemo(()=>Sy(E,Tt),[E,Tt]),D=Ao(U,-180,180),x=Ao(y,0,2),O=Ao(X,.35,1.65),Mt=D===0&&x===1&&O===1?void 0:`hue-rotate(${D}deg) saturate(${x}) brightness(${O})`;return Bi.jsx("iframe",{className:Q,"data-mode":Tt,title:E.title,srcDoc:bt,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:yt,filter:Mt,...vt}})}function My(E){return function(w){return Bi.jsx(Hy,{...w,definition:E})}}const zy=My(py.luminaWeaversCloth),Ay=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Atelier Flag</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #12100d; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(84% 76% at 46% 42%, transparent 50%, rgba(14,12,10,.72) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  const TW = 1600, TH = 1030;

  // Cut-and-sew geometry, in texture pixels. Everything the flag is made of
  // — hoist band, panel seams, hems, topstitching — is laid out from here.
  const HOIST = 122;          // heading tape down the pinned edge
  const FLY_HEM = 48;         // doubled hem at the flying edge
  const EDGE_HEM = 36;        // top and bottom hems
  const SEAM_Y = [TH / 3, (TH * 2) / 3];
  const SEAM_H = 24;

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  function alpha(ctx) { return ctx.getImageData(0, 0, TW, TH).data; }

  // --- masks ---------------------------------------------------------------
  // Construction: the raised cloth of the band, the felled seams, the hems.
  function makeStructureMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.fillRect(0, 0, HOIST, TH);
    x.fillRect(TW - FLY_HEM, 0, FLY_HEM, TH);
    x.fillRect(0, 0, TW, EDGE_HEM);
    x.fillRect(0, TH - EDGE_HEM, TW, EDGE_HEM);
    SEAM_Y.forEach((y) => x.fillRect(HOIST, y - SEAM_H / 2, TW - HOIST - FLY_HEM, SEAM_H));
    return alpha(x);
  }

  // Topstitching: every seam and hem gets its own run of thread.
  function makeStitchMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.strokeStyle = '#fff';
    x.lineWidth = 4;
    x.setLineDash([15, 11]);
    x.lineCap = 'butt';
    const run = (x0, y0, x1, y1) => { x.beginPath(); x.moveTo(x0, y0); x.lineTo(x1, y1); x.stroke(); };

    run(16, 0, 16, TH);                 // hoist tape, inner and outer rows
    run(HOIST - 16, 0, HOIST - 16, TH);
    run(TW - FLY_HEM + 16, 0, TW - FLY_HEM + 16, TH);
    run(HOIST, EDGE_HEM - 13, TW - FLY_HEM, EDGE_HEM - 13);
    run(HOIST, TH - EDGE_HEM + 13, TW - FLY_HEM, TH - EDGE_HEM + 13);
    SEAM_Y.forEach((y) => {
      run(HOIST, y - SEAM_H / 2 + 5, TW - FLY_HEM, y - SEAM_H / 2 + 5);
      run(HOIST, y + SEAM_H / 2 - 5, TW - FLY_HEM, y + SEAM_H / 2 - 5);
    });

    // The sewn-on woven label, tacked down on all four sides.
    x.setLineDash([11, 9]);
    x.lineWidth = 3.5;
    x.strokeRect(TW - 470, TH - 214, 300, 104);
    x.setLineDash([]);
    return alpha(x);
  }

  // Everything printed: the house lockup, the composition line, the label.
  function makeInkMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    const cx = HOIST + (TW - HOIST - FLY_HEM) / 2;

    x.font = '700 30px "Helvetica Neue", Arial, sans-serif';
    x.fillText('A T E L I E R   ·   N O .   4 2', cx, TH * 0.235);

    x.font = 'bold 152px Georgia, "Times New Roman", serif';
    x.fillText('WOVEN', cx, TH * 0.395);
    x.fillText('CLOTH', cx, TH * 0.555);

    x.fillRect(cx - 250, TH * 0.645, 500, 4);

    x.font = '600 28px "Helvetica Neue", Arial, sans-serif';
    x.fillText('100% LINEN  ·  WARP 40s  ·  WEFT 40s  ·  CUT AND SEWN TO ORDER', cx, TH * 0.705);

    // Woven label content.
    x.font = 'bold 40px Georgia, "Times New Roman", serif';
    x.fillText('W C', TW - 320, TH - 184);
    x.font = '600 19px "Helvetica Neue", Arial, sans-serif';
    x.fillText('THREE PANEL · FLAT FELLED', TW - 320, TH - 144);
    return alpha(x);
  }

  const structure = makeStructureMask();
  const stitch = makeStitchMask();
  const ink = makeInkMask();

  // Plain linen weave — square, matte, slightly irregular in the thread.
  function weaveHeight(x, y) {
    const p = 7;
    const cx = Math.floor(x / p), cy = Math.floor(y / p);
    const u = (x % p) / p, v = (y % p) / p;
    const warpUp = ((cx + cy) % 2) === 0;
    const h = warpUp ? Math.sin(u * Math.PI) : Math.sin(v * Math.PI);
    return h + Math.sin(cx * 12.9898) * Math.sin(cy * 4.1414 + 1.9) * 0.22;
  }

  const height = new Float32Array(TW * TH);
  for (let y = 0; y < TH; y++) {
    for (let x = 0; x < TW; x++) {
      const i = y * TW + x;
      const st = structure[i * 4] / 255;
      const th = stitch[i * 4] / 255;
      height[i] = weaveHeight(x, y) + st * 1.5 + th * 3.4 + (ink[i * 4] / 255) * 0.22;
    }
  }

  function blurHeight(passes) {
    const tmp = new Float32Array(TW * TH);
    for (let n = 0; n < passes; n++) {
      for (let y = 0; y < TH; y++) {
        const row = y * TW;
        for (let x = 0; x < TW; x++) {
          const a = height[row + (x > 0 ? x - 1 : x)], b = height[row + x];
          const c = height[row + (x < TW - 1 ? x + 1 : x)];
          tmp[row + x] = (a + b + b + c) * 0.25;
        }
      }
      for (let x = 0; x < TW; x++) {
        for (let y = 0; y < TH; y++) {
          const a = tmp[(y > 0 ? y - 1 : y) * TW + x], b = tmp[y * TW + x];
          const c = tmp[(y < TH - 1 ? y + 1 : y) * TW + x];
          height[y * TW + x] = (a + b + b + c) * 0.25;
        }
      }
    }
  }

  function makeAlbedoTexture() {
    const s = surface(TW, TH), x = s.ctx;
    // Three panels, each cut from its own dye lot.
    const lots = ['#ded2b8', '#d8ccb1', '#e2d6bd'];
    for (let k = 0; k < 3; k++) {
      x.fillStyle = lots[k];
      x.fillRect(0, (TH / 3) * k, TW, TH / 3 + 1);
    }
    const img = x.getImageData(0, 0, TW, TH), d = img.data;
    const INK = [33, 48, 77], TAPE = [26, 37, 72], THREAD = [242, 234, 218];
    for (let i = 0; i < TW * TH; i++) {
      const px = i % TW;
      const st = structure[i * 4] / 255;
      const th = stitch[i * 4] / 255;
      const ik = ink[i * 4] / 255;
      const o = i * 4;
      const shade = 0.86 + height[i] * 0.14;
      let r = d[o] * shade, g = d[o + 1] * shade, b = d[o + 2] * shade;
      // The heading tape is indigo canvas; the seams and hems only darken.
      if (px < HOIST) {
        r += (TAPE[0] - r) * 0.94; g += (TAPE[1] - g) * 0.94; b += (TAPE[2] - b) * 0.94;
      } else if (st > 0) {
        r *= 1 - st * 0.17; g *= 1 - st * 0.17; b *= 1 - st * 0.15;
      }
      if (ik > 0 && px >= HOIST) {
        r += (INK[0] - r) * ik; g += (INK[1] - g) * ik; b += (INK[2] - b) * ik;
      }
      if (th > 0) {
        r += (THREAD[0] - r) * th * 0.92; g += (THREAD[1] - g) * th * 0.92; b += (THREAD[2] - b) * th * 0.92;
      }
      d[o] = r; d[o + 1] = g; d[o + 2] = b;
    }
    x.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // Mercerised topstitch thread is the only glossy thing on the flag.
  function makeRoughnessTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const img = x.createImageData(TW, TH), d = img.data;
    for (let i = 0; i < TW * TH; i++) {
      const th = stitch[i * 4] / 255;
      const ik = ink[i * 4] / 255;
      let r = 0.86 - height[i] * 0.05 - th * 0.42 - ik * 0.12;
      r = Math.max(0.18, Math.min(0.98, r));
      const o = i * 4;
      d[o] = d[o + 1] = d[o + 2] = r * 255; d[o + 3] = 255;
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  function makeNormalTexture(strength) {
    const s = surface(TW, TH);
    const img = s.ctx.createImageData(TW, TH), d = img.data;
    for (let y = 0; y < TH; y++) {
      const yp = y > 0 ? y - 1 : y, yn = y < TH - 1 ? y + 1 : y;
      for (let x = 0; x < TW; x++) {
        const xp = x > 0 ? x - 1 : x, xn = x < TW - 1 ? x + 1 : x;
        const dx = (height[y * TW + xp] - height[y * TW + xn]) * strength;
        const dy = (height[yp * TW + x] - height[yn * TW + x]) * strength;
        const len = Math.sqrt(dx * dx + dy * dy + 1);
        const o = (y * TW + x) * 4;
        d[o] = (dx / len * 0.5 + 0.5) * 255;
        d[o + 1] = (dy / len * 0.5 + 0.5) * 255;
        d[o + 2] = (1 / len * 0.5 + 0.5) * 255;
        d[o + 3] = 255;
      }
    }
    s.ctx.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  // A photographer's seamless: warm sweep behind, softbox above, bounce left.
  function makeStudioEnvironment(renderer) {
    const W = 1024, H = 512, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#2a2620');
    g.addColorStop(0.46, '#1a1713');
    g.addColorStop(1, '#0d0b09');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const box = (cx, cy, rw, rh, color, a) => {
      const grad = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rw, rh));
      grad.addColorStop(0, color); grad.addColorStop(1, 'rgba(0,0,0,0)');
      x.globalAlpha = a; x.fillStyle = grad;
      x.save(); x.translate(cx, cy); x.scale(rw / Math.max(rw, rh), rh / Math.max(rw, rh));
      x.beginPath(); x.arc(0, 0, Math.max(rw, rh), 0, Math.PI * 2); x.fill(); x.restore();
      x.globalAlpha = 1;
    };
    box(W * 0.30, H * 0.14, 340, 130, '#fffaf0', 1);
    box(W * 0.78, H * 0.40, 220, 200, '#c8d8ea', 0.55);
    box(W * 0.06, H * 0.62, 200, 240, '#e8d3ac', 0.5);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose(); tex.dispose();
    return env;
  }

  function makeBackdropTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#100e0b'; x.fillRect(0, 0, W, H);
    const g = x.createRadialGradient(W * 0.44, H * 0.36, 0, W * 0.44, H * 0.36, W * 0.60);
    g.addColorStop(0, 'rgba(96,84,66,0.95)');
    g.addColorStop(0.5, 'rgba(44,38,30,0.6)');
    g.addColorStop(1, 'rgba(13,11,9,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = makeBackdropTexture();
  scene.environment = makeStudioEnvironment(renderer);

  const BW = 5.0, BH = 2.9;
  const GX = 52, GY = 34;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const albedo = makeAlbedoTexture();
  blurHeight(1);
  const normalMap = makeNormalTexture(2.6);
  const roughnessMap = makeRoughnessTexture();
  [albedo, normalMap, roughnessMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    normalMap,
    normalScale: new THREE.Vector2(0.55, 0.55),
    roughnessMap,
    roughness: 1.0,
    metalness: 0.0,
    side: THREE.DoubleSide,
    envMapIntensity: 1.15,
    sheen: 0.6,
    sheenColor: new THREE.Color('#f3e6cd'),
    sheenRoughness: 0.62,
  });

  const flag = new THREE.Mesh(geo, mat);
  const rig = new THREE.Group();
  rig.add(flag);
  scene.add(rig);

  /* ---------------------------------------------------------- hardware -- */
  const brass = new THREE.MeshStandardMaterial({ color: 0xb98f47, metalness: 1.0, roughness: 0.32 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x8d8f95, metalness: 1.0, roughness: 0.28 });

  const HOIST_X = -BW / 2;
  const GROMMET_V = [0.09, 0.5, 0.91];       // down the hoist, in 0..1 of BH
  const grommets = GROMMET_V.map((v) => {
    const g = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.021, 12, 28), brass);
    g.position.set(HOIST_X + 0.05, BH / 2 - v * BH, 0);
    rig.add(g);
    return g;
  });

  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.042, BH * 1.5, 18),
    steel,
  );
  mast.position.set(HOIST_X - 0.16, -BH * 0.12, -0.04);
  rig.add(mast);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.072, 20, 14), brass);
  finial.position.set(HOIST_X - 0.16, -BH * 0.12 + BH * 0.75 + 0.05, -0.04);
  rig.add(finial);

  // The clips that carry the hoist grommets on the mast.
  grommets.forEach((g) => {
    const clip = new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.011, 10, 22), steel);
    clip.position.set(HOIST_X - 0.11, g.position.y, -0.02);
    clip.rotation.y = Math.PI / 2.4;
    rig.add(clip);
  });

  /* ------------------------------------------------------------ lights -- */
  scene.add(new THREE.HemisphereLight(0xcadcf2, 0x4a3d2c, 0.75));
  const key = new THREE.DirectionalLight(0xfff4e0, 2.5);
  key.position.set(2.6, 3.4, 3.0); scene.add(key);
  const bounce = new THREE.DirectionalLight(0xe6cfa4, 0.85);
  bounce.position.set(-3.4, -1.6, 2.0); scene.add(bounce);
  const back = new THREE.DirectionalLight(0xfff0d8, 1.5);
  back.position.set(-1.6, 1.4, -3.2); scene.add(back);

  /* ----------------------------------------------------------- physics --
     Pinned down the hoist instead of along the top, so the wave travels out
     to the fly and the free corners snap the way a flown flag does. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);
  const idx = (ix, iy) => ix + iy * (GX + 1);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let iy = 0; iy <= GY; iy++) pinned[idx(0, iy)] = 1;

  const restH = BW / GX, restV = BH / GY;
  const GRAV = -0.22, DAMP = 0.986, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    // Amplitude grows with distance from the hoist: the fly end does the work,
    // while a steady outward pull keeps the flag flown rather than limp.
    const reach = cx * (0.35 + 0.65 * cx);
    const gust = 0.78 + 0.26 * Math.sin(t * 0.53) + 0.14 * Math.sin(t * 1.47 + 0.9);
    const travel = t * 4.2 - cx * 6.6;
    const fz = (Math.sin(travel) + 0.38 * Math.sin(travel * 1.9 + cy * 2.6)) * 3.4 * reach * gust;
    const fy = Math.sin(travel * 0.8 + 1.2) * 0.85 * reach;
    const fx = 2.6 * reach * gust;
    return [fx, fy, fz];
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 4; it++) {
      for (let iy = 0; iy <= GY; iy++) for (let ix = 0; ix < GX; ix++) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      for (let iy = 0; iy < GY; iy++) for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
    }
    // The heading tape is sewn to a rigid edge; hold it exactly.
    for (let iy = 0; iy <= GY; iy++) {
      const i = idx(0, iy);
      for (let k = 0; k < 3; k++) { cur[i * 3 + k] = rest[i * 3 + k]; prev[i * 3 + k] = rest[i * 3 + k]; }
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* --------------------------------------------------------------- fit -- */
  let camera;
  function fit() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    const vFit = (BH * 1.12 / 2) / Math.tan(40 * Math.PI / 360);
    const hFit = ((BW + 1.0) / 2) / Math.tan(40 * Math.PI / 360) / aspect;
    camera.position.set(0.10, 0.06, Math.max(vFit, hFit) * 1.13 + 0.30);
    camera.lookAt(0.10, 0.0, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    // The mast leans a few degrees so the flag is never seen dead flat.
    rig.rotation.y = -0.16 + Math.sin(t * 0.11) * 0.045;
    rig.rotation.z = Math.sin(t * 0.08 + 0.7) * 0.012;
    camera.position.y = 0.06 + Math.sin(t * 0.15) * 0.06;
    camera.lookAt(0.10, 0.0, 0);
    renderer.render(scene, camera);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 160; s++) step(s * DT);
  t = 160 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
})();
<\/script>
</body>
</html>
`,Ry=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Iridescent Silk</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #05060d; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(78% 70% at 50% 44%, transparent 46%, rgba(3,4,10,.78) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  /* ---------------------------------------------------------------- maps --
     Everything the silk needs is drawn once into 2D canvases: a satin weave
     height field, the wordmark woven into it as raised warp floats, and a
     smooth film-thickness field that makes the interference colour travel. */

  const TW = 1600, TH = 1000;

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  // Wordmark drawn once as a white-on-black coverage mask.
  function makeWordmarkMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#000'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#fff';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.font = 'bold 96px Georgia, "Times New Roman", serif';
    x.fillText('W C', TW / 2, 208);
    x.font = '700 30px "Helvetica Neue", Arial, sans-serif';
    x.fillText('· A T E L I E R ·', TW / 2, 278);
    x.font = 'bold 150px Georgia, "Times New Roman", serif';
    x.fillText('WOVEN', TW / 2, 452);
    x.fillText('CLOTH', TW / 2, 600);
    x.font = '700 38px "Helvetica Neue", Arial, sans-serif';
    x.fillText('I R I D E S C E N T   S I L K', TW / 2, 718);
    // Hairline frame, woven as a raised rib rather than printed.
    x.strokeStyle = '#fff'; x.lineWidth = 7;
    x.strokeRect(64, 64, TW - 128, TH - 128);
    x.lineWidth = 3;
    x.strokeRect(92, 92, TW - 184, TH - 184);
    return x.getImageData(0, 0, TW, TH).data;
  }

  // Five-harness satin: long warp floats broken by a scattered binding point.
  function weaveHeight(x, y) {
    const p = 8;
    const cx = Math.floor(x / p), cy = Math.floor(y / p);
    const u = (x % p) / p, v = (y % p) / p;
    const binding = ((cx * 2 + cy) % 5) === 0;
    const profile = (t) => Math.sin(t * Math.PI);
    let h = binding ? profile(v) * 0.9 : profile(u);
    // Slubs: a few threads run thicker than their neighbours.
    h += Math.sin(cx * 12.9898) * Math.sin(cx * 4.1414 + 2.3) * 0.16;
    h += Math.sin(cy * 7.233 + 1.7) * 0.06;
    return h;
  }

  function valueNoise(seed) {
    const G = 64, grid = new Float32Array(G * G);
    let s = seed;
    const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    for (let i = 0; i < G * G; i++) grid[i] = rnd();
    const smooth = (t) => t * t * (3 - 2 * t);
    return (u, v) => {
      const fx = u * G, fy = v * G;
      const ix = Math.floor(fx), iy = Math.floor(fy);
      const tx = smooth(fx - ix), ty = smooth(fy - iy);
      const at = (a, b) => grid[((b % G) + G) % G * G + ((a % G) + G) % G];
      const a = at(ix, iy), b = at(ix + 1, iy), c = at(ix, iy + 1), d = at(ix + 1, iy + 1);
      return (a + (b - a) * tx) + ((c + (d - c) * tx) - (a + (b - a) * tx)) * ty;
    };
  }

  const mask = makeWordmarkMask();

  // One pass builds the height field; albedo, normal and roughness share it.
  const height = new Float32Array(TW * TH);
  for (let y = 0; y < TH; y++) {
    for (let x = 0; x < TW; x++) {
      const i = y * TW + x;
      const m = mask[i * 4] / 255;
      // Inside a letter the warp floats ride higher and longer.
      height[i] = weaveHeight(x, y) * (1 - m * 0.30) + m * 1.15;
    }
  }

  function blurHeight(passes) {
    const tmp = new Float32Array(TW * TH);
    for (let n = 0; n < passes; n++) {
      for (let y = 0; y < TH; y++) {
        const row = y * TW;
        for (let x = 0; x < TW; x++) {
          const a = height[row + (x > 0 ? x - 1 : x)];
          const b = height[row + x];
          const c = height[row + (x < TW - 1 ? x + 1 : x)];
          tmp[row + x] = (a + b + b + c) * 0.25;
        }
      }
      for (let x = 0; x < TW; x++) {
        for (let y = 0; y < TH; y++) {
          const a = tmp[(y > 0 ? y - 1 : y) * TW + x];
          const b = tmp[y * TW + x];
          const c = tmp[(y < TH - 1 ? y + 1 : y) * TW + x];
          height[y * TW + x] = (a + b + b + c) * 0.25;
        }
      }
    }
  }

  function makeNormalTexture(strength) {
    const s = surface(TW, TH);
    const img = s.ctx.createImageData(TW, TH), d = img.data;
    for (let y = 0; y < TH; y++) {
      const yp = y > 0 ? y - 1 : y, yn = y < TH - 1 ? y + 1 : y;
      for (let x = 0; x < TW; x++) {
        const xp = x > 0 ? x - 1 : x, xn = x < TW - 1 ? x + 1 : x;
        const dx = (height[y * TW + xp] - height[y * TW + xn]) * strength;
        const dy = (height[yp * TW + x] - height[yn * TW + x]) * strength;
        const len = Math.sqrt(dx * dx + dy * dy + 1);
        const o = (y * TW + x) * 4;
        d[o] = (dx / len * 0.5 + 0.5) * 255;
        d[o + 1] = (dy / len * 0.5 + 0.5) * 255;
        d[o + 2] = (1 / len * 0.5 + 0.5) * 255;
        d[o + 3] = 255;
      }
    }
    s.ctx.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  function makeAlbedoTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const g = x.createLinearGradient(0, 0, TW * 0.35, TH);
    g.addColorStop(0, '#161033');
    g.addColorStop(0.45, '#0d1030');
    g.addColorStop(1, '#100b26');
    x.fillStyle = g; x.fillRect(0, 0, TW, TH);
    const img = x.getImageData(0, 0, TW, TH), d = img.data;
    for (let i = 0; i < TW * TH; i++) {
      const m = mask[i * 4] / 255;
      const shade = 0.88 + height[i] * 0.10;
      const o = i * 4;
      d[o] = Math.min(255, d[o] * shade + m * 96);
      d[o + 1] = Math.min(255, d[o + 1] * shade + m * 78);
      d[o + 2] = Math.min(255, d[o + 2] * shade + m * 118);
    }
    x.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // Satin floats inside the letters read glossier than the matte ground.
  function makeRoughnessTexture() {
    const s = surface(TW, TH), x = s.ctx;
    const img = x.createImageData(TW, TH), d = img.data;
    const grain = valueNoise(9271);
    for (let y = 0; y < TH; y++) {
      for (let xx = 0; xx < TW; xx++) {
        const i = y * TW + xx;
        const m = mask[i * 4] / 255;
        const n = grain(xx / TW * 5, y / TH * 5);
        let r = 0.30 - height[i] * 0.07 + n * 0.09 - m * 0.16;
        r = Math.max(0.04, Math.min(0.8, r));
        const o = i * 4;
        d[o] = d[o + 1] = d[o + 2] = r * 255; d[o + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  // Film thickness drives the interference hue; broad and smooth so the
  // colour sweeps across the folds instead of flickering per-thread.
  function makeThicknessTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    const img = x.createImageData(W, H), d = img.data;
    const a = valueNoise(4471), b = valueNoise(88231);
    for (let y = 0; y < H; y++) {
      for (let xx = 0; xx < W; xx++) {
        const u = xx / W, v = y / H;
        const n = a(u * 3.4, v * 2.4) * 0.58 + b(u * 8.5, v * 5.6) * 0.42;
        const o = (y * W + xx) * 4;
        const sweep = 0.5 + 0.42 * Math.sin(u * Math.PI * 2 - v * 1.15);
        const t = Math.max(0, Math.min(1, sweep + (n - 0.5) * 0.26));
        d[o] = d[o + 1] = d[o + 2] = t * 255; d[o + 3] = 255;
      }
    }
    x.putImageData(img, 0, 0);
    return new THREE.CanvasTexture(s.canvas);
  }

  /* ------------------------------------------------------- environment --
     A small studio painted into an equirectangular canvas: three softboxes
     of different colour temperature, which is what the iridescent film has
     to break apart into colour. */
  function makeStudioEnvironment(renderer) {
    const W = 1024, H = 512, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#0a0c1c');
    g.addColorStop(0.5, '#05060e');
    g.addColorStop(1, '#02030a');
    x.fillStyle = g; x.fillRect(0, 0, W, H);

    const box = (cx, cy, w, h, color, alpha) => {
      const grad = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h));
      grad.addColorStop(0, color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      x.globalAlpha = alpha;
      x.fillStyle = grad;
      x.save(); x.translate(cx, cy); x.scale(w / Math.max(w, h), h / Math.max(w, h));
      x.beginPath(); x.arc(0, 0, Math.max(w, h), 0, Math.PI * 2); x.fill();
      x.restore();
      x.globalAlpha = 1;
    };

    box(W * 0.24, H * 0.20, 300, 120, '#fff3e2', 1);      // warm key overhead
    box(W * 0.74, H * 0.34, 230, 190, '#7fd8ff', 0.95);   // cool side fill
    box(W * 0.52, H * 0.86, 340, 130, '#ff5fa8', 0.55);   // magenta bounce
    box(W * 0.02, H * 0.55, 160, 220, '#9d7bff', 0.5);    // violet rim

    const tex = new THREE.CanvasTexture(s.canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
    tex.dispose();
    return env;
  }

  function makeBackdropTexture() {
    const W = 512, H = 320, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#04050c'; x.fillRect(0, 0, W, H);
    const g = x.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, W * 0.62);
    g.addColorStop(0, 'rgba(58,42,120,0.85)');
    g.addColorStop(0.45, 'rgba(22,20,58,0.55)');
    g.addColorStop(1, 'rgba(3,4,11,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.48;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = makeBackdropTexture();
  scene.environment = makeStudioEnvironment(renderer);

  const BW = 4.7, BH = 2.8;
  const GX = 56, GY = 40;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const albedo = makeAlbedoTexture();
  blurHeight(2);
  const normalMap = makeNormalTexture(2.4);
  const roughnessMap = makeRoughnessTexture();
  const thicknessMap = makeThicknessTexture();
  thicknessMap.wrapS = THREE.RepeatWrapping;
  [albedo, normalMap, roughnessMap, thicknessMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    normalMap,
    normalScale: new THREE.Vector2(0.24, 0.24),
    roughnessMap,
    roughness: 1.0,
    metalness: 0.45,
    side: THREE.DoubleSide,
    envMapIntensity: 2.6,
    iridescence: 1.0,
    iridescenceIOR: 2.2,
    iridescenceThicknessRange: [300, 820],
    iridescenceThicknessMap: thicknessMap,
    sheen: 0.3,
    sheenColor: new THREE.Color('#a9d9ff'),
    sheenRoughness: 0.32,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  scene.add(new THREE.AmbientLight(0x3b3676, 0.55));
  const key = new THREE.DirectionalLight(0xffeede, 2.1);
  key.position.set(-3.1, 3.2, 3.4); scene.add(key);
  const rimCool = new THREE.DirectionalLight(0x3fbcff, 2.9);
  rimCool.position.set(3.6, 0.6, 2.2); scene.add(rimCool);
  const rimWarm = new THREE.DirectionalLight(0xff3d8e, 2.4);
  rimWarm.position.set(0.4, -2.6, 1.6); scene.add(rimWarm);
  const fill = new THREE.DirectionalLight(0x9d7bff, 1.6);
  fill.position.set(-3.2, -1.0, 2.6); scene.add(fill);

  /* ----------------------------------------------------------- physics --
     The parent's Verlet sheet, run finer and slower so the specular travels
     over the folds instead of chattering. The pinned top row is driven on a
     shallow standing wave, which is what sets the vertical folds. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let ix = 0; ix <= GX; ix++) pinned[ix] = 1;

  const idx = (ix, iy) => ix + iy * (GX + 1);
  const restH = BW / GX, restV = BH / GY;
  const GRAV = -2.15, DAMP = 0.989, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    const travel = t * 1.15 - cy * 3.4;
    const gust = 0.52 + 0.34 * Math.sin(t * 0.44) + 0.16 * Math.sin(t * 1.31 + 1.1);
    const amp = 2.15 * cy;
    const fz = (Math.sin(travel + cx * 2.6) + 0.46 * Math.sin(travel * 1.55 + cx * 5.1)) * amp * gust;
    const fx = Math.sin(t * 0.6 + cy * 1.9) * 0.9 * cy * (cx - 0.5);
    return [fx, -0.3 * cy, fz];
  }

  // Standing folds: the rail the silk hangs from breathes in and out.
  function railZ(ix, t) {
    const cx = ix / GX;
    return Math.sin(cx * Math.PI * 3.0 + t * 0.22) * 0.15
         + Math.sin(cx * Math.PI * 5.0 - t * 0.15) * 0.05;
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 4; it++) {
      for (let iy = 0; iy <= GY; iy++) for (let ix = 0; ix < GX; ix++) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      for (let iy = 0; iy < GY; iy++) for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
    }
    for (let ix = 0; ix <= GX; ix++) {
      const i = ix, z = railZ(ix, t);
      cur[i * 3] = prev[i * 3] = rest[i * 3];
      cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1];
      cur[i * 3 + 2] = prev[i * 3 + 2] = z;
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* -------------------------------------------------------------- bloom --
     Scene into a half-float target, a bright pass at quarter resolution,
     two separable blurs, then one composite that tone-maps to the screen. */
  const rtScene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
  const rtA = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  const rtB = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
  [rtScene, rtA, rtB].forEach((rt) => {
    rt.texture.minFilter = THREE.LinearFilter;
    rt.texture.magFilter = THREE.LinearFilter;
    rt.texture.generateMipmaps = false;
  });

  const quadGeo = new THREE.PlaneGeometry(2, 2);
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quadScene = new THREE.Scene();
  const quad = new THREE.Mesh(quadGeo, null);
  quadScene.add(quad);

  const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

  const brightMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, threshold: { value: 0.72 } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform float threshold; varying vec2 vUv;',
      'void main(){',
      '  vec3 c = texture2D(tDiffuse, vUv).rgb;',
      '  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));',
      '  float k = max(l - threshold, 0.0) / max(l, 1e-4);',
      '  gl_FragColor = vec4(c * k, 1.0);',
      '}',
    ].join('\\n'),
  });

  const blurMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, direction: { value: new THREE.Vector2(1, 0) } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform vec2 direction; varying vec2 vUv;',
      'void main(){',
      '  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.2270270270;',
      '  sum += texture2D(tDiffuse, vUv + direction * 1.3846153846).rgb * 0.3162162162;',
      '  sum += texture2D(tDiffuse, vUv - direction * 1.3846153846).rgb * 0.3162162162;',
      '  sum += texture2D(tDiffuse, vUv + direction * 3.2307692308).rgb * 0.0702702703;',
      '  sum += texture2D(tDiffuse, vUv - direction * 3.2307692308).rgb * 0.0702702703;',
      '  gl_FragColor = vec4(sum, 1.0);',
      '}',
    ].join('\\n'),
  });

  const compositeMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: null }, tBloom: { value: null }, strength: { value: 0.62 } },
    vertexShader: VERT,
    fragmentShader: [
      'uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float strength; varying vec2 vUv;',
      'void main(){',
      '  vec3 base = texture2D(tDiffuse, vUv).rgb;',
      '  vec3 glow = texture2D(tBloom, vUv).rgb;',
      '  gl_FragColor = vec4(base + glow * strength, 1.0);',
      '  #include <tonemapping_fragment>',
      '  #include <colorspace_fragment>',
      '}',
    ].join('\\n'),
  });

  function blit(material, target) {
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(quadScene, quadCam);
  }

  /* --------------------------------------------------------------- fit -- */
  let camera, cw = 1, ch = 1;
  function fit() {
    cw = window.innerWidth; ch = window.innerHeight;
    renderer.setSize(cw, ch, false);
    const dpr = renderer.getPixelRatio();
    const pw = Math.max(2, Math.floor(cw * dpr)), ph = Math.max(2, Math.floor(ch * dpr));
    rtScene.setSize(pw, ph);
    rtA.setSize(Math.max(2, pw >> 2), Math.max(2, ph >> 2));
    rtB.setSize(Math.max(2, pw >> 2), Math.max(2, ph >> 2));
    const aspect = cw / ch;
    camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    const vFit = (BH / 2) / Math.tan(40 * Math.PI / 360);
    const hFit = (BW / 2) / Math.tan(40 * Math.PI / 360) / aspect;
    camera.position.set(0, 0.02, Math.max(vFit, hFit) * 0.98 + 0.24);
    camera.lookAt(0, -0.04, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    thicknessMap.offset.x = (t * 0.028) % 1;
    // Slow parallax so the highlight sweeps rather than sits.
    const base = camera.position.z;
    camera.position.x = Math.sin(t * 0.13) * 0.30;
    camera.position.y = 0.02 + Math.sin(t * 0.17 + 1.4) * 0.12;
    camera.position.z = base;
    camera.lookAt(0, -0.04, 0);

    renderer.setRenderTarget(rtScene);
    renderer.clear();
    renderer.render(scene, camera);

    brightMat.uniforms.tDiffuse.value = rtScene.texture;
    blit(brightMat, rtA);
    blurMat.uniforms.tDiffuse.value = rtA.texture;
    blurMat.uniforms.direction.value.set(1 / rtA.width, 0);
    blit(blurMat, rtB);
    blurMat.uniforms.tDiffuse.value = rtB.texture;
    blurMat.uniforms.direction.value.set(0, 1 / rtA.height);
    blit(blurMat, rtA);

    compositeMat.uniforms.tDiffuse.value = rtScene.texture;
    compositeMat.uniforms.tBloom.value = rtA.texture;
    renderer.setRenderTarget(null);
    blit(compositeMat, null);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  // Deterministic capture hook — render one frame at an exact time.
  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 150; s++) step(s * DT);
  t = 150 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
})();
<\/script>
</body>
</html>
`,_y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Woven Cloth · Washi Noren</title>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #0d0a07; }
  #cloth { display: block; width: 100%; height: 100%; }
  #vignette {
    position: fixed; inset: 0; pointer-events: none;
    background: radial-gradient(80% 74% at 50% 44%, transparent 46%, rgba(10,7,5,.80) 100%);
  }
</style>
</head>
<body>
<canvas id="cloth"></canvas>
<div id="vignette"></div>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const canvas = document.getElementById('cloth');
  if (!window.THREE) return;

  const TW = 1500, TH = 980;
  const PANELS = 3;
  const BAND = 0.15;            // the uncut sleeve the rod runs through
  const SLIT_U = [1 / 3, 2 / 3];

  // A small deterministic generator, so the paper's fibres and torn edge are
  // the same every load — the deckle has to match the alpha mask exactly.
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s ^= s << 13; s >>>= 0;
      s ^= s >> 17;
      s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  function surface(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { canvas: c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  }

  /* ------------------------------------------------------------- deckle --
     One torn profile, sampled by both the alpha mask and the shading, so the
     edge reads as a genuine hand-made sheet rather than a cropped rectangle. */
  const deckleRand = rng(20260826);
  const deckleLow = new Float32Array(TW);
  {
    const control = [];
    for (let i = 0; i <= 24; i++) control.push(deckleRand());
    for (let x = 0; x < TW; x++) {
      const f = (x / TW) * 24;
      const i = Math.floor(f), t = f - i;
      const smooth = t * t * (3 - 2 * t);
      const a = control[i], b = control[Math.min(24, i + 1)];
      const base = a + (b - a) * smooth;
      const fine = Math.sin(x * 0.19) * 0.16 + Math.sin(x * 0.061 + 1.7) * 0.24;
      deckleLow[x] = TH - 14 - (base * 26 + fine * 12);
    }
  }

  function makeAlphaMask() {
    const s = surface(TW, TH), x = s.ctx;
    x.fillStyle = '#fff'; x.fillRect(0, 0, TW, TH);
    x.fillStyle = '#000';

    // Slits between the panels, stopping short of the sleeve.
    const slitW = 22, bandPx = TH * BAND;
    SLIT_U.forEach((u) => x.fillRect(u * TW - slitW / 2, bandPx, slitW, TH - bandPx));

    // Torn lower edge.
    x.beginPath();
    x.moveTo(0, TH);
    for (let px = 0; px < TW; px++) x.lineTo(px, deckleLow[px]);
    x.lineTo(TW, TH);
    x.closePath();
    x.fill();

    // Softly feathered outer edges, as a couched sheet dries.
    const side = rng(771);
    for (let e = 0; e < 2; e++) {
      x.beginPath();
      x.moveTo(e ? TW : 0, 0);
      for (let py = 0; py <= TH; py += 6) {
        const w = 6 + side() * 9;
        x.lineTo(e ? TW - w : w, py);
      }
      x.lineTo(e ? TW : 0, TH);
      x.closePath();
      x.fill();
    }
    return s;
  }

  /* ---------------------------------------------------------- the cloth --
     Indigo-dyed kozo: vat unevenness, long fibres, the laid and chain lines
     the papermaking screen leaves, and a resist-dyed crest and lettering. */
  function drawWeaveCrest(x, cx, cy, R) {
    const cells = 6, step = (R * 1.86) / cells, origin = -R * 0.93;
    x.save();
    x.beginPath(); x.arc(cx, cy, R * 0.86, 0, Math.PI * 2); x.clip();
    x.fillStyle = '#f3ece0';
    for (let a = 0; a < cells; a++) {
      for (let b = 0; b < cells; b++) {
        if ((a + b) % 2) continue;
        x.fillRect(cx + origin + a * step, cy + origin + b * step, step + 0.5, step + 0.5);
      }
    }
    x.restore();
    x.strokeStyle = '#f3ece0';
    x.lineWidth = R * 0.10;
    x.beginPath(); x.arc(cx, cy, R * 0.96, 0, Math.PI * 2); x.stroke();
  }

  function verticalWord(x, word, cx, top, size, step) {
    x.font = 'bold ' + size + 'px Georgia, "Times New Roman", serif';
    x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let i = 0; i < word.length; i++) x.fillText(word[i], cx, top + i * step);
  }

  function makeClothCanvas() {
    const s = surface(TW, TH), x = s.ctx;

    // Indigo vat: deeper where the cloth was dipped longest.
    const g = x.createLinearGradient(0, 0, 0, TH);
    g.addColorStop(0, '#284a6c');
    g.addColorStop(0.42, '#203d5e');
    g.addColorStop(1, '#17304e');
    x.fillStyle = g; x.fillRect(0, 0, TW, TH);

    const cloud = rng(4471);
    for (let i = 0; i < 26; i++) {
      const cx = cloud() * TW, cy = cloud() * TH, r = 120 + cloud() * 320;
      const light = cloud() > 0.5;
      const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      rg.addColorStop(0, light ? 'rgba(96,132,168,0.13)' : 'rgba(9,22,40,0.16)');
      rg.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = rg; x.fillRect(cx - r, cy - r, r * 2, r * 2);
    }

    // Laid lines from the bamboo screen, then the heavier chain lines.
    x.strokeStyle = 'rgba(180,205,228,0.045)';
    x.lineWidth = 1;
    for (let px = 0; px < TW; px += 4) { x.beginPath(); x.moveTo(px + 0.5, 0); x.lineTo(px + 0.5, TH); x.stroke(); }
    x.strokeStyle = 'rgba(196,218,238,0.10)';
    x.lineWidth = 2;
    for (let py = 26; py < TH; py += 38) { x.beginPath(); x.moveTo(0, py + 0.5); x.lineTo(TW, py + 0.5); x.stroke(); }

    // Kozo fibres: long, mostly aligned, a few standing proud of the sheet.
    const fib = rng(90210);
    for (let i = 0; i < 2200; i++) {
      const fx = fib() * TW, fy = fib() * TH;
      const len = 30 + fib() * 150;
      const ang = (fib() - 0.5) * 0.9 + (fib() > 0.82 ? Math.PI / 2 : 0);
      const bow = (fib() - 0.5) * 26;
      const pale = fib();
      x.strokeStyle = pale > 0.3
        ? 'rgba(214,232,247,' + (0.022 + fib() * 0.048) + ')'
        : 'rgba(10,20,36,' + (0.04 + fib() * 0.07) + ')';
      x.lineWidth = 0.7 + fib() * 1.9;
      x.beginPath();
      x.moveTo(fx, fy);
      x.quadraticCurveTo(
        fx + Math.cos(ang) * len * 0.5 + bow, fy + Math.sin(ang) * len * 0.5 - bow,
        fx + Math.cos(ang) * len, fy + Math.sin(ang) * len,
      );
      x.stroke();
    }

    // Katazome: a resist-dyed frame inside each panel.
    const panelW = TW / PANELS;
    x.strokeStyle = 'rgba(243,236,224,0.72)';
    for (let k = 0; k < PANELS; k++) {
      const x0 = k * panelW + 34, w = panelW - 68;
      x.lineWidth = 5;
      x.strokeRect(x0, TH * BAND + 34, w, TH - TH * BAND - 118);
      x.lineWidth = 2;
      x.strokeRect(x0 + 13, TH * BAND + 47, w - 26, TH - TH * BAND - 144);
    }

    // The sleeve the rod runs through, and its shadow on the cloth below.
    x.fillStyle = 'rgba(8,18,34,0.30)';
    x.fillRect(0, 0, TW, TH * BAND);
    const sh = x.createLinearGradient(0, TH * BAND, 0, TH * BAND + 54);
    sh.addColorStop(0, 'rgba(6,14,28,0.42)');
    sh.addColorStop(1, 'rgba(6,14,28,0)');
    x.fillStyle = sh; x.fillRect(0, TH * BAND, TW, 54);
    x.strokeStyle = 'rgba(243,236,224,0.5)';
    x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(0, TH * BAND); x.lineTo(TW, TH * BAND); x.stroke();

    x.fillStyle = '#f3ece0';
    verticalWord(x, 'WOVEN', panelW * 0.5, TH * 0.34, 96, 116);
    drawWeaveCrest(x, panelW * 1.5, TH * 0.53, 158);
    verticalWord(x, 'CLOTH', panelW * 2.5, TH * 0.34, 96, 116);

    // Vermilion seal, stamped at the foot of the centre panel.
    const S = 96, sx = panelW * 1.5 - S / 2, sy = TH * 0.828;
    x.fillStyle = '#a8342a';
    x.fillRect(sx, sy, S, S);
    x.strokeStyle = '#f3ece0';
    x.lineWidth = 4;
    x.strokeRect(sx + 11, sy + 11, S - 22, S - 22);
    x.fillStyle = '#f3ece0';
    for (let k = 0; k < 3; k++) x.fillRect(sx + 23 + k * 18, sy + 23, 8, S - 46);
    x.fillRect(sx + 23, sy + 38, S - 46, 8);
    x.fillRect(sx + 23, sy + 60, S - 46, 8);

    return s;
  }

  function makeWoodTexture() {
    const W = 512, H = 96, s = surface(W, H), x = s.ctx;
    const g = x.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#a1764a');
    g.addColorStop(0.45, '#7d5533');
    g.addColorStop(1, '#563820');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    const grain = rng(3312);
    for (let i = 0; i < 160; i++) {
      const y = grain() * H;
      x.strokeStyle = 'rgba(28,17,8,' + (0.05 + grain() * 0.16) + ')';
      x.lineWidth = 0.6 + grain() * 1.8;
      x.beginPath();
      x.moveTo(0, y);
      for (let px = 0; px <= W; px += 32) x.lineTo(px, y + Math.sin(px * 0.02 + i) * 2.4);
      x.stroke();
    }
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.set(3, 1);
    return tex;
  }

  // A shoji screen behind the noren gives the paper something to glow with.
  function makeShojiTexture() {
    const W = 768, H = 512, s = surface(W, H), x = s.ctx;
    x.fillStyle = '#1a1109'; x.fillRect(0, 0, W, H);
    const glow = x.createRadialGradient(W * 0.5, H * 0.44, 0, W * 0.5, H * 0.44, W * 0.52);
    glow.addColorStop(0, '#ffdda4');
    glow.addColorStop(0.40, '#a97c42');
    glow.addColorStop(0.76, '#341d0c');
    glow.addColorStop(1, '#150d06');
    x.fillStyle = glow; x.fillRect(0, 0, W, H);
    // Kumiko lattice, softened so it stays a suggestion behind the cloth.
    if ('filter' in x) x.filter = 'blur(7px)';
    x.strokeStyle = 'rgba(46,28,13,0.20)';
    x.lineWidth = 3;
    for (let px = 54; px < W; px += 128) { x.beginPath(); x.moveTo(px, 0); x.lineTo(px, H); x.stroke(); }
    for (let py = 46; py < H; py += 118) { x.beginPath(); x.moveTo(0, py); x.lineTo(W, py); x.stroke(); }
    if ('filter' in x) x.filter = 'none';
    const tex = new THREE.CanvasTexture(s.canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------------------------------------- scene -- */
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c0906);

  const shoji = new THREE.Mesh(
    new THREE.PlaneGeometry(13, 8.4),
    new THREE.MeshBasicMaterial({ map: makeShojiTexture() }),
  );
  shoji.position.set(0, 0, -2.4);
  scene.add(shoji);

  const BW = 4.4, BH = 2.9;
  const GX = 60, GY = 40;
  const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);

  const clothCanvas = makeClothCanvas();
  const albedo = new THREE.CanvasTexture(clothCanvas.canvas);
  albedo.colorSpace = THREE.SRGBColorSpace;
  const alphaMap = new THREE.CanvasTexture(makeAlphaMask().canvas);
  [albedo, alphaMap].forEach((t) => { t.anisotropy = maxAniso; });

  const mat = new THREE.MeshPhysicalMaterial({
    map: albedo,
    alphaMap,
    alphaTest: 0.5,
    transparent: false,
    side: THREE.DoubleSide,
    roughness: 0.92,
    metalness: 0.0,
    transmission: 0.82,
    thickness: 0.10,
    ior: 1.36,
    attenuationColor: new THREE.Color('#9dc0dd'),
    attenuationDistance: 3.0,
    sheen: 0.9,
    sheenColor: new THREE.Color('#d8e6f2'),
    sheenRoughness: 0.85,
  });

  const noren = new THREE.Mesh(geo, mat);
  scene.add(noren);

  /* ------------------------------------------------------------ fittings */
  const wood = new THREE.MeshStandardMaterial({ map: makeWoodTexture(), roughness: 0.66, metalness: 0.0 });
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.062, 0.062, BW + 0.9, 20), wood);
  rod.rotation.z = Math.PI / 2;
  rod.position.set(0, BH / 2 + 0.045, 0.02);
  scene.add(rod);
  [-1, 1].forEach((side) => {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.082, 18, 12), wood);
    cap.position.set(side * (BW + 0.9) / 2, BH / 2 + 0.045, 0.02);
    scene.add(cap);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 3.4, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.9 }));
    cord.position.set(side * (BW + 0.72) / 2, BH / 2 + 1.75, 0.02);
    scene.add(cord);
  });

  /* ------------------------------------------------------------ lights -- */
  scene.add(new THREE.AmbientLight(0x4a3a28, 0.8));
  const lantern = new THREE.DirectionalLight(0xffd9a0, 3.6);   // through the shoji
  lantern.position.set(-0.4, 0.9, -3.2); scene.add(lantern);
  const key = new THREE.DirectionalLight(0xffe9cc, 2.1);
  key.position.set(-2.6, 2.4, 2.6); scene.add(key);
  const fill = new THREE.DirectionalLight(0x94b6d8, 0.5);
  fill.position.set(3.0, -1.0, 2.0); scene.add(fill);

  /* ----------------------------------------------------------- physics --
     One sheet, but the horizontal links are cut below the sleeve at each
     slit, so the three panels hang and sway as their own pieces of cloth. */
  const pos = geo.attributes.position;
  const N = (GX + 1) * (GY + 1);
  const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
  const pinned = new Uint8Array(N);
  const idx = (ix, iy) => ix + iy * (GX + 1);

  for (let i = 0; i < N; i++) {
    const ax = pos.getX(i), ay = pos.getY(i);
    cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
    cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
    cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
  }
  for (let ix = 0; ix <= GX; ix++) pinned[ix] = 1;

  const BAND_ROWS = Math.round(GY * BAND);
  const SLIT_IX = SLIT_U.map((u) => Math.round(u * GX));
  const panelOf = (ix) => (ix < SLIT_IX[0] ? 0 : ix < SLIT_IX[1] ? 1 : 2);
  const linked = (ix, iy) => !(iy > BAND_ROWS && SLIT_IX.indexOf(ix + 1) !== -1);

  const restH = BW / GX, restV = BH / GY;
  const restD = Math.sqrt(restH * restH + restV * restV);
  const GRAV = -1.65, DAMP = 0.986, DT = 0.016;

  function wind(ix, iy, t) {
    const cx = ix / GX, cy = iy / GY;
    // An indoor draft: each panel catches it on its own beat.
    const ph = panelOf(ix) * 2.1;
    const gust = 0.40 + 0.28 * Math.sin(t * 0.37 + ph * 0.6) + 0.15 * Math.sin(t * 0.93 + ph);
    const travel = t * 1.2 - cy * 2.2 + ph;
    const amp = 1.5 * cy;
    const fz = (Math.sin(travel) + 0.35 * Math.sin(travel * 1.8 + cx * 3.4)) * amp * gust;
    const fx = Math.sin(t * 0.44 + ph) * 0.20 * cy;
    return [fx, -0.18 * cy, fz];
  }

  function solve(a, b, rl) {
    const ax = cur[a * 3], ay = cur[a * 3 + 1], az = cur[a * 3 + 2];
    let dx = cur[b * 3] - ax, dy = cur[b * 3 + 1] - ay, dz = cur[b * 3 + 2] - az;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
    const diff = (d - rl) / d * 0.5;
    dx *= diff; dy *= diff; dz *= diff;
    const pa = pinned[a], pb = pinned[b];
    if (!pa && !pb) {
      cur[a * 3] += dx; cur[a * 3 + 1] += dy; cur[a * 3 + 2] += dz;
      cur[b * 3] -= dx; cur[b * 3 + 1] -= dy; cur[b * 3 + 2] -= dz;
    } else if (pa && !pb) { cur[b * 3] -= dx * 2; cur[b * 3 + 1] -= dy * 2; cur[b * 3 + 2] -= dz * 2; }
    else if (!pa && pb) { cur[a * 3] += dx * 2; cur[a * 3 + 1] += dy * 2; cur[a * 3 + 2] += dz * 2; }
  }

  function step(t) {
    for (let iy = 0; iy <= GY; iy++) {
      for (let ix = 0; ix <= GX; ix++) {
        const i = idx(ix, iy);
        if (pinned[i]) continue;
        const f = wind(ix, iy, t);
        for (let k = 0; k < 3; k++) {
          const j = i * 3 + k;
          const a = k === 0 ? f[0] : k === 1 ? f[1] + GRAV : f[2];
          const v = (cur[j] - prev[j]) * DAMP;
          prev[j] = cur[j];
          cur[j] = cur[j] + v + a * DT * DT;
        }
      }
    }
    for (let it = 0; it < 3; it++) {
      for (let iy = 0; iy <= GY; iy++) {
        for (let ix = 0; ix < GX; ix++) if (linked(ix, iy)) solve(idx(ix, iy), idx(ix + 1, iy), restH);
      }
      for (let iy = 0; iy < GY; iy++) {
        for (let ix = 0; ix <= GX; ix++) solve(idx(ix, iy), idx(ix, iy + 1), restV);
      }
      for (let iy = 0; iy < GY; iy++) {
        for (let ix = 0; ix < GX; ix++) {
          if (!linked(ix, iy) || !linked(ix, iy + 1)) continue;
          solve(idx(ix, iy), idx(ix + 1, iy + 1), restD);
          solve(idx(ix + 1, iy), idx(ix, iy + 1), restD);
        }
      }
    }
    for (let ix = 0; ix <= GX; ix++) {
      const i = ix;
      for (let k = 0; k < 3; k++) { cur[i * 3 + k] = rest[i * 3 + k]; prev[i * 3 + k] = rest[i * 3 + k]; }
    }
  }

  function commit() {
    for (let i = 0; i < N; i++) pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  /* --------------------------------------------------------------- fit -- */
  let camera;
  function fit() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera = new THREE.PerspectiveCamera(38, aspect, 0.1, 100);
    const vFit = (BH * 1.12 / 2) / Math.tan(38 * Math.PI / 360);
    const hFit = ((BW + 1.2) / 2) / Math.tan(38 * Math.PI / 360) / aspect;
    camera.position.set(0, 0.06, Math.max(vFit, hFit) * 1.02 + 0.3);
    camera.lookAt(0, -0.02, 0);
  }
  window.addEventListener('resize', fit);
  fit();

  function draw(t) {
    camera.position.x = Math.sin(t * 0.1) * 0.20;
    camera.position.y = 0.06 + Math.sin(t * 0.14 + 1.1) * 0.07;
    camera.lookAt(0, -0.02, 0);
    renderer.render(scene, camera);
  }

  let running = false, raf = 0, t = 0;
  function loop() {
    if (!running) return;
    t += DT;
    step(t); commit(); draw(t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (running) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  window.__seek = (time) => {
    const target = Math.max(0, time);
    if (target < t) { t = 0; for (let i = 0; i < N * 3; i++) { cur[i] = rest[i]; prev[i] = rest[i]; } }
    while (t < target - DT * 0.5) { t += DT; step(t); }
    commit(); draw(t);
  };

  for (let s = 0; s < 180; s++) step(s * DT);
  t = 180 * DT;
  if (reduce) {
    commit(); draw(t);
  } else {
    start();
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  }
})();
<\/script>
</body>
</html>
`,Ny={iridescent:{title:"Woven Cloth iridescent silk",background:"#05060d",source:Ry},atelier:{title:"Woven Cloth atelier flag",background:"#12100d",source:Ay},washi:{title:"Woven Cloth washi noren",background:"#0d0a07",source:_y}};function Ro(E,w,U){return Math.min(U,Math.max(w,E))}function Oy({definition:E,hue:w=on.hue,saturation:U=on.saturation,brightness:y=on.brightness,className:X,style:Q}){const vt=Ro(w,-180,180),Tt=Ro(U,0,2),yt=Ro(y,.35,1.65),bt=vt===0&&Tt===1&&yt===1?void 0:`hue-rotate(${vt}deg) saturate(${Tt}) brightness(${yt})`;return Bi.jsx("iframe",{className:X,title:E.title,srcDoc:E.source,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:E.background,filter:bt,...Q}})}function Dy({variant:E="woven-cloth",...w}){const U=rn.useMemo(()=>E==="woven-cloth"?void 0:Ny[E]??void 0,[E]);return U?rn.createElement(Oy,{...w,key:E,definition:U}):Bi.jsx(zy,{...w})}function Cy(){const[E,w]=rn.useState(!1);return rn.useEffect(()=>{const U=window.requestAnimationFrame(()=>w(!0)),y=window.setTimeout(()=>window.location.assign("/app"),6200);return()=>{window.cancelAnimationFrame(U),window.clearTimeout(y)}},[]),Ht.createElement("main",{className:`welcome-shell${E?" is-ready":""}`},Ht.createElement("div",{className:"stage","aria-label":"VibeCheck Cinema is opening"},Ht.createElement("div",{className:"flag-pole","aria-hidden":"true"}),Ht.createElement("div",{className:"flag"},Ht.createElement(Dy,{variant:"washi",hue:-6,saturation:.88,brightness:.72,className:"stage__cloth",style:{position:"absolute",inset:0,width:"100%",height:"100%"}}),Ht.createElement("div",{className:"flag__shade","aria-hidden":"true"}),Ht.createElement("div",{className:"flag__copy"},Ht.createElement("span",{className:"flag__eyebrow"},"A living movie shelf"),Ht.createElement("h1",null,"VibeCheck",Ht.createElement("br",null),Ht.createElement("em",null,"Cinema")),Ht.createElement("span",{className:"flag__status"},"Opening your collection")))),Ht.createElement("div",{className:"opening-curtain","aria-hidden":"true"},Ht.createElement("span",{className:"opening-curtain__panel"}),Ht.createElement("span",{className:"opening-curtain__panel"}),Ht.createElement("span",{className:"opening-curtain__panel"})),Ht.createElement("p",{className:"auto-progress"},"Loading your private shelf ",Ht.createElement("span",{"aria-hidden":"true"},"···")))}yy.createRoot(document.getElementById("root")).render(Ht.createElement(Ht.StrictMode,null,Ht.createElement(Cy,null)));
