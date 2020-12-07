
module MUI {
	/**
	 * p
	 */
	export class P extends Element{
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("P");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}


		
	}
}