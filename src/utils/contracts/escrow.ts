import { ethers } from 'ethers';
import { escrowAddress, tokenAddress } from 'src/constants/basic';
import { Escrow__factory, Token__factory } from 'src/types';

import * as dotenv from 'dotenv';
import { PlaceBet } from 'src/bet/@types/createBetChannel';

dotenv.config();
const { PRIVATE_KEY, NODE_URL } = process.env;
const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const escrow = Escrow__factory.connect(escrowAddress, signer);
const token = Token__factory.connect(tokenAddress, signer);

export const createBetChannel = async (
  betCreatorAddress: string,
  betTitle: string,
  betDesc: string,
  startTime: Date,
  endTime: Date,
  minBetAmount: number,
): Promise<string> => {
  let betChannelHash = '';
  try {
    const betChannelTx = await escrow.createBetChannel(
      betCreatorAddress,
      betTitle,
      betDesc,
      Math.floor(new Date(startTime).getTime() / 1000),
      Math.floor(new Date(endTime).getTime() / 1000),
      ethers.utils.parseEther(minBetAmount + ''),
    );
    const betChannelRes = await betChannelTx.wait();
    betChannelHash = betChannelRes.transactionHash;
    console.log('betChannelHash', betChannelHash);
  } catch (err) {
    console.error('createChannel error', err);
  }

  return betChannelHash;
};

export const placeBet = async (
  userAddress: string,
  channelId: number,
  wager: number,
): Promise<PlaceBet> => {
  let mintHash = '';
  let betHash = '';
  try {
    const mintTx = await token.mint(
      userAddress,
      ethers.utils.parseEther(wager + ''),
    );
    const mintTxRes = await mintTx.wait();
    mintHash = mintTxRes.transactionHash;
    console.log('mintHash', mintHash);
    const betTx = await escrow.bet(
      userAddress,
      channelId,
      ethers.utils.parseEther(wager + ''),
    );
    const betTxRes = await betTx.wait();
    betHash = betTxRes.transactionHash;
    console.log('betHash', betHash);
  } catch (err) {
    console.error('placebetError', err);
  }

  return { mintHash, betHash };
};

export const endBet = async (
  id: number,
  winners: string[],
  amounts: string[],
): Promise<string> => {
  let endBethash = '';
  try {
    const endBetTx = await escrow.endBet(id, winners);
    const endBetTxRes = await endBetTx.wait();
    endBethash = endBetTxRes.transactionHash;
    console.log('endBethash', endBethash);
    await escrow.disperseCreditToken(id, amounts);
  } catch (err) {
    console.error('endBetError', err);
  }
  return endBethash;
};

export const redeem = async (user: string, amount: number): Promise<string> => {
  let redeemHash = '';
  try {
    const tx = await escrow.redeem(user, amount);
    const txRes = await tx.wait();
    redeemHash = txRes.transactionHash;
    console.log('redeemHash', redeemHash);
  } catch (err) {
    console.error('redeem error', err);
  }
  return redeemHash;
};

export const setTokenAddress = async (token: string): Promise<string> => {
  let setTokenHash = '';
  try {
    const tx = await escrow.setCreditToken(token);
    const txRes = await tx.wait();
    setTokenHash = txRes.transactionHash;
    console.log('setTokenHash', setTokenHash);
  } catch (err) {
    console.error('setTokenAddress error', err);
  }
  return setTokenHash;
};
