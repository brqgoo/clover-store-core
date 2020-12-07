module MUI {        //Element-00
    /**
     * Element 
     */
    export class Element {
        public ele: HTMLElement;
        public parent: HTMLElement;

        public content: any;
        protected _text: string;

        /**
         * container parent
         */
        public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
            this.parent = parent;
            this.ele = ele;
        }

        public init(): void {

        }

        public static stringToElement(str): HTMLElement {
            var ele: HTMLElement;
            let con: HTMLDivElement = document.createElement("div");
            con.innerHTML = str;
            ele = <HTMLElement>con.firstChild
            con = null;
            return ele
        }

        public upData(): void {

        }
        /**
         * 更新内容/切换语言
         */
        public changeContent(value): void {

        }

        public set text(text: string) {
            this._text = text;
            this.ele.textContent = text;
        }

        public get text(): string {
            return this._text || "";
        }

        public show(parent: HTMLElement = null): void {
            if (parent) this.parent = parent;
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
        }

        public hide(): void {
            if (this.parent && this.parent.contains(this.ele)) {
                this.ele.remove();
            }
        }

        public appendChild(ele: HTMLElement): void {
            this.ele.appendChild(ele);
        }

        public setAttribute(name: string, value: string) {
            this.ele.setAttribute(name, value)
        }

        public setStyle(name: string, value: string) {
            // this.ele.setAttribute(name, value)
            this.ele.style[name] = value;
        }
        public getAttribute(name: any) {
            return this.ele.getAttribute(name)
        }

        protected addEvents(): void {

        }
        protected removeEvents(): void {

        }

        public gc(): void {
            this.removeEvents();
            this.hide();
            this.ele = null;
            this.parent = null;
            this.content = null;
        }
    }
}

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
class mainPage extends MUI.Element {

	private searchUI:MUI.Element;
	private bannerUI:HTMLElement;

	private myApp:MUI.Element;

	private searchAPPListUI:MUI.Element;

	/**
	 * 主界面
	 * 
	 */
	public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
		super(parent, ele);
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement("<div id='mainPage'></div>");
		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI():void{
		utils.T.trace("add - searchUI")

		let tost =  MUI.Element.stringToElement('<div v-if="showTost" class="comfirm-pane" ><div class="logo"><el-image src="./images/logo.svg" fit="fit"></el-image></div><div class="title-pane"><el-button @click="closeComfirm"  icon="el-icon-arrow-left"></el-button><span>Submit</span></div><div class="acc-pane"><div class="acc-icon"></div><div class="acc-sp-pane"><span class="sp1">***</span><span class="sp2">{{transferFrom}}</span></div></div><div class="acc-arrow"><i  class="el-icon-bottom" ></i></div><div class="acc-pane"><div class="acc-icon2"></div><div class="acc-sp-pane"><span class="sp1">***</span><span class="sp2">{{transferTo}}</span></div></div><div class="com-tcons"><div class="com-tcon"><span class="com-title">Gas Fee</span><span>{{gasFee}}ETH</span></div><div class="com-tcon"><span class="com-title">Gas Price</span><el-input-number style="width: 50%;" size="mini" v-model="gasPrice" :precision="0" :step="1" ></el-input-number><span>GWEI</span></div><div class="com-tcon"><span class="com-title">Gas limit</span><el-input-number style="width: 50%;" size="mini" v-model="gasLimit" :precision="0" :step="1" ></el-input-number></div></div><div class="com-tcon"><span class="com-title">Total</span><span>{{totalT}}ETH</span></div><div class="btn-con"><el-button @click="WalletReject"  >Reject</el-button><el-button @click="WalletComfirm" type="success"   >Comfirm</el-button></div></div>');

		this.parent.appendChild(tost);

		this.searchUI = new SearchUI(this.ele);
		
		//banner
		// this.bannerUI = MUI.Element.stringToElement('<el-image v-if="!showSearch" style="width: 100%; height: 45vw; margin:1em 0;border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)":src="bannerImg" fit="cover"></el-image>');
		// this.appendChild(this.bannerUI);

		// let upContent = MUI.Element.stringToElement('<div><el-button v-loading="upOSLoading"  size="mini" @click="upOS">UpOS</el-button> <span>{{upOSLoadContent}}</span> </div>');
		// this.appendChild(upContent);

		this.myApp = new MyApp(this.ele);
		this.searchAPPListUI = new searchList(this.ele);

		new userInfo(this.ele);

	}
}
module ELE {
    /**
	 * ele Button
	 */
	export class Button extends MUI.Element {
		public ele: HTMLButtonElement;
		public icon: string;
		private onClick:any;
		/**
		 * type
		 * primary / success / warning / danger / info / text
		 */
		public type: string;
		public attributs: any;
		/**
		 * onClick  "f5/f5(1)"
		 */
		public constructor(parent: HTMLElement = null, type: string = null, text: string = null, icon: string = null,onClick:any=null, ele: HTMLButtonElement = null) {
			super(parent, ele);
			this.type = type;
			this._text = text;
			this.icon = icon;
			this.onClick = onClick;

			this.init();
		}


		public init(): void {
			if (!this.ele) {
				let funcString:string = "";
				if(this.onClick){
					funcString = "@click='"+this.onClick+"'";
				}
				this.ele = <HTMLButtonElement> MUI.Element.stringToElement("<el-button "+funcString+"></el-button>");
				
			}
			utils.T.trace("ele=",this.ele,this.onClick)
			
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
		}

		public setAttr(attributs): void {
			this.attributs = attributs || this.attributs;
			if (this.attributs) {
				for (let key in this.attributs) {
					this[key] = this.attributs[key];
					this.setAttribute(key, this[key]);
				}
			}
		}

	}
}

module MUI {
	/**
	 * Button
	 */
	export class Button extends Element{
		public ele: HTMLButtonElement;
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("button");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}
		
	}
}
module MUI {
	/**
	 * Div
	 */
	export class Div extends Element{
		public constructor(parent:HTMLElement=null,ele:HTMLElement=null) {

			super(parent,ele);
			
			this.init();
		}

		public init():void{
			if(!this.ele) this.ele = document.createElement("div");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
		}
	}
}


module MUI {
	/**
	 * Image
	 */
	export class Image extends Element{
		public path:string;
		public constructor(parent:HTMLElement=null,path:string=null) {
			super(parent);
			this.path = path;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("img");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.path){
				this.source = this.path;
			}
		}

		public set source(path:string){
			super.changeContent(path);
			this.ele.setAttribute("src",path);
		}
	}
}

module MUI {
	/**
	 * Input
	 */
	export class Input extends Element {
		public ele: HTMLInputElement;

		public _value: any;

		public constructor(parent: HTMLElement = null, text: string = null, _value: any = null) {
			super(parent);
			this._text = text;
			this._value = _value;
			this.init();
		}

		public init(): void {
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
		}

		public set placeholder(text: string) {
			this._text = text;
			this.ele.placeholder = text;
		}

		public set value(value) {
			this.value = value;
			this._value = value;
		}

		public get value(): any {
			return this._value || "";
		}


	}
}

module MUI {
	/**
	 * p
	 */
	export class P extends Element{
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("P");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}


		
	}
}

module MUI {
	/**
	 * Span
	 */
	export class Span extends Element{
		// public ele: HTMLSpanElement;
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("span");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}

		// public set text(text:string){
        //     this._text = text;
        //     this.ele.textContent = text;
        // }

		
	}
}
module MUI {
	/**
	 * Textarea
	 */
	export class Textarea extends Element {
		public ele:HTMLTextAreaElement;
		public _value: any;

		public constructor(parent: HTMLElement = null, text: string = null, _value: any = null) {
			super(parent);
			this._text = text;
			this._value = _value;
			this.init();
		}

		public init(): void {
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
		}

		public set placeholder(text: string) {
			this._text = text;
			this.ele.placeholder = text;
		}

		public set value(value) {
			this.value = value;
			this._value = value;
		}

		public get value(): any {
			return this._value || "";
		}


	}
}
class AppItem extends MUI.Element {
	public data:any;

	public constructor(parent: HTMLElement = null, data: any = null) {
		super(parent);
		this.data = data;
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement("<div class='AppItem border'></div>");


		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI(): void {
		let img:HTMLElement =  MUI.Element.stringToElement('<el-image class="AppItemIcon" :src="heardIcon" fit="cover"></el-image>');
		let dev:HTMLDivElement = <HTMLDivElement>MUI.Element.stringToElement('<div class="AppItemTextPane"><span class="p1">abcd</span><span class="p2">abcde</span></div>');
		this.appendChild(img);
		this.appendChild(dev);
		img["src"] = this.data.icon;

		
		
		let btn = new ELE.Button(this.ele,null,"updata",null,'(e)=>{click(e,"appitem")}');
		btn.setAttr({size:"mini"});
		let btn2 = new ELE.Button(this.ele,"success","open",null,'(e)=>{click(e,"appitem")}');
		btn2.setAttr({size:"mini"});
		

	}
}
class searchList extends MUI.Element {
	public data:any;

	public constructor(parent: HTMLElement = null, data: any = null) {
		super(parent);
		this.data = data;
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement("<div v-if='showSearch' class='searchList border'></div>");


		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI(): void {
		let applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in curSearchList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="cover"></el-image><div class="AppItemTextPane"><span class="p1">{{item.AppName}}</span><span class="p2">{{item.AppContent}}</span></div></div><div><span v-if="item.isLoading" class="speed">{{item.speed}}</span><el-button v-if="item.isUpdata"  size="mini">Updata</el-button><el-button class="install-btn" v-loading="item.isLoading" :element-loading-text="item.loadPer" element-loading-spinner="el-icon-loading" @click="(e)=>{downApp(e,item)}" size="mini" type="success">{{item.btn}}</el-button></div></div>');
		
		let dev = new MUI.Div(this.ele);
		// let app = new AppItem(dev.ele,{});

		dev.appendChild(applist);

	}
}
class MyApp extends MUI.Element {



	public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
		super(parent, ele);
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement('<div  v-if="!showSearch" id="MyApp" v-loading="apploading"></div>');


		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI(): void {
		let p = new MUI.P(this.ele,"My DApps");
		p.setStyle("fontSize","18px");
		p.setStyle("color","#333333");

		let applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in appList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="fill"></el-image><div class="AppItemTextPane"><span class="p1"><span>{{item.AppName}}</span><el-button @click="(e)=>{uninstallApp(e,item)}" size="mini" style="float:right;">Delete</el-button></span><span class="p2">{{item.AppContent}}</span></div></div><div><el-button v-if="item.isUpdata"  size="mini">Updata</el-button><el-button @click="(e)=>{openApp(e,item)}" size="mini" type="success">Open</el-button></div></div>');
		
		let dev = new MUI.Div(this.ele);
		// let app = new AppItem(dev.ele,{});

		dev.appendChild(applist);

	}
}
class SearchUI extends MUI.Element {



	public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
		super(parent, ele);
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement("<div id='SearchUI'></div>");


		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI(): void {
		let dev1 = new MUI.Div(this.ele);
		dev1.ele.style.display = "flex";
		dev1.ele.style.justifyContent = "space-between";
		dev1.ele.style.marginBottom = "0.5rem";
		// let span = new MUI.Span(dev1.ele, "Search");
		// let loginBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="initWallte" icon="el-icon-user"  >{{loginTxt}}</el-button>');
		// dev1.appendChild(loginBtn);

		// let wallteBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="showWallte" icon="el-icon-wallet"  >{{version}}</el-button>');
		// dev1.appendChild(wallteBtn);

		let dev = new MUI.Div(this.ele);
		dev.setStyle("display","flex");
		let input = MUI.Element.stringToElement('<el-input class="search-item" placeholder="search APP" v-model="searchData" round ></el-input>');

		let clear = MUI.Element.stringToElement('<el-button v-if="searchData.length>0"  @click="clearSearch" icon="el-icon-close"   circle ></el-button>');
		clear.style.marginLeft = "10px";

		let searchBtn = MUI.Element.stringToElement('<el-button icon="el-icon-search" circle  @click="searchApp" ></el-button>');
		searchBtn.style.marginLeft = "10px";
		dev.appendChild(input);
		dev.appendChild(clear);
		dev.appendChild(searchBtn);
	}
}
module utils {
	export class load {

		public static jqUrl: string = "https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js";
		public constructor() {
		}


		public static addJQ(bf): void {
			utils.load.loadScript(load.jqUrl, function () {
				if(bf)bf();
			})
		}



		public static loadScripts = function (list, callback) {
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
				})
			};
			loadNext();
		};

		public static loadScript = function (src, callback) {
			var s = document.createElement('script');
			s.async = false;
			s.src = src;
			s.addEventListener('load', function () {
				s.parentNode.removeChild(s);
				s.removeEventListener('load', <EventListenerOrEventListenerObject>arguments.callee, false);
				callback();
			}, false);
			document.body.appendChild(s);
		};

	}
}
class RequestMethod {
	public static timeout = 10000;	//10s
	

	

	public static post(path, data, backfunc,time:number=10000) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.open('POST', path, true);
		httpRequest.timeout = time||RequestMethod.timeout;
		httpRequest.setRequestHeader("Content-type", "application/json");
		
		try {
			httpRequest.send(JSON.stringify(data));
		} catch (error) {
			utils.T.trace("post-data-error=", error);
		}
	

		var issent = false;
		httpRequest.onload = function () {
			if (issent) return;
			issent = true;
			var json = httpRequest.responseText;		 		
			if (backfunc && json) backfunc(1, json);
		}
		httpRequest.onerror = function () {
			utils.T.trace("httpRequest.onerror--="+httpRequest.responseText);
			if (issent) return;
			issent = true;
			if (backfunc) backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
		}
		httpRequest.ontimeout = function () {
			utils.T.trace("httpRequest.ontimeout--="+httpRequest.responseText);
			if (issent) return;
			issent = true;
			if (backfunc) backfunc(0, JSON.stringify({ code: 0, message: httpRequest.responseText }));
		}
	}

	public static postJQ(path, data, backfunction, ty: string = "post", dataType: string = "json") {
		var aa = {
			url: path,
			type: ty,	//"post",
			timeout: RequestMethod.timeout,
			// data: JSON.stringify(data),
			dataType: dataType,
			contentType: "application/json;charset=UTF-8",
			success: function (_data) {
				//callback;
				if (backfunction) backfunction(1, JSON.stringify(_data));
			},
			error: function (XMLHttpRequest, textStatus, errorThrown, aa) {
				
			},
		}
	
		try {
			// view.htpageControl.htpage.mid.ajax(aa);
		} catch (error) {
			utils.T.trace("post-data-error=", error);
		}
	}

}
module api {
	export class A2H5 {
	


		/**
		 * sentReQuest
		 */
		public static sentReQuest: Function;

		/**
		 * os
		 */
		public static os: string = "android"	//iOS android



		public static getCallbackName(): string {
			var ramdom = parseInt(Math.random() * 100000 + "");
			return 'h5os_callback_' + new Date().getTime() + ramdom;
		}

		public static initWindowEvent(): void {
			window.addEventListener("message", (e) => {
				var data = JSON.parse(e.data);
			}, false)
		}

		public static isConnected() {
			return !!(window["cloverOSBridge"] || (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.getDeviceId));
		}

		public static post(methondName, parameters, callBack) {
			A2H5.initRequst();
			A2H5.sentReQuest(methondName, parameters, callBack);
		}

		public static initRequst() {
			if (A2H5.os == "iOS") {
				A2H5.sentReQuest = function (methondName, parameters, callBack) {
					if (!utils.T.isSendToNative) utils.T.trace("sendToNative-IOS" + " -methondName=" + methondName + " -parameters=" + parameters);
					if (!window["webkit"] || !window["webkit"].messageHandlers || !window["webkit"].messageHandlers.sendToNative) {
						utils.T.trace("sendToNative-iOS---》No docking app! ", methondName);
					} else {
						window["webkit"].messageHandlers.sendToNative.postMessage(methondName, parameters, callBack);
					}
				}

			} else {
				A2H5.sentReQuest = function (methondName, parameters, callBack) {
					if (!utils.T.isSendToNative) utils.T.trace("sendToNative-android" + " -methondName=" + methondName + " -parameters=" + parameters);
					if (!window["cloverOSBridge"]) {
						utils.T.trace("sendToNative-android---》No docking app! ");
						return;
					}
					else {
						window["cloverOSBridge"].callMessage(methondName, parameters, callBack);
					}
				}
			}
		}





		/**
		 * install App  method= "installApp" params={hashId,sourceId}
		 * @param params {hashId,sourceId}
		 * @param bf.code(1,2,3) callback bf({code,message,data}) code：101(downing); 102(downed);103(down err);//    201(install...);202(install err);203(install successs);
		 */
		public static installApp(params, bf) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("installApp-result=", result)
					if (bf) bf(result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('installApp', JSON.stringify(params), h5OSCallbackFun);
			});
		}

		public static openApp() {

		}
		/**
		 * uninstall  method= "uninstall" 
		 * @param hashId params={hashId}
		 * code(5) 501(uninstall success)  502（uninstall err） 503（not find)
		 * return {code,data,message}  
		 */
		public static uninstall(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("uninstall-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('uninstall', JSON.stringify({ hashId }), h5OSCallbackFun);
			});
		}

		/**
		 * get UUID  method= "getUUID" 
		 * @param params {uuid:"uuid"}
		 * @param bf.code(6) callback bf({code,message,data}) code：601(success); 602(err);
		 */
		public static getUUID() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						var data = res.qrResult || '';
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('getUUID', JSON.stringify({ uuid: "uuid" }), h5OSCallbackFun);

			});
		}

		/**
		 * copy  method= "copy" 
		 * @param params {value}
		 * @param bf.code(7) callback bf({code,message,data}) code：701(success); 702(err);
		 */
		public static copy(value: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("copy - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('copy', JSON.stringify({ value }), h5OSCallbackFun);
			});
		}
		/**
		 * getClipboard  method= "getClipboard" 
		 * @param params {clipboard:"txt"}
		 * @param bf.code(8) callback bf({code,message,data}) code：801(success); 802(err);
		 */
		public static getClipboard() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("getClipboard - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('getClipboard', JSON.stringify({ clipboard: "txt" }), h5OSCallbackFun);
			});
		}

		/**
		 * checkApp  method= "checkApp" 
		 * @param hashId params={hashId}
		 * code(9) 901(true)  902（false） 
		 * return {code,data,message}  
		 */
		public static checkApp(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkApp-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('checkApp', JSON.stringify({ hashId }), h5OSCallbackFun);
			});
		}

		/**
		 * checkServe  method= "checkServe" 
		 * @param hashId params={serve:"serve"}
		 * code(10) 1001(true)  1002（false） 
		 * return {code,data,message}  
		 */
		public static checkServe() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkServe-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('checkServe', JSON.stringify({ serve: "serve" }), h5OSCallbackFun);
			});
		}

		/**
		 * openBrowserPage  method= "openBrowserPage" 
		 * @param path params={path}
		 * code(11) 1101(success)  1102（err） 
		 * return {code,data,message}  
		 */
		public static openBrowserPage(path: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("openBrowserPage-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('openBrowserPage', JSON.stringify({ path }), h5OSCallbackFun);
			});
		}
		/**
		 * OSRestart  method= "OSRestart" 
		 * @param  params={OSRestart:"OSRestart"}
		 * code(12) 1201(true)  1202（false） 
		 * return {code,data,message}  
		 */
		public static OSRestart() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("OSRestart-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('OSRestart', JSON.stringify({ OSRestart: "OSRestart" }), h5OSCallbackFun);
			});
		}




		/**
		 * getCutBoardContent
		 */
		public static getCutBoardContent(): string {
			return ""
		}

		/**
		 * copyContent;
		 */
		public static copyContent(content: string): void {

		}

		/**
		 * getDiviceMessage;
		 */
		public static getDiviceMessage(): string {
			return ""
		}

		/**
		 * openWeb;
		 */
		public static openWeb(url: string): void {

		}

		/**
		 * GFace;
		 */
		public static GFace(appID: string): void {

		}
		/**
		 * getPhoneModel;
		 */
		public static getPhoneModel(): string {
			return ""
		}


		// Events

		public backPage(): void {

			let ele: HTMLElement;
			ele.dispatchEvent(new CustomEvent("backPage"));
			ele.addEventListener("backPage", () => { })
		}

		public closeKeyboard(): void {

			let ele: HTMLElement;
			ele.dispatchEvent(new CustomEvent("closeKeyboard"));
			ele.addEventListener("closeKeyboard", () => { })
		}
	}
}
class userInfo extends MUI.Element {

	public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
		super(parent, ele);
		this.init();
		this.initUI();
	}

	public init(): void {
		this.ele = MUI.Element.stringToElement("<div id='InfoUI'></div>");


		if (this.parent) {
			this.parent.appendChild(this.ele);
		}

	}

	private initUI(): void {

		let login = MUI.Element.stringToElement('<div v-if="!isLogin" class="Info-con1"><el-button type="success" style="width:100%;" size="small" @click="initWallte"  >Connect Wallet</el-button></div>');
		this.appendChild(login);

		let info = MUI.Element.stringToElement('<div v-if="isLogin" class="Info-con2" ><i class="el-icon-user" style="margin-right:1rem"></i><span>{{account.slice(0,6)+"****"+account.slice(-6)}}</span></div>');
		this.appendChild(info);


	}
}
module api {
	export class App {

		// app1 = {
		//     // AppName:"burgerswap",
		//     AppId:"123456",
		//     AppHashId:"123",
		//     // icon:"Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
		//     // downUrl:"QmbtLFbBQFbTnNAhWMpWtA7rn76r45HWZ1gH1wrUo9dhap",
		//     // AppContent:"QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
		// }
		/**
		 * App name
		 */
		public AppName: string;
		/**
		 * App content
		 */
		public AppContent: string;

		/**
		 * App content hash
		 */
		public AppContentHash: string;
		/**
		 * App ID
		 */
		public AppId: string;
		/**
		 * App hashId
		 */
		public hashId: string;

		/**
		 * App zip hash address
		 */
		public sourceId: string;

		/**
		 * App icon
		 */
		public icon: string;

		/**
		 * App icon hash
		 */
		public iconHash: string;

		/**
		 * App ver
		 */
		public version: string;

		/**
		 * App start-up url
		 */
		public path: string;

		/**
		 * App down url
		 */
		public downUrl: string;
		/**
		 * App 打开地址
		 */
		public openUrl: string;

		/**
		 * type
		 */
		public type: string;

		/**
		 * App size
		 */
		public size: number; //MB
		/**
		 * App isUpdata
		 */
		public isUpdata: boolean = false;
		/**
		 * isDown
		 */
		public isDown: boolean = false;

		/**
		 * isLoading down
		 */
		public isLoading: boolean = false;
		/**
		 * btn content txt
		 */
		public btn: string = "Install";
		/**
		 * createTime
		 */
		public createTime:number;
		/**
		 * updateTime
		 */
		public updateTime:number;

		/**
		 * down speed
		 */
		public speed:string="10 KB/s";
		/**
		 * load per
		 */
		public loadPer:string = "0%";

		/**
		 * resetIcon
		 */
		private resetIcon: boolean = false;

		private callBack:Function = null;
		public constructor(data: any = null, resetIcon: boolean = false,callBack:Function=null) {
			if (data) {
				for (let key in data) {
					this[key] = data[key];
				}
			}
			this.resetIcon = resetIcon;
			this.callBack = callBack;
			this.init();
		}
		/**
		 * 
		 */
		public save() {

			let appList = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
			let id = 0;
			let some = appList.some((item, index) => {
				let b = item.hashId == this.hashId;
				if (b) {
					id = index;
				}
				return b;

			});
			if (!some) {
				appList.push(this);
				window.localStorage.setItem("appList", JSON.stringify(appList))
			}else{
				appList[id] = this;
				window.localStorage.setItem("appList", JSON.stringify(appList))
			}

			utils.T.trace("applist=",JSON.stringify(appList))
		}

		private async init() {
			if (this.iconHash || this.resetIcon) {
				this.icon = "./images/favicon.jpg";
				this.icon = await IPFS.getSource(this.iconHash);
			}

			if (this.AppContentHash) {
				this.AppContent = "...";
				this.AppContent = await IPFS.getSource(this.AppContentHash, "txt");

			}

			utils.T.trace("app=", this);

			if(this.callBack) this.callBack();

			return false;
		}
	}
}
module api {
	export class h5OS {

		public static appHashId: string = "ZHHHDe4b7mDK2F9PeK";
		public static version: string = "1.0";

		private static cloverProvider: any;
		private static cloverContract: any;

		private static cloverABI: string = '[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_desc","type":"string"},{"internalType":"string","name":"_source","type":"string"},{"internalType":"string","name":"_icon","type":"string"}],"name":"addProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"icon","type":"string"},{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"bytes32","name":"uuid","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"indexed":false,"internalType":"struct CloverOsProject.Project","name":"info","type":"tuple"}],"name":"NewProject","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"controller","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"icon","type":"string"},{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"bytes32","name":"uuid","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"indexed":false,"internalType":"struct CloverOsProject.Project","name":"info","type":"tuple"}],"name":"ProjectStatusChanged","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_desc","type":"string"},{"internalType":"string","name":"_source","type":"string"},{"internalType":"string","name":"_icon","type":"string"}],"name":"updateProject","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"controller","type":"address"},{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"icon","type":"string"},{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"bytes32","name":"uuid","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"indexed":false,"internalType":"struct CloverOsProject.Project","name":"info","type":"tuple"}],"name":"UpdateProject","type":"event"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"_status","type":"uint8"}],"name":"updateProjectStatusByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"_status","type":"uint8"}],"name":"updateProjectStatusByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"developers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"getProjects","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"icon","type":"string"},{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"bytes32","name":"uuid","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"internalType":"struct CloverOsProject.Project[]","name":"pjs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isDevelover","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leastUpdatTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"projects","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"desc","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"icon","type":"string"},{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"bytes32","name":"uuid","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"enum CloverOsProject.ProjectStatus","name":"status","type":"uint8"},{"internalType":"uint256","name":"createTime","type":"uint256"},{"internalType":"uint256","name":"updateTime","type":"uint256"}],"stateMutability":"view","type":"function"}]';


		public showAppList(): void {

		}

		/**
		 *  jumpWeb
		 * @param params 跳转链接 JSON string  {code,message,data} data:"http://127.0.0.1"
		 */
		public static async jumpWeb(params: string) {
			let data: any = JSON.parse(params);
			// h5OS.openApp(data.data);

			let res = await A2H5.openBrowserPage(data.data);
			utils.T.trace("jumpWeb-res=", JSON.stringify(res))
		}

		public static addScript(iframe: HTMLFrameElement, scriptUrl): void {
			let s: HTMLScriptElement = document.createElement("script");
			s.src = scriptUrl;
			iframe.contentDocument.body.appendChild(s);
		}
		public static addScript2(iframe: HTMLFrameElement, scriptstr): void {
			let s: HTMLScriptElement = document.createElement("script");
			s.innerHTML = scriptstr
			iframe.contentDocument.body.appendChild(s);
		}

		/**
		 * OS reset
		 */
		public static async OSRestart() {
			// window.location.reload();

			let res = await A2H5.OSRestart();
			utils.T.trace("OSRestart-res=", JSON.stringify(res));
		}

		/**
		 * iframe class -- "os-frame";container id -- "os-frame-con"
		 * @param path webApp 
		 */
		public static openApp(path): HTMLFrameElement {
			utils.T.trace("openApp-url=", path)
			let con: HTMLDivElement = <HTMLDivElement>document.getElementById("os-frame-con");
			if (!con) {
				con = document.createElement("div");
				con.id = "os-frame-con";
				document.body.appendChild(con);
			}
			let iframe: HTMLFrameElement = document.getElementsByClassName("os-frame").length > 0 ? <HTMLFrameElement>document.getElementsByClassName("os-frame")[0] : null;
			if (!iframe) {

				con.style.display = "block";
				con.innerHTML = '<iframe class="os-frame" src="' + path + '"   name="os-frame" id="os-frame" allow="fullscreen *"></iframe>';
				iframe = <HTMLFrameElement>con.firstChild;
			}
			iframe.src = path;

			let btn: HTMLElement = MUI.Element.stringToElement('<button id="closeBtn">✕</button>')
			con.appendChild(btn);
			// let btn = document.getElementById("closeBtn");
			btn.addEventListener("click", f1);
			function f1(e) {
				h5OS.closeApp();
				btn.removeEventListener("click", f1);
			}

			return iframe

		}
		/**
		 * close App
		 */
		public static closeApp(): void {
			let iframe: HTMLFrameElement = (document.getElementsByClassName("os-frame").length > 0) ? <HTMLFrameElement>document.getElementsByClassName("os-frame")[0] : null;
			if (iframe) {
				iframe.remove();
			}
			let con: HTMLDivElement = <HTMLDivElement>document.getElementById("os-frame-con");
			con.style.display = "none";
		}
		/**
		 * 
		 */
		public static checkAppList() {

		}

		public static installApp(app: api.App, bf: Function = null) {
			app.isLoading = true;
			A2H5.installApp({ hashId: app.hashId, sourceId: app.sourceId }, (res, code) => {
				res = JSON.parse(res);
				utils.T.trace("installApp=", res, res.code)
				if (bf) {
					bf(res);
				}


			})
		}

		private static initProvider() {
			if (!h5OS.cloverProvider) {
				h5OS.cloverProvider = new window["ethers"].providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");
				h5OS.cloverContract = new window["ethers"].Contract("0x68537B8873b9068e001fd1757Ef4FDADB08f978A", h5OS.cloverABI, h5OS.cloverProvider);
			}
		}

		public static async getAppList() {
			h5OS.initProvider();
			return await h5OS.cloverContract.functions.getProjects(0, 100);
		}

		public static async uninstallApp(app: api.App) {

			let data = await A2H5.uninstall(app.hashId)
			return data;
		}

		public static upApp(): void {

		}


	}
}
class IPFS {

	public static O: any;

	public static init() {
		if (!IPFS.O) {
			//<script src="https://cdn.jsdelivr.net/npm/ipfs-http-client@48.1.1/dist/index.min.js"></script>
			IPFS.O = window["IpfsHttpClient"]({
				host: "18.138.102.196",
				port: "5002",
				protocol: "http",
			});
		}
	}
	public static async getSource(hash, type:string="img") {
		IPFS.init();
		let arr = []
		let content = IPFS.O.cat(hash);
		for await (let x of content) {
			arr.push(x);
		}
		// console.log("getSource", arr.toString().split(","), content)
		if (type == "img") {
			return window.URL.createObjectURL(new Blob(arr));
		}else if(type = "txt"){
			return String.fromCharCode.apply( null ,arr.toString().split(","));
		}
		return arr;
	}



}
module api {
	export class OSInterface {

		/**
		 * check list
		 */
		public static getAppList(): any {
			return
		}

		/**
		 * 
		 */
		public static searchApp(key: string = ""): App[] {
			return []
		}

	}
}
module api {
	export class OSWallet {

		public static app;		//Vue

		public static config: any = {
			// url: "https://bsc-dataseed.binance.org",
			url: "https://mainnet.infura.io/v3/0e47785118b2494092b1a9a9b576c2bd",
			privateKey: ""
		}

		/**
		 * show sign-ui
		 * @param parameters sign-message {title:"",content:""}
		 * @param callBack(value)  1(agree) 0(no)
		 * use -- window.parent.api.OSWallet.showSignUI(parameters,paramecallBack)
		 */
		public static showSignUI(parameters: any, callBack: Function): void {
			utils.T.trace("showSignUI", parameters);
			window["OSApp"].showSignUI(parameters, callBack);
		}

		/**
		 * 
		 */
		public static getWalletConfig(): any {
			return OSWallet.config
			// {
			// 	url: "https://bsc-dataseed.binance.org",
			// 	privateKey: ""
			// };
		}

		/**
		 *
		 */
		public static getBalance(address: string, token: string): number {

			return 0.001;
		}
	}
}
module utils {
	/**
 * 输出语句
 * @author middear
 *
 */

	export class T {

		public static isoutput = false;
		public static woyaoAlert = false;
		public static log = true;

		public static isUpToWeb:boolean = false;
		public static isSendToNative:boolean = false;
		public constructor() {
		}
		/**
		 * 
		 */
		public static trace(message?: any, ...optionalParams: any[]): void {
			if (this.log) console.log(message, ...optionalParams);
			if (this.woyaoAlert) {
				if (optionalParams) {
					alert(message + JSON.stringify(optionalParams));
				} else {
					alert(message + "");
				}
			}

		}
		/**
		 * 
		 */
		public static output(value): void {
			alert(value)
		}
	}
}

