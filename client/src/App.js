import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Add from "./pages/Add";
import { NewContextProvider } from "./context/NewContext";

function App() {

  return (
    <>
    <NewContextProvider>
    <Navbar></Navbar>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/Clients"element={<Clients/>}/>
       <Route path="/portfolio" element={<Portfolio/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/services" element={<Services/>}/>
       <Route path="/skill" element={<Skill/>}/>
       <Route path="/team" element={<Team/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/add" element={<Add/>}/>
    </Routes>
    </NewContextProvider>
    </>
  );
}

export default App;
