import express, { Application } from "express";
import { studentRouter } from "./application/student/route"


const app: Application = express();

app.use(express.json());

app.use("/api/students", studentRouter);

export { app };