/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IEscrow {
  export type BetChannelStruct = {
    id: BigNumberish;
    creator: string;
    betTitle: string;
    betCondition: string;
    startTime: BigNumberish;
    endTime: BigNumberish;
    minimumAmount: BigNumberish;
    winners: string[];
    totalBetAmount: BigNumberish;
  };

  export type BetChannelStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string[],
    BigNumber
  ] & {
    id: BigNumber;
    creator: string;
    betTitle: string;
    betCondition: string;
    startTime: BigNumber;
    endTime: BigNumber;
    minimumAmount: BigNumber;
    winners: string[];
    totalBetAmount: BigNumber;
  };

  export type BetInfoStruct = {
    id: BigNumberish;
    user: string;
    amount: BigNumberish;
  };

  export type BetInfoStructOutput = [BigNumber, string, BigNumber] & {
    id: BigNumber;
    user: string;
    amount: BigNumber;
  };
}

export interface EscrowInterface extends utils.Interface {
  functions: {
    "ADMIN_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "bet(address,uint256,uint256)": FunctionFragment;
    "betAmount(uint256,address)": FunctionFragment;
    "betChannels(uint256)": FunctionFragment;
    "betInfos(uint256,uint256)": FunctionFragment;
    "createBetChannel(address,string,string,uint256,uint256,uint256)": FunctionFragment;
    "creditToken()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "disperseCreditToken(uint256,uint256[])": FunctionFragment;
    "endBet(uint256,address[])": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "redeem(address,uint256)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setCreditToken(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "userBalance(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "bet"
      | "betAmount"
      | "betChannels"
      | "betInfos"
      | "createBetChannel"
      | "creditToken"
      | "deposit"
      | "disperseCreditToken"
      | "endBet"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "redeem"
      | "renounceRole"
      | "revokeRole"
      | "setCreditToken"
      | "supportsInterface"
      | "userBalance"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bet",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "betAmount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "betChannels",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "betInfos",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createBetChannel",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disperseCreditToken",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "endBet",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreditToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "userBalance", values: [string]): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "betChannels",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "betInfos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBetChannel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disperseCreditToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCreditToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userBalance",
    data: BytesLike
  ): Result;

  events: {
    "BetChannelCreated((uint256,address,string,string,uint256,uint256,uint256,address[],uint256))": EventFragment;
    "BetEnded(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Redeemed(address,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "TokenBurned(address,uint256)": EventFragment;
    "TokenDistributed(address,uint256)": EventFragment;
    "UserBetted(uint256,(uint256,address,uint256))": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BetChannelCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BetEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBurned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDistributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserBetted"): EventFragment;
}

export interface BetChannelCreatedEventObject {
  betChannel: IEscrow.BetChannelStructOutput;
}
export type BetChannelCreatedEvent = TypedEvent<
  [IEscrow.BetChannelStructOutput],
  BetChannelCreatedEventObject
>;

export type BetChannelCreatedEventFilter =
  TypedEventFilter<BetChannelCreatedEvent>;

export interface BetEndedEventObject {
  betChannelId: BigNumber;
}
export type BetEndedEvent = TypedEvent<[BigNumber], BetEndedEventObject>;

export type BetEndedEventFilter = TypedEventFilter<BetEndedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RedeemedEventObject {
  user: string;
  amount: BigNumber;
}
export type RedeemedEvent = TypedEvent<
  [string, BigNumber],
  RedeemedEventObject
>;

export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TokenBurnedEventObject {
  user: string;
  amount: BigNumber;
}
export type TokenBurnedEvent = TypedEvent<
  [string, BigNumber],
  TokenBurnedEventObject
>;

export type TokenBurnedEventFilter = TypedEventFilter<TokenBurnedEvent>;

export interface TokenDistributedEventObject {
  winner: string;
  amount: BigNumber;
}
export type TokenDistributedEvent = TypedEvent<
  [string, BigNumber],
  TokenDistributedEventObject
>;

export type TokenDistributedEventFilter =
  TypedEventFilter<TokenDistributedEvent>;

export interface UserBettedEventObject {
  channelId: BigNumber;
  betInfo: IEscrow.BetInfoStructOutput;
}
export type UserBettedEvent = TypedEvent<
  [BigNumber, IEscrow.BetInfoStructOutput],
  UserBettedEventObject
>;

export type UserBettedEventFilter = TypedEventFilter<UserBettedEvent>;

export interface Escrow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EscrowInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    bet(
      _user: string,
      _channelId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    betAmount(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    betChannels(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        creator: string;
        betTitle: string;
        betCondition: string;
        startTime: BigNumber;
        endTime: BigNumber;
        minimumAmount: BigNumber;
        totalBetAmount: BigNumber;
      }
    >;

    betInfos(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        id: BigNumber;
        user: string;
        amount: BigNumber;
      }
    >;

    createBetChannel(
      _creator: string,
      _betTitle: string,
      _betDesc: string,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _minBetAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    creditToken(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disperseCreditToken(
      id: BigNumberish,
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    endBet(
      id: BigNumberish,
      winners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeem(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setCreditToken(
      _creditToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  bet(
    _user: string,
    _channelId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  betAmount(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  betChannels(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      id: BigNumber;
      creator: string;
      betTitle: string;
      betCondition: string;
      startTime: BigNumber;
      endTime: BigNumber;
      minimumAmount: BigNumber;
      totalBetAmount: BigNumber;
    }
  >;

  betInfos(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      id: BigNumber;
      user: string;
      amount: BigNumber;
    }
  >;

  createBetChannel(
    _creator: string,
    _betTitle: string,
    _betDesc: string,
    _startTime: BigNumberish,
    _endTime: BigNumberish,
    _minBetAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  creditToken(overrides?: CallOverrides): Promise<string>;

  deposit(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disperseCreditToken(
    id: BigNumberish,
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  endBet(
    id: BigNumberish,
    winners: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeem(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setCreditToken(
    _creditToken: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    bet(
      _user: string,
      _channelId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betAmount(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    betChannels(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        id: BigNumber;
        creator: string;
        betTitle: string;
        betCondition: string;
        startTime: BigNumber;
        endTime: BigNumber;
        minimumAmount: BigNumber;
        totalBetAmount: BigNumber;
      }
    >;

    betInfos(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        id: BigNumber;
        user: string;
        amount: BigNumber;
      }
    >;

    createBetChannel(
      _creator: string,
      _betTitle: string,
      _betDesc: string,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _minBetAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    creditToken(overrides?: CallOverrides): Promise<string>;

    deposit(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    disperseCreditToken(
      id: BigNumberish,
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    endBet(
      id: BigNumberish,
      winners: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(overrides?: CallOverrides): Promise<void>;

    redeem(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCreditToken(
      _creditToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "BetChannelCreated((uint256,address,string,string,uint256,uint256,uint256,address[],uint256))"(
      betChannel?: null
    ): BetChannelCreatedEventFilter;
    BetChannelCreated(betChannel?: null): BetChannelCreatedEventFilter;

    "BetEnded(uint256)"(betChannelId?: null): BetEndedEventFilter;
    BetEnded(betChannelId?: null): BetEndedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Redeemed(address,uint256)"(
      user?: null,
      amount?: null
    ): RedeemedEventFilter;
    Redeemed(user?: null, amount?: null): RedeemedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;

    "TokenBurned(address,uint256)"(
      user?: null,
      amount?: null
    ): TokenBurnedEventFilter;
    TokenBurned(user?: null, amount?: null): TokenBurnedEventFilter;

    "TokenDistributed(address,uint256)"(
      winner?: string | null,
      amount?: null
    ): TokenDistributedEventFilter;
    TokenDistributed(
      winner?: string | null,
      amount?: null
    ): TokenDistributedEventFilter;

    "UserBetted(uint256,(uint256,address,uint256))"(
      channelId?: null,
      betInfo?: null
    ): UserBettedEventFilter;
    UserBetted(channelId?: null, betInfo?: null): UserBettedEventFilter;
  };

  estimateGas: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    bet(
      _user: string,
      _channelId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    betAmount(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    betChannels(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    betInfos(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createBetChannel(
      _creator: string,
      _betTitle: string,
      _betDesc: string,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _minBetAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    creditToken(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disperseCreditToken(
      id: BigNumberish,
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    endBet(
      id: BigNumberish,
      winners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    redeem(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setCreditToken(
      _creditToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userBalance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bet(
      _user: string,
      _channelId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    betAmount(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    betChannels(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    betInfos(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createBetChannel(
      _creator: string,
      _betTitle: string,
      _betDesc: string,
      _startTime: BigNumberish,
      _endTime: BigNumberish,
      _minBetAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    creditToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disperseCreditToken(
      id: BigNumberish,
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    endBet(
      id: BigNumberish,
      winners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeem(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setCreditToken(
      _creditToken: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userBalance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
