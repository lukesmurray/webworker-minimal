import { msg } from "./importWorker";

declare let self: ServiceWorkerGlobalScope;

self.onmessage = (e) => {
  console.log("worker received:", e);

  postMessage(msg + Math.random());
};
