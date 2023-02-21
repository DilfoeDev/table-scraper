const ChartJsImage = require('chartjs-to-image');
const data = require("./data/data.json");


const createChart = async () => {



let countries = [];               //initalize two arrays one for x axis one for y axis
let medalCounts = [];


data.forEach(function(values) {                //goes through data.json and for each array set pushes values to two seperate arrays
  countries.push(values[0]);  
  medalCounts.push(values[1]);
});

console.log(countries)                  //logs result to see if data is being split correctly
console.log(medalCounts)


const chart = new ChartJsImage();                                                             // Generates the chart
chart.setConfig({                                                                             
  type: 'bar',                                                                                  //sets config to a bar graph
  data: { labels: countries, datasets: [{ label: 'Gold Medal Tally', data: medalCounts }] },     //sets the required data for the config
});
chart.setWidth(1500); //sets x axis to 1500px so to ensure that all countries are shown correctly


chart.toFile('./data/graph.png');                   //saves chart to png image in data file, writes image to disk

};

module.exports = createChart;                      //export createChart function
