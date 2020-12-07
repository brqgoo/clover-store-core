
module MUI {
	/**
	 * Button
	 */
	export class Button extends Element{
		public ele: HTMLButtonElement;
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("button");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}
		
	}
}