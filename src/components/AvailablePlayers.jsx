import { use } from "react";
import PlayersCard from "./PlayersCard";

const AvailablePlayers = ({
  playerPromos,
  setAvailableBalance,
  availableBalance,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  const playerData = use(playerPromos);
  return (
    <div className="grid grid-cols-3 gap-5 container mx-auto my-10">
      {playerData.map((player, index) => (
        <PlayersCard
          key={index}
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          setSelectedPlayer={setSelectedPlayer}
          selectedPlayer={selectedPlayer}
        ></PlayersCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
