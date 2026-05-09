import { WalletClient } from 'viem';

type TypedDataDomain = Record<string, unknown>;
type TypedDataTypes = Record<string, Array<{
    name: string;
    type: string;
}>>;
type TypedDataValue = Record<string, unknown>;
interface EthersSigner {
    _signTypedData(domain: TypedDataDomain, types: TypedDataTypes, value: TypedDataValue): Promise<string>;
    getAddress(): Promise<string>;
}
type ClobSigner = EthersSigner | WalletClient;

declare type EIP712ObjectValue = string | number | EIP712Object;
interface EIP712Object {
    [key: string]: EIP712ObjectValue;
}

type OrderSignature = string;

declare enum Side {
    BUY = "BUY",
    SELL = "SELL"
}

interface ApiKeyCreds {
    key: string;
    secret: string;
    passphrase: string;
}
interface BuilderConfig {
    builderCode: string;
}
interface ApiKeyRaw {
    apiKey: string;
    secret: string;
    passphrase: string;
}
interface L2HeaderArgs {
    method: string;
    requestPath: string;
    body?: string;
}
type SimpleHeaders = Record<string, string | number | boolean>;
interface L1PolyHeader extends SimpleHeaders {
    POLY_ADDRESS: string;
    POLY_SIGNATURE: string;
    POLY_TIMESTAMP: string;
    POLY_NONCE: string;
}
interface L2PolyHeader extends SimpleHeaders {
    POLY_ADDRESS: string;
    POLY_SIGNATURE: string;
    POLY_TIMESTAMP: string;
    POLY_API_KEY: string;
    POLY_PASSPHRASE: string;
}
declare enum OrderType {
    GTC = "GTC",
    FOK = "FOK",
    GTD = "GTD",
    FAK = "FAK"
}
interface OrderPayload {
    orderID: string;
}
interface OrderResponse {
    success: boolean;
    errorMsg: string;
    orderID: string;
    transactionsHashes: string[];
    status: string;
    takingAmount: string;
    makingAmount: string;
}
interface OpenOrder {
    id: string;
    status: string;
    owner: string;
    maker_address: string;
    market: string;
    asset_id: string;
    side: string;
    original_size: string;
    size_matched: string;
    price: string;
    associate_trades: string[];
    outcome: string;
    created_at: number;
    expiration: string;
    order_type: string;
}
type OpenOrdersResponse = OpenOrder[];
type PreMigrationOrder = OpenOrder;
type PreMigrationOrdersResponse = PreMigrationOrder[];
interface MakerOrder {
    order_id: string;
    owner: string;
    maker_address: string;
    matched_amount: string;
    price: string;
    fee_rate_bps: string;
    asset_id: string;
    outcome: string;
    side: Side;
}
interface Trade {
    id: string;
    taker_order_id: string;
    market: string;
    asset_id: string;
    side: Side;
    size: string;
    fee_rate_bps: string;
    price: string;
    status: string;
    match_time: string;
    last_update: string;
    outcome: string;
    bucket_index: number;
    owner: string;
    maker_address: string;
    maker_orders: MakerOrder[];
    transaction_hash: string;
    trader_side: "TAKER" | "MAKER";
}
interface ApiKeysResponse {
    apiKeys: ApiKeyCreds[];
}
interface BanStatus {
    closed_only: boolean;
}
interface TradeParams {
    id?: string;
    maker_address?: string;
    market?: string;
    asset_id?: string;
    before?: string;
    after?: string;
}
interface BuilderTradeParams extends TradeParams {
    builder_code: string;
}
interface OpenOrderParams {
    id?: string;
    market?: string;
    asset_id?: string;
}
declare enum Chain {
    POLYGON = 137,
    AMOY = 80002
}
interface MarketPrice {
    t: number;
    p: number;
}
interface PriceHistoryFilterParams {
    market?: string;
    startTs?: number;
    endTs?: number;
    fidelity?: number;
    interval?: PriceHistoryInterval;
}
declare enum PriceHistoryInterval {
    MAX = "max",
    ONE_WEEK = "1w",
    ONE_DAY = "1d",
    SIX_HOURS = "6h",
    ONE_HOUR = "1h"
}
interface DropNotificationParams {
    ids: string[];
}
interface Notification {
    type: number;
    owner: string;
    payload: any;
}
interface OrderMarketCancelParams {
    market?: string;
    asset_id?: string;
}
interface OrderBookSummary {
    market: string;
    asset_id: string;
    timestamp: string;
    bids: OrderSummary[];
    asks: OrderSummary[];
    min_order_size: string;
    tick_size: string;
    neg_risk: boolean;
    hash: string;
    last_trade_price: string;
}
interface OrderSummary {
    price: string;
    size: string;
}
declare enum AssetType {
    COLLATERAL = "COLLATERAL",
    CONDITIONAL = "CONDITIONAL"
}
interface BalanceAllowanceParams {
    asset_type: AssetType;
    token_id?: string;
}
interface BalanceAllowanceResponse {
    balance: string;
    allowance: string;
}
interface OrderScoringParams {
    order_id: string;
}
interface OrderScoring {
    scoring: boolean;
}
interface OrdersScoringParams {
    orderIds: string[];
}
type OrdersScoring = {
    [orderId in string]: boolean;
};
type CreateOrderOptions = {
    tickSize: TickSize;
    negRisk?: boolean;
};
type TickSize = "0.1" | "0.01" | "0.001" | "0.0001";
interface RoundConfig {
    readonly price: number;
    readonly size: number;
    readonly amount: number;
}
interface TickSizes {
    [tokenId: string]: TickSize;
}
interface FeeRates {
    [tokenId: string]: number;
}
interface NegRisk {
    [tokenId: string]: boolean;
}
interface FeeInfo {
    rate: number;
    exponent: number;
}
interface FeeInfos {
    [tokenId: string]: FeeInfo;
}
interface BuilderFeeRates {
    [builderCode: string]: {
        maker: number;
        taker: number;
    };
}
type TokenConditionMap = Record<string, string>;
interface FeeDetails {
    r?: number;
    e?: number;
    to: boolean;
}
interface ClobToken {
    t: string;
    o: string;
}
interface MarketDetails {
    c: string;
    t: [ClobToken | null, ClobToken | null];
    mts: number;
    nr: boolean;
    fd?: FeeDetails;
    mbf?: number;
    tbf?: number;
}
interface PaginationPayload {
    readonly limit: number;
    readonly count: number;
    readonly next_cursor: string;
    readonly data: any[];
}
interface BookParams {
    token_id: string;
    side: Side;
}
interface UserEarning {
    date: string;
    condition_id: string;
    asset_address: string;
    maker_address: string;
    earnings: number;
    asset_rate: number;
}
interface TotalUserEarning {
    date: string;
    asset_address: string;
    maker_address: string;
    earnings: number;
    asset_rate: number;
}
interface RewardsPercentages {
    [market: string]: number;
}
interface Token {
    token_id: string;
    outcome: string;
    price: number;
}
interface RewardsConfig {
    asset_address: string;
    start_date: string;
    end_date: string;
    rate_per_day: number;
    total_rewards: number;
}
interface MarketReward {
    condition_id: string;
    question: string;
    market_slug: string;
    event_slug: string;
    image: string;
    rewards_max_spread: number;
    rewards_min_size: number;
    tokens: Token[];
    rewards_config: RewardsConfig[];
}
interface Earning {
    asset_address: string;
    earnings: number;
    asset_rate: number;
}
interface UserRewardsEarning {
    condition_id: string;
    question: string;
    market_slug: string;
    event_slug: string;
    image: string;
    rewards_max_spread: number;
    rewards_min_size: number;
    market_competitiveness: number;
    tokens: Token[];
    rewards_config: RewardsConfig[];
    maker_address: string;
    earning_percentage: number;
    earnings: Earning[];
}
interface BuilderTrade {
    id: string;
    tradeType: string;
    takerOrderHash: string;
    builder: string;
    market: string;
    assetId: string;
    side: string;
    size: string;
    sizeUsdc: string;
    price: string;
    status: string;
    outcome: string;
    outcomeIndex: number;
    owner: string;
    maker: string;
    transactionHash: string;
    matchTime: string;
    bucketIndex: number;
    fee: string;
    feeUsdc: string;
    err_msg?: string | null;
    createdAt: string | null;
    updatedAt: string | null;
}
interface ReadonlyApiKeyResponse {
    apiKey: string;
}
interface MarketTradeEvent {
    event_type: string;
    market: {
        condition_id: string;
        asset_id: string;
        question: string;
        icon: string;
        slug: string;
    };
    user: {
        address: string;
        username: string;
        profile_picture: string;
        optimized_profile_picture: string;
        pseudonym: string;
    };
    side: Side;
    size: string;
    fee_rate_bps: string;
    price: string;
    outcome: string;
    outcome_index: number;
    transaction_hash: string;
    timestamp: string;
}
interface BuilderApiKey {
    key: string;
    secret: string;
    passphrase: string;
}
interface BuilderApiKeyResponse {
    key: string;
    createdAt?: string;
    revokedAt?: string;
}
type ClobErrorResponseBody = {
    error: string;
};
interface TradesPaginatedResponse {
    trades: Trade[];
    next_cursor: string;
    limit: number;
    count: number;
}
interface BuilderTradesResponse {
    trades: BuilderTrade[];
    next_cursor: string;
    limit: number;
    count: number;
}

declare function orderToJsonV1<T extends OrderType>(order: SignedOrderV1, owner: string, orderType: T, postOnly?: boolean, deferExec?: boolean): NewOrderV1<T>;
interface PostOrdersV1Args {
    order: SignedOrderV1;
    orderType: OrderType;
}
interface NewOrderV1<T extends OrderType> {
    readonly order: {
        readonly salt: number;
        readonly maker: string;
        readonly signer: string;
        readonly taker: string;
        readonly tokenId: string;
        readonly makerAmount: string;
        readonly takerAmount: string;
        readonly expiration: string;
        readonly nonce: string;
        readonly feeRateBps: string;
        readonly side: string;
        readonly signatureType: SignatureTypeV1;
        readonly signature: string;
    };
    readonly owner: string;
    readonly orderType: T;
    readonly deferExec: boolean;
    readonly postOnly: boolean;
}
interface UserOrderV1 {
    /**
     * TokenID of the Conditional token asset being traded
     */
    tokenID: string;
    /**
     * Price used to create the order
     */
    price: number;
    /**
     * Size in terms of the ConditionalToken
     */
    size: number;
    /**
     * Side of the order
     */
    side: Side;
    /**
     * Fee rate, in basis points, charged to the order maker, charged on proceeds
     */
    feeRateBps?: number;
    /**
     * Nonce used for onchain cancellations
     */
    nonce?: number;
    /**
     * Timestamp after which the order is expired.
     */
    expiration?: number;
    /**
     * Address of the order taker. The zero address is used to indicate a public order
     */
    taker?: string;
    /**
     * Builder code (bytes32)
     */
    builderCode?: string;
}
interface UserMarketOrderV1 {
    /**
     * TokenID of the Conditional token asset being traded
     */
    tokenID: string;
    /**
     * Price used to create the order
     * If it is not present the market price will be used.
     */
    price?: number;
    /**
     * BUY orders: $$$ Amount to buy
     * SELL orders: Shares to sell
     */
    amount: number;
    /**
     * Side of the order
     */
    side: Side;
    /**
     * Fee rate, in basis points, charged to the order maker, charged on proceeds
     */
    feeRateBps?: number;
    /**
     * Nonce used for onchain cancellations
     */
    nonce?: number;
    /**
     * Address of the order taker. The zero address is used to indicate a public order
     */
    taker?: string;
    /**
     * Specifies the type of order execution:
     * - FOK (Fill or Kill): The order must be filled entirely or not at all.
     * - FAK (Fill and Kill): The order can be partially filled, and any unfilled portion is canceled.
     */
    orderType?: OrderType.FOK | OrderType.FAK;
    /**
     * Builder code (bytes32)
     */
    builderCode?: string;
}

declare function orderToJsonV2<T extends OrderType>(order: SignedOrderV2, owner: string, orderType: T, postOnly?: boolean, deferExec?: boolean): NewOrderV2<T>;
interface PostOrdersV2Args {
    order: SignedOrderV2;
    orderType: OrderType;
}
interface NewOrderV2<T extends OrderType> {
    readonly order: {
        readonly salt: number;
        readonly maker: string;
        readonly signer: string;
        readonly taker: string;
        readonly tokenId: string;
        readonly makerAmount: string;
        readonly takerAmount: string;
        readonly side: string;
        readonly signatureType: SignatureTypeV2;
        readonly timestamp: string;
        readonly expiration: string;
        readonly metadata: string;
        readonly builder: string;
        readonly signature: string;
    };
    readonly owner: string;
    readonly orderType: T;
    readonly deferExec: boolean;
    readonly postOnly: boolean;
}
interface UserOrderV2 {
    /**
     * TokenID of the Conditional token asset being traded
     */
    tokenID: string;
    /**
     * Price used to create the order
     */
    price: number;
    /**
     * Size in terms of the ConditionalToken
     */
    size: number;
    /**
     * Side of the order
     */
    side: Side;
    /**
     * Metadata (bytes32)
     */
    metadata?: string;
    /**
     * Builder code (bytes32)
     */
    builderCode?: string;
    /**
     * Expiration timestamp (unix seconds). Defaults to 0 (no expiration).
     */
    expiration?: number;
    /**
     * User's USDC balance. If provided and sufficient to cover amount + fees, the order
     * size is used as-is. Otherwise fees are deducted from the order notional and size is reduced.
     * If this field is left empty, the default flow is to use the order size as-is.
     * This is used for marketable limit orders
     */
    userUSDCBalance?: number;
}
interface UserMarketOrderV2 {
    /**
     * TokenID of the Conditional token asset being traded
     */
    tokenID: string;
    /**
     * Price used to create the order
     * If it is not present the market price will be used.
     */
    price?: number;
    /**
     * BUY orders: $$$ Amount to buy
     * SELL orders: Shares to sell
     */
    amount: number;
    /**
     * Side of the order
     */
    side: Side;
    /**
     * Specifies the type of order execution:
     * - FOK (Fill or Kill): The order must be filled entirely or not at all.
     * - FAK (Fill and Kill): The order can be partially filled, and any unfilled portion is canceled.
     */
    orderType?: OrderType.FOK | OrderType.FAK;
    /**
     * User's USDC balance. If provided and sufficient to cover amount + fees, the order
     * amount is used as-is. Otherwise fees are deducted from the amount.
     * If this field is left empty, the default flow is to use the order amount as-is
     */
    userUSDCBalance?: number;
    /**
     * Metadata (bytes32)
     */
    metadata?: string;
    /**
     * Builder code (bytes32)
     */
    builderCode?: string;
}

type SignedOrder = SignedOrderV1 | SignedOrderV2;
type PostOrdersArgs = {
    order: SignedOrder;
    orderType: OrderType;
};
type VersionedSignedOrder = {
    version: 1;
    order: SignedOrderV1;
} | {
    version: 2;
    order: SignedOrderV2;
};
type VersionedUserOrder = {
    version: 1;
    order: UserOrderV1;
} | {
    version: 2;
    order: UserOrderV2;
};
type VersionedUserMarketOrder = {
    version: 1;
    order: UserMarketOrderV1;
} | {
    version: 2;
    order: UserMarketOrderV2;
};
type VersionedPostOrdersArgs = {
    version: 1;
    args: PostOrdersV1Args;
} | {
    version: 2;
    args: PostOrdersV2Args;
};
declare function isV2Order(order: SignedOrder | VersionedSignedOrder): order is SignedOrderV2;

declare enum SignatureTypeV1 {
    /**
     * ECDSA EIP712 signatures signed by EOAs
     */
    EOA = 0,
    /**
     * EIP712 signatures signed by EOAs that own Polymarket Proxy wallets
     */
    POLY_PROXY = 1,
    /**
     * EIP712 signatures signed by EOAs that own Polymarket Gnosis safes
     */
    POLY_GNOSIS_SAFE = 2
}

interface OrderV1 extends EIP712Object {
    /**
     *  Unique salt to ensure entropy
     */
    readonly salt: string;
    /**
     * Maker of the order, i.e the source of funds for the order
     */
    readonly maker: string;
    /**
     * Signer of the order
     */
    readonly signer: string;
    /**
     * Address of the order taker. The zero address is used to indicate a public order
     */
    readonly taker: string;
    /**
     * Token Id of the CTF ERC1155 asset to be bought or sold.
     * If BUY, this is the tokenId of the asset to be bought, i.e the makerAssetId
     * If SELL, this is the tokenId of the asset to be sold, i.e the  takerAssetId
     */
    readonly tokenId: string;
    /**
     * Maker amount, i.e the max amount of tokens to be sold
     */
    readonly makerAmount: string;
    /**
     * Taker amount, i.e the minimum amount of tokens to be received
     */
    readonly takerAmount: string;
    /**
     * Timestamp after which the order is expired
     */
    readonly expiration: string;
    /**
     * Nonce used for onchain cancellations
     */
    readonly nonce: string;
    /**
     * Fee rate, in basis points, charged to the order maker, charged on proceeds
     */
    readonly feeRateBps: string;
    /**
     * The side of the order, BUY or SELL
     */
    readonly side: Side;
    /**
     * Signature type used by the Order
     */
    readonly signatureType: SignatureTypeV1;
}
interface SignedOrderV1 extends OrderV1 {
    /**
     * The order signature
     */
    readonly signature: OrderSignature;
}

declare enum SignatureTypeV2 {
    /**
     * ECDSA EIP712 signatures signed by EOAs
     */
    EOA = 0,
    /**
     * EIP712 signatures signed by EOAs that own Polymarket Proxy wallets
     */
    POLY_PROXY = 1,
    /**
     * EIP712 signatures signed by EOAs that own Polymarket Gnosis safes
     */
    POLY_GNOSIS_SAFE = 2,
    /**
     * EIP1271 signatures signed by smart contracts. To be used by smart contract wallets or vaults
     */
    POLY_1271 = 3
}

interface OrderV2 extends EIP712Object {
    /**
     *  Unique salt to ensure entropy
     */
    readonly salt: string;
    /**
     * Maker of the order, i.e the source of funds for the order
     */
    readonly maker: string;
    /**
     * Signer of the order
     */
    readonly signer: string;
    /**
     * Token Id of the CTF ERC1155 asset to be bought or sold.
     * If BUY, this is the tokenId of the asset to be bought, i.e the makerAssetId
     * If SELL, this is the tokenId of the asset to be sold, i.e the  takerAssetId
     */
    readonly tokenId: string;
    /**
     * Maker amount, i.e the max amount of tokens to be sold
     */
    readonly makerAmount: string;
    /**
     * Taker amount, i.e the minimum amount of tokens to be received
     */
    readonly takerAmount: string;
    /**
     * The side of the order, BUY or SELL
     */
    readonly side: Side;
    /**
     * Signature type used by the Order
     */
    readonly signatureType: SignatureTypeV2;
    /**
     * Timestamp of the order
     */
    readonly timestamp: string;
    /**
     * Metadata of the order
     */
    readonly metadata: string;
    /**
     * Builder of the order
     */
    readonly builder: string;
    /**
     * Expiration timestamp of the order (unix seconds, "0" = no expiration)
     */
    readonly expiration: string;
}
interface SignedOrderV2 extends OrderV2 {
    /**
     * The order signature
     */
    readonly signature: OrderSignature;
}

declare class OrderBuilder {
    readonly signer: ClobSigner;
    readonly chainId: Chain;
    readonly signatureType: SignatureTypeV2;
    readonly funderAddress?: string;
    /**
     * Optional function to dynamically resolve the signer.
     * If provided, this function will be called to obtain a fresh signer instance
     * (e.g., for smart contract wallets or when the signer may change).
     * Should return a Wallet or JsonRpcSigner, or a Promise resolving to one.
     * If not provided, the static `signer` property is used.
     */
    private getSigner?;
    constructor(signer: ClobSigner, chainId: Chain, signatureType?: SignatureTypeV2, funderAddress?: string, getSigner?: () => Promise<ClobSigner> | ClobSigner);
    /**
     * Generate and sign a order
     */
    buildOrder(userOrder: UserOrderV1 | UserOrderV2, options: CreateOrderOptions, version: number): Promise<SignedOrderV1 | SignedOrderV2>;
    /**
     * Generate and sign a market order
     */
    buildMarketOrder(userMarketOrder: UserMarketOrderV1 | UserMarketOrderV2, options: CreateOrderOptions, version: number): Promise<SignedOrderV1 | SignedOrderV2>;
    /** Unified getter: use fresh signer if available */
    private resolveSigner;
}

declare function adjustBuyAmountForFees(amount: number, price: number, userUSDCBalance: number, feeRate: number, feeExponent: number, builderTakerFeeRate: number, feeSlippage?: number): number;

interface ClobClientOptions {
    host: string;
    chain: Chain;
    signer?: ClobSigner;
    creds?: ApiKeyCreds;
    signatureType?: SignatureTypeV2;
    funderAddress?: string;
    useServerTime?: boolean;
    builderConfig?: BuilderConfig;
    getSigner?: () => Promise<ClobSigner> | ClobSigner;
    retryOnError?: boolean;
    throwOnError?: boolean;
    feeSlippage?: number;
}
declare class ClobClient {
    readonly host: string;
    readonly chainId: Chain;
    readonly signer?: ClobSigner;
    readonly creds?: ApiKeyCreds;
    readonly orderBuilder: OrderBuilder;
    readonly tickSizes: TickSizes;
    readonly negRisk: NegRisk;
    readonly feeInfos: FeeInfos;
    readonly feeRates: FeeRates;
    readonly builderFeeRates: BuilderFeeRates;
    private readonly tokenConditionMap;
    readonly useServerTime?: boolean;
    readonly builderConfig?: BuilderConfig;
    readonly signatureType: SignatureTypeV2;
    readonly funderAddress?: string;
    private cachedVersion?;
    readonly retryOnError?: boolean;
    readonly throwOnError?: boolean;
    readonly feeSlippage: number;
    constructor({ host, chain, signer, creds, signatureType, funderAddress, useServerTime, builderConfig, getSigner, retryOnError, throwOnError, feeSlippage, }: ClobClientOptions);
    getOk(): Promise<any>;
    postHeartbeat(heartbeatId?: string): Promise<{
        heartbeat_id: string;
        error_msg?: string;
    }>;
    getVersion(): Promise<number>;
    getServerTime(): Promise<number>;
    getSamplingSimplifiedMarkets(next_cursor?: string): Promise<PaginationPayload>;
    getSamplingMarkets(next_cursor?: string): Promise<PaginationPayload>;
    getSimplifiedMarkets(next_cursor?: string): Promise<PaginationPayload>;
    getMarkets(next_cursor?: string): Promise<PaginationPayload>;
    getMarket(conditionID: string): Promise<any>;
    getClobMarketInfo(conditionID: string): Promise<MarketDetails>;
    getOrderBook(tokenID: string): Promise<OrderBookSummary>;
    getOrderBooks(params: BookParams[]): Promise<OrderBookSummary[]>;
    getTickSize(tokenID: string): Promise<TickSize>;
    getNegRisk(tokenID: string): Promise<boolean>;
    getFeeRateBps(tokenID: string): Promise<number>;
    getFeeExponent(tokenID: string): Promise<number>;
    /**
     * Calculates the hash for the given orderbook
     * @param orderbook
     * @returns
     */
    getOrderBookHash(orderbook: OrderBookSummary): string;
    getMidpoint(tokenID: string): Promise<any>;
    getMidpoints(params: BookParams[]): Promise<any>;
    getPrice(tokenID: string, side: string): Promise<any>;
    getPrices(params: BookParams[]): Promise<any>;
    getSpread(tokenID: string): Promise<any>;
    getSpreads(params: BookParams[]): Promise<any>;
    getLastTradePrice(tokenID: string): Promise<any>;
    getLastTradesPrices(params: BookParams[]): Promise<any>;
    getPricesHistory(params: PriceHistoryFilterParams): Promise<MarketPrice[]>;
    /**
     * Creates a new API key for a user
     * @param nonce
     * @returns ApiKeyCreds
     */
    createApiKey(nonce?: number): Promise<ApiKeyCreds>;
    /**
     * Derives an existing API key for a user
     * @param nonce
     * @returns ApiKeyCreds
     */
    deriveApiKey(nonce?: number): Promise<ApiKeyCreds>;
    createOrDeriveApiKey(nonce?: number): Promise<ApiKeyCreds>;
    getApiKeys(): Promise<ApiKeysResponse>;
    getClosedOnlyMode(): Promise<BanStatus>;
    deleteApiKey(): Promise<any>;
    createReadonlyApiKey(): Promise<ReadonlyApiKeyResponse>;
    getReadonlyApiKeys(): Promise<string[]>;
    deleteReadonlyApiKey(key: string): Promise<boolean>;
    getOrder(orderID: string): Promise<OpenOrder>;
    getTrades(params?: TradeParams, only_first_page?: boolean, next_cursor?: string): Promise<Trade[]>;
    getTradesPaginated(params?: TradeParams, next_cursor?: string): Promise<TradesPaginatedResponse>;
    getBuilderTrades(params: BuilderTradeParams, next_cursor?: string): Promise<BuilderTradesResponse>;
    getNotifications(): Promise<Notification[]>;
    dropNotifications(params?: DropNotificationParams): Promise<void>;
    getBalanceAllowance(params?: BalanceAllowanceParams): Promise<BalanceAllowanceResponse>;
    updateBalanceAllowance(params?: BalanceAllowanceParams): Promise<void>;
    createOrder(userOrder: UserOrderV1 | UserOrderV2, options?: Partial<CreateOrderOptions>): Promise<SignedOrder>;
    createMarketOrder(userMarketOrder: UserMarketOrderV1 | UserMarketOrderV2, options?: Partial<CreateOrderOptions>): Promise<SignedOrder>;
    createAndPostOrder<T extends OrderType.GTC | OrderType.GTD = OrderType.GTC>(userOrder: UserOrderV1 | UserOrderV2, options?: Partial<CreateOrderOptions>, orderType?: T, postOnly?: boolean, deferExec?: boolean): Promise<any>;
    createAndPostMarketOrder<T extends OrderType.FOK | OrderType.FAK = OrderType.FOK>(userMarketOrder: UserMarketOrderV1 | UserMarketOrderV2, options?: Partial<CreateOrderOptions>, orderType?: T, deferExec?: boolean): Promise<any>;
    getOpenOrders(params?: OpenOrderParams, only_first_page?: boolean, next_cursor?: string): Promise<OpenOrdersResponse>;
    getPreMigrationOrders(only_first_page?: boolean, next_cursor?: string): Promise<PreMigrationOrdersResponse>;
    postOrder<T extends OrderType = OrderType.GTC>(order: SignedOrder, orderType?: T, postOnly?: boolean, deferExec?: boolean): Promise<any>;
    postOrders(args: PostOrdersArgs[], postOnly?: boolean, deferExec?: boolean): Promise<any>;
    cancelOrder(payload: OrderPayload): Promise<any>;
    cancelOrders(ordersHashes: string[]): Promise<any>;
    cancelAll(): Promise<any>;
    cancelMarketOrders(payload: OrderMarketCancelParams): Promise<any>;
    isOrderScoring(params?: OrderScoringParams): Promise<OrderScoring>;
    areOrdersScoring(params?: OrdersScoringParams): Promise<OrdersScoring>;
    getEarningsForUserForDay(date: string): Promise<UserEarning[]>;
    getTotalEarningsForUserForDay(date: string): Promise<TotalUserEarning[]>;
    getUserEarningsAndMarketsConfig(date: string, order_by?: string, position?: string, no_competition?: boolean): Promise<UserRewardsEarning[]>;
    getRewardPercentages(): Promise<RewardsPercentages>;
    getCurrentRewards(): Promise<MarketReward[]>;
    getRawRewardsForMarket(conditionId: string): Promise<MarketReward[]>;
    calculateMarketPrice(tokenID: string, side: Side, amount: number, orderType?: OrderType): Promise<number>;
    createBuilderApiKey(): Promise<BuilderApiKey>;
    getBuilderApiKeys(): Promise<BuilderApiKeyResponse[]>;
    revokeBuilderApiKey(): Promise<any>;
    getMarketTradesEvents(conditionID: string): Promise<MarketTradeEvent[]>;
    private canL1Auth;
    private canL2Auth;
    private isBuilderOrder;
    private getBuilderTakerFeeRate;
    private adjustBuyAmountForBalance;
    private _ensureMarketInfoCached;
    private ensureBuilderFeeRateCached;
    private _resolveTickSize;
    private _resolveFeeRateBps;
    private resolveVersion;
    private _retryOnVersionUpdate;
    private _isOrderVersionMismatch;
    private throwIfError;
    private get;
    private post;
    private del;
}

type ContractConfig = {
    exchange: string;
    negRiskAdapter: string;
    negRiskExchange: string;
    collateral: string;
    conditionalTokens: string;
    exchangeV2: string;
    negRiskExchangeV2: string;
};
declare const COLLATERAL_TOKEN_DECIMALS = 6;
declare const CONDITIONAL_TOKEN_DECIMALS = 6;
declare const getContractConfig: (chainID: number) => ContractConfig;

declare const L1_AUTH_UNAVAILABLE_ERROR: Error;
declare const L2_AUTH_NOT_AVAILABLE: Error;
declare class ApiError extends Error {
    readonly status?: number;
    readonly data?: unknown;
    constructor(message: string, status?: number, data?: unknown);
}

declare const createL1Headers: (signer: ClobSigner, chainId: Chain, nonce?: number, timestamp?: number, address?: string) => Promise<L1PolyHeader>;
declare const createL2Headers: (signer: ClobSigner, creds: ApiKeyCreds, l2HeaderArgs: L2HeaderArgs, timestamp?: number) => Promise<L2PolyHeader>;

export { ApiError, type ApiKeyCreds, type ApiKeyRaw, type ApiKeysResponse, AssetType, type BalanceAllowanceParams, type BalanceAllowanceResponse, type BanStatus, type BookParams, type BuilderApiKey, type BuilderApiKeyResponse, type BuilderConfig, type BuilderFeeRates, type BuilderTrade, type BuilderTradeParams, type BuilderTradesResponse, COLLATERAL_TOKEN_DECIMALS, CONDITIONAL_TOKEN_DECIMALS, Chain, ClobClient, type ClobClientOptions, type ClobErrorResponseBody, type ClobToken, type ContractConfig, type CreateOrderOptions, type DropNotificationParams, type Earning, type FeeDetails, type FeeInfo, type FeeInfos, type FeeRates, type L1PolyHeader, L1_AUTH_UNAVAILABLE_ERROR, type L2HeaderArgs, type L2PolyHeader, L2_AUTH_NOT_AVAILABLE, type MakerOrder, type MarketDetails, type MarketPrice, type MarketReward, type MarketTradeEvent, type NegRisk, type NewOrderV1, type NewOrderV2, type Notification, type OpenOrder, type OpenOrderParams, type OpenOrdersResponse, type OrderBookSummary, OrderBuilder, type OrderMarketCancelParams, type OrderPayload, type OrderResponse, type OrderScoring, type OrderScoringParams, type OrderSummary, OrderType, type OrdersScoring, type OrdersScoringParams, type PaginationPayload, type PostOrdersArgs, type PostOrdersV1Args, type PostOrdersV2Args, type PreMigrationOrder, type PreMigrationOrdersResponse, type PriceHistoryFilterParams, PriceHistoryInterval, type ReadonlyApiKeyResponse, type RewardsConfig, type RewardsPercentages, type RoundConfig, Side, SignatureTypeV1, SignatureTypeV2, type SignedOrder, type SimpleHeaders, type TickSize, type TickSizes, type Token, type TokenConditionMap, type TotalUserEarning, type Trade, type TradeParams, type TradesPaginatedResponse, type UserEarning, type UserMarketOrderV1, type UserMarketOrderV2, type UserOrderV1, type UserOrderV2, type UserRewardsEarning, type VersionedPostOrdersArgs, type VersionedSignedOrder, type VersionedUserMarketOrder, type VersionedUserOrder, adjustBuyAmountForFees, createL1Headers, createL2Headers, getContractConfig, isV2Order, orderToJsonV1, orderToJsonV2 };
