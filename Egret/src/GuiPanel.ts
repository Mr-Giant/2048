module game {
    /**
     * UI点击接口
     */
    export interface UIClickInterface {
        addUIListener(): void;
        removeUIListener(): void;
    }
    /**
     * 行为接口
     */
    export interface ActionInterface {
        addActionListener(): void;
        removeActionListener(): void;
    }
    export class PanelManage {
        public static panelList: Array<game.EuiPanel | game.GuiPanel> = [];
        public static addPanel(panel: game.EuiPanel | game.GuiPanel) {
            this.panelList.push(panel);
        }
        public static destroyPanel() {
            this.panelList = this.panelList != null && this.panelList instanceof Array ? this.panelList : [];
            for (let item of this.panelList) {
                if (item != null) {
                    item.destroy();
                }
            }
            this.panelList = [];
        }
    }
    /**
     * 适合非skinName游戏面板 并有UI点击事件或有行为特效的面板
     */
    export abstract class GuiPanel extends egret.Sprite implements UIClickInterface, ActionInterface {
        constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        }
        private onAddToStage() {
            this.addUIListener();
            this.registerLanguage();
        }
        private onRemoveFromStage() {
            this.removeUIListener();
        }
        public destroy() {
            this.removeUIListener();
            this.removeActionListener();
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
        }
        /**
        * 面板宽度适配至舞台宽度
        */
        protected adaptationWidth() { }
        /**
         * 注入多语言
         */
        protected registerLanguage() {
            this.updataLanguage();
        }
        /**
         * 子类在registerLanguage之后 语音切换之后会自动调用此方法
         */
        protected updataLanguage() {
        }

        public addActionListener(): void {

        }
        public removeActionListener(): void {

        }

        abstract addUIListener(): void;
        abstract removeUIListener(): void;
    }
    /**
     * 适合skinName游戏面板 并有UI点击事件或有行为特效的面板
     */
    export abstract class EuiPanel extends eui.Component implements UIClickInterface, ActionInterface {
        constructor() {
            super();
            PanelManage.addPanel(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
        }
        private onAddToStage() {
            this.addUIListener();
            this.adaptationWidth();
            this.registerLanguage();
        }
        private onRemoveFromStage() {
            this.removeUIListener();
        }
        public destroy() {
            this.removeUIListener();
            this.removeActionListener();
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
        }
        /**
        * 面板宽度适配至舞台宽度
        */
        protected adaptationWidth() {
        }
        /**
         * 注入多语言
         */
        protected registerLanguage() {
            this.updataLanguage();
        }
        /**
         * 子类在registerLanguage之后 语音切换之后会自动调用此方法
         */
        protected updataLanguage() { }
        public addActionListener(): void { }
        public removeActionListener(): void { }
        abstract addUIListener(): void;
        abstract removeUIListener(): void;
    }
}