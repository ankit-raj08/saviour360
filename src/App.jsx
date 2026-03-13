import { Outlet, useLocation } from "react-router-dom";
import "./styles/globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  const { pathname } = useLocation();
  const isAuthPage = pathname === "/signin";
  return (
    <>
      <style>{`
        /* Full responsive system */
        @media(max-width:900px){
          section { padding-top:72px !important; padding-bottom:72px !important; }
          section > div { padding-left:1.5rem !important; padding-right:1.5rem !important; }
        }
        @media(max-width:600px){
          section { padding-top:56px !important; padding-bottom:56px !important; }
          section > div { padding-left:1.25rem !important; padding-right:1.25rem !important; }
          .hero-right-col { display:none !important; }
        }
        /* Inline grid overrides — targets divs containing repeat grids */
        @media(max-width:900px){
          div[style*="repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="1fr 1.6fr"]      { grid-template-columns: 1fr !important; }
          div[style*="1fr 300px"]      { grid-template-columns: 1fr !important; }
        }
        @media(max-width:640px){
          div[style*="repeat(4, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          div[style*="1fr 1fr"]        { grid-template-columns: 1fr !important; }
          div[style*="1.8fr 1fr"]      { grid-template-columns: 1fr !important; }
          /* Pricing/card grids */
          div[style*="gridTemplateColumns: \"1fr 1fr 1fr\""] { grid-template-columns: 1fr !important; }
          /* Footer grid */
          div[style*="1.8fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
        }
        /* Testimonial side cards stack */
        @media(max-width:760px){
          div[style*="1fr 1fr 1fr"][style*="14px"] { grid-template-columns: 1fr !important; }
        }
        /* Aerial visual hide on small */
        @media(max-width:640px){
          #aerial .aerial-visual { display:none !important; }
        }
        /* Embed demo browser chrome */
        @media(max-width:760px){
          div[style*="repeat(4,1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <Navbar />
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}
