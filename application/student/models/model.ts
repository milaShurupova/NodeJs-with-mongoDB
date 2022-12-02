import { Collection } from "mongodb"
import { db } from "../../../mondoDB/mongoDB"
import { IStudent } from "../interface/student.interface"

export const StudentCollection: Collection<IStudent> =
    db.collection<IStudent>("students");