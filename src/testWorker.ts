import Worker from "./worker?worker";

export const testWorker = {
  setup() {
    const worker = new Worker();
    worker.addEventListener("message", (e) => {
      console.log("main thread received:", e);
    });
    return {
      send() {
        console.log("send is called once");
        worker.postMessage("ping" + Math.random());
      },
    };
  },
};
