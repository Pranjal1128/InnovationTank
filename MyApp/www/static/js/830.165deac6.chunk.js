"use strict";(self.webpackChunkstocksup=self.webpackChunkstocksup||[]).push([[830],{7830:(e,a,r)=>{r.r(a),r.d(a,{default:()=>d});var t=r(2791),s=r(1358),n=(r(1549),r(3197)),o=r(5294),c=r(8987),l=r(184);const i=[{Header:"Rank",accessor:"rank"},{Header:"Name",accessor:"name",disableSortBy:!0},{Header:"Worth",accessor:"worth"}],d=()=>{const[e,a]=(0,t.useState)([]),[r,d]=(0,t.useState)([]),[h,u]=(0,t.useState)(),[g,p]=(0,t.useState)(1),[m,x]=(0,t.useState)(1),[f,j]=(0,t.useState)(!1),[k,b]=(0,t.useState)([1]),{getTableBodyProps:S,getTableProps:P,headerGroups:w,page:y,prepareRow:v,nextPage:N,previousPage:C,canPreviousPage:M,canNextPage:E,state:{pageIndex:H},pageCount:R}=(0,s.useTable)({columns:i,data:e,initialState:{pageSize:10}},s.useSortBy,s.usePagination),B=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{const r=(await o.Z.get("".concat(n.L,"/portfolios/audienceRanking"),{params:{pageSize:e,pageNumber:a}})).data,t=r.users.map((e=>({rank:e.rank,name:e.name,worth:e.worth})));return x(r.totDocuments),t}catch(r){throw console.error("Error fetching audience ranking:",r.message),r}};return(0,t.useEffect)((()=>{(async e=>{try{const{data:a}=await o.Z.get("".concat(n.L,"/portfolios/currUserRank?userId=").concat(e));u((e=>a)),console.log("currUser")}catch(a){throw console.error("Error fetching current user's rank:",a.message),a}})(localStorage.getItem("icell_pitcher_userId"))}),[]),(0,t.useEffect)((()=>{(async()=>{try{j(!0);const e=await B(10,g);d((a=>[...a,e])),a(e),j((e=>!1))}catch(e){console.error("Error:",e.message),j(!1)}})()}),[k]),(0,t.useEffect)((()=>{r.length>=g&&a(r[g-1])}),[g]),f?(0,l.jsx)(c.Z,{}):(0,l.jsxs)("div",{className:"audience-ranking",children:[(0,l.jsx)("h1",{children:"Ranking Page"}),(0,l.jsx)("div",{className:"audience-ranking-table",children:(0,l.jsxs)("table",{...P(),children:[(0,l.jsx)("thead",{children:w.map((e=>(0,l.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,l.jsxs)("th",{...e.getHeaderProps(e.getSortByToggleProps()),children:[e.render("Header"),e.isSorted&&(0,l.jsx)("span",{children:e.isSortedDesc?"\u2191":"\u2193"})]})))})))}),(0,l.jsxs)("tbody",{...S(),children:[(0,l.jsxs)("tr",{className:"self-rank",style:{display:1!==g?"none":"table-row"},children:[(0,l.jsx)("td",{children:h&&h.rank}),(0,l.jsx)("td",{children:h&&h.name}),(0,l.jsx)("td",{children:h&&h.worth})]}),y.map((e=>(v(e),(0,l.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,l.jsx)("td",{...e.getCellProps(),children:e.render("Cell")})))}))))]})]})}),(0,l.jsx)("div",{className:"btn-container2",children:(0,l.jsxs)("div",{className:"btn-page",children:[(0,l.jsx)("button",{disabled:1===g,onClick:()=>{p((e=>e-1))},children:"Prev"}),(0,l.jsxs)("span",{children:[g," of ",Math.ceil(m/10)]}),(0,l.jsx)("button",{disabled:g===Math.ceil(m/10),onClick:()=>{k.includes(g+1)||b((e=>[...e,g+1])),p((e=>e+1))},children:"Next"})]})})]})}},1549:(e,a,r)=>{r.d(a,{C0:()=>t});function t(e){console.log("n is",e);let a=[];for(let r=0;r<e;r++){const e=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());let s="rgb(".concat(e," ").concat(r," ").concat(t," / 40%)");a.push(s)}return a}}}]);
//# sourceMappingURL=830.165deac6.chunk.js.map