// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ElectricityPaymentNFT is ERC721 {
    string public constant NAME = "Electricity Payment NFT";
    string public constant SYMBOL = "EPNFT";

    uint256 public paymentAmount;
    string public payer;

    constructor(uint256 _paymentAmount, string memory _payer) ERC721(NAME, SYMBOL) {
        paymentAmount = _paymentAmount;
        payer = _payer;
        _mint(msg.sender, 1);
    }

    function getPayment() public view returns (uint256, string memory) {
        return (paymentAmount, payer);
    }
}
