(this["webpackJsonptrue-fanz-admin-panel"]=this["webpackJsonptrue-fanz-admin-panel"]||[]).push([[3],{772:function(e,a,n){e.exports=n.p+"static/media/socialaffil.157f25a8.png"},773:function(e,a,n){e.exports=n.p+"static/media/sygnet.64390efd.svg"},775:function(e,a,n){"use strict";n.r(a);var t=n(111),l=n(4),i=n(5),o=n(7),r=n(6),c=n(0),s=n.n(c),m=n(13),u=n(760),p=n(761),d=n(90),f=n(772),h=n.n(f),g=n(773),v=n.n(g),y=n(9),b=n(290),k=n.n(b),w=function(e){Object(o.a)(n,e);var a=Object(r.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={currentUser:k()(localStorage.socialAffilAdminToken)},e.logout=function(){localStorage.removeItem("socialAffilAdminToken"),e.props.history.push("/login")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){console.log("this.state :",this.state)}},{key:"render",value:function(){var e=this.props,a=(e.children,Object(t.a)(e,["children"]),this.state.currentUser);return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.f,{className:"d-xl-none",display:"lg",mobile:!0}),s.a.createElement(d.c,{full:{src:h.a,width:50,height:50,alt:"Social Affill"},minimized:{src:v.a,width:30,height:30,alt:"SocialSocial Logo"}}),s.a.createElement(d.f,{className:"d-xl-down-none",display:"lg"}),s.a.createElement(u.a,{className:"d-lg-down-none pl-2 pl-md-3 pl-lg-0",navbar:!0},y.a.leftMenu.items.map((function(e){return a.hasOwnProperty("isSuperAdmin")&&a.isSuperAdmin||"Admin Accounts"!==e.name?e.isHeaderMenu&&s.a.createElement(p.a,{className:"px-1 px-lg-2",key:e.url},s.a.createElement(m.NavLink,{to:e.url,className:"nav-link"},e.name)):null}))),s.a.createElement(u.a,{className:"ml-auto d-lg-down-none mr-2",navbar:!0},s.a.createElement(p.a,{onClick:this.logout},s.a.createElement("i",{className:"icon-power",style:{fontSize:"20px"}}))))}}]),n}(c.Component);w.defaultProps={},a.default=w}}]);
//# sourceMappingURL=3.ea560658.chunk.js.map