import {OrderFacade} from "./order-facade";

const orderFacade = new OrderFacade();

// SİPARİŞ VERME İŞLEMİ
orderFacade.placeOrder("user01", "batarya01");

console.log();

// SİPARİŞ İPTAL İŞLEMİ
orderFacade.cancelOrder("XYZ123");
