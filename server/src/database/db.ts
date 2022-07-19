import * as dotenv from "dotenv";
dotenv.config();

import moongose from 'mongoose';

export async function connectDB(): Promise<void>{
  await moongose.connect(process.env.DATABASE_URL as string)
  .then(() => console.log('[DATABASE] MoongoDB connect'))
    .catch((error) => console.log(error));
}