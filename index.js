var nineStrings = [
   "ix",
   "nine",
   "neuf",
   "nueve",
];

var inArray = function(value, array) {
   return array.indexOf(value) > -1;
}

var nine = function(value) {
   return (value == 9) || ((typeof value === "string") && inArray(value.toLowerCase(), nineStrings));
}

module.exports = nine;
