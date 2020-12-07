class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    img: MUI.Image;

    constructor(element: HTMLElement) {
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
            created: async function () {
                window["jumpWeb"] = api.h5OS.jumpWeb;
                setTimeout(() => {
                    this.apploading = false;
                    this.appList = [
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

                // this.initLocAppList();

                // this.initAppSearchList();

                let se = await api.A2H5.checkServe();
                utils.T.trace("serve-data", JSON.stringify(se))
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
                    this.showConfirm({ title: "开发", content: "555" }, res => console.log);
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
                            if (res.code == 203) {      //更新完成
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
                    if (this.loginTxt != "Login") {
                        title = "Change private key.";
                    }

                    this.$prompt(title, 'private Key', {
                        confirmButtonText: 'Confirm',
                        cancelButtonText: 'Cancel',
                        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        // inputErrorMessage: '邮箱格式不正确'
                    }).then(({ value }) => {
                        // utils.T.trace("privateKey=", value);
                        api.OSWallet.config.privateKey = value;
                        window["ethereum"] = new Ethereum(api.OSWallet.getWalletConfig());
                        utils.T.trace("ethereum.selectedAddress=", window["ethereum"].selectedAddress);
                        this.loginTxt = window["ethereum"].selectedAddress.slice(0, 4) + "****" + window["ethereum"].selectedAddress.slice(-4);
                        api.OSWallet.config.privateKey = ""

                    }).catch((e) => {
                        utils.T.trace("privateKey= cancel", e)
                    });





                },
                /**
                 * 初始化本地app列表
                 */
                initLocAppList: async function () {
                    let list = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
                    list.map(async (item, index) => {

                        this.appList.push(new api.App(item, true));
                        // let res = await api.A2H5.checkApp(item.hashId);
                        // if (res.code == 901) {
                        //     this.appList.push(new api.App(item, true));
                        // } else {  //902

                        // }
                    })

                    this.apploading = false;
                    // window.localStorage.removeItem("appList");
                },
                /**
                 * 初始化app商城
                 */
                initAppSearchList: function () {
                    this.searchList = [];
                    let appdata = {
                        version: "1.0",
                        AppName: "burgerswap",
                        AppId: "123456",
                        hashId: "123",
                        iconHash: "Qmf758xninzgxk4botXjo65FNPerC1RGeyS9D1kz3LHefc",
                        sourceId: "QmbtLFbBQFbTnNAhWMpWtA7rn76r45HWZ1gH1wrUo9dhap",
                        AppContentHash: "QmTbMFLz6StEZ4ZJcaJcFTU5TrZTatHNbihbzaYScK7nM3"
                    }
                    let app: api.App;

                    // let res = await api.A2H5.checkApp(appdata.hashId);
                    let id = 0;
                    let b = this.appList.some((item, index) => {
                        let a = item.hashId == appdata.hashId;
                        if (a) id = index;
                        return a
                    })

                    if (b) {
                        app = this.appList[id];
                    } else {
                        app = new api.App(appdata)
                    }

                    this.searchList.push(app)
                },
                /**
                 * 删除App
                 */
                removeApp: function (app: api.App) {

                },

                showConfirm: function (param: any, callback: Function = null) {

                    this.$confirm(param.content, param.title, {
                        confirmButtonText: 'sure',
                        cancelButtonText: 'cancel',
                        distinguishCancelAndClose: true,
                    }).then((a) => {


                        utils.T.trace("callback-1---", param.title, a)
                        if (callback) callback(1);
                    }).catch((a) => {
                        utils.T.trace("callback-0---", param.title, callback, a);
                        if (callback) callback(0);
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
                openApp: async function (e, item) {
                    utils.T.trace("click", e, item);

                    let iframe: HTMLFrameElement = api.h5OS.openApp(item.openUrl);

                    // api.h5OS.addScript(iframe, "../ZHHHDe4b7mDK2F9PeK/plugin.js")
                    // api.h5OS.addScript2(iframe, 'var t=setInterval(()=>{if(window.parent["ethereumHelper"]){window["ethereumHelper"]=window.parent["ethereumHelper"];window["ethereum"]=window.parent["ethereum"];console.log("-----plugin injected-------");clearInterval(t)}else{console.log("-------wait to aaa--------")}},250);');
                    // api.h5OS.addScript2(iframe, 'console.log("plu")');
                    // api.h5OS.addScript2(iframe, 'console.log("parent",window.parent)');
                    // api.h5OS.addScript2(iframe, 'console.log("ethereumHelper",window.parent["ethereumHelper"])');

                    api.h5OS.addScript2(iframe, 'window["ethereumHelper"]=window.parent["ethereumHelper"];');
                    api.h5OS.addScript2(iframe, 'window["ethereum"]=window.parent["ethereum"];');
                    api.h5OS.addScript2(iframe, 'window.open = (pageURL,name,parameters)=>{window.location.href=pageURL;};');


                    // let aa = await api.A2H5.copy("大西瓜");
                    // utils.T.trace("aa=" + JSON.stringify(aa))
                },
                downApp: function (e, item: api.App) {    //安装App
                    // utils.T.trace("item=",item)
                    if (!item.isDown) {     //down
                        // item.isLoading = true;

                        // setTimeout(() => {
                        //     item.isDown = true;
                        //     item.isLoading = false;
                        //     item.btn = "Open";
                        //     this.appList.push(item);
                        // }, 3500);
                        api.h5OS.installApp(item, (res) => {
                            if (res.code == 203) {      //安装完成
                                item.openUrl = res.data.openUrl;
                                item.isDown = true;
                                item.isLoading = false;
                                item.btn = "Open";
                                item.save();
                                this.appList.push(item);
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

    // start() {
    //     this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    // }

    // stop() {
    //     clearTimeout(this.timerToken);
    // }

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
		this.searchUI = new SearchUI(this.ele);
		
		//banner
		this.bannerUI = MUI.Element.stringToElement('<el-image v-if="!showSearch" style="width: 100%; height: 45vw; margin:1em 0;border-radius: 4px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)":src="bannerImg" fit="cover"></el-image>');
		this.appendChild(this.bannerUI);

		let upContent = MUI.Element.stringToElement('<div><el-button v-loading="upOSLoading"  size="mini" @click="upOS">UpOS</el-button> <span>{{upOSLoadContent}}</span> </div>');
		this.appendChild(upContent);

		this.myApp = new MyApp(this.ele);
		this.searchAPPListUI = new searchList(this.ele);

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
		 * 类型
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
     * Element 元素 基类
     */
    export class Element {
        public ele: HTMLElement;
        public parent: HTMLElement;

        public content: any;
        protected _text: string;

        /**
         * 放入的容器 parent
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
		let dev:HTMLDivElement = <HTMLDivElement>MUI.Element.stringToElement('<div class="AppItemTextPane"><span class="p1">坑多多</span><span class="p2">价格随你，亏本也要卖</span></div>');
		this.appendChild(img);
		this.appendChild(dev);
		img["src"] = this.data.icon;

		
		
		let btn = new ELE.Button(this.ele,null,"更新",null,'(e)=>{click(e,"appitem")}');
		btn.setAttr({size:"mini"});
		let btn2 = new ELE.Button(this.ele,"success","打开",null,'(e)=>{click(e,"appitem")}');
		btn2.setAttr({size:"mini"});
		

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
		let p = new MUI.P(this.ele,"My App");

		let applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in appList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="cover"></el-image><div class="AppItemTextPane"><span class="p1">{{item.AppName}}</span><span class="p2">{{item.AppContent}}</span></div></div><div><el-button v-if="item.isUpdata"  size="mini">Updata</el-button><el-button @click="(e)=>{uninstallApp(e,item)}" size="mini" type="success">Del</el-button><el-button @click="(e)=>{openApp(e,item)}" size="mini" type="success">Open</el-button></div></div>');
		
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
		let span = new MUI.Span(dev1.ele, "Search");
		let loginBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="initWallte" icon="el-icon-user"  >{{loginTxt}}</el-button>');
		dev1.appendChild(loginBtn);

		let wallteBtn = MUI.Element.stringToElement('<el-button type="success" size="mini" @click="showWallte" icon="el-icon-wallet"  >{{version}}</el-button>');
		dev1.appendChild(wallteBtn);

		let btn1 = MUI.Element.stringToElement('<el-button v-if="showClearSearch"  size="mini" @click="clearSearch"  round>Clear</el-button>');
		dev1.appendChild(btn1);
		let dev = new MUI.Div(this.ele);
		let input = MUI.Element.stringToElement('<el-input placeholder="search APP" v-model="searchData"><i slot="prefix"class="el-input__icon el-icon-search"></i></el-input>');

		let btn = MUI.Element.stringToElement('<el-button type="primary" size="mini" @click="searchApp" slot="append" round>Search</el-button>');
		dev.appendChild(input);
		// input.appendChild(btn1);
		input.appendChild(btn);
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
		let applist = MUI.Element.stringToElement('<div class="AppItem border" v-for="(item,index) in curSearchList"><div class="pane1"><el-image class="AppItemIcon" :src="item.icon" fit="cover"></el-image><div class="AppItemTextPane"><span class="p1">{{item.AppName}}</span><span class="p2">{{item.AppContent}}</span></div></div><div><el-button v-if="item.isUpdata"  size="small">Updata</el-button><el-button v-loading="item.isLoading" @click="(e)=>{downApp(e,item)}" size="small" type="success">{{item.btn}}</el-button></div></div>');
		
		let dev = new MUI.Div(this.ele);
		// let app = new AppItem(dev.ele,{});

		dev.appendChild(applist);

	}
}
module utils {
	export class load {

		public static jqUrl: string = "https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js";
		public constructor() {
		}


		public static addJQ(bf): void {
			utils.load.loadScript(load.jqUrl, function () {
				console.log("JQ 加载成功")
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

	public static post(path, data, backfunc,time:number=10000) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.open('POST', path, true);
		httpRequest.timeout = time||RequestMethod.timeout;
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
		} catch (error) {
			utils.T.trace("post-data-error=", error);
		}
	

		var issent = false;
		httpRequest.onload = function () {
			if (issent) return;
			issent = true;
			var json = httpRequest.responseText;		 		//获取到服务端返回的数据
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
				// 状态码
				// console.log(XMLHttpRequest.status);
				// 状态
				// console.log(XMLHttpRequest.readyState);
				// 错误信息
				//                    console.log(textStatus, errorThrown, "aaaaaaaa", aa);
				// if (backfunction) backfunction(0, JSON.stringify({ code: 0, message: Global.promptMessage.network }));
			},
		}
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
		} catch (error) {
			utils.T.trace("post-data-error=", error);
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
		 * 输出语句
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
		 * 弹出提示面板
		 */
		public static output(value): void {
			alert(value)
		}
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
		 * App 名称
		 */
		public AppName: string;
		/**
		 * App 描述内容
		 */
		public AppContent: string;

		/**
		 * App 描述内容 hash 地址
		 */
		public AppContentHash: string;
		/**
		 * App ID
		 */
		public AppId: string;
		/**
		 * App 启动ID号
		 */
		public hashId: string;

		/**
		 * App zip hash 地址
		 */
		public sourceId: string;

		/**
		 * App 图标
		 */
		public icon: string;

		/**
		 * App 图标
		 */
		public iconHash: string;

		/**
		 * App 版本号
		 */
		public version: string;

		/**
		 * App 启动路径
		 */
		public path: string;

		/**
		 * App 下载更新地址
		 */
		public downUrl: string;
		/**
		 * App 打开地址
		 */
		public openUrl: string;

		/**
		 * App 类型
		 */
		public type: string;

		/**
		 * App 大小
		 */
		public size: number; //MB
		/**
		 * App 是否可以更新
		 */
		public isUpdata: boolean = false;
		/**
		 * 是否下载
		 */
		public isDown: boolean = false;

		/**
		 * 是否正在下载
		 */
		public isLoading: boolean = false;
		/**
		 * btn 内容
		 */
		public btn: string = "Install";

		/**
		 * 是否更新icon
		 */
		private resetIcon: boolean = false;
		public constructor(data: any = null, resetIcon: boolean = false) {
			if (data) {
				for (let key in data) {
					this[key] = data[key];
				}
			}
			this.resetIcon = resetIcon;
			this.init();
		}
		/**
		 * 保存到本地
		 */
		public save() {

			let appList = window.localStorage.getItem("appList") ? JSON.parse(window.localStorage.getItem("appList")) : [];
			//是否存在相同app
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
				this.AppContent = "";
				this.AppContent = await IPFS.getSource(this.AppContentHash, "txt");

			}

			utils.T.trace("app=", this);

			return false;
		}
	}
}
module api {
	export class A2H5 {
		//  a.1 宿主App 提供的API(A2H5)
		// 1. methond:
		//     获取 uuid ;获取 裁剪板;复制文本到裁剪版;
		//     获取设备相关信息;打开其他app;打开web;
		//     获取用户手机型号以及系统版本; 通知消息传递;人脸识别

		// 公用code (4) 参数错误


		/**
		 * 向原生发送请求方法
		 */
		public static sentReQuest: Function;

		/**
		 * 系统类型
		 */
		public static os: string = "android"	//iOS android



		public static getCallbackName(): string {
			var ramdom = parseInt(Math.random() * 100000 + "");
			return 'h5os_callback_' + new Date().getTime() + ramdom;
		}

		public static initWindowEvent(): void {
			window.addEventListener("message", (e) => {
				// e = window.event || arguments[0];
				var data = JSON.parse(e.data);
				console.log('我是父页面，这是子页面发送的数据：' + data);
				console.log(data.text)
				console.log('-------------------')
			}, false)
			// window.frames[0].postMessage(JSON.stringify(sendData),'http://192.168.100.40:4200/page2/index.html');//数据发送

			// window.parent.postMessage(JSON.stringify(sendData),'http://192.168.100.40:4100/page1/index.html');//数据发送
		}

		public static isConnected() {
			return !!(window["cloverOSBridge"] || (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.getDeviceId));
		}

		public static post(methondName, parameters, callBack) {
			// if (A2H5.isConnected()) {
			// 	A2H5.sentReQuest(methondName, parameters, callBack)
			// } else {

			// }
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
		 * 安装App  method= "installApp" params={hashId,sourceId}
		 * @param params {hashId,sourceId}
		 * @param bf.code(1,2,3) 回调 bf({code,message,data}) code：101(下载中); 102(下载完成);103(下载失败);//    201(安装中);202(安装失败);203(安装成功);
		 */
		public static installApp(params, bf) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("installApp-result=", result)
					if (bf) bf(result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 卸载App  method= "uninstall" 
		 * @param hashId params={hashId}
		 * code(5) 501(卸载成功)  502（卸载失败） 503（没有找到)
		 * return {code,data,message}  
		 */
		public static uninstall(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("uninstall-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 获取手机UUID  method= "getUUID" 
		 * @param params {uuid:"uuid"}
		 * @param bf.code(6) 回调 bf({code,message,data}) code：601(获取成功); 602(获取失败);
		 */
		public static getUUID() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					//去除空格和换行
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
		 * 复制文本到裁剪版  method= "copy" 
		 * @param params {value}
		 * @param bf.code(7) 回调 bf({code,message,data}) code：701(复制成功); 702(复制失败);
		 */
		public static copy(value: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("copy - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 获取裁剪版内容  method= "getClipboard" 
		 * @param params {clipboard:"txt"}
		 * @param bf.code(8) 回调 bf({code,message,data}) code：801(获取裁剪版 成功); 802(获取裁剪版 失败);
		 */
		public static getClipboard() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("getClipboard - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 检查App是否存在  method= "checkApp" 
		 * @param hashId params={hashId}
		 * code(9) 901(存在)  902（否） 
		 * return {code,data,message}  
		 */
		public static checkApp(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkApp-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 检查serve 是否启动  method= "checkServe" 
		 * @param hashId params={serve:"serve"}
		 * code(10) 1001(启动)  1002（否） 
		 * return {code,data,message}  
		 */
		public static checkServe() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkServe-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 使用默认浏览器打开网页  method= "openBrowserPage" 
		 * @param path params={path}
		 * code(11) 1101(启动成功)  1102（启动失败） 
		 * return {code,data,message}  
		 */
		public static openBrowserPage(path: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("openBrowserPage-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 重启cloverOS  method= "OSRestart" 
		 * @param  params={OSRestart:"OSRestart"}
		 * code(12) 1201(启动成功)  1202（启动失败） 
		 * return {code,data,message}  
		 */
		public static OSRestart() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("OSRestart-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					//去除空格和换行
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
		 * 获取 裁剪板 内容
		 */
		public static getCutBoardContent(): string {
			return ""
		}

		/**
		 * 复制文本到裁剪版;
		 */
		public static copyContent(content: string): void {

		}

		/**
		 * 获取设备相关信息;
		 */
		public static getDiviceMessage(): string {
			return ""
		}

		/**
		 * 打开web;
		 */
		public static openWeb(url: string): void {

		}

		/**
		 * 人脸识别;
		 */
		public static GFace(appID: string): void {

		}
		/**
		 * 获取用户手机型号以及系统版本;
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
module api {
	export class h5OS {

		public static appHashId:string = "ZHHHDe4b7mDK2F9PeK";
		public static version:string = "1.0";


		public showAppList(): void {

		}

		/**
		 * 跳转外部链接 jumpWeb
		 * @param params 跳转链接 JSON string  {code,message,data} data:"http://127.0.0.1"
		 */
		public static async jumpWeb(params:string){
			let data:any = JSON.parse(params);
			// h5OS.openApp(data.data);

			//使用默认浏览器打开网页
			let res = await A2H5.openBrowserPage(data.data);
			utils.T.trace("jumpWeb-res=",JSON.stringify(res))
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
		 * OS 重启
		 */
		public static async OSRestart(){
			// window.location.reload();

			let res = await A2H5.OSRestart();
			utils.T.trace("OSRestart-res=",JSON.stringify(res));
		}

		/**
		 * iframe class -- "os-frame";container id -- "os-frame-con"
		 * @param path webApp 路径
		 */
		public static openApp(path): HTMLFrameElement {
			utils.T.trace("openApp-url=",path)
			//每次需要时创建一个Iframe
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
		 * 关闭App
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
		 * 查询本地App 列表
		 */
		public static checkAppList() {

		}

		public static installApp(app: api.App,bf:Function=null) {
			app.isLoading = true;
			A2H5.installApp({ hashId: app.hashId, sourceId: app.sourceId }, (res, code) => {
				res = JSON.parse(res);
				utils.T.trace("installApp=", res, res.code)
				if(bf){
					bf(res);
				}

				
			})
		}

		public static async uninstallApp(app: api.App) {
			
			let data = await A2H5.uninstall(app.hashId)
			return data;
		}

		public static upApp(): void {

		}


	}
}
module api {
	export class OSInterface {

		/**
		 * 查询线上APP列表
		 */
		public static getAppList(): any {
			return
		}

		/**
		 * 查找APP
		 */
		public static searchApp(key: string = ""): App[] {
			return []
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
	export class OSWallet {

		public static app;		//Vue

		public static config: any = {
			url: "https://bsc-dataseed.binance.org",
			privateKey: ""
		}

		/**
		 * 显示签名弹框UI
		 * @param parameters 签名的描述信息 {title:"",content:""}
		 * @param callBack(value)  1(同意) 0(不同意)
		 * use -- window.parent.api.OSWallet.showSignUI(parameters,paramecallBack)
		 */
		public static showSignUI(parameters: any, callBack: Function): void {
			utils.T.trace("showSignUI", parameters);

			parameters.content = "from: " + parameters.from;
			parameters.content += " gas: " + parameters.gas;
			parameters.content += " gasPrice: " + parameters.gasPrice;
			parameters.content += " to: " + parameters.to;
			parameters.content += " value: " + parameters.value;
			parameters.title = "transfer:"

			window["OSApp"].showConfirm(parameters, (value) => {
				console.log("value==", value);
				if (callBack) callBack(value)
			})
		}

		/**
		 * 获取当前钱包账号信息
		 */
		public static getWalletConfig(): any {
			return OSWallet.config
			// {
			// 	url: "https://bsc-dataseed.binance.org",
			// 	privateKey: "CB57FD8DB3F908F089D7720C78E4C77765BDBC84503AAA784ED90EDE267164C5"
			// };
		}

		/**
		 * 查询Token 余额
		 */
		public static getBalance(address: string, token: string): number {

			return 0.001;
		}
	}
}
