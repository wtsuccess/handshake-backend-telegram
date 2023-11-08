export type CreateBet = {
  createChannelHash?: string;
  mintHash: string;
  betHash: string;
};

export type PlaceBet = {
  mintHash: string;
  betHash: string;
};
