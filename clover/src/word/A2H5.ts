module api {
	export class A2H5 {
	


		/**
		 * sentReQuest
		 */
		public static sentReQuest: Function;

		/**
		 * os
		 */
		public static os: string = "android"	//iOS android



		public static getCallbackName(): string {
			var ramdom = parseInt(Math.random() * 100000 + "");
			return 'h5os_callback_' + new Date().getTime() + ramdom;
		}

		public static initWindowEvent(): void {
			window.addEventListener("message", (e) => {
				var data = JSON.parse(e.data);
			}, false)
		}

		public static isConnected() {
			return !!(window["cloverOSBridge"] || (window["webkit"] && window["webkit"].messageHandlers && window["webkit"].messageHandlers.getDeviceId));
		}

		public static post(methondName, parameters, callBack) {
			A2H5.initRequst();
			A2H5.sentReQuest(methondName, parameters, callBack);
		}

		public static initRequst() {
			if (A2H5.os == "iOS") {
				A2H5.sentReQuest = function (methondName, parameters, callBack) {
					if (!utils.T.isSendToNative) utils.T.trace("sendToNative-IOS" + " -methondName=" + methondName + " -parameters=" + parameters);
					if (!window["webkit"] || !window["webkit"].messageHandlers || !window["webkit"].messageHandlers.sendToNative) {
						utils.T.trace("sendToNative-iOS---》No docking app! ", methondName);
					} else {
						window["webkit"].messageHandlers.sendToNative.postMessage(methondName, parameters, callBack);
					}
				}

			} else {
				A2H5.sentReQuest = function (methondName, parameters, callBack) {
					if (!utils.T.isSendToNative) utils.T.trace("sendToNative-android" + " -methondName=" + methondName + " -parameters=" + parameters);
					if (!window["cloverOSBridge"]) {
						utils.T.trace("sendToNative-android---》No docking app! ");
						return;
					}
					else {
						window["cloverOSBridge"].callMessage(methondName, parameters, callBack);
					}
				}
			}
		}





		/**
		 * install App  method= "installApp" params={hashId,sourceId}
		 * @param params {hashId,sourceId}
		 * @param bf.code(1,2,3) callback bf({code,message,data}) code：101(downing); 102(downed);103(down err);//    201(install...);202(install err);203(install successs);
		 */
		public static installApp(params, bf) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("installApp-result=", result)
					if (bf) bf(result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('installApp', JSON.stringify(params), h5OSCallbackFun);
			});
		}

		public static openApp() {

		}
		/**
		 * uninstall  method= "uninstall" 
		 * @param hashId params={hashId}
		 * code(5) 501(uninstall success)  502（uninstall err） 503（not find)
		 * return {code,data,message}  
		 */
		public static uninstall(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("uninstall-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('uninstall', JSON.stringify({ hashId }), h5OSCallbackFun);
			});
		}

		/**
		 * get UUID  method= "getUUID" 
		 * @param params {uuid:"uuid"}
		 * @param bf.code(6) callback bf({code,message,data}) code：601(success); 602(err);
		 */
		public static getUUID() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						var data = res.qrResult || '';
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('getUUID', JSON.stringify({ uuid: "uuid" }), h5OSCallbackFun);

			});
		}

		/**
		 * copy  method= "copy" 
		 * @param params {value}
		 * @param bf.code(7) callback bf({code,message,data}) code：701(success); 702(err);
		 */
		public static copy(value: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("copy - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('copy', JSON.stringify({ value }), h5OSCallbackFun);
			});
		}
		/**
		 * getClipboard  method= "getClipboard" 
		 * @param params {clipboard:"txt"}
		 * @param bf.code(8) callback bf({code,message,data}) code：801(success); 802(err);
		 */
		public static getClipboard() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("getClipboard - result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('getClipboard', JSON.stringify({ clipboard: "txt" }), h5OSCallbackFun);
			});
		}

		/**
		 * checkApp  method= "checkApp" 
		 * @param hashId params={hashId}
		 * code(9) 901(true)  902（false） 
		 * return {code,data,message}  
		 */
		public static checkApp(hashId: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkApp-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('checkApp', JSON.stringify({ hashId }), h5OSCallbackFun);
			});
		}

		/**
		 * checkServe  method= "checkServe" 
		 * @param hashId params={serve:"serve"}
		 * code(10) 1001(true)  1002（false） 
		 * return {code,data,message}  
		 */
		public static checkServe() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("checkServe-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('checkServe', JSON.stringify({ serve: "serve" }), h5OSCallbackFun);
			});
		}

		/**
		 * openBrowserPage  method= "openBrowserPage" 
		 * @param path params={path}
		 * code(11) 1101(success)  1102（err） 
		 * return {code,data,message}  
		 */
		public static openBrowserPage(path: string) {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("openBrowserPage-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('openBrowserPage', JSON.stringify({ path }), h5OSCallbackFun);
			});
		}
		/**
		 * OSRestart  method= "OSRestart" 
		 * @param  params={OSRestart:"OSRestart"}
		 * code(12) 1201(true)  1202（false） 
		 * return {code,data,message}  
		 */
		public static OSRestart() {
			return new window["Promise"](function (resolve, reject) {
				var h5OSCallbackFun = A2H5.getCallbackName();

				window[h5OSCallbackFun] = function (result) {
					utils.T.trace("OSRestart-result=", result)
					// utils.T.trace("result obj=",JSON.parse(result))
					// utils.T.trace("result obj query=",JSON.parse(result).query)
					// result = result.replace(/\r/ig, "").replace(/\n/ig, "");
					try {
						var res = JSON.parse(result);
						resolve(res);
					} catch (e) {
						reject(e);
					}
				}

				A2H5.post('OSRestart', JSON.stringify({ OSRestart: "OSRestart" }), h5OSCallbackFun);
			});
		}




		/**
		 * getCutBoardContent
		 */
		public static getCutBoardContent(): string {
			return ""
		}

		/**
		 * copyContent;
		 */
		public static copyContent(content: string): void {

		}

		/**
		 * getDiviceMessage;
		 */
		public static getDiviceMessage(): string {
			return ""
		}

		/**
		 * openWeb;
		 */
		public static openWeb(url: string): void {

		}

		/**
		 * GFace;
		 */
		public static GFace(appID: string): void {

		}
		/**
		 * getPhoneModel;
		 */
		public static getPhoneModel(): string {
			return ""
		}


		// Events

		public backPage(): void {

			let ele: HTMLElement;
			ele.dispatchEvent(new CustomEvent("backPage"));
			ele.addEventListener("backPage", () => { })
		}

		public closeKeyboard(): void {

			let ele: HTMLElement;
			ele.dispatchEvent(new CustomEvent("closeKeyboard"));
			ele.addEventListener("closeKeyboard", () => { })
		}
	}
}