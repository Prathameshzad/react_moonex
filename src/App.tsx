import {useEffect, useState} from "react";
import "./App.css";
import HeroPage from "./components/sections/HeroPage";
import Navbar from "./components/sections/Navbar";
import Merge from "./components/sections/Merge";
import FooterSection from "./components/sections/FooterSection";
import Preloader from "./components/preloader/Preloader";
function App() {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
	  const timer = setTimeout(() => {
		setLoading(false);
	  }, 2000);
  
	  return () => clearTimeout(timer);
	}, []);
  
	return (
		<div>
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          <Navbar />
          <HeroPage />
          <Merge/>
          <FooterSection/> 
        </>
      )}
    </div>
	);
}

export default App;	
