(this["webpackJsonpcsea-react"]=this["webpackJsonpcsea-react"]||[]).push([[0],{103:function(q,I,a){},104:function(q,I,a){},110:function(q,I,a){},112:function(q,I,a){"use strict";a.r(I);var t=a(0),e=a.n(t),Y=a(31),Z=a.n(Y),be=a(103),xe=a(104),P=a(29),f=a(12),n=a(161),i=a(164),B=a(153),h=a(162);function X(){const s=Object(f.f)();return Object(t.useEffect)(()=>{localStorage.getItem("sign-in")&&s("/wait")},[]),e.a.createElement(n.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2},e.a.createElement(n.a,{item:!0,xs:12,mt:5},e.a.createElement(i.a,{variant:"h2",mt:4},"Welcome to CSEA Quizix!")),e.a.createElement(n.a,{item:!0,md:12},e.a.createElement(B.a,{direction:"row",spacing:2,justifyContent:"center"},e.a.createElement(h.a,{variant:"contained",size:"large",disableElevation:!0,style:{backgroundColor:"black"},onClick:()=>{window.location.href="/login"}}," ","Log In"),e.a.createElement(h.a,{variant:"contained",size:"large",disableElevation:!0,style:{backgroundColor:"black"}}," ","Sign Up"))))}var Ce=a(110),z=a(171),k=a(172),S=a(166),$=a(80),K=a.n($),R=a(39);const _={quiz_name:"demo1",start_date:"2019-04-28T09:15:15.000Z",quiz_id:"619690427e887a22f9067a59",end_date:"2019-04-28T09:15:15.000Z",questions:[{qsCode:"619771ed10b2a12ef1c7bed9",qsMandatory:!0,qsHint:"No hints lite",qsImageUrl:"",options:[{optionUrl:"",_id:"619771ed10b2a12ef1c7bedb",optionText:"option A"},{optionUrl:"",_id:"619771ed10b2a12ef1c7beda",optionText:"option B"}],_id:"619771ed10b2a12ef1c7bed9",qsType:"single",qsText:"Questions will be here soon?"}]};function ee(){const s=localStorage.getItem("quiz-user"),[o,p]=Object(t.useState)(0),[v,E]=Object(t.useState)(Date.now()+3e4),[b,y]=Object(t.useState)(!1),[T,d]=Object(t.useState)(!1),[u,O]=Object(t.useState)(_),[D,Q]=Object(t.useState)(!1),N=Object(f.f)();e.a.useEffect(()=>{console.log(u),Q(!0)},[u]),e.a.useEffect(()=>{fetch("https://csea-backend.herokuapp.com/api/attempt/6196910a7abcf523affc1602",{method:"GET",headers:{"Content-Type":"application/json"}}).then(r=>{if(!r.ok)throw new Error("response is not ok");if(r.status!==200)throw new Error("Status code is not 200");return r.json()}).then(r=>{console.log(r),O(r)}).catch(r=>{console.log(r)})},[]);const[g,j]=Object(t.useState)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),A=localStorage.getItem("start-time");A&&E(new Date(A).getTime);const W=()=>{const r={participant:localStorage.getItem("csea-quiz-token"),quiz:u.quiz_id,responses:[{}]};console.log(r),u.questions.forEach((x,U)=>{const ve={question:x.qsCode,option:g[U]};r.responses.push(ve)});const m={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};b||fetch("https://csea-backend.herokuapp.com/api/response",m).then(x=>{if(!x.ok)throw new Error("response is not ok");if(x.status!==200)throw new Error("Status code is not 200");return y(!0),x.json()}).then(x=>{y(!0)}).catch(x=>{console.log(x)})};setInterval(()=>{Date.now()>v&&Date.now()<v+200&&(T||(d(!0),console.log("Attempt"),W()))},1e3);const c=(l,r)=>r!==-1?"#1AA260  ":o===l?"#f2c215":"white",F=(l,r)=>o===l?"black":r!==-1?"white":"black";return e.a.useEffect(()=>{b&&(alert("success-submitted"),N("/result-wait"))},[b]),e.a.createElement(e.a.Fragment,null,D?e.a.createElement(e.a.Fragment,null,e.a.createElement(i.a,{variant:"h4",fontWeight:600,m:1},"Quiz #123"),e.a.createElement(i.a,{variant:"h6",sx:{color:"gray"},fontWeight:600,m:1},"Time Left: ",e.a.createElement(R.a,{date:v})),e.a.createElement(h.a,{variant:"outlined",sx:{margin:"10px"},onClick:()=>{W()}},"Submit Quiz"),e.a.createElement("hr",{style:{fontSize:"20"}}),e.a.createElement(n.a,{container:!0,xs:12,direction:"row",style:{userSelect:"none",height:"100%",backgroundColor:"#EAEEF3",margin:"0 auto"}},e.a.createElement(n.a,{item:!0,xs:11,md:4,height:"max-content",margin:"5vh auto",container:!0,direction:"column"},e.a.createElement(z.a,{sx:{padding:"2"},variant:"outlined"},e.a.createElement(k.a,null,e.a.createElement(i.a,{variant:"h5",fontWeight:600},"Quiz Pallete"),e.a.createElement(n.a,{item:!0,container:!0,direction:"row",style:{justifyContent:"space-evenly"}},u.questions.map((l,r)=>e.a.createElement(n.a,{key:l.qsCode,item:!0,xs:1.8,onClick:()=>p(r),mt:1,style:{backgroundColor:c(r,g[r]),borderRadius:"5vh",border:"1px solid gray"}},e.a.createElement(h.a,{disableFocusRipple:!0,disableTouchRipple:!0,sx:{color:F(r,g[r])}},1+r)))),e.a.createElement(n.a,{item:!0,container:!0,direction:"row",justifyContent:"space-around",alignItems:"center"},e.a.createElement(n.a,{item:!0,xs:4},e.a.createElement(h.a,{variant:"outlined",size:"small",sx:{padding:"7px",marginTop:"10px"},onClick:()=>{p(Math.max(o-1,0))}},"Previous")),e.a.createElement(n.a,{item:!0,xs:4},g[o]!==-1?e.a.createElement(h.a,{variant:"outlined",size:"small",sx:{padding:"5px",marginTop:"10px"},onClick:()=>{const l=[];g.forEach((r,m)=>{o===m?l.push(-1):l.push(r)}),j(l)}},"Clear Response"):e.a.createElement(h.a,{variant:"outlined",size:"small",disabled:!0,sx:{padding:"5px",marginTop:"10px"},onClick:()=>{const l=[];g.forEach((r,m)=>{o===m?l.push(-1):l.push(r)}),j(l)}},"Clear Response")),e.a.createElement(n.a,{item:!0,xs:4},e.a.createElement(h.a,{variant:"outlined",size:"small",sx:{padding:"5px",marginTop:"10px"},onClick:()=>{p(Math.min(o+1,u.questions.length-1))}},"Next")))))),e.a.createElement(n.a,{item:!0,xs:12,md:6,margin:"0 auto",borderRadius:"15px",container:!0,direction:"column"},e.a.createElement(z.a,{sx:{padding:"2",margin:"3vh 2vw"},variant:"outlined"},e.a.createElement(k.a,null,e.a.createElement(i.a,{variant:"h5",fontWeight:600,mb:0},"Question ",1+o),e.a.createElement(i.a,{maxWidth:"100%"},"Type - ",u.questions[o].qsType," ",e.a.createElement(K.a,null)),u.questions[o].qsImageUrl!==""?e.a.createElement(n.a,{item:!0,container:!0,direction:"row"},e.a.createElement(n.a,{item:!0,md:4,xs:12},e.a.createElement("img",{src:u.questions[o].qsImageUrl,alt:`${u.questions[o].qsImageUrl}`,style:{height:"150px",margin:"auto",padding:"1vh",borderRadius:"15px",objectFit:"contain"}})),e.a.createElement(n.a,{item:!0,md:8,xs:12,style:{margin:"auto"}},e.a.createElement(S.a,{padding:"1vh",fontWeight:400,mt:1,mb:3,sx:{width:"100%",border:""}}," ",u.questions[o].qsText))):e.a.createElement(n.a,{item:!0,style:{margin:"auto"}},e.a.createElement(S.a,{padding:"1vh",fontWeight:400,mt:1,mb:2,sx:{width:"100%",border:""}}," ",u.questions[o].qsText)),e.a.createElement("hr",null),e.a.createElement("br",null),e.a.createElement(n.a,{container:!0,direction:"row",item:!0,lg:12,justifyContent:"center",alignItems:"center",spacing:2},u.questions[o].options.map((l,r)=>e.a.createElement(n.a,{container:!0,item:!0,md:6,alignItems:"center",justifyContent:"center",xs:12,onClick:()=>{const m=[];g.forEach((x,U)=>{o===U?m.push(r):m.push(x)}),j(m)}},l.optionUrl!==""?e.a.createElement(n.a,{item:!0,container:!0,justifyContent:"center"},e.a.createElement(B.a,{direction:"row",alignItems:"center",justifyContent:"center"},e.a.createElement("img",{src:l.optionUrl,alt:`${l.optionUrl}`,style:g[o]===r?{height:"150px",margin:"auto",padding:"1vh",borderRadius:"15px",objectFit:"cover",border:"2px solid green"}:{height:"150px",margin:"auto",padding:"1vh",borderRadius:"15px",objectFit:"cover"}}),e.a.createElement(i.a,{position:"relative",sx:g[o]!==r?{top:"-33%",left:"-84%",borderRadius:"50%",border:"1px solid black",backgroundColor:"white",width:"25px",height:"25px",padding:"2px"}:{top:"-33%",left:"-84%",borderRadius:"50%",backgroundColor:"green",color:"#fefefe",width:"25px",height:"25px",padding:"2px"}},String.fromCharCode(65+r)))):e.a.createElement(n.a,{item:!0,md:12,xs:12,style:{margin:"auto",borderRadius:"30px"}},e.a.createElement(i.a,{textAlign:"center",padding:"1.7vh",sx:{backgroundColor:"#C4C4C4",borderRadius:"30px","&:hover":{fontWeight:"bold",cursor:"pointer"}},style:g[o]===r?{backgroundColor:"#1AA260",fontWeight:"bold"}:{},m:1}," ",l.optionText)))))))))):e.a.createElement(e.a.Fragment,null))}var te=a(167),ae=a(168),ne=a.p+"static/media/csealogo-QUIZIX.b2f33a82.png";function re(){return t.createElement(te.a,{position:"sticky",style:{backgroundColor:"black"}},t.createElement(ae.a,null,t.createElement("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},t.createElement("img",{src:ne,style:{margin:"auto",textAlign:"center",maxWidth:"50%",maxHeight:"80px"},alt:"CSEA"})," ")))}var L=a(163),H=a(155),C=a(156),oe=a(169),le=a(158),w=a(170),M=a(165),ie=a(54),V=a.n(ie),G=a(81),J=a(160);const se=Object(G.a)();function ce(){const s=Object(f.f)(),[o,p]=t.useState(!1);t.useEffect(()=>{o&&(localStorage.setItem("quiz-user","61a0aa51714f2600234922f0"),s("/quiz"))},[o]);const v=E=>{E.preventDefault();const b=new AbortController,y=setTimeout(()=>b.abort(),5e3),T={method:"GET",headers:{"Content-Type":"application/json"},signal:b.signal};fetch("https://csea-backend.herokuapp.com/api/questions/61a08e68d2595b0023984644",T).then(d=>{if(!d.ok)throw new Error("response is not ok");if(d.status!==200)throw new Error("Status code is not 200");return d.json()}).then(d=>p(!0)).catch(d=>{console.log(d)}).finally(()=>clearTimeout(y))};return t.createElement(J.a,{theme:se},t.createElement(n.a,{container:!0,component:"main",sx:{height:"95vh"},justifyContent:"center"},t.createElement(H.a,null),t.createElement(n.a,{item:!0,xs:12,sm:8,md:5,sx:{margin:"20px"},component:M.a,elevation:2,square:!0},t.createElement(S.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},t.createElement(L.a,{sx:{m:1,bgcolor:"secondary.main"}},t.createElement(V.a,null)),t.createElement(i.a,{component:"h1",variant:"h5"},"Sign in"),t.createElement(S.a,{component:"form",noValidate:!0,onSubmit:v,sx:{mt:1}},t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),t.createElement(oe.a,{control:t.createElement(le.a,{value:"remember",color:"primary"}),label:"Remember me"}),t.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"black"}},"Sign In"),t.createElement(n.a,{container:!0},t.createElement(n.a,{item:!0,xs:!0},t.createElement(w.a,{href:"#",variant:"body2"},"Forgot password?")),t.createElement(n.a,{item:!0},t.createElement(w.a,{href:"#",variant:"body2"},"Dont have an account? Sign Up"))),t.createElement(i.a,{variant:"body2",color:"text.secondary",align:"center"},"Copyright \xA9 ",t.createElement(w.a,{color:"inherit",href:"cseanitw.in"},"CSEA")," ",new Date().getFullYear(),"."))))))}function me(){const[s,o]=Object(t.useState)(Date.now()+5e3),[p,v]=Object(t.useState)(!0),E=localStorage.getItem("start-time");return E&&o(new Date(E).getTime),setInterval(()=>{Date.now()>s&&v(!1)},100),e.a.createElement(n.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2,style:{height:"100vh",backgroundColor:"#F3F7F7"}},e.a.createElement(n.a,{item:!0,xs:12,mt:3},e.a.createElement(i.a,{variant:"h2",mt:4,style:{color:"#3c3d3d"}},"Quiz #122 Will Start in"),e.a.createElement(i.a,{variant:"h4",mt:4,style:{color:"black"}},e.a.createElement(R.a,{date:s}))),e.a.createElement(n.a,{item:!0,md:12,style:{position:"relative",top:"-150px",marginTop:"50px"}},e.a.createElement(P.b,{to:"/quiz"},e.a.createElement(h.a,{variant:"contained",size:"large",disableElevation:!0,disabled:p}," ","Start Quiz"))))}function ue(){return e.a.createElement(z.a,{sx:{maxWidth:"500px",margin:"20px auto"}},e.a.createElement(k.a,null,e.a.createElement(n.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2},e.a.createElement(n.a,{item:!0,xs:12,mt:5},e.a.createElement(i.a,{variant:"h2",mt:4},"Your result will be here soon!")),e.a.createElement(n.a,{item:!0,xs:12,mt:1},e.a.createElement(i.a,{variant:"h4",mt:1,sx:{color:"gray"}},"Quiz Ends in: ",e.a.createElement(R.a,{date:Date.now()+1e4}))),e.a.createElement(n.a,{item:!0,md:12,mt:2},e.a.createElement(h.a,{variant:"contained",size:"large",disableElevation:!0,disabled:!0}," ","Check Result")))))}function de(){return e.a.createElement(z.a,{style:{maxWidth:"500px",margin:"50px auto"}},e.a.createElement(k.a,null,e.a.createElement(n.a,{container:!0,alignItems:"center",justifyContent:"center",spacing:2},e.a.createElement(n.a,{item:!0,xs:12,mt:1,mb:1},e.a.createElement(i.a,{variant:"h3"},"Here is your result!"),e.a.createElement("br",null),e.a.createElement("hr",null)),e.a.createElement(n.a,{item:!0,md:12},e.a.createElement(i.a,{variant:"h5",mt:2},"Score: 123"),e.a.createElement(i.a,{variant:"h5",mt:1},"High Score: 456"),e.a.createElement(i.a,{variant:"h5",mt:1,mb:3},"Your Best: 567"),e.a.createElement(h.a,{variant:"outlined",size:"large"},"Go back to home page")))))}const ge=Object(G.a)();function he(){const[s,o]=t.useState(""),[p,v]=t.useState(""),[E,b]=t.useState(""),[y,T]=t.useState(""),[d,u]=t.useState(""),[O,D]=t.useState(""),[Q,N]=t.useState(!1),[g,j]=t.useState(""),A=Object(f.f)();t.useEffect(()=>{N(s.length>=2&&p.length>=2&&d.length>=6&&E.length!==0&&y.length===10&&d===O)},[s,p,E,d]),t.useEffect(()=>{const c=localStorage.getItem("csea-quiz-token");console.log(c),c&&A("/wait")},[]),t.useEffect(()=>{g&&(localStorage.setItem("csea-quiz-token",g),A("/wait"))},[g]);const W=c=>{c.preventDefault();const F=new AbortController,l=setTimeout(()=>F.abort(),5e3),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:E,name:s,mobile_no:y,password:d}),signal:F.signal};fetch("https://csea-backend.herokuapp.com/api/signup",r).then(m=>{if(!m.ok)throw new Error("response is not ok");if(m.status!==200)throw new Error("Status code is not 200");return m.json()}).then(m=>j(m.id)).catch(m=>{console.log(m)}).finally(()=>clearTimeout(l))};return t.createElement(J.a,{theme:ge},t.createElement(n.a,{container:!0,component:"main",sx:{height:"100%"},justifyContent:"center"},t.createElement(H.a,null),t.createElement(n.a,{item:!0,xs:12,sm:8,md:5,sx:{margin:"20px"},component:M.a,elevation:2,square:!0},t.createElement(S.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"}},t.createElement(L.a,{sx:{m:1,bgcolor:"secondary.main"}},t.createElement(V.a,null)),t.createElement(i.a,{component:"h1",variant:"h5"},"Register an account"),t.createElement(S.a,{component:"form",noValidate:!0,onSubmit:W,sx:{mt:1}},t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,id:"first_name",label:"First Name",name:"firstName",autoComplete:"name",autoFocus:!0,value:s,onChange:c=>{o(c.target.value)}}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,id:"last_name",label:"Last Name",name:"lastName",autoComplete:"name",autoFocus:!0,value:p,onChange:c=>{v(c.target.value)}}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:E,onChange:c=>{b(c.target.value)}}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,id:"phoneNum",label:"Mobile Number",name:"phone",type:"number",autoFocus:!0,value:y,onChange:c=>{T(c.target.value)}}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:d,onChange:c=>{u(c.target.value)}}),t.createElement(C.a,{margin:"normal",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",value:O,onChange:c=>{D(c.target.value)}}),t.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",disabled:!Q,sx:{mt:3,mb:2}},"Create an Account"),t.createElement(n.a,{container:!0},t.createElement(n.a,{item:!0},t.createElement(w.a,{href:"#",variant:"body2"},"Already have an account? Log In"))),t.createElement(i.a,{variant:"body2",color:"text.secondary",align:"center",mt:1},"Copyright \xA9 ",t.createElement(w.a,{color:"inherit",href:"cseanitw.in"},"CSEA")," ",new Date().getFullYear(),"."))))))}function pe(){return e.a.createElement("div",{className:"App",style:{backgroundColor:"#EAEEF3",minHeight:"100vh"}},e.a.createElement(re,null),e.a.createElement("div",null,e.a.createElement(P.a,null,e.a.createElement(f.c,null,e.a.createElement(f.a,{path:"/",element:e.a.createElement(X,null)}),e.a.createElement(f.a,{path:"/quiz",element:e.a.createElement(ee,null)}),e.a.createElement(f.a,{path:"/login",element:e.a.createElement(ce,null)}),e.a.createElement(f.a,{path:"/register",element:e.a.createElement(he,null)}),e.a.createElement(f.a,{path:"/wait",element:e.a.createElement(me,null)}),e.a.createElement(f.a,{path:"/result-wait",element:e.a.createElement(ue,null)}),e.a.createElement(f.a,{path:"/result",element:e.a.createElement(de,null)})))))}var Ee=pe,fe=s=>{s&&s instanceof Function&&a.e(3).then(a.bind(null,173)).then(({getCLS:o,getFID:p,getFCP:v,getLCP:E,getTTFB:b})=>{o(s),p(s),v(s),E(s),b(s)})};Z.a.render(e.a.createElement(e.a.StrictMode,null,e.a.createElement(Ee,null)),document.getElementById("root")),fe()}},[[112,1,2]]]);

//# sourceMappingURL=main.abfa15cd.chunk.js.map