const width = 500;
const height = 200;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const graphSVG = d3.select("#graph")
  .append('svg')
  .attr("viewBox", `0 0 ${width} ${height}`)
  .style('border', '2px solid black')
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


const lineChartData = [
  { x: 1, y: 0 },
  { x: 2, y: 100 },
  { x: 5, y: 210 }, //Peak of “Mount Stupid”
  { x: 8, y: 5 }, //Valley of Despair
  { x: 18, y: 50 },
  { x: 20, y: 60 }, //Slope of Enlightenment
  { x: 40, y: 150 },
  { x: 60, y: 160 } //Plateau of Sustainability
];
const x = d3.scaleLinear()
  .domain([0, 60])
  .range([0, width - margin.left - margin.right]);

const y = d3.scaleLinear()
  .domain([0, d3.max(lineChartData, d => d.y)])
  .range([height - margin.top - margin.bottom, 0]);

const xAxis = d3.axisBottom(x);
    
xAxis.ticks(2);
xAxis.tickValues([5,50]);
let xtickLabels = ['Low', 'High'];
xAxis.tickFormat((d,i) => xtickLabels[i]);

const yAxis = d3.axisLeft(y);

yAxis.ticks(2);
yAxis.tickValues([10,160]);
let ytickLabels = ['Low', 'High'];
yAxis.tickFormat((d,i) => ytickLabels[i]);


graphSVG.append("g")
  .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`)
  .call(xAxis);

graphSVG.append("g")
  .call(yAxis);

const line = d3.line()
  .x(d => x(d.x))
  .y(d => y(d.y))
  .curve(d3.curveBasis);
graphSVG.append("path")
  .datum(lineChartData)
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 2)
  .attr("d", line);
// Axis labels
graphSVG.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width - width/2)
  .attr("y", height - margin.bottom + 10)
  .text("Experience");
graphSVG.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("x", -margin.left)
  .attr("y", -margin.top - 20)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("Confidence");