module game {
    enum AddStyle {
        one = 1,
        two = 2,
        four = 4,
        eight = 8,
        sixteen = 16,
        thirty_two = 32,
        sixty_four = 64,
        one_hundred_twenty_eight = 128,
    }
    /**
     * 盒子对象
     */
    export class IntegralBox extends eui.Component {
        public boxStyle: number;

        private numLabel: eui.Label;
        private bjRect: eui.Rect;

        private set style(num: number) {
            this.boxStyle = num;
            this.numLabel.text = num + "";
            this.bjRect.fillColor = 0x123412;
        }

        constructor() {
            super();
            this.skinName = new IntegralBoxSkin();
        }
    }

    /**
     * 空盒子 
     */
    export class EmptyBox extends eui.Component {
        public box: IntegralBox;
        private mainGroup: eui.Group;
        public lineH: number;
        public lineV: number;
        public get isEmpty() {
            return this.mainGroup.numChildren > 0;
        }
        constructor() {
            super();
            this.skinName = new EmptyBoxSkin();
        }
        public addEmpty(box: IntegralBox) {
            if (box) {
                this.box = box;
                this.mainGroup.addChild(box);
            }
        }
        public remove() {
            if (this.box && this.box.parent) {
                this.box.parent.removeChild(this.box);
            }
        }
    }
}