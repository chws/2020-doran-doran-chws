(function(t){function e(e){for(var r,c,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("8a23"),a=n.n(r);a.a},"13d5":function(t,e,n){},2489:function(t,e,n){"use strict";var r=n("b233"),a=n.n(r);a.a},"33e5":function(t,e,n){"use strict";var r=n("13d5"),a=n.n(r);a.a},"444c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("DoranAppBar"),n("RouterView")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{flat:""}},[n("v-btn",{attrs:{icon:"",fab:"",text:"",href:"/"}},[n("v-icon",[t._v("mdi-chevron-left")])],1),n("VSpacer"),n("v-icon",{staticClass:"mdi pr-1"},[t._v("mdi-map-marker")]),n("v-toolbar-title",{staticClass:"app-bar-title"},[t._v(" 서울특별시 송파구 가락본동 ")]),n("VSpacer")],1)},s=[],i={name:"doranAppBar"},u=i,p=(n("33e5"),n("2877")),l=n("6544"),f=n.n(l),d=n("40dc"),m=n("8336"),v=n("132d"),h=n("2fa4"),g=n("2a7f"),b=Object(p["a"])(u,c,s,!1,null,"3c67a5b7",null),w=b.exports;f()(b,{VAppBar:d["a"],VBtn:m["a"],VIcon:v["a"],VSpacer:h["a"],VToolbarTitle:g["a"]});var k={name:"app",components:{DoranAppBar:w}},O=k,P=(n("034f"),n("7496")),x=Object(p["a"])(O,a,o,!1,null,null,null),_=x.exports;f()(x,{VApp:P["a"]});var y=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{ref:"map",attrs:{"fill-height":"",fluid:""}},[this.isCreatePost?n("v-icon",{staticClass:"center-marker",attrs:{color:"blue",size:"50"}},[t._v(" mdi-map-marker ")]):t._e()],1)},C=[],L=(n("4160"),n("d81d"),n("159b"),n("96cf"),n("1da1")),S={name:"kakaoMap",props:{usage:{type:String,default:"default-map"}},created:function(){this.$store.dispatch("post/loadPosts")},mounted:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$drawMap(t.$refs.map);case 2:if(t.isCreatePost){e.next=5;break}return e.next=5,t.initMainMap();case 5:case"end":return e.stop()}}),e)})))()},computed:{isCreatePost:function(){return"create-post"===this.usage}},methods:{initMainMap:function(){var t=this;return Object(L["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$getCurrentLocation();case 2:n=e.sent,t.$setLocation(n),t.$setCurrentLocationMarker(n),t.drawPosts();case 6:case"end":return e.stop()}}),e)})))()},drawPosts:function(){var t=this;this.$store.getters["post/getPosts"].forEach((function(e){t.$setPostOverlay(e.content,e.location)}))}}},j=S,R=(n("6b4f"),n("a523")),T=Object(p["a"])(j,M,C,!1,null,"153d065f",null),$=T.exports;f()(T,{VContainer:R["a"],VIcon:v["a"]});var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{staticClass:"pa-3 fill-height"},[n("v-container",{staticClass:"map-container ma-0 pa-0 mb-6",attrs:{fluid:""}},[n("KakaoMap",{attrs:{usage:"create-post"}})],1),n("VTextarea",{attrs:{type:"text",name:"content",placeholder:"글 내용을 입력해주세요.",maxlength:"200",counter:200,required:"",solo:"",autofocus:"","no-resize":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("v-btn",{staticClass:"float-right",attrs:{color:"amber accent-4",type:"submit"},on:{click:function(e){return e.preventDefault(),t.createPost(e)}}},[t._v(" 등록 ")])],1)},E=[],V={name:"postCreate",components:{KakaoMap:$},data:function(){return{content:""}},methods:{createPost:function(){var t={memberId:1,content:this.content,location:this.$getCenterLocation()};this.$store.dispatch("post/createPost",t).then((function(){return alert("글이 등록되었습니다.")}))}}},I=V,D=(n("2489"),n("4bd4")),B=n("a844"),U=Object(p["a"])(I,A,E,!1,null,"5ce59220",null),K=U.exports;f()(U,{VBtn:m["a"],VContainer:R["a"],VForm:D["a"],VTextarea:B["a"]}),r["a"].use(y["a"]);var N=[{path:"/",name:"kakaoMap",component:$},{path:"/create-post",name:"createPost",component:K}],J=new y["a"]({mode:"history",base:"/",routes:N}),z=J,F=n("2f62"),H=(n("c740"),n("a434"),n("bc3a")),q=n.n(H),Y=q.a.create({baseURL:"/posts"}),G=function(t){return Y.post("",t)},Q=function(t){return Y.get("/".concat(t))},W=function(){return Y.get("")},X=function(t){return Y.delete("/".concat(t))},Z={namespaced:!0,state:{posts:[]},mutations:{ADD_POST:function(t,e){t.posts.push(e)},SET_POSTS:function(t,e){t.posts=e},REMOVE_POST:function(t,e){var n=t.posts.findIndex((function(t){return t.id===e}));t.posts.splice(n,1)}},actions:{createPost:function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,G(e);case 3:r("ADD_POST",e);case 4:case"end":return n.stop()}}),n)})))()},loadPost:function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},loadPosts:function(t){return Object(L["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,W();case 3:r=e.sent,a=r.data,n("SET_POSTS",a);case 6:case"end":return e.stop()}}),e)})))()},deletePost:function(t,e){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,X(e);case 3:r("REMOVE_POST",e);case 4:case"end":return n.stop()}}),n)})))()}},getters:{getPosts:function(t){return t.posts}}};r["a"].use(F["a"]);var tt=new F["a"].Store({modules:{post:Z}}),et=n("f309");r["a"].use(et["a"]);var nt=new et["a"]({}),rt=(n("d3b7"),"fc4867a5625fce3e6140f086d43c57d5"),at={SEOUL_CITY_HALL:{latitude:37.5663,longitude:126.9779},JAMSIL_LUTHER:{latitude:37.515416,longitude:127.103}},ot=at,ct={UNIDENTIFIABLE_LOCATION:"위치 정보를 확인할 수 없습니다."},st={KAKAO_MAP:"http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey="},it=function(t){return'<div class="speech-bubble">\n     <div class="speech-arrow"></div>\n     '.concat(t,"\n    </div>")},ut={install:function(t){var e=this,n=document.createElement("script");n.src=st.KAKAO_MAP+rt,document.head.appendChild(n);var r=new Promise((function(t){n.onload=function(){return kakao.maps.load(t)}})),a=function(t){return new kakao.maps.LatLng(t.latitude,t.longitude)};t.prototype.$drawMap=function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(n){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r;case 2:o={center:a(ot.JAMSIL_LUTHER),level:2},e.map=new kakao.maps.Map(n,o);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.prototype.$getCurrentLocation=Object(L["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=function(){return new Promise((function(t,e){return navigator.geolocation.getCurrentPosition(t,e,{timeout:3e3})}))},t.next=3,e().then((function(t){return{latitude:t.coords.latitude,longitude:t.coords.longitude}})).catch((function(){return alert(ct.UNIDENTIFIABLE_LOCATION)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),t.prototype.$getCenterLocation=function(){var t=e.map.getCenter();return{longitude:t.getLng(),latitude:t.getLat()}},t.prototype.$setLocation=function(t){if(e.map&&t){var n=a(t);e.map.setCenter(n)}};var o=function(t,e,n){return new kakao.maps.MarkerImage(t,e,n)},c=function(t,e){return new kakao.maps.Marker({position:t,image:e})};t.prototype.$setCurrentLocationMarker=function(t){if(e.map&&t){var n="https://sheengroup.com.au/assets/Uploads/misc/current-location.png",r=new kakao.maps.Size(36,36),s=o(n,r),i=a(t),u=c(i,s);u.setMap(e.map)}},t.prototype.$setPostOverlay=function(t,n){var r=a(n),o=new kakao.maps.CustomOverlay({position:r,content:it(t)});o.setMap(e.map)}}},pt=ut;r["a"].config.productionTip=!1,r["a"].use(pt),new r["a"]({router:z,store:tt,vuetify:nt,render:function(t){return t(_)}}).$mount("#app")},"6b4f":function(t,e,n){"use strict";var r=n("444c"),a=n.n(r);a.a},"8a23":function(t,e,n){},b233:function(t,e,n){}});
//# sourceMappingURL=app.e0bd5751.js.map