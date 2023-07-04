import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FormConverter from "./Components/Form/FormConverter";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FormConverter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
