import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import "./Home.css";
import Menu from "./components/Menu/Menu";
import { Link } from "react-router-dom";
import Modal from "./components/UI/Modal";

const Home = () => {
  return (
    <div className="wrapper">
      <Menu />
      <div className="content-wrapper">
        <div className="title">
          <h1>Scoreboard</h1>
        </div>
        <div className="button">
          <Link to="/report-game">Lägg till resultat</Link>
        </div>
        <ScoreBoard />
      </div>
      <Modal />
    </div>
  );
};

export default Home;
