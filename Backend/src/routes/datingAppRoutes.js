import { Router } from 'express'
import { datingController } from '../controllers/datingControllers.js'

export const datingAppRouter = Router()

datingAppRouter.get('/', datingController.itsALive)
datingAppRouter.get('/getusers', datingController.getUsers)