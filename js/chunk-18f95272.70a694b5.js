(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f95272"],{"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},d5e1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tarjeta-audio"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col"},[i("div",{staticClass:"tarjeta-audio__texto h5 fst-italic mb-0",domProps:{innerHTML:t._s(t.texto)}}),t.noBarra?t._e():i("div",{staticClass:"tarjeta-audio__input mt-2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderVal,expression:"sliderVal"}],ref:"sliderElement",style:{"background-size":this.sliderVal+"% 100%"},attrs:{type:"range",max:"100"},domProps:{value:t.sliderVal},on:{input:t.onSliderMove,__r:function(e){t.sliderVal=e.target.value}}})])]),i("div",{staticClass:"col-auto ps-0"},[i("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn",on:{click:t.play}},[i("img",{attrs:{src:a("5ccd")}})]):i("button",{staticClass:"audio__btn",on:{click:t.pause}},[i("img",{attrs:{src:a("f034")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)])])])},s=[],n=a("8fb3"),o={name:"TarjetaAudio",mixins:[n["a"]],props:{texto:{type:String,required:!0},noBarra:{type:Boolean,default:!1}},data:function(){return{sliderVal:0}},mounted:function(){var t=this;this.noBarra||(this.audioElement.ontimeupdate=function(){t.sliderVal=t.audioElement.currentTime/t.audioDuration*100})},methods:{onSliderMove:function(){this.audioElement.currentTime=this.sliderVal/100*this.audioDuration}}},u=o,d=a("2877"),r=Object(d["a"])(u,i,s,!1,null,null,null);e["default"]=r.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-18f95272.70a694b5.js.map