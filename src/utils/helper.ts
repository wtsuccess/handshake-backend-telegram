import { createHmac } from 'crypto';

export const generateWalletAddress = (userName: string) => {
  const hash = createHmac('sha256', userName).digest('hex');
  const walletAddress = '0x' + hash.slice(0, 40);
  return walletAddress;
};
