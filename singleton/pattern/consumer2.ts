import {LoadBalancer} from "./load-balancer";

export class Consumer2 {

    public static run(): void {

        const loadBalancer: LoadBalancer = LoadBalancer.getInstance();

        setInterval(async () => {

            const responseData = await loadBalancer.callEndpoint();

        }, 600);
    }
}