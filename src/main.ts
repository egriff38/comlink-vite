import { getImageLoader } from "./imageLoader";
import "./style.css";
import { useWorker } from "./workerConnection";
const { log } = useWorker();
const imageLoader = getImageLoader();
imageLoader.addEventListener("input", async (ev) => {
  if (!imageLoader.files) return;
  const buf = await imageLoader.files[0].arrayBuffer();
  await log(buf);
});
