function mouseover(){
	circle1.attr("r" , 30);

}
function mouseout(){
	circle1.attr("r" ,20);
}


var points = [
  [0, 0],
  [width, 0],
  [width, height],
  [0,0]
];

var points3 = [
  [0, 0],
  [width, 0],
  [width, height]
  [0,0]
];

var points2 = [
  [0, 0],
  [width, 0],
  [width, height],
  [0,0]

];

var points4 = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [width, 0],
  [width, height]
  [0,0]
];


// var points1 = [
//     [780, 300],
//       [680, 700],
//         [180, 200],
//           [880, 100]
// ];
// ###############################draw line###########################
// var d3line = d3.svg.line()
//       .x(function(d){return d[0];})
//       .y(function(d){return d[1];});

// var nodeNum;


// // svg.append("path")
// //       .attr("d", d3line(points))
// //       .style("stroke-width", 0)
// //       .style("stroke", "black");

// function drawPath(){
//     svg.select("path").transition()
//       .style("stroke-width", 10)
//       .style("stroke", "black")
//       .style("fill", "#F22")
//       //dynamic opacity here
//       .attr('opacity' , '0.3')
//       .delay(1000)
//       .duration(0)
//       //http://bl.ocks.org/hunzy/9929724	
//       .ease("linear")
//       .attr("d", d3line(points));
//     }

// function nodeNum(num){
// 	nodeNum = num;
// }


// ###############################draw line###########################


function move(){
	  // d3.select("#player12").remove();
      d3.select("#player4").remove();
      d3.select("#player5").remove();
      d3.select("#player2").remove();
      d3.select("#player3").remove();
      d3.select("#player6").remove();
      d3.select("#player13").remove();
      d3.select("#player14").remove();
}
