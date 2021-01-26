import Card from "./Card";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card title="hero" height="85vh" color="#585123" zIndex="5" />
      <Card title="about" height="85vh" color="#EEC170" zIndex="4" />
      <Card title="skills" height="55vh" color="#F2A65A" zIndex="3" />
      <Card title="projects" height="75vh" color="#F58549" zIndex="2" />
      <Card
        title="footer"
        height="25vh"
        color="#772F1A"
        zIndex="5"
        footer="true"
      />
    </>
  );
}

export default App;
