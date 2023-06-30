import {USDTRYService} from "./usdtry-service";
import {EURTRYService} from "./eurtry-service";
import {GBPTRYService} from "./gbptry-service";

const usdtryService = new USDTRYService();
const eurtryService = new EURTRYService();
const gbptryService = new GBPTRYService();

const usdtryData = usdtryService.getHistoricalData("json");

console.log(usdtryData);

console.log();

const eurtryData = eurtryService.getHistoricalData("xml");

console.log(eurtryData);

console.log();

const gbptryData = gbptryService.getHistoricalData("json");

console.log(gbptryData);
