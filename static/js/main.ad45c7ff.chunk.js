(this.webpackJsonp163music=this.webpackJsonp163music||[]).push([[0],{149:function(n,e,t){},246:function(n,e,t){"use strict";t.r(e);var c,r,i,a=t(0),s=t.n(a),o=t(19),l=t.n(o),p=(t(149),t(120)),u=t(45),d=t(44),b=t(15),x=t(4),A=function(){return Object(x.jsx)("div",{children:"Ranking"})},j=Object(a.memo)(A),g=function(){return Object(x.jsx)("div",{children:"Songs"})},m=Object(a.memo)(g),f=function(){return Object(x.jsx)("div",{children:"DjRadio"})},h=Object(a.memo)(f),O=function(){return Object(x.jsx)("div",{children:"Artist"})},v=Object(a.memo)(O),y=function(){return Object(x.jsx)("div",{children:"Album"})},N=Object(a.memo)(y),k=function(){return Object(x.jsx)("div",{children:"Friend"})},C=Object(a.memo)(k),w=function(){return Object(x.jsx)("div",{children:"Mine"})},D=Object(a.memo)(w),E=t(22),B=t(23),I=B.a.div(c||(c=Object(E.a)(["\n  .content {\n    background: url(",") repeat-y;\n    background-color: #fff;\n    display: flex;\n  }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9YAAAAKCAMAAABmIzZJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF09PT4eHh////GoHaHAAAAENJREFUeNrs07EJAAAIBLHX/Ye2dQAbIRnh4JKG70qCLbE1trY12NrWYGtbg61tja2xNba2Ndja1mBrW4Ot77YeAQYAtb5Mh8JFPEUAAAAASUVORK5CYII="),R=B.a.div(r||(r=Object(E.a)(["\n  width: 710px;\n"]))),H=B.a.div(i||(i=Object(E.a)(["\n  width: 270px;\n  padding: 20px 40px 40px 30px;\n"]))),M=function(){return Object(x.jsx)(I,{children:Object(x.jsxs)("div",{className:"wrap-v2 content",children:[Object(x.jsx)(R,{}),Object(x.jsx)(H,{})]})})},G=Object(a.memo)(M),T=[{path:"/",exact:!0,render:function(){return Object(x.jsx)(b.a,{to:"/discover"})}},{path:"/discover",component:s.a.lazy((function(){return t.e(5).then(t.bind(null,261))})),routes:[{path:"/discover",exact:!0,render:function(){return Object(x.jsx)(b.a,{to:"/discover/recommend"})}},{path:"/discover/recommend",component:s.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,259))}))},{path:"/discover/ranking",component:j},{path:"/discover/songs",component:m},{path:"/discover/djradio",component:h},{path:"/discover/artist",component:v},{path:"/discover/album",component:N},{path:"/discover/player",component:G}]},{path:"/mine",component:D},{path:"/friend",component:C}],L=t(51),Q=t(14),Y=t(43),z={bannerList:[],hotRecommendList:[],newAlbumList:[],upRankingList:[],newRankingList:[],originRankingList:[],settleSingerList:[]};var S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Y.f:return Object(Q.a)(Object(Q.a)({},n),{},{bannerList:e.payload});case Y.a:return Object(Q.a)(Object(Q.a)({},n),{},{hotRecommendList:e.payload});case Y.b:return Object(Q.a)(Object(Q.a)({},n),{},{newAlbumList:e.payload});case Y.g:return Object(Q.a)(Object(Q.a)({},n),{},{upRankingList:e.payload});case Y.c:return Object(Q.a)(Object(Q.a)({},n),{},{newRankingList:e.payload});case Y.d:return Object(Q.a)(Object(Q.a)({},n),{},{originRankingList:e.payload});case Y.e:return Object(Q.a)(Object(Q.a)({},n),{},{settleSingerList:e.payload});default:return n}},U=t(28),P={playList:[],currentSongIndex:0,currentSong:{},sequence:0,lyricList:[],currentLyricIndex:0};var F,X,W,Z,J,q,K,V,_,$,nn=Object(L.combineReducers)({recommend:S,player:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U.e:return Object(Q.a)(Object(Q.a)({},n),{},{playList:e.payload});case U.c:return Object(Q.a)(Object(Q.a)({},n),{},{currentSongIndex:e.payload});case U.b:return Object(Q.a)(Object(Q.a)({},n),{},{currentSong:e.payload});case U.f:return Object(Q.a)(Object(Q.a)({},n),{},{sequence:e.payload});case U.d:return Object(Q.a)(Object(Q.a)({},n),{},{lyricList:e.payload});case U.a:return Object(Q.a)(Object(Q.a)({},n),{},{currentLyricIndex:e.payload});default:return n}}}),en=t(126),tn=t(127),cn=Object(L.createStore)(nn,Object(en.composeWithDevTools)(Object(L.applyMiddleware)(tn.a))),rn=B.a.div(F||(F=Object(E.a)(["\n  height: 75px;\n  background-color: #242424;\n\n  .content {\n    height: 70px;\n    font-size: 14px;\n    color: #ffffff;\n\n    display: flex;\n    justify-content: space-between;\n  }\n  .divider {\n    height: 5px;\n    background-color: #c20c0c;\n  }\n"]))),an=B.a.div(X||(X=Object(E.a)(['\n  display: flex;\n  \n  .logo {\n    display: block;\n    width: 176px;\n    height: 69px;\n    background-position: 0 0;\n    text-indent: -9999px;\n  }\n  .select-list {\n    display: flex;\n    line-height: 70px;\n\n    .select-item {\n      position: relative;\n\n      a {\n        display: block;\n        padding: 0 20px;\n        color: #ccc;\n      }\n\n      :last-of-type a {\n        position: relative;\n        ::after {\n          position: absolute;\n          content: "";\n          width: 28px;\n          height: 19px;\n          background-image: url(',");\n          background-position: -190px 0;\n          top: 20px;\n          right: -15px;\n        }\n      }\n\n      &:hover a, .active {\n        color: #fff;\n        background: #000;\n        text-decoration: none;\n      }\n\n      .active .icon {\n        position: absolute;\n        display: inline-block;\n        width: 12px;\n        height: 7px;\n        bottom: -1px;\n        left: 50%;\n        transform: translate(-50%, 0);\n        background-position: -226px 0;\n      }\n    }\n"])),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADXCAMAAAATIiwuAAAB5lBMVEUAAAD////////////////////////////////////////////////////////////////mACb////////////////////////////////////////////mACbmACbmACbmACbmACb////mACbmACbmACbmACb////mACb////////////////mACb////////////////////////////////////////////////////////////////////////////////mACb///////8kJCT////mACZPT0/CDAzAABQAAACRkZEnJydFRUU8PDxLS0spKSnMzMwuLi45OTlBQUE2NjYxMTGLi4tgAApbW1tJSUl4eHiamppXV1dDQ0PADAwrKytISEjoDDDY2Nj55OW7u7uSkpLpH0DpFTjnByz+9ffp6emFhYWBgYF9fX12dnZubm5lZWVkZGRfX1/TUlJDICBzGBiMFBSzDg7/+/zw8PD6ztX6xs7xcofqJ0j+7/LtQl7AwMD4sbz2nayioqLzhJbwZHzsOVbrL0729vb96Oz83eLIyMi+vr71l6byfJBuAQr4uML3pbP0k6P0kKH0iJrvWHHuTGc+Pj5UAwhTAwj71dz5vcewsLDzgZRtAQrn5+cpq/+1AAAARXRSTlMA8HBAwLBQ4ZCAMND7DwugAwwgB/Xd5+zMaWJLGOrm5MrAt6iIeF1cQismHhMCvKiXildFNyMB2HYz0sR8cy7IUzsVrYRjo6JRAAAJY0lEQVR42uzZ+U/TYBzH8W/Zieu64u4NUZD7Hjdyq3waNP4PJIQEtp/lWDgD4QgkeGs8on+qz9N2e1o2pr/UxMIr0ZUl/PDm+fZp19H/bnFxcWNre3nJYnl7a4O9TaaX3Ldf+gv9/xYXN0WtaN58ZQv+9uLFW7cEby5VtWkN/vqCeeuO4A2+vtD/vV7F6uslcGyNN8hk9PJiVwRvLZWDV1+zZv2I2yITm2fTLzcEb4tglI+4bTLx9TW9pf/fsh7MXA9eJneqscLuVOMcdqeKXdoMZru0O9W4DrvTjXda7g2+4V7arcF37ty5c1v0dbY2N2ma1tTc2tlHrtfQ9lATHrY1kLu1P9DsHrSTizU81io9du8iP32kVfPoKblT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"),sn=B.a.div(W||(W=Object(E.a)(["\n  display: flex;\n  align-items: center;\n  color: #ccc;\n  font-size: 12px;\n\n  .search {\n    width: 158px;\n    height: 32px;\n    border-radius: 16px;\n\n    input {\n      &::placeholder {\n        font-size: 12px;\n      }\n    }\n  }\n\n  .center {\n    width: 90px;\n    height: 32px;\n    line-height: 32px;\n    text-align: center;\n    border: 1px solid #666;\n    border-radius: 16px;\n    margin: 0 16px;\n  }\n"]))),on=t(60),ln=t(250),pn=t(143),un=function(){return Object(x.jsxs)(rn,{children:[Object(x.jsxs)("div",{className:"wrap-v1 content",children:[Object(x.jsxs)(an,{children:[Object(x.jsx)("a",{href:"/",className:"sprite_01 logo",children:"\u7f51\u6613\u4e91\u97f3\u4e50"}),Object(x.jsx)("div",{className:"select-list",children:on.d.map((function(n,e){return Object(x.jsx)("div",{className:"select-item",children:e<3?Object(x.jsxs)(u.b,{to:n.link,children:[n.title,Object(x.jsx)("i",{className:"sprite_01 icon"})]}):Object(x.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:n.title})},n.title)}))})]}),Object(x.jsxs)(sn,{children:[Object(x.jsx)(ln.a,{className:"search",prefix:Object(x.jsx)(pn.a,{}),placeholder:"\u97f3\u4e50/\u89c6\u9891/\u7535\u53f0/\u7528\u6237"}),Object(x.jsx)("div",{className:"center",children:"\u521b\u4f5c\u8005\u4e2d\u5fc3"}),Object(x.jsx)("div",{children:"\u767b\u5f55"})]})]}),Object(x.jsx)("div",{className:"divider"})]})},dn=Object(a.memo)(un),bn=t.p+"static/media/sprite_footer_01.7716863c.png",xn=t.p+"static/media/sprite_footer_02.5384e02f.png",An=B.a.div(Z||(Z=Object(E.a)(["\n  height: 172px;\n  background-color: #f2f2f2;\n  color: #666;\n  border-top: 1px solid #d3d3d3;\n\n  .content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),jn=B.a.div(J||(J=Object(E.a)(["\n  padding-top: 15px;\n  line-height: 24px;\n\n  .link {\n    a {\n      color: #999;\n    }\n\n    .line {\n      margin: 0 10px;\n      color: #999;\n    }\n  }\n\n  .copyright {\n    span {\n      margin-right: 15px;\n    }\n  }\n"]))),gn=B.a.ul(q||(q=Object(E.a)(["\n  display: flex;\n\n  .item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 40px;\n\n    .link {\n      display: block;\n      width: 50px;\n      height: 45px;\n\n      background-image: url(",");\n      background-size: 110px 450px;\n    }\n\n    :nth-child(1) .link {\n      background-position: -60px -101px;\n    }\n    :nth-child(2) .link {\n      background-position: 0 0;\n    }\n    :nth-child(2) .link {\n      background-position: -60px -50px;\n    }\n    :nth-child(2) .link {\n      background-position: 0 -101px;\n    }\n\n    .title {\n      margin-top: 5px;\n      display: block;\n      width: 52px;\n      height: 10px;\n      background-image: url(",");\n      background-size: 180px 100px;\n    }\n\n    :nth-child(1) .title {\n      background-position: -1px -90px;\n    }\n    :nth-child(2) .title {\n      background-position: 0 0;\n      margin-top: 7px;\n    }\n    :nth-child(3) .title {\n      background-position: 0 -54px;\n      margin-top: 6px;\n    }\n\n    :nth-child(4) .title {\n      background-position: -1px -72px;\n      margin-top: 6px;\n    }\n  }\n"])),xn,bn),mn=function(){return Object(x.jsx)(An,{children:Object(x.jsxs)("div",{className:"wrap-v2 content",children:[Object(x.jsxs)(jn,{children:[Object(x.jsx)("div",{className:"link",children:on.c.map((function(n){return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:n.title}),Object(x.jsx)("span",{className:"line",children:"|"})]},n.title)}))}),Object(x.jsxs)("div",{className:"copyright",children:[Object(x.jsx)("span",{children:"\u7f51\u6613\u516c\u53f8\u7248\u6743\u6240\u6709\xa91997-2020"}),Object(x.jsxs)("span",{children:["\u676d\u5dde\u4e50\u8bfb\u79d1\u6280\u6709\u9650\u516c\u53f8\u8fd0\u8425\uff1a",Object(x.jsx)("a",{href:"https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png",rel:"noopener noreferrer",target:"_blank",children:"\u6d59\u7f51\u6587[2018]3506-263\u53f7"})]})]}),Object(x.jsxs)("div",{className:"report",children:[Object(x.jsx)("span",{children:"\u8fdd\u6cd5\u548c\u4e0d\u826f\u4fe1\u606f\u4e3e\u62a5\u7535\u8bdd\uff1a0571-89853516"}),Object(x.jsxs)("span",{children:["\u4e3e\u62a5\u90ae\u7bb1\uff1a",Object(x.jsx)("a",{href:"mailto:ncm5990@163.com",target:"_blank",rel:"noopener noreferrer",children:"ncm5990@163.com"})]})]}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("span",{children:"\u7ca4B2-20090191-18"}),Object(x.jsx)("a",{href:"http://www.beian.miit.gov.cn/publish/query/indexFirst.action",rel:"noopener noreferrer",target:"_blank",children:"\u5de5\u4e1a\u548c\u4fe1\u606f\u5316\u90e8\u5907\u6848\u7ba1\u7406\u7cfb\u7edf\u7f51\u7ad9"})]})]}),Object(x.jsx)(gn,{className:"right",children:on.b.map((function(n){return Object(x.jsxs)("li",{className:"item",children:[Object(x.jsx)("a",{className:"link",href:n.link,rel:"noopener noreferrer",target:"_blank",children:" "}),Object(x.jsx)("span",{className:"title",children:n.title})]},n.link)}))})]})})},fn=Object(a.memo)(mn),hn=t(83),On=t(59),vn=t(73),yn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe0AAAB0CAYAAACoqmrEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABHdJREFUeNrs3L9rXWUcx/HnnHtuS27SopKWtmCaqUMEsYh1Fv0L3DM4OAjOtrh2EUEcHBQcHLr7D1hQgg6ldNDBNnTRKIHaH9Hb3KTNveccv0dP4OIUzdBT7+sFnzYpvR0eCu+e2ycp0t+WYu/EXowdTQBwOMemejKJ7bWbzNg5FLEj7Yr21x7HHh7w9c3v/SH2aWwjix+WYx/GtmK/t4cKAIcxF+u3H5dtrCftx7Ok18a6aD9ujGO7B3x9E/tnYs/G3ivC6mQy2YhPNts/pIrV/r4BcAhHp54sq6lwVzN2DvlUsPOpdx4eH+C1Wfua5h9AZ5pe51VVnWiDPWoPVbAB4Mmr2y43fd6MXp/Mwx/xySOxBoDOxns3ej3MT58+vek8AKDbote/5qurq9/1+/3mvfbMkQBA52RNp5te99bW1rYWFxf3bt68ubC9vX20qirxBuCwmstX+xev6nazeNF5/zJZPvVwvH8x7yCxTsvLyw8vX778/cWLF3/M6vqv82uulC/GBlOHDAD/1fQ7uPU/NmvRnt7+eRz0S9+awO/E7sX29q/jN1+b7f+2AaDDPFUDgGgDAKINAKINAIg2ACDaACDaAIBoAwCiDQCiDQCINgAg2gAg2gCAaAMAog0Aog0AiDYAINoAINoAgGgDwCzKXlhZqefm5tKpU6fSwrFjqdfrORUA6IZh7GrsUux2dv78+frcuXOprutUlqXjAYAOaR6mY8M8zy8UzRN2E+sm2gBAtzSNrqrqeJZlHxeDwUCwAaDD2k6/nk8mE6cBAB0Xve7l9+/fdxIA0HEPHjy4l29sbKTxeOw0AKC7T9mT9fX1L/PmVtq1a9fSnTt33B4HgA6JLpd3w9ra2rfR6Q+Kfr+f5ufn061bt9Lu7m4ajUbfOCaA/6UTsd3YtqN4IhZic7G7/+I1O7Ebsc9jv2RujgPA08G3MQUA0QYARBsARBsAEG0AQLQBQLQBANEGAEQbAEQbABBtAEC0AUC0AQDRBgBEGwBEGwAQbQBAtAFAtAEA0QYA0QYARBsAEG0AEG0AQLQBANEGgP+nYmVlpT5bVendnZ30yt5emq9rpwIA3TCMXY1dit0uno9QfzYcplH8/FPEuxJtAOiEPMuOL+T5myf7/Tfm8vxC8XY8Yf/26FEqxRoAOqV5kB6WZRpV1fHnjhz5JD8b0RZsAOiuptPDyeS1fDsKDgB0W0S7l1+vKicBAB13vSzL4kqep5fisXshy5wIAHTQdnT6ynj8dba0tFRnm5vprV4vvRwbiDcAdMJOxPpGWaYvxuPhz1X1ajEYDNLOmTPpo62tNBqNUuXtcgDoioexr2Lvx9az2s1xAHgq+DamACDaAIBoA4BoAwCiDQCINgCINgAg2gCAaAOAaAMAog0AiDYAiDYAINoAgGgDgGgDAKINAIg2AIg2ACDaACDaAIBoAwCiDQCiDQCINgAg2gAg2gCAaAMAog0Aog0AiDYAINoAINoAgGgDAKINAKINAIg2AIg2ACDaAIBoA8Bs+FOAAQA5uzY3uTuRNQAAAABJRU5ErkJggg==",Nn=t.p+"static/media/sprite_icon.69882fbb.png",kn=B.a.div(K||(K=Object(E.a)(["\n  position: fixed;\n  z-index: 99;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 52px;\n  background-position: 0 0;\n  background-repeat: repeat;\n\n  .content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n    height: 47px;\n  }\n"]))),Cn=B.a.div(V||(V=Object(E.a)(["\n  display: flex;\n  align-items: center;\n\n  .prev,\n  .next {\n    width: 28px;\n    height: 28px;\n    cursor: pointer;\n  }\n\n  .prev {\n    background-position: 0 -130px;\n  }\n\n  .play {\n    width: 36px;\n    height: 36px;\n    margin: 0 8px;\n    background-position: 0 ",";\n    cursor: pointer;\n  }\n\n  .next {\n    background-position: -80px -130px;\n  }\n"])),(function(n){return n.isPlaying?"-165px":"-204px"})),wn=B.a.div(_||(_=Object(E.a)(["\n  display: flex;\n  width: 642px;\n  align-items: center;\n\n  .image {\n    width: 34px;\n    height: 34px;\n    border-radius: 5px;\n  }\n\n  .info {\n    flex: 1;\n    color: #a1a1a1;\n    margin-left: 10px;\n\n    .song {\n      color: #e1e1e1;\n      position: relative;\n      top: 8px;\n      left: 8px;\n\n      .singer-name {\n        color: #a1a1a1;\n        margin-left: 10px;\n      }\n    }\n\n    .progress {\n      display: flex;\n      align-items: center;\n\n      .ant-slider {\n        width: 493px;\n        margin-right: 10px;\n\n        .ant-slider-rail {\n          height: 9px;\n          background: url(",") right 0;\n        }\n\n        .ant-slider-track {\n          height: 9px;\n          background: url(",") left -66px;\n        }\n\n        .ant-slider-handle {\n          width: 22px;\n          height: 24px;\n          border: none;\n          margin-top: -7px;\n          background: url(",") 0 -250px;\n        }\n      }\n\n      .time {\n        .now-time {\n          color: #e1e1e1;\n        }\n        .divider {\n          margin: 0 3px;\n        }\n      }\n    }\n  }\n"])),yn,yn,Nn),Dn=B.a.div($||($=Object(E.a)(["\n  display: flex;\n  position: relative;\n  top: 5px;\n\n  .btn {\n    width: 25px;\n    height: 25px;\n  }\n\n  .favor {\n    background-position: -88px -163px;\n  }\n\n  .share {\n    background-position: -114px -163px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n    width: 126px;\n    padding-left: 13px;\n    background-position: -147px -248px;\n\n    .volume {\n      background-position: -2px -248px;\n    }\n\n    .loop {\n      cursor: pointer;\n      background-position: ",";\n    }\n\n    .playlist {\n      padding-left: 18px;\n      text-align: center;\n      color: #ccc;\n      width: 59px;\n      background-position: -42px -68px;\n    }\n  }\n"])),(function(n){switch(n.sequence){case 1:return"-66px -248px";case 2:return"-66px -344px";default:return"-3px -344px"}})),En=t(140),Bn=t(249),In=function(){var n,e,t=Object(a.useState)(0),c=Object(hn.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(!1),o=Object(hn.a)(s,2),l=o[0],p=o[1],b=Object(a.useState)(!1),A=Object(hn.a)(b,2),j=A[0],g=A[1],m=Object(d.d)((function(n){return n.player}),d.b),f=m.currentSong,h=m.playList,O=m.lyricList,v=m.currentLyricIndex,y=Object(d.c)(),N=Object(a.useRef)();Object(a.useEffect)((function(){y(Object(On.d)(167876))}),[y]),Object(a.useEffect)((function(){N.current.src=Object(vn.c)(f.id),N.current.play().then((function(){return p(!0)})).catch((function(){return p(!1)}))}),[f]);var k=r/f.dt*100;Object(a.useEffect)((function(){N.current.currentTime=r/1e3}),[j]);var C=Object(d.d)((function(n){return n.player.sequence})),w=function(n){1===h.length&&En.b.warning("\u8bf7\u6dfb\u52a0\u6b4c\u66f2\u5230\u64ad\u653e\u5217\u8868"),y(Object(On.b)(n))};return Object(x.jsx)(kn,{className:"sprite_playbar",children:Object(x.jsxs)("div",{className:"wrap-v2 content",children:[Object(x.jsxs)(Cn,{isPlaying:l,children:[Object(x.jsx)("button",{className:"sprite_playbar prev",onClick:function(){return w(-1)}}),Object(x.jsx)("button",{className:"sprite_playbar play",onClick:function(){p(!l),l?N.current.pause():N.current.play().then((function(){return p(!0)})).catch((function(){p(!1),En.b.error("\u6682\u65e0\u7248\u6743,\u64ad\u653e\u5931\u8d25")}))}}),Object(x.jsx)("button",{className:"sprite_playbar next",onClick:function(){return w(1)}})]}),Object(x.jsxs)(wn,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(u.b,{to:"/discover/player",children:Object(x.jsx)("img",{src:null===(n=f.al)||void 0===n?void 0:n.picUrl,alt:"",className:"image"})})}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsxs)("div",{className:"song",children:[Object(x.jsx)("span",{className:"song-name",children:f.name}),Object(x.jsx)("a",{href:"/",className:"singer-name",children:null===(e=f.ar)||void 0===e?void 0:e[0].name})]}),Object(x.jsxs)("div",{className:"progress",children:[Object(x.jsx)(Bn.a,{value:k,onChange:function(n){g((function(n){return!n})),i(n/100*f.dt)}}),Object(x.jsxs)("div",{className:"time",children:[Object(x.jsx)("span",{className:"now-time",children:Object(vn.a)(r,"mm:ss")}),Object(x.jsx)("span",{className:"divider",children:"/"}),Object(x.jsx)("span",{className:"total-time",children:Object(vn.a)(f.dt||0,"mm:ss")})]})]})]})]}),Object(x.jsxs)(Dn,{sequence:C,children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("button",{className:"sprite_playbar btn favor"}),Object(x.jsx)("button",{className:"sprite_playbar btn share"})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("button",{className:"sprite_playbar btn volume"}),Object(x.jsx)("button",{className:"sprite_playbar btn loop",onClick:function(){var n=C+1;switch(n>2&&(n=0),y(Object(On.c)(n)),n){case 0:En.b.success("\u5faa\u73af\u64ad\u653e");break;case 1:En.b.success("\u968f\u673a\u64ad\u653e");break;case 2:En.b.success("\u5355\u66f2\u5faa\u73af")}}}),Object(x.jsx)("button",{className:"sprite_playbar btn playlist"})]})]}),Object(x.jsx)("audio",{ref:N,onTimeUpdate:function(n){i(1e3*n.target.currentTime);for(var e,t=0;t<O.length&&!(1e3*n.target.currentTime<O[t].time);t++);t-1!==v&&(y(Object(On.a)(t-1)),En.b.open({content:null===(e=O[t-1])||void 0===e?void 0:e.content,duration:0,key:"lyric"}))},onEnded:function(){2===C||1===h.length?(N.current.currentTime=0,N.current.play()):y(Object(On.b)(1))}})]})})},Rn=Object(a.memo)(In),Hn=Object(a.memo)((function(){return Object(x.jsx)(d.a,{store:cn,children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(dn,{}),Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)("h1",{children:"loading..."}),children:Object(p.a)(T)}),Object(x.jsx)(fn,{}),Object(x.jsx)(Rn,{})]})})}));console.log("\u9879\u76ee\u5df2\u542f\u52a8"),console.log("test git"),console.log("test pull"),l.a.render(Object(x.jsx)(Hn,{}),document.getElementById("root"))},28:function(n,e,t){"use strict";t.d(e,"e",(function(){return c})),t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"f",(function(){return a})),t.d(e,"d",(function(){return s})),t.d(e,"a",(function(){return o}));var c="CHANGE_PLAY_LIST",r="CHANGE_CURRENT_SONG_INDEX",i="CHANGE_CURRENT_SONG",a="CHANGE_SEQUENCE",s="CHANGE_LYRIC_LIST",o="CHANGE_CURRENT_LYRIC_INDEX"},43:function(n,e,t){"use strict";t.d(e,"f",(function(){return c})),t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"g",(function(){return a})),t.d(e,"c",(function(){return s})),t.d(e,"d",(function(){return o})),t.d(e,"e",(function(){return l}));var c="CHANGE_TOP_BANNER",r="CHANGE_HOT_RECOMMEND",i="CHANGE_NEW_ALBUM",a="CHANGE_UP_RANKING",s="CHANGE_NEW_RANKING",o="CHANGE_ORIGIN_RANKING",l="CHANGE_SETTLE_SINGER"},59:function(n,e,t){"use strict";t.d(e,"d",(function(){return m})),t.d(e,"c",(function(){return f})),t.d(e,"b",(function(){return h})),t.d(e,"a",(function(){return y}));var c=t(64),r=t.n(c),i=t(141),a=t(95),s=t(28),o=t(96);function l(n){return Object(o.a)({url:"/song/detail",params:{ids:n}})}function p(n){return Object(o.a)({url:"/lyric",params:{id:n}})}function u(n){return Math.floor(Math.random()*n)}var d=t(131),b=/\[(\d{2}):(\d{2})\.(\d{2,3})]/;function x(n){var e,t=n.split("\n"),c=[],r=Object(d.a)(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(i){var a=b.exec(i),s={time:60*a[1]*1e3+1e3*a[2]+(3===a[3].length?1*a[3]:10*a[3]),content:i.replace(b,"").trim()};c.push(s)}}}catch(o){r.e(o)}finally{r.f()}return c}var A=function(n){return{type:s.e,payload:n}},j=function(n){return{type:s.c,payload:n}},g=function(n){return{type:s.b,payload:n}},m=function(n){return function(){var e=Object(a.a)(r.a.mark((function e(t,c){var a,s,o,p,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c().player.playList,!((s=a.findIndex((function(e){return e.id===n})))>0)){e.next=8;break}t(j(s)),t(g(a[s])),t(v(a[s].id)),e.next=17;break;case 8:return e.next=10,l(n);case 10:o=e.sent,p=o.songs[0],u=[].concat(Object(i.a)(a),[p]),t(A(u)),t(j(u.length-1)),t(g(p)),t(v(p.id));case 17:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},f=function(n){return{type:s.f,payload:n}},h=function(n){return function(e,t){var c=t().player.currentSongIndex,r=t().player.sequence,i=t().player.playList;switch(r){case 1:for(var a=u(i.length);a===c;)a=u(i.length);c=a;break;default:(c+=n)>i.length-1&&(c=0),c<0&&(c=i.length-1)}e(j(c)),e(g(i[c])),e(v(i[c].id))}},O=function(n){return{type:s.d,payload:n}},v=function(n){return function(){var e=Object(a.a)(r.a.mark((function e(t){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n);case 2:c=e.sent,i=x(c.lrc.lyric),t(O(i));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},y=function(n){return{type:s.a,payload:n}}},60:function(n,e,t){"use strict";t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return a}));var c=[{title:"\u53d1\u73b0\u97f3\u4e50",link:"/discover"},{title:"\u6211\u7684\u97f3\u4e50",link:"/mine"},{title:"\u670b\u53cb",link:"/friend"},{title:"\u5546\u57ce",link:"https://music.163.com/store/product"},{title:"\u97f3\u4e50\u4eba",link:"https://music.163.com/nmusician/web/index#/"},{title:"\u4e0b\u8f7d\u5ba2\u6237\u7aef",link:"https://music.163.com/#/download"}],r=[{title:"\u670d\u52a1\u6761\u6b3e",link:"https://st.music.163.com/official-terms/service"},{title:"\u9690\u79c1\u653f\u7b56",link:"https://st.music.163.com/official-terms/privacy"},{title:"\u513f\u7ae5\u9690\u79c1\u653f\u7b56",link:"https://st.music.163.com/official-terms/children"},{title:"\u7248\u6743\u6295\u8bc9\u6307\u5f15",link:"https://music.163.com/st/staticdeal/complaints.html"},{title:"\u610f\u89c1\u53cd\u9988",link:"#"}],i=[{link:"https://music.163.com/st/userbasic#/auth"},{link:"https://music.163.com/recruit"},{link:"https://music.163.com/web/reward"},{link:"https://music.163.com/uservideo#/plan"}],a=[{title:"\u63a8\u8350",link:"/discover/recommend"},{title:"\u6392\u884c\u699c",link:"/discover/ranking"},{title:"\u6b4c\u5355",link:"/discover/songs"},{title:"\u4e3b\u64ad\u7535\u53f0",link:"/discover/djradio"},{title:"\u6b4c\u624b",link:"/discover/artist"},{title:"\u65b0\u789f\u4e0a\u67b6",link:"/discover/album"}]},73:function(n,e,t){"use strict";function c(n){if(!(n<0))return Math.floor(n/1e4)+"\u4e07"}function r(n,e){return"".concat(n,"?param=").concat(e,"x").concat(e)}function i(n){return"https://music.163.com/song/media/outer/url?id=".concat(n,".mp3")}function a(n,e){var t=new Date(n);/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var c={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in c)if(new RegExp("(".concat(r,")")).test(e)){var i=c[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:s(i))}return e}function s(n){return("00"+n).substr(n.length)}t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return r})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return a}))},96:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var c=t(130),r=t.n(c);function i(n){return new Promise((function(e,t){var c=r.a.create({baseURL:"http://123.207.32.32:9001/",timeout:1e4});c.interceptors.request.use((function(n){return n}),(function(n){return n})),c.interceptors.response.use((function(n){return n.data}),(function(n){if(console.log("\u6765\u5230\u4e86response\u62e6\u622afailure\u4e2d"),console.log(n),n&&n.response)switch(n.response.status){case 400:n.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:n.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:n.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return n})),c(n).then((function(n){e(n)})).catch((function(n){t(n)}))}))}}},[[246,1,2]]]);
//# sourceMappingURL=main.ad45c7ff.chunk.js.map