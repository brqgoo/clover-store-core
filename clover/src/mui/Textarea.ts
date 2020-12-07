module MUI {
	/**
	 * Textarea
	 */
	export class Textarea extends Element {
		public ele:HTMLTextAreaElement;
		public _value: any;

		public constructor(parent: HTMLElement = null, text: string = null, _value: any = null) {
			super(parent);
			this._text = text;
			this._value = _value;
			this.init();
		}

		public init(): void {
			this.ele = document.createElement("textarea");
			if (this.parent) {
				this.parent.appendChild(this.ele);
			}
			if (this._text) {
				this.placeholder = this._text;
			}
			if (this._value) {
				this.value = this._value;
			}
		}

		public set placeholder(text: string) {
			this._text = text;
			this.ele.placeholder = text;
		}

		public set value(value) {
			this.value = value;
			this._value = value;
		}

		public get value(): any {
			return this._value || "";
		}


	}
}