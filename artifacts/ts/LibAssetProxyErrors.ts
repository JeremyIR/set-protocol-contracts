export const LibAssetProxyErrors = 
{
  "contractName": "LibAssetProxyErrors",
  "abi": [],
  "bytecode": "0x6080604052348015600f57600080fd5b50603580601d6000396000f3006080604052600080fd00a165627a7a723058202fae2232118e5fb58ddc53f815a92230e1825eec435a078e8761990387c252020029",
  "deployedBytecode": "0x6080604052600080fd00a165627a7a723058202fae2232118e5fb58ddc53f815a92230e1825eec435a078e8761990387c252020029",
  "sourceMap": "796:1182:32:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;796:1182:32;;;;;;;",
  "deployedSourceMap": "796:1182:32:-;;;;;",
  "source": "/*\n\n  Copyright 2018 ZeroEx Intl.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity ^0.4.24;\n\n/// @dev This contract documents the revert reasons used in the AssetProxy contracts.\n/// This contract is intended to serve as a reference, but is not actually used for efficiency reasons.\ncontract LibAssetProxyErrors {\n\n    /// Authorizable errors ///\n    string constant SENDER_NOT_AUTHORIZED = \"SENDER_NOT_AUTHORIZED\";                        // Sender not authorized to call this method.\n    string constant TARGET_NOT_AUTHORIZED = \"TARGET_NOT_AUTHORIZED\";                        // Target address not authorized to call this method.\n    string constant TARGET_ALREADY_AUTHORIZED = \"TARGET_ALREADY_AUTHORIZED\";                // Target address must not already be authorized.\n    string constant INDEX_OUT_OF_BOUNDS = \"INDEX_OUT_OF_BOUNDS\";                            // Specified array index is out of bounds.\n    string constant AUTHORIZED_ADDRESS_MISMATCH = \"AUTHORIZED_ADDRESS_MISMATCH\";            // Address at index does not match given target address.\n\n    /// Transfer errors ///\n    string constant INVALID_AMOUNT = \"INVALID_AMOUNT\";                                      // Transfer amount must equal 1.\n    string constant TRANSFER_FAILED = \"TRANSFER_FAILED\";                                    // Transfer failed.\n    string constant LENGTH_GREATER_THAN_131_REQUIRED = \"LENGTH_GREATER_THAN_131_REQUIRED\";  // Byte array must have a length greater than 0.\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/AssetProxy/libs/LibAssetProxyErrors.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/AssetProxy/libs/LibAssetProxyErrors.sol",
    "exportedSymbols": {
      "LibAssetProxyErrors": [
        4878
      ]
    },
    "id": 4879,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4853,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@dev This contract documents the revert reasons used in the AssetProxy contracts.\n This contract is intended to serve as a reference, but is not actually used for efficiency reasons.",
        "fullyImplemented": true,
        "id": 4878,
        "linearizedBaseContracts": [
          4878
        ],
        "name": "LibAssetProxyErrors",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 4856,
            "name": "SENDER_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "864:63:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4854,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "864:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53454e4445525f4e4f545f415554484f52495a4544",
              "id": 4855,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "904:23:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b590ba9aa685f0cade0ecc2df074637b1c36cb71d1382fe7dd27a64905993f2c",
                "typeString": "literal_string \"SENDER_NOT_AUTHORIZED\""
              },
              "value": "SENDER_NOT_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4859,
            "name": "TARGET_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1002:63:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4857,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1002:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5441524745545f4e4f545f415554484f52495a4544",
              "id": 4858,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1042:23:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_00f526eb144f3ec426d9180a058fd97d34117f8c72be8029fbefb08b034ed3b2",
                "typeString": "literal_string \"TARGET_NOT_AUTHORIZED\""
              },
              "value": "TARGET_NOT_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4862,
            "name": "TARGET_ALREADY_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1148:71:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4860,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1148:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5441524745545f414c52454144595f415554484f52495a4544",
              "id": 4861,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1192:27:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_23820b87f3588ad9debf1f19fd52baa7937383e5f6c016865aecf2605ab396ba",
                "typeString": "literal_string \"TARGET_ALREADY_AUTHORIZED\""
              },
              "value": "TARGET_ALREADY_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4865,
            "name": "INDEX_OUT_OF_BOUNDS",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1290:59:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4863,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1290:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "494e4445585f4f55545f4f465f424f554e4453",
              "id": 4864,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1328:21:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_7ba4dc8f715496ea115fdbd0a2da65e0665096c909392fefbfb708035bd62915",
                "typeString": "literal_string \"INDEX_OUT_OF_BOUNDS\""
              },
              "value": "INDEX_OUT_OF_BOUNDS"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4868,
            "name": "AUTHORIZED_ADDRESS_MISMATCH",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1425:75:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4866,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1425:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "415554484f52495a45445f414444524553535f4d49534d41544348",
              "id": 4867,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1471:29:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_069a2a6df713b5bc8c3a27f34de5d4935a63a3fea1572d6c00b7cfc3535e10b0",
                "typeString": "literal_string \"AUTHORIZED_ADDRESS_MISMATCH\""
              },
              "value": "AUTHORIZED_ADDRESS_MISMATCH"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4871,
            "name": "INVALID_AMOUNT",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1603:49:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4869,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1603:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "494e56414c49445f414d4f554e54",
              "id": 4870,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1636:16:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_eb6dbbf3194e9f4dd39c8dabe51ddb59ca6ad00c50b1bc74675ce4b263687722",
                "typeString": "literal_string \"INVALID_AMOUNT\""
              },
              "value": "INVALID_AMOUNT"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4874,
            "name": "TRANSFER_FAILED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1728:51:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4872,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1728:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5452414e534645525f4641494c4544",
              "id": 4873,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1762:17:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                "typeString": "literal_string \"TRANSFER_FAILED\""
              },
              "value": "TRANSFER_FAILED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4877,
            "name": "LENGTH_GREATER_THAN_131_REQUIRED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1840:85:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4875,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1840:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4c454e4754485f475245415445525f5448414e5f3133315f5245515549524544",
              "id": 4876,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1891:34:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_7eb1d50a95b37dc35c065173ab5ec5c6cb0d974541b4809ef59aa42ab508b91d",
                "typeString": "literal_string \"LENGTH_GREATER_THAN_131_REQUIRED\""
              },
              "value": "LENGTH_GREATER_THAN_131_REQUIRED"
            },
            "visibility": "internal"
          }
        ],
        "scope": 4879,
        "src": "796:1182:32"
      }
    ],
    "src": "580:1399:32"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/AssetProxy/libs/LibAssetProxyErrors.sol",
    "exportedSymbols": {
      "LibAssetProxyErrors": [
        4878
      ]
    },
    "id": 4879,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4853,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:32"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@dev This contract documents the revert reasons used in the AssetProxy contracts.\n This contract is intended to serve as a reference, but is not actually used for efficiency reasons.",
        "fullyImplemented": true,
        "id": 4878,
        "linearizedBaseContracts": [
          4878
        ],
        "name": "LibAssetProxyErrors",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 4856,
            "name": "SENDER_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "864:63:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4854,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "864:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53454e4445525f4e4f545f415554484f52495a4544",
              "id": 4855,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "904:23:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_b590ba9aa685f0cade0ecc2df074637b1c36cb71d1382fe7dd27a64905993f2c",
                "typeString": "literal_string \"SENDER_NOT_AUTHORIZED\""
              },
              "value": "SENDER_NOT_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4859,
            "name": "TARGET_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1002:63:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4857,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1002:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5441524745545f4e4f545f415554484f52495a4544",
              "id": 4858,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1042:23:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_00f526eb144f3ec426d9180a058fd97d34117f8c72be8029fbefb08b034ed3b2",
                "typeString": "literal_string \"TARGET_NOT_AUTHORIZED\""
              },
              "value": "TARGET_NOT_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4862,
            "name": "TARGET_ALREADY_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1148:71:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4860,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1148:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5441524745545f414c52454144595f415554484f52495a4544",
              "id": 4861,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1192:27:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_23820b87f3588ad9debf1f19fd52baa7937383e5f6c016865aecf2605ab396ba",
                "typeString": "literal_string \"TARGET_ALREADY_AUTHORIZED\""
              },
              "value": "TARGET_ALREADY_AUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4865,
            "name": "INDEX_OUT_OF_BOUNDS",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1290:59:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4863,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1290:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "494e4445585f4f55545f4f465f424f554e4453",
              "id": 4864,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1328:21:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_7ba4dc8f715496ea115fdbd0a2da65e0665096c909392fefbfb708035bd62915",
                "typeString": "literal_string \"INDEX_OUT_OF_BOUNDS\""
              },
              "value": "INDEX_OUT_OF_BOUNDS"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4868,
            "name": "AUTHORIZED_ADDRESS_MISMATCH",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1425:75:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4866,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1425:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "415554484f52495a45445f414444524553535f4d49534d41544348",
              "id": 4867,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1471:29:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_069a2a6df713b5bc8c3a27f34de5d4935a63a3fea1572d6c00b7cfc3535e10b0",
                "typeString": "literal_string \"AUTHORIZED_ADDRESS_MISMATCH\""
              },
              "value": "AUTHORIZED_ADDRESS_MISMATCH"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4871,
            "name": "INVALID_AMOUNT",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1603:49:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4869,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1603:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "494e56414c49445f414d4f554e54",
              "id": 4870,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1636:16:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_eb6dbbf3194e9f4dd39c8dabe51ddb59ca6ad00c50b1bc74675ce4b263687722",
                "typeString": "literal_string \"INVALID_AMOUNT\""
              },
              "value": "INVALID_AMOUNT"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4874,
            "name": "TRANSFER_FAILED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1728:51:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4872,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1728:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5452414e534645525f4641494c4544",
              "id": 4873,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1762:17:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8bf8f0d780f13740660fe63233b17f96cb1813889e7dce4121e55b817b367b72",
                "typeString": "literal_string \"TRANSFER_FAILED\""
              },
              "value": "TRANSFER_FAILED"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 4877,
            "name": "LENGTH_GREATER_THAN_131_REQUIRED",
            "nodeType": "VariableDeclaration",
            "scope": 4878,
            "src": "1840:85:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4875,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1840:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4c454e4754485f475245415445525f5448414e5f3133315f5245515549524544",
              "id": 4876,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1891:34:32",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_7eb1d50a95b37dc35c065173ab5ec5c6cb0d974541b4809ef59aa42ab508b91d",
                "typeString": "literal_string \"LENGTH_GREATER_THAN_131_REQUIRED\""
              },
              "value": "LENGTH_GREATER_THAN_131_REQUIRED"
            },
            "visibility": "internal"
          }
        ],
        "scope": 4879,
        "src": "796:1182:32"
      }
    ],
    "src": "580:1399:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-22T08:07:49.127Z"
}