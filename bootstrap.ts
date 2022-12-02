import { connect } from "./mondoDB/mongoDB"

export const bootstrap = async (cb: Function) => {
    await connect();
    console.log("mongoDb connected");
    cb();
}