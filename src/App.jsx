import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";
import { useWow } from "./lib/hooks/useWow";
import { DirectorMessage } from "./pages/course/CoursesGridView";
import { About } from "./pages/about/About";
import { Error } from "./pages/error/Error";
import {  Logos } from "./pages/Logo/Logos";
import { Feedform} from "./pages/feedback/feedform";
import { Accounts } from "./pages/account/Accounts";
import { Membership } from "./pages/blogs/BlogWithSidebar";
import { Contact } from "./pages/contact/Contact";
import { Carrer } from "./pages/carrers/carrer";

function App() {
  useWow();

 
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      
      <Route path="/messages" element={<DirectorMessage />} />
      
      <Route path="/about" element={<About />} />
      
      <Route path="/logos" element={<Logos />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/feedback" element={<Feedform />} />
      <Route path="/contribute" element={<Membership />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/carrers" element={<Carrer />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
