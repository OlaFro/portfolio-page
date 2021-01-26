import Card from "./Card";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Card title="hero" height="85vh" color="black" zIndex="5" />
      <Card title="about" height="50vh" color="green" zIndex="4" />
      <Card title="skills" height="55vh" color="lightblue" zIndex="3" />
      <Card title="projects" height="75vh" color="gray" zIndex="2" />
      <Card
        title="footer"
        height="25vh"
        color="black"
        zIndex="5"
        footer="true"
      />
    </>
  );
}

export default App;
