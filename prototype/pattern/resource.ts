export class Resource {
    constructor(public resourceName: string, public quantity: number) {
    }

    clone(): Resource {
        return new Resource(this.resourceName, this.quantity);
    }
}