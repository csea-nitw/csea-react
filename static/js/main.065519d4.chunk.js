(this["webpackJsonpcsea-react"]=this["webpackJsonpcsea-react"]||[]).push([[0],{103:function(O,b,a){},104:function(O,b,a){},105:function(O,b,a){},112:function(O,b,a){},113:function(O,b,a){},114:function(O,b,a){},115:function(O,b,a){"use strict";a.r(b);var e=a(0),t=a.n(e),ne=a(31),re=a.n(ne),We=a(103),Fe=a(104),D=a(26),h=a(12),Re=a(105),Y=a(166),I=a(165),J=a(155),v=a(158),oe=a(174),le=a(161),Z=a(169),x=a(171),l=a(164),se=a(54),H=a.n(se),R=a(160),N=a(173),P=a(172),ie=a(30),k=a.n(ie),m=a(170),T=a(83),z=a(167),ce=a(176),me=a(177),U=a(168),ue=a.p+"static/media/csealogo-QUIZIX.b2f33a82.png";let L=Object(T.a)();L=Object(U.a)(L);const B=()=>{const[r,o]=e.useState(!1),n=localStorage.getItem("csea-quizmas-token");return e.useEffect(()=>{o(!!n)}),e.createElement(ce.a,{position:"sticky",style:{backgroundColor:"black"}},e.createElement(me.a,null,e.createElement(l.a,{container:!0,direction:"row",style:{position:"absolute",left:"60%",top:"50%",transform:"translate(-50%, -50%)"}},e.createElement(l.a,{item:!0,md:9,xs:7},e.createElement("img",{src:ue,style:{margin:"auto",textAlign:"center",maxHeight:"30px"},alt:"CSEA"})," "),r?e.createElement(z.a,{theme:L},e.createElement(l.a,{item:!0,md:2,xs:4},e.createElement(I.a,{style:{color:"white"},onClick:()=>{localStorage.removeItem("csea-quizmas-token"),window.location.href="/csea-react/#",o(!1)}},e.createElement(m.a,null," Logout")))):e.createElement(e.Fragment,null))))},de=Object(T.a)();function X(){const r=Object(h.f)(),[o,n]=e.useState(!1),c="Username or password did not match with records",[y,g]=e.useState(""),[A,f]=e.useState(""),[u,w]=e.useState({user:{_id:""}});e.useEffect(()=>{u.user._id&&(localStorage.setItem("csea-quizmas-token",u.user._id),r("/wait"))},[u]);const W=s=>{s.preventDefault();const j=new AbortController,p=setTimeout(()=>j.abort(),5e3),F={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y,password:A}),signal:j.signal};fetch("https://csea-backend.herokuapp.com/api/signin",F).then(d=>{if(!d.ok)throw n(!0),new Error("response is not ok");if(d.status!==200)throw n(!0),new Error("Status code is not 200");return d.json()}).then(d=>w(d)).catch(d=>{console.log(d)}).finally(()=>clearTimeout(p))};return e.createElement(z.a,{theme:de},e.createElement(B,null),e.createElement(l.a,{container:!0,component:"main",sx:{height:"95vh"},justifyContent:"center"},e.createElement(J.a,null),e.createElement(l.a,{item:!0,xs:12,sm:8,md:5,sx:{margin:"20px"},component:Z.a,elevation:2,square:!0},e.createElement(x.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(Y.a,{sx:{m:1,bgcolor:"secondary.main"}},e.createElement(H.a,null)),e.createElement(m.a,{component:"h1",variant:"h5"},"Sign in"),e.createElement(x.a,{component:"form",noValidate:!0,onSubmit:W,sx:{mt:1}},e.createElement(P.a,{in:o},e.createElement(R.a,{severity:"error",action:e.createElement(N.a,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1)}},e.createElement(k.a,{fontSize:"inherit"})),sx:{mb:2}},c)),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:y,onChange:s=>g(s.target.value)}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:A,onChange:s=>f(s.target.value)}),e.createElement(oe.a,{control:e.createElement(le.a,{value:"remember",color:"primary"}),label:"Remember me"}),e.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"black"}},"Sign In"),e.createElement(l.a,{container:!0},e.createElement(l.a,{item:!0,margin:"auto"},e.createElement(D.b,{to:"/register"},"Dont have an account? Sign Up"))))))))}var $=a(178),K=a(179),Ne=a(112),Pe=a(113);let Q=Object(T.a)();Q=Object(U.a)(Q);function he(){const[r,o]=Object(e.useState)(!0),n=Object(h.f)();return Object(e.useEffect)(()=>{localStorage.getItem("csea-quizmas-token")||n("/register")},[]),t.a.createElement(z.a,{theme:Q},t.a.createElement(B,null),t.a.createElement(l.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"space-around",spacing:2,style:{height:"91.5vh",backgroundColor:"#FAFAFA"},className:"css-bg-selector"},t.a.createElement(l.a,{item:!0,xs:12,md:6,className:"noselect"},t.a.createElement(P.a,{in:r},t.a.createElement(R.a,{severity:"success",action:t.a.createElement(N.a,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{o(!1)}},t.a.createElement(k.a,{fontSize:"inherit"})),sx:{mb:2}},"Answer for the last question was Ham Sandwich (DW, We accepted sandwich also)")),t.a.createElement($.a,{className:"css-selector",sx:{height:"100%",boxShadow:"3",margin:"2rem"}},t.a.createElement(K.a,null,t.a.createElement(x.a,{sx:{textAlign:"left",marginTop:"0",color:"white",fontWeight:"700",fontSize:"0.8rem"}},t.a.createElement("span",{style:{border:"2px solid white",padding:"3px 5px",borderRadius:"15px"}},"Current Contest")),t.a.createElement(m.a,{variant:"h4",color:"black",fontWeight:500},"Quizzmas 2021"),t.a.createElement(m.a,{fontSize:".9rem",sx:{fontWeight:"500",color:"black",marginBottom:"1rem"}},"Dec 26 @ 8:00 pm IST"),t.a.createElement(D.b,{to:"/61c6b095c51a9900231414e6"},t.a.createElement(I.a,{variant:"contained",sx:{color:"white"},size:"small",disableElevation:!0}," ","Start Quiz")))))))}var q=a(175);const ge=Object(T.a)();function fe(){const r="Mobile number or mail already in use",[o,n]=e.useState(!1),[c,y]=e.useState(""),[g,A]=e.useState(""),[f,u]=e.useState(""),[w,W]=e.useState(""),[s,j]=e.useState(""),[p,F]=e.useState(""),[d,E]=e.useState(!1),[V,je]=e.useState(""),te=Object(h.f)();e.useEffect(()=>{E(c.length>=2&&g.length>=2&&s.length>=6&&f.length!==0&&w.length===10&&s===p)},[c,g,f,s]),e.useEffect(()=>{localStorage.getItem("csea-quizmas-token")&&te("/wait")},[]),e.useEffect(()=>{V&&(localStorage.setItem("csea-quizmas-token",V),te("/wait"))},[V]);const Ie=i=>{i.preventDefault();const ae=new AbortController,Te=setTimeout(()=>ae.abort(),5e3),ze={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,name:c,mobile_no:w,password:s}),signal:ae.signal};fetch("https://csea-backend.herokuapp.com/api/signup",ze).then(C=>{if(!C.ok)throw n(!0),new Error("response is not ok");if(C.status!==200)throw n(!0),new Error("Status code is not 200");return C.json()}).then(C=>je(C.id)).catch(C=>{console.log(C)}).finally(()=>clearTimeout(Te))};return e.createElement(z.a,{theme:ge},e.createElement(B,null),e.createElement(l.a,{container:!0,component:"main",sx:{height:"100%"},justifyContent:"center"},e.createElement(J.a,null),e.createElement(l.a,{item:!0,xs:12,sm:8,md:5,sx:{margin:"20px"},component:Z.a,elevation:2,square:!0},e.createElement(x.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},e.createElement(Y.a,{sx:{m:1,bgcolor:"secondary.main"}},e.createElement(H.a,null)),e.createElement(m.a,{component:"h1",variant:"h5"},"Register for Quizzmas"),e.createElement(x.a,{component:"form",noValidate:!0,onSubmit:Ie,sx:{mt:1}},e.createElement(P.a,{in:o},e.createElement(R.a,{severity:"error",action:e.createElement(N.a,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{n(!1)}},e.createElement(k.a,{fontSize:"inherit"})),sx:{mb:2}},r)),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,id:"first_name",label:"First Name",name:"firstName",autoComplete:"name",autoFocus:!0,value:c,onChange:i=>{y(i.target.value)}}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"lastName",autoComplete:"name",autoFocus:!0,value:g,onChange:i=>{A(i.target.value)}}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:f,onChange:i=>{u(i.target.value)}}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,id:"phoneNum",label:"Mobile Number",name:"phone",type:"number",autoFocus:!0,value:w,onChange:i=>{W(i.target.value)}}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Password",type:"password",id:"confirmPassword",value:p,onChange:i=>{F(i.target.value)}}),e.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm Password",type:"password",id:"password",autoComplete:"current-password",value:s,onChange:i=>{j(i.target.value)}}),e.createElement(I.a,{type:"submit",fullWidth:!0,variant:"contained",disabled:!d,sx:{mt:3,mb:2}},"Register"),e.createElement(l.a,{container:!0},e.createElement(l.a,{item:!0},e.createElement(q.a,{href:"#",variant:"body2"},"Already have an account? Log In"))),e.createElement(m.a,{variant:"body2",color:"text.secondary",align:"center",mt:1},"Copyright \xA9 ",e.createElement(q.a,{color:"inherit",href:"cseanitw.in"},"CSEA")," ",new Date().getFullYear(),"."))))))}var pe=a(163),Ee=a(157);const S={_id:"61c6e118722ad722a270ac03",day:2,imageUrl:"",question:"Due to the pandemic this year, Santa wanted to give extra gifts to everyone in the world. To produce more gifts, Santa opened five new gift factories around the north and south poles. The Grinch, upon spying on Santa's elves, learned of one these factories and hatched a plan to destroy it and ruin Christmas. When the Grinch shows up at this factory, Buddy, a dimwitted elf, spots him and immediately calls Santa to alert him. Buddy being a forgetful elf forgets which factory he is in, but he tells Santa a few clues about this factory: 1. The Grinch is fighting the polar bears protecting the factory. Since there are more polar bears than elf population in this place, it will take some time for the Grinch to make it to the factory. 2. This factory is near a polar station named after the first person who said 'We are not at the center'. Due to the limited time, Santa can only visit one factory. Can you deduce where this factory is and help Santa save Christmas?",createdAt:"2021-12-25T09:15:04.118Z",updatedAt:"2021-12-25T09:15:04.118Z",__v:0};var ke=a(114),ve=Object.defineProperty,_=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ee=(r,o,n)=>o in r?ve(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,G=(r,o)=>{for(var n in o||(o={}))ye.call(o,n)&&ee(r,n,o[n]);if(_)for(var n of _(o))be.call(o,n)&&ee(r,n,o[n]);return r};let M=Object(T.a)();M=Object(U.a)(M);const xe=Object(Ee.a)("input")`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;
  text-align: 'center'

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`,Se=t.a.forwardRef((r,o)=>{const{getRootProps:n,getInputProps:c}=Object(pe.a)(r,o);return t.a.createElement("div",G({},n()),t.a.createElement(xe,G(G({},r),c())))});function we(){const[r,o]=Object(e.useState)(!1),[n,c]=Object(e.useState)(""),[y,g]=Object(e.useState)(!1),[A,f]=Object(e.useState)(""),[u,w]=Object(e.useState)({message:"",expectedRankToday:""}),W=Object(h.f)(),s=localStorage.getItem("csea-quizmas-token");Object(e.useEffect)(()=>{s||W("/register"),o(!0)},[]),Object(e.useEffect)(()=>{u.message&&(u.expectedRankToday?parseInt(u.expectedRankToday,10)<10?f(`Yayy!! You're ranked ${u.expectedRankToday} on this question!!!`):f("Yayy!! You're among the first few on this question!!!"):f(u.message))},[u]);const j=()=>{if(n.length>=1){const p=new AbortController,F=setTimeout(()=>p.abort(),1e4),d={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:s,day:S.day,answer:n}),signal:p.signal};fetch("https://csea-backend.herokuapp.com/api/check",d).then(E=>{if(!E.ok)throw console.log(E),new Error("response is not ok");return g(!0),E.json()}).then(E=>w(E)).catch(E=>{console.log(E)}).finally(()=>clearTimeout(F))}};return t.a.createElement(z.a,{theme:M},t.a.createElement(B,null),r?t.a.createElement(l.a,{className:"baseGrid",style:{overflow:"auto"}},t.a.createElement(l.a,{container:!0,xs:12,direction:"row",style:{userSelect:"none",height:"auto",margin:"0 auto"}},t.a.createElement(l.a,{item:!0,md:12,height:"max-content",margin:"auto",container:!0,direction:"column"},t.a.createElement(m.a,{variant:"h3",color:"white",fontWeight:600},"Quizzmas"," "),t.a.createElement(m.a,{variant:"h4",color:"white",fontWeight:500},"Day ",S.day)),t.a.createElement(l.a,{item:!0,xs:12,md:6,margin:"0 auto",borderRadius:"15px",container:!0,direction:"column"},t.a.createElement($.a,{sx:{padding:"2",margin:"3vh 2vw",borderRadius:"0px"},variant:"outlined",elevation:4},t.a.createElement(P.a,{in:y},t.a.createElement(R.a,{severity:"info",action:t.a.createElement(N.a,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{g(!1)}},t.a.createElement(k.a,{fontSize:"inherit"})),sx:{mb:2}},A)),t.a.createElement(K.a,null,S.imageUrl!==""?t.a.createElement(l.a,{item:!0,container:!0,direction:"row"},t.a.createElement(l.a,{item:!0,md:4,xs:12},t.a.createElement("img",{src:S.imageUrl,alt:`${S.imageUrl}`,style:{height:"150px",margin:"auto",padding:"1vh",borderRadius:"15px",objectFit:"contain"}})),t.a.createElement(l.a,{item:!0,md:8,xs:12,style:{margin:"auto"}},t.a.createElement(x.a,{padding:"1vh",mt:1,mb:3,sx:{width:"100%",border:""}},t.a.createElement(m.a,{fontWeight:500}," ",S.question)))):t.a.createElement(l.a,{item:!0,style:{margin:"auto"}},t.a.createElement(x.a,{padding:"1vh",fontWeight:400,mt:1,mb:2,sx:{width:"100%",border:""}},t.a.createElement(m.a,{variant:"h5",fontWeight:500}," ",S.question),t.a.createElement(m.a,{variant:"h6"},"(PS: If answer is two names enter as name1, name2)"))),t.a.createElement("hr",null),t.a.createElement("br",null),t.a.createElement(Se,{"aria-label":"Demo input",placeholder:"Type something...",id:"response-input",onChange:p=>c(p.target.value),style:{width:"75%"}}),t.a.createElement(I.a,{variant:"contained",style:{margin:"10px",marginTop:"20px",width:"50%",backgroundColor:"#F12337"},value:n,onClick:()=>j()},"Check")),t.a.createElement("hr",null)),t.a.createElement(m.a,{sx:{color:"white",fontWeight:"bold"}},"CSEA Wishes You a Merry Christmas!")))):t.a.createElement(t.a.Fragment,null))}function Ce(){return t.a.createElement("div",{className:"App",style:{backgroundColor:"#FAFAFA",minHeight:"100vh"}},t.a.createElement("div",null,t.a.createElement(D.a,null,t.a.createElement(h.c,null,t.a.createElement(h.a,{path:"/",element:t.a.createElement(X,null)}),t.a.createElement(h.a,{path:"/61c6b095c51a9900231414e6",element:t.a.createElement(we,null)}),t.a.createElement(h.a,{path:"/login",element:t.a.createElement(X,null)}),t.a.createElement(h.a,{path:"/register",element:t.a.createElement(fe,null)}),t.a.createElement(h.a,{path:"/wait",element:t.a.createElement(he,null)})))))}var Oe=Ce,Ae=r=>{r&&r instanceof Function&&a.e(3).then(a.bind(null,181)).then(({getCLS:o,getFID:n,getFCP:c,getLCP:y,getTTFB:g})=>{o(r),n(r),c(r),y(r),g(r)})};re.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(Oe,null)),document.getElementById("root")),Ae()}},[[115,1,2]]]);

//# sourceMappingURL=main.065519d4.chunk.js.map