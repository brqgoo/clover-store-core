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