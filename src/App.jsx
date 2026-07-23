import { lazy, Suspense } from "react";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import Navbar from "./components/NavBar";

const Contact = lazy(() => import("./sections/Contact"));
const TechStack = lazy(() => import("./sections/TechStack"));
const QACases = lazy(() => import("./sections/QACases"));

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <Suspense fallback={null}>
      <TechStack />
    </Suspense>
    <Suspense fallback={null}>
      <QACases />
    </Suspense>
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
    <Footer />
  </>
);

export default App;
