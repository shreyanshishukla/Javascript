var demo = /** @class */ (function () {
    function demo() {
        this.name = "rama";
        console.log("constructor");
    }
    demo.prototype.a = function (b) {
        return this.name;
    };
    demo.count = 11;
    return demo;
}());
var d = new demo();
d.a(2);
console.log(demo.count);
