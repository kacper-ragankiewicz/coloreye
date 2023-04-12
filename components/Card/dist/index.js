"use strict";
exports.__esModule = true;
exports.Card = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var Card_module_sass_1 = require("./Card.module.sass");
var angle_down_png_1 = require("../../styles/assets/angle-down.png");
var image_1 = require("next/image");
exports.Card = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = react_1.useState(false), onBottom = _l[0], setOnBottom = _l[1];
    var listArrey = [
        'GRAPHIC Designer',
        'Problem Solver',
        'Strategic thinker',
        'Team player',
        'GRAPHIC Designer',
        'Problem Solver',
        'Strategic thinker',
        'Team player',
        'GRAPHIC Designer',
        'Problem Solver',
        'Strategic thinker',
        'Team player'
    ];
    var getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var ScrollToBottom = function () {
        setOnBottom(!onBottom);
        if (!onBottom) {
            window.scrollTo(0, document.body.scrollHeight);
        }
        else {
            window.scrollTo(0, 0);
        }
    };
    var ChangeColor = function () {
        return;
    };
    react_1.useEffect(function () {
        var eye = document.querySelector('#eyeball');
        var eyepoint = document.querySelector('#eyepoint');
        var body = document.querySelector('body');
        window.addEventListener('mousemove', function (evt) {
            var x = -(window.innerWidth / 2 - evt.pageX) / 3.5;
            var y = -(window.innerHeight / 2 - evt.pageY) / 60;
            var xp = -(window.innerWidth / 2 - evt.pageX) / 33.5;
            var yp = -(window.innerHeight / 2 - evt.pageY) / 100;
            if (eye && eyepoint) {
                eye.style.transform = "translateY(" + (y > 140 ? 140 : y < -140 ? -140 : y) + "px) translateX(" + (x > 140 ? 140 : x < -140 ? -140 : x) + "px)";
                eyepoint.style.transform = "translateY(" + yp + "px) translateX(" + xp + "px)";
            }
            if (props.state) {
                body.style.backgroundColor = "#ff6f00";
            }
        });
        setInterval(function () {
            var x = getRandomInt(-30, 30);
            var y = getRandomInt(-30, 30);
            var z = getRandomInt(3, 4);
            var eye = document.querySelector('#eyeball');
            var eyepoint = document.querySelector('#eyepoint');
            eye.style.transform = "translateY(" + y + "px) translateX(" + x + "px)";
            eyepoint.style.transform = "translateY(" + y / 2 + "px) translateX(" + x / 2 + "px)";
            eyepoint.style.transform = "scale(" + z / 4 + ")";
        }, 2500);
        window.addEventListener('scroll', function () {
            if (document.documentElement.scrollTop > 150) {
                setOnBottom(true);
            }
            else {
                setOnBottom(false);
            }
        });
    }, []);
    var ListObjects = function (props) {
        var _a;
        return (react_1["default"].createElement("li", { className: classnames_1["default"](Card_module_sass_1["default"].listElement, (_a = {}, _a[Card_module_sass_1["default"].changeColor] = props.state, _a)) }, props.item));
    };
    var listGenerator = listArrey.map(function (item) { return react_1["default"].createElement(ListObjects, { key: item, item: item, state: props.state }); });
    return (react_1["default"].createElement("div", { className: classnames_1["default"](Card_module_sass_1["default"].container, (_a = {}, _a[Card_module_sass_1["default"].changeColor] = props.state, _a)) },
        react_1["default"].createElement("div", { className: Card_module_sass_1["default"].animations },
            react_1["default"].createElement("div", { className: Card_module_sass_1["default"].firstRow },
                react_1["default"].createElement("h1", { className: classnames_1["default"](Card_module_sass_1["default"].headerKac, (_b = {}, _b[Card_module_sass_1["default"].changeColor] = props.state, _b)) }, "KAC"),
                react_1["default"].createElement("span", { id: 'eyebox', onClick: function () { return props.onClick(); }, className: classnames_1["default"](Card_module_sass_1["default"].eyeBox, (_c = {}, _c[Card_module_sass_1["default"].changeColor] = props.state, _c)) },
                    react_1["default"].createElement("span", { id: 'eyebraw', className: classnames_1["default"](Card_module_sass_1["default"].eyeBraw, (_d = {}, _d[Card_module_sass_1["default"].changeColor] = props.state, _d)) }),
                    react_1["default"].createElement("span", { id: 'eyeball', className: classnames_1["default"](Card_module_sass_1["default"].eyeBall, (_e = {}, _e[Card_module_sass_1["default"].changeColor] = props.state, _e)) },
                        react_1["default"].createElement("span", { id: 'eyepoint', className: classnames_1["default"](Card_module_sass_1["default"].eyePoint, (_f = {}, _f[Card_module_sass_1["default"].changeColor] = props.state, _f)) }))),
                react_1["default"].createElement("h1", { className: classnames_1["default"](Card_module_sass_1["default"].headerPer, (_g = {}, _g[Card_module_sass_1["default"].changeColor] = props.state, _g)) }, "PER")),
            react_1["default"].createElement("div", { className: classnames_1["default"](Card_module_sass_1["default"].slider, (_h = {}, _h[Card_module_sass_1["default"].changeColor] = props.state, _h)) },
                react_1["default"].createElement("ul", { className: Card_module_sass_1["default"].list }, listGenerator)),
            react_1["default"].createElement("h1", { className: classnames_1["default"](Card_module_sass_1["default"].headerLastName, (_j = {}, _j[Card_module_sass_1["default"].changeColor] = props.state, _j)) }, "RAGANKIEWICZ"),
            react_1["default"].createElement("span", { className: classnames_1["default"](Card_module_sass_1["default"].arrow, (_k = {}, _k[Card_module_sass_1["default"].onBottom] = onBottom, _k)), onClick: function () { return ScrollToBottom(); } },
                react_1["default"].createElement(image_1["default"], { src: angle_down_png_1["default"], width: 59, height: 59, alt: 'Arrow IMG', className: Card_module_sass_1["default"].arrowImg })))));
};
