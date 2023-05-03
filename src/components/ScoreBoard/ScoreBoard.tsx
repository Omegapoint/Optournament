import "./ScoreBoard.css";
import jsonObject from "../../scoreResponse.json";

interface ScoreItem {
  player1: string;
  player2: string;
  score: string;
}

let scoreInfo = jsonObject.response as ScoreItem[];

const ScoreBoard = () => {
  return (
    <table>
      <tr>
        <th>Player1</th>
        <th>Player2</th>
        <th>Score</th>
      </tr>
      {scoreInfo.length === 0
        ? []
        : scoreInfo.map((e: any) => (
            <tr>
              <td>{e.player1}</td>
              <td>{e.player2}</td>
              <td>{e.score}</td>
            </tr>
          ))}
    </table>
  );
};

export default ScoreBoard;
