import {USDTRY} from "./usdtry";
import {EURTRY} from "./eurtry";
import {GBPTRY} from "./gbptry";
import {JSONFormatter} from "./json-formatter";
import {XMLFormatter} from "./xml-formatter";
import {CurrencyService} from "./currency-service";

const usdtryService = new CurrencyService(new USDTRY(), new JSONFormatter());
const eurtryService = new CurrencyService(new EURTRY(), new XMLFormatter());
const gbptryService = new CurrencyService(new GBPTRY(), new JSONFormatter());

const usdtryData = usdtryService.getHistoricalData();

console.log(usdtryData);

console.log();

const eurtryData = eurtryService.getHistoricalData();

console.log(eurtryData);

console.log();

const gbptryData = gbptryService.getHistoricalData();

console.log(gbptryData);
