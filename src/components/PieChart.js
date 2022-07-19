import React , { Component} from 'react';
import * as d3 from 'd3';

class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.myref = React.createRef();
    }


    componentDidMount() {
        this.drawChart()
    }


    drawChart(){
        const data = {"walk": 0.20, "bike": 0.25, "drive": 0.55};
        const carbon = 182;

        // build SVG
        const width = 375;
        const height = 319;
        const radius = 100;

             
        // append the svg object to ref
        const svg = d3.select(this.myref.current)
          .append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", `translate(${width/2},${height/2})`);
              
        const color = d3.scaleOrdinal()
          .range(['#C7EFF4','#6FD9E6','#F1F1F1']);
        
        // Creat pie chart
        const pie = d3.pie()
          .sort(null)
          .value(d => d[1])
        const data_ready = pie(Object.entries(data))
        
        // The arc for the donut chart
        const arc = d3.arc()
          .innerRadius(radius * 0.65) 
          .outerRadius(radius * 0.85)
        
        // polyline positioning
        const outer1Arc = d3.arc()
          .innerRadius(radius * 0.9)
          .outerRadius(radius * 0.9)

        // text positioning
        const outer2Arc = d3.arc()
          .innerRadius(radius * 1.1)
          .outerRadius(radius * 1.1)
        
        // Build the pie chart
        svg
          .selectAll('allSlices')
          .data(data_ready)
          .join('path')
          .attr('d', arc)
          .attr('fill', d => color(d.data[1]))
        //   .attr("stroke", "white")
        //   .style("stroke-width", "1px")
        
        // Add the polylines
        svg
          .selectAll('allPolylines')
          .data(data_ready)
          .join('polyline')
            .attr("stroke", "#6FD9E6")
            .style("fill", "none")
            .attr("stroke-width", 1)
            .attr('points', function(d) {
              const posA = outer1Arc.centroid(d);
              const posB = outer2Arc.centroid(d); 
              const posC = outer2Arc.centroid(d);
              const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // put elements on the right or on the left
              posC[0] = radius * 1.15 * (midangle < Math.PI ? 1 : -1);
              return [posA, posB, posC]
            })
          // add a value centering this chart
          svg.append("svg:text")
            .attr("dy", ".15em")
            .attr("text-anchor", "middle")
            .attr("style","font-family:Helvetica")
            .attr("font-size","36")
            .attr("fill","#000000")
            .text(carbon)

          svg.append("svg:text")
            .attr("dy", "1.75em")
            .attr("text-anchor", "middle")
            .attr("style","font-family:Helvetica")
            .attr("font-size","14")
            .attr("fill","#606060")
            .text('g/km')

        
        // Add the labels
        svg
          .selectAll('allLabels')
          .data(data_ready)
          .join('text')
            // .text(d => `${d.data[1]*100+"%"}\n${d.data[0]}`, "#5F646D")
            .html(function (d) {
                return "<tspan x='0' dy='-1em'>" + Math.floor(d.data[1]*100)+"%" + "</tspan>" 
                     + "<tspan x='0' dy='1em'>" +d.data[0] + "</tspan>";
              }, "#5F646D")
            .attr("font-size",12)
            .attr("font-family","Helvetica")
            .attr("font-style","normal")
            .attr('transform', function(d) {
                const pos = outer2Arc.centroid(d);
                const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                pos[0] = radius * 1.2 * (midangle < Math.PI ? 1 : -1);
                return `translate(${pos})`;
            })
            .style('text-anchor', function(d) {
                const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                return (midangle < Math.PI ? 'start' : 'end')
            })
    }


    render() {
        return <>
            <div ref={this.myref}></div> </>
    }


}


export default DonutChart;