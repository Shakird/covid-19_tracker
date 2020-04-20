(this["webpackJsonpcovid-19_tracker"]=this["webpackJsonpcovid-19_tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),p=a(84),m=a(83),f=a(224),v=a(228),h=a(225),b=a(226),E=a(32),y=a.n(E),g=a(33),x=a.n(g),C=a(13),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:_.a.container},n.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.infected)},n.a.createElement(h.a,null,n.a.createElement(b.a,{colors:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:a.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(b.a,{colors:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:r.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(_.a.card,_.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(b.a,{colors:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading ..."},j=a(31),w=a(45),k=a(34),D=a.n(k),S="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,r,n,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(80),U=a.n(B),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(r.useState)({}),d=Object(j.a)(l,2),p=d[0],m=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?n.a.createElement(w.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p[0]?n.a.createElement(w.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:U.a.container},u?f:v)},P=a(229),z=a(227),G=a(81),J=a.n(G),M=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(P.a,{className:J.a.formControl},n.a.createElement(z.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},Q=a(46),R=a.n(Q),q=a(82),L=a.n(q),Y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:R.a.container},n.a.createElement("img",{className:R.a.image,src:L.a,alt:"COVID-19"}),n.a.createElement(O,{data:t}),n.a.createElement(M,{handleCountryChange:this.handleCountryChange}),n.a.createElement(A,{data:t,country:a}))}}]),a}(n.a.Component);o.a.render(n.a.createElement(Y,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports=a.p+"static/media/covid-19.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.5ace4379.chunk.js.map