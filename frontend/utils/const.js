import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import spocktok from "./spocktok.json";

export const SOLANA_HOST = clusterApiUrl("devnet");

export const SPOCKTOK_PROG_ID = new PublicKey(
  "DCMHTqMknM21WMfQLtJcBpDDx38q17hZgWKTh7SVFLZd"
);

export const SPOCKTOK_IDL = spocktok;
