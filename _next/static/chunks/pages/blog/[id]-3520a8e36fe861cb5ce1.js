_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}},Aiso:function(t,e,i){t.exports=i("dQHF")},GVkX:function(t,e,i){"use strict";i.r(e),i.d(e,"__N_SSG",(function(){return v})),i.d(e,"default",(function(){return w}));var n=i("nKUr"),o=i("CafY"),a=i("65Hy"),r=i("Z4Yb"),c=i.n(r),s=i("MX1e"),d=i("Aiso"),l=i.n(d),u=i("ZnLd"),f=i.n(u),h=i("YFqc"),p=i.n(h),g=i("Bn4x");function m(){return Object(n.jsxs)("div",{className:f.a.container,children:[Object(n.jsx)(l.a,{priority:!0,src:"/images/lukasz-wozniak.jpg",height:144,width:144,alt:g.b,className:c.a.image}),Object(n.jsxs)("p",{className:f.a.text,children:["\u0141ukasz Wo\u017aniak - software developer specialized in React, Redux and TypeScript. Read more ",Object(n.jsx)(p.a,{href:"/about",children:Object(n.jsx)("a",{children:"about me"})}),"."]})]})}i("cFwv");var b=i("UkKX"),v=!0;function w(t){var e=t.postData,i="/images/posts/".concat(e.slug,"/").concat(e.image);return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(b.a,{title:"".concat(e.title," | ").concat(g.b),description:e.description,imageSrc:i,imageAlt:e.title}),Object(n.jsxs)("article",{children:[Object(n.jsx)("h1",{className:c.a.headingXl,children:e.title}),Object(n.jsxs)("div",{className:c.a.lightText,children:[Object(n.jsx)(a.a,{dateString:e.date}),Object(n.jsx)(s.a,{tags:e.tags})]}),Object(n.jsx)(l.a,{src:i,alt:e.title,width:1280,height:720}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.contentHtml}})]}),Object(n.jsx)(m,{})]})}},UWYU:function(t,e,i){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},ZnLd:function(t,e,i){t.exports={container:"hero_container__2NgfT",text:"hero_text__2aSTh"}},cFwv:function(t,e,i){},dEHY:function(t,e,i){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,i){"use strict";var n=i("J4zp"),o=i("RIqP"),a=i("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,i=t.sizes,a=t.unoptimized,c=void 0!==a&&a,u=t.priority,h=void 0!==u&&u,p=t.loading,m=t.className,b=t.quality,v=t.width,j=t.height,z=t.objectFit,A=t.objectPosition,_=t.loader,S=void 0===_?y:_,k=(0,r.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),O=i?"responsive":"intrinsic",E=!1;"unsized"in k?(E=Boolean(k.unsized),delete k.unsized):"layout"in k&&(k.layout&&(O=k.layout),delete k.layout);0;var N=!h&&("lazy"===p||"undefined"===typeof p);e&&e.startsWith("data:")&&(c=!0,N=!1);var q,I,L,R=(0,f.useIntersection)({rootMargin:"200px",disabled:!N}),D=n(R,2),H=D[0],M=D[1],T=!N||M,W=x(v),B=x(j),F=x(b),P={visibility:T?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:A};if("undefined"!==typeof W&&"undefined"!==typeof B&&"fill"!==O){var U=B/W,V=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===O?(q={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===O?(q={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},L='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===O&&(q={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:B})}else"undefined"===typeof W&&"undefined"===typeof B&&"fill"===O&&(q={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var C={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};T&&(C=function(t){var e=t.src,i=t.unoptimized,n=t.layout,a=t.width,r=t.quality,c=t.sizes,s=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var d=function(t,e,i){if(i&&("fill"===e||"responsive"===e)){var n=o(i.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(t){return parseInt(t[2])}));if(n.length){var a=.01*Math.min.apply(Math,o(n));return{widths:w.filter((function(t){return t>=g[0]*a})),kind:"w"}}return{widths:w,kind:"w"}}if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:g,kind:"w"};return{widths:o(new Set([t,2*t].map((function(t){return w.find((function(e){return e>=t}))||w[w.length-1]})))),kind:"x"}}(a,n,c),l=d.widths,u=d.kind,f=l.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:l.map((function(t,i){return"".concat(s({src:e,quality:r,width:t})," ").concat("w"===u?t:i+1).concat(u)})).join(", "),src:s({src:e,quality:r,width:l[f]})}}({src:e,unoptimized:c,layout:O,width:W,quality:F,sizes:i,loader:S}));E&&(q=void 0,I=void 0,P=void 0);return s.default.createElement("div",{style:q},I?s.default.createElement("div",{style:I},L?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(L))}):null):null,s.default.createElement("img",Object.assign({},k,C,{decoding:"async",className:m,ref:H,style:P})),h?s.default.createElement(d.default,null,s.default.createElement("link",{key:"__nimg-"+C.src+C.srcSet+C.sizes,rel:"preload",as:"image",href:C.srcSet?void 0:C.src,imagesrcset:C.srcSet,imagesizes:C.sizes})):null)};var r=a(i("8OQS")),c=a(i("pVnL")),s=a(i("q1tI")),d=a(i("8Kt/")),l=i("dEHY"),u=i("UWYU"),f=i("vNVm");var h=new Map([["imgix",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,a=["auto=format","fit=max","w="+n],r="";o&&a.push("q="+o);a.length&&(r="?"+a.join("&"));return"".concat(e).concat(j(i)).concat(r)}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(a).concat(j(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(j(i),"?imwidth=").concat(n)}],["default",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://lukaszwozniak.dev/",loader:"imgix"}||u.imageConfigDefault,g=p.deviceSizes,m=p.imageSizes,b=p.loader,v=p.path,w=(p.domains,[].concat(o(g),o(m)));function x(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function y(t){var e=h.get(b);if(e)return e((0,c.default)({root:v},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function j(t){return"/"===t[0]?t.slice(1):t}g.sort((function(t,e){return t-e})),w.sort((function(t,e){return t-e}))},pVnL:function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i.apply(this,arguments)}t.exports=i},zJrC:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return i("GVkX")}])}},[["zJrC",0,2,1,3,4,5]]]);