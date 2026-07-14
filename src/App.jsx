import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Header />

      <h2>Today's Tasks</h2>

      <ul>
        <Todo task="Learn React" />
        <Todo task="Learn JavaScript" />
        <Todo task="Learn HTML" />
        <Todo task="Learn CSS" />
      </ul>

      <Footer />
    </>
  );
}

export default App;