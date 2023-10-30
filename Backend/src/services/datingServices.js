import { userModel } from '../models/user.js'
import { MongooseDriver } from '../DbDrivers/mongooseDrivers.js'

const dbDriver = new MongooseDriver(userModel)
const getUsers = async() => {
    let response = await dbDriver.find()
    return response
}

export const datingServices = {
    getUsers
}

