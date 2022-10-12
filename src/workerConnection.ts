import { wrap } from 'comlink';
//@ts-ignore
import MyWorker from "./worker?worker"

export const useWorker = () => {
  const worker: Worker = new MyWorker()
  const proxiedWorker = wrap<typeof import('./worker')>(worker);
  return proxiedWorker;
};
