import * as d3 from 'd3';

d3.select('body')
    .append('svg')
    .attr('width', 960)
    .attr('height', 480)
    .append('rect')
    .attr('width', 400)
    .attr('height', 300)
    .style('fill', 'lightblue');