import logo from "../assets/logo.png";
import dollarImg from "../assets/dollar-1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar  container mx-auto">
      <div className="flex-1">
        <a className=" ">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <div className="flex gap-2 items-center">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
