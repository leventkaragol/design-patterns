import endpoints from "./endpoints.json";

export class LoadBalancer {

    private endpoints: string[];
    private currentIndex: number;

    public constructor() {

        this.endpoints = endpoints;
        this.currentIndex = 0;
    }

    public async callEndpoint(): Promise<any> {

        if (this.endpoints.length === 0) {

            throw new Error("Kayıtlı Endpoint bulunamadı");
        }

        const currentEndpoint = this.endpoints[this.currentIndex];

        console.log(`Kullanılan Endpoint: (${this.currentIndex}), ${currentEndpoint}`);

        this.currentIndex = (this.currentIndex + 1) % this.endpoints.length;

        return fetch(currentEndpoint);
    }
}