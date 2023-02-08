## Description

**This whole readme is a work in progress and a stream of consciousness as I tackle the technical details of the project.**

Inspired by the concepts of crowdfunding, Patreon, the essay [1000 True Fans](https://kk.org/thetechnium/1000-true-fans/), and the magic mix of anticipation, curiosity, and embrace of the unknown, the Awaja project offers musical artists a unique way to connect with their truest fans, injecting mystery and deep trust in their relationship, and crowdfund their newly produced songs or albums in a way that gets them paid for their work, gives fans a tokenized memory of the art, and allows the world to hear their music for free.

Instead of making the actual music of the NFT public before/while selling your fractionalized music NFT, sell an encrypted version of the NFT and automatically release your music for the whole world to hear at the same time only after the full sale has been finished.

---

**tl;dr** Fractionalize a song NFT and let fans purchase the fractions. After the last fraction has been bought, the song will be automatically unlocked and uploaded to music platform of artist's choice.

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

Optional: - Add option to choose whether to upload file automatically once the sale is finished, or whether to send a notification (?) and then artist has to manually sign an action using his wallet to set in motion the fetching of encrypted data, unencrypting the file(s) and uploading to Soundcloud etc

### Fan's side

## Wonderings

abbreviations: unencrypted NFT - uNFT, encrypted NFT - eNFT

1. How to go about selling fractions of encrypted music files to fans? And how to later send them the unencrypted fractions of the real music NFT? Will they end up owning two separate NFTs in the end?

2. Can I use the encrypted file fraction's data as a seed for a randomly generated visual art piece to act as a nice additional gift and temporary fill-in for the final NFT?

3. The file original cannot be uploaded in its unencrypted form on IPFS until after the full sale has completed and the unencryption/uploading process has started because it would then exist in an unencrypted form before the official decryption has taken place. How can you establish a verifiable link between the eNFT and the non-existing uNFT without revealing the uNFT's metadata?

4. The artist can choose to fractionalize the music NFT in a certain number of parts that are then sold. But what if not all fractions are sold and it's taking too long to sell all of them? Artist can set a timer then set an expiration of the sale and:
   - send the remaining unsold fractions to existing fraction owners
   - burn the remaining fractions
