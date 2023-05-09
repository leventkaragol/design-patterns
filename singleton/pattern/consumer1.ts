import {LoadBalancer} from "./load-balancer";

export class Consumer1 {

    public static run(): void {

        const loadBalancer: LoadBalancer = LoadBalancer.getInstance();

        setInterval(async () => {

            const responseData = await loadBalancer.callEndpoint();

        }, 1000);
    }
}