module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async run() {
        this.client.dash.load(this.client);
    }
};