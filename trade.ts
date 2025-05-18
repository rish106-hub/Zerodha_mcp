import { KiteConnect } from "kiteconnect";

const apiKey = "7xxmn3o7fhsvzt2r";
//const apiSecret = "2atuietasplt3ptdkmvfep0k1mdjp92s";
//const requestToken = "V45U7umJNwB6M1b2086ISDq3z2JY7g1Z";
let access_token = "a7S32Ql4MZyEkMtzL8d5dYD9gp5Nlt4p";

const kc = new KiteConnect({ api_key: apiKey });

export async function placeOrder(tradingsymbol:string, quantity:number,type: "BUY" | "SELL" ) {
  try {
    kc.setAccessToken(access_token)
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      transaction_type: type,
      quantity,
      product: "CNC",
      order_type: "MARKET",
    });
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

