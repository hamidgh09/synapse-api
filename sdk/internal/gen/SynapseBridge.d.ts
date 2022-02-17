import { ethers, Signer, BigNumber, BigNumberish, PopulatedTransaction, BaseContract, ContractTransaction, Overrides, CallOverrides } from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SynapseBridgeInterface extends ethers.utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "GOVERNANCE_ROLE()": FunctionFragment;
        "NODEGROUP_ROLE()": FunctionFragment;
        "WETH_ADDRESS()": FunctionFragment;
        "addKappas(bytes32[])": FunctionFragment;
        "bridgeVersion()": FunctionFragment;
        "chainGasAmount()": FunctionFragment;
        "deposit(address,uint256,address,uint256)": FunctionFragment;
        "depositAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": FunctionFragment;
        "getFeeBalance(address)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize()": FunctionFragment;
        "kappaExists(bytes32)": FunctionFragment;
        "mint(address,address,uint256,uint256,bytes32)": FunctionFragment;
        "mintAndSwap(address,address,uint256,uint256,address,uint8,uint8,uint256,uint256,bytes32)": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "redeem(address,uint256,address,uint256)": FunctionFragment;
        "redeemAndRemove(address,uint256,address,uint256,uint8,uint256,uint256)": FunctionFragment;
        "redeemAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setChainGasAmount(uint256)": FunctionFragment;
        "setWethAddress(address)": FunctionFragment;
        "startBlockNumber()": FunctionFragment;
        "unpause()": FunctionFragment;
        "withdraw(address,address,uint256,uint256,bytes32)": FunctionFragment;
        "withdrawAndRemove(address,address,uint256,uint256,address,uint8,uint256,uint256,bytes32)": FunctionFragment;
        "withdrawFees(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "NODEGROUP_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WETH_ADDRESS", values?: undefined): string;
    encodeFunctionData(functionFragment: "addKappas", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "bridgeVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainGasAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositAndSwap", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "getFeeBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "kappaExists", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "mintAndSwap", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeem", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemAndRemove", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "redeemAndSwap", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setChainGasAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWethAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "startBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawAndRemove", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "withdrawFees", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NODEGROUP_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WETH_ADDRESS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addKappas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainGasAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kappaExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAndRemove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemAndSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainGasAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWethAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAndRemove", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFees", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "TokenDeposit(address,uint256,address,uint256)": EventFragment;
        "TokenDepositAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": EventFragment;
        "TokenMint(address,address,uint256,uint256,bytes32)": EventFragment;
        "TokenMintAndSwap(address,address,uint256,uint256,uint8,uint8,uint256,uint256,bool,bytes32)": EventFragment;
        "TokenRedeem(address,uint256,address,uint256)": EventFragment;
        "TokenRedeemAndRemove(address,uint256,address,uint256,uint8,uint256,uint256)": EventFragment;
        "TokenRedeemAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)": EventFragment;
        "TokenWithdraw(address,address,uint256,uint256,bytes32)": EventFragment;
        "TokenWithdrawAndRemove(address,address,uint256,uint256,uint8,uint256,uint256,bool,bytes32)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDeposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenDepositAndSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenMint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenMintAndSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenRedeem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenRedeemAndRemove"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenRedeemAndSwap"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenWithdraw"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenWithdrawAndRemove"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}>;
export declare type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export declare type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export declare type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], {
    role: string;
    account: string;
    sender: string;
}>;
export declare type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export declare type TokenDepositEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], {
    to: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
}>;
export declare type TokenDepositEventFilter = TypedEventFilter<TokenDepositEvent>;
export declare type TokenDepositAndSwapEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    number,
    number,
    BigNumber,
    BigNumber
], {
    to: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
    tokenIndexFrom: number;
    tokenIndexTo: number;
    minDy: BigNumber;
    deadline: BigNumber;
}>;
export declare type TokenDepositAndSwapEventFilter = TypedEventFilter<TokenDepositAndSwapEvent>;
export declare type TokenMintEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    to: string;
    token: string;
    amount: BigNumber;
    fee: BigNumber;
    kappa: string;
}>;
export declare type TokenMintEventFilter = TypedEventFilter<TokenMintEvent>;
export declare type TokenMintAndSwapEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    number,
    BigNumber,
    BigNumber,
    boolean,
    string
], {
    to: string;
    token: string;
    amount: BigNumber;
    fee: BigNumber;
    tokenIndexFrom: number;
    tokenIndexTo: number;
    minDy: BigNumber;
    deadline: BigNumber;
    swapSuccess: boolean;
    kappa: string;
}>;
export declare type TokenMintAndSwapEventFilter = TypedEventFilter<TokenMintAndSwapEvent>;
export declare type TokenRedeemEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], {
    to: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
}>;
export declare type TokenRedeemEventFilter = TypedEventFilter<TokenRedeemEvent>;
export declare type TokenRedeemAndRemoveEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    number,
    BigNumber,
    BigNumber
], {
    to: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
    swapTokenIndex: number;
    swapMinAmount: BigNumber;
    swapDeadline: BigNumber;
}>;
export declare type TokenRedeemAndRemoveEventFilter = TypedEventFilter<TokenRedeemAndRemoveEvent>;
export declare type TokenRedeemAndSwapEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    number,
    number,
    BigNumber,
    BigNumber
], {
    to: string;
    chainId: BigNumber;
    token: string;
    amount: BigNumber;
    tokenIndexFrom: number;
    tokenIndexTo: number;
    minDy: BigNumber;
    deadline: BigNumber;
}>;
export declare type TokenRedeemAndSwapEventFilter = TypedEventFilter<TokenRedeemAndSwapEvent>;
export declare type TokenWithdrawEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], {
    to: string;
    token: string;
    amount: BigNumber;
    fee: BigNumber;
    kappa: string;
}>;
export declare type TokenWithdrawEventFilter = TypedEventFilter<TokenWithdrawEvent>;
export declare type TokenWithdrawAndRemoveEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    boolean,
    string
], {
    to: string;
    token: string;
    amount: BigNumber;
    fee: BigNumber;
    swapTokenIndex: number;
    swapMinAmount: BigNumber;
    swapDeadline: BigNumber;
    swapSuccess: boolean;
    kappa: string;
}>;
export declare type TokenWithdrawAndRemoveEventFilter = TypedEventFilter<TokenWithdrawAndRemoveEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface SynapseBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SynapseBridgeInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<[string]>;
        NODEGROUP_ROLE(overrides?: CallOverrides): Promise<[string]>;
        WETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;
        addKappas(kappas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bridgeVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        chainGasAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getFeeBalance(tokenAddress: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        kappaExists(kappa: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        mint(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintAndSwap(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setChainGasAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWethAddress(_wethAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAndRemove(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawFees(token: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<string>;
    NODEGROUP_ROLE(overrides?: CallOverrides): Promise<string>;
    WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;
    addKappas(kappas: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bridgeVersion(overrides?: CallOverrides): Promise<BigNumber>;
    chainGasAmount(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getFeeBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    kappaExists(kappa: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    mint(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintAndSwap(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setChainGasAmount(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWethAddress(_wethAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAndRemove(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawFees(token: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<string>;
        NODEGROUP_ROLE(overrides?: CallOverrides): Promise<string>;
        WETH_ADDRESS(overrides?: CallOverrides): Promise<string>;
        addKappas(kappas: BytesLike[], overrides?: CallOverrides): Promise<void>;
        bridgeVersion(overrides?: CallOverrides): Promise<BigNumber>;
        chainGasAmount(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getFeeBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(overrides?: CallOverrides): Promise<void>;
        kappaExists(kappa: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        mint(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: CallOverrides): Promise<void>;
        mintAndSwap(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, kappa: BytesLike, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setChainGasAmount(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWethAddress(_wethAddress: string, overrides?: CallOverrides): Promise<void>;
        startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: CallOverrides): Promise<void>;
        withdraw(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawAndRemove(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, kappa: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawFees(token: string, to: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "TokenDeposit(address,uint256,address,uint256)"(to?: string | null, chainId?: null, token?: null, amount?: null): TokenDepositEventFilter;
        TokenDeposit(to?: string | null, chainId?: null, token?: null, amount?: null): TokenDepositEventFilter;
        "TokenDepositAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)"(to?: string | null, chainId?: null, token?: null, amount?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null): TokenDepositAndSwapEventFilter;
        TokenDepositAndSwap(to?: string | null, chainId?: null, token?: null, amount?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null): TokenDepositAndSwapEventFilter;
        "TokenMint(address,address,uint256,uint256,bytes32)"(to?: string | null, token?: null, amount?: null, fee?: null, kappa?: BytesLike | null): TokenMintEventFilter;
        TokenMint(to?: string | null, token?: null, amount?: null, fee?: null, kappa?: BytesLike | null): TokenMintEventFilter;
        "TokenMintAndSwap(address,address,uint256,uint256,uint8,uint8,uint256,uint256,bool,bytes32)"(to?: string | null, token?: null, amount?: null, fee?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null, swapSuccess?: null, kappa?: BytesLike | null): TokenMintAndSwapEventFilter;
        TokenMintAndSwap(to?: string | null, token?: null, amount?: null, fee?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null, swapSuccess?: null, kappa?: BytesLike | null): TokenMintAndSwapEventFilter;
        "TokenRedeem(address,uint256,address,uint256)"(to?: string | null, chainId?: null, token?: null, amount?: null): TokenRedeemEventFilter;
        TokenRedeem(to?: string | null, chainId?: null, token?: null, amount?: null): TokenRedeemEventFilter;
        "TokenRedeemAndRemove(address,uint256,address,uint256,uint8,uint256,uint256)"(to?: string | null, chainId?: null, token?: null, amount?: null, swapTokenIndex?: null, swapMinAmount?: null, swapDeadline?: null): TokenRedeemAndRemoveEventFilter;
        TokenRedeemAndRemove(to?: string | null, chainId?: null, token?: null, amount?: null, swapTokenIndex?: null, swapMinAmount?: null, swapDeadline?: null): TokenRedeemAndRemoveEventFilter;
        "TokenRedeemAndSwap(address,uint256,address,uint256,uint8,uint8,uint256,uint256)"(to?: string | null, chainId?: null, token?: null, amount?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null): TokenRedeemAndSwapEventFilter;
        TokenRedeemAndSwap(to?: string | null, chainId?: null, token?: null, amount?: null, tokenIndexFrom?: null, tokenIndexTo?: null, minDy?: null, deadline?: null): TokenRedeemAndSwapEventFilter;
        "TokenWithdraw(address,address,uint256,uint256,bytes32)"(to?: string | null, token?: null, amount?: null, fee?: null, kappa?: BytesLike | null): TokenWithdrawEventFilter;
        TokenWithdraw(to?: string | null, token?: null, amount?: null, fee?: null, kappa?: BytesLike | null): TokenWithdrawEventFilter;
        "TokenWithdrawAndRemove(address,address,uint256,uint256,uint8,uint256,uint256,bool,bytes32)"(to?: string | null, token?: null, amount?: null, fee?: null, swapTokenIndex?: null, swapMinAmount?: null, swapDeadline?: null, swapSuccess?: null, kappa?: BytesLike | null): TokenWithdrawAndRemoveEventFilter;
        TokenWithdrawAndRemove(to?: string | null, token?: null, amount?: null, fee?: null, swapTokenIndex?: null, swapMinAmount?: null, swapDeadline?: null, swapSuccess?: null, kappa?: BytesLike | null): TokenWithdrawAndRemoveEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        NODEGROUP_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        WETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;
        addKappas(kappas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bridgeVersion(overrides?: CallOverrides): Promise<BigNumber>;
        chainGasAmount(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getFeeBalance(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        kappaExists(kappa: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintAndSwap(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setChainGasAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWethAddress(_wethAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAndRemove(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawFees(token: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NODEGROUP_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WETH_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addKappas(kappas: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bridgeVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainGasAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getFeeBalance(tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        kappaExists(kappa: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintAndSwap(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeem(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemAndRemove(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemAndSwap(to: string, chainId: BigNumberish, token: string, amount: BigNumberish, tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setChainGasAmount(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWethAddress(_wethAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(to: string, token: string, amount: BigNumberish, fee: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAndRemove(to: string, token: string, amount: BigNumberish, fee: BigNumberish, pool: string, swapTokenIndex: BigNumberish, swapMinAmount: BigNumberish, swapDeadline: BigNumberish, kappa: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFees(token: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
