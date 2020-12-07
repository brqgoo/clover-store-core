class IPFS {

	public static O: any;

	public static init() {
		if (!IPFS.O) {
			//<script src="https://cdn.jsdelivr.net/npm/ipfs-http-client@48.1.1/dist/index.min.js"></script>
			IPFS.O = window["IpfsHttpClient"]({
				host: "18.138.102.196",
				port: "5002",
				protocol: "http",
			});
		}
	}
	public static async getSource(hash, type:string="img") {
		IPFS.init();
		let arr = []
		let content = IPFS.O.cat(hash);
		for await (let x of content) {
			arr.push(x);
		}
		// console.log("getSource", arr.toString().split(","), content)
		if (type == "img") {
			return window.URL.createObjectURL(new Blob(arr));
		}else if(type = "txt"){
			return String.fromCharCode.apply( null ,arr.toString().split(","));
		}
		return arr;
	}



}