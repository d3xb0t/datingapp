import { datingServices } from "../services/datingServices.js"

const itsALive = (requests, response) => {
    response.status(200).send("ist a live")
}

const getUsers =async(requests, response) => {
    try {
        const query = await datingServices.getUsers()
        console.log(query)
        response.status(200).json(query)
    } catch (err) {
        response.status(200).json({
            status: 500,
            message: err.message
        })
    }
}



export const datingController = {
    itsALive,
    getUsers
}