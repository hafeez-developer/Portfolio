import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { darkMode, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" exit={{ opacity: 0 }}>
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="min-h-screen"
          >
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
            <main id="home">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
