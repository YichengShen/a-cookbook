(self.webpackChunka_cookbook=self.webpackChunka_cookbook||[]).push([[351],{6494:function(t){"use strict";t.exports=Object.assign},2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,i="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,u,l;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(i&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof a.toString)return t.toString()===a.toString();if((s=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,u[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!t.$$typeof)&&!o(t[u[c]],a[u[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var i,r=n(7294),o=(i=r)&&"object"==typeof i&&"default"in i?i.default:i;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=t(u.map((function(t){return t.props}))),h.canUseDOM?e(c):n&&(c=n(c))}var h=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,u=[],t};var a=r.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},a.render=function(){return o.createElement(i,this.props)},r}(r.PureComponent);return a(h,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(i)+")"),a(h,"canUseDOM",s),h}}},519:function(t,e,n){"use strict";n.d(e,{Z:function(){return A}});var i=n(7462),r=n(7294),o=n(9846),a=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,o.Z)((function(t){return a.test(t)||111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)<91})),c=n(1299),u=n(4660),l=n(8440),h=n(4858),d=s,p=function(t){return"theme"!==t},f=function(t){return"string"==typeof t&&t.charCodeAt(0)>96?d:p},y=function(t,e,n){var i;if(e){var r=e.shouldForwardProp;i=t.__emotion_forwardProp&&r?function(e){return t.__emotion_forwardProp(e)&&r(e)}:r}return"function"!=typeof i&&n&&(i=t.__emotion_forwardProp),i},m=function(t){var e=t.cache,n=t.serialized,i=t.isStringTag;return(0,u.hC)(e,n,i),(0,h.L)((function(){return(0,u.My)(e,n,i)})),null},g=function t(e,n){var o,a,s=e.__emotion_real===e,h=s&&e.__emotion_base||e;void 0!==n&&(o=n.label,a=n.target);var d=y(e,n,s),p=d||f(h),g=!p("as");return function(){var M=arguments,b=s&&void 0!==e.__emotion_styles?e.__emotion_styles.slice(0):[];if(void 0!==o&&b.push("label:"+o+";"),null==M[0]||void 0===M[0].raw)b.push.apply(b,M);else{0,b.push(M[0][0]);for(var w=M.length,L=1;L<w;L++)b.push(M[L],M[0][L])}var v=(0,c.w)((function(t,e,n){var i=g&&t.as||h,o="",s=[],y=t;if(null==t.theme){for(var M in y={},t)y[M]=t[M];y.theme=r.useContext(c.T)}"string"==typeof t.className?o=(0,u.fp)(e.registered,s,t.className):null!=t.className&&(o=t.className+" ");var w=(0,l.O)(b.concat(s),e.registered,y);o+=e.key+"-"+w.name,void 0!==a&&(o+=" "+a);var L=g&&void 0===d?f(i):p,v={};for(var T in t)g&&"as"===T||L(T)&&(v[T]=t[T]);return v.className=o,v.ref=n,r.createElement(r.Fragment,null,r.createElement(m,{cache:e,serialized:w,isStringTag:"string"==typeof i}),r.createElement(i,v))}));return v.displayName=void 0!==o?o:"Styled("+("string"==typeof h?h:h.displayName||h.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=h,v.__emotion_styles=b,v.__emotion_forwardProp=d,Object.defineProperty(v,"toString",{value:function(){return"."+a}}),v.withComponent=function(e,r){return t(e,(0,i.Z)({},n,r,{shouldForwardProp:y(v,r,!0)})).apply(void 0,b)},v}},M=n(6542),b=n(1082);function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w.apply(this,arguments)}var L=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),v=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function T(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function C(t,e,n,i,r){return function(t,e,n,i,r){var o=(t-n)/(e-n);if(0===o)return i;if(1===o)return r;for(var a="#",s=1;s<6;s+=2){var c=parseInt(i.substr(s,2),16),u=parseInt(r.substr(s,2),16),l=Math.round((1-o)*c+o*u).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,T(i),T(r))}var j=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,r=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:r?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,r=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,r));o!==i&&this.setState({h:o})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,r=e.B,o=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-r;(!i||s<250||o&&n<=a||!o&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.m=function(t){this.L(t.touches[0].clientX)},e.prototype.M=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,i=t.className,o=t.offColor,a=t.onColor,s=t.offHandleColor,c=t.onHandleColor,u=t.checkedIcon,l=t.uncheckedIcon,h=t.checkedHandleIcon,d=t.uncheckedHandleIcon,p=t.boxShadow,f=t.activeBoxShadow,y=t.height,m=t.width,g=t.borderRadius,M=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),b=this.state,L=b.h,v=b.N,T=b.j,j={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:y/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:y,width:m,margin:Math.max(0,(this.t-y)/2),position:"relative",background:C(L,this.i,this.o,o,a),borderRadius:"number"==typeof g?g:y/2,cursor:n?"default":"pointer",WebkitTransition:v?null:"background 0.25s",MozTransition:v?null:"background 0.25s",transition:v?null:"background 0.25s"},k={height:y,width:Math.min(1.5*y,m-(this.t+y)/2+1),position:"relative",opacity:(L-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},x={height:y,width:Math.min(1.5*y,m-(this.t+y)/2+1),position:"absolute",opacity:1-(L-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:C(L,this.i,this.o,s,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+L+"px)",top:Math.max(0,(y-this.t)/2),outline:0,boxShadow:T?f:p,border:0,WebkitTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:v?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},N={height:this.t,width:this.t,opacity:Math.max(2*(1-(L-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"},A={height:this.t,width:this.t,opacity:Math.max(2*((L-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:v?null:"opacity 0.25s",MozTransition:v?null:"opacity 0.25s",transition:v?null:"opacity 0.25s"};return r.createElement("div",{className:i,style:j},r.createElement("div",{className:"react-switch-bg",style:S,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&r.createElement("div",{style:k},u),l&&r.createElement("div",{style:x},l)),r.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},d&&r.createElement("div",{style:N},d),h&&r.createElement("div",{style:A},h)),r.createElement("input",w({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},M,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(r.Component);j.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:L,checkedIcon:v,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};var S=n(3431);var k=t=>{let{location:e,title:n,theme:i}=t;let r;return r="/a-cookbook/"===e.pathname?(0,S.tZ)("h1",{className:"main-heading"},(0,S.tZ)(b.Link,{to:"/"},n)):(0,S.tZ)(b.Link,{className:"header-link-home",to:"/"},n),(0,S.tZ)("header",{className:"global-header",style:{display:"flex"}},(0,S.tZ)("div",null,r),(0,S.tZ)("div",{style:{marginLeft:"auto"}},(0,S.tZ)(j,{onChange:()=>i.updateTheme("light"===i.name?"dark":"light"),checked:"dark"===i.name,onColor:"#222",offColor:"#333",checkedIcon:(0,S.tZ)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAgOTIuMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwIDkyLjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkMwMjQ7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OS43LDIxLjNjLTMuOC0xLjYtOC0yLjQtMTIuMi0yLjFjMTAuOSw1LjYsMTUuMiwxOC45LDkuNiwyOS43UzM4LjIsNjQsMjcuNCw1OC41Yy0xLjItMC42LTIuNC0xLjQtMy41LTIuMg0KCWM1LjYsMTMuOSwyMS40LDIwLjYsMzUuMiwxNUM3Myw2NS43LDc5LjcsNDkuOSw3NC4xLDM2QzcxLjUsMjkuNCw2Ni4zLDI0LjEsNTkuNywyMS4zeiIvPg0KPC9zdmc+DQo=",alt:"moon icon"}),uncheckedIcon:(0,S.tZ)("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEwMCA5Mi4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgOTIuMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2Rpc3BsYXk6bm9uZTt9DQoJLnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiNGRkMwMjQ7fQ0KCS5zdDJ7ZmlsbDojRkZDMDI0O30NCjwvc3R5bGU+DQo8ZyBpZD0iTGF5ZXJfMSIgY2xhc3M9InN0MCI+DQoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjcsMjEuM2MtMy44LTEuNi04LTIuNC0xMi4yLTIuMWMxMC45LDUuNiwxNS4yLDE4LjksOS42LDI5LjdTMzguMiw2NCwyNy40LDU4LjVjLTEuMi0wLjYtMi40LTEuNC0zLjUtMi4yDQoJCWM1LjYsMTMuOSwyMS40LDIwLjYsMzUuMiwxNUM3Myw2NS43LDc5LjcsNDkuOSw3NC4xLDM2QzcxLjUsMjkuNCw2Ni4zLDI0LjEsNTkuNywyMS4zeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAsNjVjLTEwLjUsMC0xOC44LTguMy0xOC44LTE4LjhTMzkuNSwyNy40LDUwLDI3LjRzMTguOCw4LjMsMTguOCwxOC44UzYwLjUsNjUsNTAsNjV6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01MCwyNC43Yy0xLjYsMC0yLjctMS4xLTIuNy0yLjd2LTIuN2MwLTEuNiwxLjEtMi43LDIuNy0yLjdzMi43LDEuMSwyLjcsMi43VjIyQzUyLjcsMjMuNiw1MS42LDI0LjcsNTAsMjQuNw0KCQkJeiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAsNzUuN2MtMS42LDAtMi43LTEuMS0yLjctMi43di0yLjdjMC0xLjYsMS4xLTIuNywyLjctMi43czIuNywxLjEsMi43LDIuN1Y3M0M1Mi43LDc0LjYsNTEuNiw3NS43LDUwLDc1LjcNCgkJCXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc2LjksNDguOWgtMi43Yy0xLjYsMC0yLjctMS4xLTIuNy0yLjdjMC0xLjYsMS4xLTIuNywyLjctMi43aDIuN2MxLjYsMCwyLjcsMS4xLDIuNywyLjcNCgkJCUM3OS42LDQ3LjgsNzguNSw0OC45LDc2LjksNDguOXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI1LjgsNDguOWgtMi43Yy0xLjYsMC0yLjctMS4xLTIuNy0yLjdjMC0xLjYsMS4xLTIuNywyLjctMi43aDIuN2MxLjYsMCwyLjcsMS4xLDIuNywyLjcNCgkJCUMyOC41LDQ3LjgsMjcuNCw0OC45LDI1LjgsNDguOXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjgsMzBjLTEuNiwwLTIuNy0xLjEtMi43LTIuN2MwLTAuOCwwLjMtMS4zLDAuOC0xLjlsMi43LTIuN2MxLjEtMS4xLDIuNy0xLjEsMy44LDBjMS4xLDEuMSwxLjEsMi43LDAsMy44DQoJCQlsLTIuNywyLjdDNzAuMSwyOS44LDY5LjYsMzAsNjguOCwzMHoiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTMxLjIsMzBjLTAuOCwwLTEuMy0wLjMtMS45LTAuOGwtMi43LTIuN2MtMS4xLTEuMS0xLjEtMi43LDAtMy44YzEuMS0xLjEsMi43LTEuMSwzLjgsMGwyLjcsMi43DQoJCQljMS4xLDEuMSwxLjEsMi43LDAsMy44QzMyLjUsMjkuOCwzMiwzMCwzMS4yLDMweiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzEuNSw3MC4zYy0wLjgsMC0xLjMtMC4zLTEuOS0wLjhsLTIuNy0yLjdjLTEuMS0xLjEtMS4xLTIuNywwLTMuOGMxLjEtMS4xLDIuNy0xLjEsMy44LDBsMi43LDIuNw0KCQkJYzEuMSwxLjEsMS4xLDIuNywwLDMuOEM3Mi44LDcwLjEsNzIuMyw3MC4zLDcxLjUsNzAuM3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI4LjUsNzAuM2MtMS42LDAtMi43LTEuMS0yLjctMi43YzAtMC44LDAuMy0xLjMsMC44LTEuOWwyLjctMi43YzEuMS0xLjEsMi43LTEuMSwzLjgsMHMxLjEsMi43LDAsMy44DQoJCQlsLTIuNywyLjdDMjkuOSw3MC4xLDI5LjMsNzAuMywyOC41LDcwLjN6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=",alt:"sun icon"}),boxShadow:"0 0 2px 3px #4E9F3D",activeBoxShadow:"0 0 2px 3px #bee494"})))};var x=()=>{var t;const e=null===(t=(0,b.useStaticQuery)("2297725318").site.siteMetadata)||void 0===t?void 0:t.author;return(0,S.tZ)("footer",{style:{marginTop:"2vh"}},(0,S.tZ)("div",null,(0,S.tZ)("a",{href:"https://www.yichengshen.com/",target:"_blank",rel:"noreferrer"},"个人网页")," ","|"," ",(0,S.tZ)("a",{href:"https://github.com/YichengShen",target:"_blank",rel:"noreferrer"},"Github")),(0,S.tZ)("div",null,"Copyright © ",(new Date).getFullYear()," ",e.name,"."))};const I={light:{foreground:"inherit",background:"inherit"},dark:{foreground:"#ffffff",background:"#222222"}},N=g("div",{target:"e1g76i4w0"})("color:",(t=>I[t.theme.name].foreground),";background-color:",(t=>I[t.theme.name].background),";transition:all 0.4s ease;min-height:100vh;& a{color:",(t=>"dark"===t.theme.name?"#D8E9A8":"inherit"),";}");var A=t=>{let{location:e,title:n,children:i}=t;const r="/a-cookbook/"===e.pathname;return(0,S.tZ)("div",null,(0,S.tZ)(M.N.Consumer,null,(t=>(0,S.tZ)(N,{theme:t},(0,S.tZ)("div",{className:"global-wrapper","data-is-root-path":r},(0,S.tZ)(k,{location:e,title:n,theme:t}),(0,S.tZ)("main",null,i),(0,S.tZ)(x,null))))))}},262:function(t,e,n){"use strict";n.d(e,{Z:function(){return gt}});var i,r,o,a,s=n(7294),c=n(5697),u=n.n(c),l=n(4839),h=n.n(l),d=n(2993),p=n.n(d),f=n(6494),y=n.n(f),m="bodyAttributes",g="htmlAttributes",M="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(b).map((function(t){return b[t]})),"charset"),L="cssText",v="href",T="http-equiv",C="innerHTML",j="itemprop",S="name",k="property",x="rel",I="src",N="target",A={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O="defaultTitle",D="defer",E="encodeSpecialCharacters",z="onChangeClientState",P="titleTemplate",B=Object.keys(A).reduce((function(t,e){return t[A[e]]=e,t}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],Z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},W=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},_=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){var e=K(t,b.TITLE),n=K(t,P);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var i=K(t,O);return e||i||void 0},G=function(t){return K(t,z)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},F=function(t,e){return e.filter((function(t){return void 0!==t[b.BASE]})).map((function(t){return t[b.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var i=Object.keys(n),r=0;r<i.length;r++){var o=i[r].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},X=function(t,e,n){var i={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&et("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===e.indexOf(c)||n===x&&"canonical"===t[n].toLowerCase()||c===x&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(s)||s!==C&&s!==L&&s!==j||(n=s)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(r),a=0;a<o.length;a++){var s=o[a],c=y()({},i[s],r[s]);i[s]=c}return t}),[]).reverse()},K=function(t,e){for(var n=t.length-1;n>=0;n--){var i=t[n];if(i.hasOwnProperty(e))return i[e]}return null},V=(i=Date.now(),function(t){var e=Date.now();e-i>16?(i=e,t(e)):setTimeout((function(){V(t)}),0)}),q=function(t){return clearTimeout(t)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:n.g.requestAnimationFrame||V,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||q:n.g.cancelAnimationFrame||q,et=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},nt=null,it=function(t,e){var n=t.baseTag,i=t.bodyAttributes,r=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,h=t.title,d=t.titleAttributes;at(b.BODY,i),at(b.HTML,r),ot(h,d);var p={baseTag:st(b.BASE,n),linkTags:st(b.LINK,o),metaTags:st(b.META,a),noscriptTags:st(b.NOSCRIPT,s),scriptTags:st(b.SCRIPT,u),styleTags:st(b.STYLE,l)},f={},y={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,i=e.oldTags;n.length&&(f[t]=n),i.length&&(y[t]=p[t].oldTags)})),e&&e(),c(t,f,y)},rt=function(t){return Array.isArray(t)?t.join(""):t},ot=function(t,e){void 0!==t&&document.title!==t&&(document.title=rt(t)),at(b.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var i=n.getAttribute(Z),r=i?i.split(","):[],o=[].concat(r),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],u=e[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===r.indexOf(c)&&r.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var h=o.length-1;h>=0;h--)n.removeAttribute(o[h]);r.length===o.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(b.HEAD),i=n.querySelectorAll(t+"["+Z+"]"),r=Array.prototype.slice.call(i),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var i in e)if(e.hasOwnProperty(i))if(i===C)n.innerHTML=e.innerHTML;else if(i===L)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[i]?"":e[i];n.setAttribute(i,s)}n.setAttribute(Z,"true"),r.some((function(t,e){return a=e,n.isEqualNode(t)}))?r.splice(a,1):o.push(n)})),r.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:r,newTags:o}},ct=function(t){return Object.keys(t).reduce((function(e,n){var i=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+i:i}),"")},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[A[n]||n]=t[n],e}),e)},lt=function(t,e,n){switch(t){case b.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(i={key:t})[Z]=!0,r=ut(n,i),[s.createElement(b.TITLE,r,t)];var t,n,i,r},toString:function(){return function(t,e,n,i){var r=ct(n),o=rt(e);return r?"<"+t+" "+Z+'="true" '+r+">"+_(o,i)+"</"+t+">":"<"+t+" "+Z+'="true">'+_(o,i)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case g:return{toComponent:function(){return ut(e)},toString:function(){return ct(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var i,r=((i={key:n})[Z]=!0,i);return Object.keys(e).forEach((function(t){var n=A[t]||t;if(n===C||n===L){var i=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:i}}else r[n]=e[t]})),s.createElement(t,r)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,i){var r=Object.keys(i).filter((function(t){return!(t===C||t===L)})).reduce((function(t,e){var r=void 0===i[e]?e:e+'="'+_(i[e],n)+'"';return t?t+" "+r:r}),""),o=i.innerHTML||i.cssText||"",a=-1===R.indexOf(t);return e+"<"+t+" "+Z+'="true" '+r+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},ht=function(t){var e=t.baseTag,n=t.bodyAttributes,i=t.encode,r=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,u=t.styleTags,l=t.title,h=void 0===l?"":l,d=t.titleAttributes;return{base:lt(b.BASE,e,i),bodyAttributes:lt(m,n,i),htmlAttributes:lt(g,r,i),link:lt(b.LINK,o,i),meta:lt(b.META,a,i),noscript:lt(b.NOSCRIPT,s,i),script:lt(b.SCRIPT,c,i),style:lt(b.STYLE,u,i),title:lt(b.TITLE,{title:h,titleAttributes:d},i)}},dt=h()((function(t){return{baseTag:F([v,N],t),bodyAttributes:J(m,t),defer:K(t,D),encode:K(t,E),htmlAttributes:J(g,t),linkTags:X(b.LINK,[x,v],t),metaTags:X(b.META,[S,w,T,k,j],t),noscriptTags:X(b.NOSCRIPT,[C],t),onChangeClientState:G(t),scriptTags:X(b.SCRIPT,[I,C],t),styleTags:X(b.STYLE,[L],t),title:Q(t),titleAttributes:J(M,t)}}),(function(t){nt&&tt(nt),t.defer?nt=$((function(){it(t,(function(){nt=null}))})):(it(t),nt=null)}),ht)((function(){return null})),pt=(r=dt,a=o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:e};case b.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,i=t.arrayTypeChildren,r=t.newChildProps,o=t.nestedChildren;return U({},i,((e={})[n.type]=[].concat(i[n.type]||[],[U({},r,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,i=t.child,r=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(i.type){case b.TITLE:return U({},r,((e={})[i.type]=a,e.titleAttributes=U({},o),e));case b.BODY:return U({},r,{bodyAttributes:U({},o)});case b.HTML:return U({},r,{htmlAttributes:U({},o)})}return U({},r,((n={})[i.type]=U({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var i;n=U({},n,((i={})[e]=t[e],i))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,i={};return s.Children.forEach(t,(function(t){if(t&&t.props){var r=t.props,o=r.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[B[n]||n]=t[n],e}),e)}(W(r,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:i=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:i,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(i,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=W(t,["children"]),i=U({},n);return e&&(i=this.mapChildrenToProps(e,i)),s.createElement(r,i)},Y(e,null,[{key:"canUseDOM",set:function(t){r.canUseDOM=t}}]),e}(s.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=r.peek,o.rewind=function(){var t=r.rewind();return t||(t=ht({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);pt.renderStatic=pt.rewind;var ft=n(1082),yt=n(3431);const mt=t=>{var e,n,i;let{description:r,lang:o,meta:a,title:s}=t;const{site:c}=(0,ft.useStaticQuery)("2841359383"),u=r||c.siteMetadata.description,l=null===(e=c.siteMetadata)||void 0===e?void 0:e.title;return(0,yt.tZ)(pt,{htmlAttributes:{lang:o},title:s,titleTemplate:l?"%s | "+l:null,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n||null===(i=n.social)||void 0===i?void 0:i.twitter)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(a)})};mt.defaultProps={lang:"zh-cn",meta:[],description:""};var gt=mt}}]);
//# sourceMappingURL=commons-212dd06ac9caf529e0bc.js.map