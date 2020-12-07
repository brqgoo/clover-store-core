
module MUI {
	/**
	 * Image
	 */
	export class Image extends Element{
		public path:string;
		public constructor(parent:HTMLElement=null,path:string=null) {
			super(parent);
			this.path = path;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("img");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.path){
				this.source = this.path;
			}
		}

		public set source(path:string){
			super.changeContent(path);
			this.ele.setAttribute("src",path);
		}
	}
}