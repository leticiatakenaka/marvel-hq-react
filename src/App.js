import Routes from "./routes";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="body">
      <Nav />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
