(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),s=n(9898),c=n(639);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,y=e.replace,m=e.shallow,g=e.scroll,v=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var j=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,x=c.useIntersection({rootMargin:"200px"}),b=r(x,2),w=b[0],O=b[1],_=i.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);i.default.useEffect((function(){var e=O&&n&&a.isLocalURL(f),t="undefined"!==typeof v?v:o&&o.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,f,p,{locale:t})}),[p,f,O,v,n,o]);var S={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,o,f,p,y,m,g,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(f)&&u(o,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof v?v:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);S.href=E||a.addBasePath(a.addLocale(p,N,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=d},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,l=o.useRef(),u=o.useState(!1),d=r(u,2),f=d[0],p=d[1],h=o.useState(t?t.current:null),y=r(h,2),m=y[0],g=y[1],v=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),c||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[c,m,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&g(t.current)}),[t]),[v,f]};var o=n(7294),i=n(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},1862:function(e,t,n){"use strict";n.d(t,{z:function(){return p}});var r,o=n(9499),i=n(4730),a=(n(7294),n(186)),s=n(5893),c=["children","status"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.PRIMARY="SILVER_DARK",e.SECONDARY="BLURPLE",e.DANGER="DANGER",e.SUCCESS="SEAGREEN",e.WARNING="ORANGE"}(r||(r={}));var d=a.ZP.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-6goz99-0"})(["display:block;background:",";color:",";cursor:pointer;padding:8px 16px;@media only screen and (max-width:768px){font-size:18px;}"],(function(e){return function(e,t){return t[r[e]]}(e.status,e.theme)}),(function(e){return e.theme.FULL_WHITE})),f=a.ZP.div.withConfig({displayName:"Button__StyledButtonContent",componentId:"sc-6goz99-1"})(["display:flex;justify-content:center;align-items:center;gap:8px;"]),p=function(e){var t=e.children,n=e.status,r=(0,i.Z)(e,c);return(0,s.jsx)(d,u(u({type:"button",status:null!==n&&void 0!==n?n:"PRIMARY"},r),{},{children:(0,s.jsx)(f,{children:t})}))}},960:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(9499);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n(7294);var i=n(186),a=n(5893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=i.ZP.img.withConfig({displayName:"Image__StyledImage",componentId:"sc-1gqlw6m-0"})(["object-fit:contain;height:auto;@media only screen and (max-width:768px){width:100%;}"]),l=function(e){var t=o({},e);return(0,a.jsx)(c,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}},9116:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});n(7294);var r=n(1862),o=n(186),i=n(5893),a=o.ZP.div.withConfig({displayName:"Container__StyledContainer",componentId:"sc-yiibtu-0"})(["display:flex;justify-content:space-between;gap:50px;align-items:center;width:75%;margin:160px auto;flex-direction:",";line-height:1.2;@media only screen and (max-width:768px){width:100%;flex-direction:column;}"],(function(e){return e.reverse&&"row-reverse"})),s=function(e){var t=e.children,n=e.reverse,r=void 0!==n&&n;return(0,i.jsx)(a,{reverse:r,children:t})},c=n(1664),l=o.ZP.div.withConfig({displayName:"Navbar__StyledNavbar",componentId:"sc-1tni8c2-0"})(["display:flex;justify-content:space-between;width:75%;margin:0 auto 80px;@media only screen and (max-width:768px){width:100%;}"]),u=o.ZP.div.withConfig({displayName:"Navbar__StyledLogo",componentId:"sc-1tni8c2-1"})(["position:relative;font-weight:600;font-size:20px;cursor:pointer;font-weight:700;color:#ffffff;"]),d=o.ZP.nav.withConfig({displayName:"Navbar__StyledNav",componentId:"sc-1tni8c2-2"})(["display:flex;justify-content:space-evenly;gap:20px;"]),f=o.ZP.span.withConfig({displayName:"Navbar__StyledTitleWrapper",componentId:"sc-1tni8c2-3"})(["color:",";"],(function(e){return e.theme.ORANGE})),p=o.ZP.span.withConfig({displayName:"Navbar__StyledBetaText",componentId:"sc-1tni8c2-4"})(["position:absolute;top:0;right:0;transform:translate(85%,-25%);color:",";font-size:12px;font-weight:400;"],(function(e){return e.theme.BLURPLE})),h=function(){return(0,i.jsxs)(l,{children:[(0,i.jsx)(c.default,{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsxs)(u,{children:[(0,i.jsx)(f,{children:"JSON"})," Visio",(0,i.jsx)(p,{children:"BETA!"})]})})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(c.default,{href:"/editor",children:(0,i.jsx)("a",{children:"Editor"})}),(0,i.jsx)(c.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,i.jsx)("a",{rel:"me",target:"_blank",children:"GitHub"})})]})]})},y=n(960),m=n(8193),g="v1.2.0-beta",v=o.ZP.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-1ab7984-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;color:",";"],(function(e){return e.theme.SILVER})),j=o.ZP.pre.withConfig({displayName:"Footer__StyledVersion",componentId:"sc-1ab7984-1"})(["margin-top:0;"]),x=o.ZP.div.withConfig({displayName:"Footer__StyledSocial",componentId:"sc-1ab7984-2"})(["display:flex;gap:14px;font-size:26px;"]),b=function(){return(0,i.jsxs)(v,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(c.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,i.jsx)("a",{rel:"me",target:"_blank",children:(0,i.jsx)(m.RrF,{})})}),(0,i.jsx)(c.default,{href:"https://twitter.com/aykutsarach",children:(0,i.jsx)("a",{rel:"me",target:"_blank",children:(0,i.jsx)(m.h3E,{})})})]}),(0,i.jsx)(j,{children:g})]})},w=n(9008),O=o.ZP.div.withConfig({displayName:"pages__StyledHome",componentId:"sc-nja23l-0"})(["padding:24px;"]),_=o.ZP.div.withConfig({displayName:"pages__StyledContent",componentId:"sc-nja23l-1"})(["font-size:20px;font-weight:500;color:",";width:50%;@media only screen and (max-width:768px){width:100%;text-align:center;button{margin-left:auto;margin-right:auto;}}"],(function(e){return e.theme.SILVER})),S=o.ZP.h2.withConfig({displayName:"pages__StyledHeader",componentId:"sc-nja23l-2"})(["font-size:54px;color:",";@media only screen and (max-width:768px){font-size:36px;}"],(function(e){return e.theme.FULL_WHITE})),N=o.ZP.div.withConfig({displayName:"pages__StyledSubContent",componentId:"sc-nja23l-3"})(["margin-bottom:20px;"]),E=o.ZP.span.withConfig({displayName:"pages__StyledText",componentId:"sc-nja23l-4"})(["color:",";"],(function(e){var t=e.theme;return e.white?t.FULL_WHITE:t.ORANGE})),P=function(){return(0,i.jsxs)(O,{children:[(0,i.jsx)(w.default,{children:(0,i.jsx)("title",{children:"JSON Visio"})}),(0,i.jsx)(h,{}),(0,i.jsxs)(s,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(S,{as:"h1",children:"Visualize your JSON into interactive graphs."}),(0,i.jsx)(N,{children:"Simple visualization tool for your JSON data. No forced structure, paste your JSON and view it instantly."}),(0,i.jsx)(c.default,{href:"/editor",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(r.z,{status:"SECONDARY",children:"Start Generating"})})})]}),(0,i.jsx)(y.E,{src:"graphs.svg",width:500,height:400,alt:"graphs"})]}),(0,i.jsxs)(s,{reverse:!0,children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(S,{children:"No Rules"}),(0,i.jsx)(N,{children:"Be free, you don't have to restructure your json to transform it into graphs. We've done it at our side, so you can just paste your JSON."}),(0,i.jsx)(c.default,{href:"/editor",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(r.z,{status:"SUCCESS",children:"Paste It!"})})})]}),(0,i.jsx)(y.E,{src:"graphs3.svg",width:500,height:400,alt:"preview"})]}),(0,i.jsxs)(s,{children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(S,{children:"Import File"}),(0,i.jsx)(N,{children:"Have an existing file for your data? No worries, directly import it into our editor without having to scroll through all of it!"}),(0,i.jsx)(c.default,{href:"/editor",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(r.z,{status:"SUCCESS",children:"Import JSON"})})})]}),(0,i.jsx)(y.E,{src:"graphs4.svg",width:500,height:400,alt:"preview"})]}),(0,i.jsxs)(s,{reverse:!0,children:[(0,i.jsxs)(_,{children:[(0,i.jsx)(S,{children:"Supported by Open Source"}),(0,i.jsxs)(N,{children:["We do our work at open source. Help us improve by contributing to",(0,i.jsx)(E,{children:" JSON"}),(0,i.jsx)(E,{white:!0,children:" Visio"})," at GitHub!"]}),(0,i.jsx)(c.default,{href:"https://github.com/AykutSarac/jsonvisio.com",passHref:!0,children:(0,i.jsx)("a",{rel:"me",target:"_blank",children:(0,i.jsxs)(r.z,{children:[(0,i.jsx)(m.RrF,{size:20}),"Check GitHub"]})})})]}),(0,i.jsx)(y.E,{src:"graphs5.svg",width:500,height:400,alt:"preview"})]}),(0,i.jsx)(b,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9116)}])},1664:function(e,t,n){e.exports=n(7942)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[617,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);