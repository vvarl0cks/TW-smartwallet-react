# Using smart wallets in React Using Thirdweb SDK

> This repository is associated to a [guide on thirdweb blog](https://blog.thirdweb.com/guides/how-to-use-erc4337-smart-wallets/) demonstrating the use of smart wallets in React creating an invisible web3 experience.

<img src="https://iili.io/HgeLWOP.png"/>

## Getting started

Clone this repository and run the following command in the project directory:

```bash
# npm
npm install

# yarn
yarn install
```

This should install all the required dependencies for this project.

## Adding details

Check `const/yourDetails.js` file and add all the details specified. This includes:

- `TWFactoryAddress`: Address of the deployed thirdweb account factory contract
- `TWApiKey`: thirdweb API key that you can generate from [thirdweb dashboard](https://thirdweb.com/dashboard/api-keys).
- `activeChain`: The chain your account factory is deployed on. Recommended to import from the `@thirdweb-dev/chains` package.
- `editionDropAddress`: Address for your deployed [Edition Drop](https://thirdweb.com/thirdweb.eth/DropERC1155) contract.
- `editionDropTokenId`: Token ID to claim from the edition drop contract.

## Running the app

Use the following command to run the app:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Deploying to IPFS

Use the following command to deploy this app to IPFS:

```bash
# npm
npm run deploy

# yarn
yarn deploy
```

## Conclusion

Feel free to contribute to this repository by creating a pull request. If you have any questions, join our [Discord server](https://discord.gg/thirdweb) and create a support thread. For any feedback, leave them on our [feedback board](https://feedback.thirdweb.com).

```bash
    $$\     $$\       $$\                 $$\                         $$\       
    $$ |    $$ |      \__|                $$ |                        $$ |      
  $$$$$$\   $$$$$$$\  $$\  $$$$$$\   $$$$$$$ |$$\  $$\  $$\  $$$$$$\  $$$$$$$\  
  \_$$  _|  $$  __$$\ $$ |$$  __$$\ $$  __$$ |$$ | $$ | $$ |$$  __$$\ $$  __$$\ 
    $$ |    $$ |  $$ |$$ |$$ |  \__|$$ /  $$ |$$ | $$ | $$ |$$$$$$$$ |$$ |  $$ |
    $$ |$$\ $$ |  $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$   ____|$$ |  $$ |
    \$$$$  |$$ |  $$ |$$ |$$ |      \$$$$$$$ |\$$$$$\$$$$  |\$$$$$$$\ $$$$$$$  |
     \____/ \__|  \__|\__|\__|       \_______| \_____\____/  \_______|\_______/ 

 💎 thirdweb-cli v0.10.18 💎

✔ Successfully uploaded directory to IPFS
✔ Files stored at the following IPFS URI: ipfs://QmcKep4NVmrWFuKo7z2gwJqQSqTLqZWJyc5hTA5mDrejCt
✔ Open this link to view your upload: https://ipfs-2.thirdwebcdn.com/ipfs/QmcKep4NVmrWFuKo7z2gwJqQSqTLqZWJyc5hTA5mDrejCt
Done in 39.11s.
```