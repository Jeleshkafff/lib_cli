import express from "express";
import mssql from "mssql/msnodesqlv8";
import { db } from "./database";
import { appRouter } from "./routes";
const app = express();
const port = 666;
app.use(express.json())
app.use("/", appRouter);

app.listen(port, async () => {
  console.log(port);
  db.connection = await mssql.connect({
    database: "library",
    server: "HP39-6",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
  });
});
