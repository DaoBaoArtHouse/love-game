/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace HeartBreaker {
  export type ReceiptStruct = {
    _id: BigNumberish;
    _contractAddress: string;
    _tokenContractAddress: string;
    _amount: BigNumberish;
    _noteAddress: string;
    _timestamp: BigNumberish;
    _chain: BigNumberish;
    _expiryBlock: BigNumberish;
  };

  export type ReceiptStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    _id: BigNumber;
    _contractAddress: string;
    _tokenContractAddress: string;
    _amount: BigNumber;
    _noteAddress: string;
    _timestamp: BigNumber;
    _chain: BigNumber;
    _expiryBlock: BigNumber;
  };
}

export interface HeartbreakerAbiInterface extends utils.Interface {
  contractName: "HeartbreakerAbi";
  functions: {
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPaused()": FunctionFragment;
    "setSigner(address)": FunctionFragment;
    "signer()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawERC20(address,uint256)": FunctionFragment;
    "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)": FunctionFragment;
    "withdrawTokens((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "setSigner", values: [string]): string;
  encodeFunctionData(functionFragment: "signer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawERC20",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [HeartBreaker.ReceiptStruct, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [HeartBreaker.ReceiptStruct, BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "ETHReceived(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ETHReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type ETHReceivedEvent = TypedEvent<
  [string, BigNumber],
  { account: string; amount: BigNumber }
>;

export type ETHReceivedEventFilter = TypedEventFilter<ETHReceivedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface HeartbreakerAbi extends BaseContract {
  contractName: "HeartbreakerAbi";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HeartbreakerAbiInterface;

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
    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaused(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSigner(
      newSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signer(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawERC20(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)"(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawTokens(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaused(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSigner(
    newSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawERC20(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)"(
    receipt: HeartBreaker.ReceiptStruct,
    signature: BytesLike,
    payoutAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawETH(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawTokens(
    receipt: HeartBreaker.ReceiptStruct,
    signature: BytesLike,
    payoutAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPaused(overrides?: CallOverrides): Promise<void>;

    setSigner(newSigner: string, overrides?: CallOverrides): Promise<void>;

    signer(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawERC20(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)"(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawETH(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ETHReceived(address,uint256)"(
      account?: null,
      amount?: null
    ): ETHReceivedEventFilter;
    ETHReceived(account?: null, amount?: null): ETHReceivedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaused(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSigner(
      newSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signer(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawERC20(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)"(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawTokens(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaused(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSigner(
      newSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawERC20(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawETH((uint256,address,address,uint256,address,uint256,uint256,uint256),bytes,address)"(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawETH(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      receipt: HeartBreaker.ReceiptStruct,
      signature: BytesLike,
      payoutAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
