const Ethereum = (function () {
  let privateKey;
  const erc_20_abi = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "spender",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "xxx",
      outputs: [
        {
          name: "",
          type: "bytes32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "from",
          type: "address",
        },
        {
          name: "to",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "to",
          type: "address",
        },
        {
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
        {
          name: "",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "_totalSupply",
          type: "uint256",
        },
        {
          name: "_name",
          type: "string",
        },
        {
          name: "_symbol",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
  ];
  let rpcEndpoit;
  let chainId = 1;
  const txCommonArray = {
    1: { chain: "mainnet" },
    3: { chain: "ropsten" },
    4: { chain: "rinkeby" },
    5: { chain: "goerli" },
    42: { chain: "kovan" },
  };
  function _signSend(body) {
    const tx = new ethereumHelper.ethereumjsTx.Transaction(
      body,
      txCommonArray[chainId]
    );
    tx.sign(ethereumHelper.bops.from(privateKey, "hex"));
    const txStr = "0x" + tx.serialize().toString("hex");
    return txStr;
  }

  function rpcRequest(payload, cb) {
    fetch(rpcEndpoit, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...payload, id: 1, jsonrpc: "2.0" }),
    })
      .then((res) => res.json())
      .then((res) => {
        cb(null, res);
      })
      .catch((err) => {
        cb(err.message, "");
      });
  }

  return class InnerEthereum {
    constructor(config) {
      ethereumHelper.abiDecoder.addABI(erc_20_abi);
      rpcEndpoit = config.url;
      privateKey = config.privateKey.startsWith("0x")
        ? config.privateKey.substr(2)
        : config.privateKey;
      this.isMetaMask = false;
      this.selectedAddress = null;
      this.networkVersion = null;
      this.autoRefreshOnNetworkChange = false;
      this.chainId = null;
      this.events = Object.create(null);
      this.accounts = [];
      this._handleAccountsChanged = this._handleAccountsChanged.bind(this);
      this._sendSync = this._sendSync.bind(this);
      this._getNonce = this._getNonce.bind(this);
      this._getGasPrice = this._getGasPrice.bind(this);
      this._rpcRequest = this._rpcRequest.bind(this);
      this.enable = this.enable.bind(this);
      this.request = this.request.bind(this);
      this.send = this.send.bind(this);
      this.sendAsync = this.sendAsync.bind(this);
      this.selectedAddress = ethereumHelper.web3.eth.accounts.privateKeyToAccount(
        privateKey
      ).address;
      this.accounts.push(this.selectedAddress);
      setTimeout(() => {
        this._rpcRequest(
          {
            method: "net_version",
            params: [],
          },
          (err, res) => {
            if (err) throw "network error";
            this.chainId = res.result;
            chainId = res.result;
            this.networkVersion = this.chainId;
            if (!txCommonArray[+res.result]) {
              txCommonArray[+res.result] = {
                common: ethereumHelper.ethereumjsCommon.default.forCustomChain(
                  "mainnet",
                  {
                    name: "custom",
                    networkId: +this.chainId,
                    chainId: +this.chainId,
                  },
                  "petersburg"
                ),
              };
            }
            this.emit("chainChanged", this.chainId);
            this.emit("connect", { chainId: this.chainId });
          }
        );
      }, 1000);
    }
    isConnected() {
      return true;
    }

    request(args) {
      const { method, params } = args;
      return new Promise((resolve, reject) => {
        this._rpcRequest(
          { method, params },
          this._getRpcPromiseCallback(resolve, reject)
        );
      });
    }

    sendAsync(payload, cb) {
      this._rpcRequest(payload, cb);
    }

    send(methodOrPayload, callbackOrArgs) {
      if (
        typeof methodOrPayload === "string" &&
        (!callbackOrArgs || Array.isArray(callbackOrArgs))
      ) {
        return new Promise((resolve, reject) => {
          try {
            this._rpcRequest(
              { method: methodOrPayload, params: callbackOrArgs },
              this._getRpcPromiseCallback(resolve, reject, false)
            );
          } catch (error) {
            reject(error);
          }
        });
      } else if (
        typeof methodOrPayload === "object" &&
        typeof callbackOrArgs === "function"
      ) {
        return this._rpcRequest(methodOrPayload, callbackOrArgs);
      }
      return this._sendSync(methodOrPayload);
    }

    _rpcRequest(payload, callback, isInternal = false) {
      let cb = callback;
      if (!Array.isArray(payload)) {
        if (
          payload.method === "eth_accounts" ||
          payload.method === "eth_requestAccounts"
        ) {
          cb = (err, res) => {
            this._handleAccountsChanged(
              res.result || [],
              payload.method === "eth_accounts",
              isInternal
            );
            callback(err, res);
          };
        }
      }
      this._handleRpc(payload, cb);
    }

    enable() {
      return new Promise((resolve, reject) => {
        try {
          this._rpcRequest(
            { method: "eth_requestAccounts", params: [] },
            this._getRpcPromiseCallback(resolve, reject)
          );
        } catch (error) {
          reject(error);
        }
      });
    }

    on(key, fn) {
      if (typeof fn !== "function") {
        throw new Error("The listener must be a function");
      }
      if (this.events[key]) {
        this.events[key].push(fn);
      } else {
        this.events[key] = [fn];
      }
    }

    emit(key, data) {
      if (this.events[key]) {
        this.events[key].forEach((fn) => fn(data));
      }
    }

    _getRpcPromiseCallback(resolve, reject, unwrapResult = true) {
      return (error, response) => {
        if (error || response.error) {
          reject(error || response.error);
        } else {
          !unwrapResult || Array.isArray(response)
            ? resolve(response)
            : resolve(response.result);
        }
      };
    }

    _getNonce(address, callback) {
      let body = {
        method: "eth_getTransactionCount",
        params: [address, "latest"],
      };

      rpcRequest(body, callback);
    }

    _getGasPrice(callback) {
      let body = {
        method: "eth_gasPrice",
        params: [],
      };
      rpcRequest(body, callback);
    }

    _setDefaultTransaciton(payload, cb) {
      let that = this;
      if (!payload.params[0].gas) {
        payload.params[0].gas = ethereumHelper.web3.utils.toHex("3000000");
      }
      if (!payload.params[0].value) {
        payload.params[0].value = "0x0"
      }
      if (!payload.params[0].gasPrice) {
        that._getGasPrice((err, res) => {
          if (err) {
            cb(err.message || "gas price error", "");
          } else {
            payload.params[0].gasPrice =
              "0x" + parseInt(Number(res.result) * 1.5).toString(16);
            if (!payload.params[0].nonce) {
              that._getNonce(that.selectedAddress, function (err, res) {
                if (err) {
                  cb(err.message || "address nonce error", "");
                } else {
                  payload.params[0].nonce = res.result;
                  cb(null, payload);
                }
                return;
              });
            } else {
              cb(null, payload);
            }
          }
        });
        return;
      }
      if (!payload.params[0].nonce) {
        that._getNonce(that.selectedAddress, (err, res) => {
          if (err) {
            cb(err.message || "address nonce error", "");
          } else {
            payload.params[0].nonce = res.result;
            cb(null, payload);
          }
        });
      } else {
        cb(null, payload);
      }
    }

    _handleRpc(payload, cb) {
      // console.log("--------payload------", payload);
      if (
        payload.method === "eth_requestAccounts" ||
        payload.method === "eth_accounts"
      ) {
        cb(null, [this.selectedAddress]);
        return;
      }
      if (payload.method === "eth_sign") {
        let hashStr = ethereumHelper.web3.utils.sha3(payload.params[1]);
        let result = ethereumHelper.ethereumCryptography.ecdsaSign(
          ethereumHelper.bops.from(hashStr.substr(2), "hex"),
          ethereumHelper.bops.from(privateKey, "hex")
        );
        cb(null, {
          result: "0x" + ethereumHelper.bops.to(result.signature, "hex"),
        });
        return;
      }
      if (payload.method === "personal_sign") {
        let result = ethereumHelper.signUtils.personalSign(
          ethereumHelper.bops.from(privateKey, "hex"),
          { data: payload.params[0] }
        );
        cb(null, { result });
        return;
      }
      if (payload.method === "eth_signTypedData") {
        let result = ethereumHelper.signUtils.signTypedMessage(
          ethereumHelper.bops.from(privateKey, "hex"),
          { data: payload.params[0] },
          "V1"
        );
        cb(null, { result });
        return;
      }
      if (payload.method === "eth_signTypedData_v3") {
        let result = ethereumHelper.signUtils.signTypedMessage(
          ethereumHelper.bops.from(privateKey, "hex"),
          { data: JSON.parse(payload.params[0]) },
          "V3"
        );
        cb(null, { result });
        return;
      }
      if (payload.method === "eth_signTypedData_v4") {
        let result = ethereumHelper.signUtils.signTypedMessage(
          ethereumHelper.bops.from(privateKey, "hex"),
          { data: payload.params[0] },
          "v4"
        );
        cb(null, { result });
        return;
      }

      if (payload.method === "eth_sendTransaction") {
        this._setDefaultTransaciton(payload, (err, p) => {
          if (err) {
            cb(err || "request error", "");
          } else {
            window.parent.api.OSWallet.showSignUI(
              p.params[0],
              function (code, data) {
                if (code === 1) {
                  const signStr = _signSend(data);
                  rpcRequest(
                    {
                      method: "eth_sendRawTransaction",
                      params: [signStr],
                    },
                    cb
                  );
                } else {
                  cb("user reject", "");
                }
              }
            );
          }
        });
        return;
      }
      rpcRequest(payload, cb);
    }

    _handleAccountsChanged() {
      this.emit("accountsChanged", [this.selectedAddress]);
    }

    _sendSync(payload) {
      let result;
      switch (payload.method) {
        case "eth_accounts":
          result = this.selectedAddress ? [this.selectedAddress] : [];
          break;
        case "eth_coinbase":
          result = this.selectedAddress || null;
          break;
        case "eth_uninstallFilter":
          result = true;
          break;
        case "net_version":
          result = this.networkVersion || null;
          break;
        default:
          throw new Error("unsuport method");
      }
      return {
        id: payload.id,
        jsonrpc: payload.jsonrpc,
        result,
      };
    }
  };
})();
