import { useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";
import { useScrolled } from "../../hooks";

export default function Navbar() {
  const scrolled = useScrolled(80);
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAuthPage = pathname === "/signin";
  const onDark = !scrolled || isAuthPage;

  return (
    <>
      <header style={{
        position:"fixed",top:0,left:0,right:0,zIndex:400,height:68,
        transition:"background 0.5s ease",
        background: scrolled&&!isAuthPage ? "rgba(245,240,232,0.92)" : "rgba(10,22,40,0.18)",
        backdropFilter:"blur(20px) saturate(1.4)",
        borderBottom: scrolled&&!isAuthPage ? "1px solid rgba(13,21,32,0.07)" : "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"0 2rem",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <LogoMark light={onDark}/>
          <nav style={{display:"flex",alignItems:"center",gap:2,flex:1,justifyContent:"center"}} className="nav-desktop">
            {NAV_ITEMS.map(item=>item.dropdown
              ?<DropdownLink key={item.label} item={item} light={onDark}/>
              :<SimpleNavLink key={item.label} item={item} light={onDark}/>
            )}
          </nav>
          <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}} className="nav-desktop">
            <Link to="/signin" style={{padding:"8px 18px",fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:500,color:onDark?"rgba(255,255,255,0.6)":"rgba(13,21,32,0.5)",textDecoration:"none",transition:"color 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.color=onDark?"#FFFFFF":"#0D1520"}
              onMouseLeave={e=>e.currentTarget.style.color=onDark?"rgba(255,255,255,0.6)":"rgba(13,21,32,0.5)"}>
              Sign In
            </Link>
            <Link to="/contact" style={{padding:"9px 20px",borderRadius:7,background:"linear-gradient(135deg,#1A50A0,#2E6CC8)",fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:600,color:"#FFFFFF",textDecoration:"none",boxShadow:"0 2px 12px rgba(26,80,160,0.28)",transition:"opacity 0.2s,transform 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.transform="translateY(-1px)"}}
              onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none"}}>
              Get Started
            </Link>
          </div>
          <button onClick={()=>setMobileOpen(o=>!o)} className="nav-mobile-btn"
            style={{background:"none",border:"none",cursor:"pointer",padding:8,display:"none",flexDirection:"column",gap:5,zIndex:10}}>
            {[0,1,2].map(i=>(
              <span key={i} style={{display:"block",width:22,height:1.5,background:onDark?"#FFFFFF":"#0D1520",borderRadius:1,transition:"all 0.25s",
                transform:mobileOpen?(i===0?"rotate(45deg) translate(4px,4px)":i===2?"rotate(-45deg) translate(4px,-4px)":"scaleX(0)"):"none",
                opacity:mobileOpen&&i===1?0:1}}/>
            ))}
          </button>
        </div>
      </header>
      <div className="nav-mobile-menu" style={{
        position:"fixed",top:68,left:0,right:0,zIndex:399,
        background:"rgba(8,15,26,0.98)",backdropFilter:"blur(20px)",
        borderBottom:"1px solid rgba(255,255,255,0.07)",
        maxHeight:mobileOpen?"100vh":"0",overflow:"hidden",
        transition:"max-height 0.4s cubic-bezier(0.25,0,0.25,1)",display:"none",
      }}>
        <div style={{padding:"24px 2rem 32px"}}>
          {NAV_ITEMS.map(item=><MobileNavItem key={item.label} item={item} onClose={()=>setMobileOpen(false)}/>)}
          <div style={{marginTop:24,display:"flex",flexDirection:"column",gap:10}}>
            <Link to="/signin" onClick={()=>setMobileOpen(false)} style={{padding:"13px",borderRadius:7,border:"1px solid rgba(255,255,255,0.1)",fontFamily:"'Inter',sans-serif",fontSize:14,fontWeight:500,color:"rgba(255,255,255,0.7)",textDecoration:"none",textAlign:"center"}}>Sign In</Link>
            <Link to="/contact" onClick={()=>setMobileOpen(false)} style={{padding:"13px",borderRadius:7,background:"linear-gradient(135deg,#1A50A0,#2E6CC8)",fontFamily:"'Inter',sans-serif",fontSize:14,fontWeight:600,color:"#FFFFFF",textDecoration:"none",textAlign:"center"}}>Request a Tour</Link>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .nav-desktop{display:none!important}
          .nav-mobile-btn{display:flex!important}
          .nav-mobile-menu{display:block!important}
        }
        @media(max-width:480px){
          .hero-grid{flex-direction:column!important}
          .hero-right{display:none!important}
        }
      `}</style>
    </>
  );
}

function LogoMark({light}){
  const t=light?"#FFFFFF":"#0D1520",s=light?"rgba(255,255,255,0.38)":"rgba(13,21,32,0.32)";
  return(
    <Link to="/" style={{display:"flex",alignItems:"center",gap:10,textDecoration:"none",flexShrink:0}}>
      <div style={{width:36,height:36,borderRadius:8,background:"linear-gradient(135deg,#1A50A0,#2E6CC8)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(26,80,160,0.35)",flexShrink:0}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.4"/>
          <circle cx="10" cy="10" r="8.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
          <line x1="10" y1="1" x2="10" y2="19" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
          <line x1="1" y1="10" x2="19" y2="10" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
        </svg>
      </div>
      <div>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:15,fontWeight:700,letterSpacing:1.5,color:t,textTransform:"uppercase",transition:"color 0.4s",display:"block",lineHeight:1.1}}>Saviour<span style={{color:"#2E6CC8"}}>360</span></span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:9,fontWeight:400,letterSpacing:3,color:s,textTransform:"uppercase",transition:"color 0.4s",display:"block",marginTop:1}}>Virtual Realty</span>
      </div>
    </Link>
  );
}

function SimpleNavLink({item,light}){
  const[h,setH]=useState(false);
  const { pathname } = useLocation();
  const isActive = pathname === item.href;
  return(
    <Link to={item.href||"#"} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{
        padding:"8px 16px",
        fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight: isActive ? 600 : 500,
        color: isActive
          ? (light?"#FFFFFF":"#1A50A0")
          : h
            ? (light?"#FFFFFF":"#0D1520")
            : (light?"rgba(255,255,255,0.65)":"rgba(13,21,32,0.5)"),
        textDecoration:"none",transition:"color 0.2s",borderRadius:6,
        borderBottom: isActive ? `2px solid ${light?"rgba(255,255,255,0.7)":"#1A50A0"}` : "2px solid transparent",
        paddingBottom: 6,
      }}>
      {item.label}
    </Link>
  );
}

function DropdownLink({item,light}){
  const[open,setOpen]=useState(false);
  const { pathname } = useLocation();
  const timer=useRef(null);
  const cancel=useCallback(()=>{if(timer.current)clearTimeout(timer.current)},[]);
  const schedule=useCallback(()=>{timer.current=setTimeout(()=>setOpen(false),220)},[]);
  const enter=useCallback(()=>{cancel();setOpen(true)},[cancel]);
  const leave=useCallback(()=>{schedule()},[schedule]);
  // Active if current page matches any dropdown child
  const isActive = item.dropdown?.some(d => pathname.startsWith(d.href.split("#")[0]) && d.href.split("#")[0].length > 1);
  return(
    <div style={{position:"relative"}} onMouseEnter={enter} onMouseLeave={leave}>
      <button style={{display:"flex",alignItems:"center",gap:4,padding:"8px 16px",paddingBottom:6,background:"none",border:"none",borderBottom: isActive ? `2px solid ${light?"rgba(255,255,255,0.7)":"#1A50A0"}` : "2px solid transparent",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight: isActive ? 600 : 500,color:open||isActive?(light?"#FFFFFF":"#1A50A0"):(light?"rgba(255,255,255,0.65)":"rgba(13,21,32,0.5)"),transition:"color 0.2s"}}>
        {item.label}
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{transition:"transform 0.2s",transform:open?"rotate(180deg)":"none"}}>
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {open&&(
        <div style={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",paddingTop:10,zIndex:500}} onMouseEnter={enter} onMouseLeave={leave}>
          <div style={{background:"#FFFFFF",borderRadius:12,padding:6,minWidth:270,boxShadow:"0 12px 48px rgba(13,21,32,0.13),0 0 0 1px rgba(13,21,32,0.05)",animation:"slideDown 0.15s ease both"}}>
            {item.dropdown.map(d=><DropdownRow key={d.label} {...d}/>)}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownRow({label,desc,href}){
  const[h,setH]=useState(false);
  return(
    <a href={href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{display:"flex",alignItems:"flex-start",gap:12,padding:"11px 13px",borderRadius:8,textDecoration:"none",background:h?"#F5F0E8":"transparent",transition:"background 0.15s"}}>
      <div style={{width:6,height:6,borderRadius:"50%",background:h?"#1A50A0":"rgba(13,21,32,0.2)",marginTop:5,flexShrink:0,transition:"background 0.15s"}}/>
      <div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:13,fontWeight:600,color:h?"#1A50A0":"#0D1520",marginBottom:1,transition:"color 0.15s"}}>{label}</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:11,color:"rgba(13,21,32,0.4)",lineHeight:1.5}}>{desc}</div>
      </div>
    </a>
  );
}

function MobileNavItem({item,onClose}){
  const[open,setOpen]=useState(false);
  return(
    <div style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
      {item.dropdown?(
        <>
          <button onClick={()=>setOpen(o=>!o)} style={{width:"100%",padding:"16px 0",background:"none",border:"none",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"'Inter',sans-serif",fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.8)"}}>
            {item.label}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{transform:open?"rotate(180deg)":"none",transition:"transform 0.2s"}}>
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          {open&&<div style={{paddingBottom:12}}>
            {item.dropdown.map(d=>(
              <a key={d.label} href={d.href} onClick={onClose}
                style={{display:"block",padding:"10px 0 10px 16px",fontFamily:"'Inter',sans-serif",fontSize:13,color:"rgba(255,255,255,0.48)",textDecoration:"none",borderLeft:"1px solid rgba(46,108,200,0.3)",marginLeft:8}}>
                {d.label}
              </a>
            ))}
          </div>}
        </>
      ):(
        <Link to={item.href} onClick={onClose} style={{display:"block",padding:"16px 0",fontFamily:"'Inter',sans-serif",fontSize:15,fontWeight:500,color:"rgba(255,255,255,0.8)",textDecoration:"none"}}>
          {item.label}
        </Link>
      )}
    </div>
  );
}
