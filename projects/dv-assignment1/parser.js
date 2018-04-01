const data = require('./common.json');

labels = [];
land = [];
ex = [];

for (var i = 0; i < data.length; i++) {
	labels.push(data[i]["STATES/UNION TERRITORIES"].toUpperCase());
	land.push(data[i]["Percentage of defence land"]);
	ex.push(data[i]["Percentage of Ex-Servicemen"]);
}

console.log(labels);
console.log(land);
console.log(ex);