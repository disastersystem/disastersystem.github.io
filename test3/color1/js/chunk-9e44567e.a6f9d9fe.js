(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e44567e"],{"253d":function(t,e,s){},"4bf2":function(t,e,s){},"4c34":function(t,e,s){},"4c94":function(t,e,s){},"518f":function(t,e,s){"use strict";var i=s("773e"),a=s.n(i);a.a},"773e":function(t,e,s){},"855a":function(t,e,s){"use strict";var i=s("4bf2"),a=s.n(i);a.a},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-layout",{staticClass:"fake-cover-image justify-center align-center"},[t._v("\n     Stort bilde her\n  ")]),s("v-container",{staticStyle:{"border-bottom":"1px solid #ccc"},attrs:{fluid:""}},[s("v-layout",{attrs:{"justify-center":"","align-center":"",wrap:"","pt-3":"","pb-3":""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","pr-5":""}},[s("h4",{staticClass:"headline"},[t._v("\n          Lyst til å lære hvordan du som helt utrent på bare noen uker kan klare å løpe en mil i strekk?\n        ")]),s("h4",{staticClass:"subheading"},[t._v("\n          Få mine beste råd for hva man skal tenke på når man har lyst til å begynne med løping\n        ")])]),s("v-flex",{attrs:{xs12:"",sm12:"",md3:"",lg3:"",xl3:""}},[s("v-text-field",{attrs:{rules:[t.rules.required],"validate-on-blur":!0,label:"Navn"}}),s("v-text-field",{attrs:{rules:[t.rules.required,t.rules.email],"validate-on-blur":!0,label:"Epost"}}),s("button",{staticClass:"button submit",attrs:{tag:"button"},on:{click:t.optIn}},[s("span",[t._v("Ja takk")])])],1)],1)],1),s("v-container",{staticStyle:{"margin-bottom":"200px"},attrs:{fluid:"","mt-5":""}},[s("v-layout",{attrs:{"justify-center":"","mt-5":"","mb-4":""}},[s("h2",{staticClass:"headline"},[t._v("Tilpassede treningsprogram")])]),s("Cards")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{wrap:"","justify-center":""}},t._l(t.programs,function(e,i){return s("v-flex",{key:i,attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl4:"","mb-5":""}},[s("v-card",{staticClass:"program-card ml-3 mr-3 mt-3"},[s("div",{staticClass:"fake-image"},[t._v("\n        Bilde kommer her\n      ")]),s("div",{staticClass:"title-wrapper"},[s("v-card-title",{staticClass:"pl-4 pr-4",attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline"},[t._v("\n              "+t._s(e.title)+"\n            ")]),s("h3",{staticClass:"subheading"},[t._v("\n              kr "+t._s(e.price)+"\n            ")]),s("div",{staticClass:"mt-3",domProps:{innerHTML:t._s(e.desc)}})])]),s("v-card-text",t._l(e.included,function(e,i){return s("v-layout",{key:i,attrs:{"mb-2":""}},[s("v-flex",{attrs:{shrink:"","mr-2":""}},[s("v-icon",{attrs:{color:!1===e.included?"#ccc":"#000"}},[t._v("done")])],1),s("v-flex",{class:!1===e.included?"not-included":"included",attrs:{grow:""}},[s("span",{domProps:{innerHTML:t._s(e.text)}})])],1)}),1)],1),s("v-card-actions",{staticClass:"justify-center"},[s("div",{staticStyle:{"margin-bottom":"6px"}},[s("router-link",{staticClass:"button submit",attrs:{tag:"button",to:"/program/"+e.id}},[s("span",[t._v("Finn ut mer")])])],1)]),s("div")],1)],1)}),1)},n=[],o={data:function(){return{programs:[{id:1,title:"Løpeprogram Basic",desc:'For deg som har som mål å løpe 10 km eller halvmaraton på 12 uker. <span style="opacity: 0">og vil ha tettere oppfølging fra fysioterapeut.</span>',price:999,included:[{text:"Skreddersydd løpeprogram"},{text:"Eget skadeforebygende øvelsesprogram"},{text:"Chat med andre som har samme mål <br/> i lukket facebookgruppe"},{text:"Kostholdstips"},{text:"Tips til utstyr"},{text:"Motivasjonsboost mailer"},{text:"20 min oppstartssamtale",included:!1},{text:"Svar på spørsmål underveis på mail",included:!1},{text:"Ukentlige konsultasjon",included:!1}]},{id:2,title:"Løpeprogram Sølv",desc:"For deg som har som mål å løpe 10 km eller halvmaraton på 12 uker, og vil ha tettere oppfølging fra fysioterapeut.",price:1699,included:[{text:"Skreddersydd løpeprogram"},{text:"Eget skadeforebygende øvelsesprogram"},{text:"Chat med andre som har samme mål <br/> i lukket facebookgruppe"},{text:"Kostholdstips"},{text:"Tips til utstyr"},{text:"Motivasjonsboost mailer"},{text:"20 min oppstartssamtale"},{text:"Svar på spørsmål underveis på mail"},{text:"Ukentlige konsultasjon",included:!1}]},{id:3,title:"Løpeprogram Gull",desc:"For deg som har som mål å løpe 10 km eller halvmaraton på 12 uker, og vil ha tettere oppfølging fra fysioterapeut.",price:2499,included:[{text:"Skreddersydd løpeprogram"},{text:"Eget skadeforebygende øvelsesprogram"},{text:"Chat med andre som har samme mål <br/> i lukket facebookgruppe"},{text:"Kostholdstips"},{text:"Tips til utstyr"},{text:"Motivasjonsboost mailer"},{text:"20 min oppstartssamtale"},{text:"Svar på spørsmål underveis på mail"},{text:"Ukentlige konsultasjon"}]}]}}},l=o,c=(s("855a"),s("2877")),d=s("6544"),u=s.n(d),m=(s("4c94"),s("d0e7"),s("b64a")),h=s("2b0e");function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var g=h["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?p({},"elevation-"+this.computedElevation,!0):{}}}}),v=s("80d2"),f=h["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(v["a"])(this.height),s=Object(v["a"])(this.minHeight),i=Object(v["a"])(this.minWidth),a=Object(v["a"])(this.maxHeight),r=Object(v["a"])(this.maxWidth),n=Object(v["a"])(this.width);return e&&(t.height=e),s&&(t.minHeight=s),i&&(t.minWidth=i),a&&(t.maxHeight=a),r&&(t.maxWidth=r),n&&(t.width=n),t}}}),b=s("6a18"),y=s("58df"),S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},x=Object(y["a"])(m["a"],g,f,b["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return S({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=x,_=s("0d01"),C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},j=Object(y["a"])(_["a"],k).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return C({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},k.options.computed.classes.call(this))},styles:function(){var t=C({},k.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),s=e.tag,i=e.data;return i.style=this.styles,t(s,this.setBackgroundColor(this.color,i),this.$slots.default)}}),O=(s("253d"),s("4c34"),Object(y["a"])(f).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}})),z=O,w=s("d9bd"),L=z.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(w["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(w["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=s&&setTimeout(i,s)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=z.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),$=(L.extend({name:"v-card-media",mounted:function(){Object(w["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),h["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var s=e.data,i=e.props,a=e.children;return s.staticClass=("v-card__title "+(s.staticClass||"")).trim(),i.primaryTitle&&(s.staticClass+=" v-card__title--primary"),t("div",s,a)}})),E=Object(v["c"])("v-card__actions"),R=Object(v["c"])("v-card__text"),F=s("0e8f"),B=s("132d"),I=s("a722"),N=Object(c["a"])(l,r,n,!1,null,"2e6ffaa0",null),T=N.exports;u()(N,{VCard:j,VCardActions:E,VCardText:R,VCardTitle:$,VFlex:F["a"],VIcon:B["a"],VLayout:I["a"]});var A={name:"Home",components:{Cards:T},data:function(){return{name:"",email:"",rules:{required:function(t){return!!t||"Felt kan ikke være tomt."},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Ugyldig epost."}}}},methods:{optIn:function(){}}},V=A,H=(s("518f"),s("a523")),P=s("2677"),W=Object(c["a"])(V,i,a,!1,null,"6273e4d3",null);e["default"]=W.exports;u()(W,{VContainer:H["a"],VFlex:F["a"],VLayout:I["a"],VTextField:P["a"]})},d0e7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-9e44567e.a6f9d9fe.js.map