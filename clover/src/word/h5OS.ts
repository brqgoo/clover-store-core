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