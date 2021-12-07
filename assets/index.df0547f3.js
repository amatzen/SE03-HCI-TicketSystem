import{r as _,c as k,o as a,a as m,b as s,t as l,d as f,w as b,F as v,e as y,f as S,g as B,h as I,i as A,n as j,j as T,k as L,l as M,m as g,p as C,q as D,s as E,u as P,v as q,x as K}from"./vendor.9197e6b4.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};V();var u=(o,t)=>{for(const[n,e]of t)o[n]=e;return o};const z={};function R(o,t){const n=_("router-view");return a(),k(n)}var U=u(z,[["render",R]]);const H={name:"NBUserSnippet",props:{name:{type:String,required:!0},position:{type:String,required:!0}}},J={class:"flex"},G={class:"font-semibold"},W={class:"text-gray-400 text-sm"};function Q(o,t,n,e,i,r){return a(),m("div",J,[s("div",null,[s("p",G,l(n.name),1),s("p",W,l(n.position),1)])])}var X=u(H,[["render",Q]]);const Y={name:"Navbar",components:{NBUserSnippet:X},data(){return{navElements:[{title:"Oversigt",to:"/"},{title:"Kundeadministration",to:"/crm"},{title:"Statistik",to:"/stats"}]}}},Z={class:"py-4 mb-10 bg-white shadow-sm"},tt={class:"container mx-auto flex justify-between items-center"},et=s("span",{class:"font-bold text-lg tracking-tight select-none"},[S("Ticket"),s("span",{class:"text-tealish-500"},"o")],-1),st={class:"flex items-center h-full"},ot={class:"p-2 h-full inline-block"};function nt(o,t,n,e,i,r){const d=_("router-link"),p=_("NBUserSnippet");return a(),m("header",Z,[s("div",tt,[f(d,{to:"/"},{default:b(()=>[et]),_:1}),s("nav",null,[s("ul",st,[(a(!0),m(v,null,y(i.navElements,h=>(a(),m("li",ot,[f(d,{to:h.to,title:h.title,class:"font-semibold focus:text-indigo-500 hover:underline underline-offset-medium ;","exact-active-class":"text-indigo-800"},{default:b(()=>[S(l(h.title),1)]),_:2},1032,["to","title"])]))),256))])]),f(p,{name:"Dorte",position:"Kunder\xE5dgiver"})])])}var it=u(Y,[["render",nt]]);const rt={name:"DefaultLayout",components:{Navbar:it}},at={class:"container mx-auto"};function ct(o,t,n,e,i,r){const d=_("Navbar"),p=_("router-view");return a(),m("div",null,[f(d),s("div",at,[f(p)])])}var lt=u(rt,[["render",ct]]);const dt={name:"Modal",props:{dismiss:Function}},mt={class:"min-w-screen h-screen fixed left-0 top-0 flex justifty-center items-center inset-0 z-10 outline-none focus:outline-none"},_t={class:"z-20 flex bg-white mx-auto my-auto rounded overflow-hidden shadow-md",role:"dialog"};function ut(o,t,n,e,i,r){return a(),m("div",mt,[s("div",{onClick:t[0]||(t[0]=B(d=>o.$emit("dismiss"),["prevent"])),class:"absolute bg-black opacity-20 inset-0 z-0"}),s("div",_t,[I(o.$slots,"default")])])}var ft=u(dt,[["render",ut]]);const O=(o,t)=>t.length<o?t:t.substr(0,o-3)+"...",$=A(()=>j(()=>({activeTicket:null,setActiveTicket(o){this.activeTicket=o},clearActiveTicket(){this.activeTicket=null},ticketColumns:[],addTicketColumn(o){this.ticketColumns=[...this.ticketColumns,o]},ticketsList:[],addTicket(o){return this.ticketsList=[...this.ticketsList,o],o.id},updateTicket(o,t){this.ticketsList.findIndex(n=>n.id===o)},removeTicket(o){this.ticketsList=this.ticketsList.filter(t=>t.id!==o)}})));const pt={name:"TicketMessage",props:{message:String,sender:Object},setup(o){return{initials:n=>n.slice(0,1)+n.split(" ")[n.split(" ").length-1].slice(0,1)}}},ht={class:"bg-gray-100 font-semibold p-4 pt-6 rounded relative mb-10"},gt={class:"bg-tealish-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold absolute select-none top--5 left--5"};function kt(o,t,n,e,i,r){return a(),m("div",ht,[s("span",gt,l(e.initials(n.sender.name)),1),s("p",null,l(n.message),1)])}var vt=u(pt,[["render",kt],["__scopeId","data-v-2baa12de"]]);const xt={name:"TimelineItem",props:{text:{type:String,required:!0,default:"Supportsag oprettet"},color:{type:String,default:"crimson"}},setup(o){return{randomRelativeDate:()=>L(g.date.recent(),{locale:M})}}},bt={class:"mt-2 flex gap-3 items-center"},yt={class:"font-semibold"},Tt={class:"text-sm text-gray-600"};function $t(o,t,n,e,i,r){return a(),m("div",bt,[s("span",{class:T(["w-7 h-7 max-w-7 max-h-7 min-h-7 min-w-7 bg-crimson-500 rounded-full inline-block",`bg-${n.color}-500`])},null,2),s("div",null,[s("p",yt,l(n.text),1),s("p",Tt,l(e.randomRelativeDate())+" siden",1)])])}var wt=u(xt,[["render",$t]]);const St={name:"TicketModal",props:{ticket:Object},components:{TimelineItem:wt,TicketMessage:vt,Modal:ft},setup(o){const t=$();return{data:o.ticket,relativeTimeFormat:c=>L(c,{locale:M}),dateFormat:c=>D(c,"d. MMM",{locale:M}),lowercaseString:c=>c.toLowerCase(),ticketStore:t,dotLongStrings:O,random:c=>Math.round(Math.random()*c+1),randomString:()=>g.lorem.words(Math.random()*3+1),timelineColor:()=>{const c=["tealish","crimson","yellowish","indigo"];return c[Math.floor(Math.random()*c.length)]}}}},Mt={class:"min-w-ticket"},Nt={class:"p-12"},Lt={class:"mr-2 font-semibold text-gray-500"},Ct={class:"mr-2 font-semibold text-gray-500"},Ot=["title"],Ft={class:"bg-white p-12 pt-0 grid grid-cols-ticketmodal gap-5"},Bt=s("p",{class:"font-semibold text-sm text-gray-600"},"Kunde",-1),It={class:"font-bold text-xl"},At={class:"font-semibold text-indigo-700"},jt={class:"text-gray-600"},Dt={class:"mt-5"},Et=s("p",{class:"font-semibold text-sm text-gray-600"},"Tidslinje",-1),Pt=s("div",{class:"mt-5"},[s("p",{class:"font-semibold text-sm text-gray-600"},"Handlinger")],-1);function qt(o,t,n,e,i,r){const d=_("TicketMessage"),p=_("TimelineItem"),h=_("Modal");return e.data?(a(),k(h,{key:0,onDismiss:t[0]||(t[0]=c=>e.ticketStore.clearActiveTicket())},{default:b(()=>[s("div",Mt,[s("div",Nt,[s("p",null,[s("span",Lt,"#"+l(e.data.id),1),s("span",{class:T(["mr-2 font-semibold",`text-${e.data.status.color}-800`])},l(e.data.status.title),3),s("span",Ct,"Oprettet "+l(e.relativeTimeFormat(e.data.created_at))+" siden",1)]),s("h1",{class:"text-4xl mt-2 font-bold",title:e.data.title},l(e.dotLongStrings(36,e.data.title)),9,Ot)]),s("div",Ft,[s("div",null,[f(d,{sender:e.data.customer,message:"Test"},null,8,["sender"]),f(d,{sender:e.data.customer,message:"Test"},null,8,["sender"]),f(d,{sender:e.data.customer,message:"Test"},null,8,["sender"]),f(d,{sender:e.data.customer,message:"Test"},null,8,["sender"])]),s("div",null,[s("div",null,[Bt,s("h3",It,l(e.data.customer.name),1),s("p",At,l(e.lowercaseString(e.data.customer.email)),1),s("p",jt,"Kunde siden "+l(e.dateFormat(e.data.customer.created_at)),1)]),s("div",Dt,[Et,(a(!0),m(v,null,y(e.random(6),c=>(a(),k(p,{key:c,text:e.randomString(),color:e.timelineColor()},null,8,["text","color"]))),128))]),Pt])])])]),_:1})):C("",!0)}var Kt=u(St,[["render",qt]]);const Vt={name:"TicketListItem",props:{ticket:Object},setup(o){return{ticketStore:$(),dotLongStrings:O}}},zt={class:"text-sm"},Rt={class:"font-bold text-lg my-2"},Ut={class:"text-base font-semibold"};function Ht(o,t,n,e,i,r){return a(),m("div",{role:"cell",class:T(["w-full bg-gray-800 text-white p-5 rounded mb-3 cursor-pointer transform scale-100 hover:scale-105 transition-transform select-none border-t-4 border-gray-600",`border-${n.ticket.status.color}-500`]),onClick:t[0]||(t[0]=d=>e.ticketStore.setActiveTicket(n.ticket))},[s("p",zt,"#"+l(n.ticket.id),1),s("h3",Rt,l(e.dotLongStrings(32,n.ticket.title)),1),s("p",Ut,l(n.ticket.customer.name),1)],2)}var Jt=u(Vt,[["render",Ht]]);const Gt={name:"OverviewPage",components:{TicketListItem:Jt,TicketModal:Kt,Observer:E},setup(o){const t=$();return{ticketStore:t,getTicketsByColumn:e=>t.value.ticketsList.filter(i=>JSON.stringify(e)===JSON.stringify(i.status))}}},Wt={class:"w-full grid grid-cols-4 gap-12"},Qt={class:"text-xl font-bold"},Xt={class:"text-gray-600 font-semibold mb-5"};function Yt(o,t,n,e,i,r){const d=_("TicketListItem"),p=_("TicketModal"),h=_("Observer");return a(),m(v,null,[s("div",null,[s("section",Wt,[(a(!0),m(v,null,y(e.ticketStore.ticketColumns,c=>(a(),m("div",{role:"row",key:c.title},[s("h2",Qt,[s("span",{class:T(["inline-block w-3 h-3 bg-gray-700 rounded-full",`bg-${c.color}-500`])},null,2),S(" "+l(c.title),1)]),s("p",Xt,l(e.getTicketsByColumn(c).length)+" sager ",1),s("div",null,[(a(!0),m(v,null,y(e.getTicketsByColumn(c),N=>(a(),k(d,{key:N.id,ticket:N},null,8,["ticket"]))),128))])]))),128))])]),f(h,null,{default:b(()=>[e.ticketStore.activeTicket!==null?(a(),k(p,{key:0,ticket:e.ticketStore.activeTicket},null,8,["ticket"])):C("",!0)]),_:1})],64)}var Zt=u(Gt,[["render",Yt]]);const te={name:"NotFoundPage"},ee={class:"text-center"},se=s("h1",{class:"text-6xl font-bold text-tealish-500 mb-2"},"404",-1),oe=s("p",{class:"text-2xl font-semibold text-gray-800"},"Vi kunne ikke finde den efterspurgte side",-1),ne=[se,oe];function ie(o,t,n,e,i,r){return a(),m("div",ee,ne)}var re=u(te,[["render",ie]]);const ae=[{path:"/",component:lt,children:[{path:"/",component:Zt},{path:"/:pathMatch(.*)*",component:re}]}];let F={ticket:0,customer:0};const x=$().value,w=o=>{const t=g.name.findName();return{created_at:g.date.recent(14),customer:{name:t,created_at:g.date.past(),email:g.internet.email(t.split(" ")[0]),id:F.customer++},id:F.ticket++,status:o,title:g.random.words(Math.round(Math.random()*4+1)),updated_at:g.date.recent()}};function ce(){const o=[{title:"Nye sager",color:"indigo"},{title:"Aktive sager",color:"crimson"},{title:"Afventer kunderespons",color:"yellowish"},{title:"F\xE6rdig",color:"tealish"}];o.forEach(t=>x.addTicketColumn(t));for(let t=0;t<6;t++)x.addTicket(w(o[0]));for(let t=0;t<2;t++)x.addTicket(w(o[1]));x.addTicket(w(o[2]));for(let t=0;t<14;t++)x.addTicket(w(o[3]))}const le=P({history:q("/"),routes:ae});ce();K(U).use(le).mount("#app");