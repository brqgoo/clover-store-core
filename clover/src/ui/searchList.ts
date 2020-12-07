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