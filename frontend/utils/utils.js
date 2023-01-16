import * as anchor from "@project-serum/anchor";
//import { program } from "@project-serum/anchor/dist/cjs/spl/token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { SPOCKTOK_IDL, SPOCKTOK_PROG_ID } from "./const";

export function getProgramInstance(connection, wallet) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    anchor.AnchorProvider.defaultOptions()
  );

  const idl = SPOCKTOK_IDL;

  //address of the deployed program
  const programId = SPOCKTOK_PROG_ID;

  const program = new anchor.Program(idl, programId, provider);
  return program;
}
