
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
        // this.element.innerHTML += "The time is: ";
        // this.span = document.createElement('span');
        // this.element.appendChild(this.span);
        // this.span.innerText = new Date().toUTCString();
        // this.img = new MUI.Image(this.element, "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1601214495&t=b68edf726890f3e893c5fe3cd0584fc7")
        // var img2 = new MUI.Image(this.element, "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1601214495&t=b68edf726890f3e893c5fe3cd0584fc7")
        // var span1 = new MUI.Span(this.element, "大西瓜 span");
        // var p1 = new MUI.P(this.element, "大西瓜P");
        // var input = new MUI.Input(this.element,"大西瓜 input");
        // var textarea = new MUI.Textarea(this.element, "大西瓜 textarea");
        // var div = new MUI.Div(this.element);
        // div.text = "大西瓜 div";
        // var button = new MUI.Button(this.element, "大西瓜 button");
        var appPane = document.getElementById("app");
        window["appPane"] = appPane;
        // var ebtn = new ELE.Button(appPane, null, "element-button")
        new mainPage(appPane);
        window["OSApp"] = new window["Vue"]({
            el: "#app",
            created: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var se;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                window["jumpWeb"] = api.h5OS.jumpWeb;
                                setTimeout(function () {
                                    _this.apploading = false;
                                    _this.appList = [
                                        {
                                            AppName: "7UP",
                                            AppContent: "7UP",
                                            icon: "./images/7UP.png",
                                            isUpdata: false,
                                            openUrl: "./swap/",
                                            downUrl: "",
                                            isDown: false,
                                            isLoading: false,
                                            btn: "Install",
                                        },
                                    ];
                                }, 500);
                                return [4 /*yield*/, api.A2H5.checkServe()];
                            case 1:
                                se = _a.sent();
                                utils.T.trace("serve-data", JSON.stringify(se));
                                return [2 /*return*/];
                        }
                    });
                });
            },
            data: {
                version: "1.2",
                apploading: true,
                searchData: "",
                heardIcon: "",
                showSearch: false,
                showClearSearch: false,
                bannerImg: "./images/banner1.jpg",
                loginTxt: "Login",
                upOSLoading: false,
                upOSLoadContent: "0%",
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
                    {
                        AppName: "burgerswap",
                        AppContent: "Automatic Management of Municipalities",
                        icon: "./images/BURGER.png",
                        isUpdata: false,
                        openUrl: "https://burgerswap.org/",
                        downUrl: "",
                        isDown: false,
                        isLoading: false,
                        btn: "Install",
                    },
                    {
                        AppName: "COKE",
                        AppContent: "Automatic Management of Municipalities",
                        icon: "./images/COKE.png",
                        openUrl: "https://cokefinance.com",
                        isUpdata: false,
                        downUrl: "",
                        isDown: false,
                        isLoading: false,
                        btn: "Install",
                    },
                    {
                        AppName: "7UP",
                        AppContent: "7UP",
                        icon: "./images/7UP.png",
                        isUpdata: false,
                        openUrl: "https://7up.finance",
                        downUrl: "",
                        isDown: true,
                        isLoading: false,
                        btn: "Open",
                    },
                ],
            },
            watch: {
                searchData: function (cur, old) {
                    utils.T.trace("searchData", cur, old);
                },
            },
            methods: {
                f5: function (e) {
                },
                showWallte: function () {
                    this.showConfirm({ title: "开发", content: "555" }, function (res) { return console.log; });
                },
                upOS: function () {
                    var _this = this;
                    if (!this.upOSLoading) {
                        this.upOSLoading = true;
                        var item_1 = new api.App({
                            version: "1.1",
                            AppName: "cloverOS",
                            AppId: "daxigua",
                            hashId: api.h5OS.appHashId,
                            iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
                            sourceId: "QmeWgx2goTs1dEYg9RioiubK5PoiF4yowcQFNEUoYb114F",
                            AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
                        });
                        // upOSLoadContent
                        api.h5OS.installApp(item_1, function (res) {
                            if (res.code < 200) {
                                _this.upOSLoadContent = "" + res.code + res.message + ((res.data.process * 100).toFixed(2) + "%");
                            }
                            else {
                                _this.upOSLoadContent = "" + res.code + res.message;
                            }
                            if (res.code == 203) { //更新完成
                                item_1.openUrl = res.data.openUrl;
                                item_1.isDown = true;
                                item_1.isLoading = false;
                                item_1.btn = "Open";
                                // item.save();
                                // this.appList.push(item);
                                _this.showConfirm({ title: "cloverOS", content: "Restart cloverOS" }, function (res) {
                                    if (res == 1) {
                                        api.h5OS.OSRestart();
                                    }
                                });
                            }
                        });
                    }
                },
                initWallte: function () {
                    var _this = this;
                    var title = 'Please input private Key.';
                    if (this.loginTxt != "Login") {
                        title = "Change private key.";
                    }
                    this.$prompt(title, 'private Key', {
                        confirmButtonText: 'Confirm',
                        cancelButtonText: 'Cancel',
                    }).then(function (_a) {
                        var value = _a.value;
                        // utils.T.trace("privateKey=", value);
                        api.OSWallet.config.privateKey = value;
                        window["ethereum"] = new Ethereum(api.OSWallet.getWalletConfig());
                        utils.T.trace("ethereum.selectedAddress=", window["ethereum"].selectedAddress);
                        _this.loginTxt = window["ethereum"].selectedAddress.slice(0, 4) + "****" + window["ethereum"].selectedAddress.slice(-4);
                        api.OSWallet.config.privateKey = "";
                    }).catch(function (e) {
                        utils.T.trace("privateKey= cancel", e);
                    });
                },
                /**
                 * 初始化本地app列表
                 */
                initLocAppList: function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var list;
                        var _this = this;
                        return __generator(this, function (_a) {
                            list = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
                            list.map(function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.appList.push(new api.App(item, true));
                                    return [2 /*return*/];
                                });
                            }); });
                            this.apploading = false;
                            return [2 /*return*/];
                        });
                    });
                },
                /**
                 * 初始化app商城
                 */
                initAppSearchList: function () {
                    this.searchList = [];
                    var appdata = {
                        version: "1.0",
                        AppName: "burgerswap",
                        AppId: "123456",
                        hashId: "123",
                        iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
                        sourceId: "QmbtLFbBQFbTnNAhWMpWtA7rn76r45HWZ1gH1wrUo9dhap",
                        AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
                    };
                    var app;
                    // let res = await api.A2H5.checkApp(appdata.hashId);
                    var id = 0;
                    var b = this.appList.some(function (item, index) {
                        var a = item.hashId == appdata.hashId;
                        if (a)
                            id = index;
                        return a;
                    });
                    if (b) {
                        app = this.appList[id];
                    }
                    else {
                        app = new api.App(appdata);
                    }
                    this.searchList.push(app);
                },
                /**
                 * 删除App
                 */
                removeApp: function (app) {
                },
                showConfirm: function (param, callback) {
                    if (callback === void 0) { callback = null; }
                    this.$confirm(param.content, param.title, {
                        confirmButtonText: 'sure',
                        cancelButtonText: 'cancel',
                        distinguishCancelAndClose: true,
                    }).then(function (a) {
                        utils.T.trace("callback-1---", param.title, a);
                        if (callback)
                            callback(1);
                    }).catch(function (a) {
                        utils.T.trace("callback-0---", param.title, callback, a);
                        if (callback)
                            callback(0);
                    });
                },
                searchApp: function (e) {
                    if (this.searchData.length > 0) {
                        this.showSearch = true;
                        this.showClearSearch = true;
                        this.curSearchList = [];
                        for (var i = 0; i < this.searchList.length; i++) {
                            if (this.searchList[i].AppName.toLocaleLowerCase().indexOf(this.searchData.toLocaleLowerCase()) >= 0) {
                                this.curSearchList.push(this.searchList[i]);
                            }
                        }
                    }
                },
                clearSearch: function (e) {
                    if (this.searchData.length > 0) {
                        this.searchData = "";
                        this.showSearch = false;
                        this.showClearSearch = false;
                    }
                },
                openApp: function (e, item) {
                    return __awaiter(this, void 0, void 0, function () {
                        var iframe;
                        return __generator(this, function (_a) {
                            utils.T.trace("click", e, item);
                            iframe = api.h5OS.openApp(item.openUrl);
                            // api.h5OS.addScript(iframe, "../ZHHHDe4b7mDK2F9PeK/plugin.js")
                            // api.h5OS.addScript2(iframe, 'var t=setInterval(()=>{if(window.parent["ethereumHelper"]){window["ethereumHelper"]=window.parent["ethereumHelper"];window["ethereum"]=window.parent["ethereum"];console.log("-----plugin injected-------");clearInterval(t)}else{console.log("-------wait to aaa--------")}},250);');
                            // api.h5OS.addScript2(iframe, 'console.log("plu")');
                            // api.h5OS.addScript2(iframe, 'console.log("parent",window.parent)');
                            // api.h5OS.addScript2(iframe, 'console.log("ethereumHelper",window.parent["ethereumHelper"])');
                            api.h5OS.addScript2(iframe, 'window["ethereumHelper"]=window.parent["ethereumHelper"];');
                            api.h5OS.addScript2(iframe, 'window["ethereum"]=window.parent["ethereum"];');
                            api.h5OS.addScript2(iframe, 'window.open = (pageURL,name,parameters)=>{window.location.href=pageURL;};');
                            return [2 /*return*/];
                        });
                    });
                },
                downApp: function (e, item) {
                    var _this = this;
                    // utils.T.trace("item=",item)
                    if (!item.isDown) { //down
                        // item.isLoading = true;
                        // setTimeout(() => {
                        //     item.isDown = true;
                        //     item.isLoading = false;
                        //     item.btn = "Open";
                        //     this.appList.push(item);
                        // }, 3500);
                        api.h5OS.installApp(item, function (res) {
                            if (res.code == 203) { //安装完成
                                item.openUrl = res.data.openUrl;
                                item.isDown = true;
                                item.isLoading = false;
                                item.btn = "Open";
                                item.save();
                                _this.appList.push(item);
                            }
                        });
                    }
                    else { //Open
                        if (!item.isLoading)
                            this.openApp(e, item);
                    }
                },
                uninstallApp: function (e, item) {
                    return __awaiter(this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    item.isLoading = true;
                                    return [4 /*yield*/, api.h5OS.uninstallApp(item)];
                                case 1:
                                    res = _a.sent();
                                    if (res.code == 501 || res.code == 503) {
                                        item.isDown = false;
                                        item.btn = "Install";
                                        this.delApp(item);
                                    }
                                    item.isLoading = false;
                                    return [2 /*return*/];
                            }
                        });
                    });
                },
                delApp: function (item) {
                    for (var i = 0; i < this.appList.length; i++) {
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
                    window.localStorage.setItem("appList", JSON.stringify(this.appList));
                }
            }
        });
    }
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    /**
    * @param target
    * @param callback  */
    var each = function (target, callback) {
        if (!target) {
            throw new Error('：');
        }
        //
        if (target instanceof Array) {
            target.forEach(function (item, key, instance) {
                callback(item, "" + key, instance); // key
            });
            return;
        }
        //
        Object.keys(target).forEach(function (key) {
            callback(target[key], key, target);
        });
    };
};
//# sourceMappingURL=main.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ELE;
(function (ELE) {
    /**
     * ele Button
     */
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        /**
         * onClick  "f5/f5(1)"
         */
        function Button(parent, type, text, icon, onClick, ele) {
            if (parent === void 0) { parent = null; }
            if (type === void 0) { type = null; }
            if (text === void 0) { text = null; }
            if (icon === void 0) { icon = null; }
            if (onClick === void 0) { onClick = null; }
            if (ele === void 0) { ele = null; }
            var _this = _super.call(this, parent, ele) || this;
            _this.type = type;
            _this._text = text;
            _this.icon = icon;
            _this.onClick = onClick;
            _this.init();
            return _this;
        }
        Button.prototype.init = function () {
            if (!this.ele) {
                var funcString = "";
                if (this.onClick) {
                    funcString = "@click='" + this.onClick + "'";
                }
                this.ele = MUI.Element.stringToElement("<el-button " + funcString + "></el-button>");
            }
            utils.T.trace("ele=", this.ele, this.onClick);
            if (this.text) {
                this.text = this._text;
            }
            if (this.type) {
                this.setAttribute("type", this.type);
            }
            if (this.icon) {
                this.setAttribute("icon", this.icon);
            }
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
        };
        Button.prototype.setAttr = function (attributs) {
            this.attributs = attributs || this.attributs;
            if (this.attributs) {
                for (var key in this.attributs) {
                    this[key] = this.attributs[key];
                    this.setAttribute(key, this[key]);
                }
            }
        };
        return Button;
    }(MUI.Element));
    ELE.Button = Button;
})(ELE || (ELE = {}));
//# sourceMappingURL=Button.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Button
     */
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(parent, text) {
            if (parent === void 0) { parent = null; }
            if (text === void 0) { text = null; }
            var _this = _super.call(this, parent) || this;
            _this._text = text;
            _this.init();
            return _this;
        }
        Button.prototype.init = function () {
            this.ele = document.createElement("button");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this.text) {
                this.text = this._text;
            }
        };
        return Button;
    }(MUI.Element));
    MUI.Button = Button;
})(MUI || (MUI = {}));
//# sourceMappingURL=Button.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Div
     */
    var Div = /** @class */ (function (_super) {
        __extends(Div, _super);
        function Div(parent, ele) {
            if (parent === void 0) { parent = null; }
            if (ele === void 0) { ele = null; }
            var _this = _super.call(this, parent, ele) || this;
            _this.init();
            return _this;
        }
        Div.prototype.init = function () {
            if (!this.ele)
                this.ele = document.createElement("div");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
        };
        return Div;
    }(MUI.Element));
    MUI.Div = Div;
})(MUI || (MUI = {}));
//# sourceMappingURL=Div.js.map
var MUI;
(function (MUI) {
    /**
     * Element 元素 基类
     */
    var Element = /** @class */ (function () {
        /**
         * 放入的容器 parent
         */
        function Element(parent, ele) {
            if (parent === void 0) { parent = null; }
            if (ele === void 0) { ele = null; }
            this.parent = parent;
            this.ele = ele;
        }
        Element.prototype.init = function () {
        };
        Element.stringToElement = function (str) {
            var ele;
            var con = document.createElement("div");
            con.innerHTML = str;
            ele = con.firstChild;
            con = null;
            return ele;
        };
        Element.prototype.upData = function () {
        };
        /**
         * 更新内容/切换语言
         */
        Element.prototype.changeContent = function (value) {
        };
        Object.defineProperty(Element.prototype, "text", {
            get: function () {
                return this._text || "";
            },
            set: function (text) {
                this._text = text;
                this.ele.textContent = text;
            },
            enumerable: false,
            configurable: true
        });
        Element.prototype.show = function (parent) {
            if (parent === void 0) { parent = null; }
            if (parent)
                this.parent = parent;
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
        };
        Element.prototype.hide = function () {
            if (this.parent && this.parent.contains(this.ele)) {
                this.ele.remove();
            }
        };
        Element.prototype.appendChild = function (ele) {
            this.ele.appendChild(ele);
        };
        Element.prototype.setAttribute = function (name, value) {
            this.ele.setAttribute(name, value);
        };
        Element.prototype.getAttribute = function (name) {
            return this.ele.getAttribute(name);
        };
        Element.prototype.addEvents = function () {
        };
        Element.prototype.removeEvents = function () {
        };
        Element.prototype.gc = function () {
            this.removeEvents();
            this.hide();
            this.ele = null;
            this.parent = null;
            this.content = null;
        };
        return Element;
    }());
    MUI.Element = Element;
})(MUI || (MUI = {}));
//# sourceMappingURL=element.js.map

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event(typeArg, data, eventInitDict) {
            if (data === void 0) { data = null; }
            var _this = _super.call(this, typeArg, eventInitDict) || this;
            _this.data = data;
            return _this;
        }
        return Event;
    }(CustomEvent));
    MUI.Event = Event;
})(MUI || (MUI = {}));
//# sourceMappingURL=Event.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Image
     */
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(parent, path) {
            if (parent === void 0) { parent = null; }
            if (path === void 0) { path = null; }
            var _this = _super.call(this, parent) || this;
            _this.path = path;
            _this.init();
            return _this;
        }
        Image.prototype.init = function () {
            this.ele = document.createElement("img");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this.path) {
                this.source = this.path;
            }
        };
        Object.defineProperty(Image.prototype, "source", {
            set: function (path) {
                _super.prototype.changeContent.call(this, path);
                this.ele.setAttribute("src", path);
            },
            enumerable: false,
            configurable: true
        });
        return Image;
    }(MUI.Element));
    MUI.Image = Image;
})(MUI || (MUI = {}));
//# sourceMappingURL=Image.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Input
     */
    var Input = /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input(parent, text, _value) {
            if (parent === void 0) { parent = null; }
            if (text === void 0) { text = null; }
            if (_value === void 0) { _value = null; }
            var _this = _super.call(this, parent) || this;
            _this._text = text;
            _this._value = _value;
            _this.init();
            return _this;
        }
        Input.prototype.init = function () {
            this.ele = document.createElement("input");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this._text) {
                this.placeholder = this._text;
            }
            if (this._value) {
                this.value = this._value;
            }
        };
        Object.defineProperty(Input.prototype, "placeholder", {
            set: function (text) {
                this._text = text;
                this.ele.placeholder = text;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "value", {
            get: function () {
                return this._value || "";
            },
            set: function (value) {
                this.value = value;
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        return Input;
    }(MUI.Element));
    MUI.Input = Input;
})(MUI || (MUI = {}));
//# sourceMappingURL=Input.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * p
     */
    var P = /** @class */ (function (_super) {
        __extends(P, _super);
        function P(parent, text) {
            if (parent === void 0) { parent = null; }
            if (text === void 0) { text = null; }
            var _this = _super.call(this, parent) || this;
            _this._text = text;
            _this.init();
            return _this;
        }
        P.prototype.init = function () {
            this.ele = document.createElement("P");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this.text) {
                this.text = this._text;
            }
        };
        return P;
    }(MUI.Element));
    MUI.P = P;
})(MUI || (MUI = {}));
//# sourceMappingURL=P.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Span
     */
    var Span = /** @class */ (function (_super) {
        __extends(Span, _super);
        // public ele: HTMLSpanElement;
        function Span(parent, text) {
            if (parent === void 0) { parent = null; }
            if (text === void 0) { text = null; }
            var _this = _super.call(this, parent) || this;
            _this._text = text;
            _this.init();
            return _this;
        }
        Span.prototype.init = function () {
            this.ele = document.createElement("span");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this.text) {
                this.text = this._text;
            }
        };
        return Span;
    }(MUI.Element));
    MUI.Span = Span;
})(MUI || (MUI = {}));
//# sourceMappingURL=Span.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MUI;
(function (MUI) {
    /**
     * Textarea
     */
    var Textarea = /** @class */ (function (_super) {
        __extends(Textarea, _super);
        function Textarea(parent, text, _value) {
            if (parent === void 0) { parent = null; }
            if (text === void 0) { text = null; }
            if (_value === void 0) { _value = null; }
            var _this = _super.call(this, parent) || this;
            _this._text = text;
            _this._value = _value;
            _this.init();
            return _this;
        }
        Textarea.prototype.init = function () {
            this.ele = document.createElement("textarea");
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
            if (this._text) {
                this.placeholder = this._text;
            }
            if (this._value) {
                this.value = this._value;
            }
        };
        Object.defineProperty(Textarea.prototype, "placeholder", {
            set: function (text) {
                this._text = text;
                this.ele.placeholder = text;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Textarea.prototype, "value", {
            get: function () {
                return this._value || "";
            },
            set: function (value) {
                this.value = value;
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        return Textarea;
    }(MUI.Element));
    MUI.Textarea = Textarea;
})(MUI || (MUI = {}));
//# sourceMappingURL=Textarea.js.map
var utils;
(function (utils) {
    var load = /** @class */ (function () {
        function load() {
        }
        load.addJQ = function (bf) {
            utils.load.loadScript(load.jqUrl, function () {
                console.log("JQ 加载成功");
                if (bf)
                    bf();
            });
        };
        load.jqUrl = "https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js";
        load.loadScripts = function (list, callback) {
            var loaded = 0;
            var loadNext = function () {
                utils.load.loadScript(list[loaded], function () {
                    loaded++;
                    if (loaded >= list.length) {
                        callback();
                    }
                    else {
                        loadNext();
                    }
                });
            };
            loadNext();
        };
        load.loadScript = function (src, callback) {
            var s = document.createElement('script');
            s.async = false;
            s.src = src;
            s.addEventListener('load', function () {
                s.parentNode.removeChild(s);
                s.removeEventListener('load', arguments.callee, false);
                callback();
            }, false);
            document.body.appendChild(s);
        };
        return load;
    }());
    utils.load = load;
})(utils || (utils = {}));
//# sourceMappingURL=loadScript.js.map
var RequestMethod = /** @class */ (function () {
    function RequestMethod() {
    }
    // public static post2(path, data, backfunc): void {
    // 	let str = "";
    // 	if (data) {
    // 		for (let key in data) {
    // 			str += key + "=";
    // 			str += data[key] + "&";
    // 		}
    // 		data = str.slice(0, -1);
    // 	}
    // 	var request: egret.HttpRequest = new egret.HttpRequest();
    // 	request.responseType = egret.HttpResponseType.TEXT;
    // 	request.timeout = Global.datas.timeoutT;
    // 	// request.withCredentials = true;
    // 	// utils.T.trace("post-data",data);
    // 	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 	if (Global.datas.token) {
    // 		request.setRequestHeader("x-token", Global.datas.token);
    // 	}
    // 	request.open(path, egret.HttpMethod.POST);
    // 	request.send(data);
    // 	request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
    // 	request.addEventListener(egret.IOErrorEvent.IO_ERROR, onGetIOError, this);
    // 	request.addEventListener(egret.ProgressEvent.PROGRESS, onGetProgress, this);
    // 	function onGetComplete(event: egret.Event): void {
    // 		// egret.log("post data : ", request.response);
    // 		if (backfunc) backfunc(1, request.response);
    // 	}
    // 	function onGetIOError(event: egret.IOErrorEvent): void {
    // 		// egret.log("post error : " + event);
    // 		if (backfunc) backfunc(-1, request.response);
    // 	}
    // 	function onGetProgress(event: egret.ProgressEvent): void {
    // 		// egret.log("post progress : " + Math.floor(100*event.bytesLoaded/event.bytesTotal) + "%");
    // 	}
    // }
    RequestMethod.post = function (path, data, backfunc, time) {
        if (time === void 0) { time = 10000; }
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', path, true);
        httpRequest.timeout = time || RequestMethod.timeout;
        // utils.T.trace("超时时间--》",httpRequest.timeout);
        httpRequest.setRequestHeader("Content-type", "application/json");
        // httpRequest.setRequestHeader("api-version", "1.0");
        // var tmp = Date.now()+"";
        // httpRequest.setRequestHeader("timestamp", tmp);
        // httpRequest.setRequestHeader("app-version", Global.datas.app_version);
        // httpRequest.setRequestHeader("h5-version", Global.datas.version);
        // httpRequest.setRequestHeader("platform", egret.Capabilities.os);
        // httpRequest.setRequestHeader("device-model", Global.datas.phoneModel);
        // var str = path;
        // str = str.slice(str.lastIndexOf(":"));
        // str = str.slice(str.indexOf("/"));
        // var acc = (Global.datas.userInfo&&Global.datas.userInfo.mail.slice(0,5))||tmp.slice(0,5);
        // utils.T.trace("post->","path="+path," acc="+acc," tmp="+tmp," str="+str);
        // httpRequest.setRequestHeader("request-id", new md5().hex_md5(acc+"_"+"GL2020_"+tmp+"_"+str));
        // if (Global.datas.token) httpRequest.setRequestHeader("x-token", Global.datas.token);
        try {
            httpRequest.send(JSON.stringify(data));
        }
        catch (error) {
            utils.T.trace("post-data-error=", error);
        }
        var issent = false;
        httpRequest.onload = function () {
            if (issent)
                return;
            issent = true;
            var json = httpRequest.responseText; //获取到服务端返回的数据
            if (backfunc && json)
                backfunc(1, json);
        };
        httpRequest.onerror = function () {
            utils.T.trace("httpRequest.onerror--=" + httpRequest.responseText);
            if (issent)
                return;
            issent = true;
            if (backfunc)
                backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
        };
        httpRequest.ontimeout = function () {
            utils.T.trace("httpRequest.ontimeout--=" + httpRequest.responseText);
            if (issent)
                return;
            issent = true;
            if (backfunc)
                backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
        };
    };
    RequestMethod.postJQ = function (path, data, backfunction, ty, dataType) {
        if (ty === void 0) { ty = "post"; }
        if (dataType === void 0) { dataType = "json"; }
        var aa = {
            url: path,
            type: ty,
            timeout: RequestMethod.timeout,
            // data: JSON.stringify(data),
            dataType: dataType,
            contentType: "application/json;charset=UTF-8",
            success: function (_data) {
                //callback;
                if (backfunction)
                    backfunction(1, JSON.stringify(_data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown, aa) {
                // 状态码
                // console.log(XMLHttpRequest.status);
                // 状态
                // console.log(XMLHttpRequest.readyState);
                // 错误信息
                //                    console.log(textStatus, errorThrown, "aaaaaaaa", aa);
                // if (backfunction) backfunction(0, JSON.stringify({ code: 0, message: Global.promptMessage.network }));
            },
        };
        // if (data != null) {
        // 	aa["data"] = JSON.stringify(data);
        // 	if (Global.datas.token) {
        // 		var hed = {};
        // 		hed["Content-Type"] = "application/json";
        // 		hed["x-token"] = Global.datas.token;
        // 		aa["headers"] = hed;
        // 	}
        // }
        try {
            // view.htpageControl.htpage.mid.ajax(aa);
        }
        catch (error) {
            utils.T.trace("post-data-error=", error);
        }
    };
    RequestMethod.timeout = 10000; //10s
    return RequestMethod;
}());
//# sourceMappingURL=RequestMethod.js.map
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var utils;
(function (utils) {
    /**
 * 输出语句
 * @author middear
 *
 */
    var T = /** @class */ (function () {
        function T() {
        }
        /**
         * 输出语句
         */
        T.trace = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            if (this.log)
                console.log.apply(console, __spreadArrays([message], optionalParams));
            if (this.woyaoAlert) {
                if (optionalParams) {
                    alert(message + JSON.stringify(optionalParams));
                }
                else {
                    alert(message + "");
                }
            }
        };
        /**
         * 弹出提示面板
         */
        T.output = function (value) {
            alert(value);
        };
        T.isoutput = false;
        T.woyaoAlert = false;
        T.log = true;
        T.isUpToWeb = false;
        T.isSendToNative = false;
        return T;
    }());
    utils.T = T;
})(utils || (utils = {}));
//# sourceMappingURL=T.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AppItem = /** @class */ (function (_super) {
    __extends(AppItem, _super);
    function AppItem(parent, data) {
        if (parent === void 0) { parent = null; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this, parent) || this;
        _this.data = data;
        _this.init();
        _this.initUI();
        return _this;
    }
    AppItem.prototype.init = function () {
        this.ele = MUI.Element.stringToElement("<div class='AppItem border'></div>");
        if (this.parent) {
            this.parent.appendChild(this.ele);
        }
    };
    AppItem.prototype.initUI = function () {
        var img = MUI.Element.stringToElement('<el-image class="AppItemIcon" :src="heardIcon" fit="cover"></el-image>');
        var dev = MUI.Element.stringToElement('<div class="AppItemTextPane"><span class="p1">坑多多</span><span class="p2">价格随你，亏本也要卖</span></div>');
        this.appendChild(img);
        this.appendChild(dev);
        img["src"] = this.data.icon;
        var btn = new ELE.Button(this.ele, null, "更新", null, '(e)=>{click(e,"appitem")}');
        btn.setAttr({ size: "mini" });
        var btn2 = new ELE.Button(this.ele, "success", "打开", null, '(e)=>{click(e,"appitem")}');
        btn2.setAttr({ size: "mini" });
    };
    return AppItem;
}(MUI.Element));
//# sourceMappingURL=AppItem.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyApp = /** @class */ (function (_super) {
    __extends(MyApp, _super);
    function MyApp(parent, ele) {
        if (parent === void 0) { parent = null; }
        if (ele === void 0) { ele = null; }
        var _this = _super.call(this, parent, ele) || this;
        _this.init();
        _this.initUI();
        return _this;
    }
    MyApp.prototype.init = function () {
        this.ele = MUI.Element.stringToElement('<div  v-if="!showSearch" id="MyApp" v-loading="apploading"></div>');
        if (this.parent) {
            this.parent.appendChild(this.ele);
        }
    };
    MyApp.prototype.initUI = function () {
        var p = new MUI.P(this.ele, "My App");
        var applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in appList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="cover"></el-image><div class="AppItemTextPane"><span class="p1">{{item.AppName}}</span><span class="p2">{{item.AppContent}}</span></div></div><div><el-button v-if="item.isUpdata"  size="mini">Updata</el-button><el-button @click="(e)=>{uninstallApp(e,item)}" size="mini" type="success">Del</el-button><el-button @click="(e)=>{openApp(e,item)}" size="mini" type="success">Open</el-button></div></div>');
        var dev = new MUI.Div(this.ele);
        // let app = new AppItem(dev.ele,{});
        dev.appendChild(applist);
    };
    return MyApp;
}(MUI.Element));
//# sourceMappingURL=MyApp.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var searchList = /** @class */ (function (_super) {
    __extends(searchList, _super);
    function searchList(parent, data) {
        if (parent === void 0) { parent = null; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this, parent) || this;
        _this.data = data;
        _this.init();
        _this.initUI();
        return _this;
    }
    searchList.prototype.init = function () {
        this.ele = MUI.Element.stringToElement("<div v-if='showSearch' class='searchList border'></div>");
        if (this.parent) {
            this.parent.appendChild(this.ele);
        }
    };
    searchList.prototype.initUI = function () {
        var applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in curSearchList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="cover"></el-image><div class="AppItemTextPane"><span class="p1">{{item.AppName}}</span><span class="p2">{{item.AppContent}}</span></div></div><div><el-button v-if="item.isUpdata"  size="small">Updata</el-button><el-button v-loading="item.isLoading" @click="(e)=>{downApp(e,item)}" size="small" type="success">{{item.btn}}</el-button></div></div>');
        var dev = new MUI.Div(this.ele);
        // let app = new AppItem(dev.ele,{});
        dev.appendChild(applist);
    };
    return searchList;
}(MUI.Element));
//# sourceMappingURL=searchList.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SearchUI = /** @class */ (function (_super) {
    __extends(SearchUI, _super);
    function SearchUI(parent, ele) {
        if (parent === void 0) { parent = null; }
        if (ele === void 0) { ele = null; }
        var _this = _super.call(this, parent, ele) || this;
        _this.init();
        _this.initUI();
        return _this;
    }
    SearchUI.prototype.init = function () {
        this.ele = MUI.Element.stringToElement("<div id='SearchUI'></div>");
        if (this.parent) {
            this.parent.appendChild(this.ele);
        }
    };
    SearchUI.prototype.initUI = function () {
        var dev1 = new MUI.Div(this.ele);
        dev1.ele.style.display = "flex";
        dev1.ele.style.justifyContent = "space-between";
        dev1.ele.style.marginBottom = "0.5rem";
        var span = new MUI.Span(dev1.ele, "Search");
        var loginBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="initWallte" icon="el-icon-user"  >{{loginTxt}}</el-button>');
        dev1.appendChild(loginBtn);
        var wallteBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="showWallte" icon="el-icon-wallet"  >{{version}}</el-button>');
        dev1.appendChild(wallteBtn);
        var btn1 = MUI.Element.stringToElement('<el-button v-if="showClearSearch"  size="mini" @click="clearSearch"  round>Clear</el-button>');
        dev1.appendChild(btn1);
        var dev = new MUI.Div(this.ele);
        var input = MUI.Element.stringToElement('<el-input placeholder="search APP" v-model="searchData"><i slot="prefix"class="el-input__icon el-icon-search"></i></el-input>');
        var btn = MUI.Element.stringToElement('<el-button type="primary" size="mini" @click="searchApp" slot="append" round>Search</el-button>');
        dev.appendChild(input);
        // input.appendChild(btn1);
        input.appendChild(btn);
    };
    return SearchUI;
}(MUI.Element));
//# sourceMappingURL=SearchUI.js.map
var api;
(function (api) {
    var A2H5 = /** @class */ (function () {
        function A2H5() {
        }
        A2H5.getCallbackName = function () {
            var ramdom = parseInt(Math.random() * 100000 + "");
            return 'h5os_callback_' + new Date().getTime() + ramdom;
        };
        A2H5.initWindowEvent = function () {
            window.addEventListener("message", function (e) {
                // e = window.event || arguments[0];
                var data = JSON.parse(e.data);
                console.log('我是父页面，这是子页面发送的数据：' + data);
                console.log(data.text);
                console.log('-------------------');
            }, false);
            // window.frames[0].postMessage(JSON.stringify(sendData),'http://192.168.100.40:4200/page2/index.html');//数据发送
            // window.parent.postMessage(JSON.stringify(sendData),'http://192.168.100.40:4100/page1/index.html');//数据发送
        };
        A2H5.isConnected = function () {
            return !!(window["cloverOSBridge"] || (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.getDeviceId));
        };
        A2H5.post = function (methondName, parameters, callBack) {
            // if (A2H5.isConnected()) {
            // 	A2H5.sentReQuest(methondName, parameters, callBack)
            // } else {
            // }
            A2H5.initRequst();
            A2H5.sentReQuest(methondName, parameters, callBack);
        };
        A2H5.initRequst = function () {
            if (A2H5.os == "iOS") {
                A2H5.sentReQuest = function (methondName, parameters, callBack) {
                    if (!utils.T.isSendToNative)
                        utils.T.trace("sendToNative-IOS" + " -methondName=" + methondName + " -parameters=" + parameters);
                    if (!window["webkit"] || !window["webkit"].messageHandlers || !window["webkit"].messageHandlers.sendToNative) {
                        utils.T.trace("sendToNative-iOS---》No docking app! ", methondName);
                    }
                    else {
                        window["webkit"].messageHandlers.sendToNative.postMessage(methondName, parameters, callBack);
                    }
                };
            }
            else {
                A2H5.sentReQuest = function (methondName, parameters, callBack) {
                    if (!utils.T.isSendToNative)
                        utils.T.trace("sendToNative-android" + " -methondName=" + methondName + " -parameters=" + parameters);
                    if (!window["cloverOSBridge"]) {
                        utils.T.trace("sendToNative-android---》No docking app! ");
                        return;
                    }
                    else {
                        window["cloverOSBridge"].callMessage(methondName, parameters, callBack);
                    }
                };
            }
        };
        /**
         * 安装App  method= "installApp" params={hashId,sourceId}
         * @param params {hashId,sourceId}
         * @param bf.code(1,2,3) 回调 bf({code,message,data}) code：101(下载中); 102(下载完成);103(下载失败);//    201(安装中);202(安装失败);203(安装成功);
         */
        A2H5.installApp = function (params, bf) {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("installApp-result=", result);
                    if (bf)
                        bf(result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('installApp', JSON.stringify(params), h5OSCallbackFun);
            });
        };
        A2H5.openApp = function () {
        };
        /**
         * 卸载App  method= "uninstall"
         * @param hashId params={hashId}
         * code(5) 501(卸载成功)  502（卸载失败） 503（没有找到)
         * return {code,data,message}
         */
        A2H5.uninstall = function (hashId) {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("uninstall-result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('uninstall', JSON.stringify({ hashId: hashId }), h5OSCallbackFun);
            });
        };
        /**
         * 获取手机UUID  method= "getUUID"
         * @param params {uuid:"uuid"}
         * @param bf.code(6) 回调 bf({code,message,data}) code：601(获取成功); 602(获取失败);
         */
        A2H5.getUUID = function () {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    //去除空格和换行
                    result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        var data = res.qrResult || '';
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('getUUID', JSON.stringify({ uuid: "uuid" }), h5OSCallbackFun);
            });
        };
        /**
         * 复制文本到裁剪版  method= "copy"
         * @param params {value}
         * @param bf.code(7) 回调 bf({code,message,data}) code：701(复制成功); 702(复制失败);
         */
        A2H5.copy = function (value) {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("copy - result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('copy', JSON.stringify({ value: value }), h5OSCallbackFun);
            });
        };
        /**
         * 获取裁剪版内容  method= "getClipboard"
         * @param params {clipboard:"txt"}
         * @param bf.code(8) 回调 bf({code,message,data}) code：801(获取裁剪版 成功); 802(获取裁剪版 失败);
         */
        A2H5.getClipboard = function () {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("getClipboard - result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('getClipboard', JSON.stringify({ clipboard: "txt" }), h5OSCallbackFun);
            });
        };
        /**
         * 检查App是否存在  method= "checkApp"
         * @param hashId params={hashId}
         * code(9) 901(存在)  902（否）
         * return {code,data,message}
         */
        A2H5.checkApp = function (hashId) {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("checkApp-result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('checkApp', JSON.stringify({ hashId: hashId }), h5OSCallbackFun);
            });
        };
        /**
         * 检查serve 是否启动  method= "checkServe"
         * @param hashId params={serve:"serve"}
         * code(10) 1001(启动)  1002（否）
         * return {code,data,message}
         */
        A2H5.checkServe = function () {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("checkServe-result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('checkServe', JSON.stringify({ serve: "serve" }), h5OSCallbackFun);
            });
        };
        /**
         * 使用默认浏览器打开网页  method= "openBrowserPage"
         * @param path params={path}
         * code(11) 1101(启动成功)  1102（启动失败）
         * return {code,data,message}
         */
        A2H5.openBrowserPage = function (path) {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("openBrowserPage-result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('openBrowserPage', JSON.stringify({ path: path }), h5OSCallbackFun);
            });
        };
        /**
         * 重启cloverOS  method= "OSRestart"
         * @param  params={OSRestart:"OSRestart"}
         * code(12) 1201(启动成功)  1202（启动失败）
         * return {code,data,message}
         */
        A2H5.OSRestart = function () {
            return new window["Promise"](function (resolve, reject) {
                var h5OSCallbackFun = A2H5.getCallbackName();
                window[h5OSCallbackFun] = function (result) {
                    utils.T.trace("OSRestart-result=", result);
                    // utils.T.trace("result obj=",JSON.parse(result))
                    // utils.T.trace("result obj query=",JSON.parse(result).query)
                    //去除空格和换行
                    // result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                    try {
                        var res = JSON.parse(result);
                        resolve(res);
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                A2H5.post('OSRestart', JSON.stringify({ OSRestart: "OSRestart" }), h5OSCallbackFun);
            });
        };
        /**
         * 获取 裁剪板 内容
         */
        A2H5.getCutBoardContent = function () {
            return "";
        };
        /**
         * 复制文本到裁剪版;
         */
        A2H5.copyContent = function (content) {
        };
        /**
         * 获取设备相关信息;
         */
        A2H5.getDiviceMessage = function () {
            return "";
        };
        /**
         * 打开web;
         */
        A2H5.openWeb = function (url) {
        };
        /**
         * 人脸识别;
         */
        A2H5.GFace = function (appID) {
        };
        /**
         * 获取用户手机型号以及系统版本;
         */
        A2H5.getPhoneModel = function () {
            return "";
        };
        // Events
        A2H5.prototype.backPage = function () {
            var ele;
            ele.dispatchEvent(new CustomEvent("backPage"));
            ele.addEventListener("backPage", function () { });
        };
        A2H5.prototype.closeKeyboard = function () {
            var ele;
            ele.dispatchEvent(new CustomEvent("closeKeyboard"));
            ele.addEventListener("closeKeyboard", function () { });
        };
        /**
         * 系统类型
         */
        A2H5.os = "android"; //iOS android
        return A2H5;
    }());
    api.A2H5 = A2H5;
})(api || (api = {}));
//# sourceMappingURL=A2H5.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var api;
(function (api) {
    var App = /** @class */ (function () {
        function App(data, resetIcon) {
            if (data === void 0) { data = null; }
            if (resetIcon === void 0) { resetIcon = false; }
            /**
             * App 是否可以更新
             */
            this.isUpdata = false;
            /**
             * 是否下载
             */
            this.isDown = false;
            /**
             * 是否正在下载
             */
            this.isLoading = false;
            /**
             * btn 内容
             */
            this.btn = "Install";
            /**
             * 是否更新icon
             */
            this.resetIcon = false;
            if (data) {
                for (var key in data) {
                    this[key] = data[key];
                }
            }
            this.resetIcon = resetIcon;
            this.init();
        }
        /**
         * 保存到本地
         */
        App.prototype.save = function () {
            var _this = this;
            var appList = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
            //是否存在相同app
            var id = 0;
            var some = appList.some(function (item, index) {
                var b = item.hashId == _this.hashId;
                if (b) {
                    id = index;
                }
                return b;
            });
            if (!some) {
                appList.push(this);
                window.localStorage.setItem("appList", JSON.stringify(appList));
            }
            else {
                appList[id] = this;
                window.localStorage.setItem("appList", JSON.stringify(appList));
            }
            utils.T.trace("applist=", JSON.stringify(appList));
        };
        App.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!(this.iconHash || this.resetIcon)) return [3 /*break*/, 2];
                            this.icon = "./images/favicon.jpg";
                            _a = this;
                            return [4 /*yield*/, IPFS.getSource(this.iconHash)];
                        case 1:
                            _a.icon = _c.sent();
                            _c.label = 2;
                        case 2:
                            if (!this.AppContentHash) return [3 /*break*/, 4];
                            this.AppContent = "";
                            _b = this;
                            return [4 /*yield*/, IPFS.getSource(this.AppContentHash, "txt")];
                        case 3:
                            _b.AppContent = _c.sent();
                            _c.label = 4;
                        case 4:
                            utils.T.trace("app=", this);
                            return [2 /*return*/, false];
                    }
                });
            });
        };
        return App;
    }());
    api.App = App;
})(api || (api = {}));
//# sourceMappingURL=App.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var api;
(function (api) {
    var h5OS = /** @class */ (function () {
        function h5OS() {
        }
        h5OS.prototype.showAppList = function () {
        };
        /**
         * 跳转外部链接 jumpWeb
         * @param params 跳转链接 JSON string  {code,message,data} data:"http://127.0.0.1"
         */
        h5OS.jumpWeb = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var data, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = JSON.parse(params);
                            return [4 /*yield*/, api.A2H5.openBrowserPage(data.data)];
                        case 1:
                            res = _a.sent();
                            utils.T.trace("jumpWeb-res=", JSON.stringify(res));
                            return [2 /*return*/];
                    }
                });
            });
        };
        h5OS.addScript = function (iframe, scriptUrl) {
            var s = document.createElement("script");
            s.src = scriptUrl;
            iframe.contentDocument.body.appendChild(s);
        };
        h5OS.addScript2 = function (iframe, scriptstr) {
            var s = document.createElement("script");
            s.innerHTML = scriptstr;
            iframe.contentDocument.body.appendChild(s);
        };
        /**
         * OS 重启
         */
        h5OS.OSRestart = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.A2H5.OSRestart()];
                        case 1:
                            res = _a.sent();
                            utils.T.trace("OSRestart-res=", JSON.stringify(res));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * iframe class -- "os-frame";container id -- "os-frame-con"
         * @param path webApp 路径
         */
        h5OS.openApp = function (path) {
            utils.T.trace("openApp-url=", path);
            //每次需要时创建一个Iframe
            var con = document.getElementById("os-frame-con");
            if (!con) {
                con = document.createElement("div");
                con.id = "os-frame-con";
                document.body.appendChild(con);
            }
            var iframe = document.getElementsByClassName("os-frame").length > 0 ? document.getElementsByClassName("os-frame")[0] : null;
            if (!iframe) {
                con.style.display = "block";
                con.innerHTML = '<iframe class="os-frame" src="' + path + '"   name="os-frame" id="os-frame" allow="fullscreen *"></iframe>';
                iframe = con.firstChild;
            }
            iframe.src = path;
            var btn = MUI.Element.stringToElement('<button id="closeBtn">✕</button>');
            con.appendChild(btn);
            // let btn = document.getElementById("closeBtn");
            btn.addEventListener("click", f1);
            function f1(e) {
                h5OS.closeApp();
                btn.removeEventListener("click", f1);
            }
            return iframe;
        };
        /**
         * 关闭App
         */
        h5OS.closeApp = function () {
            var iframe = (document.getElementsByClassName("os-frame").length > 0) ? document.getElementsByClassName("os-frame")[0] : null;
            if (iframe) {
                iframe.remove();
            }
            var con = document.getElementById("os-frame-con");
            con.style.display = "none";
        };
        /**
         * 查询本地App 列表
         */
        h5OS.checkAppList = function () {
        };
        h5OS.installApp = function (app, bf) {
            if (bf === void 0) { bf = null; }
            app.isLoading = true;
            api.A2H5.installApp({ hashId: app.hashId, sourceId: app.sourceId }, function (res, code) {
                res = JSON.parse(res);
                utils.T.trace("installApp=", res, res.code);
                if (bf) {
                    bf(res);
                }
            });
        };
        h5OS.uninstallApp = function (app) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api.A2H5.uninstall(app.hashId)];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        h5OS.upApp = function () {
        };
        h5OS.appHashId = "ZHHHDe4b7mDK2F9PeK";
        h5OS.version = "1.0";
        return h5OS;
    }());
    api.h5OS = h5OS;
})(api || (api = {}));
//# sourceMappingURL=h5OS.js.map
var api;
(function (api) {
    var interface = /** @class */ (function () {
        function interface() {
        }
        return interface;
    }());
    api.interface = interface;
})(api || (api = {}));
//# sourceMappingURL=interface.js.map
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var IPFS = /** @class */ (function () {
    function IPFS() {
    }
    IPFS.init = function () {
        if (!IPFS.O) {
            //<script src="https://cdn.jsdelivr.net/npm/ipfs-http-client@48.1.1/dist/index.min.js"></script>
            IPFS.O = window["IpfsHttpClient"]({
                host: "18.138.102.196",
                port: "5002",
                protocol: "http",
            });
        }
    };
    IPFS.getSource = function (hash, type) {
        var e_1, _a;
        if (type === void 0) { type = "img"; }
        return __awaiter(this, void 0, void 0, function () {
            var arr, content, content_1, content_1_1, x, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        IPFS.init();
                        arr = [];
                        content = IPFS.O.cat(hash);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        content_1 = __asyncValues(content);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, content_1.next()];
                    case 3:
                        if (!(content_1_1 = _b.sent(), !content_1_1.done)) return [3 /*break*/, 5];
                        x = content_1_1.value;
                        arr.push(x);
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(content_1_1 && !content_1_1.done && (_a = content_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(content_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        // console.log("getSource", arr.toString().split(","), content)
                        if (type == "img") {
                            return [2 /*return*/, window.URL.createObjectURL(new Blob(arr))];
                        }
                        else if (type = "txt") {
                            return [2 /*return*/, String.fromCharCode.apply(null, arr.toString().split(","))];
                        }
                        return [2 /*return*/, arr];
                }
            });
        });
    };
    return IPFS;
}());
//# sourceMappingURL=IPFS.js.map
var api;
(function (api) {
    var OSInterface = /** @class */ (function () {
        function OSInterface() {
        }
        /**
         * 查询线上APP列表
         */
        OSInterface.getAppList = function () {
            return;
        };
        /**
         * 查找APP
         */
        OSInterface.searchApp = function (key) {
            if (key === void 0) { key = ""; }
            return [];
        };
        return OSInterface;
    }());
    api.OSInterface = OSInterface;
})(api || (api = {}));
//# sourceMappingURL=OSInterface.js.map
var api;
(function (api) {
    var OSWallet = /** @class */ (function () {
        function OSWallet() {
        }
        /**
         * 显示签名弹框UI
         * @param parameters 签名的描述信息 {title:"",content:""}
         * @param callBack(value)  1(同意) 0(不同意)
         * use -- window.parent.api.OSWallet.showSignUI(parameters,paramecallBack)
         */
        OSWallet.showSignUI = function (parameters, callBack) {
            utils.T.trace("showSignUI", parameters);
            parameters.content = "from: " + parameters.from;
            parameters.content += " gas: " + parameters.gas;
            parameters.content += " gasPrice: " + parameters.gasPrice;
            parameters.content += " to: " + parameters.to;
            parameters.content += " value: " + parameters.value;
            parameters.title = "transfer:";
            window["OSApp"].showConfirm(parameters, function (value) {
                console.log("value==", value);
                if (callBack)
                    callBack(value);
            });
        };
        /**
         * 获取当前钱包账号信息
         */
        OSWallet.getWalletConfig = function () {
            return OSWallet.config;
            // {
            // 	url: "https://bsc-dataseed.binance.org",
            // 	privateKey: "CB57FD8DB3F908F089D7720C78E4C77765BDBC84503AAA784ED90EDE267164C5"
            // };
        };
        /**
         * 查询Token 余额
         */
        OSWallet.getBalance = function (address, token) {
            return 0.001;
        };
        OSWallet.config = {
            url: "https://bsc-dataseed.binance.org",
            privateKey: ""
        };
        return OSWallet;
    }());
    api.OSWallet = OSWallet;
})(api || (api = {}));
//# sourceMappingURL=OSWallet.js.map





var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mainPage = /** @class */ (function (_super) {
    __extends(mainPage, _super);
    /**
     * 主界面
     *
     */
    function mainPage(parent, ele) {
        if (parent === void 0) { parent = null; }
        if (ele === void 0) { ele = null; }
        var _this = _super.call(this, parent, ele) || this;
        _this.init();
        _this.initUI();
        return _this;
    }
    mainPage.prototype.init = function () {
        this.ele = MUI.Element.stringToElement("<div id='mainPage'></div>");
        if (this.parent) {
            this.parent.appendChild(this.ele);
        }
    };
    mainPage.prototype.initUI = function () {
        utils.T.trace("add - searchUI");
        this.searchUI = new SearchUI(this.ele);
        //banner
        this.bannerUI = MUI.Element.stringToElement('<el-image v-if="!showSearch" style="width: 100%; height: 45vw; margin:1em 0;border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)":src="bannerImg" fit="cover"></el-image>');
        this.appendChild(this.bannerUI);
        var upContent = MUI.Element.stringToElement('<div><el-button v-loading="upOSLoading"  size="mini" @click="upOS">UpOS</el-button> <span>{{upOSLoadContent}}</span> </div>');
        this.appendChild(upContent);
        this.myApp = new MyApp(this.ele);
        this.searchAPPListUI = new searchList(this.ele);
    };
    return mainPage;
}(MUI.Element));
//# sourceMappingURL=mainPage.js.map