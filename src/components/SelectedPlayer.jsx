import deleteIcon from "../assets/delete.png";

const SelectedPlayer = ({
  selectedPlayer,
  removeItem,
  setAvailableBalance,
  availableBalance,
}) => {
  const handleRemoveItem = (player) => {
    removeItem(player);
    setAvailableBalance(availableBalance + player.price);
  };
  return (
    <div className="container mx-auto mt-10">
      {selectedPlayer.map((player, index) => (
        <div
          key={index}
          className="border border-gray-200 p-4 rounded-2xl flex justify-between mb-5"
        >
          <div className="flex gap-3">
            <img className="w-10 h-10" src={player.playerImg} alt="" />
            <div>
              <p className="font-bold"> {player.playerName} </p>
              <p> {player.playerType} </p>
            </div>
          </div>
          <button onClick={() => handleRemoveItem(player)}>
            <img src={deleteIcon} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayer;
