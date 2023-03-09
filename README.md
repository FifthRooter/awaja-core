```
                          __
.---.-..--.--.--..---.-. |__|.---.-.
|  _  ||  |  |  ||  _  | |  ||  _  |
|___._||________||___._| |  ||___._|
                        |___|

```

## Description

**This whole readme is a work in progress and a stream of consciousness as I tackle the technical details of the project.**

Inspired by the concepts of crowdfunding, Patreon, the essay [1000 True Fans](https://kk.org/thetechnium/1000-true-fans/), and the magic mix of anticipation, curiosity, and embrace of the unknown, the Awaja project offers musical artists a unique way to connect with their truest fans, injecting mystery and deep trust in their relationship, and crowdfund their newly produced songs or albums in a way that gets them paid for their work, gives fans a tokenized memory of the art, and allows the world to hear their music for free.

Instead of making the actual music of the NFT public before/while selling your fractionalized music NFT, sell an encrypted version of the NFT and automatically release your music for the whole world to hear at the same time only after the full sale has been finished.

---

**tl;dr** Fractionalize a song NFT and let fans purchase the anonymized/encrypted fractions. They haven't heard the music yet. After the last fraction has been bought, the song will be automatically unlocked and uploaded to music platform of artist's choice. Then everybody can hear it for the first time, together. Blind crowdfunding!

---

This is an experimental process and likely would not be interesting for most musicians. I just thought it would be cool to bring this idea to life. I personally like this concept due to personal experience supporting creators on Patreon.

I found that I love observing the creative process and their creations so much that I don't really care if they create something I like or create consistently, as I cared more about allowing these beautiful souls put food on their and spend their time on doing what they love. The result was only secondary for me.

This insight gave me the idea of this project. If you already have fans who believe in you, your skills, and your creations, why not spice things up a bit and offer them to buy your music NFT without ever having heard it? If you, as a fan, feared spending money on something you might not like - that's fine, this project isn't for you, and you'll still be able to hear the music regardless. But if you're adventurous in spirit and love to support your favorite artist in a unique way, this is just for you!

In principle, it's a music NFT Mystery Box. Participants don't know what they're getting, all they know is that they're receiving a full or a fractionalized song or album NFT, and that's it.

## Frontend

There are two sides of the frontend:

- Artist's side
- Fan's side

### Artist's side

Artist uses the artist's dashboard to SIWE, upload their music, sign (?) to encrypt their files using either their wallet's public key or give permission to a burner contract to encrypt it for them, and then store the encrypted files on nft.storage.

Dashboard should show all the projects that have been finalized and ongoing.

Optional: - Add option to choose whether to upload file automatically once the sale is finished, or whether to send a notification (?) and then artist has to manually sign an action using his wallet to set in motion the fetching of encrypted data, unencrypting the file(s) and uploading to Soundcloud etc.

### Fan's side

Less clear how detailed should be, especially in the beginning. As a PoC, can easily be just a wallet sign-in, option to purchase the fraction, and progress dashboard showing the status of the sale and the state of the file (encrypted/decrypted/uploaded), and relevant links, such as a link to the SoundCloud page where the newly uploaded song is.

## Thinking through the solution out loud

abbreviations: unencrypted NFT - uNFT, encrypted NFT - eNFT

1. How to go about selling fractions of encrypted music files to fans? And how to later send them the unencrypted fractions of the real music NFT? Will they end up owning two separate NFTs in the end?

2. Can I use the encrypted file fraction's data as a seed for a randomly generated visual art piece to act as a nice additional gift and temporary fill-in for the final NFT?

   - Seems to be quite challenging. We could set up a Chainlink Keeper to wait for an event emit from minting contract once sale is finished, and then

3. The file original cannot be uploaded in its unencrypted form on IPFS until after the full sale has completed and the unencryption/uploading process has started because it would then exist in an unencrypted form before the official decryption has taken place. How can you establish a verifiable link between the eNFT and the non-existing uNFT without revealing the uNFT's metadata?

   - You don't have to establish a verifiable link (whatever that means) between an eNFT and an uNFT; You can simply issues two separate tokens to the buyer: first genArt NFT or fractionalized song/album cover, then the actual song/album fraction NFT airdropped to all the holders of the particular collection of NFTs. As it's a two-step process, how can you offer a guarantee that the second drop will happen once the sale expires? I'm sure there is a solution for this, and certainly devs with experience could verify that the airdrop promise is real, but how to convince users that it's true? Will it have to be trust-based in the end? Need more experience!

4. The artist can choose to fractionalize the music NFT in a certain number of parts that are then sold. But what if not all fractions are sold and it's taking too long to sell all of them? Artist can set a timer then set an expiration of the sale and:

   - send the remaining unsold fractions to existing fraction owners
   - burn the remaining fractions

5. I think I've managed to zero in on the solution. Initially I thought about using [eth-crypto](https://github.com/pubkey/eth-crypto) package to encrypt data in a transaction, but it wasn't exactly an elegant solution, and it didn't really help with the decentralized storage aspect.

   - In comes Arweave with its Bundlr Network, an Arweave scaling solution that uses optimistic finality that enables near instant storage and retrieval results with high level of confidence. Arweave and, by extension, Bundlr, is integrated with Polygon, so I can pay for storage deals using MATIC - perfect! However, simple storage on Bundlr is insufficient - we need both the music files as well as the music file URI to be enrypted up until the release of the songs on streaming platforms. This is where [Lit Protocol](https://developer.litprotocol.com/) comes into play. It's a blockchain-agnostic middleware layer that allows you to read and write encrypted/decrypted data between blockchains and off-chain platforms. Lit will allow us to [encrypt](https://developer.litprotocol.com/ToolsAndExamples/SDKExamples/OnchainMetadata/encryptDecrypt) an NFTs metadata using our wallet and do other really cool stuff!

6. Can I use Chainlink Functions at any part of this process?
   - Definitely! But they're still in Beta, so will have to wait until it comes out. Till then, gotta use existing tech.

## Resources

[SoundCloud API - Uploading Audio Files](https://developers.soundcloud.com/docs/api/guide#uploading)

[nft.storage docs](https://nft.storage/docs/)

[nft.storage api-docs](https://nft.storage/api-docs/)

[diZKreet - privacy preserving zkNFTs on Aztec Network, redeemable on Ethereum](https://github.com/meirbank/ETHBogota2022)

[eth-crypto - Cryptographic javascript-functions for ethereum](https://github.com/pubkey/eth-crypto)

[Lit Protocol - Developer docs](https://developer.litprotocol.com/)

- Lit Protocol is a decentralized key management network powered by threshold cryptography. A blockchain-agnostic middleware layer, Lit can be used to read and write data between blockchains and off-chain platforms, powering conditional decryption and programmatic signing.

[Bundlr x Arweave x Lit Protocol](https://developer.litprotocol.com/toolsandexamples/integrations/bundlrxarweave/)

[Bundlr Network](https://docs.bundlr.network/)

[Chainlink Functions](https://docs.chain.link/chainlink-functions)
