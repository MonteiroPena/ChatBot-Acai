(this["webpackJsonpprojeto-bot"]=this["webpackJsonpprojeto-bot"]||[]).push([[0],{1061:function(e,t){},1062:function(e,t){},1063:function(e,t){},1183:function(e,t){},1193:function(e,t){},1194:function(e,t){},1195:function(e,t){},1210:function(e,t){},1217:function(e,t,a){},1218:function(e,t,a){},1219:function(e,t,a){},1236:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=(a(217),a(430),a(100)),r=a.n(l),o=a(65),i=a(34),m=Object(i.a)(),u=a(50),s=a(51),d=a(53),p=a(52),f=a(54),E=(a(434),a(435),a(101)),h=function(e){return c.a.createElement(E.b,Object.assign({activeStyle:{fontWeight:"bold"}},e))};var b=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"nav-wrapper header col-12"},c.a.createElement("ul",{id:"nav-mobile",className:"center hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(h,{to:"/cardapio"},c.a.createElement("b",null,c.a.createElement("u",null,"Card\xe1pio")))),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/pedidos"},c.a.createElement("b",null,c.a.createElement("u",null,"Fa\xe7a o Pedido")))),c.a.createElement("li",null,c.a.createElement(h,{to:"/contato"},c.a.createElement("b",null,c.a.createElement("u",null,"Contato")))))))},v=(a(440),function(){return c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("u",null,"Tamanho")),c.a.createElement("th",null,c.a.createElement("u",null,"Pre\xe7os")),c.a.createElement("th",null,c.a.createElement("u",null,"Adicional")),c.a.createElement("th",null,c.a.createElement("u",null,"Pre\xe7o Adicional"))))}),g=function(e){var t=e.acai.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.tamanho),c.a.createElement("td",null,e.preco),c.a.createElement("td",null,e.adicional),c.a.createElement("td",null,e.precoAdicional))}));return c.a.createElement("tbody",null,t)},j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={acai:[{tamanho:"300ml",preco:"R$ 4,00",adicional:"Leite em p\xf3",precoAdicional:"R$ 1,00"},{tamanho:"500ml",preco:"R$ 6,00",adicional:"Leite condensado",precoAdicional:"R$ 1,00"},{tamanho:"700ml",preco:"R$ 8,00",adicional:"Granola",precoAdicional:"R$ 1,00"},{tamanho:"1L",preco:"R$ 10,00",adicional:"Pa\xe7oca",precoAdicional:"R$ 1,00"}]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{className:"table table-striped cardapio-format centered"},c.a.createElement(v,null),c.a.createElement(g,{acai:this.state.acai})))}}]),t}(n.Component),_=function(e){var t=e.promoction.map((function(e,t){return c.a.createElement("td",{key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{alt:"",src:e.urlImg})),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,e.descCombo,c.a.createElement("b",null,e.precoCombo)))))}));return c.a.createElement("td",null,t)},k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={promoction:[{urlImg:"https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/74698879_1499638613552261_5488931112950431744_o.jpg?_nc_cat=105&_nc_ohc=Sl_6b9mCHSQAQkYse7LOQ_T33mZewuY5Y_rPIF3Pr-imD4f-B-RWIwydA&_nc_ht=scontent.fsjk2-1.fna&oh=c856acd688242befef051213e6caa4f5&oe=5E4AC0DF",descCombo:"Combo 1:  A\xe7ai 700ml c/ creme de Maracuj\xe1",precoCombo:"R$ 12,00"},{urlImg:"https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/72211876_1477704522412337_3928136694754181120_o.png?_nc_cat=106&_nc_ohc=zutbaNYpYloAQlp3xszqkzE9oA82GHv4cEqSIIMlQyjUkNbR3-cX-Xgkw&_nc_ht=scontent.fsjk2-1.fna&oh=6bcdb9cd34e6d70c9a7195e20324583f&oe=5E774285",descCombo:"Combo 2:  A\xe7ai 700ml c/ creme de Lim\xe3o",precoCombo:"R$ 12,00"},{urlImg:"https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/78071045_1516607305188725_4007591502376075264_o.jpg?_nc_cat=107&_nc_ohc=q0k9z9L18cUAQnhu8b33w1DFkSLmu_WQY1JvtJH8HjBvZUjM0I1nl1xkw&_nc_ht=scontent.fsjk2-1.fna&oh=cbe675974043b85d66e7a166fcf05217&oe=5E4262E4",descCombo:"Combo 3:  A\xe7ai 700ml c/ creme de Oreo",precoCombo:"R$ 15,00"},{urlImg:"https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC",descCombo:"Combo 4: :  A\xe7ai 700ml c/ creme de Avel\xe3 e Morango",precoCombo:"R$ 15,00"}]},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(b,null),c.a.createElement("h1",null,"Card\xe1pio de A\xe7ai"),c.a.createElement("div",{className:"container mb-10"},c.a.createElement(j,null)),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement(_,{promoction:this.state.promoction}))))}}]),t}(n.Component),C=function(){return c.a.createElement("div",{className:"center col-5"},c.a.createElement("p",null,c.a.createElement("b",null,"E-mail:")," acai@acai.com.br"),c.a.createElement("p",null,c.a.createElement("b",null,"Telefone:")," (11) 4002-8922"),c.a.createElement("p",null,c.a.createElement("b",null,"Whatsapp:")," (11) 99195-6364"),c.a.createElement("p",null,c.a.createElement("b",null,"Endere\xe7o:")," Av. 9 de Julho, 251"))},w=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(b,null),c.a.createElement("h1",null,"Contatos"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"center col-5"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{alt:"",src:"https://www.gxportal.com/media/images/2013-02-14_1208-png.png?timestamp=20170913143749"})),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:"https://www.google.com.br/maps/place/GSW+Solu%C3%A7%C3%B5es+Integradas/@-23.1913281,-45.8905117,17z/data=!3m1!4b1!4m5!3m4!1s0x94cc4a18d66d9607:0xfe285a79358e2324!8m2!3d-23.191333!4d-45.888323"},"Clique aqui para nos encontrar")))),c.a.createElement(C,null)))},O=a(102),A=a(135),N=a(426),y=a.n(N),x="xvyPNpIuVCs.wgFDoF6BrLTwElbmBdmoQUuEoEk9ezAJxJm2gYrHoaA",I=(a(1217),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).directLine=new A.DirectLine({token:"".concat(x)}),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(y.a,{directLine:this.directLine,userID:"Joaozin"})}}]),t}(n.Component)),R=(a(1218),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("nav",{className:"sidebar-container format-personalizado"},c.a.createElement("h1",{className:"sidebar-title"},"Card\xe1pio"),c.a.createElement(j,null)))}}]),t}(n.Component)),S=(a(1219),a(4)),z=a.n(S),L=a(215),T=a(216),$=a.n(T),F=function(){var e=Object(L.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.post("https://directline.botframework.com/v3/directline/tokens/generate",{},{headers:{Authorization:"bearer ".concat(x)}}).then((function(e){var t=e.data;if(t)return console.log("autenticado",t.token),Q(t.token)})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(L.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.a.post("https://directline.botframework.com/v3/directline/conversations",{},{headers:{Authorization:"bearer ".concat(t)}}).then((function(e){var t=e.data.token;return console.log("Id da conversa = "),sessionStorage.setItem("token",t),t})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(O.a)(a)),a.handleTextChange=a.handleTextChange.bind(Object(O.a)(a)),a.state={name:"",token:"",validacao:!1},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this;F().then((function(e){null!==e&&t.setState({validacao:!0})})),e.preventDefault(),this.setState({token:sessionStorage.getItem("token")}),alert("Obrigado ".concat(this.state.name,", seja bem-vindo!")),console.log(this.state.token)}},{key:"handleTextChange",value:function(e){e.preventDefault(),this.setState({name:e.target.value})}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(b,null),c.a.createElement("div",{className:"row"},c.a.createElement("nav",{className:"home-sidebar"},c.a.createElement(R,null),c.a.createElement("img",{alt:"",className:"format-img-pedido",src:"https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC"})),c.a.createElement("div",{className:"home-main"},c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("button",{className:"btn waves-effect waves-light format-btn-inserir-nome",type:"submit",onClick:this.handleClick,name:"action"},"Inserir meu Nome "),c.a.createElement("input",{className:"format-input-inserir-nome",type:"text",placeholder:"Digite o seu nome",onChange:this.handleTextChange,value:this.state.name})))),c.a.createElement("div",{className:"mensagens-format"},this.state.validacao?c.a.createElement(I,null):null))))}}]),t}(n.Component),q=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(b,null),c.a.createElement("h1",null,"P\xe1gina N\xe3o Encontrada"))},D=function(){return c.a.createElement(o.b,{history:m},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:U}),c.a.createElement(o.a,{path:"/cardapio",component:k}),c.a.createElement(o.a,{path:"/contato",component:w}),c.a.createElement(o.a,{path:"/pedidos",component:U}),c.a.createElement(o.a,{component:q})))},Y=function(){return c.a.createElement("main",null,c.a.createElement(D,null))};r.a.render(c.a.createElement(Y,null),document.getElementById("root"))},428:function(e,t,a){e.exports=a(1236)},435:function(e,t,a){},440:function(e,t,a){},544:function(e,t){},546:function(e,t){},583:function(e,t){},584:function(e,t){}},[[428,1,2]]]);
//# sourceMappingURL=main.a4f67479.chunk.js.map