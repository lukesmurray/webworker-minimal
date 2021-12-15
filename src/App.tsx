import React from "react";
import { testWorker } from "./testWorker";

const worker = testWorker.setup();

function App() {
  worker.send();
  return <></>;
}

export default App;
