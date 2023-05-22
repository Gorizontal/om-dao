import {mainnet, goerli, polygon, polygonMumbai, bsc, bscTestnet} from "wagmi/chains"



export const SWAP_CONTRACT_ADDRESS: Record<number, string> = {
    [mainnet.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [polygon.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [bsc.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [goerli.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [polygonMumbai.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
    [bscTestnet.id]: "0x9a4d39F46044400Aa48Ab528f8EC3DD3B793f885",
}




export const getSwapContractData = (address: string)=>  ({
    address,
    abi: [
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
                {
                    internalType: "bytes32",
                    name: "referalCode",
                    type: "bytes32",
                },
            ],
            name: "buyToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "string",
                    name: "referalCode",
                    type: "string",
                },
                {
                    indexed: true,
                    internalType: "bytes32",
                    name: "refCode",
                    type: "bytes32",
                },
            ],
            name: "BuyTokenRef",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "OwnershipTransferred",
            type: "event",
        },
        {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_addrSafe",
                    type: "address",
                },
            ],
            name: "setAddressSafe",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "referalCode",
                    type: "bytes32",
                },
                {
                    internalType: "uint16",
                    name: "percent",
                    type: "uint16",
                },
                {
                    internalType: "address",
                    name: "addrInfl",
                    type: "address",
                },
            ],
            name: "setReferalCode",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbolFrom",
                    type: "bytes32",
                },
                {
                    internalType: "bytes32",
                    name: "symbolTo",
                    type: "bytes32",
                },
                {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                },
            ],
            name: "setSwaplistToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "addrToken",
                    type: "address",
                },
            ],
            name: "setSwapTokenAddress",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "uint8",
                    name: "tier",
                    type: "uint8",
                },
                {
                    internalType: "uint256",
                    name: "price",
                    type: "uint256",
                },
            ],
            name: "setTierTokenPrice",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "address",
                    name: "tokenAddress",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "basePrice",
                    type: "uint256",
                },
            ],
            name: "setWhitelistToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "swapToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "newOwner",
                    type: "address",
                },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_tokenContract",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "withdrawToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "byte32SymbolToString",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "pure",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "referalCode",
                    type: "bytes32",
                },
            ],
            name: "getInflAdr",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "referalCode",
                    type: "bytes32",
                },
            ],
            name: "getInflFee",
            outputs: [
                {
                    internalType: "uint16",
                    name: "",
                    type: "uint16",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "referalCode",
                    type: "bytes32",
                },
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "getInflTokenSize",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getReferalCodes",
            outputs: [
                {
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "getSwapPair",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "getSwapTokenAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
                {
                    internalType: "uint8",
                    name: "tier",
                    type: "uint8",
                },
            ],
            name: "getTierTokenPrice",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getWhitelistedSymbols",
            outputs: [
                {
                    internalType: "bytes32[]",
                    name: "",
                    type: "bytes32[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "getWhitelistedTokenAddress",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    internalType: "bytes32",
                    name: "symbol",
                    type: "bytes32",
                },
            ],
            name: "myPrice",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                },
            ],
            name: "stringSymbolToByte32",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "pure",
            type: "function",
        },
    ],
})