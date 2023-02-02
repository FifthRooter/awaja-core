const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Due to the changing testnets, this testnet might not work as shown in the video
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
