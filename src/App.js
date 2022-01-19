import Form from "./Form";
import Toaster from "./Toaster";
import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <Toaster>
      <GlobalStyle />
      <Form />
    </Toaster>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }
`;
