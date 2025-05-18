import { KiteConnect } from "kiteconnect";

const apiKey = "7xxmn3o7fhsvzt2r";
//const apiSecret = "2atuietasplt3ptdkmvfep0k1mdjp92s";
//const requestToken = "V45U7umJNwB6M1b2086ISDq3z2JY7g1Z";
let access_token = "a7S32Ql4MZyEkMtzL8d5dYD9gp5Nlt4p";

const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());
async function init() {
  try {
    kc.setAccessToken(access_token)
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}


async function getProfile() {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: "HDFCBANK",
      transaction_type: "BUY",
      quantity: 1,
      product: "CNC",
      order_type: "MARKET",
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls
init();