# Address

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Address/api](https://m3o.com/Address/api).

Endpoints:

## LookupPostcode

Lookup a list of UK addresses by postcode

[https://m3o.com/address/api#LookupPostcode](https://m3o.com/address/api#LookupPostcode)

```js
const { AddressService } = require("m3o/address");

const addressService = new AddressService(process.env.M3O_API_TOKEN);

// Lookup a list of UK addresses by postcode
async function lookupPostcode() {
  const rsp = await addressService.lookupPostcode({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

lookupPostcode();
```
