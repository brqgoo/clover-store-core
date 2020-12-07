
module MUI {
	/**
	 * Span
	 */
	export class Span extends Element{
		// public ele: HTMLSpanElement;
		public constructor(parent:HTMLElement=null,text:string=null) {
			super(parent);
			this._text = text;
			this.init();
		}

		public init():void{
			this.ele = document.createElement("span");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
			if(this.text){
				this.text = this._text;
			}
		}

		// public set text(text:string){
        //     this._text = text;
        //     this.ele.textContent = text;
        // }

		
	}
}