// src/BarChart.js
import React from 'react';
import * as d3 from 'd3';

const LinePlot = () => {
  const data = [
    { label: 'A', value: 10 },
    { label: 'B', value: 20 },
    { label: 'C', value: 30 },
  ];

  const xScale = d3.scaleBand()
    .domain(data.map((d) => d.label))
    .range([0, 300]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([0, 200]);

  return (
    <svg width={300} height={200}>
      {data.map((d, i) => (
        <rect
          key={i}
          x={xScale(d.label)}
          y={200 - yScale(d.value)}
          width={xScale.bandwidth()}
          height={yScale(d.value)}
          fill="steelblue"
        />
      ))}
    </svg>
  );
};

export default LinePlot;