import * as React from "react";
import * as ReactDOM from "react-dom";
import { Welcome } from "./Welcome";
import styled from "styled-components";

const Styles = styled.div`
  background-color: white;
  height: 100vh;
`;

ReactDOM.render(
  <Styles>
    <Welcome />,
  </Styles>,
  document.getElementById("root")
);
