# Vehicle

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Vehicle/api](https://m3o.com/Vehicle/api).

Endpoints:

## Lookup

Lookup a UK vehicle by it's registration number

[https://m3o.com/vehicle/api#Lookup](https://m3o.com/vehicle/api#Lookup)

```js
const { VehicleService } = require("m3o/vehicle");

const vehicleService = new VehicleService(process.env.M3O_API_TOKEN);

// Lookup a UK vehicle by it's registration number
async function lookupVehicle() {
  const rsp = await vehicleService.lookup({
    registration: "LC60OTA",
  });
  console.log(rsp);
}

lookupVehicle();
```
