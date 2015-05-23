// making a football pitch with general dimensions from http://en.wikipedia.org/wiki/Association_football_pitch#Other_markings

var pi = Math.PI;

var width = 125 * 9;
var height = 74 * 6.8 ;



var piter = d3.select('body').append('svg').attr('class', 'pitch').attr('height',height+20) // draw a pitch
    .attr('width', width+20)
    .style('background', 'green');


//centerline of the pitch
piter.append('line')
    .attr('x1',width/2+10)
    .attr('x2',width/2+10)
    .attr('y1',10)
    .attr('y2',height+10)
    .attr('stroke','white');




d3.csv("all.csv", function(error, ballP) {                     // load data for a ball
    // for (var i = 0; i < ballP.length; i++) {
    //   console.log(ballP[i].x_pos);
    // };

//path
    var lineFunction = d3.svg.line()
        .x(function(d) { return (d.x_pos - 900) / 3; })  // approximate coordinates
        .y(function(d) { return (d.y_pos - 200) / 3; })
        .interpolate("linear");

    var path = piter.append("path")
        .attr("d", lineFunction(ballP))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "yellow");

    var circle = piter.append("circle")                             // draw a circle
        .attr("r", 20);
    // .attr("transform" , "translate(" +  +")");


    circle.transition()
            .duration(20000)
            .attrTween("transform", translateAlong(path.node()));

// Returns an attrTween for translating along the specified path element.
    function translateAlong(path) {
        var l = path.getTotalLength();

        console.log(l);

        return function(d, i, a) {
            return function(t) {
                var p = path.getPointAtLength(t * l);
                return "translate(" + p.x + "," + p.y + ")";
            };
        };
    }

});

