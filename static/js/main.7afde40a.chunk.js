(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],[,function(e,a,t){e.exports={main:"Sandbox_main__2OrVY",background:"Sandbox_background__10Iox",innerCircle:"Sandbox_innerCircle__3YwmM",outerCircle:"Sandbox_outerCircle__2tqQk",wrapper:"Sandbox_wrapper__3bglz",hex:"Sandbox_hex__DLiO1",hexActive:"Sandbox_hexActive__13YMc",location:"Sandbox_location__3aYs2",date:"Sandbox_date__Dp-66",time:"Sandbox_time__1lTck",hexPassive:"Sandbox_hexPassive__vKefn",isHidden:"Sandbox_isHidden__t-MZH",firstRival:"Sandbox_firstRival__3r1k4",secondRival:"Sandbox_secondRival__11uId",firstRivalName:"Sandbox_firstRivalName__P9GSJ",secondRivalName:"Sandbox_secondRivalName__4-aK7"}},,,,,,function(e,a,t){e.exports={wrapper:"App_wrapper__2tvrp",container:"App_container__2wQne",parent:"App_parent__3pHHs",c:"App_c__2iB0a",c1:"App_c1__3JFrE",c2:"App_c2__2VQiB",c3:"App_c3__ksR_b",c4:"App_c4___iusA",c5:"App_c5__2xy6c"}},,function(e,a,t){e.exports={container:"Header_container__33oEc"}},,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),i=t(6),r=t.n(i),s=(t(16),t(17),t(7)),o=t.n(s),d=t(10),_=t(5),l=t(11),b=t(4),j=t(1),h=t.n(j),x=t(8),p=t.n(x),m=t(9),u=t.n(m),v=t(0),O=function(){return Object(v.jsxs)("div",{className:u.a.container,children:[Object(v.jsx)("a",{href:"/",children:"\u0411\u0418\u041b\u0415\u0422\u042b \u0418 \u0410\u0411\u041e\u041d\u0415\u041c\u0415\u041d\u0422\u042b"}),Object(v.jsx)("a",{href:"/",children:"\u041a\u0430\u043a \u043a\u0443\u043f\u0438\u0442\u044c?"}),Object(v.jsx)("a",{href:"/",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"}),Object(v.jsx)("a",{href:"/",children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"}),Object(v.jsx)("a",{href:"/",children:"\u0412\u043e\u0439\u0442\u0438"})]})},f=["i","position","order","onChangeOrder"],N=function(e){var a=e.i,t=e.position,n=e.order,c=e.onChangeOrder,i=Object(l.a)(e,f),r=3===n,s=t<-2||t>2,o=p.a.bind(h.a)("hex",{hexActive:r,hexPassive:!r,isHidden:s}),d={right:"".concat(50-(2.4-.35*Math.abs(t))*t*12,"%"),top:"".concat(50-(2.5-.35*Math.abs(t))*t*7,"%"),transform:"translate(50%, -50%) scale(".concat(Math.pow(.6,Math.abs(t)),")")};return r?Object(v.jsxs)("div",{onClick:function(){return console.log("center")},className:o,style:d,children:[Object(v.jsx)("p",{className:h.a.location,children:i.location}),Object(v.jsxs)("p",{className:h.a.date,children:[i.date.day," ",i.date.month]}),Object(v.jsx)("p",{className:h.a.time,children:i.time}),Object(v.jsx)("button",{children:" \u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442"})]}):Object(v.jsx)("div",{onClick:function(){return c(-a)},className:o,style:d,children:Object(v.jsxs)("p",{children:[i.date.day," ",Object(v.jsx)("br",{})," ",i.date.month]})})},S=function(e){var a=e.array,t=Object(b.useState)(-2),n=Object(_.a)(t,2),c=n[0],i=n[1],r=Object(b.useState)(-2),s=Object(_.a)(r,2),o=s[0],l=s[1],j=function(e){i(e),setTimeout((function(){return l(e)}),200)};return Object(v.jsxs)("div",{onWheel:function(e){if(e.deltaY>0){if(0===c)return;i(c+1),setTimeout((function(){return l(c+1)}),200)}else{if(-4===c)return;i(c-1),setTimeout((function(){return l(c-1)}),200)}},className:h.a.main,children:[Object(v.jsxs)("div",{className:h.a.background,children:[Object(v.jsx)("div",{className:h.a.innerCircle}),Object(v.jsx)("div",{className:h.a.outerCircle})]}),Object(v.jsx)(O,{}),Object(v.jsxs)("div",{className:h.a.wrapper,children:[Object(v.jsx)("div",{className:h.a.firstRival,children:Object(v.jsx)("p",{className:h.a.firstRivalName,children:a[Math.abs(o)].rival_1})}),Object(v.jsx)("div",{className:h.a.secondRival,children:Object(v.jsx)("p",{className:h.a.secondRivalName,children:a[Math.abs(o)].rival_2})}),a.map((function(e,a){return Object(v.jsx)(N,Object(d.a)({i:a,position:c+a,order:o+3+a,onChangeOrder:j},e),a)}))]})]})};var y=function(){return Object(v.jsx)("div",{className:o.a.wrapper,children:Object(v.jsx)(S,{array:[{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:1,month:"\u0438\u044e\u043d\u044f"},time:"01:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21161",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21162"},{location:"\u0410\u0440\u0435\u043d\u0430",date:{day:2,month:"\u0438\u044e\u043d\u044f"},time:"02:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21163",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21164"},{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:3,month:"\u0438\u044e\u043d\u044f"},time:"03:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21165",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21166"},{location:"\u0414\u041a",date:{day:4,month:"\u0438\u044e\u043d\u044f"},time:"04:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21167",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21168"},{location:"\u0421\u0442\u0430\u0434\u0438\u043e\u043d",date:{day:5,month:"\u0438\u044e\u043d\u044f"},time:"05:00",rival_1:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u21169",rival_2:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a \u211610"}]})})};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7afde40a.chunk.js.map