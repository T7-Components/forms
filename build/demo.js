!function(e){function t(t){for(var a,l,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)l=i[d],r[l]&&p.push(r[l][0]),r[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={1:0,2:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;o.push([8,0]),n()}({3:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),l=n.n(o),i=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}(this,p(t).call(this,e)),Object(i.bind)(b(b(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"handleClick",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props.buttonData;this.props.handleClick(e,t)}},{key:"render",value:function(){var e,t,n=this.props,a=n.ariaControls,o=n.disabled,l=n.children,i=n.href,u=n.mode,s=n.size,d=n.target,p=n.title,f=n.type,b=this.handleClick;o||(t=0,i&&d&&(e="noopener noreferrer"));var h={children:l,disabled:o,tabIndex:t,title:p,className:"t7-button","data-mode":u,"data-size":s,onClick:o?null:b},m=c({},h,{rel:e,href:o?null:i,target:o?null:d}),y=c({},h,{type:f,"aria-controls":a}),v=r.a.createElement("button",y);return i&&(v=r.a.createElement("a",m)),v}}]),t}();h.propTypes={ariaControls:l.a.string,buttonData:l.a.any,children:l.a.any,disabled:l.a.bool,href:l.a.string,mode:l.a.string,size:l.a.string,target:l.a.string,title:l.a.string,type:l.a.string,handleClick:l.a.func},h.defaultProps={disabled:!1,mode:"default",size:"default",type:"button",handleClick:function(){}};var m=h;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}(this,g(t).call(this,e)),Object(i.bind)(O(O(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r.a.Component),function(e,t,n){t&&v(e.prototype,t),n&&v(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.checked,n=e.id,a=void 0===n?Object(i.unique)():n;this.state={id:a,checked:!!t,oldChecked:t}}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentTarget,n=void 0===t?{}:t,a=n.checked,r=n.value,o=void 0===r?"":r;this.setState({checked:!!a}),this.props.handleChange(e,o,a)}},{key:"render",value:function(){var e,t,n,a=this.state,o=a.checked,l=a.id,i=this.props,u=i.autofocus,c=i.disabled,s=i.label,d=i.name,p=i.required,f=i.type,b=i.value,h=this.handleChange;"checkbox"===f?(e="t7-checkbox",t="t7-checkbox__label",n="t7-checkbox__fake"):"radio"===f&&(e="t7-radio",t="t7-radio__label",n="t7-radio__fake");var m={disabled:c,id:l,name:d,required:p,type:f,value:b,autoFocus:u,className:e,onChange:h,onFocus:h};return"radio"===f?m.defaultChecked=o:m.checked=o,r.a.createElement("label",{htmlFor:l,className:t},r.a.createElement("input",m),r.a.createElement("span",{"aria-hidden":!0,className:n}),s)}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.checked,a=t.oldChecked,r=null;return Object(i.exists)(n)&&n!==a&&(r={checked:n,oldChecked:n}),r}}]),t}();w.propTypes={autofocus:l.a.bool,disabled:l.a.bool,id:l.a.string,label:l.a.string,name:l.a.string,required:l.a.bool,type:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),checked:l.a.bool,handleChange:l.a.func},w.defaultProps={type:"checkbox",handleChange:function(){}};var k=w;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var T=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?x(e):t}(this,_(t).call(this,e)),Object(i.bind)(x(x(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r.a.Component),function(e,t,n){t&&S(e.prototype,t),n&&S(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.mask,n=e.id,a=void 0===n?Object(i.unique)():n,r=e.value,o=void 0===r?"":r;this.state={id:a,oldValue:o,value:t(o)}}},{key:"applyMask",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t.currentTarget,r=void 0===a?{}:a;"number"==typeof r.selectionStart&&(e=r.selectionStart);var o=this.props.mask(n),l=setTimeout(function(){if(clearTimeout(l),Object(i.exists)(e)&&r===document.activeElement&&"function"==typeof r.setSelectionRange){var t=o.length-n.length,a=e-Math.abs(t);r.setSelectionRange(a,a)}},0);return o}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.currentTarget,a=(void 0===n?{}:n).value,r=void 0===a?"":a;"blur"===t&&(r=Object(i.trim)(r)),r=this.applyMask(e,r),this.setState({value:r}),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,o=a.autofocus,l=a.disabled,i=a.label,u=a.maxlength,c=a.name,s=a.placeholder,d=a.readonly,p=a.required,f=a.size,b=a.type,h=a.width,m=this.handleChange,y=["t7-input"];(f||"auto"===h)&&y.push("t7-input--width-auto");var v={id:t,label:i,required:p},g={className:y=y.join(" "),disabled:l,id:t,name:c,placeholder:s,required:p,size:f,type:b,value:n,autoFocus:o,maxLength:u,onBlur:m,onChange:m,readOnly:d};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,v),r.a.createElement("input",g))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.mask,a=e.value,r=t.oldValue,o=null;return Object(i.exists)(a)&&a!==r&&(o={oldValue:a,value:n(a)}),o}}]),t}();T.propTypes={autofocus:l.a.bool,disabled:l.a.bool,id:l.a.string,label:l.a.string,maxlength:l.a.string,name:l.a.string,placeholder:l.a.string,readonly:l.a.bool,required:l.a.bool,type:l.a.string,width:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number]),value:l.a.oneOfType([l.a.string,l.a.number]),handleChange:l.a.func,mask:l.a.func},T.defaultProps={type:"text",handleChange:function(){},mask:function(e){return e}};var P=T,B=n(5),q=n.n(B);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,F(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r.a.Component),function(e,t,n){t&&z(e.prototype,t),n&&z(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.label,a=e.required;return r.a.createElement(q.a,{if:n},r.a.createElement("label",{className:"t7-label",htmlFor:t},n,r.a.createElement(q.a,{if:a}," ",r.a.createElement("abbr",{children:"*",className:"t7-label__abbr",title:"Required"}))))}}]),t}();V.propTypes={id:l.a.string,label:l.a.string,required:l.a.bool};var D=V;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function A(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,U(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r.a.Component),function(e,t,n){t&&H(e.prototype,t),n&&H(e,n)}(t,[{key:"render",value:function(){return r.a.createElement(k,L({},this.props,{type:"radio"}))}}]),t}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?X(e):t}(this,Q(t).call(this,e)),Object(i.bind)(X(X(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r.a.Component),function(e,t,n){t&&Y(e.prototype,t),n&&Y(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.currentTarget,n=(void 0===t?{}:t).value,a=void 0===n?"":n;this.setState({value:a}),this.props.handleChange(e,a)}},{key:"buildList",value:function(){return this.props.options.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.name,a=e.value;return r.a.createElement("option",{key:t,value:a},n)})}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,o=a.autofocus,l=a.disabled,i=a.label,u=a.name,c=a.readonly,s=a.required,d=a.width,p=this.handleChange,f=["t7-select"];"auto"===d&&f.push("t7-select--width-auto");var b={id:t,label:i,required:s},h={className:f=f.join(" "),disabled:l,id:t,name:u,required:s,value:n,autoFocus:o,onChange:p,readOnly:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,b),r.a.createElement("select",h,this.buildList()))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();Z.propTypes={autofocus:l.a.bool,disabled:l.a.bool,id:l.a.string,label:l.a.string,name:l.a.string,options:l.a.array,readonly:l.a.bool,required:l.a.bool,width:l.a.string,value:l.a.oneOfType([l.a.string,l.a.number]),handleChange:l.a.func},Z.defaultProps={options:[],handleChange:function(){}};var $=Z;function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var oe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?re(e):t}(this,ne(t).call(this,e)),Object(i.bind)(re(re(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,r.a.Component),function(e,t,n){t&&te(e.prototype,t),n&&te(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"componentDidMount",value:function(){document.body.setAttribute("spellcheck",!1)}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.currentTarget,a=(void 0===n?{}:n).value,r=void 0===a?"":a;"blur"===t&&(r=Object(i.trimMultiLine)(r)),this.setState({value:r}),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state,t=e.id,n=e.value,a=this.props,o=a.autofocus,l=a.disabled,i=a.label,u=a.maxlength,c=a.name,s=a.placeholder,d=a.readonly,p=a.required,f=this.handleChange,b={id:t,label:i,required:p},h={disabled:l,id:t,name:c,placeholder:s,required:p,value:n,autoFocus:o,className:"t7-textarea",maxLength:u,onBlur:f,onChange:f,readOnly:d};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,b),r.a.createElement("textarea",h))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();oe.propTypes={autofocus:l.a.bool,disabled:l.a.bool,id:l.a.string,label:l.a.string,name:l.a.string,placeholder:l.a.string,readonly:l.a.bool,required:l.a.bool,maxlength:l.a.oneOfType([l.a.string,l.a.number]),value:l.a.oneOfType([l.a.string,l.a.number]),handleChange:l.a.func},oe.defaultProps={handleChange:function(){}};var le=oe;function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?de(e):t}(this,ce(t).call(this,e)),Object(i.bind)(de(de(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r.a.Component),function(e,t,n){t&&ue(e.prototype,t),n&&ue(e,n)}(t,[{key:"defaultState",value:function(){var e=this.props,t=e.id,n=void 0===t?Object(i.unique)():t,a=e.value,r=void 0===a?"":a;this.state={id:n,value:r,oldValue:r}}},{key:"componentDidMount",value:function(){document.body.setAttribute("spellcheck",!1)}},{key:"handleFocus",value:function(e){Object(i.contentOnFocus)(e)}},{key:"handleKeyUp",value:function(e){Object(i.contentOnChange)(e),this.handleChange(e)}},{key:"handlePaste",value:function(e){Object(i.contentOnPaste)(e),this.handleChange(e)}},{key:"handleChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.props.placeholder,n=e.currentTarget,a=void 0===n?{}:n,r=a.innerHTML;(r=Object(i.contentToText)(r))===t&&(r=""),"function"==typeof a.setAttribute&&a.setAttribute("data-has-placeholder",!r),this.props.handleChange(e,r)}},{key:"render",value:function(){var e=this.state.id,t=this.props,n=t.autofocus,a=t.disabled,o=t.label,l=t.name,u=t.placeholder,c=t.readonly,s=t.required,d=this.state.value;d=d||u;var p={__html:Object(i.contentToMarkup)(d)},f=this.handleChange,b=this.handleFocus,h=this.handleKeyUp,m={id:e,label:o,required:s},y={dangerouslySetInnerHTML:p,disabled:a,id:e,name:l,placeholder:u,required:s,value:d,autoFocus:n,className:"t7-textarea",readOnly:c,onBlur:h,onFocus:b,onInput:f,onKeyUp:h,onPaste:this.handlePaste,contentEditable:!a&&!c,tabIndex:a?null:0,"data-has-placeholder":!d||Object(i.trim)(d)===Object(i.trim)(u)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,m),r.a.createElement("div",y))}}],[{key:"getDerivedStateFromProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.value,a=t.oldValue,r=null;return Object(i.exists)(n)&&n!==a&&(r={value:n,oldValue:n}),r}}]),t}();pe.propTypes={autofocus:l.a.bool,disabled:l.a.bool,id:l.a.string,label:l.a.string,name:l.a.string,placeholder:l.a.string,readonly:l.a.bool,required:l.a.bool,value:l.a.oneOfType([l.a.string,l.a.number]),handleChange:l.a.func},pe.defaultProps={handleChange:function(){}};var fe=pe;n.d(t,"Button",function(){return m}),n.d(t,"Checkbox",function(){return k}),n.d(t,"Input",function(){return P}),n.d(t,"Label",function(){return D}),n.d(t,"Radio",function(){return J}),n.d(t,"Select",function(){return $}),n.d(t,"Textarea",function(){return le}),n.d(t,"Textdiv",function(){return fe})},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),i=n(4),u=n.n(i),c=n(2),s=(n(35),n(37),n(39),n(41),n(3));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[{value:"",name:"Select..."},{value:"1",name:"Uno"},{value:"2",name:"Dos"},{value:"3",name:"Tres"}],y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?h(e):t}(this,f(t).call(this,e)),Object(c.bind)(h(h(n))),n.defaultState(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.a.Component),function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(t,[{key:"defaultState",value:function(){this.state={controlledInputValue:"TEST",controlledSelectValue:""}}},{key:"handleChangeControlledCheckbox",value:function(e,t,n){this.setState({controlledCheckboxBool:n})}},{key:"handleChangeControlledInput",value:function(e,t){this.setState({controlledInputValue:t})}},{key:"handleChangeControlledSelect",value:function(e,t){this.setState({controlledSelectValue:t})}},{key:"render",value:function(){var e=this.state,t=e.controlledCheckboxBool,n=e.controlledInputValue,a=e.controlledSelectValue,o=this.handleChangeControlledCheckbox,l=this.handleChangeControlledInput,i=this.handleChangeControlledSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"@t7/forms"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/T7-Components/forms/blob/master/source/demo.js"},'View "demo.js" on GitHub')),r.a.createElement("hr",null),r.a.createElement("h2",null,'Hybrid "controlled" elements…'),r.a.createElement("p",null,"The following form elements are examples of a hybrid approach, which involves treating all elements as if they have a ",r.a.createElement("code",null,"defaultValue"),", while still allowing them to be overridden by a change to ",r.a.createElement("code",null,"this.props.value"),"."),r.a.createElement("p",null,"This is made possible each component having its own internal ",r.a.createElement("code",null,"this.state.value"),", but also watching for changes via ",r.a.createElement("code",null,"getDerivedStateFromProps"),". It has been our experience that this most closely aligns conceptually, with how one might expect form elements to work in a non-React environment."),r.a.createElement("p",null,'If for some reason an input literally needed to be fully "controlled," this could still be accomplished by using the ',r.a.createElement("code",null,"readonly")," attribute."),r.a.createElement("h3",null,"Hybrid: Checkboxes"),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:"Master checkbox",checked:t,handleChange:o})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:'Checkbox: changes with "Master checkbox"',checked:t})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{disabled:!0,label:'Checkbox: changes with "Master checkbox" (disabled)',checked:t})),r.a.createElement("h3",null,"Hybrid: Select inputs"),r.a.createElement("p",null,r.a.createElement(s.Select,{label:"Master select",options:m,value:a,handleChange:i})),r.a.createElement("p",null,r.a.createElement(s.Select,{label:'Select: changes with "Master select"',options:m,value:a})),r.a.createElement("p",null,r.a.createElement(s.Select,{disabled:!0,label:'Select: changes with "Master select" (disabled)',options:m,value:a})),r.a.createElement("h3",null,"Hybrid: Text inputs"),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Master input",value:n,handleChange:l})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:'Input: changes with "Master input"',value:n})),r.a.createElement("p",null,r.a.createElement(s.Input,{readonly:!0,label:'Input: changes with "Master input" (readonly)',value:n})),r.a.createElement("p",null,r.a.createElement(s.Input,{disabled:!0,label:'Input: changes with "Master input" (disabled)',value:n})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{label:'Textarea: changes with "Master input"',value:n})),r.a.createElement(s.Textdiv,{label:'Textdiv: changes with "Master input"',value:n}),r.a.createElement("hr",null),r.a.createElement("h2",null,"Other examples…"),r.a.createElement("p",null,r.a.createElement(s.Input,{required:!0,label:"Input",placeholder:"Input placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Input,{label:"Numeric input (with mask)",placeholder:"Numbers only, please",value:"0123456789",mask:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\D/g,"")}})),r.a.createElement("p",null,r.a.createElement(s.Input,{disabled:!0,label:"Input (disabled)",placeholder:"Input placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Select,{required:!0,label:"Select",options:m})),r.a.createElement("p",null,r.a.createElement(s.Select,{disabled:!0,label:"Select (disabled)",options:m})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{required:!0,label:"Textarea",placeholder:"Textarea placeholder"})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{readonly:!0,label:"Textarea (readonly)",placeholder:"Textarea placeholder",value:"Read only value"})),r.a.createElement("p",null,r.a.createElement(s.Textarea,{disabled:!0,label:"Textarea (disabled)",placeholder:"Textarea placeholder"})),r.a.createElement(s.Textdiv,{required:!0,label:"Textdiv",placeholder:"Textdiv placeholder"}),r.a.createElement(s.Textdiv,{readonly:!0,label:"Textdiv (readonly)",placeholder:"Textarea placeholder",value:"Read only value"}),r.a.createElement(s.Textdiv,{disabled:!0,label:"Textdiv (disabled)",placeholder:"Textdiv placeholder"}),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{disabled:!0,label:"Checkbox (disabled)"})),r.a.createElement("p",null,r.a.createElement(s.Checkbox,{label:"By submitting this form, you hereby grant ACME Corp. the right to conduct a background check. If you are found to be falsifying information, you will be prosecuted to the fullest extent of intergalactic law. You also acknowledge that should you be accepted to the training program, we reserve the right to eject you (into space) if you are a danger to the rest of the crew. If you are captured during any covert missions, Space Force will disavow all knowledge of your official involvement, and you will be branded as a rogue agent."})),r.a.createElement("p",null,r.a.createElement(s.Radio,{checked:!0,label:"Radio label 1",name:"radio_list"})),r.a.createElement("p",null,r.a.createElement(s.Radio,{label:"Radio label 2",name:"radio_list"})),r.a.createElement("p",null,r.a.createElement(s.Radio,{disabled:!0,label:"Radio label 3 (disabled)",name:"radio_list"})),r.a.createElement("p",null,"Example ",r.a.createElement("code",null,"<a>")," tag, styled as a button:"),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{href:"https://example.com/",target:"_blank",children:"Open example.com"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,href:"https://example.com/",target:"_blank",children:"Open example.com"}))),r.a.createElement("p",null,"All ",r.a.createElement("code",null,"<button>")," permutations:"),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",size:"small",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",size:"small",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",size:"small",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"primary",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"positive",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"negative",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{mode:"warn",size:"big",children:"Button"}))),r.a.createElement(u.a,null,r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"primary",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"positive",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"negative",size:"big",children:"Button"})),r.a.createElement("li",null,r.a.createElement(s.Button,{disabled:!0,mode:"warn",size:"big",children:"Button"}))))}}]),t}(),v=document.getElementById("root");l.a.render(r.a.createElement(y,null),v)}});