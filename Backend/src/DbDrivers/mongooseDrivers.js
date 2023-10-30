export class MongooseDriver {
    constructor(model) {
        this.model = model
    }
    
    find() {
        return this.model.find()
    }
}