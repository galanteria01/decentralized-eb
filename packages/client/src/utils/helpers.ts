import { ethers } from 'ethers';
import ElectricityPaymentNFT from '../abi/ElectricityPaymentNFT.json';

const provider = new ethers.providers.JsonRpcProvider('https://ropsten.infura.io/v3/YOUR_PROJECT_ID');
const contractAddress = '0x1234567890123456789012345678901234567890'; // Replace with your deployed contract address
const contractAbi = ElectricityPaymentNFT.abi;
const contractInstance = new ethers.Contract(contractAddress, contractAbi, provider);

export async function createElectricityPaymentNFT(paymentAmount: number, payer: string): Promise<string> {
  const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

  const nonce = await provider.getTransactionCount(wallet.address);
  const gasPrice = await provider.getGasPrice();
  const gasLimit = ethers.BigNumber.from('3000000');

  const contractFunction = contractInstance.interface.getFunction('constructor');
  const encodedData = contractFunction.encode([paymentAmount, payer]);

  const transaction = {
    to: contractAddress,
    data: encodedData,
    nonce,
    gasPrice,
    gasLimit,
  };

  const signedTransaction = await wallet.signTransaction(transaction);

  const transactionResponse = await provider.sendTransaction(signedTransaction);
  const receipt = await transactionResponse.wait();

  return receipt.transactionHash;
}

export const convertRupeesToEthereum = async () => {
  const convertingUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR';
  const getCurrentPrice = await fetch(convertingUrl);
  const currentPrice = await getCurrentPrice.json();
  return currentPrice.INR;
}