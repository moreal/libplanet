import { Encodable } from "bencodex";
import { Address, encodeAddress } from "./address";
import { encodeCurrency, FungibleAssetValue } from "./assets";

export interface Mint {
  type: "mint";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeMint(action: Mint): Encodable {
  return {
    recipient: encodeAddress(action.recipient),
    currency: encodeCurrency(action.amount.currency),
    amount: action.amount.rawValue,
  };
}

export interface Transfer {
  type: "transfer";
  recipient: Address;
  amount: FungibleAssetValue;
}

export function encodeTransfer(action: Transfer): Encodable {
  return {
    recipient: encodeAddress(action.recipient),
    currency: encodeCurrency(action.amount.currency),
    amount: action.amount.rawValue,
  };
}
