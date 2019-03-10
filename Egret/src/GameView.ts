module game {
    export class GameView extends game.Monitor {
        private mainGroup: eui.Group;
        private integralBoxArr: Array<IntegralBox> = [];
        private emptyArr: Array<EmptyBox> = [];
        constructor() {
            super();
            this.skinName = new GameSkin();
            this.initUI();
        }
        public addUIListener() {
            super.addUIListener();
        }
        public removeUIListener() {
            super.removeUIListener();
        }
        /**
         * 添加
         */
        private initUI() {
            for (let i = 0; i < 30; i++) {
                let group = new EmptyBox();
                group.width = 100;
                group.height = 100;
                group.name = "group" + i;
                // 設置位置
                group.lineH = Math.ceil(i / 5);
                group.lineV = i % 5;
                this.emptyArr.push(group);
                this.mainGroup.addChild(group);
            }
            for (let i = 0; i < 3; i++) {
                this.addBox();
            }
        }

        /**
         * 动作结束
         */
        protected change(direction: game.Direction) {
            // 随机添加盒子(位置随机)
            console.error(direction);
            this.boxChange(direction)
            this.addBox();
        }

        /**
         * 隨機
         */
        private addBox() {
            let imArr = this.emptyArr.filter((v) => v && !v.isEmpty);
            let num = imArr.length
            let index = Math.round(Math.random() * (num - 1));
            let box = new IntegralBox();
            imArr[index].addEmpty(box);
        }

        /**
         * 動作央視
         */
        private boxChange(a: number) {
            switch (a) {
                case game.Direction.down:
                case game.Direction.up:
                    for (let i of [0, 1, 2, 3, 4]) {
                        let boxArr = this.emptyArr.filter((v: EmptyBox) => v.lineV == i);
                        boxArr.sort((a, b) => b.lineH - a.lineH)
                        let integralArr: Array<IntegralBox> = [];
                        for (let box of boxArr) {
                            // 獲取到所有box
                            if (box.box) {
                                integralArr.push(box.box);
                            }
                            box.remove();
                        }
                        if (integralArr instanceof Array && integralArr.length > 0) {
                            for (let j = 0; j < (integralArr.length - 1); j++) {
                                boxArr[j].addEmpty(integralArr[j]);
                            }
                        }
                    }
                    break;
                case game.Direction.right:
                    break;
                case game.Direction.left:
                    break;
            }
        }
    }
}