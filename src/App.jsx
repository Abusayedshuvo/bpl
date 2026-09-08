import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectedPlayer from "./components/SelectedPlayer";
const playerFetch = async () => {
  const  res = await fetch('/data.json')
  return res.json()
}
const playerPromos = playerFetch()



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div className="container mx-auto text-center"><span className="loading loading-spinner loading-xl"></span></div>}>  
        <AvailablePlayers playerPromos={playerPromos}></AvailablePlayers>
      </Suspense>
      <SelectedPlayer></SelectedPlayer>
    </>
  );
}

export default App;
