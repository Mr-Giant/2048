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
    /**
     * 方向
     */
    var Direction;
    (function (Direction) {
        /**
         * 上
         */
        Direction[Direction["up"] = 1] = "up";
        /**
         * 下
         */
        Direction[Direction["down"] = 2] = "down";
        /**
         * 左
         */
        Direction[Direction["left"] = 3] = "left";
        /**
         * 右
         */
        Direction[Direction["right"] = 4] = "right";
    })(Direction = game.Direction || (game.Direction = {}));
    /**
     * 监听上下左右
     */
    var Monitor = (function (_super) {
        __extends(Monitor, _super);
        function Monitor() {
            return _super.call(this) || this;
        }
        Monitor.prototype.addUIListener = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        };
        Monitor.prototype.removeUIListener = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        };
        /**
         * 开始监听
         */
        Monitor.prototype.touchBegin = function (e) {
            this.beginX = e.stageX;
            this.beginY = e.stageY;
        };
        /**
         * 监听结束
         */
        Monitor.prototype.touchEnd = function (e) {
            var endY = Math.abs(this.beginY - e.stageY);
            var endX = Math.abs(this.beginX - e.stageX);
            if (endY == 0 && endX == 0) {
                return;
            }
            var lengthY = e.stageY - this.beginY; // >0下  <0上
            var lengthX = e.stageX - this.beginX; // >0右  <0左
            // 上下左右
            if (endY > endX) {
                if (lengthY > 0) {
                    this.change(Direction.down);
                }
                else {
                    this.change(Direction.up);
                }
            }
            else {
                if (lengthX > 0) {
                    this.change(Direction.right);
                }
                else {
                    this.change(Direction.left);
                }
            }
        };
        /**
         * 动作接口
         */
        Monitor.prototype.change = function (direction) {
        };
        return Monitor;
    }(game.EuiPanel));
    game.Monitor = Monitor;
    __reflect(Monitor.prototype, "game.Monitor");
})(game || (game = {}));
//# sourceMappingURL=Monitor.js.map