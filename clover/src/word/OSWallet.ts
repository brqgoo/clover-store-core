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