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