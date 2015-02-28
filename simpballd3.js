/**
 * Created by Mikhail on 28.02.2015.
 */

var piter = d3.select('body').append('svg').attr('class', 'pitch').attr('height',height+20)
    .attr('width', width+20)
    .style('background','green');

d3.csv("part.csv", function(error, ballP) {                     // load data foa a ball
    // for (var i = 0; i < ballP.length; i++) {
    //   console.log(ballP[i].x_pos);
    // };

//path
    var lineFunction = d3.svg.line()
        .x(function (d) {
            return d.x_pos * 10;
        })  // approximate coordinates
        .y(function (d) {
            return d.y_pos * 10;
        })
        .interpolate("linear");

    var svgContainer = d3.select("body").append("svg")
        .attr("width", 600)
        .attr("height", 600);

    var path = piter.append("path")
        .attr("d", lineFunction(ballP))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    var circle = piter.append("circle")                             // draw a circle
        .attr("r", 20);

});

// .attr("transform" , "translate(" +  +")");

