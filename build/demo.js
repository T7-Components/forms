!function(e){function t(t){for(var a,o,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(t);p.length;)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={1:0,2:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;l.push([8,0]),n()}({3:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),o=n.n(l),i=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}(this,p(t).call(this,e)),Object(i.bind)(h(h(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"handleClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props.buttonData;this.props.handleClick(e,t)}},{key:"render",value:function(){var e,t,n=this.props,a=n.ariaControls,l=n.disabled,o=n.children,i=n.href,u=n.mode,s=n.size,d=n.target,p=n.title,f=n.type,h=this.handleClick;l||(t=0,i&&d&&(e="noopener noreferrer"));var b={children:o,disabled:l,tabIndex:t,title:p,className:"t7-button","data-mode":u,"data-size":s,onClick:l?null:h},m=c({},b,{rel:e,href:l?null:i,target:l?null:d}),y=c({},b,{type:f,"aria-controls":a}),v=r.a.createElement("button",y);return i&&(v=r.a.createElement("a",m)),v}}]),t}();b.propTypes={ariaControls:o.a.string,buttonData:o.a.any,children:o.a.any,disabled:o.a.bool,href:o.a.string,mode:o.a.string,size:o.a.string,target:o.a.string,title:o.a.string,type:o.a.string,handleClick:o.a.func},b.defaultProps={disabled:!1,mode:"default",size:"default",type:"button",handleClick:function(){}};var m=b;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}(this,g(t).call(this,e)),Object(i.bind)(O(O(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r.a.Component),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.checked,n=e.id,a=void 0===n?Object(i.unique)():n;this.state={id:a,checked:!!t,oldChecked:t}}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentTarget,n=void 0===t?{}:t,a=n.checked,r=n.value,l=void 0===r?"":r;this.setState({checked:!!a}),this.props.handleChange(e,l,a)}},{key:"render",value:function(){var e,t,n,a=this.state,l=a.checked,o=a.id,i=this.props,u=i.autofocus,c=i.disabled,s=i.label,d=i.name,p=i.required,f=i.type,h=i.value,b=this.handleChange;"checkbox"===f?(e="t7-checkbox",t="t7-checkbox__label",n="t7-checkbox__fake"):"radio"===f&&(e="t7-radio",t="t7-radio__label",n="t7-radio__fake");var m={disabled:c,id:o,name:d,required:p,type:f,value:h,autoFocus:u,className:e,onChange:b,onFocus:b};return"radio"===f?m.defaultChecked=l:m.checked=l,r.a.createElement("label",{htmlFor:o,className:t},r.a.createElement("input",m),r.a.createElement("span",{"aria-hidden":!0,className:n}),s)}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.checked,a=t.oldChecked,r=null;return Object(i.exists)(n)&&n!==a&&(r={checked:n,oldChecked:n}),r}}]),t}();w.propTypes={autofocus:o.a.bool,disabled:o.a.bool,id:o.a.string,label:o.a.string,name:o.a.string,required:o.a.bool,type:o.a.string,value:o.a.oneOfType([o.a.string,o.a.number]),checked:o.a.bool,handleChange:o.a.func},w.defaultProps={type:"checkbox",handleChange:function(){}};var k=w;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?C(e):t}(this,x(t).call(this,e)),Object(i.bind)(C(C(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),function(e,t,n){t&&j(e.prototype,t),n&&j(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.mask,n=e.id,a=void 0===n?Object(i.unique)():n,r=e.value,l=void 0===r?"":r;this.state={id:a,oldValue:l,value:t(String(l))}}},{key:"applyMask",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=n.currentTarget,l=void 0===r?{}:r;return a=String(a),"number"==typeof l.selectionStart&&(e=l.selectionStart,t=a.slice(0,e)),a=this.props.mask(a),window.requestAnimationFrame(function(){if(Object(i.exists)(e)&&l===document.activeElement&&"function"==typeof l.setSelectionRange){var n=a.slice(0,e),r=Object(i.regex)([",","."]),o=Object(i.regex)(["/","-"]),u=n.match(r)||[],c=t.match(r)||[],s=u.length||c.length?u.length-c.length:n.length-t.length,d=e+s;a.match(o)||l.setSelectionRange(d,d)}}),a}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.currentTarget,a=(void 0===n?{}:n).value,r=void 0===a?"":a;"blur"===t&&(r=Object(i.trim)(r)),r=this.applyMask(e,r),this.setState({value:r}),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,l=a.autofocus,o=a.disabled,i=a.label,u=a.maxlength,c=a.name,s=a.placeholder,d=a.readonly,p=a.required,f=a.size,h=a.type,b=a.width,m=this.handleChange,y=["t7-input"];(f>0||"auto"===b)&&y.push("t7-input--width-auto");var v={id:t,label:i,required:p},g={className:y=y.join(" "),disabled:o,id:t,name:c,placeholder:s,required:p,size:f,type:h,value:n,autoFocus:l,maxLength:u,onBlur:m,onChange:m,readOnly:d};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,v),r.a.createElement("input",g))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.mask,a=e.value,r=t.oldValue,l=null;return Object(i.exists)(a)&&a!==r&&(l={oldValue:a,value:n(String(a))}),l}}]),t}();T.propTypes={autofocus:o.a.bool,disabled:o.a.bool,id:o.a.string,label:o.a.string,name:o.a.string,placeholder:o.a.string,readonly:o.a.bool,required:o.a.bool,type:o.a.string,width:o.a.string,maxlength:o.a.oneOfType([o.a.string,o.a.number]),size:o.a.oneOfType([o.a.string,o.a.number]),value:o.a.oneOfType([o.a.string,o.a.number]),handleChange:o.a.func,mask:o.a.func},T.defaultProps={type:"text",handleChange:function(){},mask:function(e){return e}};var P=T,B=n(5),I=n.n(B);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function z(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,F(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r.a.Component),function(e,t,n){t&&q(e.prototype,t),n&&q(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,a=e.required;return r.a.createElement(I.a,{if:n},r.a.createElement("label",{className:"t7-label",htmlFor:t},n,r.a.createElement(I.a,{if:a}," ",r.a.createElement("abbr",{children:"*",className:"t7-label__abbr",title:"Required"}))))}}]),t}();V.propTypes={id:o.a.string,label:o.a.string,required:o.a.bool};var D=V;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,H(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r.a.Component),function(e,t,n){t&&A(e.prototype,t),n&&A(e,n)}(t,[{key:"render",value:function(){return r.a.createElement(k,U({},this.props,{type:"radio"}))}}]),t}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?X(e):t}(this,Q(t).call(this,e)),Object(i.bind)(X(X(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r.a.Component),function(e,t,n){t&&G(e.prototype,t),n&&G(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentTarget,n=(void 0===t?{}:t).value,a=void 0===n?"":n;this.setState({value:a}),this.props.handleChange(e,a)}},{key:"buildList",value:function(){return this.props.options.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.name,a=e.value;return r.a.createElement("option",{key:t,value:a},n)})}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,l=a.autofocus,o=a.disabled,i=a.label,u=a.name,c=a.readonly,s=a.required,d=a.width,p=this.handleChange,f=["t7-select"];"auto"===d&&f.push("t7-select--width-auto");var h={id:t,label:i,required:s},b={className:f=f.join(" "),disabled:o,id:t,name:u,required:s,value:n,autoFocus:l,onChange:p,readOnly:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,h),r.a.createElement("select",b,this.buildList()))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();Z.propTypes={autofocus:o.a.bool,disabled:o.a.bool,id:o.a.string,label:o.a.string,name:o.a.string,options:o.a.array,readonly:o.a.bool,required:o.a.bool,width:o.a.string,value:o.a.oneOfType([o.a.string,o.a.number]),handleChange:o.a.func},Z.defaultProps={options:[],handleChange:function(){}};var $=Z;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var le=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?re(e):t}(this,ne(t).call(this,e)),Object(i.bind)(re(re(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,r.a.Component),function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"componentDidMount",value:function(){document.body.setAttribute("spellcheck",!1)}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.currentTarget,a=(void 0===n?{}:n).value,r=void 0===a?"":a;"blur"===t&&(r=Object(i.trimMultiLine)(r)),this.setState({value:r}),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,l=a.autofocus,o=a.disabled,i=a.label,u=a.maxlength,c=a.name,s=a.placeholder,d=a.readonly,p=a.required,f=this.handleChange,h={id:t,label:i,required:p},b={disabled:o,id:t,name:c,placeholder:s,required:p,value:n,autoFocus:l,className:"t7-textarea",maxLength:u,onBlur:f,onChange:f,readOnly:d};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,h),r.a.createElement("textarea",b))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();le.propTypes={autofocus:o.a.bool,disabled:o.a.bool,id:o.a.string,label:o.a.string,name:o.a.string,placeholder:o.a.string,readonly:o.a.bool,required:o.a.bool,maxlength:o.a.oneOfType([o.a.string,o.a.number]),value:o.a.oneOfType([o.a.string,o.a.number]),handleChange:o.a.func},le.defaultProps={handleChange:function(){}};var oe=le;function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?de(e):t}(this,ce(t).call(this,e)),Object(i.bind)(de(de(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r.a.Component),function(e,t,n){t&&ue(e.prototype,t),n&&ue(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"componentDidMount",value:function(){document.body.setAttribute("spellcheck",!1)}},{key:"handleFocus",value:function(e){Object(i.contentOnFocus)(e)}},{key:"handleKeyUp",value:function(e){Object(i.contentOnChange)(e),this.handleChange(e)}},{key:"handlePaste",value:function(e){Object(i.contentOnPaste)(e),this.handleChange(e)}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props.placeholder,n=e.currentTarget,a=void 0===n?{}:n,r=a.innerHTML;(r=Object(i.contentToText)(r))===t&&(r=""),"function"==typeof a.setAttribute&&a.setAttribute("data-has-placeholder",!r),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state.id,t=this.props,n=t.autofocus,a=t.disabled,l=t.label,o=t.name,u=t.placeholder,c=t.readonly,s=t.required,d=this.state.value;d=d||u;var p={__html:Object(i.contentToMarkup)(d)},f=this.handleChange,h=this.handleFocus,b=this.handleKeyUp,m={id:e,label:l,required:s},y={dangerouslySetInnerHTML:p,disabled:a,id:e,name:o,placeholder:u,required:s,value:d,autoFocus:n,className:"t7-textarea",readOnly:c,onBlur:b,onFocus:h,onInput:f,onKeyUp:b,onPaste:this.handlePaste,contentEditable:!a&&!c,tabIndex:a?null:0,"data-has-placeholder":!d||Object(i.trim)(d)===Object(i.trim)(u)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,m),r.a.createElement("div",y))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();pe.propTypes={autofocus:o.a.bool,disabled:o.a.bool,id:o.a.string,label:o.a.string,name:o.a.string,placeholder:o.a.string,readonly:o.a.bool,required:o.a.bool,value:o.a.oneOfType([o.a.string,o.a.number]),handleChange:o.a.func},pe.defaultProps={handleChange:function(){}};var fe=pe;n.d(t,"Button",function(){return m}),n.d(t,"Checkbox",function(){return k}),n.d(t,"Input",function(){return P}),n.d(t,"Label",function(){return D}),n.d(t,"Radio",function(){return Y}),n.d(t,"Select",function(){return $}),n.d(t,"Textarea",function(){return oe}),n.d(t,"Textdiv",function(){return fe})},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),i=n(4),u=n.n(i),c=n(2),s=(n(45),n(47),n(49),n(51),n(3));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[{value:"",name:"Select..."},{value:"1",name:"Uno"},{value:"2",name:"Dos"},{value:"3",name:"Tres"}],y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?b(e):t}(this,f(t).call(this,e)),Object(c.bind)(b(b(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a.Component),function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(t,[{key:"defaultState",value:function(){this.state={controlledInputValue:"TEST",controlledSelectValue:""}}},{key:"handleChangeControlledCheckbox",value:function(e,t,n){this.setState({controlledCheckboxBool:n})}},{key:"handleChangeControlledInput",value:function(e,t){this.setState({controlledInputValue:t})}},{key:"handleChangeControlledSelect",value:function(e,t){this.setState({controlledSelectValue:t})}},{key:"render",value:function(){var e=this.state,t=e.controlledCheckboxBool,n=e.controlledInputValue,a=e.controlledSelectValue,l=this.handleChangeControlledCheckbox,o=this.handleChangeControlledInput,i=this.handleChangeControlledSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"@t7/forms"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/T7-Components/forms/blob/master/source/demo.js"},'View "demo.js" on GitHub')),r.a.createElement("hr",null),r.a.createElement("h2",null,'Hybrid "controlled" elements…'),r.a.createElement("p",null,"The following form elements are examples of a hybrid approach, which involves treating all elements as if they have a ",r.a.createElement("code",null,"defaultValue"),", while still allowing them to be overridden by a change to ",r.a.createElement("code",null,"this.props.value"),"."),r.a.createElement("p",null,"This is made possible each component having its own internal ",r.a.createElement("code",null,"this.state.value"),", but also watching for changes via ",r.a.createElement("code",null,"getDerivedStateFromProps"),". It has been our experience that this most closely aligns conceptually, with how one might expect form elements to work in a non-React environment."),r.a.createElement("p",null,'If for some reason an input literally needed to be fully "controlled," this could still be accomplished by using the ',r.a.createElement("code",null,"readonly")," attribute."),r.a.createElement("h3",null,"Hybrid: Checkboxes"),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:"Master checkbox",checked:t,handleChange:l})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:'Checkbox: changes with "Master checkbox"',checked:t})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{disabled:!0,label:'Checkbox: changes with "Master checkbox" (disabled)',checked:t})),r.a.createElement("h3",null,"Hybrid: Select inputs"),r.a.createElement("p",null,r.a.createElement(s.Select,{label:"Master select",options:m,value:a,handleChange:i})),r.a.createElement("p",null,r.a.createElement(s.Select,{label:'Select: changes with "Master select"',options:m,value:a})),r.a.createElement("p",null,r.a.createElement(s.Select,{disabled:!0,label:'Select: changes with "Master select" (disabled)',options:m,value:a})),r.a.createElement("h3",null,"Hybrid: Text inputs"),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Master input",value:n,handleChange:o})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:'Input: changes with "Master input"',value:n})),r.a.createElement("p",null,r.a.createElement(s.Input,{readonly:!0,label:'Input: changes with "Master input" (readonly)',value:n})),r.a.createElement("p",null,r.a.createElement(s.Input,{disabled:!0,label:'Input: changes with "Master input" (disabled)',value:n})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{label:'Textarea: changes with "Master input"',value:n})),r.a.createElement(s.Textdiv,{label:'Textdiv: changes with "Master input"',value:n}),r.a.createElement("hr",null),r.a.createElement("h2",null,"Other examples…"),r.a.createElement("p",null,r.a.createElement(s.Input,{required:!0,label:"Input",placeholder:"Input placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Date input (with mask)",placeholder:"MM/DD/YYYY",mask:c.formatDate})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"US phone input (with mask)",placeholder:"000-000-0000",mask:c.formatPhoneUS})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Alphanumeric input (with mask)",placeholder:"Letters and numbers only",mask:c.formatAlphanumeric})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Integer input (with mask)",placeholder:"Integers only",mask:c.formatInteger})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"German currency (with mask)",mask:c.formatMoneyDE,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Indian currency (with mask)",mask:c.formatMoneyIN,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Japanese currency (with mask)",mask:c.formatMoneyJP,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Korean currency (with mask)",mask:c.formatMoneyKR,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"UK currency (with mask)",mask:c.formatMoneyUK,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"US currency (with mask)",mask:c.formatMoneyUS,maxlength:20,value:1e3})),r.a.createElement("p",null,r.a.createElement(s.Input,{disabled:!0,label:"Input (disabled)",placeholder:"Input placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Select,{required:!0,label:"Select",options:m})),r.a.createElement("p",null,r.a.createElement(s.Select,{disabled:!0,label:"Select (disabled)",options:m})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{required:!0,label:"Textarea",placeholder:"Textarea placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{readonly:!0,label:"Textarea (readonly)",placeholder:"Textarea placeholder",value:"Read only value"})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{disabled:!0,label:"Textarea (disabled)",placeholder:"Textarea placeholder"})),r.a.createElement(s.Textdiv,{required:!0,label:"Textdiv",placeholder:"Textdiv placeholder"}),r.a.createElement(s.Textdiv,{readonly:!0,label:"Textdiv (readonly)",placeholder:"Textarea placeholder",value:"Read only value"}),r.a.createElement(s.Textdiv,{disabled:!0,label:"Textdiv (disabled)",placeholder:"Textdiv placeholder"}),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{disabled:!0,label:"Checkbox (disabled)"})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:"By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, Space Force will disavow all knowledge of your official involvement, and you will be branded as a rogue agent."})),r.a.createElement("p",null,r.a.createElement(s.Radio,{checked:!0,label:"Radio label 1",name:"radio_list"})),r.a.createElement("p",null,r.a.createElement(s.Radio,{label:"Radio label 2",name:"radio_list"})),r.a.createElement("p",null,r.a.createElement(s.Radio,{disabled:!0,label:"Radio label 3 (disabled)",name:"radio_list"})),r.a.createElement("p",null,"Example ",r.a.createElement("code",null,"<a>")," tag, styled as a button:"),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{href:"https://example.com/",target:"_blank",children:"Open example.com"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,href:"https://example.com/",target:"_blank",children:"Open example.com"}))),r.a.createElement("p",null,"All ",r.a.createElement("code",null,"<button>")," permutations:"),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",size:"small",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",size:"small",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",size:"big",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",size:"big",children:"Button"}))))}}]),t}(),v=document.getElementById("root");o.a.render(r.a.createElement(y,null),v)}});