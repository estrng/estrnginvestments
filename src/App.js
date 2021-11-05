import Header from "./components/Header";
import Investiments from "./components/Investiments";
import Main from "./components/Main";

export default function App() {
  return (
    <div>
      <Header>
        <h1 className="text-center font-semibold text-xl">
          React investiments
        </h1>
      </Header>
      <Main>
        <Investiments />
      </Main>
    </div>
  );
}
