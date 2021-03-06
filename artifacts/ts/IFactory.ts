export const IFactory = 
{
  "contractName": "IFactory",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "core",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_components",
          "type": "address[]"
        },
        {
          "name": "_units",
          "type": "uint256[]"
        },
        {
          "name": "_naturalUnit",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "bytes32"
        },
        {
          "name": "_symbol",
          "type": "bytes32"
        },
        {
          "name": "_callData",
          "type": "bytes"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\n\n/**\n * @title IFactory\n * @author Set Protocol\n *\n * The IFactory interface provides operability for authorized contracts\n * to interact with SetTokenFactory\n */\ninterface IFactory {\n\n    /* ============ External Functions ============ */\n\n    /**\n     * Return core address\n     *\n     * @return address        core address\n     */\n    function core()\n        external\n        returns (address);\n\n    /**\n     * Deploys a new Set Token and adds it to the valid list of SetTokens\n     *\n     * @param  _components           The address of component tokens\n     * @param  _units                The units of each component token\n     * @param  _naturalUnit          The minimum unit to be issued or redeemed\n     * @param  _symbol               The symbol of the new Set\n     * @param  _callData             Byte string containing additional call parameters\n     * @return setTokenAddress       The address of the new Set\n     */\n    function create(\n        address[] _components,\n        uint[] _units,\n        uint256 _naturalUnit,\n        bytes32 _name,\n        bytes32 _symbol,\n        bytes _callData\n    )\n        external\n        returns (address);\n}",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IFactory.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IFactory.sol",
    "exportedSymbols": {
      "IFactory": [
        4260
      ]
    },
    "id": 4261,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4235,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IFactory\n@author Set Protocol\n * The IFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 4260,
        "linearizedBaseContracts": [
          4260
        ],
        "name": "IFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 4240,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "973:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 4239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4238,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "1010:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4237,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:9:21"
            },
            "scope": 4260,
            "src": "960:59:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _symbol               The symbol of the new Set\n@param  _callData             Byte string containing additional call parameters\n@return setTokenAddress       The address of the new Set",
            "id": 4259,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4243,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1580:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4241,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1580:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 4242,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1580:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1611:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4244,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1611:4:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 4245,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1611:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1634:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:21",
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
                  "id": 4250,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1664:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4249,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1664:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4252,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1687:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4251,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1687:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4254,
                  "name": "_callData",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1712:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4253,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1712:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1570:163:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 4258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1768:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1768:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1767:9:21"
            },
            "scope": 4260,
            "src": "1555:222:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4261,
        "src": "785:994:21"
      }
    ],
    "src": "597:1182:21"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/interfaces/IFactory.sol",
    "exportedSymbols": {
      "IFactory": [
        4260
      ]
    },
    "id": 4261,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4235,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title IFactory\n@author Set Protocol\n * The IFactory interface provides operability for authorized contracts\nto interact with SetTokenFactory",
        "fullyImplemented": false,
        "id": 4260,
        "linearizedBaseContracts": [
          4260
        ],
        "name": "IFactory",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "Return core address\n     * @return address        core address",
            "id": 4240,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "core",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "973:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 4239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4238,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4240,
                  "src": "1010:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4237,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:9:21"
            },
            "scope": 4260,
            "src": "960:59:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": "Deploys a new Set Token and adds it to the valid list of SetTokens\n     * @param  _components           The address of component tokens\n@param  _units                The units of each component token\n@param  _naturalUnit          The minimum unit to be issued or redeemed\n@param  _symbol               The symbol of the new Set\n@param  _callData             Byte string containing additional call parameters\n@return setTokenAddress       The address of the new Set",
            "id": 4259,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4243,
                  "name": "_components",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1580:21:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4241,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1580:7:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 4242,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1580:9:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "name": "_units",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1611:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4244,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1611:4:21",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 4245,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1611:6:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "name": "_naturalUnit",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1634:20:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1634:7:21",
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
                  "id": 4250,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1664:13:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4249,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1664:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4252,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1687:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4251,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1687:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4254,
                  "name": "_callData",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1712:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4253,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1712:5:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1570:163:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 4258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4259,
                  "src": "1768:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4256,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1768:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1767:9:21"
            },
            "scope": 4260,
            "src": "1555:222:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4261,
        "src": "785:994:21"
      }
    ],
    "src": "597:1182:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.027Z"
}