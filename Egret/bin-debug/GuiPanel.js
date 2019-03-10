var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var PanelManage = (function () {
        function PanelManage() {
        }
        PanelManage.addPanel = function (panel) {
            this.panelList.push(panel);
        };
        PanelManage.destroyPanel = function () {
            this.panelList = this.panelList != null && this.panelList instanceof Array ? this.panelList : [];
            for (var _i = 0, _a = this.panelList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item != null) {
                    item.destroy();
                }
            }
            this.panelList = [];
        };
        PanelManage.panelList = [];
        return PanelManage;
    }());
    game.PanelManage = PanelManage;
    __reflect(PanelManage.prototype, "game.PanelManage");
    /**
     * 适合非skinName游戏面板 并有UI点击事件或有行为特效的面板
     */
    var GuiPanel = (function (_super) {
        __extends(GuiPanel, _super);
        function GuiPanel() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoveFromStage, _this);
            return _this;
        }
        GuiPanel.prototype.onAddToStage = function () {
            this.addUIListener();
            this.registerLanguage();
        };
        GuiPanel.prototype.onRemoveFromStage = function () {
            this.removeUIListener();
        };
        GuiPanel.prototype.destroy = function () {
            this.removeUIListener();
            this.removeActionListener();
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        };
        /**
        * 面板宽度适配至舞台宽度
        */
        GuiPanel.prototype.adaptationWidth = function () { };
        /**
         * 注入多语言
         */
        GuiPanel.prototype.registerLanguage = function () {
            this.updataLanguage();
        };
        /**
         * 子类在registerLanguage之后 语音切换之后会自动调用此方法
         */
        GuiPanel.prototype.updataLanguage = function () {
        };
        GuiPanel.prototype.addActionListener = function () {
        };
        GuiPanel.prototype.removeActionListener = function () {
        };
        return GuiPanel;
    }(egret.Sprite));
    game.GuiPanel = GuiPanel;
    __reflect(GuiPanel.prototype, "game.GuiPanel", ["game.UIClickInterface", "game.ActionInterface"]);
    /**
     * 适合skinName游戏面板 并有UI点击事件或有行为特效的面板
     */
    var EuiPanel = (function (_super) {
        __extends(EuiPanel, _super);
        function EuiPanel() {
            var _this = _super.call(this) || this;
            PanelManage.addPanel(_this);
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemoveFromStage, _this);
            return _this;
        }
        EuiPanel.prototype.onAddToStage = function () {
            this.addUIListener();
            this.adaptationWidth();
            this.registerLanguage();
        };
        EuiPanel.prototype.onRemoveFromStage = function () {
            this.removeUIListener();
        };
        EuiPanel.prototype.destroy = function () {
            this.removeUIListener();
            this.removeActionListener();
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
        };
        /**
        * 面板宽度适配至舞台宽度
        */
        EuiPanel.prototype.adaptationWidth = function () {
        };
        /**
         * 注入多语言
         */
        EuiPanel.prototype.registerLanguage = function () {
            this.updataLanguage();
        };
        /**
         * 子类在registerLanguage之后 语音切换之后会自动调用此方法
         */
        EuiPanel.prototype.updataLanguage = function () { };
        EuiPanel.prototype.addActionListener = function () { };
        EuiPanel.prototype.removeActionListener = function () { };
        return EuiPanel;
    }(eui.Component));
    game.EuiPanel = EuiPanel;
    __reflect(EuiPanel.prototype, "game.EuiPanel", ["game.UIClickInterface", "game.ActionInterface"]);
})(game || (game = {}));
//# sourceMappingURL=GuiPanel.js.map