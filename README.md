# Basic Sample Hardhat Project - Maevents

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
## Get Started

### Prerequisites
- have metamask installed on your browser
- have setup metamask with your localhost blockchain. You can check how to [here](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node). **Note** chain Id is as in `./hardhat.config.js` and symbol is ETH.
- know how to setup localhost account in metamask. Import using private key provided when you run `npx hardhat node`.

#### Clone repo

```bash
git clone https://github.com/RyanKoech/Maevents.git
```

#### Navigate to the project folder

```bash
cd Maevents
```

#### Fetch node modules

```bash
npm install
```

#### Compile Smart Contracts

```bash
npx hardhat compile
```

#### Start localhost blockchain server

```bash
npx hardhat node
```

#### Deploy smart contract to localhost blockchain
*This steps provides the address of the contract. Copy and paste it in `EventTicketingService.js`*

```bash
npx hardhat run scripts/deploy.js --network localhost
```

#### Start frontend web server

```bash
npm run start
```

### Done!
Note that atm, the methods calling the smart contract abi have static parameter meaning you have to modify them in code. Dynamic parameter will be implemented by the frontend team.
