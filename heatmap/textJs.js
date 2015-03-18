
var width = 960,
    height = 500
     τ = 2 * Math.PI;;

var svg = d3.select("body").append("svg").attr("class" , "pitch")
    .attr("width", width)
    .attr("height", height)
    .style('background','green');

// ##################player 12 ###########################
var circle12 = svg.append("circle")
    .attr("r" , 20);

var rect = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5);

var arc = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white");

// ##################player 12 ###########################

// ##################player 6 ###########################
var circle6 = svg.append("circle")
    .attr("r" , 20);

var rect6 = svg.append("rect")
    .attr("width" , 50)
    .attr("height" , 40)
    .attr("opacity" , 0.5);

var arc6 = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(200)

arcV6 = svg.append("path")
    .datum({endAngle: 0 , startAngle: 0})
    .attr("d", arc6)
    .attr("fill" , "#FA8258")
    .attr("opacity" , "0.7")
    .attr("stroke" , "white");

// ##################player 6 ###########################

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
      console.log(heatArray);


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

function update(datax, datay , heading , energy, speed , tag_id) {

  console.log(tag_id)
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
        .attr("cy" , scaleDataY);
        //choose this player.

  circle12.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          console.log(heatArray);
          throw new Error("Something went badly wrong!");
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

function update1(datax, datay , heading , energy, speed , tag_id) {

  console.log(tag_id)
  var startHeading =  parseFloat (heading-1);
  var endHeading =parseFloat (heading+ 1),
  scaleDataX = parseInt(scaleX(datax)),
  scaleDataY = parseInt(scaleY(datay));
  if(speed==0){
    speed = 0.1;
  }

  console.log("x "+scaleDataX + " y" + scaleDataY + " heading" + heading);
  circle6.transition()
        .duration(500)
        .attr("cx" , scaleDataX)
        .attr("cy" , scaleDataY);
        //choose this player.

  circle6.on("click", function() {
          //old values for dataset
        // d3.select("#a1").remove();
          drawImage(tag_id);
          console.log(heatArray);
          throw new Error("Something went badly wrong!");
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
//caluculate the apperance array for heatmap
function calculateHeat(datax , datay ,tag_id){

   // heatArray[datax][datay] = heatArray[datax][datay]+10;

   for (var i = datax-30; i < datax+30; i++) {
     for (var j = datay-30; j < datay+30; j++) {
      if(i<0||j<0){
        continue;
      }
     heatArray[tag_id][i][j] = heatArray[tag_id][i][j]+1;
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

var clearID = setInterval(function() {  
  // if(ballP[num].tag_id == 1){
    // console.log("6");
  // }
  // }
  // else{
  num = num + 1;
  // if(parseInt( ballP[num].timestamp) == timeStamp){
  //     timeStamp = parseInt(ballP[num].timestamp);
  //     }
  // else{
  //     timeStamp = parseInt(ballP[num].timestamp);  
  if (ballP[num].tag_id == 12) {
    update(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
  else if(ballP[num].tag_id == 6){
    update1(ballP[num].x_pos, ballP[num].y_pos, ballP[num].heading, ballP[num].energy, ballP[num].speed, ballP[num].tag_id);} 
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
}, 5);


});