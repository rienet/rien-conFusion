(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"3xCm":function(module,e,a){"use strict";var t=a("VbXa"),r=a.n(t),n=a("DXTi"),s=a.n(n),o=a("BVC1"),i=a("c6na"),c=a.n(i),u=a("Fmrb"),l=a.n(u),m=a("IMaL"),p=a.n(m),d=o.a.join(c.a.url.assets,"images/course-inbox/no_messages.svg"),g=function(e){function EmptyInboxMessage(){return e.apply(this,arguments)||this}var a;return r()(EmptyInboxMessage,e),EmptyInboxMessage.prototype.render=function render(){return s.a.createElement("div",{className:"rc-EmptyInboxMessage"},s.a.createElement("div",{className:"imageContainer"},s.a.createElement("img",{src:d,alt:"","aria-hidden":"true"})),l()("There are no messages yet."))},EmptyInboxMessage}(s.a.Component);e.a=g},IMaL:function(module,exports,e){var a=e("RIP+"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var r={transform:void 0},n=e("aET+")(a,r);a.locals&&(module.exports=a.locals)},IYof:function(module,exports,e){var a=e("ZIwy"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var r={transform:void 0},n=e("aET+")(a,r);a.locals&&(module.exports=a.locals)},"RIP+":function(module,exports,e){},STBe:function(module,exports,e){},SXW1:function(module,e,a){"use strict";var t=a("VbXa"),r=a.n(t),n=a("w/1P"),s=a.n(n),o=a("17x9"),i=a.n(o),c=a("DXTi"),u=a.n(c),l=a("b+bd"),m=a("Q8V+"),p=a("kvW3"),d=a("Fmrb"),g=a.n(d),f=a("W022"),b=a.n(f),y=function(e){function CourseNameHeader(){return e.apply(this,arguments)||this}var a;return r()(CourseNameHeader,e),CourseNameHeader.prototype.render=function render(){var e=s()("course-name","color-primary-text",{"display-3-text":!Object(m.b)(),"display-2-text":Object(m.b)()});return u.a.createElement("div",{className:"rc-CourseNameHeader vertical-box align-items-absolute-center styleguide"},u.a.createElement("h2",{className:e},this.props.courseName),u.a.createElement("div",{className:"headline-1-text partner-names"},u.a.createElement("span",{className:"body-1-text"},u.a.createElement(p.b,{message:g()("by {partnerNames}"),partnerNames:this.props.partnerNames}))))},CourseNameHeader}(u.a.Component);y.propTypes={courseName:i.a.string.isRequired,partnerNames:i.a.string.isRequired},e.a=Object(l.a)(y,["CourseStore"],function(e,a){var t,r=e.CourseStore.getMetadata();return{courseName:r.get("name"),partnerNames:r.get("universities").getNamesString()}})},W022:function(module,exports,e){var a=e("STBe"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var r={transform:void 0},n=e("aET+")(a,r);a.locals&&(module.exports=a.locals)},XVpT:function(module,e,a){"use strict";var t=a("W8MJ"),r=a.n(t),n=a("VbXa"),s=a.n(n),o=a("U+yc"),i=a.n(o),c=a("SYcQ"),u=a("HlCP"),l,m,p,d,g=(l=Object(c.b)("data"),d=p=function(e){function SiteMessage(){return e.apply(this,arguments)||this}return s()(SiteMessage,e),r()(SiteMessage,[{key:"parsedData",get:function get(){try{return JSON.parse(this.data)}catch(e){return null}}}]),SiteMessage}(u.a),p.RESOURCE_NAME="siteMessages.v1",m=d,i()(m.prototype,"parsedData",[l],Object.getOwnPropertyDescriptor(m.prototype,"parsedData"),m.prototype),m);e.a=g},"ZCJ/":function(module,exports,e){},ZIwy:function(module,exports,e){},iTn7:function(module,e,a){"use strict";a.r(e);var t=a("VbXa"),r=a.n(t),n=a("DXTi"),s=a.n(n),o=a("SXW1"),i=a("pRJk"),c=a("QsJ7"),u=a("Fmrb"),l=a.n(u),m=a("kz1I"),p=a.n(m),d=20,g=function(e){function CourseInboxPage(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).state={maxNumberOfMessages:d},a.getMoreMessages=function(){var e=a.state.maxNumberOfMessages;a.setState({maxNumberOfMessages:e+d})},a}var a;return r()(CourseInboxPage,e),CourseInboxPage.prototype.render=function render(){var e=this.state.maxNumberOfMessages;return s.a.createElement("div",{className:"rc-CourseInboxPage"},s.a.createElement(c.a,{pageTitle:l()("Course Inbox")}),s.a.createElement(o.a,null),s.a.createElement(i.a,{maxNumberOfMessages:e,getMoreMessages:this.getMoreMessages}))},CourseInboxPage}(s.a.Component);e.default=g},kz1I:function(module,exports,e){var a=e("ZCJ/"),t;"string"==typeof a&&(a=[[module.i,a,""]]);var r={transform:void 0},n=e("aET+")(a,r);a.locals&&(module.exports=a.locals)},pRJk:function(module,e,a){"use strict";var t=a("VbXa"),r=a.n(t),n=a("UAeG"),s=a("DXTi"),o=a.n(s),i=a("F/us"),c=a.n(i),u=a("wWy3"),l=a("3xCm"),m=a("IDuc"),p=a("UZuA"),d=a("XVpT"),g=a("q3BH"),f=a("8cuT"),b=a.n(f),y=a("Fmrb"),N=a.n(y),v=function(e){function InboxNotificationsList(){for(var a,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(a=e.call.apply(e,[this].concat(r))||this).isValidMessage=function(e){return!!e.parsedData},a.renderMessage=function(e,a){return o.a.createElement(u.a,{key:e.id,id:e.id,createdAt:e.createdAt,data:e.parsedData,truncate:a,isRead:e.isRead,campaignId:e.campaignId})},a.renderFull=function(e){return a.renderMessage(e,!1)},a.renderTruncated=function(e){return a.renderMessage(e,!0)},a}var a;return r()(InboxNotificationsList,e),InboxNotificationsList.prototype.render=function render(){var e=this.props,a=e.naptime,t=e.messages,r=e.getMoreMessages,n=a.getPagingFor("messages"),s=c()(t).filter(this.isValidMessage),i=s.length,u=t.length-i,d=i<n.total-u,g=s.splice(0,1);return o.a.createElement(p.a,{trackingName:"render_page",className:"rc-NotificationsList",trackClicks:!1,requireFullyVisible:!1,withVisibilityTracking:!0},!i&&o.a.createElement(l.a,null),i>0&&this.renderFull(g[0]),i>1&&s.map(this.renderTruncated),d&&o.a.createElement(m.a,{trackingName:"show_more_messages",className:"secondary fullbleed",onClick:r},N()("Show more messages")))},InboxNotificationsList}(o.a.Component),x=g.a.createTrackedContainer(function(){return{namespace:{page:"course_inbox"}}})(v);e.a=c.a.compose(b()(["CourseStore"],function(e){var a;return{courseId:e.CourseStore.getCourseId()}}),n.a.createContainer(function(e){var a=e.courseId,t=e.maxNumberOfMessages;return{messages:d.a.getAll({fields:["layoutType","data","createdAt","isRead"],params:{q:"latest",courseId:a,setTime:!0,start:0,limit:t}})}}))(x)},wWy3:function(module,e,a){"use strict";var t=a("VbXa"),r=a.n(t),n=a("wiyT"),s=a.n(n),o=a("wd/R"),i=a.n(o),c=a("DXTi"),u=a.n(c),l=a("DnuM"),m=a("c6na"),p=a.n(m),d=a("BVC1"),g=a("0WYP"),f=a("9A5E"),b=a("c8Vh"),y=a("IYof"),N=a.n(y),v=Object(l.a)("",{type:"rest"}),x=d.a.join(p.a.url.assets,"bundles/page/assets/white-logo-on-blue-bg.png"),h={width:100,auto:"format,compress"},I=function(e){function InboxNotification(){return e.apply(this,arguments)||this}r()(InboxNotification,e);var a=InboxNotification.prototype;return a.componentDidMount=function componentDidMount(){var e=this.props,a=e.id,t;e.isRead||s()(v.post("/api/siteMessages.v1?action=markAsRead&id="+a))},a.render=function render(){var e=this.props,a=e.createdAt,t=e.data,r=e.truncate,n=e.campaignId,s=t.imageUrl?g.a.processImage(t.imageUrl,h):x,o={backgroundImage:"url(".concat(s,")")},c=280;return u.a.createElement(b.a,{className:"rc-InboxNotification",isInitiallyCollapsed:r,gradientColor:"grey",showToggle:t.message.length>280},u.a.createElement("div",{className:"headline-container"},u.a.createElement("div",{className:"notif-img-container"},u.a.createElement("div",{style:o,className:"notif-img"})),u.a.createElement("div",{className:"subject"},t.subject),u.a.createElement("div",{className:"date color-secondary-text"},i()(a).fromNow())),u.a.createElement("div",{className:"message-text"},t.message),t.actionUrl&&t.actionText&&u.a.createElement(f.a,{href:t.actionUrl,trackingName:"course_inbox_".concat(n)},t.actionText))},InboxNotification}(u.a.Component);e.a=I}}]);
//# sourceMappingURL=88.0550c1edb9a7e9eebd59.js.map