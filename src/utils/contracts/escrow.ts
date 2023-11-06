import { ethers } from 'ethers';
import { escrowAddress, tokenAddress } from 'src/constants/basic';
import { Escrow__factory, Token__factory } from 'src/types';

import * as dotenv from 'dotenv';
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
) => {
  try {
    const tx = await escrow.createBetChannel(
      betCreatorAddress,
      betTitle,
      betDesc,
      Math.floor(new Date(startTime).getTime() / 1000),
      Math.floor(new Date(endTime).getTime() / 1000),
      ethers.utils.parseEther(minBetAmount + ''),
    );
    await tx.wait();
  } catch (err) {
    console.log('createChannel error----', err);
  }
};

export const placeBet = async (
  userAddress: string,
  channelId: number,
  wager: number,
) => {
  try {
    const tx = await token.mint(
      userAddress,
      ethers.utils.parseEther(wager + ''),
    );
    await tx.wait();
    await escrow.bet(
      userAddress,
      channelId,
      ethers.utils.parseEther(wager + ''),
    );
  } catch (err) {
    console.log('placebetError2--------', err);
  }
};

export const endBet = async (
  id: number,
  winners: string[],
  amounts: string[],
) => {
  console.log('id', id);
  console.log('winners', winners);
  console.log('amounts', amounts);

  try {
    const tx = await escrow.endBet(id, winners);
    await tx.wait();
    await escrow.disperseCreditToken(id, amounts);
  } catch (err) {
    console.log('endBetError2--------', err);
  }
};

export const redeem = async (user: string, amount: number) => {
  try {
    await escrow.redeem(user, amount);
  } catch (err) {}
};

export const setTokenAddress = async (token: string) => {
  try {
    await escrow.setCreditToken(token);
  } catch (err) {}
};
