var K=Object.defineProperty,x=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,a=(e,t)=>{for(var s in t||(t={}))$.call(t,s)&&f(e,s,t[s]);if(y)for(var s of y(t))E.call(t,s)&&f(e,s,t[s]);return e},l=(e,t)=>x(e,C(t));import{n as w,y as o,d as m,m as _,i as h,e as g}from"./index.93fcec6c.js";const N={name:"base-keymap",computed:{styles(){let e=.85,t=.61;return this.config.SCALE<1&&(e*=(1+this.config.SCALE)/2,t*=(1+this.config.SCALE)/2),{"--unit-width":"1","--unit-height":"1","--default-smaller-key-font-size":`${t}rem`,"--default-key-font-size":`${e}rem`,"--default-key-height":`${this.config.KEY_HEIGHT}px`,"--default-key-width":`${this.config.KEY_WIDTH}px`,"--default-key-x-spacing":`${this.config.KEY_X_SPACING}px`,"--default-key-y-spacing":`${this.config.KEY_Y_SPACING}px`,width:`${this.width}px`,height:`${this.height}px`}}},methods:{calcKeyKeymapDims(e,t){return{w:e*this.config.KEY_X_SPACING-(this.config.KEY_X_SPACING-this.config.KEY_WIDTH),h:t*this.config.KEY_Y_SPACING-(this.config.KEY_Y_SPACING-this.config.KEY_HEIGHT),uh:t,uw:e}},calcKeyKeymapPos(e,t){return{x:e*this.config.KEY_X_SPACING,y:t*this.config.KEY_Y_SPACING}},setSize(e){this.width=e.x,this.height=e.y},calculateMax(e){const s=this.layouts[e].reduce((i,r)=>{let n=Object.assign({w:1,h:1},r);const d=this.calcKeyKeymapPos(n.x,n.y),p=this.calcKeyKeymapDims(n.w,n.h);return i.x=Math.max(i.x,d.x+p.w),i.y=Math.max(i.y,d.y+p.h),i},{x:0,y:0});return s.x>this.defaults.MAX_X&&(this.resizeConfig(s),s.x*=this.config.SCALE,s.y*=this.config.SCALE),s}}};let b,Y;const v={};var I=w(N,b,Y,!1,A,null,null,null);function A(e){for(let t in v)this[t]=v[t]}var L=function(){return I.exports}(),z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"key",class:e.myclasses,style:e.mystyles,attrs:{draggable:"",id:e.myid,title:e.myTitle},on:{click:e.clicked,dragstart:e.dragstart,dragend:e.dragend,drop:function(i){return i.stopPropagation(),e.dropped.apply(null,arguments)},dragleave:function(i){return i.preventDefault(),e.dragleave.apply(null,arguments)},dragover:function(i){return i.preventDefault(),e.dragover.apply(null,arguments)},dragenter:function(i){return i.preventDefault(),e.dragenter.apply(null,arguments)}}},[e._v(e._s(e.displayName)),e.icon?s("font-awesome-icon",{attrs:{size:"2x",icon:e.icon}}):e._e(),e.visible?[e.visible?s("div",{staticClass:"remove",on:{click:function(i){return i.stopPropagation(),e.remove.apply(null,arguments)}}},[e._v("x")]):e._e()]:e._e()],2)},H=[];let u=Object.assign({},o.iconCodes,o.platformIcons(window.navigator.platform));const G=(e,t)=>{if(e==1)switch(t){case 1:return"k1u";case 1.25:return"k125u";case 1.5:return"k15u";case 1.75:return"k175u";case 2:return"k2u";case 2.25:return"k225u";case 2.75:return"k275u";case 3:return"k3u";case 4:return"k4u";case 6:return"k6u";case 6.25:return"k625u";case 7:return"k7u"}if(t==1)switch(e){case 1.25:return"k125uh";case 1.5:return"k15uh";case 1.75:return"k175uh";case 2:return"k2uh"}if(e===2){if(t===1.25)return"kiso";if(t===2.25)return"kbae"}return"custom"},c=new Map,k=(e,t)=>{const s=`${e}-${t}`;if(c.has(s))return c.get(s);const r=G(e,t);return c.set(s,r),r},P={name:"base-key",props:{id:Number,meta:Object,w:Number,h:Number,y:Number,x:Number,uh:Number,uw:Number,colorway:String,displaySizes:{type:Boolean,default:!1},printable:{type:Boolean,default:!1}},computed:l(a(a(a(a({},m("keymap",["config"])),m("keymap",{curLayer:"layer"})),_("keymap",["getKey","getSelectedKey","colorwayOverride"])),_("keycodes",["lookupKeycode"])),{myTitle(){return this.meta?this.meta.code:""},myid(){return`key-${this.id}`},visible(){return this.meta?this.meta.code!=="KC_NO":!1},displayName(){if(this.displaySizes)return this.uh>this.uw?this.uw===1?this.uh:`${this.uw} /
 ${this.uh}`:this.uw;if(!h(this.meta)&&h(u[this.meta.code])){const{name:e}=this.lookupKeycode(this.meta.code);return this.formatName(e||this.meta.name)}},icon(){if(!this.displaySizes&&this.meta&&u[this.meta.code])return u[this.meta.code]},isSelected(){return this.id===this.getSelectedKey&&!this.$store.state.keymap.selectedContent},isContentSelected(){return this.$store.state.keymap.selectedContent&&this.id===this.getSelectedKey},myclasses(){let e=[];this.isSelected&&e.push("keycode-select"),this.inHover&&e.push("overme"),this.inSwap&&e.push("swapme"),this.meta&&this.meta.name.length>=2&&!this.displaySizes&&e.push("smaller");const{KEY_WIDTH:t,KEY_HEIGHT:s}=this.config;return e.push(k(this.uh,this.uw)),!h(this.meta)&&!this.printable&&(this.colorwayOverride&&this.colorwayOverride[this.meta.code]?e.push(`${this.colorway}-${this.colorwayOverride[this.meta.code]}`):o.alphaCodes[this.meta.code]?e.push(`${this.colorway}-key`):o.modCodes[this.meta.code]||this.w<=t*3&&(this.w>t||this.h>s)?(e.push("mod"),e.push(`${this.colorway}-mod`)):e.push(`${this.colorway}-key`)),e.join(" ")},mystyles(){let e=[];return this.y>0&&e.push(`top: ${this.y}px;`),this.x>0&&e.push(`left: ${this.x}px;`),k(this.uh,this.uw)==="custom"&&(this.uw!==1&&e.push(`--unit-width: ${this.uw};`),this.uh!==1&&e.push(`--unit-height: ${this.uh};`)),e.join("")}}),methods:l(a(a({},g("keymap",["setSelected","setKeycode","swapKeys","setSelectedContent"])),g("app",["stopListening","startListening"])),{clicked(){let e=this.id;this.isSelected&&(e=void 0),this.setSelected(e)},dropped(e){this.setSelected(this.id);let t=JSON.parse(e.dataTransfer.getData("application/json"));t.action==="swap"?(console.log(`swapping ${t.id} with ${this.id}`),this.swapKeys({layer:this.curLayer,srcIndex:t.id,dstIndex:this.id})):this.setKeycode({_code:t.code,layer:t.layer}),this.dragleave()},dragend(){this.inSwap=!1,this.inHover=!1,this.$el.style.opacity="1"},dragover(){return!1},dragenter(){this.inHover=!0},dragleave(){this.inHover=!1},dragstart(e){this.inSwap=!0;let{id:t}=this;e.dropEffect="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("application/json",JSON.stringify({action:"swap",id:t}))},formatName(e){return e.length===1?e.toUpperCase():e},remove(){this.setSelected(this.id),this.setKeycode({_code:"KC_NO"})},clickContents(){let e=this.id;this.isContentSelected&&(e=void 0),this.setSelectedContent(e)}}),data(){return{inHover:!1,inSwap:!1,platform:void 0}}},S={};var O=w(P,z,H,!1,T,null,null,null);function T(e){for(let t in S)this[t]=S[t]}var M=function(){return O.exports}();export{M as B,L as a};
