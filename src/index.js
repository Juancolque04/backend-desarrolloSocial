import app from './app.js';
import { PORT } from './config.js';
import { connectDB } from "./db.js";

async function main() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
  
main();
