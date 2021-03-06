export const TransferProxy = 
{
  "contractName": "TransferProxy",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        }
      ],
      "name": "addAuthorizedAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "authorities",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        }
      ],
      "name": "removeAuthorizedAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "removeAuthorizedAddressAtIndex",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorized",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedAddresses",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "gracePeriodEnd",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "authAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "authorizedBy",
          "type": "address"
        }
      ],
      "name": "AddressAuthorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "addressRemoved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "authorizedBy",
          "type": "address"
        }
      ],
      "name": "AuthorizedAddressRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905562278d0061003e42826401000000006109d961004782021704565b6001555061005a565b8181018281101561005457fe5b92915050565b610cee806100696000396000f3006080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e81146100b3578063494503d4146100d6578063707129391461010a578063715018a61461012b5780638da5cb5b146101405780639ad2674414610155578063a6c4e46714610179578063b9181611146101aa578063d39de6e9146101df578063dae2a76c14610244578063f2fde38b1461026b575b600080fd5b3480156100bf57600080fd5b506100d4600160a060020a036004351661028c565b005b3480156100e257600080fd5b506100ee600435610381565b60408051600160a060020a039092168252519081900360200190f35b34801561011657600080fd5b506100d4600160a060020a03600435166103a9565b34801561013757600080fd5b506100d46104d9565b34801561014c57600080fd5b506100ee610545565b34801561016157600080fd5b506100d4600160a060020a0360043516602435610554565b34801561018557600080fd5b506100d4600160a060020a0360043581169060243590604435811690606435166106b7565b3480156101b657600080fd5b506101cb600160a060020a03600435166108f0565b604080519115158252519081900360200190f35b3480156101eb57600080fd5b506101f4610905565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610230578181015183820152602001610218565b505050509050019250505060405180910390f35b34801561025057600080fd5b50610259610968565b60408051918252519081900360200190f35b34801561027757600080fd5b506100d4600160a060020a036004351661096e565b600054600160a060020a031633146102a357600080fd5b60015442106102b157600080fd5b600160a060020a03811660009081526002602052604090205460ff16156102d757600080fd5b600160a060020a0381166000818152600260209081526040808320805460ff191660019081179091556003805491820181559093527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a250565b600380548290811061038f57fe5b600091825260209091200154600160a060020a0316905081565b600054600160a060020a031633146103c057600080fd5b60015442106103ce57600080fd5b600160a060020a03811660009081526002602052604090205460ff1615156103f557600080fd5b600160a060020a038116600090815260026020908152604091829020805460ff19169055600380548351818402810184019094528084526104829385939092919083018282801561046f57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610451575b505050505061099190919063ffffffff16565b805161049691600391602090910190610bdc565b50604080513381529051600160a060020a038316917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a250565b600054600160a060020a031633146104f057600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600054600160a060020a031681565b600054600160a060020a0316331461056b57600080fd5b600154421061057957600080fd5b600354811061058757600080fd5b81600160a060020a03166003828154811015156105a057fe5b600091825260209091200154600160a060020a0316146105bf57600080fd5b600160a060020a0382166000908152600260205260409020805460ff19169055600380546105f490600163ffffffff6109c716565b815481106105fe57fe5b60009182526020909120015460038054600160a060020a03909216918390811061062457fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003546106689060016109c7565b610673600382610c4e565b50604080513381529051600160a060020a038416917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a25050565b33600090815260026020526040812054819060ff1615156106d757600080fd5b604080517ff7888aec000000000000000000000000000000000000000000000000000000008152600160a060020a03808916600483015285166024820152905173__ERC20Wrapper__________________________9163f7888aec916044808301926020929190829003018186803b15801561075257600080fd5b505af4158015610766573d6000803e3d6000fd5b505050506040513d602081101561077c57600080fd5b5051604080517f15dacbea000000000000000000000000000000000000000000000000000000008152600160a060020a03808a16600483015280881660248301528616604482015260648101889052905191935073__ERC20Wrapper__________________________916315dacbea91608480820192600092909190829003018186803b15801561080c57600080fd5b505af4158015610820573d6000803e3d6000fd5b5050604080517ff7888aec000000000000000000000000000000000000000000000000000000008152600160a060020a03808b16600483015287166024820152905173__ERC20Wrapper__________________________935063f7888aec92506044808301926020929190829003018186803b15801561089f57600080fd5b505af41580156108b3573d6000803e3d6000fd5b505050506040513d60208110156108c957600080fd5b505190506108dd828663ffffffff6109d916565b81146108e857600080fd5b505050505050565b60026020526000908152604090205460ff1681565b6060600380548060200260200160405190810160405280929190818152602001828054801561095d57602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161093f575b505050505090505b90565b60015481565b600054600160a060020a0316331461098557600080fd5b61098e816109ec565b50565b606060008060606109a28686610a69565b925092508115156109b257600080fd5b6109bc8684610ad0565b509695505050505050565b6000828211156109d357fe5b50900390565b818101828110156109e657fe5b92915050565b600160a060020a0381161515610a0157600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b81811015610abf5784600160a060020a03168682815181101515610a9257fe5b90602001906020020151600160a060020a03161415610ab75780600193509350610ac7565b600101610a72565b600093508392505b50509250929050565b6060600080606060008651925060018303604051908082528060200260200182016040528015610b0a578160200160208202803883390190505b509150600090505b85811015610b5f578681815181101515610b2857fe5b906020019060200201518282815181101515610b4057fe5b600160a060020a03909216602092830290910190910152600101610b12565b50600185015b82811015610bb5578681815181101515610b7b57fe5b906020019060200201518260018303815181101515610b9657fe5b600160a060020a03909216602092830290910190910152600101610b65565b818787815181101515610bc457fe5b90602001906020020151945094505050509250929050565b828054828255906000526020600020908101928215610c3e579160200282015b82811115610c3e578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610bfc565b50610c4a929150610c77565b5090565b815481835581811115610c7257600083815260209020610c72918101908301610ca8565b505050565b61096591905b80821115610c4a57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610c7d565b61096591905b80821115610c4a5760008155600101610cae5600a165627a7a723058201ca0a2d31cbe32b1c549ba2821f8d6fd2c1c14c2e2a53975361f412b784167fa0029",
  "deployedBytecode": "0x6080604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342f1181e81146100b3578063494503d4146100d6578063707129391461010a578063715018a61461012b5780638da5cb5b146101405780639ad2674414610155578063a6c4e46714610179578063b9181611146101aa578063d39de6e9146101df578063dae2a76c14610244578063f2fde38b1461026b575b600080fd5b3480156100bf57600080fd5b506100d4600160a060020a036004351661028c565b005b3480156100e257600080fd5b506100ee600435610381565b60408051600160a060020a039092168252519081900360200190f35b34801561011657600080fd5b506100d4600160a060020a03600435166103a9565b34801561013757600080fd5b506100d46104d9565b34801561014c57600080fd5b506100ee610545565b34801561016157600080fd5b506100d4600160a060020a0360043516602435610554565b34801561018557600080fd5b506100d4600160a060020a0360043581169060243590604435811690606435166106b7565b3480156101b657600080fd5b506101cb600160a060020a03600435166108f0565b604080519115158252519081900360200190f35b3480156101eb57600080fd5b506101f4610905565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610230578181015183820152602001610218565b505050509050019250505060405180910390f35b34801561025057600080fd5b50610259610968565b60408051918252519081900360200190f35b34801561027757600080fd5b506100d4600160a060020a036004351661096e565b600054600160a060020a031633146102a357600080fd5b60015442106102b157600080fd5b600160a060020a03811660009081526002602052604090205460ff16156102d757600080fd5b600160a060020a0381166000818152600260209081526040808320805460ff191660019081179091556003805491820181559093527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b909201805473ffffffffffffffffffffffffffffffffffffffff191684179055815133815291517f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de9281900390910190a250565b600380548290811061038f57fe5b600091825260209091200154600160a060020a0316905081565b600054600160a060020a031633146103c057600080fd5b60015442106103ce57600080fd5b600160a060020a03811660009081526002602052604090205460ff1615156103f557600080fd5b600160a060020a038116600090815260026020908152604091829020805460ff19169055600380548351818402810184019094528084526104829385939092919083018282801561046f57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610451575b505050505061099190919063ffffffff16565b805161049691600391602090910190610bdc565b50604080513381529051600160a060020a038316917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a250565b600054600160a060020a031633146104f057600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600054600160a060020a031681565b600054600160a060020a0316331461056b57600080fd5b600154421061057957600080fd5b600354811061058757600080fd5b81600160a060020a03166003828154811015156105a057fe5b600091825260209091200154600160a060020a0316146105bf57600080fd5b600160a060020a0382166000908152600260205260409020805460ff19169055600380546105f490600163ffffffff6109c716565b815481106105fe57fe5b60009182526020909120015460038054600160a060020a03909216918390811061062457fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790556003546106689060016109c7565b610673600382610c4e565b50604080513381529051600160a060020a038416917f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b0919081900360200190a25050565b33600090815260026020526040812054819060ff1615156106d757600080fd5b604080517ff7888aec000000000000000000000000000000000000000000000000000000008152600160a060020a03808916600483015285166024820152905173__ERC20Wrapper__________________________9163f7888aec916044808301926020929190829003018186803b15801561075257600080fd5b505af4158015610766573d6000803e3d6000fd5b505050506040513d602081101561077c57600080fd5b5051604080517f15dacbea000000000000000000000000000000000000000000000000000000008152600160a060020a03808a16600483015280881660248301528616604482015260648101889052905191935073__ERC20Wrapper__________________________916315dacbea91608480820192600092909190829003018186803b15801561080c57600080fd5b505af4158015610820573d6000803e3d6000fd5b5050604080517ff7888aec000000000000000000000000000000000000000000000000000000008152600160a060020a03808b16600483015287166024820152905173__ERC20Wrapper__________________________935063f7888aec92506044808301926020929190829003018186803b15801561089f57600080fd5b505af41580156108b3573d6000803e3d6000fd5b505050506040513d60208110156108c957600080fd5b505190506108dd828663ffffffff6109d916565b81146108e857600080fd5b505050505050565b60026020526000908152604090205460ff1681565b6060600380548060200260200160405190810160405280929190818152602001828054801561095d57602002820191906000526020600020905b8154600160a060020a0316815260019091019060200180831161093f575b505050505090505b90565b60015481565b600054600160a060020a0316331461098557600080fd5b61098e816109ec565b50565b606060008060606109a28686610a69565b925092508115156109b257600080fd5b6109bc8684610ad0565b509695505050505050565b6000828211156109d357fe5b50900390565b818101828110156109e657fe5b92915050565b600160a060020a0381161515610a0157600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b81516000908190815b81811015610abf5784600160a060020a03168682815181101515610a9257fe5b90602001906020020151600160a060020a03161415610ab75780600193509350610ac7565b600101610a72565b600093508392505b50509250929050565b6060600080606060008651925060018303604051908082528060200260200182016040528015610b0a578160200160208202803883390190505b509150600090505b85811015610b5f578681815181101515610b2857fe5b906020019060200201518282815181101515610b4057fe5b600160a060020a03909216602092830290910190910152600101610b12565b50600185015b82811015610bb5578681815181101515610b7b57fe5b906020019060200201518260018303815181101515610b9657fe5b600160a060020a03909216602092830290910190910152600101610b65565b818787815181101515610bc457fe5b90602001906020020151945094505050509250929050565b828054828255906000526020600020908101928215610c3e579160200282015b82811115610c3e578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610bfc565b50610c4a929150610c77565b5090565b815481835581811115610c7257600083815260209020610c72918101908301610ca8565b505050565b61096591905b80821115610c4a57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610c7d565b61096591905b80821115610c4a5760008155600101610cae5600a165627a7a723058201ca0a2d31cbe32b1c549ba2821f8d6fd2c1c14c2e2a53975361f412b784167fa0029",
  "sourceMap": "1008:1489:6:-;;;1143:67;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;567:5:68;:18;;-1:-1:-1;;;;;;567:18:68;575:10;567:18;;;1178:7:6;2413:33:49;:15;1178:7:6;2413:19:49;;;;;;:33;:::i;:::-;2396:14;:50;-1:-1:-1;1008:1489:6;;1214:123:67;1293:5;;;1311:6;;;;1304:14;;;;1214:123;;;;:::o;1008:1489:6:-;;;;;;;",
  "deployedSourceMap": "1008:1489:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2669:606:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2669:606:49;-1:-1:-1;;;;;2669:606:49;;;;;;;1543:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1543:28:49;;;;;;;;;-1:-1:-1;;;;;1543:28:49;;;;;;;;;;;;;;3442:624;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3442:624:49;-1:-1:-1;;;;;3442:624:49;;;;;1001:111:68;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:68;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:68;;;;4333:969:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4333:969:49;-1:-1:-1;;;;;4333:969:49;;;;;;;1674:821:6;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1674:821:6;-1:-1:-1;;;;;1674:821:6;;;;;;;;;;;;;;;;;;1456:43:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1456:43:49;-1:-1:-1;;;;;1456:43:49;;;;;;;;;;;;;;;;;;;;;;;5475:186;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5475:186:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5475:186:49;;;;;;;;;;;;;;;;;1357:29;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1357:29:49;;;;;;;;;;;;;;;;;;;;1274:103:68;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1274:103:68;-1:-1:-1;;;;;1274:103:68;;;;;2669:606:49;719:5:68;;-1:-1:-1;;;;;719:5:68;705:10;:19;697:28;;;;;;2852:14:49;;2834:15;:32;2826:41;;;;;;-1:-1:-1;;;;;2945:23:49;;;;;;:10;:23;;;;;;;;2944:24;2936:33;;;;;;-1:-1:-1;;;;;3021:23:49;;;;;;:10;:23;;;;;;;;:30;;-1:-1:-1;;3021:30:49;3047:4;3021:30;;;;;;3106:11;27:10:-1;;23:18;;;45:23;;3106:29:49;;;;;;;;;-1:-1:-1;;3106:29:49;;;;;3192:76;;3248:10;3192:76;;;;;;;;;;;;;;2669:606;:::o;1543:28::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1543:28:49;;-1:-1:-1;1543:28:49;:::o;3442:624::-;719:5:68;;-1:-1:-1;;;;;719:5:68;705:10;:19;697:28;;;;;;3628:14:49;;3610:15;:32;3602:41;;;;;;-1:-1:-1;;;;;3703:23:49;;;;;;:10;:23;;;;;;;;3695:32;;;;;;;;-1:-1:-1;;;;;3833:23:49;;;;;;:10;:23;;;;;;;;;3826:30;;-1:-1:-1;;3826:30:49;;;3881:11;:18;;;;;;;;;;;;;;;;;:31;;3844:11;;3881:18;;:11;:18;;;:11;:18;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3881:18:49;;;;;;;;;;;;;;;;;;;;;;;:31;;;;:::i;:::-;3867:45;;;;:11;;:45;;;;;;:::i;:::-;-1:-1:-1;3976:83:49;;;4039:10;3976:83;;;;-1:-1:-1;;;;;3976:83:49;;;;;;;;;;;;;3442:624;:::o;1001:111:68:-;719:5;;-1:-1:-1;;;;;719:5:68;705:10;:19;697:28;;;;;;1077:5;;;1058:25;;-1:-1:-1;;;;;1077:5:68;;;;1058:25;;;1105:1;1089:18;;-1:-1:-1;;1089:18:68;;;1001:111::o;238:20::-;;;-1:-1:-1;;;;;238:20:68;;:::o;4333:969:49:-;719:5:68;;-1:-1:-1;;;;;719:5:68;705:10;:19;697:28;;;;;;4564:14:49;;4546:15;:32;4538:41;;;;;;4675:11;:18;4666:27;;4658:36;;;;;;4810:11;-1:-1:-1;;;;;4787:34:49;:11;4799:6;4787:19;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4787:19:49;:34;4779:43;;;;;;-1:-1:-1;;;;;4890:23:49;;;;;;:10;:23;;;;;4883:30;;-1:-1:-1;;4883:30:49;;;5011:11;5023:18;;:25;;4883:30;5023:25;:22;:25;:::i;:::-;5011:38;;;;;;;;;;;;;;;;;;4989:11;:19;;-1:-1:-1;;;;;5011:38:49;;;;5001:6;;4989:19;;;;;;;;;;;;;;;:60;;-1:-1:-1;;4989:60:49;-1:-1:-1;;;;;4989:60:49;;;;;;;;;;5123:11;:18;:25;;-1:-1:-1;5123:22:49;:25::i;:::-;5102:46;:11;:46;;:::i;:::-;-1:-1:-1;5212:83:49;;;5275:10;5212:83;;;;-1:-1:-1;;;;;5212:83:49;;;;;;;;;;;;;4333:969;;:::o;1674:821:6:-;1752:10:49;1909:23:6;1741:22:49;;;:10;:22;;;;;;1909:23:6;;1741:22:49;;1733:31;;;;;;;;1935:69:6;;;;;;-1:-1:-1;;;;;1935:69:6;;;;;;;;;;;;;;;:12;;:22;;:69;;;;;;;;;;;;;;:12;:69;;;5:2:-1;;;;30:1;27;20:12;5:2;1935:69:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1935:69:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1935:69:6;2088:114;;;;;;-1:-1:-1;;;;;2088:114:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;1935:69;;-1:-1:-1;2088:12:6;;:25;;:114;;;;;-1:-1:-1;;2088:114:6;;;;;;;;:12;:114;;;5:2:-1;;;;30:1;27;20:12;5:2;2088:114:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;2295:69:6;;;;;;-1:-1:-1;;;;;2295:69:6;;;;;;;;;;;;;;;:12;;-1:-1:-1;2295:22:6;;-1:-1:-1;2295:69:6;;;;;;;;;;;;;;:12;:69;;;5:2:-1;;;;30:1;27;20:12;5:2;2295:69:6;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2295:69:6;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2295:69:6;;-1:-1:-1;2457:30:6;:15;2477:9;2457:30;:19;:30;:::i;:::-;2443:44;;2435:53;;;;;;1674:821;;;;;;:::o;1456:43:49:-;;;;;;;;;;;;;;;:::o;5475:186::-;5556:9;5643:11;5636:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;5636:18:49;;;;;;;;;;;;;;;;;;;;;;;5475:186;;:::o;1357:29::-;;;;:::o;1274:103:68:-;719:5;;-1:-1:-1;;;;;719:5:68;705:10;:19;697:28;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;6618:270:48:-;6700:9;6727:13;6742:9;6823:19;6755:13;6763:1;6766;6755:7;:13::i;:::-;6726:42;;;;6779:4;6778:5;6774:110;;;6793:8;;;6774:110;6847:13;6851:1;6854:5;6847:3;:13::i;:::-;-1:-1:-1;6822:38:48;6618:270;-1:-1:-1;;;;;;6618:270:48:o;1042:110:67:-;1100:7;1122:6;;;;1115:14;;;;-1:-1:-1;1142:5:67;;;1042:110::o;1214:123::-;1293:5;;;1311:6;;;;1304:14;;;;1214:123;;;;:::o;1512:171:68:-;-1:-1:-1;;;;;1582:23:68;;;;1574:32;;;;;;1638:5;;;1617:38;;-1:-1:-1;;;;;1617:38:68;;;;1638:5;;;1617:38;;;1661:5;:17;;-1:-1:-1;;1661:17:68;-1:-1:-1;;;;;1661:17:68;;;;;;;;;;1512:171::o;293:251:48:-;402:8;;364:7;;;;;416:101;440:6;436:1;:10;416:101;;;473:1;-1:-1:-1;;;;;465:9:48;:1;467;465:4;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;465:9:48;;461:50;;;494:1;497:4;486:16;;;;;;461:50;448:3;;416:101;;;530:1;;-1:-1:-1;530:1:48;;-1:-1:-1;293:251:48;;;;;;;;:::o;6158:409::-;6241:9;6259:7;6276:14;6307:29;6375:9;6293:1;:8;6276:25;;6362:1;6353:6;:10;6339:25;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;136:17;;-1:-1;6339:25:48;;6307:57;;6387:1;6375:13;;6370:73;6394:5;6390:1;:9;6370:73;;;6432:1;6434;6432:4;;;;;;;;;;;;;;;;;;6414:12;6427:1;6414:15;;;;;;;;;;-1:-1:-1;;;;;6414:22:48;;;:15;;;;;;;;;;:22;6401:3;;6370:73;;;-1:-1:-1;6465:1:48;6457:9;;6448:78;6472:6;6468:1;:10;6448:78;;;6515:1;6517;6515:4;;;;;;;;;;;;;;;;;;6493:12;6510:1;6506;:5;6493:19;;;;;;;;;;-1:-1:-1;;;;;6493:26:48;;;:19;;;;;;;;;;:26;6480:3;;6448:78;;;6539:12;6553:1;6555:5;6553:8;;;;;;;;;;;;;;;;;;6531:31;;;;6158:409;;;;;;;;:::o;1008:1489:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1008:1489:6;-1:-1:-1;;;;;1008:1489:6;;;;;;;;;;;-1:-1:-1;1008:1489:6;;;;;;;-1:-1:-1;1008:1489:6;;;-1:-1:-1;1008:1489:6;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;-1:-1:-1;;1008:1489:6;;;;;;;;;;;;;;;;;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\nimport { SafeMath } from \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport { Authorizable } from \"../lib/Authorizable.sol\";\nimport { ERC20Wrapper } from \"../lib/ERC20Wrapper.sol\";\n\n\n/**\n * @title TransferProxy\n * @author Set Protocol\n *\n * The transferProxy contract is responsible for moving tokens through the system to\n * assist with issuance and filling issuance orders.\n */\n\ncontract TransferProxy is\n    Authorizable\n{\n    using SafeMath for uint256;\n\n    /* ============ Constructor ============ */\n    \n    constructor()\n        Authorizable(2592000) // About 4 weeks\n    {}\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Transfers tokens from an address (that has set allowance on the proxy).\n     * Can only be called by authorized core contracts.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _quantity       The number of tokens to transfer\n     * @param  _from           The address to transfer from\n     * @param  _to             The address to transfer to\n     */\n    function transfer(\n        address _token,\n        uint256 _quantity,\n        address _from,\n        address _to\n    )\n        external\n        onlyAuthorized\n    {\n        // Retrieve current balance of token for the receiver\n        uint256 existingBalance = ERC20Wrapper.balanceOf(\n            _token,\n            _to\n        );\n\n        // Call specified ERC20 contract to transfer tokens (via proxy).\n        ERC20Wrapper.transferFrom(\n            _token,\n            _from,\n            _to,\n            _quantity\n        );\n\n        // Get new balance of transferred token for receiver\n        uint256 newBalance = ERC20Wrapper.balanceOf(\n            _token,\n            _to\n        );\n\n        // Verify transfer quantity is reflected in balance\n        require(newBalance == existingBalance.add(_quantity));\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/TransferProxy.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/TransferProxy.sol",
    "exportedSymbols": {
      "TransferProxy": [
        1316
      ]
    },
    "id": 1317,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1249,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:6"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1251,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 8755,
        "src": "622:73:6",
        "symbolAliases": [
          {
            "foreign": 1250,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Authorizable.sol",
        "file": "../lib/Authorizable.sol",
        "id": 1253,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 6932,
        "src": "696:55:6",
        "symbolAliases": [
          {
            "foreign": 1252,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
        "file": "../lib/ERC20Wrapper.sol",
        "id": 1255,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 7198,
        "src": "752:55:6",
        "symbolAliases": [
          {
            "foreign": 1254,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1256,
              "name": "Authorizable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6931,
              "src": "1038:12:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authorizable_$6931",
                "typeString": "contract Authorizable"
              }
            },
            "id": 1257,
            "nodeType": "InheritanceSpecifier",
            "src": "1038:12:6"
          }
        ],
        "contractDependencies": [
          6931,
          8840
        ],
        "contractKind": "contract",
        "documentation": "@title TransferProxy\n@author Set Protocol\n * The transferProxy contract is responsible for moving tokens through the system to\nassist with issuance and filling issuance orders.",
        "fullyImplemented": true,
        "id": 1316,
        "linearizedBaseContracts": [
          1316,
          6931,
          8840
        ],
        "name": "TransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1260,
            "libraryName": {
              "contractScope": null,
              "id": 1258,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8754,
              "src": "1063:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8754",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1057:27:6",
            "typeName": {
              "id": 1259,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1076:7:6",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1266,
              "nodeType": "Block",
              "src": "1208:2:6",
              "statements": []
            },
            "documentation": null,
            "id": 1267,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "32353932303030",
                    "id": 1263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1178:7:6",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2592000_by_1",
                      "typeString": "int_const 2592000"
                    },
                    "value": "2592000"
                  }
                ],
                "id": 1264,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1262,
                  "name": "Authorizable",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6931,
                  "src": "1165:12:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Authorizable_$6931_$",
                    "typeString": "type(contract Authorizable)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1165:21:6"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1154:2:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:0:6"
            },
            "scope": 1316,
            "src": "1143:67:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1314,
              "nodeType": "Block",
              "src": "1837:658:6",
              "statements": [
                {
                  "assignments": [
                    1281
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1281,
                      "name": "existingBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1315,
                      "src": "1909:23:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1280,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1909:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1287,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1284,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "1971:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1285,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "1991:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1282,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "1935:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7056,
                      "src": "1935:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 1286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1935:69:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1909:95:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1291,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "2127:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1292,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1273,
                        "src": "2147:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1293,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "2166:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1294,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1271,
                        "src": "2183:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1288,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "2088:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7125,
                      "src": "2088:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 1295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2088:114:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1296,
                  "nodeType": "ExpressionStatement",
                  "src": "2088:114:6"
                },
                {
                  "assignments": [
                    1298
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1298,
                      "name": "newBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1315,
                      "src": "2274:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1297,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2274:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1304,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1301,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "2331:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1302,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "2351:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1299,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "2295:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7056,
                      "src": "2295:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 1303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2295:69:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2274:90:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1306,
                          "name": "newBalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1298,
                          "src": "2443:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1309,
                              "name": "_quantity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1271,
                              "src": "2477:9:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1307,
                              "name": "existingBalance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1281,
                              "src": "2457:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8753,
                            "src": "2457:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:30:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2443:44:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1305,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "2435:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2435:53:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1313,
                  "nodeType": "ExpressionStatement",
                  "src": "2435:53:6"
                }
              ]
            },
            "documentation": "Transfers tokens from an address (that has set allowance on the proxy).\nCan only be called by authorized core contracts.\n     * @param  _token          The address of the ERC20 token\n@param  _quantity       The number of tokens to transfer\n@param  _from           The address to transfer from\n@param  _to             The address to transfer to",
            "id": 1315,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1278,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1277,
                  "name": "onlyAuthorized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6751,
                  "src": "1818:14:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1818:14:6"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1269,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1701:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1271,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1725:17:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1270,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1725:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1273,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1752:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1275,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1775:11:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1775:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1691:101:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1279,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1837:0:6"
            },
            "scope": 1316,
            "src": "1674:821:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1317,
        "src": "1008:1489:6"
      }
    ],
    "src": "597:1901:6"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/TransferProxy.sol",
    "exportedSymbols": {
      "TransferProxy": [
        1316
      ]
    },
    "id": 1317,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1249,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:6"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 1251,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 8755,
        "src": "622:73:6",
        "symbolAliases": [
          {
            "foreign": 1250,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Authorizable.sol",
        "file": "../lib/Authorizable.sol",
        "id": 1253,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 6932,
        "src": "696:55:6",
        "symbolAliases": [
          {
            "foreign": 1252,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
        "file": "../lib/ERC20Wrapper.sol",
        "id": 1255,
        "nodeType": "ImportDirective",
        "scope": 1317,
        "sourceUnit": 7198,
        "src": "752:55:6",
        "symbolAliases": [
          {
            "foreign": 1254,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1256,
              "name": "Authorizable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6931,
              "src": "1038:12:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authorizable_$6931",
                "typeString": "contract Authorizable"
              }
            },
            "id": 1257,
            "nodeType": "InheritanceSpecifier",
            "src": "1038:12:6"
          }
        ],
        "contractDependencies": [
          6931,
          8840
        ],
        "contractKind": "contract",
        "documentation": "@title TransferProxy\n@author Set Protocol\n * The transferProxy contract is responsible for moving tokens through the system to\nassist with issuance and filling issuance orders.",
        "fullyImplemented": true,
        "id": 1316,
        "linearizedBaseContracts": [
          1316,
          6931,
          8840
        ],
        "name": "TransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 1260,
            "libraryName": {
              "contractScope": null,
              "id": 1258,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8754,
              "src": "1063:8:6",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$8754",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1057:27:6",
            "typeName": {
              "id": 1259,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1076:7:6",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "body": {
              "id": 1266,
              "nodeType": "Block",
              "src": "1208:2:6",
              "statements": []
            },
            "documentation": null,
            "id": 1267,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "32353932303030",
                    "id": 1263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1178:7:6",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_2592000_by_1",
                      "typeString": "int_const 2592000"
                    },
                    "value": "2592000"
                  }
                ],
                "id": 1264,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1262,
                  "name": "Authorizable",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6931,
                  "src": "1165:12:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Authorizable_$6931_$",
                    "typeString": "type(contract Authorizable)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1165:21:6"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1261,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1154:2:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1208:0:6"
            },
            "scope": 1316,
            "src": "1143:67:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1314,
              "nodeType": "Block",
              "src": "1837:658:6",
              "statements": [
                {
                  "assignments": [
                    1281
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1281,
                      "name": "existingBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1315,
                      "src": "1909:23:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1280,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1909:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1287,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1284,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "1971:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1285,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "1991:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1282,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "1935:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7056,
                      "src": "1935:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 1286,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1935:69:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1909:95:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1291,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "2127:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1292,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1273,
                        "src": "2147:5:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1293,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "2166:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1294,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1271,
                        "src": "2183:9:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1288,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "2088:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1290,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7125,
                      "src": "2088:25:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,address,uint256)"
                      }
                    },
                    "id": 1295,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2088:114:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1296,
                  "nodeType": "ExpressionStatement",
                  "src": "2088:114:6"
                },
                {
                  "assignments": [
                    1298
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1298,
                      "name": "newBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 1315,
                      "src": "2274:18:6",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1297,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2274:7:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1304,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1301,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1269,
                        "src": "2331:6:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1302,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1275,
                        "src": "2351:3:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1299,
                        "name": "ERC20Wrapper",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7197,
                        "src": "2295:12:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20Wrapper_$7197_$",
                          "typeString": "type(library ERC20Wrapper)"
                        }
                      },
                      "id": 1300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7056,
                      "src": "2295:22:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_delegatecall_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view returns (uint256)"
                      }
                    },
                    "id": 1303,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2295:69:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2274:90:6"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1311,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1306,
                          "name": "newBalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1298,
                          "src": "2443:10:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1309,
                              "name": "_quantity",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1271,
                              "src": "2477:9:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1307,
                              "name": "existingBalance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1281,
                              "src": "2457:15:6",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 1308,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8753,
                            "src": "2457:19:6",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 1310,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2457:30:6",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2443:44:6",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1305,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "2435:7:6",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2435:53:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1313,
                  "nodeType": "ExpressionStatement",
                  "src": "2435:53:6"
                }
              ]
            },
            "documentation": "Transfers tokens from an address (that has set allowance on the proxy).\nCan only be called by authorized core contracts.\n     * @param  _token          The address of the ERC20 token\n@param  _quantity       The number of tokens to transfer\n@param  _from           The address to transfer from\n@param  _to             The address to transfer to",
            "id": 1315,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1278,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1277,
                  "name": "onlyAuthorized",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6751,
                  "src": "1818:14:6",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1818:14:6"
              }
            ],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1269,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1701:14:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1701:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1271,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1725:17:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1270,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1725:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1273,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1752:13:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1752:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1275,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 1315,
                  "src": "1775:11:6",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1274,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1775:7:6",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1691:101:6"
            },
            "payable": false,
            "returnParameters": {
              "id": 1279,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1837:0:6"
            },
            "scope": 1316,
            "src": "1674:821:6",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 1317,
        "src": "1008:1489:6"
      }
    ],
    "src": "597:1901:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.063Z"
}