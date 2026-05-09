"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ApiError: () => ApiError,
  AssetType: () => AssetType,
  COLLATERAL_TOKEN_DECIMALS: () => COLLATERAL_TOKEN_DECIMALS,
  CONDITIONAL_TOKEN_DECIMALS: () => CONDITIONAL_TOKEN_DECIMALS,
  Chain: () => Chain,
  ClobClient: () => ClobClient,
  L1_AUTH_UNAVAILABLE_ERROR: () => L1_AUTH_UNAVAILABLE_ERROR,
  L2_AUTH_NOT_AVAILABLE: () => L2_AUTH_NOT_AVAILABLE,
  OrderBuilder: () => OrderBuilder,
  OrderType: () => OrderType,
  PriceHistoryInterval: () => PriceHistoryInterval,
  Side: () => Side,
  SignatureTypeV1: () => SignatureTypeV1,
  SignatureTypeV2: () => SignatureTypeV2,
  adjustBuyAmountForFees: () => adjustBuyAmountForFees,
  createL1Headers: () => createL1Headers,
  createL2Headers: () => createL2Headers,
  getContractConfig: () => getContractConfig,
  isV2Order: () => isV2Order,
  orderToJsonV1: () => orderToJsonV1,
  orderToJsonV2: () => orderToJsonV2
});
module.exports = __toCommonJS(index_exports);

// src/constants.ts
var INITIAL_CURSOR = "MA==";
var END_CURSOR = "LTE=";
var bytes32Zero = "0x0000000000000000000000000000000000000000000000000000000000000000";
var ORDER_VERSION_MISMATCH_ERROR = "order_version_mismatch";
var BUILDER_FEES_BPS = 1e4;

// src/endpoints.ts
var OK = "/ok";
var HEARTBEAT = "/v1/heartbeats";
var TIME = "/time";
var CREATE_API_KEY = "/auth/api-key";
var GET_API_KEYS = "/auth/api-keys";
var DELETE_API_KEY = "/auth/api-key";
var DERIVE_API_KEY = "/auth/derive-api-key";
var CLOSED_ONLY = "/auth/ban-status/closed-only";
var GET_SAMPLING_SIMPLIFIED_MARKETS = "/sampling-simplified-markets";
var GET_SAMPLING_MARKETS = "/sampling-markets";
var GET_SIMPLIFIED_MARKETS = "/simplified-markets";
var GET_MARKETS = "/markets";
var GET_MARKET = "/markets/";
var GET_MARKET_BY_TOKEN = "/markets-by-token/";
var GET_CLOB_MARKET = "/clob-markets/";
var GET_ORDER_BOOK = "/book";
var GET_ORDER_BOOKS = "/books";
var GET_MIDPOINT = "/midpoint";
var GET_MIDPOINTS = "/midpoints";
var GET_PRICE = "/price";
var GET_PRICES = "/prices";
var GET_SPREAD = "/spread";
var GET_SPREADS = "/spreads";
var GET_LAST_TRADE_PRICE = "/last-trade-price";
var GET_LAST_TRADES_PRICES = "/last-trades-prices";
var GET_TICK_SIZE = "/tick-size";
var GET_NEG_RISK = "/neg-risk";
var GET_FEE_RATE = "/fee-rate";
var POST_ORDER = "/order";
var POST_ORDERS = "/orders";
var CANCEL_ORDER = "/order";
var CANCEL_ORDERS = "/orders";
var GET_ORDER = "/data/order/";
var CANCEL_ALL = "/cancel-all";
var CANCEL_MARKET_ORDERS = "/cancel-market-orders";
var GET_OPEN_ORDERS = "/data/orders";
var GET_PRE_MIGRATION_ORDERS = "/data/pre-migration-orders";
var GET_TRADES = "/data/trades";
var IS_ORDER_SCORING = "/order-scoring";
var ARE_ORDERS_SCORING = "/orders-scoring";
var GET_PRICES_HISTORY = "/prices-history";
var GET_NOTIFICATIONS = "/notifications";
var DROP_NOTIFICATIONS = "/notifications";
var GET_BALANCE_ALLOWANCE = "/balance-allowance";
var UPDATE_BALANCE_ALLOWANCE = "/balance-allowance/update";
var GET_EARNINGS_FOR_USER_FOR_DAY = "/rewards/user";
var GET_TOTAL_EARNINGS_FOR_USER_FOR_DAY = "/rewards/user/total";
var GET_LIQUIDITY_REWARD_PERCENTAGES = "/rewards/user/percentages";
var GET_REWARDS_MARKETS_CURRENT = "/rewards/markets/current";
var GET_REWARDS_MARKETS = "/rewards/markets/";
var GET_REWARDS_EARNINGS_PERCENTAGES = "/rewards/user/markets";
var CREATE_READONLY_API_KEY = "/auth/readonly-api-key";
var GET_READONLY_API_KEYS = "/auth/readonly-api-keys";
var DELETE_READONLY_API_KEY = "/auth/readonly-api-key";
var CREATE_BUILDER_API_KEY = "/auth/builder-api-key";
var GET_BUILDER_API_KEYS = "/auth/builder-api-key";
var REVOKE_BUILDER_API_KEY = "/auth/builder-api-key";
var GET_MARKET_TRADES_EVENTS = "/markets/live-activity/";
var GET_BUILDER_TRADES = "/builder/trades";
var GET_BUILDER_FEES = "/fees/builder-fees/";

// src/errors.ts
var L1_AUTH_UNAVAILABLE_ERROR = new Error(
  "Signer is needed to interact with this endpoint!"
);
var L2_AUTH_NOT_AVAILABLE = new Error(
  "API Credentials are needed to interact with this endpoint!"
);
var ApiError = class extends Error {
  status;
  data;
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
};

// src/fees/index.ts
var MIN_FEE_SLIPPAGE_PERCENTAGE = 1;
var MAX_FEE_SLIPPAGE_PERCENTAGE = 100;
function validateFeeSlippage(feeSlippage) {
  if (!Number.isFinite(feeSlippage) || feeSlippage < 0 || feeSlippage > MAX_FEE_SLIPPAGE_PERCENTAGE || feeSlippage > 0 && feeSlippage < MIN_FEE_SLIPPAGE_PERCENTAGE) {
    throw new Error("feeSlippage must be 0 or a percentage between 1 and 100");
  }
}
function adjustBuyAmountForFees(amount, price, userUSDCBalance, feeRate, feeExponent, builderTakerFeeRate, feeSlippage = 0) {
  validateFeeSlippage(feeSlippage);
  const platformFeeRate = feeRate * (price * (1 - price)) ** feeExponent;
  const effectivePlatformFeeRate = platformFeeRate * (1 + feeSlippage / 100);
  const feeBaseAmount = Math.min(amount, userUSDCBalance);
  const platformFee = feeBaseAmount / price * effectivePlatformFeeRate;
  const builderFee = feeBaseAmount * builderTakerFeeRate;
  const totalCost = amount + platformFee + builderFee;
  if (userUSDCBalance <= totalCost) {
    return Math.max(userUSDCBalance - platformFee - builderFee, 0);
  }
  return amount;
}

// src/signing/constants.ts
var MSG_TO_SIGN = "This message attests that I control the given wallet";

// src/signing/signer.ts
var isEthersTypedDataSigner = (signer) => (
  // eslint-disable-next-line no-underscore-dangle
  typeof signer._signTypedData === "function"
);
var isWalletClientSigner = (signer) => typeof signer.signTypedData === "function";
var getWalletClientAddress = async (walletClient) => {
  const accountAddress = walletClient.account?.address;
  if (typeof accountAddress === "string" && accountAddress.length > 0) {
    return accountAddress;
  }
  if (typeof walletClient.requestAddresses === "function") {
    const [address] = await walletClient.requestAddresses();
    if (typeof address === "string" && address.length > 0) {
      return address;
    }
  }
  if (typeof walletClient.getAddresses === "function") {
    const [address] = await walletClient.getAddresses();
    if (typeof address === "string" && address.length > 0) {
      return address;
    }
  }
  throw new Error("wallet client is missing account address");
};
var getSignerAddress = async (signer) => {
  if (isEthersTypedDataSigner(signer)) {
    return signer.getAddress();
  }
  if (isWalletClientSigner(signer)) {
    return getWalletClientAddress(signer);
  }
  throw new Error("unsupported signer type");
};
var signTypedDataWithSigner = async ({
  signer,
  domain,
  types,
  value,
  primaryType
}) => {
  if (isEthersTypedDataSigner(signer)) {
    return signer._signTypedData(domain, types, value);
  }
  if (isWalletClientSigner(signer)) {
    const account = signer.account ?? await getWalletClientAddress(signer);
    return signer.signTypedData({
      account,
      domain,
      types,
      primaryType,
      message: value
    });
  }
  throw new Error("unsupported signer type");
};

// src/signing/eip712.ts
var buildClobEip712Signature = async (signer, chainId, timestamp, nonce, address) => {
  const resolvedAddress = address ?? await getSignerAddress(signer);
  const ts = timestamp.toString();
  const domain = {
    name: "ClobAuthDomain",
    version: "1",
    chainId
  };
  const types = {
    ClobAuth: [
      { name: "address", type: "address" },
      { name: "timestamp", type: "string" },
      { name: "nonce", type: "uint256" },
      { name: "message", type: "string" }
    ]
  };
  const value = {
    address: resolvedAddress,
    timestamp: ts,
    nonce,
    message: MSG_TO_SIGN
  };
  const sig = await signTypedDataWithSigner({
    signer,
    domain,
    types,
    value,
    primaryType: "ClobAuth"
  });
  return sig;
};

// src/signing/hmac.ts
var import_node_crypto = __toESM(require("crypto"), 1);
function replaceAll(s, search, replace) {
  return s.split(search).join(replace);
}
var buildPolyHmacSignature = (secret, timestamp, method, requestPath, body) => {
  let message = timestamp + method + requestPath;
  if (body !== void 0) {
    message += body;
  }
  const base64Secret = Buffer.from(secret, "base64");
  const hmac = import_node_crypto.default.createHmac("sha256", base64Secret);
  const sig = hmac.update(message).digest("base64");
  const sigUrlSafe = replaceAll(replaceAll(sig, "+", "-"), "/", "_");
  return sigUrlSafe;
};

// src/headers/index.ts
var createL1Headers = async (signer, chainId, nonce, timestamp, address) => {
  let ts = Math.floor(Date.now() / 1e3);
  if (timestamp !== void 0) {
    ts = timestamp;
  }
  let n = 0;
  if (nonce !== void 0) {
    n = nonce;
  }
  const sig = await buildClobEip712Signature(signer, chainId, ts, n, address);
  const resolvedAddress = address ?? await getSignerAddress(signer);
  const headers = {
    POLY_ADDRESS: resolvedAddress,
    POLY_SIGNATURE: sig,
    POLY_TIMESTAMP: `${ts}`,
    POLY_NONCE: `${n}`
  };
  return headers;
};
var createL2Headers = async (signer, creds, l2HeaderArgs, timestamp) => {
  let ts = Math.floor(Date.now() / 1e3);
  if (timestamp !== void 0) {
    ts = timestamp;
  }
  const address = await getSignerAddress(signer);
  const sig = buildPolyHmacSignature(
    creds.secret,
    ts,
    l2HeaderArgs.method,
    l2HeaderArgs.requestPath,
    l2HeaderArgs.body
  );
  const headers = {
    POLY_ADDRESS: address,
    POLY_SIGNATURE: sig,
    POLY_TIMESTAMP: `${ts}`,
    POLY_API_KEY: creds.key,
    POLY_PASSPHRASE: creds.passphrase
  };
  return headers;
};

// src/http-helpers/index.ts
var import_axios = __toESM(require("axios"), 1);
var import_browser_or_node = require("browser-or-node");
var GET = "GET";
var POST = "POST";
var DELETE = "DELETE";
var overloadHeaders = (method, headers = {}) => {
  if (import_browser_or_node.isBrowser) {
    return;
  }
  headers["User-Agent"] = `@polymarket/clob-client`;
  headers.Accept = "*/*";
  headers.Connection = "keep-alive";
  headers["Content-Type"] = "application/json";
  if (method === GET) {
    headers["Accept-Encoding"] = "gzip";
  }
};
var request = async (endpoint, method, headers, data, params) => {
  overloadHeaders(method, headers);
  return await (0, import_axios.default)({ method, url: endpoint, headers, data, params });
};
var sleep = (ms) => new Promise((res) => setTimeout(res, ms));
var post = async (endpoint, options, retryOnError = false) => {
  try {
    const resp = await request(
      endpoint,
      POST,
      options?.headers,
      options?.data,
      options?.params
    );
    return resp.data;
  } catch (err) {
    if (retryOnError && isTransientAxiosError(err)) {
      console.log("[CLOB Client-v2] transient error, retrying once after 30 ms");
      await sleep(30);
      try {
        const resp = await request(
          endpoint,
          POST,
          options?.headers,
          options?.data,
          options?.params
        );
        return resp.data;
      } catch (retryErr) {
        return errorHandling(retryErr);
      }
    }
    return errorHandling(err);
  }
};
var get = async (endpoint, options) => {
  try {
    const resp = await request(endpoint, GET, options?.headers, options?.data, options?.params);
    return resp.data;
  } catch (err) {
    return errorHandling(err);
  }
};
var del = async (endpoint, options) => {
  try {
    const resp = await request(
      endpoint,
      DELETE,
      options?.headers,
      options?.data,
      options?.params
    );
    return resp.data;
  } catch (err) {
    return errorHandling(err);
  }
};
var errorHandling = (err) => {
  if (import_axios.default.isAxiosError(err)) {
    if (err.response) {
      console.error(
        "[CLOB Client] request error",
        JSON.stringify({
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data,
          config: err.response?.config
        })
      );
      if (err.response?.data) {
        if (typeof err.response?.data === "string" || err.response?.data instanceof String) {
          return { error: err.response?.data, status: err.response?.status };
        }
        if (!Object.prototype.hasOwnProperty.call(err.response?.data, "error")) {
          return { error: err.response?.data, status: err.response?.status };
        }
        return { ...err.response?.data, status: err.response?.status };
      }
    }
    if (err.message) {
      console.error(
        "[CLOB Client] request error",
        JSON.stringify({
          error: err.message
        })
      );
      return { error: err.message };
    }
  }
  console.error("[CLOB Client] request error", err);
  return { error: err };
};
var isTransientAxiosError = (err) => {
  if (!import_axios.default.isAxiosError(err)) return false;
  if (!err.response) return true;
  const status = err.response.status ?? 0;
  if (status >= 500 && status < 600) return true;
  const code = (err.code ?? "").toString();
  return ["ECONNABORTED", "ENETUNREACH", "EAI_AGAIN", "ETIMEDOUT"].includes(code);
};
var parseDropNotificationParams = (dropNotificationParams) => {
  const params = {};
  if (dropNotificationParams !== void 0) {
    if (dropNotificationParams.ids !== void 0) {
      params.ids = dropNotificationParams?.ids.join(",");
    }
  }
  return params;
};

// src/order-builder/helpers/buildMarketOrderCreationArgs.ts
var import_viem = require("viem");

// src/config.ts
var AMOY_CONTRACTS = {
  exchange: "0xdFE02Eb6733538f8Ea35D585af8DE5958AD99E40",
  negRiskAdapter: "0xd91E80cF2E7be2e162c6513ceD06f1dD0dA35296",
  negRiskExchange: "0xC5d563A36AE78145C45a50134d48A1215220f80a",
  collateral: "0xC011a7E12a19f7B1f670d46F03B03f3342E82DFB",
  conditionalTokens: "0x69308FB512518e39F9b16112fA8d994F4e2Bf8bB",
  exchangeV2: "0xE111180000d2663C0091e4f400237545B87B996B",
  negRiskExchangeV2: "0xe2222d279d744050d28e00520010520000310F59"
};
var MATIC_CONTRACTS = {
  exchange: "0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E",
  negRiskAdapter: "0xd91E80cF2E7be2e162c6513ceD06f1dD0dA35296",
  negRiskExchange: "0xC5d563A36AE78145C45a50134d48A1215220f80a",
  collateral: "0xC011a7E12a19f7B1f670d46F03B03f3342E82DFB",
  conditionalTokens: "0x4D97DCd97eC945f40cF65F87097ACe5EA0476045",
  exchangeV2: "0xE111180000d2663C0091e4f400237545B87B996B",
  negRiskExchangeV2: "0xe2222d279d744050d28e00520010520000310F59"
};
var COLLATERAL_TOKEN_DECIMALS = 6;
var CONDITIONAL_TOKEN_DECIMALS = 6;
var getContractConfig = (chainID) => {
  switch (chainID) {
    case 137:
      return MATIC_CONTRACTS;
    case 80002:
      return AMOY_CONTRACTS;
    default:
      throw new Error("Invalid network");
  }
};

// src/order-builder/helpers/buildMarketOrderCreationArgs.ts
async function buildMarketOrderCreationArgs(signer, maker, signatureType, userMarketOrder, roundConfig, version = 2) {
  const { side, rawMakerAmt, rawTakerAmt } = getMarketOrderRawAmounts(
    userMarketOrder.side,
    userMarketOrder.amount,
    userMarketOrder.price || 1,
    roundConfig
  );
  const makerAmount = (0, import_viem.parseUnits)(rawMakerAmt.toString(), COLLATERAL_TOKEN_DECIMALS).toString();
  const takerAmount = (0, import_viem.parseUnits)(rawTakerAmt.toString(), COLLATERAL_TOKEN_DECIMALS).toString();
  if (version === 1) {
    const v1Order = userMarketOrder;
    return {
      maker,
      taker: v1Order.taker ?? import_viem.zeroAddress,
      tokenId: userMarketOrder.tokenID,
      makerAmount,
      takerAmount,
      side,
      signer,
      signatureType,
      feeRateBps: v1Order.feeRateBps?.toString() ?? "0",
      nonce: v1Order.nonce?.toString() ?? "0"
    };
  }
  return {
    maker,
    tokenId: userMarketOrder.tokenID,
    makerAmount,
    takerAmount,
    side,
    signer,
    signatureType,
    timestamp: Date.now().toString(),
    metadata: "metadata" in userMarketOrder ? userMarketOrder.metadata ?? bytes32Zero : bytes32Zero,
    builder: userMarketOrder.builderCode ?? bytes32Zero
  };
}

// src/order-utils/exchangeOrderBuilderV1.ts
var import_viem2 = require("viem");

// src/order-utils/model/ctfExchangeV1TypedData.ts
var CTF_EXCHANGE_V1_DOMAIN_NAME = "Polymarket CTF Exchange";
var CTF_EXCHANGE_V1_DOMAIN_VERSION = "1";
var CTF_EXCHANGE_V1_ORDER_STRUCT = [
  { name: "salt", type: "uint256" },
  { name: "maker", type: "address" },
  { name: "signer", type: "address" },
  { name: "taker", type: "address" },
  { name: "tokenId", type: "uint256" },
  { name: "makerAmount", type: "uint256" },
  { name: "takerAmount", type: "uint256" },
  { name: "expiration", type: "uint256" },
  { name: "nonce", type: "uint256" },
  { name: "feeRateBps", type: "uint256" },
  { name: "side", type: "uint8" },
  { name: "signatureType", type: "uint8" }
];

// src/order-utils/model/eip712.ts
var EIP712_DOMAIN = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" }
];

// src/order-utils/model/signatureTypeV1.ts
var SignatureTypeV1 = /* @__PURE__ */ ((SignatureTypeV12) => {
  SignatureTypeV12[SignatureTypeV12["EOA"] = 0] = "EOA";
  SignatureTypeV12[SignatureTypeV12["POLY_PROXY"] = 1] = "POLY_PROXY";
  SignatureTypeV12[SignatureTypeV12["POLY_GNOSIS_SAFE"] = 2] = "POLY_GNOSIS_SAFE";
  return SignatureTypeV12;
})(SignatureTypeV1 || {});

// src/order-utils/utils.ts
function generateOrderSalt() {
  return `${Math.round(Math.random() * Date.now())}`;
}

// src/order-utils/exchangeOrderBuilderV1.ts
var ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
var ExchangeOrderBuilderV1 = class {
  constructor(contractAddress, chainId, signer, generateSalt = generateOrderSalt) {
    this.contractAddress = contractAddress;
    this.chainId = chainId;
    this.signer = signer;
    this.generateSalt = generateSalt;
  }
  contractAddress;
  chainId;
  signer;
  generateSalt;
  /**
   * build an order object including the signature.
   * @param orderData
   * @returns a SignedOrder object (order + signature)
   */
  async buildSignedOrder(orderData) {
    const order = await this.buildOrder(orderData);
    const orderTypedData = this.buildOrderTypedData(order);
    const orderSignature = await this.buildOrderSignature(orderTypedData);
    return {
      ...order,
      signature: orderSignature
    };
  }
  /**
   * Creates an Order object from order data.
   * @param OrderData
   * @returns a Order object (not signed)
   */
  async buildOrder({
    maker,
    taker,
    tokenId,
    makerAmount,
    takerAmount,
    side,
    feeRateBps,
    nonce,
    signer,
    expiration,
    signatureType
  }) {
    if (!signer) {
      signer = maker;
    }
    const signerAddress = await getSignerAddress(this.signer);
    if (signer !== signerAddress) {
      throw new Error("signer does not match");
    }
    if (!expiration) {
      expiration = "0";
    }
    if (!signatureType) {
      signatureType = 0 /* EOA */;
    }
    let takerAddress;
    if (typeof taker !== "undefined" && taker) {
      takerAddress = taker;
    } else {
      takerAddress = ZERO_ADDRESS;
    }
    let feeRateBpsResolved;
    if (typeof feeRateBps !== "undefined" && feeRateBps) {
      feeRateBpsResolved = feeRateBps.toString();
    } else {
      feeRateBpsResolved = "0";
    }
    let nonceResolved;
    if (typeof nonce !== "undefined" && nonce) {
      nonceResolved = nonce.toString();
    } else {
      nonceResolved = "0";
    }
    return {
      salt: this.generateSalt(),
      maker,
      signer,
      taker: takerAddress,
      tokenId,
      makerAmount,
      takerAmount,
      expiration,
      nonce: nonceResolved,
      feeRateBps: feeRateBpsResolved,
      side,
      signatureType
    };
  }
  /**
   * Parses an Order object to EIP712 typed data
   * @param order
   * @returns a EIP712TypedData object
   */
  buildOrderTypedData(order) {
    return {
      primaryType: "Order",
      types: {
        EIP712Domain: EIP712_DOMAIN,
        Order: CTF_EXCHANGE_V1_ORDER_STRUCT
      },
      domain: {
        name: CTF_EXCHANGE_V1_DOMAIN_NAME,
        version: CTF_EXCHANGE_V1_DOMAIN_VERSION,
        chainId: this.chainId,
        verifyingContract: this.contractAddress
      },
      message: {
        salt: order.salt,
        maker: order.maker,
        signer: order.signer,
        taker: order.taker,
        tokenId: order.tokenId,
        makerAmount: order.makerAmount,
        takerAmount: order.takerAmount,
        expiration: order.expiration,
        nonce: order.nonce,
        feeRateBps: order.feeRateBps,
        side: order.side === "BUY" ? 0 : 1,
        signatureType: order.signatureType
      }
    };
  }
  /**
   * Generates order's signature from a EIP712TypedData object + the signer address
   * @param typedData
   * @returns a OrderSignature that is an string
   */
  buildOrderSignature(typedData) {
    delete typedData.types.EIP712Domain;
    return signTypedDataWithSigner({
      signer: this.signer,
      domain: typedData.domain,
      types: typedData.types,
      value: typedData.message,
      primaryType: typedData.primaryType
    });
  }
  /**
   * Generates the hash of the order from a EIP712TypedData object.
   * @param orderTypedData
   * @returns a OrderHash that is an string
   */
  buildOrderHash(orderTypedData) {
    const digest = (0, import_viem2.hashTypedData)(orderTypedData);
    return digest;
  }
};

// src/order-utils/exchangeOrderBuilderV2.ts
var import_viem3 = require("viem");

// src/order-utils/model/ctfExchangeV2TypedData.ts
var CTF_EXCHANGE_V2_DOMAIN_NAME = "Polymarket CTF Exchange";
var CTF_EXCHANGE_V2_DOMAIN_VERSION = "2";
var CTF_EXCHANGE_V2_ORDER_STRUCT = [
  { name: "salt", type: "uint256" },
  { name: "maker", type: "address" },
  { name: "signer", type: "address" },
  { name: "tokenId", type: "uint256" },
  { name: "makerAmount", type: "uint256" },
  { name: "takerAmount", type: "uint256" },
  { name: "side", type: "uint8" },
  { name: "signatureType", type: "uint8" },
  { name: "timestamp", type: "uint256" },
  { name: "metadata", type: "bytes32" },
  { name: "builder", type: "bytes32" }
];

// src/order-utils/model/signatureTypeV2.ts
var SignatureTypeV2 = /* @__PURE__ */ ((SignatureTypeV22) => {
  SignatureTypeV22[SignatureTypeV22["EOA"] = 0] = "EOA";
  SignatureTypeV22[SignatureTypeV22["POLY_PROXY"] = 1] = "POLY_PROXY";
  SignatureTypeV22[SignatureTypeV22["POLY_GNOSIS_SAFE"] = 2] = "POLY_GNOSIS_SAFE";
  SignatureTypeV22[SignatureTypeV22["POLY_1271"] = 3] = "POLY_1271";
  return SignatureTypeV22;
})(SignatureTypeV2 || {});

// src/order-utils/exchangeOrderBuilderV2.ts
var ORDER_TYPE_STRING = "Order(uint256 salt,address maker,address signer,uint256 tokenId,uint256 makerAmount,uint256 takerAmount,uint8 side,uint8 signatureType,uint256 timestamp,bytes32 metadata,bytes32 builder)";
var ORDER_TYPE_HASH = (0, import_viem3.keccak256)((0, import_viem3.toHex)(ORDER_TYPE_STRING));
var DOMAIN_TYPE_HASH = (0, import_viem3.keccak256)(
  (0, import_viem3.toHex)("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")
);
var TYPED_DATA_SIGN_STRUCT = [
  { name: "contents", type: "Order" },
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" },
  { name: "salt", type: "bytes32" }
];
var CTF_EXCHANGE_NAME_HASH = (0, import_viem3.keccak256)((0, import_viem3.toHex)(CTF_EXCHANGE_V2_DOMAIN_NAME));
var CTF_EXCHANGE_VERSION_HASH = (0, import_viem3.keccak256)((0, import_viem3.toHex)(CTF_EXCHANGE_V2_DOMAIN_VERSION));
var ExchangeOrderBuilderV2 = class {
  constructor(contractAddress, chainId, signer, generateSalt = generateOrderSalt) {
    this.contractAddress = contractAddress;
    this.chainId = chainId;
    this.signer = signer;
    this.generateSalt = generateSalt;
    this.appDomainSep = (0, import_viem3.keccak256)(
      (0, import_viem3.encodeAbiParameters)(
        [
          { type: "bytes32" },
          { type: "bytes32" },
          { type: "bytes32" },
          { type: "uint256" },
          { type: "address" }
        ],
        [
          DOMAIN_TYPE_HASH,
          CTF_EXCHANGE_NAME_HASH,
          CTF_EXCHANGE_VERSION_HASH,
          BigInt(chainId),
          contractAddress
        ]
      )
    );
  }
  contractAddress;
  chainId;
  signer;
  generateSalt;
  appDomainSep;
  async buildSignedOrder(orderData) {
    const order = await this.buildOrder(orderData);
    const orderTypedData = this.buildOrderTypedData(order);
    const orderSignature = await this.buildOrderSignature(orderTypedData);
    return {
      ...order,
      signature: orderSignature
    };
  }
  async buildOrder({
    maker,
    tokenId,
    makerAmount,
    takerAmount,
    side,
    signer,
    signatureType,
    timestamp,
    metadata,
    builder,
    expiration
  }) {
    if (!signer) {
      signer = maker;
    }
    if (signatureType !== 3 /* POLY_1271 */) {
      const signerAddress = await getSignerAddress(this.signer);
      if (signer !== signerAddress) {
        throw new Error("signer does not match");
      }
    }
    return {
      salt: this.generateSalt(),
      maker,
      signer,
      tokenId,
      makerAmount,
      takerAmount,
      side,
      signatureType: signatureType ?? 0 /* EOA */,
      metadata: metadata ?? bytes32Zero,
      builder: builder ?? bytes32Zero,
      timestamp: timestamp ?? Date.now().toString(),
      expiration: expiration ?? "0"
    };
  }
  buildOrderTypedData(order) {
    return {
      primaryType: "Order",
      types: {
        EIP712Domain: EIP712_DOMAIN,
        Order: CTF_EXCHANGE_V2_ORDER_STRUCT
      },
      domain: {
        name: CTF_EXCHANGE_V2_DOMAIN_NAME,
        version: CTF_EXCHANGE_V2_DOMAIN_VERSION,
        chainId: this.chainId,
        verifyingContract: this.contractAddress
      },
      message: {
        salt: order.salt,
        maker: order.maker,
        signer: order.signer,
        tokenId: order.tokenId,
        makerAmount: order.makerAmount,
        takerAmount: order.takerAmount,
        timestamp: order.timestamp,
        side: order.side === "BUY" ? 0 : 1,
        signatureType: order.signatureType,
        metadata: order.metadata,
        builder: order.builder
      }
    };
  }
  async buildOrderSignature(typedData) {
    delete typedData.types.EIP712Domain;
    const msg = typedData.message;
    if (msg.signatureType !== 3 /* POLY_1271 */) {
      return signTypedDataWithSigner({
        signer: this.signer,
        domain: typedData.domain,
        types: typedData.types,
        value: typedData.message,
        primaryType: typedData.primaryType
      });
    }
    const contentsHash = (0, import_viem3.keccak256)(
      (0, import_viem3.encodeAbiParameters)(
        [
          { type: "bytes32" },
          { type: "uint256" },
          { type: "address" },
          { type: "address" },
          { type: "uint256" },
          { type: "uint256" },
          { type: "uint256" },
          { type: "uint8" },
          { type: "uint8" },
          { type: "uint256" },
          { type: "bytes32" },
          { type: "bytes32" }
        ],
        [
          ORDER_TYPE_HASH,
          BigInt(msg.salt),
          msg.maker,
          msg.signer,
          BigInt(msg.tokenId),
          BigInt(msg.makerAmount),
          BigInt(msg.takerAmount),
          msg.side,
          msg.signatureType,
          BigInt(msg.timestamp),
          msg.metadata,
          msg.builder
        ]
      )
    );
    const innerSig = await signTypedDataWithSigner({
      signer: this.signer,
      domain: {
        name: CTF_EXCHANGE_V2_DOMAIN_NAME,
        version: CTF_EXCHANGE_V2_DOMAIN_VERSION,
        chainId: this.chainId,
        verifyingContract: this.contractAddress
      },
      types: {
        TypedDataSign: TYPED_DATA_SIGN_STRUCT,
        Order: CTF_EXCHANGE_V2_ORDER_STRUCT
      },
      primaryType: "TypedDataSign",
      value: {
        contents: typedData.message,
        name: "DepositWallet",
        version: "1",
        chainId: this.chainId,
        verifyingContract: msg.signer,
        salt: bytes32Zero
      }
    });
    const ctLen = ORDER_TYPE_STRING.length;
    const lenHex = ctLen.toString(16).padStart(4, "0");
    return `0x${innerSig.slice(2)}${this.appDomainSep.slice(2)}${contentsHash.slice(2)}${(0, import_viem3.toHex)(ORDER_TYPE_STRING).slice(2)}${lenHex}`;
  }
  buildOrderHash(orderTypedData) {
    return (0, import_viem3.hashTypedData)(orderTypedData);
  }
};

// src/order-builder/helpers/buildOrder.ts
var buildOrder = async (signer, exchangeAddress, chainId, orderData, version = 2) => {
  switch (version) {
    case 1:
      return buildOrderV1(signer, exchangeAddress, chainId, orderData);
    case 2:
      return buildOrderV2(signer, exchangeAddress, chainId, orderData);
    default:
      throw new Error(`unsupported order version ${version}`);
  }
};
var buildOrderV1 = async (signer, exchangeAddress, chainId, orderData) => {
  const ctfExchangeOrderBuilder = new ExchangeOrderBuilderV1(exchangeAddress, chainId, signer);
  return ctfExchangeOrderBuilder.buildSignedOrder(orderData);
};
var buildOrderV2 = async (signer, exchangeAddress, chainId, orderData) => {
  const ctfExchangeOrderBuilder = new ExchangeOrderBuilderV2(exchangeAddress, chainId, signer);
  return ctfExchangeOrderBuilder.buildSignedOrder(orderData);
};

// src/order-builder/helpers/buildOrderCreationArgs.ts
var import_viem4 = require("viem");

// src/order-utils/model/side.ts
var Side = /* @__PURE__ */ ((Side2) => {
  Side2["BUY"] = "BUY";
  Side2["SELL"] = "SELL";
  return Side2;
})(Side || {});

// src/types/clob.ts
var OrderType = /* @__PURE__ */ ((OrderType2) => {
  OrderType2["GTC"] = "GTC";
  OrderType2["FOK"] = "FOK";
  OrderType2["GTD"] = "GTD";
  OrderType2["FAK"] = "FAK";
  return OrderType2;
})(OrderType || {});
var Chain = /* @__PURE__ */ ((Chain2) => {
  Chain2[Chain2["POLYGON"] = 137] = "POLYGON";
  Chain2[Chain2["AMOY"] = 80002] = "AMOY";
  return Chain2;
})(Chain || {});
var PriceHistoryInterval = /* @__PURE__ */ ((PriceHistoryInterval2) => {
  PriceHistoryInterval2["MAX"] = "max";
  PriceHistoryInterval2["ONE_WEEK"] = "1w";
  PriceHistoryInterval2["ONE_DAY"] = "1d";
  PriceHistoryInterval2["SIX_HOURS"] = "6h";
  PriceHistoryInterval2["ONE_HOUR"] = "1h";
  return PriceHistoryInterval2;
})(PriceHistoryInterval || {});
var AssetType = /* @__PURE__ */ ((AssetType2) => {
  AssetType2["COLLATERAL"] = "COLLATERAL";
  AssetType2["CONDITIONAL"] = "CONDITIONAL";
  return AssetType2;
})(AssetType || {});

// src/types/ordersV1.ts
function orderToJsonV1(order, owner, orderType, postOnly = false, deferExec = false) {
  return {
    deferExec,
    postOnly,
    order: {
      salt: parseInt(order.salt, 10),
      maker: order.maker,
      signer: order.signer,
      taker: order.taker,
      tokenId: order.tokenId,
      makerAmount: order.makerAmount,
      takerAmount: order.takerAmount,
      side: order.side,
      expiration: order.expiration,
      nonce: order.nonce,
      feeRateBps: order.feeRateBps,
      signatureType: order.signatureType,
      signature: order.signature
    },
    owner,
    orderType
  };
}

// src/types/ordersV2.ts
function orderToJsonV2(order, owner, orderType, postOnly = false, deferExec = false) {
  return {
    deferExec,
    postOnly,
    order: {
      salt: parseInt(order.salt, 10),
      maker: order.maker,
      signer: order.signer,
      taker: order.taker,
      tokenId: order.tokenId,
      makerAmount: order.makerAmount,
      takerAmount: order.takerAmount,
      side: order.side,
      signatureType: order.signatureType,
      timestamp: order.timestamp,
      expiration: order.expiration,
      metadata: order.metadata,
      builder: order.builder,
      signature: order.signature
    },
    owner,
    orderType
  };
}

// src/types/unifiedOrder.ts
function isV2Order(order) {
  if ("version" in order && "order" in order) {
    return order.version === 2;
  }
  return "timestamp" in order && "metadata" in order && "builder" in order;
}

// src/utilities.ts
var import_node_crypto2 = require("crypto");
var roundNormal = (num, decimals) => {
  if (decimalPlaces(num) <= decimals) {
    return num;
  }
  return Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;
};
var roundDown = (num, decimals) => {
  if (decimalPlaces(num) <= decimals) {
    return num;
  }
  return Math.floor(num * 10 ** decimals) / 10 ** decimals;
};
var roundUp = (num, decimals) => {
  if (decimalPlaces(num) <= decimals) {
    return num;
  }
  return Math.ceil(num * 10 ** decimals) / 10 ** decimals;
};
var decimalPlaces = (num) => {
  if (Number.isInteger(num)) {
    return 0;
  }
  const arr = num.toString().split(".");
  if (arr.length <= 1) {
    return 0;
  }
  return arr[1].length;
};
var generateOrderBookSummaryHash = (orderbook) => {
  orderbook.hash = "";
  const hash = (0, import_node_crypto2.createHash)("sha1").update(JSON.stringify(orderbook)).digest("hex");
  orderbook.hash = hash;
  return hash;
};
var isTickSizeSmaller = (a, b) => {
  return parseFloat(a) < parseFloat(b);
};
var priceValid = (price, tickSize) => {
  return price >= parseFloat(tickSize) && price <= 1 - parseFloat(tickSize);
};

// src/order-builder/helpers/getOrderRawAmounts.ts
var getOrderRawAmounts = (side, size, price, roundConfig) => {
  const rawPrice = roundNormal(price, roundConfig.price);
  if (side === "BUY" /* BUY */) {
    const rawTakerAmt = roundDown(size, roundConfig.size);
    let rawMakerAmt = rawTakerAmt * rawPrice;
    if (decimalPlaces(rawMakerAmt) > roundConfig.amount) {
      rawMakerAmt = roundUp(rawMakerAmt, roundConfig.amount + 4);
      if (decimalPlaces(rawMakerAmt) > roundConfig.amount) {
        rawMakerAmt = roundDown(rawMakerAmt, roundConfig.amount);
      }
    }
    return {
      side: "BUY" /* BUY */,
      rawMakerAmt,
      rawTakerAmt
    };
  } else {
    const rawMakerAmt = roundDown(size, roundConfig.size);
    let rawTakerAmt = rawMakerAmt * rawPrice;
    if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
      rawTakerAmt = roundUp(rawTakerAmt, roundConfig.amount + 4);
      if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
        rawTakerAmt = roundDown(rawTakerAmt, roundConfig.amount);
      }
    }
    return {
      side: "SELL" /* SELL */,
      rawMakerAmt,
      rawTakerAmt
    };
  }
};

// src/order-builder/helpers/buildOrderCreationArgs.ts
async function buildOrderCreationArgs(signer, maker, signatureType, userOrder, roundConfig, version = 2) {
  const { side, rawMakerAmt, rawTakerAmt } = getOrderRawAmounts(
    userOrder.side,
    userOrder.size,
    userOrder.price,
    roundConfig
  );
  const makerAmount = (0, import_viem4.parseUnits)(rawMakerAmt.toString(), COLLATERAL_TOKEN_DECIMALS).toString();
  const takerAmount = (0, import_viem4.parseUnits)(rawTakerAmt.toString(), COLLATERAL_TOKEN_DECIMALS).toString();
  if (version === 1) {
    const v1Order = userOrder;
    return {
      maker,
      taker: v1Order.taker ?? import_viem4.zeroAddress,
      tokenId: userOrder.tokenID,
      makerAmount,
      takerAmount,
      side,
      signer,
      signatureType,
      feeRateBps: v1Order.feeRateBps?.toString() ?? "0",
      nonce: v1Order.nonce?.toString() ?? "0",
      expiration: userOrder.expiration !== void 0 ? userOrder.expiration.toString() : "0"
    };
  }
  return {
    maker,
    tokenId: userOrder.tokenID,
    makerAmount,
    takerAmount,
    side,
    signer,
    signatureType,
    timestamp: Date.now().toString(),
    metadata: "metadata" in userOrder ? userOrder.metadata ?? bytes32Zero : bytes32Zero,
    builder: userOrder.builderCode ?? bytes32Zero,
    expiration: userOrder.expiration !== void 0 ? userOrder.expiration.toString() : "0"
  };
}

// src/order-builder/helpers/calculateBuyMarketPrice.ts
var calculateBuyMarketPrice = (positions, amountToMatch, orderType) => {
  if (!positions.length) {
    throw new Error("no match");
  }
  let sum = 0;
  for (let i = positions.length - 1; i >= 0; i--) {
    const p = positions[i];
    sum += parseFloat(p.size) * parseFloat(p.price);
    if (sum >= amountToMatch) {
      return parseFloat(p.price);
    }
  }
  if (orderType === "FOK" /* FOK */) {
    throw new Error("no match");
  }
  return parseFloat(positions[0].price);
};

// src/order-builder/helpers/calculateSellMarketPrice.ts
var calculateSellMarketPrice = (positions, amountToMatch, orderType) => {
  if (!positions.length) {
    throw new Error("no match");
  }
  let sum = 0;
  for (let i = positions.length - 1; i >= 0; i--) {
    const p = positions[i];
    sum += parseFloat(p.size);
    if (sum >= amountToMatch) {
      return parseFloat(p.price);
    }
  }
  if (orderType === "FOK" /* FOK */) {
    throw new Error("no match");
  }
  return parseFloat(positions[0].price);
};

// src/order-builder/helpers/roundingConfig.ts
var ROUNDING_CONFIG = {
  "0.1": {
    price: 1,
    size: 2,
    amount: 3
  },
  "0.01": {
    price: 2,
    size: 2,
    amount: 4
  },
  "0.001": {
    price: 3,
    size: 2,
    amount: 5
  },
  "0.0001": {
    price: 4,
    size: 2,
    amount: 6
  }
};

// src/order-builder/helpers/createMarketOrder.ts
var createMarketOrder = async (eoaSigner, chainId, signatureType, funderAddress, userMarketOrder, options, version) => {
  const eoaSignerAddress = await getSignerAddress(eoaSigner);
  const maker = funderAddress === void 0 ? eoaSignerAddress : funderAddress;
  const signerForOrder = signatureType === 3 /* POLY_1271 */ ? maker : eoaSignerAddress;
  const contractConfig = getContractConfig(chainId);
  const orderData = await buildMarketOrderCreationArgs(
    signerForOrder,
    maker,
    signatureType,
    userMarketOrder,
    ROUNDING_CONFIG[options.tickSize],
    version
  );
  let exchangeContract;
  switch (version) {
    case 1:
      if (signatureType === 3 /* POLY_1271 */) {
        throw new Error(`signature type POLY_1271 is not supported for v1 orders`);
      }
      exchangeContract = options.negRisk ? contractConfig.negRiskExchange : contractConfig.exchange;
      break;
    case 2:
      exchangeContract = options.negRisk ? contractConfig.negRiskExchangeV2 : contractConfig.exchangeV2;
      break;
    default:
      throw new Error(`unsupported order version ${version}`);
  }
  return buildOrder(eoaSigner, exchangeContract, chainId, orderData, version);
};

// src/order-builder/helpers/createOrder.ts
var createOrder = async (eoaSigner, chainId, signatureType, funderAddress, userOrder, options, version) => {
  const eoaSignerAddress = await getSignerAddress(eoaSigner);
  const maker = funderAddress === void 0 ? eoaSignerAddress : funderAddress;
  const signerForOrder = signatureType === 3 /* POLY_1271 */ ? maker : eoaSignerAddress;
  const contractConfig = getContractConfig(chainId);
  const orderData = await buildOrderCreationArgs(
    signerForOrder,
    maker,
    signatureType,
    userOrder,
    ROUNDING_CONFIG[options.tickSize],
    version
  );
  let exchangeContract;
  switch (version) {
    case 1:
      if (signatureType === 3 /* POLY_1271 */) {
        throw new Error(`signature type POLY_1271 is not supported for v1 orders`);
      }
      exchangeContract = options.negRisk ? contractConfig.negRiskExchange : contractConfig.exchange;
      break;
    case 2:
      exchangeContract = options.negRisk ? contractConfig.negRiskExchangeV2 : contractConfig.exchangeV2;
      break;
    default:
      throw new Error(`unsupported order version ${version}`);
  }
  return buildOrder(eoaSigner, exchangeContract, chainId, orderData, version);
};

// src/order-builder/helpers/getMarketOrderRawAmounts.ts
var getMarketOrderRawAmounts = (side, amount, price, roundConfig) => {
  const rawPrice = roundDown(price, roundConfig.price);
  if (side === "BUY" /* BUY */) {
    const rawMakerAmt = roundDown(amount, roundConfig.size);
    let rawTakerAmt = rawMakerAmt / rawPrice;
    if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
      rawTakerAmt = roundUp(rawTakerAmt, roundConfig.amount + 4);
      if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
        rawTakerAmt = roundDown(rawTakerAmt, roundConfig.amount);
      }
    }
    return {
      side: "BUY" /* BUY */,
      rawMakerAmt,
      rawTakerAmt
    };
  } else {
    const rawMakerAmt = roundDown(amount, roundConfig.size);
    let rawTakerAmt = rawMakerAmt * rawPrice;
    if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
      rawTakerAmt = roundUp(rawTakerAmt, roundConfig.amount + 4);
      if (decimalPlaces(rawTakerAmt) > roundConfig.amount) {
        rawTakerAmt = roundDown(rawTakerAmt, roundConfig.amount);
      }
    }
    return {
      side: "SELL" /* SELL */,
      rawMakerAmt,
      rawTakerAmt
    };
  }
};

// src/order-builder/orderBuilder.ts
var OrderBuilder = class {
  signer;
  chainId;
  // Signature type used sign orders, defaults to EOA type
  signatureType;
  // Address which holds funds to be used.
  // Used for Polymarket proxy wallets and other smart contract wallets
  // If not provided, funderAddress is the signer address
  funderAddress;
  /**
   * Optional function to dynamically resolve the signer.
   * If provided, this function will be called to obtain a fresh signer instance
   * (e.g., for smart contract wallets or when the signer may change).
   * Should return a Wallet or JsonRpcSigner, or a Promise resolving to one.
   * If not provided, the static `signer` property is used.
   */
  getSigner;
  constructor(signer, chainId, signatureType, funderAddress, getSigner) {
    this.signer = signer;
    this.chainId = chainId;
    this.signatureType = signatureType === void 0 ? 0 /* EOA */ : signatureType;
    this.funderAddress = funderAddress;
    this.getSigner = getSigner;
  }
  /**
   * Generate and sign a order
   */
  async buildOrder(userOrder, options, version) {
    const signer = await this.resolveSigner();
    return createOrder(
      signer,
      this.chainId,
      this.signatureType,
      this.funderAddress,
      userOrder,
      options,
      version
    );
  }
  /**
   * Generate and sign a market order
   */
  async buildMarketOrder(userMarketOrder, options, version) {
    const signer = await this.resolveSigner();
    return createMarketOrder(
      signer,
      this.chainId,
      this.signatureType,
      this.funderAddress,
      userMarketOrder,
      options,
      version
    );
  }
  /** Unified getter: use fresh signer if available */
  async resolveSigner() {
    if (this.getSigner) {
      const s = await this.getSigner();
      if (!s) throw new Error("getSigner() function returned undefined or null");
      return s;
    }
    return this.signer;
  }
};

// src/client.ts
var ClobClient = class {
  host;
  chainId;
  // Used to perform Level 1 authentication and sign orders
  signer;
  // Used to perform Level 2 authentication
  creds;
  orderBuilder;
  tickSizes;
  negRisk;
  feeInfos;
  // Fee rate bps data for CLOB V1
  feeRates;
  builderFeeRates;
  tokenConditionMap;
  useServerTime;
  builderConfig;
  signatureType;
  funderAddress;
  cachedVersion;
  retryOnError;
  throwOnError;
  feeSlippage;
  constructor({
    host,
    chain,
    signer,
    creds,
    signatureType,
    funderAddress,
    useServerTime,
    builderConfig,
    getSigner,
    retryOnError,
    throwOnError,
    feeSlippage
  }) {
    this.host = host.endsWith("/") ? host.slice(0, -1) : host;
    this.chainId = chain;
    if (signer !== void 0) {
      this.signer = signer;
    }
    if (creds !== void 0) {
      this.creds = creds;
    }
    this.orderBuilder = new OrderBuilder(
      signer,
      chain,
      signatureType,
      funderAddress,
      getSigner
    );
    this.signatureType = signatureType ?? 0 /* EOA */;
    this.funderAddress = funderAddress;
    this.tickSizes = {};
    this.negRisk = {};
    this.feeRates = {};
    this.feeInfos = {};
    this.builderFeeRates = {};
    this.tokenConditionMap = {};
    this.retryOnError = retryOnError;
    this.throwOnError = throwOnError;
    this.feeSlippage = feeSlippage ?? 0;
    validateFeeSlippage(this.feeSlippage);
    this.useServerTime = useServerTime;
    if (builderConfig !== void 0) {
      this.builderConfig = builderConfig;
    }
  }
  // Public endpoints
  async getOk() {
    return this.get(`${this.host}${OK}`);
  }
  async postHeartbeat(heartbeatId = "") {
    this.canL2Auth();
    const body = JSON.stringify({ heartbeat_id: heartbeatId });
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      { method: POST, requestPath: HEARTBEAT, body },
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.post(`${this.host}${HEARTBEAT}`, {
      headers,
      data: { heartbeat_id: heartbeatId }
    });
  }
  async getVersion() {
    const response = await this.get(`${this.host}/version`);
    return response?.version ?? 2;
  }
  async getServerTime() {
    return this.get(`${this.host}${TIME}`);
  }
  async getSamplingSimplifiedMarkets(next_cursor = INITIAL_CURSOR) {
    return this.get(`${this.host}${GET_SAMPLING_SIMPLIFIED_MARKETS}`, {
      params: { next_cursor }
    });
  }
  async getSamplingMarkets(next_cursor = INITIAL_CURSOR) {
    return this.get(`${this.host}${GET_SAMPLING_MARKETS}`, {
      params: { next_cursor }
    });
  }
  async getSimplifiedMarkets(next_cursor = INITIAL_CURSOR) {
    return this.get(`${this.host}${GET_SIMPLIFIED_MARKETS}`, {
      params: { next_cursor }
    });
  }
  async getMarkets(next_cursor = INITIAL_CURSOR) {
    return this.get(`${this.host}${GET_MARKETS}`, {
      params: { next_cursor }
    });
  }
  async getMarket(conditionID) {
    return this.get(`${this.host}${GET_MARKET}${conditionID}`);
  }
  async getClobMarketInfo(conditionID) {
    const result = await this.get(
      `${this.host}${GET_CLOB_MARKET}${conditionID}`
    );
    if (!result?.t) {
      throw new Error(`failed to fetch market info for condition id ${conditionID}`);
    }
    for (const token of result.t) {
      if (!token) continue;
      const tokenId = token.t;
      this.tokenConditionMap[tokenId] = conditionID;
      this.tickSizes[tokenId] = result.mts.toString();
      this.negRisk[tokenId] = result.nr ?? false;
      this.feeInfos[tokenId] = {
        rate: result.fd?.r ?? 0,
        exponent: result.fd?.e ?? 0
      };
    }
    return result;
  }
  async getOrderBook(tokenID) {
    return this.get(`${this.host}${GET_ORDER_BOOK}`, {
      params: { token_id: tokenID }
    });
  }
  async getOrderBooks(params) {
    return this.post(`${this.host}${GET_ORDER_BOOKS}`, {
      data: params
    });
  }
  async getTickSize(tokenID) {
    if (tokenID in this.tickSizes) {
      return this.tickSizes[tokenID];
    }
    if (tokenID in this.tokenConditionMap) {
      await this.getClobMarketInfo(this.tokenConditionMap[tokenID]);
      return this.tickSizes[tokenID];
    }
    const result = await this.get(`${this.host}${GET_TICK_SIZE}`, {
      params: { token_id: tokenID }
    });
    this.tickSizes[tokenID] = result.minimum_tick_size.toString();
    return this.tickSizes[tokenID];
  }
  async getNegRisk(tokenID) {
    if (tokenID in this.negRisk) {
      return this.negRisk[tokenID];
    }
    if (tokenID in this.tokenConditionMap) {
      await this.getClobMarketInfo(this.tokenConditionMap[tokenID]);
      return this.negRisk[tokenID];
    }
    const result = await this.get(`${this.host}${GET_NEG_RISK}`, {
      params: { token_id: tokenID }
    });
    this.negRisk[tokenID] = result.neg_risk;
    return this.negRisk[tokenID];
  }
  async getFeeRateBps(tokenID) {
    if (tokenID in this.feeRates) {
      return this.feeRates[tokenID];
    }
    const result = await this.get(`${this.host}${GET_FEE_RATE}`, {
      params: { token_id: tokenID }
    });
    this.feeRates[tokenID] = result.base_fee;
    return this.feeRates[tokenID];
  }
  async getFeeExponent(tokenID) {
    if (tokenID in this.feeInfos) {
      return this.feeInfos[tokenID].exponent;
    }
    await this._ensureMarketInfoCached(tokenID);
    return this.feeInfos[tokenID].exponent;
  }
  /**
   * Calculates the hash for the given orderbook
   * @param orderbook
   * @returns
   */
  getOrderBookHash(orderbook) {
    return generateOrderBookSummaryHash(orderbook);
  }
  async getMidpoint(tokenID) {
    return this.get(`${this.host}${GET_MIDPOINT}`, {
      params: { token_id: tokenID }
    });
  }
  async getMidpoints(params) {
    return this.post(`${this.host}${GET_MIDPOINTS}`, {
      data: params
    });
  }
  async getPrice(tokenID, side) {
    return this.get(`${this.host}${GET_PRICE}`, {
      params: { token_id: tokenID, side }
    });
  }
  async getPrices(params) {
    return this.post(`${this.host}${GET_PRICES}`, {
      data: params
    });
  }
  async getSpread(tokenID) {
    return this.get(`${this.host}${GET_SPREAD}`, {
      params: { token_id: tokenID }
    });
  }
  async getSpreads(params) {
    return this.post(`${this.host}${GET_SPREADS}`, {
      data: params
    });
  }
  async getLastTradePrice(tokenID) {
    return this.get(`${this.host}${GET_LAST_TRADE_PRICE}`, {
      params: { token_id: tokenID }
    });
  }
  async getLastTradesPrices(params) {
    return this.post(`${this.host}${GET_LAST_TRADES_PRICES}`, {
      data: params
    });
  }
  async getPricesHistory(params) {
    if (!params.interval && (params.startTs === void 0 || params.endTs === void 0)) {
      throw new Error("getPricesHistory requires either interval or both startTs and endTs");
    }
    return this.get(`${this.host}${GET_PRICES_HISTORY}`, {
      params
    });
  }
  // L1 Authed
  /**
   * Creates a new API key for a user
   * @param nonce
   * @returns ApiKeyCreds
   */
  async createApiKey(nonce) {
    this.canL1Auth();
    const endpoint = `${this.host}${CREATE_API_KEY}`;
    const headers = await createL1Headers(
      this.signer,
      this.chainId,
      nonce,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return await this.post(endpoint, { headers }).then((apiKeyRaw) => {
      const apiKey = {
        key: apiKeyRaw.apiKey,
        secret: apiKeyRaw.secret,
        passphrase: apiKeyRaw.passphrase
      };
      return apiKey;
    });
  }
  /**
   * Derives an existing API key for a user
   * @param nonce
   * @returns ApiKeyCreds
   */
  async deriveApiKey(nonce) {
    this.canL1Auth();
    const endpoint = `${this.host}${DERIVE_API_KEY}`;
    const headers = await createL1Headers(
      this.signer,
      this.chainId,
      nonce,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return await this.get(endpoint, { headers }).then((apiKeyRaw) => {
      const apiKey = {
        key: apiKeyRaw.apiKey,
        secret: apiKeyRaw.secret,
        passphrase: apiKeyRaw.passphrase
      };
      return apiKey;
    });
  }
  async createOrDeriveApiKey(nonce) {
    return this.createApiKey(nonce).then((response) => {
      if (!response.key) {
        return this.deriveApiKey(nonce);
      }
      return response;
    });
  }
  async getApiKeys() {
    this.canL2Auth();
    const endpoint = GET_API_KEYS;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers });
  }
  async getClosedOnlyMode() {
    this.canL2Auth();
    const endpoint = CLOSED_ONLY;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers });
  }
  async deleteApiKey() {
    this.canL2Auth();
    const endpoint = DELETE_API_KEY;
    const headerArgs = {
      method: DELETE,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers });
  }
  async createReadonlyApiKey() {
    this.canL2Auth();
    const endpoint = CREATE_READONLY_API_KEY;
    const headerArgs = {
      method: POST,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.post(`${this.host}${endpoint}`, { headers });
  }
  async getReadonlyApiKeys() {
    this.canL2Auth();
    const endpoint = GET_READONLY_API_KEYS;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers });
  }
  async deleteReadonlyApiKey(key) {
    this.canL2Auth();
    const endpoint = DELETE_READONLY_API_KEY;
    const payload = { key };
    const headerArgs = {
      method: DELETE,
      requestPath: endpoint,
      body: JSON.stringify(payload)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers, data: payload });
  }
  async getOrder(orderID) {
    this.canL2Auth();
    const endpoint = `${GET_ORDER}${orderID}`;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers });
  }
  async getTrades(params, only_first_page = false, next_cursor) {
    this.canL2Auth();
    const endpoint = GET_TRADES;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    let results = [];
    next_cursor = next_cursor || INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR && (next_cursor === INITIAL_CURSOR || !only_first_page)) {
      const _params = {
        ...params,
        next_cursor
      };
      const response = await this.get(`${this.host}${endpoint}`, {
        headers,
        params: _params
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async getTradesPaginated(params, next_cursor) {
    this.canL2Auth();
    const endpoint = GET_TRADES;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    next_cursor = next_cursor || INITIAL_CURSOR;
    const _params = { ...params, next_cursor };
    const {
      data,
      ...rest
    } = await this.get(
      `${this.host}${endpoint}`,
      { headers, params: _params }
    );
    return { trades: Array.isArray(data) ? [...data] : [], ...rest };
  }
  async getBuilderTrades(params, next_cursor) {
    if (!params.builder_code || params.builder_code === bytes32Zero) {
      throw new Error("builderCode is required and cannot be zero");
    }
    const _params = { ...params, next_cursor: next_cursor || INITIAL_CURSOR };
    const {
      data,
      ...rest
    } = await this.get(`${this.host}${GET_BUILDER_TRADES}`, { params: _params });
    return { trades: Array.isArray(data) ? [...data] : [], ...rest };
  }
  async getNotifications() {
    this.canL2Auth();
    const endpoint = GET_NOTIFICATIONS;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, {
      headers,
      params: { signature_type: this.orderBuilder.signatureType }
    });
  }
  async dropNotifications(params) {
    this.canL2Auth();
    const endpoint = DROP_NOTIFICATIONS;
    const l2HeaderArgs = {
      method: DELETE,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, {
      headers,
      params: parseDropNotificationParams(params)
    });
  }
  async getBalanceAllowance(params) {
    this.canL2Auth();
    const endpoint = GET_BALANCE_ALLOWANCE;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const _params = {
      ...params,
      signature_type: this.orderBuilder.signatureType
    };
    return this.get(`${this.host}${endpoint}`, { headers, params: _params });
  }
  async updateBalanceAllowance(params) {
    this.canL2Auth();
    const endpoint = UPDATE_BALANCE_ALLOWANCE;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const _params = {
      ...params,
      signature_type: this.orderBuilder.signatureType
    };
    return this.get(`${this.host}${endpoint}`, { headers, params: _params });
  }
  async createOrder(userOrder, options) {
    this.canL1Auth();
    const orderToSign = { ...userOrder };
    if (this.builderConfig?.builderCode && !orderToSign.builderCode) {
      orderToSign.builderCode = this.builderConfig.builderCode;
    }
    const { tokenID } = orderToSign;
    const tickSize = await this._resolveTickSize(tokenID, options?.tickSize);
    if (!priceValid(orderToSign.price, tickSize)) {
      throw new Error(
        `invalid price (${orderToSign.price}), min: ${parseFloat(tickSize)} - max: ${1 - parseFloat(tickSize)}`
      );
    }
    orderToSign.price = roundNormal(orderToSign.price, ROUNDING_CONFIG[tickSize].price);
    const version = await this.resolveVersion();
    if (version === 2 && orderToSign.side === "BUY" /* BUY */ && "userUSDCBalance" in orderToSign && orderToSign.userUSDCBalance !== void 0) {
      const adjustedAmount = await this.adjustBuyAmountForBalance(
        tokenID,
        orderToSign.size * orderToSign.price,
        orderToSign.price,
        orderToSign.userUSDCBalance,
        orderToSign.builderCode
      );
      orderToSign.size = adjustedAmount / orderToSign.price;
    }
    const negRisk = options?.negRisk ?? await this.getNegRisk(tokenID);
    if (version === 1) {
      const userFeeRateBps = "feeRateBps" in orderToSign ? orderToSign.feeRateBps : void 0;
      const feeRateBps = await this._resolveFeeRateBps(tokenID, userFeeRateBps);
      orderToSign.feeRateBps = feeRateBps;
    }
    return this.orderBuilder.buildOrder(
      orderToSign,
      {
        tickSize,
        negRisk
      },
      version
    );
  }
  async createMarketOrder(userMarketOrder, options) {
    this.canL1Auth();
    const { tokenID } = userMarketOrder;
    await this._ensureMarketInfoCached(tokenID);
    const tickSize = await this._resolveTickSize(tokenID, options?.tickSize);
    if (!userMarketOrder.price) {
      userMarketOrder.price = await this.calculateMarketPrice(
        tokenID,
        userMarketOrder.side,
        userMarketOrder.amount,
        userMarketOrder.orderType
      );
    }
    if (!priceValid(userMarketOrder.price, tickSize)) {
      throw new Error(
        `invalid price (${userMarketOrder.price}), min: ${parseFloat(tickSize)} - max: ${1 - parseFloat(tickSize)}`
      );
    }
    const orderToSign = { ...userMarketOrder };
    if (this.builderConfig?.builderCode && !orderToSign.builderCode) {
      orderToSign.builderCode = this.builderConfig.builderCode;
    }
    await this.ensureBuilderFeeRateCached(orderToSign.builderCode);
    if (orderToSign.side === "BUY" /* BUY */ && "userUSDCBalance" in orderToSign && orderToSign.userUSDCBalance !== void 0) {
      const price = orderToSign.price;
      orderToSign.amount = await this.adjustBuyAmountForBalance(
        tokenID,
        orderToSign.amount,
        price,
        orderToSign.userUSDCBalance,
        orderToSign.builderCode
      );
    }
    const negRisk = options?.negRisk ?? await this.getNegRisk(tokenID);
    const version = await this.resolveVersion();
    if (version === 1) {
      const userFeeRateBps = "feeRateBps" in orderToSign ? orderToSign.feeRateBps : void 0;
      const feeRateBps = await this._resolveFeeRateBps(tokenID, userFeeRateBps);
      orderToSign.feeRateBps = feeRateBps;
    }
    return this.orderBuilder.buildMarketOrder(
      orderToSign,
      {
        tickSize,
        negRisk
      },
      version
    );
  }
  async createAndPostOrder(userOrder, options, orderType = "GTC" /* GTC */, postOnly = false, deferExec = false) {
    let postOrderResponse;
    await this._retryOnVersionUpdate(async () => {
      const order = await this.createOrder(userOrder, options);
      postOrderResponse = await this.postOrder(order, orderType, postOnly, deferExec);
    });
    return postOrderResponse;
  }
  async createAndPostMarketOrder(userMarketOrder, options, orderType = "FOK" /* FOK */, deferExec = false) {
    let postOrderMarketResponse;
    await this._retryOnVersionUpdate(async () => {
      const order = await this.createMarketOrder(userMarketOrder, options);
      postOrderMarketResponse = await this.postOrder(order, orderType, false, deferExec);
    });
    return postOrderMarketResponse;
  }
  async getOpenOrders(params, only_first_page = false, next_cursor) {
    this.canL2Auth();
    const endpoint = GET_OPEN_ORDERS;
    const l2HeaderArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    let results = [];
    next_cursor = next_cursor || INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR && (next_cursor === INITIAL_CURSOR || !only_first_page)) {
      const _params = {
        ...params,
        next_cursor
      };
      const response = await this.get(`${this.host}${endpoint}`, {
        headers,
        params: _params
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async getPreMigrationOrders(only_first_page = false, next_cursor) {
    this.canL2Auth();
    const endpoint = GET_PRE_MIGRATION_ORDERS;
    const l2HeaderArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    let results = [];
    next_cursor = next_cursor || INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR && (next_cursor === INITIAL_CURSOR || !only_first_page)) {
      const _params = { next_cursor };
      const response = await this.get(`${this.host}${endpoint}`, {
        headers,
        params: _params
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async postOrder(order, orderType = "GTC" /* GTC */, postOnly = false, deferExec = false) {
    this.canL2Auth();
    if (postOnly && (orderType === "FOK" /* FOK */ || orderType === "FAK" /* FAK */)) {
      throw new Error("postOnly is not supported for FOK/FAK orders");
    }
    const endpoint = POST_ORDER;
    const orderPayload = isV2Order(order) ? orderToJsonV2(order, this.creds?.key || "", orderType, postOnly, deferExec) : orderToJsonV1(order, this.creds?.key || "", orderType, postOnly, deferExec);
    const l2HeaderArgs = {
      method: POST,
      requestPath: endpoint,
      body: JSON.stringify(orderPayload)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const res = await this.post(
      `${this.host}${endpoint}`,
      {
        headers,
        data: orderPayload
      },
      true
    );
    if (this._isOrderVersionMismatch(res)) await this.resolveVersion(true);
    return this.throwIfError(res);
  }
  async postOrders(args, postOnly = false, deferExec = false) {
    this.canL2Auth();
    if (postOnly && args.some(({ orderType }) => orderType === "FOK" /* FOK */ || orderType === "FAK" /* FAK */)) {
      throw new Error("postOnly is not supported for FOK/FAK orders");
    }
    const endpoint = POST_ORDERS;
    const ordersPayload = [];
    for (const arg of args) {
      const { order, orderType } = arg;
      const orderPayload = isV2Order(order) ? orderToJsonV2(order, this.creds?.key || "", orderType, postOnly, deferExec) : orderToJsonV1(order, this.creds?.key || "", orderType, postOnly, deferExec);
      ordersPayload.push(orderPayload);
    }
    const l2HeaderArgs = {
      method: POST,
      requestPath: endpoint,
      body: JSON.stringify(ordersPayload)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const res = await this.post(
      `${this.host}${endpoint}`,
      {
        headers,
        data: ordersPayload
      },
      true
    );
    if (this._isOrderVersionMismatch(res)) await this.resolveVersion(true);
    return this.throwIfError(res);
  }
  async cancelOrder(payload) {
    this.canL2Auth();
    const endpoint = CANCEL_ORDER;
    const l2HeaderArgs = {
      method: DELETE,
      requestPath: endpoint,
      body: JSON.stringify(payload)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers, data: payload });
  }
  async cancelOrders(ordersHashes) {
    this.canL2Auth();
    const endpoint = CANCEL_ORDERS;
    const l2HeaderArgs = {
      method: DELETE,
      requestPath: endpoint,
      body: JSON.stringify(ordersHashes)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers, data: ordersHashes });
  }
  async cancelAll() {
    this.canL2Auth();
    const endpoint = CANCEL_ALL;
    const l2HeaderArgs = {
      method: DELETE,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers });
  }
  async cancelMarketOrders(payload) {
    this.canL2Auth();
    const endpoint = CANCEL_MARKET_ORDERS;
    const l2HeaderArgs = {
      method: DELETE,
      requestPath: endpoint,
      body: JSON.stringify(payload)
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      l2HeaderArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers, data: payload });
  }
  async isOrderScoring(params) {
    this.canL2Auth();
    const endpoint = IS_ORDER_SCORING;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers, params });
  }
  async areOrdersScoring(params) {
    this.canL2Auth();
    const endpoint = ARE_ORDERS_SCORING;
    const payload = JSON.stringify(params?.orderIds);
    const headerArgs = {
      method: POST,
      requestPath: endpoint,
      body: payload
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.post(`${this.host}${endpoint}`, {
      headers,
      data: payload
    });
  }
  // Rewards
  async getEarningsForUserForDay(date) {
    this.canL2Auth();
    const endpoint = GET_EARNINGS_FOR_USER_FOR_DAY;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    let results = [];
    let next_cursor = INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR) {
      const params = {
        date,
        signature_type: this.orderBuilder.signatureType,
        next_cursor
      };
      const response = await this.get(`${this.host}${endpoint}`, {
        headers,
        params
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async getTotalEarningsForUserForDay(date) {
    this.canL2Auth();
    const endpoint = GET_TOTAL_EARNINGS_FOR_USER_FOR_DAY;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const params = {
      date,
      signature_type: this.orderBuilder.signatureType
    };
    return await this.get(`${this.host}${endpoint}`, {
      headers,
      params
    });
  }
  async getUserEarningsAndMarketsConfig(date, order_by = "", position = "", no_competition = false) {
    this.canL2Auth();
    const endpoint = GET_REWARDS_EARNINGS_PERCENTAGES;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    let results = [];
    let next_cursor = INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR) {
      const params = {
        date,
        signature_type: this.orderBuilder.signatureType,
        next_cursor,
        order_by,
        position,
        no_competition
      };
      const response = await this.get(`${this.host}${endpoint}`, {
        headers,
        params
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async getRewardPercentages() {
    this.canL2Auth();
    const endpoint = GET_LIQUIDITY_REWARD_PERCENTAGES;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    const _params = {
      signature_type: this.orderBuilder.signatureType
    };
    return this.get(`${this.host}${endpoint}`, { headers, params: _params });
  }
  async getCurrentRewards() {
    let results = [];
    let next_cursor = INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR) {
      const response = await this.get(`${this.host}${GET_REWARDS_MARKETS_CURRENT}`, {
        params: { next_cursor }
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async getRawRewardsForMarket(conditionId) {
    let results = [];
    let next_cursor = INITIAL_CURSOR;
    while (next_cursor !== END_CURSOR) {
      const response = await this.get(`${this.host}${GET_REWARDS_MARKETS}${conditionId}`, {
        params: { next_cursor }
      });
      next_cursor = response.next_cursor;
      results = [...results, ...response.data];
    }
    return results;
  }
  async calculateMarketPrice(tokenID, side, amount, orderType = "FOK" /* FOK */) {
    const book = await this.getOrderBook(tokenID);
    if (!book) {
      throw new Error("no orderbook");
    }
    if (side === "BUY" /* BUY */) {
      if (!book.asks) {
        throw new Error("no match");
      }
      return calculateBuyMarketPrice(book.asks, amount, orderType);
    } else {
      if (!book.bids) {
        throw new Error("no match");
      }
      return calculateSellMarketPrice(book.bids, amount, orderType);
    }
  }
  async createBuilderApiKey() {
    this.canL2Auth();
    const endpoint = CREATE_BUILDER_API_KEY;
    const headerArgs = {
      method: POST,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.post(`${this.host}${endpoint}`, { headers });
  }
  async getBuilderApiKeys() {
    this.canL2Auth();
    const endpoint = GET_BUILDER_API_KEYS;
    const headerArgs = {
      method: GET,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.get(`${this.host}${endpoint}`, { headers });
  }
  async revokeBuilderApiKey() {
    this.canL2Auth();
    const endpoint = REVOKE_BUILDER_API_KEY;
    const headerArgs = {
      method: DELETE,
      requestPath: endpoint
    };
    const headers = await createL2Headers(
      this.signer,
      this.creds,
      headerArgs,
      this.useServerTime ? await this.getServerTime() : void 0
    );
    return this.del(`${this.host}${endpoint}`, { headers });
  }
  async getMarketTradesEvents(conditionID) {
    return this.get(`${this.host}${GET_MARKET_TRADES_EVENTS}${conditionID}`);
  }
  canL1Auth() {
    if (this.signer === void 0) {
      throw L1_AUTH_UNAVAILABLE_ERROR;
    }
  }
  canL2Auth() {
    if (this.signer === void 0) {
      throw L1_AUTH_UNAVAILABLE_ERROR;
    }
    if (this.creds === void 0) {
      throw L2_AUTH_NOT_AVAILABLE;
    }
  }
  isBuilderOrder(builderCode) {
    return builderCode !== void 0 && builderCode !== bytes32Zero;
  }
  async getBuilderTakerFeeRate(builderCode) {
    if (!this.isBuilderOrder(builderCode)) return 0;
    await this.ensureBuilderFeeRateCached(builderCode);
    return this.builderFeeRates[builderCode ?? ""]?.taker ?? 0;
  }
  async adjustBuyAmountForBalance(tokenID, amount, price, userUSDCBalance, builderCode) {
    await this._ensureMarketInfoCached(tokenID);
    const builderTakerFeeRate = await this.getBuilderTakerFeeRate(builderCode);
    return adjustBuyAmountForFees(
      amount,
      price,
      userUSDCBalance,
      this.feeInfos[tokenID].rate,
      this.feeInfos[tokenID].exponent,
      builderTakerFeeRate,
      this.feeSlippage
    );
  }
  async _ensureMarketInfoCached(tokenID) {
    if (tokenID in this.feeInfos) return;
    if (!(tokenID in this.tokenConditionMap)) {
      const result = await this.get(`${this.host}${GET_MARKET_BY_TOKEN}${tokenID}`);
      if (!result?.condition_id) {
        throw new Error(`failed to resolve condition id for token ${tokenID}`);
      }
      this.tokenConditionMap[tokenID] = result.condition_id;
    }
    await this.getClobMarketInfo(this.tokenConditionMap[tokenID]);
  }
  async ensureBuilderFeeRateCached(builderCode) {
    if (!builderCode || builderCode === bytes32Zero) return;
    if (builderCode in this.builderFeeRates) return;
    const result = await this.get(`${this.host}${GET_BUILDER_FEES}${builderCode}`);
    this.builderFeeRates[builderCode] = {
      maker: result.builder_maker_fee_rate_bps / BUILDER_FEES_BPS,
      taker: result.builder_taker_fee_rate_bps / BUILDER_FEES_BPS
    };
  }
  async _resolveTickSize(tokenID, tickSize) {
    const minTickSize = await this.getTickSize(tokenID);
    if (tickSize) {
      if (isTickSizeSmaller(tickSize, minTickSize)) {
        throw new Error(
          `invalid tick size (${tickSize}), minimum for the market is ${minTickSize}`
        );
      }
    } else {
      tickSize = minTickSize;
    }
    return tickSize;
  }
  async _resolveFeeRateBps(tokenID, userFeeRateBps) {
    const marketFeeRateBps = await this.getFeeRateBps(tokenID);
    if (marketFeeRateBps > 0 && userFeeRateBps !== void 0 && userFeeRateBps !== marketFeeRateBps) {
      throw new Error(
        `invalid user provided fee rate: ${userFeeRateBps}, fee rate for the market must be ${marketFeeRateBps}`
      );
    }
    return marketFeeRateBps;
  }
  async resolveVersion(forceUpdate = false) {
    if (!forceUpdate && this.cachedVersion !== void 0) {
      return this.cachedVersion;
    }
    const apiVersion = await this.getVersion();
    this.cachedVersion = apiVersion;
    return apiVersion;
  }
  async _retryOnVersionUpdate(retryFunc) {
    const version = await this.resolveVersion();
    for (let attempt = 0; attempt < 2; attempt++) {
      await retryFunc();
      if (version === await this.resolveVersion()) break;
    }
  }
  _isOrderVersionMismatch(resp) {
    const error = resp?.error;
    if (!error) return false;
    const message = typeof error === "string" ? error : JSON.stringify(error);
    return message.includes(ORDER_VERSION_MISMATCH_ERROR);
  }
  throwIfError(result) {
    if (this.throwOnError && result && typeof result === "object" && "error" in result) {
      const msg = typeof result.error === "string" ? result.error : JSON.stringify(result.error);
      throw new ApiError(msg, result.status, result);
    }
    return result;
  }
  // http methods
  async get(endpoint, options, skipThrow = false) {
    const result = await get(endpoint, options);
    return skipThrow ? result : this.throwIfError(result);
  }
  async post(endpoint, options, skipThrow = false) {
    const result = await post(endpoint, options, this.retryOnError);
    return skipThrow ? result : this.throwIfError(result);
  }
  async del(endpoint, options, skipThrow = false) {
    const result = await del(endpoint, options);
    return skipThrow ? result : this.throwIfError(result);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApiError,
  AssetType,
  COLLATERAL_TOKEN_DECIMALS,
  CONDITIONAL_TOKEN_DECIMALS,
  Chain,
  ClobClient,
  L1_AUTH_UNAVAILABLE_ERROR,
  L2_AUTH_NOT_AVAILABLE,
  OrderBuilder,
  OrderType,
  PriceHistoryInterval,
  Side,
  SignatureTypeV1,
  SignatureTypeV2,
  adjustBuyAmountForFees,
  createL1Headers,
  createL2Headers,
  getContractConfig,
  isV2Order,
  orderToJsonV1,
  orderToJsonV2
});
//# sourceMappingURL=index.cjs.map