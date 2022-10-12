import './style.css';
import { useWorker } from './workerConnection';
const {log} = useWorker()
const imageLoader = document.getElementById('image-loader');
if (!imageLoader || !(imageLoader instanceof HTMLInputElement))
  throw 'Cannot find #image-loader input';
imageLoader.addEventListener('input', async (ev) => {
  if (!imageLoader.files) return;
  const buf = await imageLoader.files[0].arrayBuffer();
  await log(buf)
});
