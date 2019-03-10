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
    var AddStyle;
    (function (AddStyle) {
        AddStyle[AddStyle["one"] = 1] = "one";
        AddStyle[AddStyle["two"] = 2] = "two";
        AddStyle[AddStyle["four"] = 4] = "four";
        AddStyle[AddStyle["eight"] = 8] = "eight";
        AddStyle[AddStyle["sixteen"] = 16] = "sixteen";
        AddStyle[AddStyle["thirty_two"] = 32] = "thirty_two";
        AddStyle[AddStyle["sixty_four"] = 64] = "sixty_four";
        AddStyle[AddStyle["one_hundred_twenty_eight"] = 128] = "one_hundred_twenty_eight";
    })(AddStyle || (AddStyle = {}));
    /**
     * 盒子对象
     */
    var IntegralBox = (function (_super) {
        __extends(IntegralBox, _super);
        function IntegralBox() {
            var _this = _super.call(this) || this;
            _this.skinName = new IntegralBoxSkin();
            return _this;
        }
        Object.defineProperty(IntegralBox.prototype, "style", {
            set: function (num) {
                this.boxStyle = num;
                this.numLabel.text = num + "";
                this.bjRect.fillColor = 0x123412;
            },
            enumerable: true,
            configurable: true
        });
        return IntegralBox;
    }(eui.Component));
    game.IntegralBox = IntegralBox;
    __reflect(IntegralBox.prototype, "game.IntegralBox");
    /**
     * 空盒子
     */
    var EmptyBox = (function (_super) {
        __extends(EmptyBox, _super);
        function EmptyBox() {
            var _this = _super.call(this) || this;
            _this.skinName = new EmptyBoxSkin();
            return _this;
        }
        Object.defineProperty(EmptyBox.prototype, "isEmpty", {
            get: function () {
                return this.mainGroup.numChildren > 0;
            },
            enumerable: true,
            configurable: true
        });
        EmptyBox.prototype.addEmpty = function (box) {
            if (box) {
                this.box = box;
                this.mainGroup.addChild(box);
            }
        };
        EmptyBox.prototype.remove = function () {
            if (this.box && this.box.parent) {
                this.box.parent.removeChild(this.box);
            }
        };
        return EmptyBox;
    }(eui.Component));
    game.EmptyBox = EmptyBox;
    __reflect(EmptyBox.prototype, "game.EmptyBox");
})(game || (game = {}));
//# sourceMappingURL=IntegralBox.js.map