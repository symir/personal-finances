import React, { useState } from "react";
import styled, { css } from "styled-components";

// import "./App.css";

import { Button } from "./components";
import { Input } from "./components";

// Styles

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Column = styled.div``;
const Section = styled.div`
  text-align: center;
  margin: 5vh;
  width: 100%;
  padding: 10px;
`;
const ListItems = styled.ul`
  text-align: left;
  background-color: #1f2126;
  margin: 0;
  position: relative;
  list-style-type: none;
  padding-left: 2.5rem;
  margin-bottom: 0.5rem;
`;

// Logic

const data = [];

const App = () => {
  const [stateList, setList] = useState([]);
  const [stateValue, setValue] = useState("");
  const [stateCost, setCost] = useState(0);
  const [stateSum, setSum] = useState(0);

  const handleOnChangeValue = (event) => {
    console.log(stateValue + " : " + stateCost);
    setValue(event.target.value);
  };

  const handleOnChangeCost = (event) => {
    console.log(stateValue + " : " + stateCost);
    setCost(Number(event.target.value));
  };

  const handleOnClick = () => {
    console.log("onClick: " + stateValue + stateCost);

    setList(data.push([stateValue, stateCost]));
    setCost(0);
    setValue("");
    data.forEach((item) => setSum(stateSum + item[1]));

    console.log("OnClick Over: " + stateValue + stateCost);
  };

  return (
    <Container>
      <Column>
        <Section>
          <Input
            onChange={handleOnChangeValue}
            value={stateValue}
            type="text"
          />
          <Input
            onChange={handleOnChangeCost}
            value={stateCost}
            type="number"
          />{" "}
          <Button handleOnClick={handleOnClick} />
        </Section>
      </Column>
      <Column>
        <Section>
          <ListItems>
            <p>Items</p>
            <table>
              {data.map((item) => (
                <tr>
                  <td key={item[0]}>{item[0]}</td>
                  <td key={item[1]}>{item[1]}</td>
                </tr>
              ))}
              <p>Total Expenses: {stateSum}</p>
            </table>
          </ListItems>
        </Section>
      </Column>
    </Container>
  );
};
export default App;
