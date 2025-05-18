import { KiteConnect } from "kiteconnect";

const apiKey = "7xxmn3o7fhsvzt2r";
const apiSecret = "2atuietasplt3ptdkmvfep0k1mdjp92s";
const requestToken = "dC8cu7UUckUiuO1T8b8bSx7Ybb61VwY4";
let access_token = "";

const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());
async function init() {
  try {
    await generateSession();
    await getProfile();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    console.log(response.access_token);
    kc.setAccessToken(response.access_token);
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
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