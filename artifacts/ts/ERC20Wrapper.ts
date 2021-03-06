export const ERC20Wrapper = 
{
  "contractName": "ERC20Wrapper",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_owner",
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
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x610309610030600b82828239805160001a6073146000811461002057610022565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600436106100545763ffffffff60e060020a60003504166315dacbea8114610059578063beabacc81461008b578063f7888aec146100b5575b600080fd5b81801561006557600080fd5b50610089600160a060020a03600435811690602435811690604435166064356100e1565b005b81801561009757600080fd5b50610089600160a060020a0360043581169060243516604435610185565b6100cf600160a060020a0360043581169060243516610218565b60408051918252519081900360200190f35b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301528481166024830152604482018490529151918616916323b872dd9160648082019260009290919082900301818387803b15801561015457600080fd5b505af1158015610168573d6000803e3d6000fd5b505050506101746102a8565b151561017f57600080fd5b50505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156101e857600080fd5b505af11580156101fc573d6000803e3d6000fd5b505050506102086102a8565b151561021357600080fd5b505050565b600082600160a060020a03166370a08231836040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561027557600080fd5b505af1158015610289573d6000803e3d6000fd5b505050506040513d602081101561029f57600080fd5b50519392505050565b6000803d80156102bf57602081146102c8576102d4565b600191506102d4565b60206000803e60005191505b506001149190505600a165627a7a72305820fff9444616fc08c2a381c67ed3b92a65c9d51681bf323fbdba9d6165b7c364650029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600436106100545763ffffffff60e060020a60003504166315dacbea8114610059578063beabacc81461008b578063f7888aec146100b5575b600080fd5b81801561006557600080fd5b50610089600160a060020a03600435811690602435811690604435166064356100e1565b005b81801561009757600080fd5b50610089600160a060020a0360043581169060243516604435610185565b6100cf600160a060020a0360043581169060243516610218565b60408051918252519081900360200190f35b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0385811660048301528481166024830152604482018490529151918616916323b872dd9160648082019260009290919082900301818387803b15801561015457600080fd5b505af1158015610168573d6000803e3d6000fd5b505050506101746102a8565b151561017f57600080fd5b50505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156101e857600080fd5b505af11580156101fc573d6000803e3d6000fd5b505050506102086102a8565b151561021357600080fd5b505050565b600082600160a060020a03166370a08231836040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561027557600080fd5b505af1158015610289573d6000803e3d6000fd5b505050506040513d602081101561029f57600080fd5b50519392505050565b6000803d80156102bf57602081146102c8576102d4565b600191506102d4565b60206000803e60005191505b506001149190505600a165627a7a72305820fff9444616fc08c2a381c67ed3b92a65c9d51681bf323fbdba9d6165b7c364650029",
  "sourceMap": "1008:4964:52:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "1008:4964:52:-;;;;;;;;;;;;-1:-1:-1;;;1008:4964:52;;;;;;;;;;;;;;;;;;;;;;;3169:301;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3169:301:52;-1:-1:-1;;;;;3169:301:52;;;;;;;;;;;;;;;;;;;2475:259;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2475:259:52;-1:-1:-1;;;;;2475:259:52;;;;;;;;;;;;1359:189;;-1:-1:-1;;;;;1359:189:52;;;;;;;;;;;;;;;;;;;;;;;;;;3169:301;3323:50;;;;;;-1:-1:-1;;;;;3323:50:52;;;;;;;;;;;;;;;;;;;;;;:27;;;;;;:50;;;;;-1:-1:-1;;3323:50:52;;;;;;;;-1:-1:-1;3323:27:52;:50;;;5:2:-1;;;;30:1;27;20:12;5:2;3323:50:52;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3323:50:52;;;;3448:14;:12;:14::i;:::-;3440:23;;;;;;;;3169:301;;;;:::o;2475:259::-;2609:6;-1:-1:-1;;;;;2602:23:52;;2626:3;2631:9;2602:39;;;;;-1:-1:-1;;;2602:39:52;;;;;;;-1:-1:-1;;;;;2602:39:52;-1:-1:-1;;;;;2602:39:52;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2602:39:52;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2602:39:52;;;;2712:14;:12;:14::i;:::-;2704:23;;;;;;;;2475:259;;;:::o;1359:189::-;1479:7;1516:6;-1:-1:-1;;;;;1509:24:52;;1534:6;1509:32;;;;;-1:-1:-1;;;1509:32:52;;;;;;;-1:-1:-1;;;;;1509:32:52;-1:-1:-1;;;;;1509:32:52;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1509:32:52;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1509:32:52;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1509:32:52;;1359:189;-1:-1:-1;;;1359:189:52:o;5118:852::-;5193:4;;5377:14;5454:57;;;;5563:4;5558:220;;;;5370:497;;5454:57;5496:1;5481:16;;5454:57;;5558:220;5663:4;5658:3;5653;5638:30;5760:3;5754:10;5739:25;;5370:497;-1:-1:-1;5962:1:52;5947:16;;5118:852;-1:-1:-1;5118:852:52:o",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\nimport { CommonMath } from \"./CommonMath.sol\";\nimport { IERC20 } from \"./IERC20.sol\";\n\n\n/**\n * @title ERC20Wrapper\n * @author Set Protocol\n *\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\n * For all functions we will only accept tokens that return a null or true value, any other values will\n * cause the operation to revert.\n */\nlibrary ERC20Wrapper {\n\n    // ============ Internal Functions ============\n\n    /**\n     * Check balance owner's balance of ERC20 token\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _owner          The owner who's balance is being checked\n     * @return  uint256        The _owner's amount of tokens\n     */\n    function balanceOf(\n        address _token,\n        address _owner\n    )\n        external\n        view\n        returns (uint256)\n    {\n        return IERC20(_token).balanceOf(_owner);\n    }\n\n    /**\n     * Checks spender's allowance to use token's on owner's behalf.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _owner          The token owner address\n     * @param  _spender        The address the allowance is being checked on\n     * @return  uint256        The spender's allowance on behalf of owner\n     */\n    function allowance(\n        address _token,\n        address _owner,\n        address _spender\n    )\n        internal\n        view\n        returns (uint256)\n    {\n        return IERC20(_token).allowance(_owner, _spender);\n    }\n\n    /**\n     * Transfers tokens from an address. Handle's tokens that return true or null.\n     * If other value returned, reverts.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _to             The address to transfer to\n     * @param  _quantity       The amount of tokens to transfer\n     */\n    function transfer(\n        address _token,\n        address _to,\n        uint256 _quantity\n    )\n        external\n    {\n        IERC20(_token).transfer(_to, _quantity);\n\n        // Check that transfer returns true or null\n        require(checkSuccess());\n    }\n\n    /**\n     * Transfers tokens from an address (that has set allowance on the proxy).\n     * Handle's tokens that return true or null. If other value returned, reverts.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _from           The address to transfer from\n     * @param  _to             The address to transfer to\n     * @param  _quantity       The number of tokens to transfer\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint256 _quantity\n    )\n        external\n    {\n        IERC20(_token).transferFrom(_from, _to, _quantity);\n\n        // Check that transferFrom returns true or null\n        require(checkSuccess());\n    }\n\n    /**\n     * Grants spender ability to spend on owner's behalf.\n     * Handle's tokens that return true or null. If other value returned, reverts.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _spender        The address to approve for transfer\n     * @param  _quantity       The amount of tokens to approve spender for\n     */\n    function approve(\n        address _token,\n        address _spender,\n        uint256 _quantity\n    )\n        internal\n    {\n        IERC20(_token).approve(_spender, _quantity);\n\n        // Check that approve returns true or null\n        require(checkSuccess());\n    }\n\n    /**\n     * Ensure's the owner has granted enough allowance for system to\n     * transfer tokens.\n     *\n     * @param  _token          The address of the ERC20 token\n     * @param  _owner          The address of the token owner\n     * @param  _spender        The address to grant/check allowance for\n     * @param  _quantity       The amount to see if allowed for\n     */\n    function ensureAllowance(\n        address _token,\n        address _owner,\n        address _spender,\n        uint256 _quantity\n    )\n        internal\n    {\n        uint256 currentAllowance = allowance(_token, _owner, _spender);\n        if (currentAllowance < _quantity) {\n            approve(\n                _token,\n                _spender,\n                CommonMath.maxUInt256()\n            );\n        }\n    }\n\n    // ============ Private Functions ============\n\n    /**\n     * Checks the return value of the previous function up to 32 bytes. Returns true if the previous\n     * function returned 0 bytes or 1.\n     */\n    function checkSuccess(\n    )\n        private\n        pure\n        returns (bool)\n    {\n        // default to failure\n        uint256 returnValue = 0;\n\n        assembly {\n            // check number of bytes returned from last function call\n            switch returndatasize\n\n            // no bytes returned: assume success\n            case 0x0 {\n                returnValue := 1\n            }\n\n            // 32 bytes returned\n            case 0x20 {\n                // copy 32 bytes into scratch space\n                returndatacopy(0x0, 0x0, 0x20)\n\n                // load those bytes into returnValue\n                returnValue := mload(0x0)\n            }\n\n            // not sure what was returned: dont mark as success\n            default { }\n        }\n\n        // check if returned value is one or nothing\n        return returnValue == 1;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
    "exportedSymbols": {
      "ERC20Wrapper": [
        7197
      ]
    },
    "id": 7198,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7035,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:52"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 7037,
        "nodeType": "ImportDirective",
        "scope": 7198,
        "sourceUnit": 7034,
        "src": "622:46:52",
        "symbolAliases": [
          {
            "foreign": 7036,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 7039,
        "nodeType": "ImportDirective",
        "scope": 7198,
        "sourceUnit": 7242,
        "src": "669:38:52",
        "symbolAliases": [
          {
            "foreign": 7038,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC20Wrapper\n@author Set Protocol\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\nFor all functions we will only accept tokens that return a null or true value, any other values will\ncause the operation to revert.",
        "fullyImplemented": true,
        "id": 7197,
        "linearizedBaseContracts": [
          7197
        ],
        "name": "ERC20Wrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7055,
              "nodeType": "Block",
              "src": "1492:56:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7052,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7043,
                        "src": "1534:6:52",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7049,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7041,
                            "src": "1516:6:52",
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
                            }
                          ],
                          "id": 7048,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "1509:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1509:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7206,
                      "src": "1509:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 7053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:32:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7047,
                  "id": 7054,
                  "nodeType": "Return",
                  "src": "1502:39:52"
                }
              ]
            },
            "documentation": "Check balance owner's balance of ERC20 token\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The owner who's balance is being checked\n@return  uint256        The _owner's amount of tokens",
            "id": 7056,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7041,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1387:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:52",
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
                  "id": 7043,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1411:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1377:54:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7046,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1479:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1479:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1478:9:52"
            },
            "scope": 7197,
            "src": "1359:189:52",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7075,
              "nodeType": "Block",
              "src": "2072:66:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7071,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7060,
                        "src": "2114:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7072,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7062,
                        "src": "2122:8:52",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7068,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7058,
                            "src": "2096:6:52",
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
                            }
                          ],
                          "id": 7067,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "2089:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2089:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7215,
                      "src": "2089:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 7073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2089:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7066,
                  "id": 7074,
                  "nodeType": "Return",
                  "src": "2082:49:52"
                }
              ]
            },
            "documentation": "Checks spender's allowance to use token's on owner's behalf.\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The token owner address\n@param  _spender        The address the allowance is being checked on\n@return  uint256        The spender's allowance on behalf of owner",
            "id": 7076,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7058,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1941:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1941:7:52",
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
                  "id": 7060,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1965:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1965:7:52",
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
                  "id": 7062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1989:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1989:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1931:80:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "2059:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2059:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2058:9:52"
            },
            "scope": 7197,
            "src": "1913:225:52",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7098,
              "nodeType": "Block",
              "src": "2592:142:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7089,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7080,
                        "src": "2626:3:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7090,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7082,
                        "src": "2631:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7086,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7078,
                            "src": "2609:6:52",
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
                            }
                          ],
                          "id": 7085,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "2602:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2602:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7222,
                      "src": "2602:23:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 7091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2602:39:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7092,
                  "nodeType": "ExpressionStatement",
                  "src": "2602:39:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7094,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "2712:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2712:14:52",
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
                      "id": 7093,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "2704:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2704:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7097,
                  "nodeType": "ExpressionStatement",
                  "src": "2704:23:52"
                }
              ]
            },
            "documentation": "Transfers tokens from an address. Handle's tokens that return true or null.\nIf other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _to             The address to transfer to\n@param  _quantity       The amount of tokens to transfer",
            "id": 7099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7078,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2502:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2502:7:52",
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
                  "id": 7080,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2526:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7079,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2526:7:52",
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
                  "id": 7082,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2547:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2547:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2492:78:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2592:0:52"
            },
            "scope": 7197,
            "src": "2475:259:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7124,
              "nodeType": "Block",
              "src": "3313:157:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7114,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7103,
                        "src": "3351:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7115,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7105,
                        "src": "3358:3:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7116,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7107,
                        "src": "3363:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7111,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7101,
                            "src": "3330:6:52",
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
                            }
                          ],
                          "id": 7110,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "3323:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3323:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7231,
                      "src": "3323:27:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256) external"
                      }
                    },
                    "id": 7117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3323:50:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7118,
                  "nodeType": "ExpressionStatement",
                  "src": "3323:50:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7120,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "3448:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3448:14:52",
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
                      "id": 7119,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "3440:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3440:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7123,
                  "nodeType": "ExpressionStatement",
                  "src": "3440:23:52"
                }
              ]
            },
            "documentation": "Transfers tokens from an address (that has set allowance on the proxy).\nHandle's tokens that return true or null. If other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _from           The address to transfer from\n@param  _to             The address to transfer to\n@param  _quantity       The number of tokens to transfer",
            "id": 7125,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7101,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3200:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3200:7:52",
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
                  "id": 7103,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3224:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:7:52",
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
                  "id": 7105,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3247:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3247:7:52",
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
                  "id": 7107,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3268:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3268:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3190:101:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3313:0:52"
            },
            "scope": 7197,
            "src": "3169:301:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7147,
              "nodeType": "Block",
              "src": "3965:145:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7138,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7129,
                        "src": "3998:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7139,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7131,
                        "src": "4008:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7135,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7127,
                            "src": "3982:6:52",
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
                            }
                          ],
                          "id": 7134,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "3975:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3975:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7240,
                      "src": "3975:22:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 7140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3975:43:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7141,
                  "nodeType": "ExpressionStatement",
                  "src": "3975:43:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7143,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "4088:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4088:14:52",
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
                      "id": 7142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "4080:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4080:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7146,
                  "nodeType": "ExpressionStatement",
                  "src": "4080:23:52"
                }
              ]
            },
            "documentation": "Grants spender ability to spend on owner's behalf.\nHandle's tokens that return true or null. If other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _spender        The address to approve for transfer\n@param  _quantity       The amount of tokens to approve spender for",
            "id": 7148,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7127,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3870:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3870:7:52",
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
                  "id": 7129,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3894:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3894:7:52",
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
                  "id": 7131,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3920:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3920:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3860:83:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3965:0:52"
            },
            "scope": 7197,
            "src": "3844:266:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7180,
              "nodeType": "Block",
              "src": "4645:259:52",
              "statements": [
                {
                  "assignments": [
                    7160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7160,
                      "name": "currentAllowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 7181,
                      "src": "4655:24:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7159,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4655:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7166,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7162,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7150,
                        "src": "4692:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7163,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7152,
                        "src": "4700:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7164,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7154,
                        "src": "4708:8:52",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7161,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7076,
                      "src": "4682:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 7165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4682:35:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4655:62:52"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7167,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7160,
                      "src": "4731:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 7168,
                      "name": "_quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7156,
                      "src": "4750:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4731:28:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 7179,
                  "nodeType": "IfStatement",
                  "src": "4727:171:52",
                  "trueBody": {
                    "id": 7178,
                    "nodeType": "Block",
                    "src": "4761:137:52",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 7171,
                              "name": "_token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7150,
                              "src": "4800:6:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 7172,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7154,
                              "src": "4824:8:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 7173,
                                  "name": "CommonMath",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7033,
                                  "src": "4850:10:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$7033_$",
                                    "typeString": "type(library CommonMath)"
                                  }
                                },
                                "id": 7174,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maxUInt256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7032,
                                "src": "4850:21:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                  "typeString": "function () pure returns (uint256)"
                                }
                              },
                              "id": 7175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4850:23:52",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 7170,
                            "name": "approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7148,
                            "src": "4775:7:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 7176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4775:112:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7177,
                        "nodeType": "ExpressionStatement",
                        "src": "4775:112:52"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "Ensure's the owner has granted enough allowance for system to\ntransfer tokens.\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The address of the token owner\n@param  _spender        The address to grant/check allowance for\n@param  _quantity       The amount to see if allowed for",
            "id": 7181,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ensureAllowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7150,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4526:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:52",
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
                  "id": 7152,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4550:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4550:7:52",
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
                  "id": 7154,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4574:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7153,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4574:7:52",
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
                  "id": 7156,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4600:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4600:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4516:107:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4645:0:52"
            },
            "scope": 7197,
            "src": "4492:412:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7195,
              "nodeType": "Block",
              "src": "5203:767:52",
              "statements": [
                {
                  "assignments": [
                    7187
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7187,
                      "name": "returnValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 7196,
                      "src": "5243:19:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7186,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5243:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7189,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 7188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5265:1:52",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5243:23:52"
                },
                {
                  "externalReferences": [
                    {
                      "returnValue": {
                        "declaration": 7187,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5739:11:52",
                        "valueSize": 1
                      }
                    },
                    {
                      "returnValue": {
                        "declaration": 7187,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5481:11:52",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 7190,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}",
                  "src": "5277:669:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7191,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7187,
                      "src": "5947:11:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 7192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5962:1:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5947:16:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7185,
                  "id": 7194,
                  "nodeType": "Return",
                  "src": "5940:23:52"
                }
              ]
            },
            "documentation": "Checks the return value of the previous function up to 32 bytes. Returns true if the previous\nfunction returned 0 bytes or 1.",
            "id": 7196,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkSuccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7182,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5139:7:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7196,
                  "src": "5193:4:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7183,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5193:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5192:6:52"
            },
            "scope": 7197,
            "src": "5118:852:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 7198,
        "src": "1008:4964:52"
      }
    ],
    "src": "597:5376:52"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
    "exportedSymbols": {
      "ERC20Wrapper": [
        7197
      ]
    },
    "id": 7198,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7035,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:52"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 7037,
        "nodeType": "ImportDirective",
        "scope": 7198,
        "sourceUnit": 7034,
        "src": "622:46:52",
        "symbolAliases": [
          {
            "foreign": 7036,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 7039,
        "nodeType": "ImportDirective",
        "scope": 7198,
        "sourceUnit": 7242,
        "src": "669:38:52",
        "symbolAliases": [
          {
            "foreign": 7038,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC20Wrapper\n@author Set Protocol\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\nFor all functions we will only accept tokens that return a null or true value, any other values will\ncause the operation to revert.",
        "fullyImplemented": true,
        "id": 7197,
        "linearizedBaseContracts": [
          7197
        ],
        "name": "ERC20Wrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 7055,
              "nodeType": "Block",
              "src": "1492:56:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7052,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7043,
                        "src": "1534:6:52",
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
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7049,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7041,
                            "src": "1516:6:52",
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
                            }
                          ],
                          "id": 7048,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "1509:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1509:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7206,
                      "src": "1509:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 7053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:32:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7047,
                  "id": 7054,
                  "nodeType": "Return",
                  "src": "1502:39:52"
                }
              ]
            },
            "documentation": "Check balance owner's balance of ERC20 token\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The owner who's balance is being checked\n@return  uint256        The _owner's amount of tokens",
            "id": 7056,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7041,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1387:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:52",
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
                  "id": 7043,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1411:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1377:54:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7046,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7056,
                  "src": "1479:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1479:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1478:9:52"
            },
            "scope": 7197,
            "src": "1359:189:52",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7075,
              "nodeType": "Block",
              "src": "2072:66:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7071,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7060,
                        "src": "2114:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7072,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7062,
                        "src": "2122:8:52",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7068,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7058,
                            "src": "2096:6:52",
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
                            }
                          ],
                          "id": 7067,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "2089:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2089:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7215,
                      "src": "2089:24:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 7073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2089:42:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7066,
                  "id": 7074,
                  "nodeType": "Return",
                  "src": "2082:49:52"
                }
              ]
            },
            "documentation": "Checks spender's allowance to use token's on owner's behalf.\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The token owner address\n@param  _spender        The address the allowance is being checked on\n@return  uint256        The spender's allowance on behalf of owner",
            "id": 7076,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7058,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1941:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1941:7:52",
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
                  "id": 7060,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1965:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1965:7:52",
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
                  "id": 7062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "1989:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1989:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1931:80:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7076,
                  "src": "2059:7:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2059:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2058:9:52"
            },
            "scope": 7197,
            "src": "1913:225:52",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7098,
              "nodeType": "Block",
              "src": "2592:142:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7089,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7080,
                        "src": "2626:3:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7090,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7082,
                        "src": "2631:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7086,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7078,
                            "src": "2609:6:52",
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
                            }
                          ],
                          "id": 7085,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "2602:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2602:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7222,
                      "src": "2602:23:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 7091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2602:39:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7092,
                  "nodeType": "ExpressionStatement",
                  "src": "2602:39:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7094,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "2712:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2712:14:52",
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
                      "id": 7093,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "2704:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2704:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7097,
                  "nodeType": "ExpressionStatement",
                  "src": "2704:23:52"
                }
              ]
            },
            "documentation": "Transfers tokens from an address. Handle's tokens that return true or null.\nIf other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _to             The address to transfer to\n@param  _quantity       The amount of tokens to transfer",
            "id": 7099,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7078,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2502:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2502:7:52",
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
                  "id": 7080,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2526:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7079,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2526:7:52",
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
                  "id": 7082,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7099,
                  "src": "2547:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2547:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2492:78:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2592:0:52"
            },
            "scope": 7197,
            "src": "2475:259:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7124,
              "nodeType": "Block",
              "src": "3313:157:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7114,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7103,
                        "src": "3351:5:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7115,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7105,
                        "src": "3358:3:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7116,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7107,
                        "src": "3363:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7111,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7101,
                            "src": "3330:6:52",
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
                            }
                          ],
                          "id": 7110,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "3323:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3323:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7231,
                      "src": "3323:27:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256) external"
                      }
                    },
                    "id": 7117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3323:50:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7118,
                  "nodeType": "ExpressionStatement",
                  "src": "3323:50:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7120,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "3448:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3448:14:52",
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
                      "id": 7119,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "3440:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3440:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7123,
                  "nodeType": "ExpressionStatement",
                  "src": "3440:23:52"
                }
              ]
            },
            "documentation": "Transfers tokens from an address (that has set allowance on the proxy).\nHandle's tokens that return true or null. If other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _from           The address to transfer from\n@param  _to             The address to transfer to\n@param  _quantity       The number of tokens to transfer",
            "id": 7125,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7101,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3200:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7100,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3200:7:52",
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
                  "id": 7103,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3224:13:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:7:52",
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
                  "id": 7105,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3247:11:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7104,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3247:7:52",
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
                  "id": 7107,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7125,
                  "src": "3268:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7106,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3268:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3190:101:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3313:0:52"
            },
            "scope": 7197,
            "src": "3169:301:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 7147,
              "nodeType": "Block",
              "src": "3965:145:52",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7138,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7129,
                        "src": "3998:8:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7139,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7131,
                        "src": "4008:9:52",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7135,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7127,
                            "src": "3982:6:52",
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
                            }
                          ],
                          "id": 7134,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7241,
                          "src": "3975:6:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$7241_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 7136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3975:14:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$7241",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 7137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7240,
                      "src": "3975:22:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 7140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3975:43:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7141,
                  "nodeType": "ExpressionStatement",
                  "src": "3975:43:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 7143,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7196,
                          "src": "4088:12:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 7144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4088:14:52",
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
                      "id": 7142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        9310,
                        9311
                      ],
                      "referencedDeclaration": 9310,
                      "src": "4080:7:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 7145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4080:23:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7146,
                  "nodeType": "ExpressionStatement",
                  "src": "4080:23:52"
                }
              ]
            },
            "documentation": "Grants spender ability to spend on owner's behalf.\nHandle's tokens that return true or null. If other value returned, reverts.\n     * @param  _token          The address of the ERC20 token\n@param  _spender        The address to approve for transfer\n@param  _quantity       The amount of tokens to approve spender for",
            "id": 7148,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7127,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3870:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3870:7:52",
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
                  "id": 7129,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3894:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3894:7:52",
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
                  "id": 7131,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7148,
                  "src": "3920:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3920:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3860:83:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3965:0:52"
            },
            "scope": 7197,
            "src": "3844:266:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7180,
              "nodeType": "Block",
              "src": "4645:259:52",
              "statements": [
                {
                  "assignments": [
                    7160
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7160,
                      "name": "currentAllowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 7181,
                      "src": "4655:24:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7159,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4655:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7166,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7162,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7150,
                        "src": "4692:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7163,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7152,
                        "src": "4700:6:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7164,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7154,
                        "src": "4708:8:52",
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
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 7161,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7076,
                      "src": "4682:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 7165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4682:35:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4655:62:52"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7167,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7160,
                      "src": "4731:16:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 7168,
                      "name": "_quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7156,
                      "src": "4750:9:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4731:28:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 7179,
                  "nodeType": "IfStatement",
                  "src": "4727:171:52",
                  "trueBody": {
                    "id": 7178,
                    "nodeType": "Block",
                    "src": "4761:137:52",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 7171,
                              "name": "_token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7150,
                              "src": "4800:6:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 7172,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7154,
                              "src": "4824:8:52",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 7173,
                                  "name": "CommonMath",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7033,
                                  "src": "4850:10:52",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$7033_$",
                                    "typeString": "type(library CommonMath)"
                                  }
                                },
                                "id": 7174,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maxUInt256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7032,
                                "src": "4850:21:52",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                  "typeString": "function () pure returns (uint256)"
                                }
                              },
                              "id": 7175,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4850:23:52",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 7170,
                            "name": "approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7148,
                            "src": "4775:7:52",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 7176,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4775:112:52",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7177,
                        "nodeType": "ExpressionStatement",
                        "src": "4775:112:52"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "Ensure's the owner has granted enough allowance for system to\ntransfer tokens.\n     * @param  _token          The address of the ERC20 token\n@param  _owner          The address of the token owner\n@param  _spender        The address to grant/check allowance for\n@param  _quantity       The amount to see if allowed for",
            "id": 7181,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ensureAllowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7150,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4526:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7149,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:52",
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
                  "id": 7152,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4550:14:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4550:7:52",
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
                  "id": 7154,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4574:16:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7153,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4574:7:52",
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
                  "id": 7156,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 7181,
                  "src": "4600:17:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4600:7:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4516:107:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4645:0:52"
            },
            "scope": 7197,
            "src": "4492:412:52",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7195,
              "nodeType": "Block",
              "src": "5203:767:52",
              "statements": [
                {
                  "assignments": [
                    7187
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7187,
                      "name": "returnValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 7196,
                      "src": "5243:19:52",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 7186,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5243:7:52",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7189,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 7188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "5265:1:52",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5243:23:52"
                },
                {
                  "externalReferences": [
                    {
                      "returnValue": {
                        "declaration": 7187,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5739:11:52",
                        "valueSize": 1
                      }
                    },
                    {
                      "returnValue": {
                        "declaration": 7187,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5481:11:52",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 7190,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}",
                  "src": "5277:669:52"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 7191,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7187,
                      "src": "5947:11:52",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 7192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5962:1:52",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5947:16:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7185,
                  "id": 7194,
                  "nodeType": "Return",
                  "src": "5940:23:52"
                }
              ]
            },
            "documentation": "Checks the return value of the previous function up to 32 bytes. Returns true if the previous\nfunction returned 0 bytes or 1.",
            "id": 7196,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkSuccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7182,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5139:7:52"
            },
            "payable": false,
            "returnParameters": {
              "id": 7185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7196,
                  "src": "5193:4:52",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7183,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5193:4:52",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5192:6:52"
            },
            "scope": 7197,
            "src": "5118:852:52",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 7198,
        "src": "1008:4964:52"
      }
    ],
    "src": "597:5376:52"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.203Z"
}