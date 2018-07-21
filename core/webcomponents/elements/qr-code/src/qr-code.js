'use strict';(function(a){if('function'===typeof define&&define.amd)define(['QRCode'],a);else if('object'===('undefined'===typeof module?'undefined':babelHelpers.typeof(module))&&module.exports){var b=require('qrjs');module.exports=a(b)}else a(window.QRCode)})(function(a){var b=Object.create(HTMLElement.prototype,{attrs:{value:{data:null,format:'png',modulesize:5,margin:4}},defineAttributes:{value:function(){for(var a,b=Object.keys(this.attrs),c=0;c<b.length;c++)a=b[c],function(a){Object.defineProperty(this,a,{get:function(){var b=this.getAttribute(a);return null===b?this.attrs[a]:b},set:function(b){this.setAttribute(a,b)}})}.bind(this)(a)}},createdCallback:{value:function(){this.createShadowRoot(),this.defineAttributes(),this.generate()}},attributeChangedCallback:{value:function(a,b,c){var d=this[a+'Changed'];d&&'function'===typeof d&&d.call(this,b,c),this.generate()}},getOptions:{value:function(){var a=this.modulesize,b=this.margin;return{modulesize:null===a?a:parseInt(a),margin:null===b?b:parseInt(b)}}},generate:{value:function(){null===this.data?this.shadowRoot.innerHTML='<div>qr-code: no data!</div>':'png'===this.format?this.generatePNG():'html'===this.format?this.generateHTML():'svg'===this.format?this.generateSVG():this.shadowRoot.innerHTML='<div>qr-code: '+this.format+' not supported!</div>'}},generatePNG:{value:function(){try{var b=document.createElement('img');b.src=a.generatePNG(this.data,this.getOptions()),this.clear(),this.shadowRoot.appendChild(b)}catch(a){this.shadowRoot.innerHTML='<div>qr-code: no canvas support!</div>'}}},generateHTML:{value:function(){var b=a.generateHTML(this.data,this.getOptions());this.clear(),this.shadowRoot.appendChild(b)}},generateSVG:{value:function(){var b=a.generateSVG(this.data,this.getOptions());this.clear(),this.shadowRoot.appendChild(b)}},clear:{value:function(){for(;this.shadowRoot.lastChild;)this.shadowRoot.removeChild(this.shadowRoot.lastChild)}}});document.registerElement('qr-code',{prototype:b})});