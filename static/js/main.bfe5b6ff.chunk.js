(this.webpackJsonphexes=this.webpackJsonphexes||[]).push([[0],[,function(e,n,a){e.exports={main:"Sandbox_main__16knt",background:"Sandbox_background__1nfzh",innerCircle:"Sandbox_innerCircle__19W_V",outerCircle:"Sandbox_outerCircle__JRcHm",wrapper:"Sandbox_wrapper__o0X_y",hex:"Sandbox_hex__11bMu",hexActive:"Sandbox_hexActive__qaZxC",hexWrapper:"Sandbox_hexWrapper__2FUhY",location:"Sandbox_location__3fmo-",date:"Sandbox_date__271aO",time:"Sandbox_time__3eRJ-",hexPassive:"Sandbox_hexPassive__1FYvL",hexPosition0:"Sandbox_hexPosition0__J5Vil",hexPosition1:"Sandbox_hexPosition1__uQh37",hexPosition2:"Sandbox_hexPosition2__laxxM",hexPosition3:"Sandbox_hexPosition3__1u0Ls",hexPosition4:"Sandbox_hexPosition4__3IO4U",hexPosition5:"Sandbox_hexPosition5__10jt8",hexPosition6:"Sandbox_hexPosition6__gPB5s",hexPosition7:"Sandbox_hexPosition7__2_Lgg",hexPosition8:"Sandbox_hexPosition8__3tKaP",isHidden:"Sandbox_isHidden__1wIOz",firstRival:"Sandbox_firstRival__6Uzrg",secondRival:"Sandbox_secondRival__2Jjm4",firstRivalName:"Sandbox_firstRivalName__17kSP",secondRivalName:"Sandbox_secondRivalName__1seX3"}},,,,function(e,n,a){e.exports={wrapper:"App_wrapper__2tvrp",container:"App_container__2wQne",parent:"App_parent__3pHHs",c:"App_c__2iB0a",c1:"App_c1__3JFrE",c2:"App_c2__2VQiB",c3:"App_c3__ksR_b",c4:"App_c4___iusA",c5:"App_c5__2xy6c"}},,,,,,,,function(e,n,a){},function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var o=a(2),i=a.n(o),t=a(4),c=a.n(t),_=(a(13),a(14),a(5)),r=a.n(_),s=a(7),d=a(6),x=a(8),l=a(1),h=a.n(l),b=a(0),p=["centerIndex","order","onClick"],j=function(e){var n=e.centerIndex,a=e.order,o=e.onClick,i=Object(x.a)(e,p),t="hexPosition"+a;return console.log(a),4===a?Object(b.jsx)("div",{className:"".concat(h.a.hex," ").concat(h.a.hexActive," ").concat(h.a[t]),onClick:function(){return o(n)},children:Object(b.jsxs)("div",{className:h.a.hexWrapper,children:[Object(b.jsx)("p",{className:h.a.location,children:i.location}),Object(b.jsxs)("p",{className:h.a.date,children:[i.date.day," ",i.date.month]}),Object(b.jsx)("p",{className:h.a.time,children:i.time}),Object(b.jsx)("button",{children:" \u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442"})]})}):a>=0&&a<=8?Object(b.jsx)("div",{className:"".concat(h.a.hex," ").concat(h.a.hexPassive," ").concat(h.a[t]),onClick:function(){return o(n)},children:Object(b.jsxs)("p",{children:[i.date.day," ",Object(b.jsx)("br",{})," ",i.date.month]})}):void 0},m=function(e){var n=e.array,a=Object(o.useState)(2),i=Object(d.a)(a,2),t=i[0],c=i[1];console.log("sandbox: ",t);var _=function(e){c(e)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:h.a.main,onWheel:function(e){console.log("e.deltaY: ",e.deltaY);var n=Math.sign(e.deltaY);t+n===5||t+n===-1||c((function(e){return e+n}))},children:Object(b.jsx)("div",{className:h.a.wrapper,children:n.map((function(e,n){return Object(b.jsx)(j,Object(s.a)({centerIndex:4-n,order:t+n,onClick:_},e),n)}))})})})};var v=function(){return Object(b.jsx)("div",{className:r.a.wrapper,children:Object(b.jsx)(m,{array:[{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:1,month:"\u0438\u044e\u043d\u044f"},time:"01:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21161",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21162"},{location:"\u0410\u0440\u0435\u043d\u0430",date:{day:2,month:"\u0438\u044e\u043d\u044f"},time:"02:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21163",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21164"},{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:3,month:"cenyujik"},time:"03:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21165",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21166"},{location:"\u0414\u041a",date:{day:4,month:"\u0438\u044e\u043d\u044f"},time:"04:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21167",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21168"},{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:5,month:"\u0438\u044e\u043d\u044f"},time:"05:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21169",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u211610"}]})})};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.bfe5b6ff.chunk.js.map