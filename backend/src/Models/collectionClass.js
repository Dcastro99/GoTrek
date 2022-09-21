class Collection {
    constructor(model, app) {
        this.model = model;
    }
    async getList(req, res) {
        const thing = await this.model.findAll();
        res.status(200).send(thing);
    }
}