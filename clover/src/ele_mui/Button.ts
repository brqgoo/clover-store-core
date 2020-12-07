module ELE {
    /**
	 * ele Button
	 */
	export class Button extends MUI.Element {
		public ele: HTMLButtonElement;
		public icon: string;
		private onClick:any;
		/**
		 * type
		 * primary / success / warning / danger / info / text
		 */
		public type: string;
		public attributs: any;
		/**
		 * onClick  "f5/f5(1)"
		 */
		public constructor(parent: HTMLElement = null, type: string = null, text: string = null, icon: string = null,onClick:any=null, ele: HTMLButtonElement = null) {
			super(parent, ele);
			this.type = type;
			this._text = text;
			this.icon = icon;
			this.onClick = onClick;

			this.init();
		}


		public init(): void {
			if (!this.ele) {
				let funcString:string = "";
				if(this.onClick){
					funcString = "@click='"+this.onClick+"'";
				}
				this.ele = <HTMLButtonElement> MUI.Element.stringToElement("<el-button "+funcString+"></el-button>");
				
			}
			utils.T.trace("ele=",this.ele,this.onClick)
			
			if (this.text) {
				this.text = this._text;
			}
			if (this.type) {
				this.setAttribute("type", this.type);
			}
			if (this.icon) {
				this.setAttribute("icon", this.icon);
			}

			if (this.parent) {
				this.parent.appendChild(this.ele);
			}
		}

		public setAttr(attributs): void {
			this.attributs = attributs || this.attributs;
			if (this.attributs) {
				for (let key in this.attributs) {
					this[key] = this.attributs[key];
					this.setAttribute(key, this[key]);
				}
			}
		}

	}
}