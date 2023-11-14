import "./App.css";
import { motion } from "framer-motion";
import NavBar from "./components/navbar/NavBar";
import AboutInfo from "./components/aboutinfo/AboutInfo";
import LandingInfo from "./components/landinginfo/LandingInfo";
import CompleteProjects from "./components/completeprojects/CompleteProjects";
import CurrentProjects from "./components/currentprojects/CurrentProjects";
import ContactInfo from "./components/contactinfo/ContactInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingInfo />
      <AboutInfo />
      <CompleteProjects />
      <CurrentProjects />
      <ContactInfo />
    </div>
  );
}

export default App;
