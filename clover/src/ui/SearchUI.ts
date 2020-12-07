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