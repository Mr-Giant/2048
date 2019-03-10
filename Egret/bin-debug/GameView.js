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
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            var _this = _super.call(this) || this;
            _this.integralBoxArr = [];
            _this.emptyArr = [];
            _this.skinName = new GameSkin();
            _this.initUI();
            return _this;
        }
        GameView.prototype.addUIListener = function () {
            _super.prototype.addUIListener.call(this);
        };
        GameView.prototype.removeUIListener = function () {
            _super.prototype.removeUIListener.call(this);
        };
        /**
         * 添加
         */
        GameView.prototype.initUI = function () {
            for (var i = 0; i < 30; i++) {
                var group = new game.EmptyBox();
                group.width = 100;
                group.height = 100;
                group.name = "group" + i;
                // 設置位置
                group.lineH = Math.ceil(i / 5);
                group.lineV = i % 5;
                this.emptyArr.push(group);
                this.mainGroup.addChild(group);
            }
            for (var i = 0; i < 3; i++) {
                this.addBox();
            }
        };
        /**
         * 动作结束
         */
        GameView.prototype.change = function (direction) {
            // 随机添加盒子(位置随机)
            console.error(direction);
            this.boxChange(direction);
            this.addBox();
        };
        /**
         * 隨機
         */
        GameView.prototype.addBox = function () {
            var imArr = this.emptyArr.filter(function (v) { return v && !v.isEmpty; });
            var num = imArr.length;
            var index = Math.round(Math.random() * (num - 1));
            var box = new game.IntegralBox();
            imArr[index].addEmpty(box);
        };
        /**
         * 動作央視
         */
        GameView.prototype.boxChange = function (a) {
            switch (a) {
                case game.Direction.down:
                case game.Direction.up:
                    var _loop_1 = function (i) {
                        var boxArr = this_1.emptyArr.filter(function (v) { return v.lineV == i; });
                        boxArr.sort(function (a, b) { return b.lineH - a.lineH; });
                        var integralArr = [];
                        for (var _i = 0, boxArr_1 = boxArr; _i < boxArr_1.length; _i++) {
                            var box = boxArr_1[_i];
                            // 獲取到所有box
                            if (box.box) {
                                integralArr.push(box.box);
                            }
                            box.remove();
                        }
                        console.error(integralArr);
                        if (integralArr instanceof Array && integralArr.length > 0) {
                            for (var j = 0; j < (integralArr.length - 1); j++) {
                                boxArr[j].addEmpty(integralArr[j]);
                            }
                        }
                    };
                    var this_1 = this;
                    for (var _i = 0, _a = [0, 1, 2, 3, 4]; _i < _a.length; _i++) {
                        var i = _a[_i];
                        _loop_1(i);
                    }
                    break;
                case game.Direction.right:
                    break;
                case game.Direction.left:
                    break;
            }
        };
        return GameView;
    }(game.Monitor));
    game.GameView = GameView;
    __reflect(GameView.prototype, "game.GameView");
})(game || (game = {}));
//# sourceMappingURL=GameView.js.map