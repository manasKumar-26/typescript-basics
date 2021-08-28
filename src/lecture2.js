"use strict";
exports.__esModule = true;
exports.seasons = void 0;
var car = { wheels: 4, price: 500000 };
var bike = { wheels: 2, price: 100000 };
bike.topSpeed = 200;
var veganBasket = [{ name: "Mango", calories: 100, sweetness: 2 }];
var brinjal = { name: "brinjal", calories: 34, sourness: 2 };
// veganBasket.push(brinjal); Cannot do this now
var seasons;
(function (seasons) {
  seasons[(seasons["winter"] = 0)] = "winter";
  seasons[(seasons["summer"] = 1)] = "summer";
})((seasons = exports.seasons || (exports.seasons = {})));
// The above enum gets converted to the IIFE below
// var seasons;
// (function (seasons) {
//     seasons[seasons["winter"] = 0] = "winter";
//     seasons[seasons["summer"] = 1] = "summer";
// })(seasons || (seasons = {}));
function expectEnum(season) {
  if (season === seasons.summer) {
    return "HOT!!! I'm summer";
  }
  if (season === seasons.winter) {
    return "COLD!!! I'm winter";
  }
  throw new Error("Season Unavailable");
}
console.log(expectEnum(seasons.summer));
// Loose copy of useState react hook -> Tuple TS
var state = "";
function useState(initialState) {
  state = initialState;
  function updater(updatedState) {
    state = updatedState;
  }
  return [state, updater];
}
var _a = useState("Manas"),
  newState = _a[0],
  updateNewSTate = _a[1];
function typeAliasFunction(props) {}
