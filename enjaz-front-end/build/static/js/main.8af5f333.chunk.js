(this["webpackJsonpenjaz-front-end"]=this["webpackJsonpenjaz-front-end"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(34),r=a.n(l),i=(a(43),a(1)),s=a(2),o=a(3),u=a(4),m={development:"http://localhost:".concat(5e3,"/api"),production:"https://enjaz-0011.herokuapp.com/api"},p="localhost"===window.location.hostname?m.development:m.production,d=a(17),h=a(12),k=a(11),E=a(13),v=a(9),f=a.n(v),b=a(35),T=a.n(b),g=function(){var e=localStorage.getItem("currentUser");return T()(e)},y=(a(63),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={empUsername:"",password:""},n.change=n.change.bind(Object(E.a)(n)),n.submit=n.submit.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"change",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){var t=this;e.preventDefault(),f.a.post("http://localhost:5000/api/emp/login",{empUsername:this.state.empUsername,password:this.state.password}).then((function(e){console.warn("res",e),localStorage.setItem("currentUser",e.data.token);var a=g().data.admin;return!0===a?(console.log("a:",a),t.props.history.push("/AdminHeader")):!1===a?(console.log("B:",a),t.props.history.push("/EmpHeader")):void 0===a&&(console.log("b: ",a),t.props.history.push("/")),e})).catch((function(e){console.log("ERROR: ",e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{class:"container",onclick:"onclick"},c.a.createElement("div",{class:"top"}),c.a.createElement("div",{class:"bottom"}),c.a.createElement("div",{class:"center"},c.a.createElement("h2",null,"Please Sign In"),c.a.createElement("form",{onSubmit:function(t){return e.submit(t)}},c.a.createElement("input",{type:"text",name:"empUsername",onChange:function(t){return e.change(t)},value:this.state.empUsername}),c.a.createElement("input",{type:"password",placeholder:"password",name:"password",onChange:function(t){return e.change(t)},value:this.state.password}),c.a.createElement("button",{type:"submit"},"Submit")),c.a.createElement("h2",null,"\xa0")))}}]),a}(n.Component)),O=(a(29),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).TicketClicked=function(e){"none"===n.state.Fltir?n.setState({Fltir:"display"}):n.setState({Fltir:"none"})},n.closeClick=function(e){e.preventDefault(),n.props.closeOneTicket(n.props.id)},n.state={Fltir:"none"},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("li",{className:"event"},c.a.createElement("div",{className:"member-infos"},c.a.createElement("h1",{className:"member-title",onClick:this.TicketClicked},this.props.TicketState),c.a.createElement("div",{className:"Description-".concat(this.state.Fltir)},c.a.createElement("h2",null,this.props.TicketDescription),c.a.createElement("span",{class:"shots-number"},this.props.TicketType),c.a.createElement("button",{className:"raise",onClick:this.closeClick}," Close "))))}}]),a}(c.a.Component)),j=function(){return f.a.get("".concat(p,"/emp/allTickets"))},N=function(e){return f.a.get("".concat(p,"/emp/SendTickets/").concat(e))},S=(a(30),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).closeOneTicket=function(e){(function(e){return f()({method:"patch",url:p+"/UpdateTicket/".concat(e),data:{TicketState:"closed"}})})(e).then((function(t){var a=n.state.Tickets.filter((function(t){return t._id!==e}));n.setState({Tickets:a})})).catch((function(e){}))},n.state={Tickets:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){console.log("repose.data",t.data);var a=t.data.filter((function(e){if("closed"!==e.TicketState)return t.data}));e.setState({Tickets:a})})).catch((function(e){console.log(" API error: ",e)}))}},{key:"render",value:function(){var e=this,t=c.a.createElement("h3",null," No Tickets! :( ");return null!==this.state.Tickets&&(t=this.state.Tickets.map((function(t,a){return c.a.createElement(O,{id:t._id,TicketType:t.TicketType,TicketState:t.TicketState,TicketDescription:t.TicketDescription,closeOneTicket:e.closeOneTicket,key:a})}))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"ALL Ticket"),c.a.createElement("ul",{className:"timeline"},t))}}]),a}(c.a.Component)),C=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).TicketClicked=function(e){"none"===n.state.Fltir?n.setState({Fltir:"display"}):n.setState({Fltir:"none"})},n.delete=function(e){e.preventDefault(),n.props.deleteOneTicket(n.props.id)},n.state={Fltir:"none"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:"event"},c.a.createElement("div",{className:"member-infos"},c.a.createElement("h1",{className:"member-title",onClick:this.TicketClicked},this.props.TicketState),c.a.createElement("div",{className:"Description-".concat(this.state.Fltir)},c.a.createElement("h2",null," ",this.props.TicketDescription," "),c.a.createElement("span",{class:"shots-number"},this.props.TicketType),c.a.createElement("button",{className:"raise",onClick:function(t){return e.delete(t)}}," Delete "))))}}]),a}(c.a.Component),D=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).deleteOneTicket=function(e){(function(e){return f()({method:"delete",url:p+"/DeleteTicket/".concat(e)})})(e).then((function(t){var a=n.state.history.filter((function(t){return console.log("return",t._id),t._id!==e}));n.setState({history:a}),console.log("setState",n.state.history)})).catch((function(e){}))},n.state={history:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;j().then((function(t){console.log("reponse.data",t.data);var a=t.data.filter((function(e){if("closed"===e.TicketState)return t.data}));e.setState({history:a})})).catch((function(e){console.log(" API error: ",e)}))}},{key:"render",value:function(){var e=this;console.log(this.state.history);var t=c.a.createElement("h3",null," No History Tickets.. ");return null!==this.state.history&&(t=this.state.history.map((function(t,a){return c.a.createElement(C,{id:t._id,TicketType:t.TicketType,TicketState:t.TicketState,deleteOneTicket:e.deleteOneTicket,TicketDescription:t.TicketDescription,key:a})}))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"History Ticket"),c.a.createElement("ul",{className:"timeline"},t),c.a.createElement("li",{onClick:this.props.toggle},c.a.createElement("i",{className:"material-icons"}," arrow_back ")))}}]),a}(c.a.Component),w=(a(64),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).addEmployee=function(e){console.log(e,"Manager");var t;g().data._id;(t=e,f()({method:"POST",url:p+"/emp/register",data:{empFullName:t.empFullName,email:t.email,empUsername:t.empUsername,password:t.password,empPhone:t.empPhone}})).then((function(e){console.log()})).catch((function(e){console.log("API ERROR: ",e)}))},e.handleChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.formSubmit=function(t){var a=e.state;console.log(a," NewEmployee"),t.preventDefault(),e.addEmployee(a)},e.state={empFullName:"",email:"",empUsername:"",password:"",empPhone:""},e.addEmployee=e.addEmployee.bind(Object(E.a)(e)),e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.empFullName,n=t.email,l=t.empUsername,r=t.password,i=t.empPhone;return c.a.createElement("div",null,c.a.createElement("form",{className:"parent-wrappe"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7"),c.a.createElement("h3",null,"Add New Employee"),c.a.createElement("div",{className:"subscribe-wrappe"},c.a.createElement("div",null,c.a.createElement("label",null,"FullName"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"empFullName",value:a,type:"empFullName",placeholder:"empFullName",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("label",null,"Username"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"empUsername",value:l,type:"empUsername",placeholder:"empUsername",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("label",null,"Email"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"email",value:n,placeholder:"Email",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("label",null,"Password"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"password",value:r,type:"password",placeholder:"Password",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("label",null,"Phone"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"empPhone",value:i,type:"empPhone",placeholder:"empPhone",onChange:this.handleChange})),c.a.createElement("br",null),c.a.createElement("a",{href:"/AdminHeader"},c.a.createElement("i",{className:"material-icons"}," arrow_back ")),c.a.createElement("div",{className:"submit-btn",onClick:function(t){return e.formSubmit(t)}},"Add"))))}}]),a}(c.a.Component)),F=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logOut=function(e){e.preventDefault(),n.props.history.push("/"),localStorage.clear("currentUser")},n.state={toggle:!1,toggleHistory:!0},n}return Object(s.a)(a,[{key:"togglehandler",value:function(e){e.preventDefault(),this.setState({toggle:!this.state.toggle})}},{key:"togglehandler_HistoryTickets",value:function(e){e.preventDefault(),this.setState({toggleHistory:!this.state.toggleHistory})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"page"},c.a.createElement("header",{tabindex:"0"},"Enjaz"),c.a.createElement("div",{className:"nav-container"},c.a.createElement("div",{className:"bg"}),c.a.createElement("div",{className:"button",tabindex:"0"},c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"})),c.a.createElement("div",{className:"nav-content",tabindex:"0"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(t){return e.togglehandler(t)}},"NewEmployee"),c.a.createElement("li",{onClick:function(t){return e.togglehandler_HistoryTickets(t)}},"History"),c.a.createElement("li",{onClick:function(t){return e.logOut(t)}}," Log out ")))),c.a.createElement("main",null,!1===this.state.toggle?c.a.createElement(c.a.Fragment,null,!1===this.state.toggleHistory?c.a.createElement(D,{toggle:function(t){return e.togglehandler_HistoryTickets(t)}}):c.a.createElement(S,null)):c.a.createElement(w,{AddClicked:this.AddClicked})))}}]),a}(c.a.Component),_=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).TicketClicked=function(e){e.preventDefault(),"none"===n.state.Fltir?n.setState({Fltir:"display"}):n.setState({Fltir:"none"})},n.state={Fltir:"none"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:"event"},c.a.createElement("div",{className:"member-infos"},c.a.createElement("h1",{className:"member-title",onClick:function(t){return e.TicketClicked(t)}},this.props.TicketState),c.a.createElement("div",{className:"Description-".concat(this.state.Fltir)},c.a.createElement("h2",null," ",this.props.TicketDescription," "),c.a.createElement("div",{class:"member-parameters"},c.a.createElement("li",{class:"member-follower"},c.a.createElement("span",{class:"followers"},this.props.TicketType))))))}}]),a}(c.a.Component),U=(a(31),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setTickets=function(e){n.setState({Emp_SendTickets:e})},n.state={Emp_SendTickets:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=g().data._id;N(t).then((function(t){console.log("reponse.data",t.data),e.setTickets(t.data)})).catch((function(e){console.log(" API error: ",e)}))}},{key:"render",value:function(){var e=c.a.createElement("h3",null," No Tickets! :( ");return this.state.Emp_SendTickets.length>0&&(e=this.state.Emp_SendTickets.map((function(e,t){return c.a.createElement(_,{id:e._id,TicketType:e.TicketType,TicketState:e.TicketState,TicketDescription:e.TicketDescription,key:t})}))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Your Tickets"),c.a.createElement("ul",{className:"timeline"},e),c.a.createElement("button",{onClick:this.props.toggle}," Go back "))}}]),a}(c.a.Component)),A=(a(32),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",{className:"parent-wrapper"},c.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal"},"\xd7"),c.a.createElement("h3",null,"Add New Ticket"),c.a.createElement("div",{className:"subscribe-wrapper"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"TicketDescription"},"TicketDescription"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"TicketDescription",value:this.props.TicketDescription,type:"texte",placeholder:"TicketDescription",onChange:this.props.handleChange}))),c.a.createElement("div",null,c.a.createElement("label",{for:"cars"},"TicketState:"),c.a.createElement("br",null),c.a.createElement("select",{name:"TicketState",type:"text",placeholder:"TicketState",onChange:this.props.handleChange},c.a.createElement("option",{value:this.props.TicketState},"Open"),c.a.createElement("option",{value:this.props.TicketState},"On Progress"))),c.a.createElement("a",{href:"/EmpHeader"},c.a.createElement("i",{className:"material-icons"},"arrow_back")),c.a.createElement("div",{className:"submit-btn",onClick:function(t){return e.props.formEdit(t)}},"Edit"))))}}]),a}(c.a.Component)),P=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.formEdit=function(t){var a=e.state;console.log(a,"EditTicket"),t.preventDefault(),e.props.EditUpdateTicket(a)},e.state={TicketDescription:"",TicketState:""},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(A,{handleChange:this.handleChange,EditTicket:this.EditTicket,formEdit:this.formEdit}))}}]),a}(c.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).EditUpdateTicket=function(e){console.log(e,"Employee");var t,a;g().data._id;(t=e,a=n.props.id,f()({method:"patch",url:p+"/UpdateTicket/".concat(a),data:{TicketType:t.TicketType,TicketDescription:t.TicketDescription,TicketState:t.TicketState}})).then((function(e){})).catch((function(e){console.log("API ERROR: ",e)}))},n.TicketClicked=function(e){"none"===n.state.Fltir?n.setState({Fltir:"display"}):n.setState({Fltir:"none"})},n.state={toggle:!1,Fltir:"none"},n}return Object(s.a)(a,[{key:"togglehandler",value:function(e){e.preventDefault(),this.setState({toggle:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,!1===this.state.toggle?c.a.createElement("li",{className:"event"},c.a.createElement("div",{className:"member-infos"},c.a.createElement("h1",{onClick:this.TicketClicked},this.props.TicketState),c.a.createElement("div",{className:"Description-".concat(this.state.Fltir)},c.a.createElement("span",{className:"shots-number"}," ",this.props.TicketType," "),c.a.createElement("h2",null," ",this.props.TicketDescription," "),c.a.createElement("button",{onClick:function(t){return e.togglehandler(t)},className:"raise"}," Edit ")))):c.a.createElement(P,{EditUpdateTicket:this.EditUpdateTicket}))}}]),a}(c.a.Component),H=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setTickets=function(e){n.setState({Emp_ReceivedTickets:e})},n.state={Emp_ReceivedTickets:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=g().data._id;N(t).then((function(t){console.log("reponse.data",t.data),e.setTickets(t.data)})).catch((function(e){console.log(" API error: ",e)}))}},{key:"render",value:function(){var e=c.a.createElement("h3",null," No Tickets! :( ");return this.state.Emp_ReceivedTickets.length>0&&(e=this.state.Emp_ReceivedTickets.map((function(e,t){return c.a.createElement(R,{id:e._id,TicketType:e.TicketType,TicketState:e.TicketState,TicketDescription:e.TicketDescription,key:t})}))),c.a.createElement("div",{className:"content"},c.a.createElement("h2",null,"Received Ticket"),c.a.createElement("ul",{className:"TimeLineReceivedTickets"},e))}}]),a}(c.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",{className:"parent-wrapper"},c.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal"},"\xd7"),c.a.createElement("h3",null,"Add New Ticket"),c.a.createElement("div",{className:"subscribe-wrapper"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"TicketType"},"TicketType"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"TicketType",value:this.props.TicketType,type:"text",placeholder:"TicketType",onChange:this.props.handleChange})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"TicketDescription"},"TicketDescription"),c.a.createElement("br",null),c.a.createElement("input",{className:"subscribe-input",required:!0,name:"TicketDescription",value:this.props.TicketDescription,type:"text",placeholder:"TicketDescription",onChange:this.props.handleChange}))),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"TicketState"},"TicketState:"),c.a.createElement("br",null),c.a.createElement("select",{name:"TicketState",type:"text",placeholder:"TicketState",onChange:this.props.handleChange},c.a.createElement("option",{value:this.props.TicketState},"Open"),c.a.createElement("option",{value:this.props.TicketState},"On Progress"))),c.a.createElement("br",null),c.a.createElement("a",{href:"/EmpHeader"},c.a.createElement("i",{className:"material-icons"},"arrow_back")),c.a.createElement("div",{className:"submit-btn",onClick:function(t){return e.props.formAdd(t)}},"Add"))))}}]),a}(c.a.Component),I=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.formAdd=function(t){var a=e.state;console.log(a," NewTicket"),t.preventDefault(),e.props.addTicket(a)},e.state={TicketType:"",TicketDescription:"",TicketState:""},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(x,{handleChange:this.handleChange,newTicket:this.newTicket,formAdd:this.formAdd}))}}]),a}(c.a.Component),q=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).logOut=function(e){e.preventDefault(),n.props.history.push("/"),localStorage.clear("currentUser")},n.addTicket=function(e){console.log(e,"Employee");var t,a,n=g().data._id;console.log(n),(t=e,a=n,f()({method:"POST",url:p+"/".concat(a),data:{TicketType:t.TicketType,TicketDescription:t.TicketDescription,TicketState:t.TicketState}})).then((function(t){console.log("The Ticket ".concat(e.empFullName," has been added successfully."))})).catch((function(e){console.log("API ERROR: ",e)}))},n.state={toggle:!1,toggleTicket:!0},n}return Object(s.a)(a,[{key:"togglehandler",value:function(e){e.preventDefault(),this.setState({toggle:!this.state.toggle})}},{key:"togglehandler_SendTickets",value:function(e){e.preventDefault(),this.setState({toggleTicket:!this.state.toggleTicket})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"page"},c.a.createElement("header",{tabindex:"0"},"Enjaz"),c.a.createElement("div",{className:"nav-container"},c.a.createElement("div",{className:"bg"}),c.a.createElement("div",{className:"button",tabindex:"0"},c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"}),c.a.createElement("span",{className:"icon-bar"})),c.a.createElement("div",{className:"nav-content",tabindex:"0"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(t){return e.togglehandler_SendTickets(t)}},"Your Tickets"),c.a.createElement("li",{onClick:function(t){return e.togglehandler(t)}},"New Ticket"),c.a.createElement("li",{onClick:function(t){return e.logOut(t)}},"LogOut")))),c.a.createElement("main",null,!1===this.state.toggle?c.a.createElement(c.a.Fragment,null,!1===this.state.toggleTicket?c.a.createElement(U,{toggle:function(t){return e.togglehandler_SendTickets(t)}}):c.a.createElement(H,null)):c.a.createElement(I,{addTicket:this.addTicket})))}}]),a}(c.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={admin:void 0,user:void 0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("currentUser"),t=g().data.admin;e?!0===t?this.setState({admin:e}):!1===t&&this.setState({user:e}):this.setState({user:null,admin:null})}},{key:"render",value:function(){return c.a.createElement("div",null,void 0!==this.state.admin?this.props.children[1]:this.props.children[0])}}]),a}(n.Component),z=Object(h.f)(M),L=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log("MY API :  ",p),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0,component:y}),c.a.createElement(z,null,c.a.createElement(h.a,{path:"/EmpHeader",component:q}),c.a.createElement(h.a,{path:"/AdminHeader",component:F})))))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8af5f333.chunk.js.map