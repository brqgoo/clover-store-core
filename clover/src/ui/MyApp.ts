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