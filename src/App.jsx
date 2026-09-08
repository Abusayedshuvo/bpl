import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectedPlayer from "./components/SelectedPlayer";
const playerFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const playerPromos = playerFetch();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(2000);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="container mx-auto flex justify-between mt-10">
        <p className="text-2xl font-bold">Available Players</p>
        <div className="flex font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`border border-r-0 border-gray-200 px-6 py-3 rounded-xl   rounded-r-none ${toggle && "bg-[#E7FE29]"}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-l-0 border-gray-200 px-6 py-3 rounded-xl rounded-l-none ${!toggle && "bg-[#E7FE29]"}`}
          >
            Selected (0)
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <div className="container mx-auto text-center mt-10">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
            playerPromos={playerPromos}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            setSelectedPlayer={setSelectedPlayer}
            selectedPlayer={selectedPlayer}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
      )}
    </>
  );
}

export default App;
