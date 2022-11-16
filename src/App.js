import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Uslugi from "./Components/Uslugi";
import Preim from "./Components/Preim";
import Razm from "./Components/Razm";
import FormsBlock from "./Components/FormsBlock";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <Uslugi/>
      <Preim/>
      <Razm/>
      <FormsBlock/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
