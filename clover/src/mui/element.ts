module MUI {        //Element-00
    /**
     * Element 
     */
    export class Element {
        public ele: HTMLElement;
        public parent: HTMLElement;

        public content: any;
        protected _text: string;

        /**
         * container parent
         */
        public constructor(parent: HTMLElement = null, ele: HTMLElement = null) {
            this.parent = parent;
            this.ele = ele;
        }

        public init(): void {

        }

        public static stringToElement(str): HTMLElement {
            var ele: HTMLElement;
            let con: HTMLDivElement = document.createElement("div");
            con.innerHTML = str;
            ele = <HTMLElement>con.firstChild
            con = null;
            return ele
        }

        public upData(): void {

        }
        /**
         * 更新内容/切换语言
         */
        public changeContent(value): void {

        }

        public set text(text: string) {
            this._text = text;
            this.ele.textContent = text;
        }

        public get text(): string {
            return this._text || "";
        }

        public show(parent: HTMLElement = null): void {
            if (parent) this.parent = parent;
            if (this.parent) {
                this.parent.appendChild(this.ele);
            }
        }

        public hide(): void {
            if (this.parent && this.parent.contains(this.ele)) {
                this.ele.remove();
            }
        }

        public appendChild(ele: HTMLElement): void {
            this.ele.appendChild(ele);
        }

        public setAttribute(name: string, value: string) {
            this.ele.setAttribute(name, value)
        }

        public setStyle(name: string, value: string) {
            // this.ele.setAttribute(name, value)
            this.ele.style[name] = value;
        }
        public getAttribute(name: any) {
            return this.ele.getAttribute(name)
        }

        protected addEvents(): void {

        }
        protected removeEvents(): void {

        }

        public gc(): void {
            this.removeEvents();
            this.hide();
            this.ele = null;
            this.parent = null;
            this.content = null;
        }
    }
}