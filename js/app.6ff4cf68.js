(function(t){function e(e){for(var s,l,n=e[0],o=e[1],c=e[2],u=0,f=[];u<n.length;u++)l=n[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function l(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2184dbf8"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=l(t);var c=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"h-min-full w-full"},[a("nav",{staticClass:"bg-white shadow xl:block hidden"},[a("div",{staticClass:"container mx-auto px-6"},[a("div",{staticClass:"flex items-center justify-between"},[t._m(0),a("div",{staticClass:"flex items-center md:pr-10 xl:pr-0"},[a("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#3B82F6",d:"M11 15H6L13 1V9H18L11 23V15Z"}})])]),a("div",{staticClass:"w-2/5 hidden xl:flex items-center justify-end"},[a("div",{staticClass:"cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out flex items-center"},[a("span",[t._v("$"+t._s(t.total)+" "),a("small",[t._v("total")])])]),a("div",{staticClass:"relative cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l border-r border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out",on:{click:function(e){return t.$router.go("/")}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M9.79 16.5C9.4 15.62 8.53 15 7.5 15S5.6 15.62 5.21 16.5C5.08 16.19 5 15.86 5 15.5C5 14.12 6.12 13 7.5 13S10 14.12 10 15.5C10 15.86 9.92 16.19 9.79 16.5M18.79 16.5C18.4 15.62 17.5 15 16.5 15S14.6 15.62 14.21 16.5C14.08 16.19 14 15.86 14 15.5C14 14.12 15.12 13 16.5 13S19 14.12 19 15.5C19 15.86 18.92 16.19 18.79 16.5Z"}})])])])])])]),a("nav",[a("div",{staticClass:"py-4 px-6 w-full shadow flex xl:hidden justify-between items-center bg-white fixed top-0 z-0"},[a("div",{staticClass:"w-24"},[a("div",{staticClass:"flex items-center md:pr-10 xl:pr-0"},[a("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#3B82F6",d:"M11 15H6L13 1V9H18L11 23V15Z"}})])])]),a("div",[a("div",{staticClass:"text-gray-800",on:{click:function(e){return t.$router.go("/")}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"currentColor",d:"M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M9.79 16.5C9.4 15.62 8.53 15 7.5 15S5.6 15.62 5.21 16.5C5.08 16.19 5 15.86 5 15.5C5 14.12 6.12 13 7.5 13S10 14.12 10 15.5C10 15.86 9.92 16.19 9.79 16.5M18.79 16.5C18.4 15.62 17.5 15 16.5 15S14.6 15.62 14.21 16.5C14.08 16.19 14 15.86 14 15.5C14 14.12 15.12 13 16.5 13S19 14.12 19 15.5C19 15.86 18.92 16.19 18.79 16.5Z"}})])])])])]),a("div",{staticClass:"w-full pt-20 md:pt-5 max-w-8xl mx-auto "},[a("router-view",{staticClass:"flex w-full justify-center items-center"})],1)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-2/5 hidden xl:flex items-center justify-center sm:items-stretch sm:justify-start"},[a("div",{},[a("div",{staticClass:"hidden xl:flex"},[a("a",{staticClass:"py-6 block text-sm leading-5 text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out",attrs:{href:"javascript: void(0)"}},[t._v(" Bitcoin ")]),a("a",{staticClass:"ml-10 items-center flex py-6 text-sm leading-5 text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out relative",attrs:{href:"javascript: void(0)"}},[t._v(" Ethereum ")]),a("a",{staticClass:"mx-10 py-6 block text-sm leading-5 text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out",attrs:{href:"javascript: void(0)"}},[t._v(" Litecoin ")]),a("a",{staticClass:"items-center flex py-6 text-sm leading-5 text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out relative",attrs:{href:"javascript: void(0)",onclick:"dropdownHandler(this)"}},[t._v(" Tether ")])])])])}],l={data:function(){return{total:0}}},n=l,o=(a("5c0b"),a("adeb"),a("2877")),c=Object(o["a"])(n,i,r,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home flex-col"},[a("section",{staticClass:"pt-10 pb-20 xl:bg-contain bg-top bg-no-repeat bg-transparent"},[a("div",{staticClass:"container px-4 mx-auto"},[t._m(0),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-3 mb-6 cursor-pointer"},[a("div",{staticClass:"p-8 bg-white hover:bg-gray-50 focus:bg-gray-50 border rounded-lg"},[a("div",{staticClass:"flex items-center justify-center mb-4"},[a("svg",{staticStyle:{width:"60px",height:"60px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#ff8e00",d:"M14.24 10.56C13.93 11.8 12 11.17 11.4 11L11.95 8.82C12.57 9 14.56 9.26 14.24 10.56M11.13 12.12L10.53 14.53C11.27 14.72 13.56 15.45 13.9 14.09C14.26 12.67 11.87 12.3 11.13 12.12M21.7 14.42C20.36 19.78 14.94 23.04 9.58 21.7C4.22 20.36 .963 14.94 2.3 9.58C3.64 4.22 9.06 .964 14.42 2.3C19.77 3.64 23.03 9.06 21.7 14.42M14.21 8.05L14.66 6.25L13.56 6L13.12 7.73C12.83 7.66 12.54 7.59 12.24 7.53L12.68 5.76L11.59 5.5L11.14 7.29C10.9 7.23 10.66 7.18 10.44 7.12L10.44 7.12L8.93 6.74L8.63 7.91C8.63 7.91 9.45 8.1 9.43 8.11C9.88 8.22 9.96 8.5 9.94 8.75L8.71 13.68C8.66 13.82 8.5 14 8.21 13.95C8.22 13.96 7.41 13.75 7.41 13.75L6.87 15L8.29 15.36C8.56 15.43 8.82 15.5 9.08 15.56L8.62 17.38L9.72 17.66L10.17 15.85C10.47 15.93 10.76 16 11.04 16.08L10.59 17.87L11.69 18.15L12.15 16.33C14 16.68 15.42 16.54 16 14.85C16.5 13.5 16 12.7 15 12.19C15.72 12 16.26 11.55 16.41 10.57C16.61 9.24 15.59 8.53 14.21 8.05Z"}})]),a("div",{staticClass:"pl-4"},[a("p",{staticClass:"text-xl"},[t._v("Bitcoin")]),a("p",{staticClass:"text-gray-500"},[t._v("1 BTC ≈ "),a("span",{class:t.btcX>=0?0==t.btcX?"text-blue-500":"text-green-500":"text-red-500"},[t._v("$"+t._s(t.btc)+" USD")])])])]),a("p",{staticClass:"text-gray-400 leading-loose"},[t._v("Coming Soon ...")])])]),a("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-3 mb-6 cursor-pointer"},[a("div",{staticClass:"p-8 bg-white hover:bg-gray-50 focus:bg-gray-50 border rounded-lg"},[a("div",{staticClass:"flex items-center justify-center mb-4"},[a("svg",{staticStyle:{width:"60px",height:"60px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#5e7bf2",d:"M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z"}})]),a("div",{staticClass:"pl-4"},[a("p",{staticClass:"text-xl"},[t._v("Ethereum")]),a("p",{staticClass:"text-gray-500"},[t._v("1 ETH ≈ "),a("span",{class:t.ethX>=0?0==t.ethX?"text-blue-500":"text-green-500":"text-red-500"},[t._v("$"+t._s(t.eth)+" USD")])])])]),a("p",{staticClass:"text-gray-400 leading-loose"},[t._v("Coming Soon ...")])])]),a("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-3 mb-6 cursor-pointer"},[a("div",{staticClass:"p-8 bg-white hover:bg-gray-50 focus:bg-gray-50 border rounded-lg"},[a("div",{staticClass:"flex items-center justify-center mb-4"},[a("svg",{staticStyle:{width:"60px",height:"60px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#bdbdbd",d:"M12.55,15.92L13.16,13.78L14.81,13.19L16.25,7.63L14.56,8.31L16.25,2H8L5.38,11.77L3.72,12.34L2.22,17.91L4,17.27L2.66,22H20.16L21.78,15.92H12.55M19.39,21H4L5.46,15.65L3.72,16.3L4.58,13.11L6.24,12.54L8.74,3H15L13.13,10L14.83,9.3L14,12.42L12.33,13L11.22,16.91H20.5L19.39,21Z"}})]),a("div",{staticClass:"pl-4"},[a("p",{staticClass:"text-xl"},[t._v("Litecoin")]),a("p",{staticClass:"text-gray-500"},[t._v("1 LTC ≈ "),a("span",{class:t.ltcX>=0?0==t.ltcX?"text-blue-500":"text-green-500":"text-red-500"},[t._v("$"+t._s(t.ltc)+" USD")])])])]),a("p",{staticClass:"text-gray-400 leading-loose"},[t._v("Coming Soon ...")])])]),a("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 px-3 mb-6 cursor-pointer"},[a("div",{staticClass:"p-8 bg-white hover:bg-gray-50 focus:bg-gray-50 border rounded-lg"},[a("div",{staticClass:"flex items-center justify-center mb-4"},[a("svg",{staticStyle:{width:"60px",height:"60px"},attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 339.43 295.27"}},[a("title",[t._v("tether-usdt-logo")]),a("path",{staticStyle:{fill:"#50af95","fill-rule":"evenodd"},attrs:{d:"M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z"}}),a("path",{staticStyle:{fill:"#fff","fill-rule":"evenodd"},attrs:{d:"M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z"}})]),t._m(1)]),a("p",{staticClass:"text-gray-400 leading-loose"},[t._v("Coming Soon ...")])])])])])]),a("div",{staticClass:"w-full md:max-w-xl mb-12 text-center"},[a("h2",{staticClass:"my-2 text-xl md:text-2xl font-bold font-heading"},[t._v("Want to support?")]),t._m(2),a("div",{staticClass:"flex justify-center items-center"},[a("div",{staticClass:"w-full px-3 mb-6"},[a("div",{staticClass:"p-8 bg-white border rounded-lg"},[a("div",{staticClass:"flex items-center justify-start mb-4"},[a("svg",{staticStyle:{width:"60px",height:"60px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#3B82F6",d:"M18.9,18.94L15.94,16C15.76,15.79 15.55,15.5 15.55,15.05A1.3,1.3 0 0,1 16.85,13.75C17.19,13.75 17.53,13.89 17.77,14.15L18.91,15.26L20.03,14.13C20.27,13.89 20.61,13.75 20.95,13.75A1.3,1.3 0 0,1 22.25,15.05C22.25,15.39 22.11,15.73 21.87,15.97L18.9,18.94M17.46,19.62C15.72,21.1 13.47,22 11,22A10,10 0 0,1 1,12A10,10 0 0,1 11,2A10,10 0 0,1 21,12C21,12.09 21,12.17 20.95,12.25C20.21,12.25 19.5,12.55 18.97,13.07L18.9,13.14L18.84,13.09C18.32,12.55 17.6,12.25 16.85,12.25A2.8,2.8 0 0,0 14.05,15.05C14.05,15.78 14.34,16.5 14.87,17.03L17.46,19.62M13,9.5C13,10.3 13.7,11 14.5,11C15.3,11 16,10.3 16,9.5C16,8.7 15.3,8 14.5,8C13.7,8 13,8.7 13,9.5M9,9.5C9,8.7 8.3,8 7.5,8C6.7,8 6,8.7 6,9.5C6,10.3 6.7,11 7.5,11C8.3,11 9,10.3 9,9.5M12.94,15.18L14,14.12L11.88,12L10.82,13.06L11.88,14.12L10.82,15.18L11.88,16.24L10.82,17.3L11.88,18.36L14,16.24L12.94,15.18Z"}})]),t._m(3)]),t._m(4),t._m(5),t._m(6),t._m(7)])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"max-w-lg mx-auto mb-12 text-center"},[a("h2",{staticClass:"my-2 text-3xl md:text-4xl font-bold font-heading"},[t._v("Blockfi Calculator")]),a("p",{staticClass:"text-blueGray-400 leading-loose"},[t._v("Graphs, Amounts, Estimates, more.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-4"},[a("p",{staticClass:"text-xl"},[t._v("Tether")]),a("p",{staticClass:"text-gray-500"},[t._v("1 USDT ≈ $1 USD")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-4"},[a("p",{staticClass:"text-blueGray-400 leading-loose"},[t._v("A platform that allows you to see graphs of your favorite coins in Blockfi only using the csv sheet, "),a("strong",[t._v("no databases, does not store anything in servers, only your browser")]),t._v(", be safe and get more information on how are you doing with your investments.")]),a("p",{staticClass:"text-blueGray-400 py-4 leading-loose"},[t._v("More features incoming with multiple fiat currencies and different graphs.")]),a("p",{staticClass:"text-blueGray-400 py-4 leading-loose"},[t._v("Any support would be highly appreciated, but don't worry, is totally free and if you still don't trust it, you can see the code in the following repo on Github "),a("a",{staticClass:"text-blue-700",attrs:{href:"https://github.com/blockfi-calculator/blockfi-calculator.github.io"}},[t._v("[Blockfi Calculator Repo]")]),t._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pl-4"},[a("p",{staticClass:"text-xl"},[t._v("Thank u.")]),a("p",{staticClass:"text-gray-500"},[t._v("very much")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-gray-600 leading-loose flex flex-col md:flex-row justify-between items-center w-full"},[a("strong",[t._v("BTC address")]),a("span",{staticClass:"text-sm md:text-md"},[t._v("3Qepdqb2yADmJuosRtQ7zjqPH1ggqUwpFZ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-gray-600 leading-loose flex flex-col md:flex-row justify-between items-center w-full"},[a("strong",[t._v("ETH address")]),a("span",{staticClass:"text-sm md:text-md"},[t._v("0x92345ae2fa88f72b4b5cefff8e5c8afabdbdaa53")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-gray-600 leading-loose flex flex-col md:flex-row justify-between items-center w-full"},[a("strong",[t._v("LTC address")]),a("span",{staticClass:"text-sm md:text-md"},[t._v("MWL9UNGwAxGnfozGX273NbvggyqmVXiCkw")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-gray-600 leading-loose flex justify-center pt-4 items-center w-full"},[a("a",{staticClass:"text-blue-700",attrs:{href:"https://blockfi.com/?ref=30839267"}},[a("strong",[t._v("I want to create an account in Blockfi !")])])])}],p=(a("466d"),a("ac1f"),a("25f0"),a("b680"),a("bc3a")),x=a.n(p),h={name:"Home",data:function(){return{btc:"",eth:"",ltc:"",btcX:0,ethX:0,ltcX:0}},created:function(){var t=this;this.getPrices(),setInterval((function(){t.getPrices()}),1e4)},methods:{toFixed:function(t){return t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]},getPrices:function(){var t=this;x.a.get("https://api.coingecko.com/api/v3/exchange_rates").then((function(e){t.toFixed(e.data.rates.usd.value)>t.btc?t.btcX=1:t.toFixed(e.data.rates.usd.value)==t.btc?t.btcX=0:t.btcX=-1,t.btc=t.toFixed(e.data.rates.usd.value),t.toFixed(e.data.rates.usd.value/e.data.rates.eth.value)>t.eth?t.ethX=1:t.toFixed(e.data.rates.usd.value/e.data.rates.eth.value)==t.eth?t.ethX=0:t.ethX=-1,t.eth=t.toFixed(e.data.rates.usd.value/e.data.rates.eth.value),t.toFixed(e.data.rates.usd.value/e.data.rates.ltc.value)>t.ltc?t.ltcX=1:t.toFixed(e.data.rates.usd.value/e.data.rates.ltc.value)==t.ltc?t.ltcX=0:t.ltcX=-1,t.ltc=t.toFixed(e.data.rates.usd.value/e.data.rates.ltc.value)}))}}},C=h,m=Object(o["a"])(C,f,v,!1,null,null,null),g=m.exports;s["a"].use(d["a"]);var b=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],y=new d["a"]({routes:b}),w=y,_=a("2f62");s["a"].use(_["a"]);var L=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:w,store:L,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},a1af:function(t,e,a){},adeb:function(t,e,a){"use strict";a("a1af")}});
//# sourceMappingURL=app.6ff4cf68.js.map