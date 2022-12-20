export const convertRupeesToEthereum = async () => {
  const convertingUrl = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=INR';
  const getCurrentPrice = await fetch(convertingUrl);
  const currentPrice = await getCurrentPrice.json();
  return currentPrice.INR;
}