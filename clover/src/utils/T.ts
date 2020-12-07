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
		 * 
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
		 * 
		 */
		public static output(value): void {
			alert(value)
		}
	}
}
