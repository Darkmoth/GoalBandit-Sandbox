import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div>
      <h1 className="App">Observations</h1>
      <h2>Project: Project One</h2>
      <h3>Observations</h3>
      <ul>
        <li>Prop1: Val1</li>
        <li>Prop1: Val1</li>
        <li>Prop1: Val1</li>
        <li>Prop1: Val1</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Goal</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/1/19</td>
            <td>10</td>
            <td>9</td>
          </tr>
          <tr>
            <td>12/2/19</td>
            <td>12</td>
            <td>14</td>
          </tr>
          <tr>
            <td>12/3/19</td>
            <td>9</td>
            <td>9</td>
          </tr>
          <tr>
            <td>12/3/19</td>
            <td>9</td>
            <td>
              <input type="text" />
              <button>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
