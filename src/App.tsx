import { Provider } from "react-redux";

import { TrackerForm } from "./VaccineTracker/TrackerForm";
import { store } from "./Store/index";

function App() {
  return (
    <Provider store={store}>
      <TrackerForm />
    </Provider>
  );
}

export default App;
