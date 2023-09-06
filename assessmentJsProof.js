/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTCollection = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (cardName, cardType, cardPower, cardRarity) {

    const NFTMetaData = {
        "Name" : cardName,
        "Type" : cardType,
        "Power" : cardPower,
        "Rarity" : cardRarity
    }

    NFTCollection.push(NFTMetaData);
    console.log("Minted: " + cardName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for( let i = 0; i < NFTCollection.length; i++){
        console.log("\nCard ID: " + (i + 1));
        console.log("Card Name: " + NFTCollection[i].Name);
        console.log("Card Type: " + NFTCollection[i].Type);
        console.log("Card Power: " + NFTCollection[i].Power);
        console.log("Card Rarity: " + NFTCollection[i].Rarity);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTCollection.length);
}

// call your functions below this line
mintNFT("The Pawn", "Bronze", "Basic", "Common");
mintNFT("Shiny Knight", "Silver", "Elite", "Rare");
mintNFT("Red Queen", "Gold", "Superior", "Super Rare");
mintNFT("King", "Platinum", "Ace", "Ultra Rare");

listNFTs();
getTotalSupply();
