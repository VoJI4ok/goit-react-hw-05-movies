"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[584],{724:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(87),u=e(689),i=e(184),a=function(t){var n=t.movie,e=n.id,a=n.title,o=(0,u.TH)();return(0,i.jsx)("li",{children:(0,i.jsx)(r.rU,{state:o,to:"/movies/".concat(e),children:a})},e)},o=function(t){var n=t.movies;return(0,i.jsx)("ul",{children:n.map((function(t){return(0,i.jsx)(a,{movie:t},t.id)}))})}},584:function(t,n,e){e.r(n);var r=e(439),u=e(724),i=e(791),a=e(99),o=e(87),c=e(184);n.default=function(){var t=(0,o.lr)(),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,i.useState)(""),v=(0,r.Z)(f,2),m=v[0],d=v[1],h=(0,i.useState)([]),p=(0,r.Z)(h,2),l=p[0],g=p[1],_=e.get("query");return(0,i.useEffect)((function(){_&&(0,a.BS)(_).then((function(t){return g(t)}))}),[_]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s({query:m})},children:[(0,c.jsx)("input",{type:"text",value:m,onChange:function(t){d(t.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]}),(0,c.jsx)(u.Z,{movies:l})]})}},99:function(t,n,e){e.d(n,{BS:function(){return a},Ze:function(){return o},gv:function(){return s},r0:function(){return c},ys:function(){return i}});var r=e(263);r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="bb3a08e31a06b6233fa5316dae873390",i=function(){return r.Z.get("trending/movie/day",{params:{api_key:u}}).then((function(t){return t.data.results}))},a=function(t){return r.Z.get("search/movie",{params:{api_key:u,query:t}}).then((function(t){return t.data.results}))},o=function(t){return r.Z.get("movie/".concat(t),{params:{api_key:u}}).then((function(t){return t.data}))},c=function(t){return r.Z.get("movie/".concat(t,"/credits"),{params:{api_key:u}}).then((function(t){return t.data}))},s=function(t){return r.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:u}}).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=584.e14dbab8.chunk.js.map