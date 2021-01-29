import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled components/theme";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
