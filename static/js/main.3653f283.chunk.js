(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(7),r=t.n(i),c=(t(14),t(1)),l=t(2),s=t(4),u=t(3),d=t(5),f=(t(16),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={time:(new Date).toLocaleString()},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"secound",value:function(){this.setState(function(e){return{time:(new Date).toLocaleString()}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.secound()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return a.a.createElement("div",null,"Time: ",this.state.time)}}]),n}(a.a.Component)),h=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null," Teja Venkat  "),a.a.createElement(f,null),a.a.createElement("div",null,"Thanks to"),a.a.createElement("div",null,"#GitHub #React")))}}]),n}(o.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/web","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):w(n,e)})}}()},8:function(e,n,t){e.exports=t(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.3653f283.chunk.js.map