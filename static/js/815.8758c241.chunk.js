"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[815],{756:function(t,n,e){e.d(n,{aE:function(){return u},Lu:function(){return c},pI:function(){return f}});var r={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},a=e(1495),i=function(t){return t.map((function(t){return r["".concat(t)]})).join(", ")},o=function(t){return t.map((function(t){return t.name})).join(", ")},u=function(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):"".concat(a)},s=function(t){return t?t.slice(0,4):t},c=function(t){return t.map((function(t){var n=t.genres,e=void 0===n?null:n,r=t.genre_ids,a=void 0===r?null:r,c=t.id,f=t.original_title,p=t.name,l=t.overview,d=t.popularity,v=t.poster_path,x=t.release_date,m=t.vote_average,g=t.vote_count;return{genre:a?i(a):o(e),id:c,title:f||p,about:l,popularity:d,img:u(v),releaseDate:x?s(x):"",vote:m,votes:g}}))},f=function(t){var n=t.poster_path,e=t.title,r=t.original_title,a=t.vote_average,i=t.overview,c=t.genres,f=t.release_date;return{genre:o(c),title:r||e,about:i,img:u(n),releaseDate:f?s(f):"",vote:a}}},8189:function(t,n,e){e.r(n),e.d(n,{default:function(){return z}});var r,a,i,o,u,s,c,f,p,l=e(5861),d=e(885),v=e(7757),x=e.n(v),m=e(2791),g=e(6871),h=e(168),b=e(501),w=e(6031),Z=w.ZP.div(r||(r=(0,h.Z)(["\n\tdisplay: flex;\n\tpadding: 10px 20px 20px;\n\tborder-bottom: 1px solid #fbf9fa3f;\n"]))),y=w.ZP.div(a||(a=(0,h.Z)(["\n\tmargin-right: 35px;\n\tflex-direction: column;\n"]))),_=(0,w.ZP)(b.OL)(i||(i=(0,h.Z)(["\n\tbackground: #fbf9fa3f;\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tfont-size: 18px;\n\tcolor: #fff;\n"]))),j=w.ZP.img(o||(o=(0,h.Z)(["\n\tmargin-top: 15px;\n\tmax-width: 300px;\n\tdisplay: block;\n\tborder-radius: 5px;\n"]))),k=w.ZP.div(u||(u=(0,h.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 53px;\n"]))),P=w.ZP.h2(s||(s=(0,h.Z)(["\n\tfont-size: 30px;\n\tmargin-bottom: 10px;\n"]))),L=w.ZP.p(c||(c=(0,h.Z)(["\n\tfont-size:18px;\n\t&:not(:last-of-type){\n\t\tmargin-bottom: 20px;\n\t}\n"]))),C=w.ZP.div(f||(f=(0,h.Z)(["\n\tpadding: 10px 20px 20px;\n\tborder-bottom: 1px solid #fbf9fa3f;\n"]))),D=(0,w.ZP)(b.OL)(p||(p=(0,h.Z)(["\n\tfont-size: 18px;\n\t&:not(:last-of-type) {\n\t\tmargin-right: 15px;\n\t}\n\t&.active {\n\t\tcolor: #5ffbf1;\n\t}\n"]))),F=e(7324),U=e(184),z=function(){var t,n,e=(0,g.UO)().movieId,r=(0,m.useState)(null),a=(0,d.Z)(r,2),i=a[0],o=a[1],u=null!==(t=null===(n=(0,g.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",s="/"===u.pathname?"Home":"Movies";return(0,m.useEffect)((function(){var t=function(){var t=(0,l.Z)(x().mark((function t(){var n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,F.BG)(Number(e));case 3:n=t.sent,console.log(n),o(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,U.jsxs)(U.Fragment,{children:[i&&(0,U.jsxs)(Z,{children:[(0,U.jsxs)(y,{children:[(0,U.jsxs)(_,{to:u,children:[" \u21e6 Go back ",s]}),(0,U.jsx)(j,{src:i.img,alt:i.title})]}),(0,U.jsxs)(k,{children:[(0,U.jsxs)(P,{children:[i.title," (",i.releaseDate,")"]}),(0,U.jsxs)(L,{children:["User score: ",i.vote]}),(0,U.jsx)(P,{children:"Overview"}),(0,U.jsx)(L,{children:i.about}),(0,U.jsx)(P,{children:"Genres"}),(0,U.jsx)(L,{children:i.genre})]})]}),(0,U.jsxs)(C,{children:[(0,U.jsx)(P,{children:"Additional information"}),(0,U.jsxs)("ul",{children:[(0,U.jsx)(D,{to:"cast",state:{from:u},children:"Cast"}),(0,U.jsx)(D,{to:"reviews",state:{from:u},children:"Reviews"})]})]}),(0,U.jsx)(g.j3,{})]})}},7324:function(t,n,e){e.d(n,{BG:function(){return f},FE:function(){return p},fU:function(){return l},sv:function(){return d},wr:function(){return c}});var r=e(5861),a=e(7757),i=e.n(a),o=e(4569),u=e.n(o),s=e(756);u().defaults.baseURL="https://api.themoviedb.org/3",u().defaults.params={api_key:"b063f89d2471ef15de012ba417095fa1",include_adult:!1,language:"en-US"};var c=function(){var t=(0,r.Z)(i().mark((function t(){var n,e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/trending/all/day?");case 2:return n=t.sent,e=n.data,r=(0,s.Lu)(e.results),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"?"));case 2:return e=t.sent,r=e.data,a=(0,s.pI)(r),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/search/movie?query=".concat(n,"&page=1"));case 2:return e=t.sent,r=e.data,a=(0,s.Lu)(r.results),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"/credits?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"/reviews?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},1495:function(t,n,e){t.exports=e.p+"static/media/No_image_available.7ec9e7d54599b07e3ffc.png"}}]);
//# sourceMappingURL=815.8758c241.chunk.js.map