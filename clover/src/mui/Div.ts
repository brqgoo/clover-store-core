module MUI {
	/**
	 * Div
	 */
	export class Div extends Element{
		public constructor(parent:HTMLElement=null,ele:HTMLElement=null) {

			super(parent,ele);
			
			this.init();
		}

		public init():void{
			if(!this.ele) this.ele = document.createElement("div");
			if(this.parent){
				this.parent.appendChild(this.ele);
			}
		}
	}
}