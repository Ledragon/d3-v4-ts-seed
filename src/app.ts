import * as d3 from './d3-bundle';

d3.select('body')
    .append('svg')
    .attr('width', 960)
    .attr('height', 480)
    .append('circle')
    .attr('cx', 240)
    .attr('cy', 300)
    .attr('r', 150)
    .style('fill', 'lightblue');

