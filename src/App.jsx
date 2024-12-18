import React from "react";

// import CleaningWebsite from "./CleaningWebsite";
import LandingPage from "./LandingPage";
import WhyChooseUs from "./WhyChooseUs";
import CleanerSection from "./CleanerSection";
import TeamSection from "./TeamSection";
import StatsAndNews from "./StatsAndNews";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBar from "./pages/TopBar";

function App() {
  return (
  <>
      {/* <TopBar/>
      <NavBar/> */}
  <LandingPage /><WhyChooseUs />
  <CleanerSection/>
  <TeamSection/>
  <StatsAndNews/>
  <Footer/>
  </>
  );
}

export default App;
