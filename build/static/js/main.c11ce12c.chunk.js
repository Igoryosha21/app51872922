(window.webpackJsonpminiapp=window.webpackJsonpminiapp||[]).push([[0],{199:function(e,t,r){e.exports=r(308)},285:function(e,t,r){},286:function(e,t,r){},287:function(e,t,r){},289:function(e,t,r){},308:function(e,t,r){"use strict";r.r(t);r(200),r(226),r(228),r(229),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268);var n=r(0),a=r.n(n),s=r(44),i=r.n(s),c=(r(276),r(277),r(11)),o=(r(285),r(286),r(287),r(34)),l=r(4),u=r.n(l),p=r(7),h=r(96),f=r(97),d=r(100),m=r(98),g=r(29),_=r(101),b=r(35),k=r(9),v=r.n(k);function C(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";this.back=Object(p.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.popout){t.next=4;break}return e.setState({popout:null}),window.history.pushState({pop:"popout"},"Title"),t.abrupt("return");case 4:if(1!==(r=e.state.history).length){t.next=9;break}v.a.send("VKWebAppClose",{status:"success"}),t.next=13;break;case 9:if(!(r.length>1)){t.next=13;break}return r.pop(),t.next=13,e.setState({activePanel:r[r.length-1],history:r,snackbar:null});case 13:case"end":return t.stop()}}),t)}))),this.go=function(t){var r=e.state.history;"object"===typeof t&&t.currentTarget&&(t=t.currentTarget.dataset.to),r[r.length-1]!==t&&(r.push(t),window.history.pushState({activePanel:t},"Title"),e.setState({activePanel:t,history:r,snackbar:null}))},this.setActiveModal=function(t){e.setState({activeModal:t})},this.setActivePanel=function(t,r){e.setState({activePanel:t,history:r?[].concat(Object(b.a)(r),[t]):[t]})},this.setPopout=function(t){e.setState({popout:t})},this.state.history=[t],this.state.activePanel=t}function y(){return{activePanel:this.state.activePanel,onSwipeBack:this.back,history:this.state.history,popout:this.state.popout}}r(289);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var O=a.a.createElement("g",{clipPath:"url(#clip0_5_699)"},a.a.createElement("rect",{width:96,height:96,rx:39.5145,fill:"url(#paint0_linear_5_699)"}),a.a.createElement("g",{filter:"url(#filter0_f_5_699)"},a.a.createElement("circle",{cx:105.469,cy:18.0938,r:36.0938,fill:"url(#paint1_linear_5_699)"})),a.a.createElement("g",{filter:"url(#filter1_f_5_699)"},a.a.createElement("circle",{cx:23.9062,cy:95.9062,r:36.0938,fill:"url(#paint2_linear_5_699)"})),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.4107 36.4687C35.0422 36.4687 29.8795 41.6315 29.8795 48C29.8795 54.3685 35.0422 59.5312 41.4107 59.5312C45.7288 59.5312 49.4926 57.1578 51.4685 53.6442C51.4897 53.6019 51.5125 53.5608 51.5369 53.5209C52.4328 51.8812 52.942 50.0001 52.942 48C52.942 41.6315 47.7792 36.4687 41.4107 36.4687ZM53.7671 56.1959C54.0379 56.2228 54.3121 56.2366 54.5893 56.2366C57.0496 56.2366 59.2595 55.1558 60.7663 53.4486C61.3683 52.7665 61.3034 51.7255 60.6213 51.1234C59.9392 50.5214 58.8982 50.5863 58.2962 51.2684C57.5618 52.1004 56.5558 52.6813 55.4171 52.8731C55.9481 51.3468 56.2366 49.7071 56.2366 48C56.2366 43.6077 54.3266 39.6615 51.2918 36.9467C52.3357 36.6358 53.4422 36.4687 54.5893 36.4687C60.9578 36.4687 66.1205 41.6315 66.1205 48C66.1205 54.3685 60.9578 59.5312 54.5893 59.5312C53.4422 59.5312 52.3357 59.3642 51.2918 59.0533C52.2329 58.2115 53.0658 57.2512 53.7671 56.1959ZM48.0004 61.2846C46.0154 62.2711 43.7778 62.8259 41.4107 62.8259C33.2226 62.8259 26.5848 56.1881 26.5848 48C26.5848 39.8119 33.2226 33.1741 41.4107 33.1741C43.7778 33.1741 46.0154 33.7288 48.0004 34.7154C49.9866 33.7286 52.2251 33.1741 54.5893 33.1741C62.7774 33.1741 69.4152 39.8119 69.4152 48C69.4152 56.1881 62.7774 62.8259 54.5893 62.8259C52.2251 62.8259 49.9866 62.2714 48.0004 61.2846ZM35.3787 51.1234C36.0608 50.5214 37.1018 50.5863 37.7038 51.2684C38.6118 52.2971 39.9349 52.9419 41.4107 52.9419C42.8865 52.9419 44.2097 52.2971 45.1176 51.2684C45.7197 50.5863 46.7607 50.5214 47.4428 51.1234C48.1249 51.7255 48.1898 52.7665 47.5877 53.4486C46.0809 55.1558 43.871 56.2366 41.4107 56.2366C38.9504 56.2366 36.7405 55.1558 35.2337 53.4486C34.6316 52.7665 34.6966 51.7255 35.3787 51.1234ZM36.0569 43.058C34.9197 43.058 33.9978 43.9799 33.9978 45.1172C33.9978 46.2544 34.9197 47.1763 36.0569 47.1763C37.1942 47.1763 38.1161 46.2544 38.1161 45.1172C38.1161 43.9799 37.1942 43.058 36.0569 43.058ZM44.7054 45.1172C44.7054 43.9799 45.6273 43.058 46.7645 43.058C47.9017 43.058 48.8237 43.9799 48.8237 45.1172C48.8237 46.2544 47.9017 47.1763 46.7645 47.1763C45.6273 47.1763 44.7054 46.2544 44.7054 45.1172ZM57.8839 45.1172C57.8839 43.9799 58.8058 43.058 59.9431 43.058C61.0803 43.058 62.0022 43.9799 62.0022 45.1172C62.0022 46.2544 61.0803 47.1763 59.9431 47.1763C58.8058 47.1763 57.8839 46.2544 57.8839 45.1172Z",fill:"white"})),x=a.a.createElement("defs",null,a.a.createElement("filter",{id:"filter0_f_5_699",x:31.125,y:-56.25,width:148.688,height:148.688,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.a.createElement("feGaussianBlur",{stdDeviation:19.125,result:"effect1_foregroundBlur_5_699"})),a.a.createElement("filter",{id:"filter1_f_5_699",x:-50.4375,y:21.5625,width:148.688,height:148.688,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.a.createElement("feGaussianBlur",{stdDeviation:19.125,result:"effect1_foregroundBlur_5_699"})),a.a.createElement("linearGradient",{id:"paint0_linear_5_699",x1:-48,y1:48,x2:48,y2:144,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#70B2FF"}),a.a.createElement("stop",{offset:1,stopColor:"#5C9CE6"})),a.a.createElement("linearGradient",{id:"paint1_linear_5_699",x1:33.2812,y1:18.0938,x2:105.469,y2:90.2812,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#C48AFF"}),a.a.createElement("stop",{offset:1,stopColor:"#AA65F0"})),a.a.createElement("linearGradient",{id:"paint2_linear_5_699",x1:96.0938,y1:95.9062,x2:23.9062,y2:23.7188,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#65C2C2"}),a.a.createElement("stop",{offset:1,stopColor:"#86D1D1"})),a.a.createElement("clipPath",{id:"clip0_5_699"},a.a.createElement("rect",{width:96,height:96,rx:39.5145,fill:"white"}))),j=function(e){var t=e.svgRef,r=e.title,n=w(e,["svgRef","title"]);return a.a.createElement("svg",E({width:96,height:96,viewBox:"0 0 96 96",fill:"none",ref:t},n),r?a.a.createElement("title",null,r):null,O,x)},S=a.a.forwardRef((function(e,t){return a.a.createElement(j,E({svgRef:t},e))}));r.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var M=a.a.createElement("rect",{width:96,height:96,rx:39,fill:"url(#paint0_linear_5_844)"}),U=a.a.createElement("g",{filter:"url(#filter0_f_5_844)"},a.a.createElement("circle",{cx:105.469,cy:18.0938,r:36.0938,fill:"url(#paint1_linear_5_844)"})),F=a.a.createElement("g",{filter:"url(#filter1_f_5_844)"},a.a.createElement("circle",{cx:23.9062,cy:95.9062,r:36.0938,fill:"url(#paint2_linear_5_844)"})),A=a.a.createElement("path",{d:"M54.4494 29.9314C57.6664 29.9654 59.3036 30.312 61.0011 31.2199C62.626 32.0889 63.9111 33.374 64.7801 34.9989C65.688 36.6964 66.0346 38.3336 66.0686 41.5506V54.4494C66.0346 57.6664 65.688 59.3036 64.7801 61.0011C63.9111 62.626 62.626 63.9111 61.0011 64.7801C59.3036 65.688 57.6664 66.0346 54.4494 66.0686H41.5506C38.3336 66.0346 36.6964 65.688 34.9989 64.7801C33.374 63.9111 32.0889 62.626 31.2199 61.0011C30.312 59.3036 29.9653 57.6664 29.9314 54.4494V41.5506C29.9653 38.3336 30.312 36.6964 31.2199 34.9989C32.0889 33.374 33.374 32.0889 34.9989 31.2199C36.6964 30.312 38.3336 29.9654 41.5506 29.9314H54.4494ZM41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.68 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.68 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4515 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4515 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"white"}),B=a.a.createElement("path",{d:"M41.186 33.2223C38.7557 33.2684 37.6675 33.5188 36.5484 34.1173C35.4961 34.6801 34.6801 35.4961 34.1173 36.5484C33.5188 37.6675 33.2684 38.7557 33.2223 41.186V54.814C33.2684 57.2443 33.5188 58.3325 34.1173 59.4516C34.6801 60.5039 35.4961 61.3199 36.5484 61.8827C37.6675 62.4812 38.7557 62.7316 41.186 62.7777H54.814C57.2443 62.7316 58.3324 62.4812 59.4516 61.8827C60.5039 61.3199 61.3199 60.5039 61.8827 59.4516C62.4812 58.3325 62.7316 57.2443 62.7777 54.814V41.186C62.7316 38.7557 62.4812 37.6675 61.8827 36.5484C61.3199 35.4961 60.5039 34.6801 59.4516 34.1173C58.3324 33.5188 57.2443 33.2684 54.814 33.2223H41.186Z",fill:"#3F8AE0"}),G=a.a.createElement("g",{mask:"url(#mask0_5_844)"},a.a.createElement("circle",{cx:48,cy:76.75,r:19.7143,stroke:"white",strokeWidth:3.28571}),a.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"})),R=a.a.createElement("path",{d:"M48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM48 40.6071C45.5035 40.6071 43.4821 42.6285 43.4821 45.125C43.4821 47.6215 45.5035 49.6429 48 49.6429C50.4965 49.6429 52.5178 47.6215 52.5178 45.125C52.5178 42.6285 50.4965 40.6071 48 40.6071Z",fill:"white"}),D=a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M61.0011 31.2199C59.3036 30.312 57.6664 29.9654 54.4494 29.9314H41.5506C38.3336 29.9654 36.6964 30.312 34.9989 31.2199C33.374 32.0889 32.0889 33.374 31.2199 34.9989C30.312 36.6964 29.9653 38.3336 29.9314 41.5506V54.4494C29.9653 57.6664 30.312 59.3036 31.2199 61.0011C32.0889 62.626 33.374 63.9111 34.9989 64.7801C36.6964 65.688 38.3336 66.0346 41.5506 66.0686H54.4494C57.6664 66.0346 59.3036 65.688 61.0011 64.7801C62.626 63.9111 63.9111 62.626 64.7801 61.0011C65.688 59.3036 66.0346 57.6664 66.0686 54.4494V41.5506C66.0346 38.3336 65.688 36.6964 64.7801 34.9989C63.9111 33.374 62.626 32.0889 61.0011 31.2199ZM36.5484 34.1173C37.6675 33.5188 38.7557 33.2684 41.186 33.2223H54.814C57.2443 33.2684 58.3324 33.5188 59.4515 34.1173C60.5039 34.6801 61.3199 35.4961 61.8827 36.5484C62.4812 37.6675 62.7316 38.7557 62.7777 41.186V54.814C62.7316 57.2443 62.4812 58.3325 61.8827 59.4516C61.7504 59.699 61.6041 59.9333 61.444 60.1544C57.7731 57.1769 53.0949 55.3929 48 55.3929C42.9051 55.3929 38.2269 57.1769 34.556 60.1544C34.3959 59.9333 34.2496 59.699 34.1173 59.4516C33.5188 58.3325 33.2684 57.2443 33.2223 54.814V41.186C33.2684 38.7557 33.5188 37.6675 34.1173 36.5484C34.68 35.4961 35.4961 34.6801 36.5484 34.1173ZM48 37.3214C52.3111 37.3214 55.8036 40.8139 55.8036 45.125C55.8036 49.4361 52.3111 52.9286 48 52.9286C43.6889 52.9286 40.1964 49.4361 40.1964 45.125C40.1964 40.8139 43.6889 37.3214 48 37.3214ZM41.186 62.7777H54.814C56.735 62.7413 57.8174 62.5772 58.7394 62.2144C55.737 59.9925 52.022 58.6786 48 58.6786C43.978 58.6786 40.2629 59.9925 37.2605 62.2144C38.1825 62.5772 39.265 62.7413 41.186 62.7777ZM43.4821 45.125C43.4821 42.6285 45.5035 40.6071 48 40.6071C50.4965 40.6071 52.5178 42.6285 52.5178 45.125C52.5178 47.6215 50.4965 49.6429 48 49.6429C45.5035 49.6429 43.4821 47.6215 43.4821 45.125Z",fill:"white"}),V=a.a.createElement("defs",null,a.a.createElement("filter",{id:"filter0_f_5_844",x:-5.88426,y:-93.2593,width:222.706,height:222.706,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.a.createElement("feGaussianBlur",{stdDeviation:37.6296,result:"effect1_foregroundBlur_5_844"})),a.a.createElement("filter",{id:"filter1_f_5_844",x:-68.4838,y:3.5162,width:184.78,height:184.78,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.a.createElement("feGaussianBlur",{stdDeviation:28.1481,result:"effect1_foregroundBlur_5_844"})),a.a.createElement("linearGradient",{id:"paint0_linear_5_844",x1:-48,y1:48,x2:48,y2:144,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#70B2FF"}),a.a.createElement("stop",{offset:1,stopColor:"#5C9CE6"})),a.a.createElement("linearGradient",{id:"paint1_linear_5_844",x1:33.2812,y1:18.0938,x2:105.469,y2:90.2812,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#FFB73D"}),a.a.createElement("stop",{offset:1,stopColor:"#FFA000"})),a.a.createElement("linearGradient",{id:"paint2_linear_5_844",x1:-48.2812,y1:95.9062,x2:23.9062,y2:168.094,gradientUnits:"userSpaceOnUse"},a.a.createElement("stop",{stopColor:"#928FFF"}),a.a.createElement("stop",{offset:1,stopColor:"#4B47B2"})),a.a.createElement("clipPath",{id:"clip0_5_844"},a.a.createElement("rect",{width:96,height:96,rx:39,fill:"white"}))),Z=function(e){var t=e.svgRef,r=e.title,n=I(e,["svgRef","title"]);return a.a.createElement("svg",P({width:96,height:96,viewBox:"0 0 96 96",fill:"none",ref:t},n),r?a.a.createElement("title",null,r):null,a.a.createElement("g",{clipPath:"url(#clip0_5_844)"},M,U,F,A,a.a.createElement("mask",{id:"mask0_5_844",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:33,y:33,width:30,height:30},B),G,R,D),V)},W=a.a.forwardRef((function(e,t){return a.a.createElement(Z,P({svgRef:t},e))})),H=(r.p,r(313));r(33),r(99);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function J(e){return K.apply(this,arguments)}function K(){return(K=Object(p.a)(u.a.mark((function e(t){var r,n,a,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:{},a=r?"?"+Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent("object"===typeof r[e]?JSON.stringify(r[e]):r[e])})).join("&"):"",s="".concat(t).concat(a),e.next=5,new Promise((function(e,t){fetch(s,N({method:"GET"},n)).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(t){return e({error:{code:-1,text:t.toString()}})}))}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){return new Promise((function(t,r){var n=new Image;n.onload=function(){return t(n)},n.crossOrigin="anonymous",n.onstalled=function(e){console.log("Failed to fetch data, but trying.",e),r(e)},n.onerror=function(e){console.log("Failed to fetch data, error.",e),r(e)},n.src=e}))};function z(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(u.a.mark((function e(t){var r,n,a,s,i,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!(c.length>1&&void 0!==c[1])||c[1],n=document.createElement("canvas"),a=n.getContext("2d"),s="string"===typeof t?t:window.btoa(t),e.next=5,Y("string"===typeof t?s:"data:image/svg+xml;base64,".concat(s));case 5:if(i=e.sent,n.height=i.height,n.width=i.width,null!==a){e.next=10;break}return e.abrupt("return","");case 10:return a.drawImage(i,0,0,i.width,i.height),e.abrupt("return",r?n.toDataURL():n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){var e=window.location.search.length>0&&JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}');return e&&e.vk_chat_id&&(e.vk_chat_id=decodeURIComponent(e.vk_chat_id)),e}var Q=r(39),X=r.n(Q);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ee=4,te=2,re=3,ne="https://vds2153919.my-ihor.ru:8081/api/",ae=ne+"apps.get",se="https://vds2153919.my-ihor.ru:8088/",ie=0;function ce(){return{2:{2:{0:23,1:24},1:{2:23,3:24}},3:{2:{0:23,1:29,2:30},1:{3:23,4:29,5:30}},4:{2:{0:16,1:20,2:29,3:30},1:{4:16,5:20,6:29,7:30}}}[ee]}function oe(e,t){var r=ce();if(0===e||0===t)return ie;for(var n=r[e],a=Object.keys(n).map((function(e){return[e,n[e]]})),s=0;s<a.length;s++){var i=a[s];if(s===a.length-1)return parseInt(i[0]);if(parseInt(t)<=parseInt(i[1]))return parseInt(i[0])}return ie}function le(){return ue.apply(this,arguments)}function ue(){return(ue=Object(p.a)(u.a.mark((function e(){var t,r,n,a,s,i,c,o,l,p,h,f,d,m,g,_,b,k,C,y,E,w,O;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(q().vk_app_id||0),e.next=3,J(ae,{app_id:t});case 3:for((r=e.sent.response)||(r={app_id:t,group_id_join:new Array(ee*re*2).fill(1),group_id_message:new Array(ee*te*2).fill(1),save_photo_album:!1,need_panel_upload_photo:!1,tg_urls:[],is_show_tg:!1,categories_for_tg:[],category_group_default:0,album_name:"",album_caption:"",need_upload_default_album_photo:!1,album_default_photo_url:""}),n=[],a=[],i=(s=r).category_group_default,c=s.is_show_tg,o=s.categories_for_tg,l=s.need_panel_upload_photo,p=s.group_id_join,h=s.group_id_message,f=s.save_photo_album,d=s.tg_urls,ie=i,m=0;m<p.length;m+=re)n.push(p.slice(m,m+re));for(g=0;g<h.length;g+=te)a.push(h.slice(g,g+te));return e.next=11,v.a.send("VKWebAppGetUserInfo");case 11:return _=e.sent,b=_.sex,k=_.bdate,C=k&&3===k.split(".").length?(new Date).getFullYear()-parseInt(_.bdate.split(".")[2]):0,y=oe(b,C),E=n[y],w=a[y],O={groupsJoinCategory:n,groupsJoinUser:E,groupsMessageCategory:a,groupsMessageUser:w,vk_user:_,app:r,showGroupsCategory:y,savePhotoAlbum:f,is_show_tg:c,categories_for_tg:o,need_panel_upload_photo:l,need_panel_sex_years:0===b||0===C,tg_urls:d,sex:b,years:C},console.debug(O),e.abrupt("return",O);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){var e=this;return a.a.createElement(c.e,{onChange:function(t){return e.setState({selectedSex:t.target.value})},defaultValue:0===this.state.sex||1===this.state.sex?"1":"2",options:Object.keys(ce()).map((function(e){return{value:"".concat(e),label:1==e?"\u0436\u0435\u043d\u0441\u043a\u0438\u0439":"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"}}))})}function he(){var e=this;return a.a.createElement(c.e,{onChange:function(t){return e.setState({selectedYears:t.target.value})},defaultValue:"".concat(ce()[2][0]),options:Object.keys(ce()[this.state.selectedSex||1]).map((function(t,r,n){var a=ce()[e.state.selectedSex||1][t],s=0===r?"\u0434\u043e ".concat(a):n[r+1]?"\u043e\u0442 ".concat(ce()[e.state.selectedSex||1][n[r-1]]+1," \u0434\u043e ").concat(a):"\u043e\u0442 ".concat(a);return{value:"".concat(a),label:s}}))})}function fe(){return a.a.createElement(a.a.Fragment,null,pe.bind(this)(),he.bind(this)())}function de(e){"object"===typeof e&&e.currentTarget&&(e=e.currentTarget.dataset.to);var t=this.state,r=t.selectedSex,n=t.selectedYears;r||(r=0===this.state.sex||1===this.state.sex?"1":"2"),n||(n="".concat(ce()[2][0]));try{var a=this.state,s=a.groupsJoinCategory,i=a.groupsMessageCategory,c=oe(r,n),l=s[c],u=i[c];this.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({sex:r,years:n,groupsJoinUser:l,groupsMessageUser:u,showGroupsCategory:c},e?{history:[e],activePanel:e}:{})),console.debug({selectedSex:r,selectedYears:n,showGroupsCategory:c,groupsJoinUser:l,groupsMessageUser:u})}catch(p){console.error("ERR",p,this.state),console.debug({selectedSex:r,selectedYears:n})}}var me={subscribe:0,messages:0};function ge(){return _e.apply(this,arguments)}function _e(){return(_e=Object(p.a)(u.a.mark((function e(){var t,r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.groupsJoinUser,n=me[r="subscribe"],!(a=t[n])){e.next=10;break}return e.prev=2,e.next=5,v.a.send("VKWebAppJoinGroup",{group_id:a});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:me[r]++;case 10:case"end":return e.stop()}}),e,this,[[2,7]])})))).apply(this,arguments)}function be(){return ke.apply(this,arguments)}function ke(){return(ke=Object(p.a)(u.a.mark((function e(){var t,r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.groupsMessageUser,n=me[r="messages"],!(a=t[n])){e.next=10;break}return e.prev=2,e.next=5,v.a.send("VKWebAppAllowMessagesFromGroup",{group_id:a});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:me[r]++;case 10:case"end":return e.stop()}}),e,this,[[2,7]])})))).apply(this,arguments)}function ve(e){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(p.a)(u.a.mark((function e(t){var r,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]&&a[1],e.prev=1,e.next=4,v.a.send("VKWebAppGetAuthToken",{app_id:parseInt(q().vk_app_id),scope:t});case 4:if((n=e.sent).scope.split(",").length!==t.split(",").length){e.next=9;break}return e.abrupt("return",n.access_token);case 9:return e.abrupt("return",ve(t,r));case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;v.a.subscribe(function(){var r=Object(p.a)(u.a.mark((function r(n){var a,s,i,c,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=n.detail,s=a.type,i=a.data,void 0!==s&&console.debug(s,i),"VKWebAppUpdateConfig"===s?(c=document.createAttribute("scheme"),o=i.scheme?"client_light"===i.scheme?"bright_light":i.scheme:"bright_light",c.value=t||o,document.body.attributes.setNamedItem(c),e[s]&&"function"===typeof e[s]&&e[s]()):e[s]&&"function"===typeof e[s]&&e[s]();case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(r,!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Oe=0,xe=function(e){function t(e){var r;return Object(h.a)(this,t),(r=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={sticker_info:{}},C.bind(Object(g.a)(r))(),r.skipMain=r.skipMain.bind(Object(g.a)(r)),r.uploadAlbum=r.uploadAlbum.bind(Object(g.a)(r)),r.goWithClick=r.goWithClick.bind(Object(g.a)(r)),r.checkHash=r.checkHash.bind(Object(g.a)(r)),r}return Object(_.a)(t,e),Object(f.a)(t,[{key:"goWithClick",value:function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==++Oe){e.next=8;break}return e.next=4,ge.bind(this)();case 4:return e.next=6,be.bind(this)();case 6:e.next=11;break;case 8:if(2!==Oe){e.next=11;break}return e.next=11,ge.bind(this)();case 11:return e.abrupt("return",this.go(t));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ye(),e.t0=this,e.next=4,le();case 4:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1),v.a.send("VKWebAppInit");case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkHash",value:function(){var e=window.location.hash;if(console.log(e),e.startsWith("#")){e=e.substring(1);var t=this.hashStickers.find((function(t){return t.url.substring(t.url.indexOf("stickers/")+"stickers/".length)===e}));if(console.log(t),t)return this.setState({sticker_info:we({},t,{singleMode:!0})}),this.setActivePanel("sticker"),!0}return!1}},{key:"uploadAlbum",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n,a,s,i,c,o,l,h,f,d,m,g,_,b,k,C;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,n=t.savePhotoAlbum,a=t.need_upload_default_album_photo,s=t.album_default_photo_url,!n){e.next=30;break}return e.next=4,ve("photos");case 4:if(!(i=e.sent)||!a){e.next=30;break}return e.next=8,z(s);case 8:return c=e.sent,(o=new Image).src=c,e.next=13,new Promise((function(e){return o.onload=function(){return e(!0)}}));case 13:return l=r(33),h=l.createCanvas,f=h(o.width,o.height),f.getContext("2d").drawImage(o,0,0),e.next=17,new Promise((function(e){return f.toBlob((function(t){return e(t)}))}));case 17:return d=e.sent,m=this.state.app,g=m.album_name,_=m.album_caption,e.next=23,v.a.send("VKWebAppCallAPIMethod",{method:"photos.createAlbum",params:{title:g,v:"5.126",access_token:i}});case 23:return b=e.sent.response.id,e.next=26,v.a.send("VKWebAppCallAPIMethod",{method:"photos.getUploadServer",params:{album_id:b,v:"5.126",access_token:i}});case 26:k=e.sent.response.upload_url,(C=new FormData).append("photo",d,"image.png");try{X()(se+k,{method:"POST",body:C}).then((function(e){return e.json()})).then(function(){var e=Object(p.a)(u.a.mark((function e(t){var r,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.server,n=t.photos_list,a=t.hash,console.debug("Photo saved: ",t),e.next=4,v.a.send("VKWebAppCallAPIMethod",{method:"photos.save",params:{album_id:b,server:r,photos_list:n,hash:a,caption:_,v:"5.126",access_token:i}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(y){console.error(y)}case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"skipMain",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.state.need_panel_sex_years,e.next=3,ge.bind(this)();case 3:return e.next=5,be.bind(this)();case 5:r?this.go("years"):this.checkHash()||this.go(t.currentTarget.dataset.to),this.uploadAlbum();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.sticker_info;return a.a.createElement(c.n,y.bind(this)(),a.a.createElement(c.h,{id:"main"},a.a.createElement(c.k,{icon:a.a.createElement(S,null),header:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c",action:a.a.createElement(c.c,{size:"m",onClick:this.skipMain,"data-to":"stickers"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),stretched:!0},"\u0417\u0434\u0435\u0441\u044c \u0441\u043e\u0431\u0440\u0430\u043d\u044b \u0432\u0441\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u0434\u043b\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432")),a.a.createElement(c.h,{id:"years"},a.a.createElement(c.k,{icon:a.a.createElement(W,null),header:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u043b \u0438 \u0432\u043e\u0437\u0440\u0430\u0441\u0442",action:a.a.createElement(c.c,{size:"m",onClick:function(){var t=e.checkHash();de.bind(e)(!t&&"stickers")}},"\u0414\u0430\u043b\u044c\u0448\u0435"),stretched:!0},a.a.createElement("div",{className:"Years_Inputs"},fe.bind(this)()))),a.a.createElement(c.h,{id:"stickers"},a.a.createElement(c.i,{separator:!1},"\u0421\u0442\u0438\u043a\u0435\u0440\u044b"),a.a.createElement("div",{className:"StickersBanners"},this.stickers.map((function(t,r){return a.a.createElement(c.m,{key:"sticker_banner_".concat(r),onClick:function(){e.setState({sticker_info:t}),e.goWithClick("sticker")}},a.a.createElement("div",{className:"Sticker_Info"},a.a.createElement("img",{alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker,"-256")}),a.a.createElement("div",{className:"Sticker_Titles"},a.a.createElement(c.f,{weight:2,level:1},t.title),a.a.createElement(c.l,null,t.author))),a.a.createElement(H.a,null))})))),a.a.createElement(c.h,{id:"sticker"},a.a.createElement(c.i,{separator:!1,left:!t.singleMode&&a.a.createElement(c.j,{onClick:this.back})},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"),a.a.createElement("div",{className:"Sticker_Info"},a.a.createElement("div",{className:"Sticker_Avatar"},a.a.createElement("img",{alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker,"-256")})),a.a.createElement("div",{className:"Sticker_Titles"},a.a.createElement(c.f,{weight:2,level:1},t.title),a.a.createElement(c.l,null,t.author))),a.a.createElement(c.l,{style:{margin:"18px 21px 0 21px"}},"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 ",a.a.createElement(c.g,{target:"_blank",href:t.url},t.url&&t.url.replace("https://",""))," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\xbb"),a.a.createElement("div",{className:"Stickers"},new Array(t.stickers).fill(0).map((function(e,r){return a.a.createElement("img",{key:"sticker_".concat(r),alt:"sticker",src:"https://vk.com/sticker/1-".concat(t.first_sticker+r,"-128")})})))))}},{key:"stickers",get:function(){return[{title:"\u041c\u0430\u0440\u043a",author:"\u042e\u043b\u0438\u044f \u041a\u0430\u043c\u0435\u043d\u0441\u043a\u0430\u044f",first_sticker:77699,url:"https://vk.com/stickers/catmark",stickers:20},{title:"\u041c\u0430\u0444\u0444\u0438\u043d",author:"\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0438\u044f \u041f\u044f\u0442\u0435\u0440\u043d\u0438\u043a\u043e\u0432\u0430",first_sticker:71941,url:"https://vk.com/stickers/muffin",stickers:48},{title:"\u042d\u043c\u0438\u043b\u0438",author:"\u041a\u0438\u0440\u0430 \u0411\u0430\u0443\u044d\u0440",first_sticker:72135,url:"https://vk.com/stickers/emily",stickers:48},{title:"\u041c\u0438\u043d\u0442\u043e",author:"\u041b\u0430\u043d\u0430 \u041c\u043e\u0440\u0433\u0430\u043d\u0430",first_sticker:72789,url:"https://vk.com/stickers/minty",stickers:48}]}},{key:"hashStickers",get:function(){return[{title:"\u041b\u0438\u043d\u043d",author:"\u041d\u0438\u043a\u0430 \u041a\u043e\u0442\u043e\u0432\u0430",first_sticker:76981,url:"https://vk.com/stickers/linn",stickers:48},{title:"\u041d\u043e\u0432\u043e\u0433\u043e\u0434\u043d\u0438\u0439 \u0427\u0435\u0431\u0443\u0440\u0430\u0448\u043a\u0430",author:"Yellow, Black and White",first_sticker:82095,url:"https://vk.com/stickers/nycheburashka",stickers:5},{title:"\u041b\u0438\u0437\u0430 \u0438 \u041c\u0430\u0442\u0432\u0435\u0439",author:"\u041b\u0430\u043d\u0430 \u041c\u043e\u0440\u0433\u0430\u043d\u0430",first_sticker:77651,url:"https://vk.com/stickers/lizaandmatvei",stickers:48},{title:"\u0410\u0439\u0441 \u0438 \u041a\u0440\u0438\u043c",author:"\u041c\u0430\u0448\u0430 \u041a\u043e\u043b\u044f\u0434\u0438\u043d\u0430",first_sticker:75290,url:"https://vk.com/stickers/iceandcream",stickers:48},{title:"\u042d\u0440\u0438",author:"\u042d\u043b\u044c\u0432\u0438\u043d\u0430 \u0421\u0435\u0439\u0434\u0430\u043b\u0438\u0435\u0432\u0430",first_sticker:73539,url:"https://vk.com/stickers/eri",stickers:48},{title:"\u0411\u0443\u043b\u044c\u043a\u0441",author:"\u042d\u0434\u0435\u043b\u0438\u044f \u0418\u0441\u043b\u0430\u043c\u043e\u0432\u0430",first_sticker:73055,url:"https://vk.com/stickers/bloop",stickers:48},{title:"\u0422\u043e\u0448\u0438",author:"\u042d\u043b\u044c\u0432\u0438\u043d\u0430 \u0421\u0435\u0439\u0434\u0430\u043b\u0438\u0435\u0432\u0430",first_sticker:72411,url:"https://vk.com/stickers/toshi",stickers:48},{title:"\u041c\u0438\u043d\u0442\u043e",author:"\u041b\u0430\u043d\u0430 \u041c\u043e\u0440\u0433\u0430\u043d\u0430",first_sticker:72789,url:"https://vk.com/stickers/minty",stickers:48},{title:"\u041c\u0430\u0440\u043a",author:"\u042e\u043b\u0438\u044f \u041a\u0430\u043c\u0435\u043d\u0441\u043a\u0430\u044f",first_sticker:77699,url:"https://vk.com/stickers/catmark",stickers:20}]}}]),t}(a.a.Component);i.a.render(a.a.createElement(c.d,{webviewType:c.o.INTERNAL},a.a.createElement(c.a,null,a.a.createElement(c.b,null,a.a.createElement(xe,null)))),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.c11ce12c.chunk.js.map