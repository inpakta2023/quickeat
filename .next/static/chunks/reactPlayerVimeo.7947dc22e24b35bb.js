(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{868:function(e,t,r){var s,o,a=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of n(t))h.call(e,o)||o===r||i(e,o,{get:()=>t[o],enumerable:!(s=l(t,o))||s.enumerable});return e},y=(e,t,r)=>(u(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>g}),e.exports=c(i({},"__esModule",{value:!0}),d);var f=(o=null!=(s=r(7294))?a(p(s)):{},c(s&&s.__esModule?o:i(o,"default",{value:s,enumerable:!0}),s)),m=r(8045),b=r(1776);let P=e=>e.replace("/manage/videos","");class g extends f.Component{constructor(){super(...arguments),y(this,"callPlayer",m.callPlayer),y(this,"duration",null),y(this,"currentTime",null),y(this,"secondsLoaded",null),y(this,"mute",()=>{this.setMuted(!0)}),y(this,"unmute",()=>{this.setMuted(!1)}),y(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,m.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(t=>{if(!this.container)return;let{playerOptions:r,title:s}=this.props.config;this.player=new t.Player(this.container,{url:P(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then(()=>{let e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",s&&(e.title=s)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",e=>this.props.onSeek(e.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:e})=>{this.currentTime=e}),this.player.on("progress",({seconds:e})=>{this.secondsLoaded=e}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",e=>this.props.onPlaybackRateChange(e.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){let e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let{display:e}=this.props;return f.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}}y(g,"displayName","Vimeo"),y(g,"canPlay",b.canPlay.vimeo),y(g,"forceLoad",!0)}}]);