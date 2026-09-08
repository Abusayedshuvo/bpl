import userImg from "../assets/user.png";
import flagImg from "../assets/report.png";
import { useState } from "react";

const PlayersCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleBalance = (playerData) => {
    if (availableBalance < playerData.price) {
      alert("Your balance is low");
      return;
    }
    setAvailableBalance(availableBalance - playerData.price);
    setIsSelected(true);
    setSelectedPlayer([...selectedPlayer, player]);
  };
  const {
    battingStyle,
    bowlingStyle,
    origin,
    playerImg,
    playerName,
    playerType,
    price,
  } = player;
  return (
    <div className="card border border-gray-200 p-4 rounded-2xl ">
      <img className="rounded-lg" src={playerImg} alt="" />
      <div className="flex gap-2 mt-4">
        <img src={userImg} alt="" />
        <p className="font-bold">{playerName}</p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
          <img src={flagImg} alt="" />
          <p className="font-bold">{origin}</p>
        </div>
        <span className="bg-gray-200 rounded px-4 py-2">{playerType}</span>
      </div>
      <hr className="mt-5 border-gray-200" />
      <div className="flex justify-between mt-3">
        <p className="font-bold">Rating</p>
        <p></p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="font-bold">Batting style</p>
        <p>{battingStyle} </p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="font-bold">Bolling style</p>
        <p>{bowlingStyle} </p>
      </div>
      <div className="flex justify-between mt-3">
        <p className="font-bold">
          Price: $ <span>{price}</span>
        </p>
        <button
          onClick={() => handleBalance(player)}
          disabled={isSelected}
          className="btn btn-light"
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayersCard;
