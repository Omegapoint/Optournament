import ScoreBoard from "./ScoreBoard";
import "./Home.css";
import Menu from "./Menu";

const Home = () => {
  return (
    <div className="wrapper">
      <Menu />
      <div className="content-wrapper">
        <div className="title">
          <h1>Scoreboard </h1>
        </div>
        <ScoreBoard />
      </div>
      <div className="content-wrapper">
        <div className="title">
          <h1>Scoreboard </h1>
        </div>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default Home;
