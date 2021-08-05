import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Objectives from "./sections/Objectives";
import campesinosBgURL from "./assets/images/desktop/campesinos.jpg"
import Program from "./sections/Program";
import señoraBgURL from "./assets/images/desktop/señora.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Objectives />
      <section style={{backgroundImage: `url(${campesinosBgURL})`, height: '100vh'}}></section>
      <Program />
      <section style={{backgroundImage: `url(${señoraBgURL})`, height: '100vh'}}></section>
    </div>
  );
}

export default App;