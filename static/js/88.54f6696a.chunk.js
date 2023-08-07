"use strict";(self.webpackChunkreact_app_boilerplate=self.webpackChunkreact_app_boilerplate||[]).push([[88],{2088:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pn}});var r=t(2791),o=t(4165),a=t(5861),i=t(3433),u=t(9439),c=t(658),s=t(9658),l=t(3239),d=t(4518),f="https://noumanaltaf.com/api/",v={withoutId:"todo",withId:"todo/:todoId"},p=t(1413),h=t(1748),m=t(6403),Z=t(3418),y=t(7762);var b=function(n){return""===n||void 0===n||null===n||Array.isArray(n)&&0===n.length||"object"===typeof n&&0===Object.keys(n).length};function x(n,e){return n&&e?(Object.keys(e).forEach((function(t){n.includes(":".concat(t))&&(n=n.replace(":".concat(t),e[t]))})),n):n}var g,j=function(n,e){if(b(n)||b(e))return n;var t=new URLSearchParams("");return Object.keys(e).forEach((function(n){t.set(n,e[n])})),n="".concat(n,"?").concat(t.toString())},w=t(1243),k=function(n,e){return w.Z.get(new URL(n,f).href,(0,p.Z)({headers:{"Content-Type":"application/json"}},e))},T=function(n,e,t){return w.Z.post(new URL(n,f).href,e,(0,p.Z)({headers:{"Content-Type":"application/json"}},t))},O=function(n,e){return w.Z.delete(new URL(n,f).href,(0,p.Z)({headers:{"Content-Type":"application/json"}},e))},P=function(n,e,t){return j(x(n,e),(0,p.Z)((0,p.Z)({},t),null===e||void 0===e?void 0:e.urlParams))};!function(n){n.GET="GET",n.POST="POST",n.PUT="PUT",n.DELETE="DELETE"}(g||(g={}));var C,E=function(n,e,t,r){var o=(0,m.NL)();return(0,Z.D)(n,{onSuccess:function(n,a){var i=a.urlParams;o.setQueryData([t,P(e,a,(0,p.Z)((0,p.Z)({},r),i))],n)},onError:function(n){console.error(n)}})},S=function(){return n=v.withoutId,e={},E((function(r){var o=r.urlParams,a=x(n,r);return T(a,r,{params:(0,p.Z)((0,p.Z)({},t),o)}).then((function(n){return n.data})).then((function(n){return null!==e&&void 0!==e&&e.responseParser?e.responseParser(n):n}))}),n,g.POST,t);var n,e,t},D=function(){return n=v.withoutId,e={},(0,h.a)((0,p.Z)({queryKey:[g.GET,j(n,e)],queryFn:function(){return k(n,{params:e}).then((function(n){return n.data})).then((function(n){return null!==t&&void 0!==t&&t.responseParser?t.responseParser(n):n}))},enabled:!!n&&(null===r||void 0===r?void 0:r.enabled)},r));var n,e,t,r},I=function(){return n=v.withId,e={},E((function(r){var o=r.urlParams,a=x(n,r);return O(a,{params:(0,p.Z)((0,p.Z)({},t),o)}).then((function(n){return n.data})).then((function(n){return null!==e&&void 0!==e&&e.responseParser?e.responseParser(n):n}))}),n,g.DELETE,t);var n,e,t},R=t(1931),L=t(4942);!function(n){n.setToast="setToast"}(C||(C={}));var A,U,q,B={toast:{open:!1,message:"",type:"success"}},V=function n(e){return function(t,r){var o,a,i=null!==(o=null===(a=Object.keys(r))||void 0===a?void 0:a[0])&&void 0!==o?o:null;if(!i)return t;var u=r[i],c=e[i],s=c?c(t,u):t,l=function(n,e){var t={};e=new Set(e);var r,o=Object.keys(n).filter((function(n){return!e.has(n)})),a=(0,y.Z)(o);try{for(a.s();!(r=a.n()).done;){var i=r.value;t[i]=n[i]}}catch(u){a.e(u)}finally{a.f()}return t}(r,[i]);return n(e)(s,l)}}((0,L.Z)({},C.setToast,(function(n,e){return(0,p.Z)((0,p.Z)({},n),{},{toast:e})}))),_=t(184),z=(0,R.kr)(B),F=(0,R.kr)((function(){return null})),G=function(){return(0,R.qp)(F)},H=function(n){var e=n.children,t=r.useReducer(V,B),o=(0,u.Z)(t,2),a=o[0],i=o[1];return(0,_.jsx)(z.Provider,{value:a,children:(0,_.jsx)(F.Provider,{value:i,children:e})})},M=t(168),K=t(225),N=t(7621),Q=t(5441),J=(0,K.Z)(N.Z)(A||(A=(0,M.Z)(["\n  display: flex;\n  padding: 1rem;\n  margin: 1rem;\n  "]))),W=(0,K.Z)(Q.Z)(U||(U=(0,M.Z)(["\n  flex: 1;\n"]))),X=function(){var n=r.useRef(),e=(0,r.useState)(""),t=(0,u.Z)(e,2),o=t[0],a=t[1],i=S(),c=G(),s=D(),l=r.useCallback((function(){i.mutateAsync({todo:o}).then((function(){c({setToast:{open:!0,type:"success",message:"Todo added successfully"}}),s.refetch(),n.current&&(n.current.value="")})).catch((function(n){return c({setToast:{open:!0,type:"error",message:"Failed to add"}})}))}),[o,i,s,c]),f=r.useCallback((function(n){a(n.target.value)}),[]),v=r.useCallback((function(n){"Enter"===n.key&&l()}),[l]);return(0,_.jsxs)(J,{children:[(0,_.jsx)(W,{inputRef:n,placeholder:"Enter todo item...",inputProps:{"aria-label":"todo"},onChange:f,onKeyDown:v}),(0,_.jsx)(d.Z,{color:"secondary","aria-label":"add an alarm",onClick:function(){return l()},children:"Add"})]})},Y=t(3400),$=["title","titleId"];function nn(){return nn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nn.apply(this,arguments)}function en(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function tn(n,e){var t=n.title,o=n.titleId,a=en(n,$);return r.createElement("svg",nn({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 96 960 960",width:24,ref:e,"aria-labelledby":o},a),t?r.createElement("title",{id:o},t):null,q||(q=r.createElement("path",{d:"M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"})))}var rn,on,an,un,cn=r.forwardRef(tn),sn=(t.p,K.Z.div(rn||(rn=(0,M.Z)(["\n  justify-content: space-between; \n  font-size: 0.8em;\n  display: flex;\n  margin: 0 1rem;\n  align-items: center;\n"])))),ln=K.Z.p(on||(on=(0,M.Z)(["\n  margin: 0;\n  padding-left: 0.5rem;\n"]))),dn=function(n){var e=n.selectedRowsCount,t=n.onBulkDelete,r=void 0===t?function(){}:t;return e>0?(0,_.jsxs)(sn,{children:[(0,_.jsxs)(ln,{children:[(0,_.jsx)("b",{children:e})," row selected"]}),(0,_.jsx)(Y.Z,{onClick:r,children:(0,_.jsx)(cn,{})})]}):null},fn=t(1123),vn=t(1627),pn=t(2199),hn=(0,K.Z)(N.Z)(an||(an=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 1rem;\n  padding: 1rem;\n"]))),mn=(0,K.Z)(pn.Z)(un||(un=(0,M.Z)(["\n  display: flex;\n"]))),Zn=function(n){var e=n.id,t=n.text,r=n.onDelete,o=void 0===r?function(){}:r,a=n.checkedOnChange,i=void 0===a?function(){}:a;return(0,_.jsxs)(hn,{children:[(0,_.jsx)(fn.Z,{children:t}),(0,_.jsxs)(mn,{children:[(0,_.jsx)(Y.Z,{onClick:function(){return o(e)},children:(0,_.jsx)(cn,{})}),(0,_.jsx)(vn.Z,{onChange:function(n){return i(e,Boolean(n.target.checked))}})]})]})},yn=["mobile","tablet","desktop","largeScreen"],bn={mobile:0,tablet:640,desktop:960,largeScreen:1650},xn="px";function gn(n){var e="number"===typeof bn[n]?bn[n]:n;return"@media (min-width:".concat(e).concat(xn,")")}function jn(n,e){return"@media (min-width:".concat("number"===typeof bn[n]?bn[n]:n).concat(xn,") and ")+"(max-width:".concat("number"===typeof bn[e]?bn[e]:e).concat(xn,")")}var wn,kn={breakpoints:{keys:yn,values:bn,unit:xn,up:gn,down:function(n){var e="number"===typeof bn[n]?bn[n]:n;return"@media (max-width:".concat(e).concat(xn,")")},between:jn,only:function(n){return yn.indexOf(n)+1<yn.length?jn(n,yn[yn.indexOf(n)+1]):gn(n)}}},Tn=K.Z.div(wn||(wn=(0,M.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n\n  ","{\n    width: 50%;\n  }\n"])),kn.breakpoints.up("desktop")),On=function(){var n,e,t,d,f=D(),v=G(),p=(d=function(n){return n.toast},(0,R.Sz)(z,d)),h=(0,r.useState)(),m=(0,u.Z)(h,2),Z=m[0],y=m[1],b=I(),x=r.useCallback((function(){v({setToast:{open:!1}})}),[v]),g=r.useCallback((function(n,e){y(e?function(e){return[].concat((0,i.Z)(null!==e&&void 0!==e?e:[]),[n])}:function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e===n}))})}),[y]),j=r.useCallback(function(){var n=(0,a.Z)((0,o.Z)().mark((function n(e){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.mutateAsync({todoId:e});case 3:v({setToast:{open:!0,type:"success",message:"Todo deleted successfully"}}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.warn(n.t0);case 9:y((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return n!==e}))})),f.refetch();case 11:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),[b,f,v,y]),w=r.useCallback((0,a.Z)((0,o.Z)().mark((function n(){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=null===Z||void 0===Z?void 0:Z.map((function(n){return b.mutateAsync({todoId:n})})),n.prev=1,n.next=4,Promise.all(e);case 4:y([]),v({setToast:{open:!0,type:"success",message:"Todos deleted successfully"}}),f.refetch(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.warn(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])}))),[Z,f,b,v,y]);return(0,_.jsxs)(Tn,{children:[(0,_.jsx)(c.Z,{open:null===p||void 0===p?void 0:p.open,autoHideDuration:2e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},onClose:x,children:(0,_.jsx)(s.Z,{severity:null===p||void 0===p?void 0:p.type,sx:{width:"100%"},children:null===p||void 0===p?void 0:p.message})}),(0,_.jsx)(X,{}),(0,_.jsx)(dn,{selectedRowsCount:null!==(n=null===Z||void 0===Z?void 0:Z.length)&&void 0!==n?n:0,onBulkDelete:w}),f.isFetching&&(0,_.jsx)(l.Z,{}),null===(e=f.data)||void 0===e||null===(t=e.todos)||void 0===t?void 0:t.map((function(n){var e,t;return(0,_.jsx)(Zn,{id:null!==(e=n.id)&&void 0!==e?e:"0",text:null!==(t=null===n||void 0===n?void 0:n.todo)&&void 0!==t?t:"",onDelete:j,checkedOnChange:g},n.id)}))]})},Pn=function(){return(0,_.jsx)(H,{children:(0,_.jsx)(On,{})})}}}]);
//# sourceMappingURL=88.54f6696a.chunk.js.map