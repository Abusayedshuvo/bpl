import { use } from "react";
import PlayersCard from "./PlayersCard";

const AvailablePlayers = ({ playerPromos }) => {
  const playerData = use(playerPromos);
  return (
    <div className="grid grid-cols-3 gap-5 container mx-auto my-20">
      {playerData.map((player, index) => (
        <PlayersCard key={index} player={player}></PlayersCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
