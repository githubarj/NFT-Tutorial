
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4 ;


//create ERC721 contract
//Mint some nfts for myself

//importing the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//inheriting from the ERC721 contract
contract NFTee is ERC721{

    //creating the contract
    constructor () ERC721("LearnWeb3's NFT", "LEARN-NFT"){
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }

}