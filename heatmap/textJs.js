
var width = 115*7;
var height = 74*7; 

var pi = Math.PI;

var svg = d3.select("body").select("#wrapper").append("svg").attr("class" , "pitch")
    .attr("width", width + 20)
    .attr("height", height + 20) 
    .style('background','green');

var corner = d3.svg.arc()
    .innerRadius(6)
    .outerRadius(7)
    .startAngle(0 * (pi/180)) //converting from degs to radians
    .endAngle(90* (pi/180)) //just radians 	
	
var field = svg.append('rect').attr('height',height)
.attr('width', width)
.attr('fill', 'transparent')
.attr('stroke', 'white')
.attr('x', 10)
.attr('y',10);

//big goalkeeper rectangle
svg.append('rect')
.attr('height',44*7)
.attr('width', 18*7)
.attr('y',15*7+10)
.attr('x',10)
.attr('fill', 'green')
.attr('stroke', 'white');

//small rectangle
svg.append('rect')
.attr('height',20*7)
.attr('width', 8*7)
.attr('y',27*7+10)
.attr('x',10)
.attr('fill', 'green')
.attr('stroke', 'white');

//second goalkeeper rectangle
svg.append('rect')
.attr('height',44*7)
.attr('width', 18*7)
.attr('y',15*7+10)
.attr('x',width - 117)
.attr('fill', 'green')
.attr('stroke', 'white');

//small second rectangle 
svg.append('rect')
.attr('height',20*7)
.attr('width', 8*7)
.attr('y',27*7+10)
.attr('x',width - 47)
.attr('fill', 'green')
.attr('stroke', 'white');

//centerline of the pitch
svg.append('line')
.attr('x1',width/2+10)
.attr('x2',width/2+10)
.attr('y1',10)
.attr('y2',height+10)
.attr('stroke','white');	

svg.append('circle')
.attr('r', 70)
.attr('cx',width/2+10)
.attr('cy',height/2+10)
.attr('fill','transparent')
.attr('stroke', 'white');

//center og the field
svg.append('circle')
.attr('r', 4)
.attr('cx',width/2+10)
.attr('cy',height/2+10)
.attr('fill','white')
.attr('stroke', 'white')
.attr("id", "middle");
//the ball

//point for penalty
svg.append('circle')
.attr('r', 4)
.attr('cx',12*7+10)
.attr('cy',height/2+10)
.attr('fill','black')
.attr('stroke', 'white');

//point for penalty
svg.append('circle')
.attr('r', 4)
.attr('cx',width - 70)
.attr('cy',height/2+10)
.attr('fill','black')
.attr('stroke', 'white');

//adding the corner arc to the bottom left
svg.append('path')
  .attr('d', corner)
  .attr('transform','translate('+ 10 +','+ (10+74*7) + ')')
  .attr('stroke','white');

  
  
  var ball = svg.append("circle")
    .attr("cx" , b1[0][0])
    .attr("cy" , b1[0][1])
    .attr("r" , 20)
	.attr("fill", "black"); 

// ####################path#######################
var d3line = d3.svg.line()  
      .x(function(d){return d[0];})
      .y(function(d){return d[1];});



path1 = svg.append("path") // path of triangles 
      .attr('id' , 'paht1')
      .attr("d", d3line(points))
      .style("stroke-width", 0)
      .style("stroke", "black")
      .attr('opacity' , '0.0');

path2 = svg.append('path')
        .attr('id' , 'path2')
      .attr("d", d3line(points2))
      .style("stroke-width", 0)
      .style("stroke", "black")
      .attr('opacity' , '0.0');


path3 = svg.append('path')
        .attr('id' , 'path3')
      .attr("d", d3line(points3))
      .style("stroke-width", 0)
      .style("stroke", "black")
      .attr('opacity' , '0.0');


function drawPath1(){ // draw path 1 
    path1.transition()
      .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")
      .style("fill", "#66CCFF")
      //dynamic opacity here
      .attr('opacity' , '0.8')
      // .delay(1000)
      .duration(0)
      //http://bl.ocks.org/hunzy/9929724 
      .ease("linear")
      .attr("d", d3line(points));
}

function drawPath2(){
    path2.transition()
      .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")
      .style("fill", "#66CCFF")
      //dynamic opacity here
      .attr('opacity' , '0.8')
      // .delay(1000)
      .duration(0)
      //http://bl.ocks.org/hunzy/9929724 
      .ease("linear")
      .attr("d", d3line(points2));
}

function drawPath3(){
    path3.transition()
      .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")
      .style("fill", "#66CCFF")
      //dynamic opacity here
      .attr('opacity' , '0.8')
      // .delay(1000)
      .duration(0)
      //http://bl.ocks.org/hunzy/9929724 
      .ease("linear")
      .attr("d", d3line(points3));
}

// ###############################dashboard######################################



// var path = svg.append("path")
//     .data([points])
//     .attr('opacity' , '0.3')
//     .attr("d", d3.svg.line()
//     .tension(0.8) // Catmull–Rom
//     .interpolate("cardinal"));
    // .on("mousemove", mousemove);
    // svg
    // .on("click" , function(){
    //   // d3.select("#player12").remove();
    //   // d3.select("#player4").remove();
    //   // d3.select("#player5").remove();
    //   // d3.select("#player2").remove();
    //   // d3.select("#player3").remove();
    //   // d3.select("#player1").remove();
    //   // d3.select("#player13").remove();
    //   // d3.select("#player14").remove();
    // });
// var c = [1,2,3,4,5,6,8,11,12,13,14]
// var selectCircle = d3.select("svg").selectAll("circle")
//       .data(c)
//       .enter()
//       .append("circle")
//       .attr("r" , function(d){return 20})
//       .attr("cx" , function(d){ return d*50})
//       .attr("cy" , function(d){ return 40});

//     selectCircle.on("click" ,function(d) {
//       var rem = String("\"#" +"player" + d +"\"")
//       console.log(rem)
//       d3.select("#" + d.id).remove();
//     })
// ##################player 12 ###########################
var circle12 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player12")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8");
    // .on("mouseover" , mouseover);

// var rect = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player12Speed")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8");

var arc = d3.svg.arc() // view of the player 
    .innerRadius(0)
    .outerRadius(20);

arcV = svg.append("path") 
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player12View");

// ##################player 12 ###########################

// ##################player 6 ###########################
var circle6 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player6")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")

// var rect6 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player6")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8")
var arc6 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)


arcV6 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc6)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player6");

// ##################player 6 ###########################
// ##################player 1 ###########################
var circle1 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player1")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8");


var arc1 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)


arcV1 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc1)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player1");


// ##################player 1 ###########################
// ##################player 4 ###########################
var circle4 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player4")
        .style("stroke-width", 5)
      .style("stroke", "#B8B8B8");;


// var rect4 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player4");


var arc4 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)

arcV4 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc4)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player4");


// ##################player 4 ###########################
// ##################player 13 ###########################
var circle8 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player8")
        .style("stroke-width", 5)
      .style("stroke", "#B8B8B8");;


// var rect8 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player8");


var arc8 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV8 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc8)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player8");


// ##################player 13 ###########################
// ##################player 14 ###########################
var circle14 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player14")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")


// var rect14 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player14")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8")


var arc14 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)

arcV14 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc14)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player14");


// ##################player 14 ###########################
// ##################player 5 ###########################
var circle5 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player5")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")


// var rect5 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player5")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8")

var arc5 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)

arcV5 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc5)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player5");


// ##################player 5 ###########################
// ##################player 2 ###########################
var circle2 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player2")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")


// var rect2 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player2")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8")


var arc2 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)

arcV2 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc2)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player2");


// ##################player 2 ###########################


// ##################player 11 ###########################
var circle11 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player11")
    .style("stroke-width", 5)
      .style("stroke", "#B8B8B8")


// var rect11 = svg.append("rect")
//     .attr("width" , 50)
//     .attr("height" , 40)
//     .attr("opacity" , 0.5)
//     .attr("id" , "player11")
//     .style("stroke-width", 5)
//       .style("stroke", "#B8B8B8")


var arc11 = d3.svg.arc()
    .innerRadius(0)
    .outerRadius(20)

arcV11 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc11)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .style("stroke-width", 5)
    .attr("id" , "player11");


// ##################player 11 ###########################


// ############################# for heatmap ######################################
//heatmap array 
var xMax = width + 20;
var yMax = height + 20;  
var heatArray = new Array();
for ( k =0 ; k<15; k++){
  heatArray[k] = new Array();
for (i=0;i<xMax;i++) {
 heatArray[k][i]=new Array();
 for (j=0;j<yMax;j++) {
  heatArray[k][i][j]=0;
 }
}
}
var dx = heatArray[0].length,
    dy = heatArray[0][0].length;
      // console.log(dx +"" + dy);
      // console.log(heatArray);


  // Fix the aspect ratio.
  // var ka = dy / dx, kb = height / width;
  // if (ka < kb) height = width * ka;
  // else width = height / ka;

  var scaleX = d3.scale.linear()
      .domain([0, 105])
      .range([0, width]);


  var scaleY = d3.scale.linear()
      .domain([0, 68])
      .range([height, 0]);

  var color = d3.scale.linear()
      .domain([0, 20, 40, 60, 80, 100, 120, 140])
      .range(["#0a0", "#6c0", "#ee0", "#eb4", "#eb9", "#fff" ,"#FF00FF", "#6699FF"]);

  var EnergyColor = d3.scale.linear()
      .domain([0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000])
      .range(["#66FF66", "#CCFF66", "#FFFF99", "#FF9933", "#FF6600", "#FF1919" ,"#CC0000", "#660000"]);

  var speedColor = d3.scale.linear()
      .domain([0, 1, 2, 3, 4, 13.4])
      .range(["#00FF00", "#99FF00", "#FFFF00", "#FF6600", "#FF0000", "#CC00FF"]);

  // var xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("top")
  //     .ticks(20);

  // var yAxis = d3.svg.axis()
  //     .scale(y)
  //     .orient("right");


var  canvas =  d3.select("body").append("canvas") 
      .attr("width", dx)
      .attr("height", dy)
      .style("width", xMax + "px")
      .style("height", yMax + "px")
      .attr("id" , "canvas");   
// ###############################heatmap over#######################################

//load data
// d3.csv("2013-11-28_tromso_tottenham_raw_without_data.csv", function(error, ballP) {   

  //player's quickest speed is 13.3202 slowest is 0 

function update12(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle12.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        // .on('click' , drawPath);
        //choose this player.

  circle12.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(12);
          // console.log(heatArray);
         });

 points2.splice(2,1,[scaleDataX, scaleDataY])
  // console.log(points[0])      

  // line.transition()
  //     .attr('x2', scaleDataX)
  //     .attr('y2', scaleDataY);


  // rect.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 12);    
}

function update6(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle6.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

  circle6.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });

  points.splice(2,1,[scaleDataX, scaleDataY])
  // console.log(points[0])


  // rect6.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);


}
function update1(datax, datay , heading , energy, speed ) {

  var startHeading =  parseFloat (heading-1);
  var endHeading = parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }
 
  circle1.transition()
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));

  circle1.on("click", function() {
          drawImage(1);
         });

points3.splice(2,1,[scaleDataX, scaleDataY])

arcV1.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 1);    

} 

function update4(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle4.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));

        //choose this player.

  circle4.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(4);
          // console.log(heatArray);
         });

  
points3.splice(1,1,[scaleDataX, scaleDataY])


  // rect4.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV4.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 4);    
}
function update8(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle8.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

          circle8.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(8);
          // console.log(heatArray);
         });

  // line.transition()
  //     .attr('x1', scaleDataX)
  //     .attr('y1', scaleDataY);
  // circle13.on("click", function() {
  //         //old values for dataset
  //       // d3.select("#a1").remove();
  //         drawImage(tag_id);
  //         // console.log(heatArray);
  //        });
  points2.splice(0,1,[scaleDataX, scaleDataY])
  points2.splice(3,1,[scaleDataX, scaleDataY])

  // rect8.transition()
  //       .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV8.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 8);    
}
function update5(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle5.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

  circle5.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(5);
          // console.log(heatArray);
         });

  points2.splice(1,1,[scaleDataX, scaleDataY])


  // rect5.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV5.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 5);    
}
function update2(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle2.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

  circle2.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(2);
          // console.log(heatArray);
         });

points.splice(1,1,[scaleDataX, scaleDataY])
  // rect2.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV2.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 2);    
}

function update11(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle11.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

  circle11.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(11);
          // console.log(heatArray);
         });

points.splice(0,1,[scaleDataX, scaleDataY])
points.splice(3,1,[scaleDataX, scaleDataY])
  // rect11.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV11.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 11);    
}
function update14(datax, datay , heading , energy, speed ) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle14.transition()
        // .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy))
        .style("stroke", speedColor(speed));
        //choose this player.

  circle14.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(14);
          // console.log(heatArray);
         });

points3.splice(0,1,[scaleDataX, scaleDataY])
points3.splice(3,1,[scaleDataX, scaleDataY])

  // rect14.transition()
  //       // .duration(500)
  //       .attr("height" , speed*30 )
  //       .attr("x"  , scaleDataX + 10)
  //       .attr("y" , scaleDataY);

  arcV14.transition()
        // .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , 14);    
}

//caluculate the apperance array for heatmap
function calculateHeat(datax , datay ,tag_id){

   // heatArray[datax][datay] = heatArray[datax][datay]+10;

   for (var i = datax-30; i < datax+30; i++) {
     for (var j = datay-30; j < datay+30; j++) {
      var difX = Math.abs(datax-i),
          difY = Math.abs(datay-j);
          // dis = Math.sqrt(difX*difX + difY*difY);
          // console.log(dis);

      if(i<0||j<0){
        continue;
      }
      if(difX<=10 && difY<=10){
        heatArray[tag_id][i][j] = heatArray[tag_id][i][j]+0.7;
      }
      if(10<difX<=20 && 10<difY<=20){
        heatArray[tag_id][i][j] = heatArray[tag_id][i][j]+0.4;
      }
      else{
        heatArray[tag_id][i][j] = heatArray[tag_id][i][j]+0.1;
     }
     };
   };
   // console.log(heatArray[datax][datay] + " x"+datax +" y"+ datay);
}

function drawImage(tag_id) {
    var context = document.getElementById("canvas").getContext("2d"),
    //The createImageData() method creates a new, blank ImageData object
    //http://www.w3schools.com/tags/canvas_createimagedata.asp
        image = context.createImageData(dx, dy);
        // console.log("dafd")

    for (var y = 0, p = -1; y < dy; ++y) {
      for (var x = 0; x < dx; ++x) {

        var c = d3.rgb(color(heatArray[tag_id][x][y]));
      //         if(x==800){
      //           console.log(dy)
      //           console.log(dx)
      //   console.log(y+" ")
      //   console.log(x+" ")
      //   console.log(heatArray[y][x]);
      // }
        // console.log(color(heatmap[y][x]));
        //this c is every data's color in heatmap.josn
        image.data[++p] = c.r;
        image.data[++p] = c.g;
        image.data[++p] = c.b;
        //this is the transparency
        image.data[++p] = 255;
        // console.log(p);
      }
    }
    // console.log(image);
    context.putImageData(image, 0, 0);
}

function arcTween(transition, newStartAngle , newFinishAngle) {

  // The function passed to attrTween is invoked for each selected element when
  // the transition starts, and for each element returns the interpolator to use
  // over the course of transition. This function is thus responsible for
  // determining the starting angle of the transition (which is pulled from the
  // element's bound datum, d.endAngle), and the ending angle (simply the
  // newAngle argument to the enclosing function).
  transition.attrTween("d", function(d) {

    // To interpolate between the two angles, we use the default d3.interpolate.
    // (Internally, this maps to d3.interpolateNumber, since both of the
    // arguments to d3.interpolate are numbers.) The returned function takes a
    // single argument t and returns a number between the starting angle and the
    // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
    // newAngle; and for 0 < t < 1 it returns an angle in-between.
    var interpolateStart = d3.interpolate(d.startAngle, newStartAngle);
    var interpolateEnd = d3.interpolate(d.endAngle, newFinishAngle);

    // The return value of the attrTween is also a function: the function that
    // we want to run for each tick of the transition. Because we used
    // attrTween("d"), the return value of this last function will be set to the
    // "d" attribute at every tick. (It's also possible to use transition.tween
    // to run arbitrary code for every tick, say if you want to set multiple
    // attributes from a single function.) The argument t ranges from 0, at the
    // start of the transition, to 1, at the end.
    return function(t) {

      // Calculate the current arc angle based on the transition time, t. Since
      // the t for the transition and the t for the interpolate both range from
      // 0 to 1, we can pass t directly to the interpolator.
      //
      // Note that the interpolated angle is written into the element's bound
      // data object! This is important: it means that if the transition were
      // interrupted, the data bound to the element would still be consistent
      // with its appearance. Whenever we start a new arc transition, the
      // correct starting angle can be inferred from the data.
    d.startAngle = interpolateStart(t);
     d.endAngle = interpolateEnd(t);

      // Lastly, compute the arc path given the updated data! In effect, this
      // transition uses data-space interpolation: the data is interpolated
      // (that is, the end angle) rather than the path string itself.
      // Interpolating the angles in polar coordinates, rather than the raw path
      // string, produces valid intermediate arcs during the transition.
      return arc(d);
    };
  });
}

function hm(){
  drawImage(1);
}

//this code run the function each 2000 miliseconds
var num =0;
var maxX=0;
var maxY; 
var max;
var timeStamp;
var jump=0;

var clearID = setInterval(function() {  
  // if(ballP[num].tag_id == 1){
    // console.log("6");
  // }
  // }
  // else{
  // if(conectionAnalysisNum ==1){
  drawPath1();
  // if(conectionAnalysisNum ==2){
  drawPath2();
  // if(conectionAnalysisNum ==3){
  drawPath3();


  num = cte; 

    if (determinePolygon(b1[num][0], b1[num][1]) == -1) newBallPos = computeBallPosition(b1[num][0], b1[num][1], -1);   
  else newBallPos = computeBallPosition(b1[num][0], b1[num][1], 1);


  var eventFile = parseFloat(event[eventLocal][0]);
  if (num > eventFile) {
	document.getElementById("eventInfo").innerHTML = "Time " + document.getElementById("timeClock").innerHTML.replace(/\s/g, '') + ", " + event[eventLocal][1] + " makes " + event[eventLocal][2] + ", <br/> additional information " + "\"" + event[eventLocal][3] + "\"" ;  
	eventLocal = eventLocal + 1; 
  } 
  

	
  timeupdate(); 
		
  update(newBallPos[0], newBallPos[1], ball);   
  
  // if(jump>=20){
  // if(parseInt( ballP[num].timestamp) == timeStamp){
  //     timeStamp = parseInt(ballP[num].timestamp);
  //     }
  // else{
  //     timeStamp = parseInt(ballP[num].timestamp);  
  // if (ballP[num].tag_id == 12) {

  // else if(ballP[num].tag_id == 6){
    update6(p6[num][0],p6[num][1], p6[num][2],p6[num][4], p6[num][5]);
    // else if(ballP[num].tag_id == 1){
    update1(p1[num][0],p1[num][1], p1[num][2],p1[num][4], p1[num][5]); 

	// else if(ballP[num].tag_id == 4){
    update4(p4[num][0],p4[num][1], p4[num][2],p4[num][4], p4[num][5]); 
    //   else if(ballP[num].tag_id == 13){
    // update13(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      // else if(ballP[num].tag_id == 12){
    update8(p8[num][0],p8[num][1], p8[num][2],p8[num][4], p8[num][5]); 
      // else if(ballP[num].tag_id == 5){
    update5(p5[num][0],p5[num][1], p5[num][2],p5[num][4], p5[num][5]); 
      // else if(ballP[num].tag_id == 2){
    update2(p2[num][0],p2[num][1], p2[num][2],p2[num][4], p2[num][5]); 
      // else if(ballP[num].tag_id == 8){
      // else if(ballP[num].tag_id == 11){
    update11(p11[num][0],p11[num][1], p11[num][2],p11[num][4], p11[num][5]); 

    update12(p12[num][0],p12[num][1], p12[num][2],p12[num][4], p12[num][5]); 
      // else if(ballP[num].tag_id == 14){
    update14(p14[num][0],p14[num][1], p14[num][2],p14[num][4], p14[num][5]); 

    // console.log(p1[num][0])

  //   jump = jump-1;
  //   if(jump == 19)
  //   {
  //     jump=(-20);
  //   }
  // }

  // else{
  //   jump = jump + 1;
  //   if(jump = 19){
  //     jump = 31;
  //   }
  // }

      // console.log(ballP[num].tag_id)
      // update(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);
  // }
  // else{
    // console.log(ballP[num].tag_id)
  // }
  // console.log(timeStamp);
  // }
  // console.log(num);
  // ####################### code to stop interval ########################################
  // if (num == 2000) {
  //   console.log(heatArray);
  //   // drawImage();

  //   // for (i=0 ;i<xMax;i++) {
  //   //   for (j=0;j<yMax;j++) {
  //   //     if(heatArray[i][j] > max){
  //   //       max = heatArray[i][j];
  //   //       maxX= i;
  //   //       maxY = j;
  //   //     };
  //   //   }
  //   // };
  //   // console.log(max+"dd " + maxX + "" + maxY);
  //   // clearInterval(clearID);
  // } 
// }
  // ####################### code to stop interval ########################################
}, 200);



// });


  function timeupdate() {
var time = cte / 5; 

var minutes = Math.floor(time / 60);
var tminutes = (minutes < 10 ? "0" : "") + minutes; 

var seconds = Math.floor(time - minutes * 60);
var tseconds = (seconds < 10 ? "0": "") + seconds;

document.getElementById("timeClock").innerHTML = tminutes + " : " + tseconds; 
		
}
	
function update(datax, datay, obVal) {
  obVal.transition()
        .attr("cx" , datax)
        .attr("cy" , datay);
}

var linScaleX = d3.scale.linear()
	.domain([0, 105])
	.range([0, width]); 

var linScaleY = d3.scale.linear()
	.domain([0, 68])
	.range([0, height]); 
		
// Grab a random sample of letters from the alphabet, in alphabetical order.
//this code run the function each 2000 miliseconds

var eventLocal = 0;

function computeBallPosition(x, y, half) {

if (half == -1) {
	c11 = 0.419343067775651; 	 c12 = 0.829826774964493;	  c13 = -1053.20964592050; 
	c21 = 0.171362763533614; 	 c22 = 1.25107701797849;	  c23 = -1053.26640897830; 
	c31 = 0.000498425957288310;  c32 = 0.00186415608728975;   c33 = -1.35000259966186; 
}
else {
	c11 = 0.0263997278461894; 	 c12 = 0.264756363627971;	  c13 = -106.842157410688; 
	c21 = -0.0290420293016211; 	 c22 = 0.419319162793270;	  c23 = -168.736975094544; 
	c31 = -9.78726166142597e-05; c32 = 0.0005983637214073111; c33 = 0.115570008858111; 
}
	xn = c11 * x + c12 * y + c13 * 1; 
	yn = c21 * x + c22 * y + c23 * 1;
	zn = c31 * x + c32 * y + c33 * 1; 
	
	xf = xn / zn;
	yf = yn / zn; 
	
//	console.log(xf, yf, half); 
	
	return [xf, yf]; 
}

function determinePolygon(x, y) {
	x1 = 2131; y1 = 550; 
	x2 = 1693; y2 = 1755; 
	
	A = -(y2 - y1);
	B = x2 - x1; 
	C = -(A*x1 + B*y1);
	
	D = A*x + B*y + C;
	
	if (D > 0) return -1;
	else return 1; 
	
}






var cte = 0;
var tte;
var timer_is_on = 0;

var accelerate = 1; 
var deaccelerate = 1; 

function timedCount(interval) {
	timer_is_on = 1;
    cte = cte+interval; 
    document.getElementById('time_in_tet').value = cte;
    tte = setTimeout(function(){timedCount(interval)}, 190);
	
	if (interval != 1) {
		moveVideo(false); 
	}
	
	if (cte % 100 == 0) {
		jwplayer().seek(cte / 5); 
	}
}

function backTimedCount(interval) { 
	timer_is_on = 1; 
    cte = cte-interval; 
    document.getElementById('time_in_tet').value = cte;
    tte = setTimeout(function(){backTimedCount(interval)}, 190); 
	
	if (interval != 1) {
		moveVideo(false); 
	}
}

function doTimer() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount(1);
    }
	jwplayer().seek(cte / 5); 
	frameButtons(false); 
}

function doTimerForward() {
	clearTimeout(tte); 	

	if (accelerate < 32 ) 
	{
		accelerate = accelerate * 2; 
		timedCount(accelerate); 
	}
	else 
	{
		accelerate = 1;
		timedCount(accelerate); 
	}
}

function doTimerBack() {
    clearTimeout(tte);
	
	if (deaccelerate < 32 )
	{
		deaccelerate = deaccelerate * 2; 
		backTimedCount(deaccelerate); 
	}
	else 
	{
		deaccelerate = 1;
		backTimedCount(deaccelerate); 
	} 
}

function doFrameBack() {
    cte = cte-1; 
	document.getElementById('time_in_tet').value = cte;
	var position = jwplayer().getPosition(); 
	
	moveVideo(true); 
}

function moveVideo(needPause) {

	var seekingTime = cte / 5; 
	jwplayer().seek(seekingTime);  
	
	if (needPause) {
	var pauseOnSeek = true;
	jwplayer().onTime(function () {
		if (jwplayer().getState() === "PLAYING" && pauseOnSeek) {
			this.pause();
			pauseOnSeek = false;
		}
	}); 
	}
}

function doFrameForward() {
	cte = cte+1;
	document.getElementById('time_in_tet').value = cte; 
	var position = jwplayer().getPosition(); 
	
	moveVideo(true); 
}

function doPause() {
    clearTimeout(tte);
    timer_is_on = 0;
	accelerate = 1;
	deaccelerate = 1; 
	jwplayer().play(false); 
	frameButtons(true); 
}

function stopCount() {
    clearTimeout(tte);
    timer_is_on = 0;
	accelerate = 1;
	deaccelerate = 1; 
	jwplayer().stop(); 
	cte = 0; 
	document.getElementById('time_in_tet').value = cte; 
	frameButtons(false); 
}

function frameButtons(option) {
if (!option) {
	document.getElementById("frameBackBtn").disabled = true;
	document.getElementById("frameForwardBtn").disabled = true;
} 
else {
	document.getElementById("frameBackBtn").disabled = false;
	document.getElementById("frameForwardBtn").disabled = false; 

} 
}



