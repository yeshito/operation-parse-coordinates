var fs = require("fs");
var originalMap = fs.readFileSync("data/map-08.txt").toString();
var mapArray = originalMap.split("\n");
var    colCounter = 0;
var yAxis = 0;
var xAxis = -1;
var coordinates = 0;

for (var count = 0; count < mapArray.length; count++) {
    mapArray[count] = mapArray[count].split('');
}

while (xAxis == -1) {
    yAxis++;
    xAxis = mapArray[yAxis].indexOf("X");
}

console.log (originalMap);
console.log (mapArray);
console.log ("[",xAxis-1,", ", -(yAxis-1), "]");
