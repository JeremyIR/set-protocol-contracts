export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
      "constant": true,
      "inputs": [
        {
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.23;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender)\n    public view returns (uint256);\n\n  function transferFrom(address from, address to, uint256 value)\n    public returns (bool);\n\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(\n    address indexed owner,\n    address indexed spender,\n    uint256 value\n  );\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        7004
      ]
    },
    "id": 7005,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6963,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 6964,
        "nodeType": "ImportDirective",
        "scope": 7005,
        "sourceUnit": 7037,
        "src": "26:26:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6965,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7036,
              "src": "162:10:64",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$7036",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 6966,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:64"
          }
        ],
        "contractDependencies": [
          7036
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 7004,
        "linearizedBaseContracts": [
          7004,
          7036
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6975,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6968,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "196:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6967,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:64",
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
                  "id": 6970,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "211:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6973,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "253:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6972,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:64"
            },
            "scope": 7004,
            "src": "177:85:64",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6986,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6977,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "288:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:64",
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
                  "id": 6979,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "302:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:64",
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
                  "id": 6981,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "314:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:41:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "349:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6983,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:6:64"
            },
            "scope": 7004,
            "src": "266:89:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6988,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "376:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:64",
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
                  "id": 6990,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "393:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:32:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "424:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6992,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:6:64"
            },
            "scope": 7004,
            "src": "359:71:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7003,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6997,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "453:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:7:64",
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
                  "id": 6999,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "480:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6998,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:64",
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
                  "id": 7001,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "509:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "447:79:64"
            },
            "src": "433:94:64"
          }
        ],
        "scope": 7005,
        "src": "144:385:64"
      }
    ],
    "src": "0:530:64"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        7004
      ]
    },
    "id": 7005,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6963,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:64"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 6964,
        "nodeType": "ImportDirective",
        "scope": 7005,
        "sourceUnit": 7037,
        "src": "26:26:64",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6965,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7036,
              "src": "162:10:64",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$7036",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 6966,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:64"
          }
        ],
        "contractDependencies": [
          7036
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 7004,
        "linearizedBaseContracts": [
          7004,
          7036
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6975,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6968,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "196:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6967,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:64",
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
                  "id": 6970,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "211:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6973,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6975,
                  "src": "253:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6972,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:64"
            },
            "scope": 7004,
            "src": "177:85:64",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6986,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6982,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6977,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "288:12:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:64",
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
                  "id": 6979,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "302:10:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "302:7:64",
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
                  "id": 6981,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "314:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6980,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "314:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:41:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6986,
                  "src": "349:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6983,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:6:64"
            },
            "scope": 7004,
            "src": "266:89:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6995,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6991,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6988,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "376:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6987,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "376:7:64",
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
                  "id": 6990,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "393:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6989,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "375:32:64"
            },
            "payable": false,
            "returnParameters": {
              "id": 6994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6993,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6995,
                  "src": "424:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6992,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "423:6:64"
            },
            "scope": 7004,
            "src": "359:71:64",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7003,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6997,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "453:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "453:7:64",
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
                  "id": 6999,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "480:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6998,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "480:7:64",
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
                  "id": 7001,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 7003,
                  "src": "509:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "447:79:64"
            },
            "src": "433:94:64"
          }
        ],
        "scope": 7005,
        "src": "144:385:64"
      }
    ],
    "src": "0:530:64"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T21:21:49.421Z"
}