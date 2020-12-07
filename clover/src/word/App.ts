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