import React from "react";
import { testWorker } from "./testWorker";

const worker = testWorker.setup();

// sending the message here works
// worker.send();

function App() {
  // sending the message in a use effect works
  // useEffect(() => {
  //   worker.send();
  // }, []);

  console.log("render");

  // sending a message directly in the render call leads to duplicates
  worker.send();

  return (
    <div style={{ maxWidth: "35rem" }}>
      Reproduction in the console. The App renders once, sends one message to
      the worker, but somehow the contents of `worker.postMessage` are evaluated
      twice. The worker receieves two messages and sends two messages back to
      the client.
    </div>
  );
}

export default App;
