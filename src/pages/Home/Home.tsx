import PrimaryButton from "../../components/Button/PrimaryButton";
import Menu from "../../components/Menu/Menu";
import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import Modal from "../../components/UI/Modal";
import useModal from "../../Hooks/useModal";
import "./Home.css";

const Home = () => {
  const titleCopy = "Resultattavla";
  const addResultCopy = "Lägg till resultat";

  const { isOpen, toggle } = useModal();
  return (
    <div className="wrapper">
      <Menu />
      <div className="content-wrapper">
        <div className="title">
          <img
            className="titleBackground"
            alt="pingpong background"
            src="pingpong.jpeg"
          />
          <h1>{titleCopy}</h1>
        </div>
        <PrimaryButton onClick={toggle}>{addResultCopy}</PrimaryButton>
        <ScoreBoard />
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <label htmlFor="player1">player1:</label>
        <input type="text" id="player1" name="player1" placeholder="Sven" />
        <label htmlFor="player1">player2:</label>
        <input type="text" id="player1" name="player1" placeholder="Sven" />
        <label htmlFor="player1">score:</label>
        <input type="text" id="player1" name="player1" placeholder="Sven" />
      </Modal>
    </div>
  );
};

export default Home;
