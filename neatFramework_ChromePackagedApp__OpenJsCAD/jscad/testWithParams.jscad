function getParameterDefinitions() {
  return [
    {
      name: 'width', 
      type: 'float', 
      initial: 10,
      caption: "Width of the cube:", 
    },
    {
      name: 'height', 
      type: 'float', 
      initial: 14,
      caption: "Height of the cube:", 
    },
    {
      name: 'depth', 
      type: 'float', 
      initial: 7,
      caption: "Depth of the cube:", 
    },
    {
      name: 'rounded', 
      type: 'choice',
      caption: 'Round the corners?',
      values: [0, 1],
      captions: ["No thanks", "Yes please"], 
      initial: 1,
    },
  ];
}

function main(params) {
  var result;
  if(params.rounded == 1)
  {
    result = CSG.roundedCube({radius: [params.width, params.height, params.depth], roundradius: 2, resolution: 32});
  }
  else
  {
    result = CSG.cube({radius: [params.width, params.height, params.depth]});
  }
  return result;
}
