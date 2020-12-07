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