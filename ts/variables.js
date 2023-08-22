var a = 10; //implicit
var b = "test"; //explicit
var c = "okay";
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["April"] = 2] = "April";
    Month[Month["March"] = 3] = "March";
})(Month || (Month = {}));
var m = Month.Feb;
var u = { name: "shreyanshi", age: 23, email: "sss@gmail.com" };
var p = { name: "shubhi", age: 23, };
var cus = { name: "jai", email: "sddd@sds.com" };
var e = { name: "jai", email: "sddd@sds.com", id: 2434 };
var t = document.querySelector("body");
console.log(t.getAttributeNames());
var t2 = document.querySelector("input");
console.log(t2.value);
