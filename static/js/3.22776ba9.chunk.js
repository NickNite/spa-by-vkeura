(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{300:function(e,t,a){e.exports={right:"Users_right__1-QZQ",left:"Users_left__jPQLR",user:"Users_user__3NU8y",users:"Users_users__354Ns",name:"Users_name__2K-Dy",pagination:"Users_pagination__QLM5d"}},303:function(e,t,a){e.exports={activePage:"Pagination_activePage__189fo",pages:"Pagination_pages__3VFwJ",buttons:"Pagination_buttons__22HJH"}},304:function(e,t,a){e.exports=a.p+"static/media/arrow1.aa262e64.png"},305:function(e,t,a){e.exports=a.p+"static/media/arrow2.85be77cf.png"},313:function(e,t,a){"use strict";a.r(t);var n=a(29),s=a(30),r=a(32),i=a(31),o=a(33),l=a(0),c=a.n(l),u=a(11),p=a(134),g=a(54),d=a(303),f=a.n(d),m=a(304),w=a.n(m),h=a(305),U=a.n(h),v=function(e){for(var t=Math.ceil(e.totalItemCount/e.pageSize),a=[],n=1;n<=t;n++)a.push(n);var s=Math.ceil(t/e.partSize),r=Object(l.useState)(1),i=Object(g.a)(r,2),o=i[0],u=i[1],p=(o-1)*e.partSize+1,d=o*e.partSize;return c.a.createElement("div",{className:f.a.pages},o>1&&c.a.createElement("div",{className:f.a.buttons,onClick:function(){u(o-1)}},c.a.createElement("img",{src:U.a})," "),a.filter(function(e){return e>=p&&e<=d}).map(function(t,a){return c.a.createElement("span",{key:a,onClick:function(){e.newPageChanged(t)},className:e.activePage===t&&f.a.activePage},t)}),s>o&&c.a.createElement("div",{className:f.a.buttons,onClick:function(){u(o+1)}},c.a.createElement("img",{src:w.a})))},P=a(36),_=a(69),b=a.n(_),E=a(300),F=a.n(E),C=a(15),S=function(e){var t=e.users,a=e.isFollowed,n=e.unFollowUser,s=e.followUser;Object(P.a)(e,["users","isFollowed","unFollowUser","followUser"]);return c.a.createElement("div",{className:F.a.user},c.a.createElement("div",{className:F.a.left},c.a.createElement(C.b,{to:"/profile/"+t.id},c.a.createElement("img",{src:null!=t.photos.small?t.photos.small:b.a}))),c.a.createElement("div",{className:F.a.right},c.a.createElement("div",{id:F.a.name},c.a.createElement("h2",null,t.name),c.a.createElement("p",null,t.status)),c.a.createElement("div",null,t.followed?c.a.createElement("button",{disabled:a.some(function(e){return e===t.id}),onClick:function(){n(t.id)}},"Unfollow"):c.a.createElement("button",{disabled:a.some(function(e){return e===t.id}),onClick:function(){s(t.id)}},"Follow"))))},z=a(68),k=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:F.a.pagination},c.a.createElement(v,{totalItemCount:e.totalUserCount,pageSize:e.pageSize,newPageChanged:e.newPageChanged,activePage:e.activePage,partSize:10})),e.isFetching?c.a.createElement(z.a,null):null,c.a.createElement("div",{className:F.a.users},e.users.map(function(t){return c.a.createElement(S,{users:t,isFollowed:e.isFollowed,unFollowUser:e.unFollowUser,followUser:e.followUser,key:t.id})})))},j=a(8),N=a(99),O=function(e){return e.findUsersPage.users},y=function(e){return e.findUsersPage.pageSize},x=function(e){return e.findUsersPage.totalUserCount},J=function(e){return e.findUsersPage.activePage},M=function(e){return e.findUsersPage.isFetching},Q=function(e){return e.findUsersPage.isFollowed},q=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.activePage,a=e.pageSize;this.props.requestUsers(t,a)}},{key:"newPageChanged",value:function(e){var t=this.props.pageSize;this.props.requestUsers(e,t)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,{users:this.props.users,pageSize:this.props.pageSize,totalUserCount:this.props.totalUserCount,activePage:this.props.activePage,newPageChanged:this.newPageChanged.bind(this),isFollowed:this.props.isFollowed,unFollowUser:this.props.unFollowUser,followUser:this.props.followUser,isFetching:this.props.isFetching}))}}]),t}(c.a.Component),D={requestUsers:p.c,unFollowUser:p.d,followUser:p.b};t.default=Object(j.d)(Object(u.b)(function(e){return{users:O(e),pageSize:y(e),totalUserCount:x(e),activePage:J(e),isFetching:M(e),isFollowed:Q(e)}},D),N.a)(q)}}]);
//# sourceMappingURL=3.22776ba9.chunk.js.map