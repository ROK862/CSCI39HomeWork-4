(this["webpackJsonpreact-styling-exercise"]=this["webpackJsonpreact-styling-exercise"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a,r,c,l,o=n(1),i=n.n(o),s=n(14),u=n.n(s),p=(n(22),n(23),n(2)),d=n(3),b=n(5),h=n(4),j=n(8),x=n.n(j),O=n(6),f=n(7),v=n.p+"static/media/onclick_sound.42364d3e.mp3",k=n(9),C=n(0),g=f.a.div(a||(a=Object(O.a)(["\n  padding: 10px;\n  border: 1px solid #bbbbbb;\n  border-radius: 9px;\n  width: 40px;\n  text-align: center;\n  float: right;\n  margin: 5px;\n  box-shadow: 3px 2px 15px 2px #00000021;\n  background: #0088d7;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n"]))),m=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).togglePlay=function(){new k.Howl({src:v}).play()},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e="pi"!==this.props.action?this.props.value:3.141592653589793;return Object(C.jsx)(g,{onClick:function(){t.props.onClick(e),t.togglePlay()},children:this.props.value})}}]),n}(o.Component),y=f.a.div(r||(r=Object(O.a)(["\n  padding: 10px;\n  border: 1px solid #bbbbbb;\n  border-radius: 9px;\n  width: 40px;\n  text-align: center;\n  margin: 5px;\n  box-shadow: 3px 2px 15px 2px #00000021;\n  background: #000000;\n  color: white;\n  font-weight: bold;\n"]))),N=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).togglePlay=function(){new k.Howl({src:v}).play()},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props.action,n=e||this.props.value;return Object(C.jsx)(y,{onClick:function(){t.props.onClick(n),t.togglePlay()},children:this.props.value})}}]),n}(o.Component),w=f.a.div(c||(c=Object(O.a)(["\n  overflow: hidden;\n  font-size: 20px;\n  padding: 20px;\n  background: #f3f3f3;\n  border: 1px solid #cfcfcf;\n  border-radius: 15px;\n  width: 270px;\n  height: 60px;\n  text-align: right;\n  margin-bottom: 10px;\n  color:black;\n"]))),S=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.state,e=Object(C.jsx)(A,{value:t.mathUtil.GetPrintValue()});return Object(C.jsxs)(w,{children:[e," ",this.props.value]})}}]),n}(o.Component),q=f.a.div(l||(l=Object(O.a)(["\n  font-size: 20px;\n  width: 371%;\n  position: relative;\n  right: 265%;\n  font-weight: bold;\n  color: #008cdd;\n"]))),A=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.value.length,e=t>=35&&t<=44?14:t>=45?12:20;return Object(C.jsx)(q,{style:{fontSize:e},children:this.props.value})}}]),n}(o.Component),P=S,R=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={first:null,operator:null,second:null,mathUtil:null},t.special={sqRoot:"sq",qbRoot:"qb",pi:"pi"},t.handleNumberClick=function(e){t.state.operator?t.setState({second:"".concat(t.state.second||"").concat(e)}):t.setState({first:"".concat(t.state.first||"").concat(e)})},t.handleOperatorClick=function(e){var n=parseFloat(t.state.first);if(x.a.AddOperator(e),"="===e){var a=parseFloat(t.state.second);x.a.AddNumber(n),x.a.AddNumber(a),"+"===t.state.operator?t.setState({operator:null,first:n+a,second:null}):"/"===t.state.operator?t.setState({operator:null,first:n/a,second:null}):"-"===t.state.operator?t.setState({operator:null,first:n-a,second:null}):"x"===t.state.operator?t.setState({operator:null,first:n*a,second:null}):t.state.operator===t.special.sqRoot?t.setState({operator:null,first:Math.sqrt(n),second:null}):t.state.operator===t.special.qbRoot&&t.setState({operator:null,first:Math.cbrt(n),second:null})}else"clear"===e?(x.a.Clear(),t.setState({first:null,second:null,operator:null})):t.setState({operator:e})},t.getScreenValue=function(){return t.state.second||t.state.first},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(P,{utilities:x.a,value:this.getScreenValue()}),Object(C.jsxs)("div",{style:{display:"flex"},children:[Object(C.jsxs)("div",{style:{width:145},className:"Calculator-Number-Section",children:[Object(C.jsx)(m,{value:0,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:1,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:2,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:3,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:4,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:5,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:6,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:7,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:8,onClick:this.handleNumberClick}),Object(C.jsx)(m,{value:9,onClick:this.handleNumberClick})]}),Object(C.jsxs)("div",{style:{paddingLeft:10},className:"Calculator-Operator-Section",children:[Object(C.jsx)(N,{value:"\u221a",action:"sq",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"\u221b",action:"qb",onClick:this.handleOperatorClick}),Object(C.jsx)(m,{value:"\u03c0",action:"pi",onClick:this.handleNumberClick})]}),Object(C.jsxs)("div",{style:{paddingLeft:10},className:"Calculator-Operator-Section",children:[Object(C.jsx)(N,{value:"+",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"/",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"x",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"-",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"=",onClick:this.handleOperatorClick}),Object(C.jsx)(N,{value:"clear",onClick:this.handleOperatorClick})]})]})]})}}]),n}(o.Component);var V=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)("div",{className:"Calculator",children:[Object(C.jsx)("header",{children:"Calculator"}),Object(C.jsx)(R,{})]})})};u.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(V,{})}),document.getElementById("root"))},8:function(t,e){var n=[],a=[];t.exports.AddOperator=function(t){n.push(t),console.log(t)},t.exports.AddNumber=function(t){a.push(t),console.log(t)},t.exports.UpdateNumber=function(t){a[a.length-1]=t},t.exports.Clear=function(){n=[],a=[]},t.exports.GetPrintValue=function(){var t=0,e="";return console.log(a),a.length>0&&a.forEach((function(a){if(!isNaN(a)){var r=n.length>t?n[t]:null;e+=r?"sq"===r||"qb"===r?"".concat(r,"(").concat(a,") "):"".concat(a," ").concat(r," "):"".concat(a," "),t++}})),e}}},[[30,1,2]]]);
//# sourceMappingURL=main.1d74bfc6.chunk.js.map