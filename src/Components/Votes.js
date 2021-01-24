import React, { useState } from "react";
import "./Votes.css"; //import CSS file

function Votes() {
  const [count, setCount] = useState(0);
  const [chocolateCount, setChocolateCount] = useState(0);
  const [vanillaCount, setVanillaCount] = useState(0);
  const [strawberryCount, setStrawberryCount] = useState(0);
  function chocolate() {
    setCount(count + 1);
    setChocolateCount(chocolateCount + 1);
  }
  function vanilla() {
    setCount(count + 1);
    setVanillaCount(vanillaCount + 1);
  }
  function strawberry() {
    setCount(count + 1);
    setStrawberryCount(strawberryCount + 1);
  }

  return (
    <div className="Votes">
      <h3>Votes</h3>

      <table>
        <tr>
          <td className="Choices">Chocolate:</td>
          {count !== 0 ? (
            <td>
              {chocolateCount} ({Math.round((chocolateCount / count) * 100)}%)
            </td>
          ) : (
            <td>0%</td>
          )}
        </tr>
        <tr width="20"></tr>
        <tr>
          <td className="Choices">Vanilla:</td>
          {count !== 0 ? (
            <td>
              {vanillaCount} ({Math.round((vanillaCount / count) * 100)}%)
            </td>
          ) : (
            <td>0%</td>
          )}
        </tr>
        <tr>
          <td className="Choices">Strawberry:</td>
          {count !== 0 ? (
            <td>
              {strawberryCount} ({Math.round((strawberryCount / count) * 100)}%)
            </td>
          ) : (
            <td>0%</td>
          )}
        </tr>
        {/* <tr>
          <td className="Choices">Total Votes:</td>
          <td>{count}</td>
        </tr> */}
      </table>
      <br></br>
      <br></br>

      <button onClick={chocolate}>Chocolate</button>
      <button onClick={vanilla}>Vanilla</button>
      <button onClick={strawberry}>Strawberry</button>
    </div>
  );
}
export default Votes;
