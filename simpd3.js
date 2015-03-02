// making a football pitch with general dimensions from http://en.wikipedia.org/wiki/Association_football_pitch#Other_markings

var pi = Math.PI;

var width = 115*7;
var height = 74*7;



var piter = d3.select('body').append('svg').attr('class', 'pitch').attr('height',height+20)
.attr('width', width+20)
.style('background','green');


var corner = d3.svg.arc()
    .innerRadius(6)
    .outerRadius(7)
    .startAngle(0 * (pi/180)) //converting from degs to radians
    .endAngle(90* (pi/180)) //just radians

var field = piter.append('rect').attr('height',height)
.attr('width', width)
.attr('fill', 'transparent')
.attr('stroke', 'white')
.attr('x', 10)
.attr('y',10);

//big goalkeeper rectangle
piter.append('rect')
.attr('height',44*7)
.attr('width', 18*7)
.attr('y',15*7+10)
.attr('x',10)
.attr('fill', 'green')
.attr('stroke', 'white');
//small rectangle
piter.append('rect')
.attr('height',20*7)
.attr('width', 8*7)
.attr('y',27*7+10)
.attr('x',10)
.attr('fill', 'green')
.attr('stroke', 'white');


//centerline of the pitch
piter.append('line')
.attr('x1',width/2+10)
.attr('x2',width/2+10)
.attr('y1',10)
.attr('y2',height+10)
.attr('stroke','white');


d3.csv("part.csv", function(error, ballP) {                     // load data foa a ball
  // for (var i = 0; i < ballP.length; i++) {
  //   console.log(ballP[i].x_pos);
  // };
// ############################### movement of player ###################
//path
 var lineFunction = d3.svg.line()
                        .x(function(d) { return d.x_pos*5; })  // approximate coordinates
                        .y(function(d) { return d.y_pos*5; })
                        .interpolate("linear");

var path = piter.append("path")
                            .attr("d", lineFunction(ballP))
                            .attr("stroke", "blue")
                            .attr("opacity" , 0.0)
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
// ##############################circle##############################
var circle = piter.append("circle")                             // draw a circle
    .attr("r", 20)
    .attr("fill" , "#FF0000");
    // .attr("transform" , "translate(" +  +")");
// #######################circle end #################################

// ############################## arc ################################
var arcV1 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(70)
    .startAngle(2 )
    .endAngle(3) //just radians

var arcV2 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(70)
    .startAngle(-3 )
    .endAngle(-2) //just radians

var arcV2 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(70)
    .startAngle(0 )
    .endAngle(1) //just radians

arcV = piter.append("path")
    .attr("d", arcV1)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("transform" , "translate(" + 400 + "," + 400 + ")");

// ########################## arc finishi ############################

// ##########################rectangle##############################
var arcD1 = d3.svg.arc()
    .innerRadius(30)
    .outerRadius(40)
    .startAngle(0 )
    .endAngle(1) //just radians

var arcD2 = d3.svg.arc()
    .innerRadius(30)
    .outerRadius(40)
    .startAngle(0 )
    .endAngle(3) //just radians

arcD = piter.append("path")
    .attr("d", arcD1)
    .attr("fill" , "#6E6E6E")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("transform" , "translate(" + 400 + "," + 400 + ")");

transition();

function transition() {
  arcD.transition()
      .duration(20000)
      .attrTween("transform", translateAlong(path.node()))
      .attr("d", arcD2) 


  arcV.transition()
      .duration(20000)
      .attrTween("transform", translateAlong(path.node()))
      .attr("d", arcV2)
      // .each("end", transition);

      console.log(path.node());
  circle.transition()
      .duration(20000)
      .attrTween("transform", translateAlong(path.node()))
      .attr("fill", "#8A0808")
      // .each("end", transition);
}

// Returns an attrTween for translating along the specified path element.
function translateAlong(path) {
  var l = path.getTotalLength();
  return function(d, i, a) {
    return function(t) {
      var p = path.getPointAtLength(t * l);
      return "translate(" + p.x + "," + p.y + ")";
    };
  };
}

// ####################### finish movement of player ############################
//center circle
piter.append('circle')
.attr('r', 70)
.attr('cx',width/2+10)
.attr('cy',height/2+10)
.attr('fill','transparent')
.attr('stroke', 'white');


//center og the field
piter.append('circle')
.attr('r', 4)
.attr('cx',width/2+10)
.attr('cy',height/2+10)
.attr('fill','white')
.attr('stroke', 'white')
.attr("id", "middle");
//the ball

//point for penalty
piter.append('circle')
.attr('r', 4)
.attr('cx',12*7+10)
.attr('cy',height/2+10)
.attr('fill','black')
.attr('stroke', 'white');
//adding the corner arc to the bottom left
piter.append('path')
  .attr('d', corner)
  .attr('transform','translate('+ 10 +','+ (10+74*7) + ')')
  .attr('stroke','white')

});
