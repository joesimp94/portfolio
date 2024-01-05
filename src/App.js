import "./App.css";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
// import NavBar from "./components/navbar/NavBar";
import AboutInfo from "./components/aboutinfo/AboutInfo";
import LandingInfo from "./components/landinginfo/LandingInfo";
import CompleteProjects from "./components/completeprojects/CompleteProjects";
import CurrentProjects from "./components/currentprojects/CurrentProjects";
import ContactInfo from "./components/contactinfo/ContactInfo";

function App() {
  const controlLandingInfo = useAnimation();
  const controlAboutInfo = useAnimation();
  const controlCompleteProjects = useAnimation();
  const controlCurrentProjects = useAnimation();
  const controlContactInfo = useAnimation();

  const refLandingInfo = useRef(null);
  const refAboutInfo = useRef(null);
  const refCompleteProjects = useRef(null);
  const refCurrentProjects = useRef(null);
  const refContactInfo = useRef(null);

  const isInView = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isInView(refLandingInfo.current)) {
        controlLandingInfo.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controlLandingInfo.start({ opacity: 0, y: 50 });
      }

      if (isInView(refAboutInfo.current)) {
        controlAboutInfo.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controlAboutInfo.start({ opacity: 0, y: 50 });
      }

      if (isInView(refCompleteProjects.current)) {
        controlCompleteProjects.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controlCompleteProjects.start({ opacity: 0, y: 50 });
      }

      if (isInView(refCurrentProjects.current)) {
        controlCurrentProjects.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controlCurrentProjects.start({ opacity: 0, y: 50 });
      }

      if (isInView(refContactInfo.current)) {
        controlContactInfo.start({
          opacity: 1,
          y: 0,
        });
      } else {
        controlContactInfo.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    controlLandingInfo,
    controlAboutInfo,
    controlCompleteProjects,
    controlCurrentProjects,
    controlContactInfo,
    refLandingInfo,
    refAboutInfo,
    refCompleteProjects,
    refCurrentProjects,
    refContactInfo,
  ]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <motion.div
        ref={refLandingInfo}
        initial={{ opacity: 0, y: 50 }}
        animate={controlLandingInfo}
      >
        <LandingInfo />
      </motion.div>
      <motion.div
        ref={refAboutInfo}
        initial={{ opacity: 0, y: 50 }}
        animate={controlAboutInfo}
      >
        <AboutInfo />
      </motion.div>
      <motion.div
        ref={refCompleteProjects}
        initial={{ opacity: 0, y: 50 }}
        animate={controlCompleteProjects}
      >
        <CompleteProjects />
      </motion.div>

      <motion.div
        ref={refCurrentProjects}
        initial={{ opacity: 0, y: 50 }}
        animate={controlCurrentProjects}
      >
        <CurrentProjects />
      </motion.div>
      <motion.div
        ref={refContactInfo}
        initial={{ opacity: 0, y: 50 }}
        animate={controlContactInfo}
      >
        <ContactInfo />
      </motion.div>
    </div>
  );
}

export default App;
