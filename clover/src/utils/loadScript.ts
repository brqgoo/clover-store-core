module utils {
	export class load {

		public static jqUrl: string = "https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js";
		public constructor() {
		}


		public static addJQ(bf): void {
			utils.load.loadScript(load.jqUrl, function () {
				if(bf)bf();
			})
		}



		public static loadScripts = function (list, callback) {
			var loaded = 0;
			var loadNext = function () {
				utils.load.loadScript(list[loaded], function () {
					loaded++;
					if (loaded >= list.length) {
						callback();
					}
					else {
						loadNext();
					}
				})
			};
			loadNext();
		};

		public static loadScript = function (src, callback) {
			var s = document.createElement('script');
			s.async = false;
			s.src = src;
			s.addEventListener('load', function () {
				s.parentNode.removeChild(s);
				s.removeEventListener('load', <EventListenerOrEventListenerObject>arguments.callee, false);
				callback();
			}, false);
			document.body.appendChild(s);
		};

	}
}