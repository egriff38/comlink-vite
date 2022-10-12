import { expose } from "comlink"

export const log = (a: ArrayBuffer) => {
  console.log("Hello from Worker", a)
}
expose({log})