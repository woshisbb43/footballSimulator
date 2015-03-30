
var width = 960,
    height = 500
     τ = 2 * Math.PI;;

var svg = d3.select("body").append("svg").attr("class" , "pitch")
    .attr("width", width)
    .attr("height", height)
    .style('background','green');
    // .on("click" , function(){
    //   d3.select("#player12").remove();
    //   d3.select("#player4").remove();
    //   d3.select("#player5").remove();
    //   d3.select("#player2").remove();
    //   d3.select("#player3").remove();
    //   d3.select("#player1").remove();
    //   d3.select("#player13").remove();
    //   d3.select("#player14").remove();
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
    .attr("id" , "player12");
    // .on("mouseover" , mouseover);

var rect = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player12Speed");

var arc = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player12View");

// ##################player 12 ###########################

// ##################player 6 ###########################
var circle6 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player6");

var rect6 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player6");

var arc6 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV6 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc6)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player6");

// ##################player 6 ###########################
// ##################player 1 ###########################
var circle1 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player1")
    .on("mouseover" , mouseover)
    .on('mouseout' , mouseout);

var rect1 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player1");


var arc1 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV1 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc1)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player1");


// ##################player 1 ###########################
// ##################player 4 ###########################
var circle4 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player4");


var rect4 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player4");


var arc4 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV4 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc4)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player4");


// ##################player 4 ###########################
// ##################player 13 ###########################
var circle13 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player13");


var rect13 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player13");


var arc13 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV13 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc13)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player13");


// ##################player 13 ###########################
// ##################player 14 ###########################
var circle14 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player14");


var rect14 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player14");


var arc14 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV14 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc14)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player14");


// ##################player 14 ###########################
// ##################player 5 ###########################
var circle5 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player5");


var rect5 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player5");


var arc5 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV5 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc5)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player5");


// ##################player 5 ###########################
// ##################player 2 ###########################
var circle2 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player2");


var rect2 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player2");


var arc2 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV2 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc2)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player2");


// ##################player 2 ###########################
// ##################player 3 ###########################
var circle3 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player3");


var rect3 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player3");


var arc3 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV3 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc3)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player3");


// ##################player 3 ###########################
// ##################player 11 ###########################
var circle11 = svg.append("circle")
    .attr("r" , 20)
    .attr("id" , "player11");


var rect11 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5)
    .attr("id" , "player11");


var arc11 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV11 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc11)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white")
    .attr("id" , "player11");


// ##################player 11 ###########################


// ############################# for heatmap ######################################
//heatmap array 
var xMax = 960;
var yMax = 500;
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
      .domain([0, 110])
      .range([0, width]);


  var scaleY = d3.scale.linear()
      .domain([0, 73])
      .range([height, 0]);

  var color = d3.scale.linear()
      .domain([0, 20, 40, 60, 80, 100, 120, 140])
      .range(["#0a0", "#6c0", "#ee0", "#eb4", "#eb9", "#fff" ,"#FF00FF", "#6699FF"]);

  var EnergyColor = d3.scale.linear()
      .domain([0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000])
      .range(["#66FF66", "#CCFF66", "#FFFF99", "#FF9933", "#FF6600", "#FF1919" ,"#CC0000", "#660000"]);

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
      .style("width", width + "px")
      .style("height", height + "px")
      .attr("id" , "canvas");
// ###############################heatmap over#######################################

//load data
d3.csv("2013-11-28_tromso_tottenham_raw_without_data.csv", function(error, ballP) {   

  //player's quickest speed is 13.3202 slowest is 0 

function update12(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle12.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY ,tag_id);    
}

function update6(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle6.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect6.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV6.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update1(datax, datay , heading , energy, speed , tag_id) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle1.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle1.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect1.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV1.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update4(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle4.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect4.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV4.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update13(datax, datay , heading , energy, speed , tag_id) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle13.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle13.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect13.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV13.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update5(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle5.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect5.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV5.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update2(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle2.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect2.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV2.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update3(datax, datay , heading , energy, speed , tag_id) {

  // console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  // console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle3.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle3.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect3.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV3.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update11(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle11.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect11.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV11.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}
function update14(datax, datay , heading , energy, speed , tag_id) {

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
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY)
        .attr("fill" , EnergyColor(energy));
        //choose this player.

  circle14.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          // console.log(heatArray);
         });


  rect14.transition()
        .duration(500)
        .attr("height" , speed*30 )
        .attr("x"  , scaleDataX + 10)
        .attr("y" , scaleDataY);

  arcV14.transition()
        .duration(500)
        .attr("transform" , "translate(" + scaleDataX + "," + scaleDataY + ")")
        .call(arcTween, startHeading,  endHeading );
  
  calculateHeat(scaleDataX ,scaleDataY , tag_id);    
}

//caluculate the apperance array for heatmap
function calculateHeat(datax , datay ,tag_id){

   // heatArray[datax][datay] = heatArray[datax][datay]+10;

   for (var i = datax-30; i < datax+30; i++) {
     for (var j = datay-30; j < datay+30; j++) {
      if(i<0||j<0){
        continue;
      }
     heatArray[tag_id][i][j] = heatArray[tag_id][i][j]+0.4;
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
  num = num + 1;

  if(jump>=20){
  // if(parseInt( ballP[num].timestamp) == timeStamp){
  //     timeStamp = parseInt(ballP[num].timestamp);
  //     }
  // else{
  //     timeStamp = parseInt(ballP[num].timestamp);  
  if (ballP[num].tag_id == 12) {
    update12(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
  else if(ballP[num].tag_id == 6){
    update6(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
    else if(ballP[num].tag_id == 1){
    update1(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 4){
    update4(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 13){
    update13(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 12){
    update12(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 5){
    update5(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 2){
    update2(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 3){
    update3(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 11){
    update11(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
      else if(ballP[num].tag_id == 14){
    update14(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 

    jump = jump-1;
    if(jump == 19)
    {
      jump=(-20);
    }
  }

  else{
    jump = jump + 1;
    if(jump = 19){
      jump = 31;
    }
  }

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
}, 1);


});