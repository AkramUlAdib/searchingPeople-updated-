(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,n){},21:function(e,a,n){},23:function(e,a,n){},25:function(e,a,n){},27:function(e,a,n){},29:function(e,a,n){"use strict";n.r(a);var i=n(0),m=n.n(i),t=n(2),l=n.n(t),r=(n(17),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,30)).then(function(a){var n=a.getCLS,i=a.getFID,m=a.getFCP,t=a.getLCP,l=a.getTTFB;n(e),i(e),m(e),t(e),l(e)})}),o=(n(19),n(3)),c=n(4),s=n(6),u=n(5),g=n(7),d=(n(21),function(e){var a=e.name,n=e.id,i=e.email,t=e.username;return m.a.createElement("div",{className:"img_edit"},m.a.createElement("img",{src:n,alt:"people",width:"250",height:"350"}),m.a.createElement("div",{className:"txt"},m.a.createElement("h2",null,a),m.a.createElement("h3",null,t),m.a.createElement("p",null,i)))}),h=(n(23),function(e){var a=e.people;return m.a.createElement("div",null,a.map(function(e,n){return m.a.createElement("div",{className:"tc"},m.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,email:a[n].email}))}))}),p=function(e){return m.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid pink",marginTop:"10px",height:"500px"}},e.children)},f=[{id:"images/1.jpg",name:"Beverley B. Johnson",username:"Beverley",email:"B.Johnson@gmail.com"},{id:"images/2.jpg",name:"Geraldine R. Reed",username:"Geraldine",email:"R.Reed@gmail.com"},{id:"images/3.jpg",name:"Anna A. Chapman",username:"Anna",email:"Anna_Chapman@outlook.com"},{id:"images/4.jpg",name:"Edwin V. Cruz",username:"Edwin",email:"V.Cruz@yahoo.com"},{id:"images/5.jpg",name:"Diane S. Murphy",username:"Diane",email:"S.Murphy@gmail.com"},{id:"images/6.jpg",name:"Conrad O. Delgado",username:"Conrad",email:"Conrad_Delgado@gmail.com"},{id:"images/7.jpg",name:"Ethel D. Rodgers",username:"Ethel",email:"Ethel_Rodgers@gmail.com"},{id:"images/8.jpg",name:"Clifton B. Taylor",username:"Taylor",email:"B.Taylor@gmail.com"},{id:"images/9.jpg",name:"Patricia C. Dunn",username:"Patricia",email:"Patricia@gmail.com"},{id:"images/10.jpg",name:"Mary A. Meador",username:"Mary",email:"MaryMeador@gmail.com"},{id:"images/11.jpg",name:"Claudine J. McKinney",username:"Claudine",email:"Claudine_J.McKinney@gmail.com"},{id:"images/12.jpg",name:"Grace K. Walker",username:"Grace",email:"Grace_K.Walker@gmail.com"},{id:"images/13.jpg",name:"Johnny L. Hopson",username:"Johnny",email:"Johnny@gmail.com"},{id:"images/14.jpg",name:"Nicole C. Thompson",username:"Nicole",email:"Nicole_C.Thompson@gmail.com"},{id:"images/15.jpg",name:"Ralph T. Campbell",username:"Ralph",email:"Ralph_T.Campbell@gmail.com"}],E=(n(25),function(e){e.searchfield;var a=e.searchChange;return m.a.createElement("div",{className:"divbox"},m.a.createElement("input",{className:"box",type:"search",placeholder:"search here",onChange:a}))}),C=(n(27),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={people:f,searchfield:""},e}return Object(g.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.people,n=e.searchfield,i=a.filter(function(e){return e.username.toLowerCase().includes(n.toLowerCase())});return 0===a.length?m.a.createElement("h2",null,"Loading"):m.a.createElement("div",{className:"tc"},m.a.createElement("h1",{className:"f1"},"PEOPLES"),m.a.createElement(E,{searchChange:this.onSearchChange}),m.a.createElement(p,null,m.a.createElement(h,{people:i})))}}]),a}(i.Component));l.a.createRoot(document.getElementById("root")).render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(C,null))),r()},8:function(e,a,n){e.exports=n(29)}},[[8,3,2]]]);
//# sourceMappingURL=main.3fbc5812.chunk.js.map