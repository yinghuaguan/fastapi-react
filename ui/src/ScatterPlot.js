import React, { Component } from 'react';
import Plot from 'react-plotly.js'
import * as embedding from "./assets/umap_emb.json"

/**
 * Create array num length with random values from 0 to mul
 */
function randArr(num, mul) {
  const arr = [];
  const index = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.random() * mul)
    index.push(i);
  }
  return arr;
}


/**
 * Main ScatterPlot component
 */
export default class ScatterPlot extends Component {
  render(){
    return (
    <Plot
      data={[
        {
          x: randArr(20, 3), 
          y: randArr(20, 3), 
          z: randArr(20, 3), 
          mode: 'markers', 
          type:'scatter3d',
        }
      ]}
      layout={{
        height: 400,
        width: 600,
        title: `3D Views`,
      }}
      onClick={(figure) => console.log(figure)}
    />
  );
  }
}