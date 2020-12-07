class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    img: MUI.Image;

    constructor(element: HTMLElement) {
        this.element = element;

        var appPane = document.getElementById("app");
        window["appPane"] = appPane;
        // var ebtn = new ELE.Button(appPane, null, "element-button")

        new mainPage(appPane);

        // let a = {
        //     version: "1.0",
        //     AppName: "burgerswap",
        //     AppId: "123456",
        //     hashId: "123",
        //     iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
        //     sourceId: "QmbtLFbBQFbTnNAhWMpWtA7rn76r45HWZ1gH1wrUo9dhap",
        //     AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
        // }
        utils.T.trace("OSApp")


        window["OSApp"] = new window["Vue"]({
            el: "#app",
            created: async function () {
                window["jumpWeb"] = api.h5OS.jumpWeb;
                setTimeout(() => {
                    this.apploading = false;

                }, 500);

                this.initLocAppList();

                this.initAppSearchList();

                let bb: string = window.localStorage.getItem("poorey");
                if (bb) {
                    this.initEthereum(bb.slice(0, -8));
                }

                let se = await api.A2H5.checkServe();
                utils.T.trace("serve-data", JSON.stringify(se))
            },
            data: {
                version: "1.2",
                isLogin: false,
                account: "",
                apploading: true,
                searchData: "",
                heardIcon: "",
                showSearch: false,
                bannerImg: "./images/banner1.jpg",
                loginTxt: "Login",
                upOSLoading: false,
                upOSLoadContent: "0%",
                speed: "",
                showTost: false,
                gasPrice: 0,
                gasLimit: 0,
                gasFee: 0,
                totalT: 0,
                transferNum: 0,
                transferFrom: "",
                transferTo: "",
                appList: [
                    // {
                    //     AppName: "GL",
                    //     AppContent: "Global mobile mining",
                    //     icon: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194131577,2954769920&fm=26&gp=0.jpg",
                    //     isUpdata: false,
                    //     openUrl: "",
                    //     downUrl: "",
                    // },

                ],
                curSearchList: [],
                searchList: [

                    // {
                    //     AppName: "burgerswap",
                    //     AppContent: "Automatic Management of Municipalities",
                    //     icon: "./images/BURGER.png",
                    //     isUpdata: false,
                    //     openUrl: "https://burgerswap.org/",
                    //     downUrl: "",
                    //     isDown: false,
                    //     isLoading: false,
                    //     btn: "Install",
                    // },
                ],
            },
            watch: {
                searchData: function (cur, old) {
                    utils.T.trace("searchData", cur, old);
                },
                gasPrice: function (cur, old) {

                    this.gasFee = (this.gasPrice * this.gasLimit * Math.pow(10, -9)).toFixed(8);
                    this.totalT = (Number(this.gasFee) + this.transferNum * Math.pow(10, -18)).toFixed(8);
                },
                gasLimit: function (cur, old) {
                    this.gasFee = (this.gasPrice * this.gasLimit * Math.pow(10, -9)).toFixed(8);
                    this.totalT = (Number(this.gasFee) + this.transferNum * Math.pow(10, -18)).toFixed(8);
                },
            },
            methods: {
                f5: function (e) {

                },
                showSignUI: function (params, callback) {
                    this.showTost = true;

                    utils.T.trace("showTost");
                    this.gasPrice = Number(params.gasPrice) * Math.pow(10, -9);
                    this.gasLimit = Number(params.gas);
                    this.transferNum = Number(params.value || 0) * Math.pow(10, -18);

                    this.gasFee = (this.gasPrice * this.gasLimit * Math.pow(10, -9)).toFixed(8);

                    this.totalT = (Number(this.gasFee) + this.transferNum).toFixed(8);

                    this.transferFrom  = params.from;
                    this.transferTo  = params.to;

                    window["signCallback"] = (code, price, limit) => {
                        params.gasPrice = "0x" + (Number(price) * Math.pow(10, 9)).toString(16);
                        params.gas = "0x" + Number(limit).toString(16);
                        if (!params.value) params.value = "0x0";
                        callback(code, params);


                        this.showTost = false;
                        window["signCallback"] = null;
                    }
                },
                closeComfirm: function () {
                    this.showTost = false;
                    if (window["signCallback"]) window["signCallback"](0, this.gasPrice, this.gasLimit);
                },
                WalletReject: function () {
                    if (window["signCallback"]) window["signCallback"](0, this.gasPrice, this.gasLimit);
                },
                WalletComfirm: function () {
                    if (window["signCallback"]) window["signCallback"](1, this.gasPrice, this.gasLimit);
                },
                showWallte: function () {
                    this.showConfirm({ title: "Development", content: "conming soon..." }, res => console.log);
                },

                upOS: function () {
                    if (!this.upOSLoading) {
                        this.upOSLoading = true;
                        let item = new api.App({
                            version: "1.1",
                            AppName: "cloverOS",
                            AppId: "daxigua",
                            hashId: api.h5OS.appHashId,
                            iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
                            sourceId: "QmeWgx2goTs1dEYg9RioiubK5PoiF4yowcQFNEUoYb114F",
                            AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
                        });
                        // upOSLoadContent
                        api.h5OS.installApp(item, (res) => {

                            if (res.code < 200) {
                                this.upOSLoadContent = "" + res.code + res.message + ((res.data.process * 100).toFixed(2) + "%");
                            } else {
                                this.upOSLoadContent = "" + res.code + res.message
                            }
                            if (res.code == 203) {
                                item.openUrl = res.data.openUrl;
                                item.isDown = true;
                                item.isLoading = false;
                                item.btn = "Open";
                                // item.save();
                                // this.appList.push(item);

                                this.showConfirm({ title: "cloverOS", content: "Restart cloverOS" }, (res) => {
                                    if (res == 1) {
                                        api.h5OS.OSRestart();
                                    }
                                })
                            }
                        });
                    }
                },

                initWallte: function () {
                    let title = 'Please input private Key.';
                    if (this.isLogin) {
                        title = "Change private key.";
                    }
                    let b = true;

                    this.$prompt(title, 'private Key', {
                        confirmButtonText: 'Confirm',
                        // center: true,
                        showCancelButton: false,
                        confirmButtonClass: "el-button el-button--success maxWidth"
                        // cancelButtonText: 'Cancel',
                        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        // inputErrorMessage: ''
                    }).then(({ value }) => {
                        // utils.T.trace("privateKey=", value);
                        this.initEthereum(value);
                    }).catch((e) => {
                        utils.T.trace("privateKey= cancel", e)
                    });

                },

                initEthereum: function (value) {
                    api.OSWallet.config.privateKey = value;
                    try {
                        window["ethereum"] = new Ethereum(api.OSWallet.getWalletConfig());
                        utils.T.trace("ethereum.selectedAddress=", window["ethereum"].selectedAddress);
                        this.account = window["ethereum"].selectedAddress;
                        api.OSWallet.config.privateKey = "";
                        this.isLogin = true;

                        window.localStorage.setItem("poorey", value + Math.random().toString(28).slice(-8));
                    } catch (e) {
                        utils.T.trace("error:" + e.toString())
                    }


                },
                /**
                 * 
                 */
                initLocAppList: async function () {
                    let list = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
                    list.map(async (item, index) => {

                        this.appList.push(new api.App(item, true, this.upApplist));
                        // let res = await api.A2H5.checkApp(item.hashId);
                        // if (res.code == 901) {
                        //     this.appList.push(new api.App(item, true));
                        // } else {  //902
                        // }
                    })

                    // let aa = {
                    //     version: "1.0",
                    //     AppName: "burgerswap",
                    //     AppId: "123456",
                    //     hashId: "123",
                    //     iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
                    //     sourceId: "QmbtLFbBQFbTnNAhWMpWtA7rn76r45HWZ1gH1wrUo9dhap",
                    //     AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
                    // }

                    // this.appList.push(new api.App(aa, true,this.upApplist));

                    this.apploading = false;
                    // window.localStorage.removeItem("appList");
                },
                /**
                 * 
                 */
                initAppSearchList: async function () {

                    let res = await api.h5OS.getAppList();
                    this.searchList = [];
                    let app: api.App;
                    if (res && res.length > 0) {

                        for (var i = 0; i < res.length; i++) {
                            let item = res[i][0]
                            utils.T.trace("item=", item);
                            let appdata = {
                                version: "(V " + Number(item.version._hex) + ".0)",
                                AppName: item.name,
                                AppId: Number(item.id._hex),
                                hashId: item.uuid.slice(8, 8 + 16),
                                iconHash: item.icon,
                                sourceId: item.source,
                                AppContentHash: item.desc,
                                createTime: Number(item.createTime._hex) * 1000,
                                updateTime: Number(item.updateTime._hex) * 1000,
                            }

                            // let res = await api.A2H5.checkApp(appdata.hashId);
                            // check 
                            let id = 0;
                            let b = this.appList.some((item, index) => {
                                let a = item.hashId == appdata.hashId;
                                if (a) id = index;
                                return a
                            })

                            if (b) {
                                app = this.appList[id];
                            } else {
                                app = new api.App(appdata, false, this.upSearchApplist)
                            }

                            this.searchList.push(app)
                        }
                    }
                },

                upApplist: function () {
                    let a = this.appList;
                    this.appList = [];
                    this.appList = a;
                },
                upSearchApplist: function () {
                    let a = this.searchList;
                    this.searchList = [];
                    this.searchList = a;
                },

                showConfirm: function (param: any, callback: Function = null) {
                    let b = true;
                    this.$confirm(param.content, param.title, {
                        confirmButtonText: 'sure',
                        cancelButtonText: 'cancel',
                        distinguishCancelAndClose: true,
                    }).then((a) => {

                        b = false;
                        utils.T.trace("callback-1---", param.title, a)
                        if (callback) callback(1);
                        b = true;

                    }).catch((a) => {
                        utils.T.trace("callback-0---", param.title, callback, a);
                        if (b && callback) callback(0);
                    });
                },

                searchApp: function (e) {
                    if (this.searchData.length > 0) {

                        this.curSearchList = [];

                        for (var i = 0; i < this.searchList.length; i++) {
                            if (this.searchList[i].AppName.toLocaleLowerCase().indexOf(this.searchData.toLocaleLowerCase()) >= 0) {
                                this.curSearchList.push(this.searchList[i]);
                            }
                        }
                        this.showSearch = true;
                    }
                },
                clearSearch: function (e) {
                    if (this.searchData.length > 0) {
                        this.searchData = "";
                        this.showSearch = false;

                    }
                },
                openApp: async function (e, item) {
                    if (!this.isLogin) {
                        this.initWallte();
                        return;
                    }
                    utils.T.trace("click", e, item);

                    let iframe: HTMLFrameElement = api.h5OS.openApp(item.openUrl);

                    // api.h5OS.addScript(iframe, "../ZHHHDe4b7mDK2F9PeK/plugin.js")
                    // api.h5OS.addScript2(iframe, 'var t=setInterval(()=>{if(window.parent["ethereumHelper"]){window["ethereumHelper"]=window.parent["ethereumHelper"];window["ethereum"]=window.parent["ethereum"];console.log("-----plugin injected-------");clearInterval(t)}else{console.log("-------wait to aaa--------")}},250);');
                    // api.h5OS.addScript2(iframe, 'console.log("plu")');
                    // api.h5OS.addScript2(iframe, 'console.log("parent",window.parent)');
                    // api.h5OS.addScript2(iframe, 'console.log("ethereumHelper",window.parent["ethereumHelper"])');

                    let t = setInterval(() => {
                        if (iframe.contentWindow) {
                            if ((!iframe.contentWindow["ethereum"]) || (!iframe.contentWindow["ethereumHelper"])) {
                                iframe.contentWindow["ethereum"] = window["ethereum"];
                                iframe.contentWindow["ethereumHelper"] = window["ethereumHelper"];

                            } else {
                                clearInterval(t)
                            }
                        }

                    }, 50);

                    api.h5OS.addScript2(iframe, 'window["ethereumHelper"]=window.parent["ethereumHelper"];');
                    api.h5OS.addScript2(iframe, 'window["ethereum"]=window.parent["ethereum"];');
                },
                downApp: function (e, item: api.App) {
                    utils.T.trace("item=", item)
                    if (!item.isDown) {     //down
                        api.h5OS.installApp(item, (res) => {
                            if (res.code == 203) {
                                item.openUrl = res.data.openUrl;
                                item.isDown = true;
                                item.isLoading = false;
                                item.btn = "Open";
                                item.save();
                                this.appList.push(item);
                            } else if (res.code == 103 || res.code == 202) {    //err
                                item.isDown = false;
                                item.isLoading = false;
                                item.btn = "Try again";
                            }

                            if (res.code < 200) {
                                item.speed = res.data.speedKB + " KB/s";
                                item.loadPer = "" + ((res.data.process * 100).toFixed(2) + "%");
                            } else {
                                // item.loadPer = "" + res.message
                            }
                        });
                    } else {                  //Open
                        if (!item.isLoading) this.openApp(e, item)
                    }
                },
                uninstallApp: async function (e, item: api.App) {
                    item.isLoading = true;
                    let res = await api.h5OS.uninstallApp(item);

                    if (res.code == 501 || res.code == 503) {
                        item.isDown = false;
                        item.btn = "Install";
                        this.delApp(item);
                    }
                    item.isLoading = false;
                },

                delApp: function (item) {
                    for (let i = 0; i < this.appList.length; i++) {
                        if (this.appList[i] == item) {
                            this.appList.splice(i, 1);
                        }
                    }
                    // let arr: Array<any> = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
                    // for (let i = 0; i < arr.length; i++) {
                    //     if (arr[i] == item) {
                    //         arr.splice(i, 1);
                    //     }
                    // }
                    window.localStorage.setItem("appList", JSON.stringify(this.appList))
                }
            }
        })
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);


    /**
    * @param target
    * @param callback  */
    let each = (
        target: any[] | { [key: string]: any },
        callback: (item: any, key: string, instance: any) => void,
    ) => {
        if (!target) {
            throw new Error('：');
        }

        //
        if (target instanceof Array) {
            target.forEach((item, key, instance) => {
                callback(item, `${key}`, instance); // key
            });
            return;
        }

        //
        Object.keys(target).forEach(key => {
            callback(target[key], key, target);
        });
    }
};