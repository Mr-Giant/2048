module game {
    /**
     * 方向
     */
    export enum Direction {
        /**
         * 上
         */
        up = 1,
        /**
         * 下
         */
        down = 2,

        /**
         * 左
         */
        left = 3,
        /**
         * 右
         */
        right = 4
    }
    /**
     * 监听上下左右
     */
    export class Monitor extends game.EuiPanel {
        private beginX: number;
        private beginY: number;
        constructor() {
            super();
        }
        public addUIListener() {
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        }
        public removeUIListener() {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        }

        /**
         * 开始监听
         */
        private touchBegin(e: egret.TouchEvent) {
            this.beginX = e.stageX;
            this.beginY = e.stageY;
        }
        /**
         * 监听结束
         */
        private touchEnd(e: egret.TouchEvent) {
            let endY = Math.abs(this.beginY - e.stageY);
            let endX = Math.abs(this.beginX - e.stageX);
            if (endY == 0 && endX == 0) {
                return;
            }
            let lengthY = e.stageY - this.beginY; // >0下  <0上
            let lengthX = e.stageX - this.beginX; // >0右  <0左
            // 上下左右
            if (endY > endX) { //上下
                if (lengthY > 0) {
                    this.change(Direction.down);
                }
                else {
                    this.change(Direction.up);
                }
            }
            else {
                if (lengthX > 0) {
                    this.change(Direction.right)
                }
                else {
                    this.change(Direction.left)
                }
            }
        }

        /**
         * 动作接口 
         */
        protected change(direction: Direction) {

        }
    }
}