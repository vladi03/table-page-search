(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){a(51),e.exports=a(68)},58:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);a(58);var n=a(0),r=a.n(n),o=a(9),l=a(119),i=a(97),s=a(95),c=a(117),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m=function(e){var t=e.spinnerSize,a=e.style,n=e.loading,o=e.children,l=function(e){return Object(c.a)({spinnerIcon:{width:e,height:e},spinnerWrapper:{width:e,position:"relative",margin:"auto"},fabProgress:{color:"primary",position:"absolute",left:0,zIndex:1}})()}(t);return void 0===o||n?r.a.createElement("div",{className:l.spinnerWrapper,style:u({},a)},r.a.createElement(s.a,{color:"secondary",className:l.spinnerIcon}),r.a.createElement(i.a,{size:t,className:l.fabProgress})):o},d=a(111),g=a(112),p=a(113),f=a(114),h=a(98),N=a(99),E=a(116),b=a(102),x=a(103),v=a(104),w=a(105),C=a(106),y=Object(c.a)({root:{width:"100%",display:"flex",marginTop:"10px"},containerHalfLeft:{width:"50%",display:"flex",justifyContent:"flex-start",marginLeft:"10px"},containerHalfRight:{width:"50%",display:"flex",justifyContent:"flex-end",paddingRight:15},mainText:{fontSize:15,lineHeight:"36px"},pagingMessageContainer:{alignSelf:"flex-start",minHeight:"36px",textAlign:"right",marginRight:"10px"},pagingMessage:{fontSize:"14px",lineHeight:"36px"},formControl:{fontSize:"14px"},column:{flexBasis:"10%",minHeight:"36px"},pageButtonsContainer:{textAlign:"center",width:33},pageButtonsText:{marginTop:"-2px"},pageButtonsIconsText:{marginTop:"-1px"},pageButton:{padding:"8px",lineHeight:"23px",width:"33.79px",height:"34px",fontSize:"14px",borderRadius:0,backgroundColor:"white",color:"blue",border:"1px solid #ddd"},pageButtonEndLeft:{padding:"8px",lineHeight:"23px",width:"33.79px",height:"34px",fontSize:"14px",borderRadius:0,backgroundColor:"white",color:"blue",border:"1px solid #ddd",borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},pageButtonEndRight:{padding:"8px",lineHeight:"23px",width:"33.79px",height:"34px",fontSize:"14px",borderRadius:0,backgroundColor:"white",color:"blue",border:"1px solid #ddd",borderTopRightRadius:"4px",borderBottomRightRadius:"4px"}}),S=function(e){var t=e.pageList,a=e.pagingMessage,n=e.currentPageNum,o=e.onPageChange,l=e.showPrevButton,i=e.showNextButton,s=e.allPages,c=e.hasPaging,u=e.condensed,m=y();return c&&r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:m.containerHalfLeft},r.a.createElement("div",{className:m.pagingMessageContainer},r.a.createElement(h.a,{className:m.pagingMessage},u?r.a.createElement("span",null," ",a," Go to :"):r.a.createElement("span",null,"Showing ",a," records,  Go to :"))),r.a.createElement("div",{className:m.pagingMessageContainer},r.a.createElement(N.a,null,r.a.createElement(E.a,{className:m.formControl,native:!0,value:n,onChange:function(e){return o(parseInt(e.target.value))}},s.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))),r.a.createElement("div",{className:m.containerHalfRight},r.a.createElement("div",{className:m.pageButtonsContainer},r.a.createElement(b.a,{disabled:!l,className:m.pageButtonEndLeft,onClick:function(){return o(1)}},r.a.createElement(x.a,{className:m.pageButtonsIconsText,fontSize:"small"}))),r.a.createElement("div",{className:m.pageButtonsContainer},r.a.createElement(b.a,{disabled:!l,className:m.pageButton,onClick:function(){return o(n-1)}},r.a.createElement(v.a,{className:m.pageButtonsIconsText,fontSize:"small"}))),t.map(function(e,t){return r.a.createElement("div",{key:t,className:m.pageButtonsContainer},r.a.createElement(b.a,{className:m.pageButton,onClick:function(){return o(e)},color:"primary",style:{backgroundColor:e===n?"#428bca":"",color:e===n?"white":""}},r.a.createElement("span",{className:m.pageButtonsText},e)))}),r.a.createElement("div",{className:m.pageButtonsContainer},r.a.createElement(b.a,{disabled:!i,className:m.pageButton,onClick:function(){return o(n+1)}},r.a.createElement(w.a,{className:m.pageButtonsIconsText,fontSize:"small"}))),r.a.createElement("div",{className:m.pageButtonsContainer},r.a.createElement(b.a,{disabled:!i,className:m.pageButtonEndRight,onClick:function(){return o(!0)}},r.a.createElement(C.a,{className:m.pageButtonsIconsText,fontSize:"small"})))))},B=a(122),L=a(107),O=a(109),R=a(110),P=a(108),T=(r.a.createElement(B.a,{avatar:r.a.createElement(L.a,null,r.a.createElement(P.a,null)),label:"No Data"}),r.a.createElement(O.a,null,r.a.createElement(B.a,{avatar:r.a.createElement(L.a,null,r.a.createElement(P.a,null)),label:"No Data"}))),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},M=r.a.createElement(d.a,null,r.a.createElement(g.a,null,r.a.createElement(function(e){var t=e.dataCount,a=e.containerClass,n=e.className,o=e.children;return r.a.createElement("div",{className:a},0===t&&r.a.createElement(R.a,{className:n},T)||o)},{dataCount:0}))),j=function(e){var t=e.tableHeader,a=e.tableRows,n=e.paging,o=e.onPageChange,l=e.condensed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"stripe-table"},t,r.a.createElement(f.a,null,n.rows.map(a),0===n.rows.length&&M)),r.a.createElement(S,k({},n,{onPageChange:o,condensed:l})))},z=a(115),F=a(120),H=function(e){var t=e.headerConfig,a=e.sortField,n=e.sortDescending,o=e.onSetSortField;return r.a.createElement(z.a,null,r.a.createElement(d.a,null,t.columns.map(function(e,t){return r.a.createElement(g.a,{key:t,className:a===e.fieldForSort?"sorted":""},e.fieldForSort?r.a.createElement(F.a,{active:a===e.fieldForSort,direction:n?"desc":"asc",onClick:function(){return o(e.fieldForSort)}},e.columnLabel):r.a.createElement("span",null,e.columnLabel))})))},D=function(e,t,a){var n={rows:[],pageList:[],allPages:[],pagingMessage:"No Records",hasError:!1,errorMessage:"",errorMessageDetail:"",hasPaging:!0,showPrevButton:!0,showNextButton:!0,currentPageNum:a};try{for(var r=Math.ceil(e.length/t),o=1;o<=r;o++)n.allPages.push(o);n.hasPaging=r>1;var l=!0===a?I(e.length,t):a;n.currentPageNum=l;var i=l>2?l-1:1,s=0;l<=r&&l>0?s=(l-1)*t:(i=1,n.currentPageNum=1);var c=i+4-1<r?i+4-1:r;c-i<3&&e.length>0&&c>=4&&(i=c-4+1),i<0&&(i=1);for(var u=i;u<=c;u++)n.pageList.push(u);var m=s+t<e.length?s+t:e.length;n.pagingMessage=e.length>0?s+1+"-"+m+" of "+e.length:"No Data",n.rows=e.slice(s,m),n.showPrevButton=n.currentPageNum>1,n.showNextButton=n.currentPageNum<r}catch(e){n.hasError=!0,n.pagingMessage="ERROR",n.errorMessage="Invalid input when creating table paging",n.errorMessageDetail=e.message||e,n.currentPageNum=0}return n},I=function(e,t){return Math.ceil(e/t)},W=function(e,t,a){e.sort(function(e,n){return e[t].toLowerCase()<n[t].toLowerCase()?a?1:-1:e[t].toLowerCase()>n[t].toLowerCase()?a?-1:1:0})},A=function(e){var t=e.loading,a=e.dataList,o=e.headerConfig,l=e.filterText,i=Object(n.useState)(o.columns[0].fieldForSort),s=i[0],c=i[1],u=Object(n.useState)(!1),d=u[0],g=u[1],p=Object(n.useState)(function(){return W(a,o.columns[0].fieldForSort,!1),D(a,10,1)}),f=p[0],h=p[1],N=Object(n.useState)(a),E=N[0],b=N[1],x=Object(n.useState)(""),v=x[0],w=x[1];if(l!==v){var C=a.filter(function(e){return Object.values(e).join().toLowerCase().indexOf(l)>-1});W(C,s,d),b(C),w(l),h(D(C,10,1))}var y=r.a.createElement(H,{headerConfig:o,sortField:s,sortDescending:d,onSetSortField:function(e){var t=e===s&&!d;W(E,e,t),g(t),c(e),h(D(E,10,1))}});return r.a.createElement(m,{spinnerSize:50,loading:t},r.a.createElement(j,{paging:f,tableRows:G(),tableHeader:y,condensed:!1,onPageChange:function(e){h(D(E,10,e))}}))},G=function(){return function(e,t){return r.a.createElement(d.a,{key:t,style:{height:39}},r.a.createElement(g.a,{style:{fontSize:"14px"}},r.a.createElement("span",null,e.firstName)),r.a.createElement(g.a,{style:{fontSize:"14px"}},r.a.createElement("span",null,e.lastName)),r.a.createElement(g.a,{style:{fontSize:"14px"}},r.a.createElement("span",null,e.location)))}};var _={columns:[{fieldForSort:"firstName",columnLabel:"Name First"},{fieldForSort:"lastName",columnLabel:"Name Last"},{fieldForSort:"location",columnLabel:"Location"}]},J=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return a.state={loading:!0,users:K,filterText:""},a.handleChange=function(e,t){var n;a.setState(((n={})[e]=t,n))},a.timeOut=a.timeOut.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){setTimeout(this.timeOut,2e3)},t.prototype.timeOut=function(){this.setState({loading:!1})},t.prototype.render=function(){var e=this,t=this.state,a=t.loading,n=t.users,o=t.filterText;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("h4",{style:{marginLeft:20}},"Table with paging and search"),r.a.createElement(l.a,{label:"Search",style:{marginLeft:40},vaule:o,onChange:function(t){return e.handleChange("filterText",t.target.value)}})),r.a.createElement(A,{loading:a,dataList:n,headerConfig:_,filterText:o}))},t}(r.a.Component),K=[{id:0,firstName:"Cassandra",lastName:"Andrews",location:"Dotsero"},{id:1,firstName:"Lakisha",lastName:"Alvarez",location:"Winfred"},{id:2,firstName:"Kathy",lastName:"Fox",location:"Gorst"},{id:3,firstName:"Cote",lastName:"Haynes",location:"Fairhaven"},{id:4,firstName:"Toni",lastName:"Rose",location:"Leroy"},{id:5,firstName:"Lauren",lastName:"Clark",location:"Marne"},{id:6,firstName:"Mckenzie",lastName:"Davidson",location:"Tetherow"},{id:7,firstName:"Mallory",lastName:"Roman",location:"Sterling"},{id:8,firstName:"Walls",lastName:"Mack",location:"Onton"},{id:9,firstName:"Amie",lastName:"Shepherd",location:"Catherine"},{id:10,firstName:"Jewel",lastName:"Wise",location:"Rutherford"},{id:11,firstName:"Christina",lastName:"Woodard",location:"Websterville"},{id:12,firstName:"Nicole",lastName:"Tillman",location:"Beaulieu"},{id:13,firstName:"Robinson",lastName:"Larsen",location:"Benson"},{id:14,firstName:"Carissa",lastName:"Hogan",location:"Kenwood"},{id:15,firstName:"Garrett",lastName:"Sutton",location:"Torboy"},{id:16,firstName:"Beach",lastName:"Abbott",location:"Ruckersville"},{id:17,firstName:"Lacy",lastName:"Bird",location:"Belleview"},{id:18,firstName:"Misty",lastName:"Cooley",location:"Fowlerville"}];Object(o.render)(r.a.createElement(J,null),document.querySelector("#app"))}},[[50,2,1]]]);
//# sourceMappingURL=app.c588ed05.js.map