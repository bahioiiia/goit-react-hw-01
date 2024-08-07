import Header from "../Header/Header";
import PilotList from "../PilotList/PilotList";
import officers from "../../officers.json";

export default function App() {
  return (
    <div>
      <React.StrictMode>
      <Header />
        <PilotList pilots={officers} />
      </React.StrictMode>
    </div>
  );
}
