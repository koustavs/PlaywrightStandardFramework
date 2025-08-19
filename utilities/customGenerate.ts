// import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
// import { Chart as ChartJS, ChartConfiguration } from 'chart.js';
// import fs from 'fs';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// const PASSED = process.env.npm_config_PASSED;
// const FAILED = process.env.npm_config_FAILED;
// const FLAKY = process.env.npm_config_FLAKY;
// const SKIPPED = process.env.npm_config_SKIPPED;
// const TOTAL = process.env.npm_config_TOTAL;
// const width = 410; // Width of the chart
// const height = 250; // Height of the chart
// const date = new Date();
// const utcTimestamp = date.toUTCString(); // Example output: "Tue, 22 Apr 2025 14:30:00 GMT"

// const summaryText = `Total: ${TOTAL} | ✅ Passed: ${PASSED} (⚠️ Flaky: ${FLAKY}) | ❌ Failed: ${FAILED} | ⏭️ Skipped: ${SKIPPED}`;
// fs.writeFileSync('summary.txt', summaryText);
// console.log('Summary written to summary.txt');

// const descriptionPlugin = {
//   id: 'statusDescriptions',
//   afterDraw(chart) {
//     const { ctx, chartArea, width } = chart;
 
//     const lines = [
//       { text: '' },
//       { text: '● Passed:Test cases executed and met expected results.' },
//       { text: '● Flaky:Test cases executed and met expected results after multiple attempts.' },
//       { text: '● Failed:Test cases executed but did not meet the expected results.' },
//       { text: '● Skipped:Test cases not run during this execution cycle.' }
//     ];
 
//     const padding = 10;
//     const lineHeight = 2;
//     let startY = chartArea.bottom + 12;
//     const startX = width / 2 - 200;
 
// ctx.save();
//     ctx.font = '10px Arial';
//     ctx.fillStyle = '#000000';
//     ctx.textBaseline = 'top';
 
//     /*lines.forEach(({ text }, index) => {
//       const textY = startY + index * (lineHeight + padding);
//       ctx.fillText(text, startX, textY + padding / 2);
//     });*/
 
//     ctx.restore();
//   }
// };

// const chartJSNodeCanvas = new ChartJSNodeCanvas({ 
//   width,
//   height, 
//   chartCallback: (ChartJS)=>{
//     ChartJS.register(ChartDataLabels); 
//     ChartJS.defaults.font.size = 13;
//   } 
// });

// const testResults = {
//   passed: Number(PASSED),
//   failed: Number(FAILED),
//   skipped: Number(SKIPPED),
//   total: Number(TOTAL),
//   falky: Number(FLAKY)
// };

// const data = {
//   labels: [`Passed / Flaky`, `Failed`, `Skipped`],
//   datasets: [
//     {
//       data: [
//         testResults.passed,
//         testResults.failed,
//         testResults.skipped,
//       ],
//       backgroundColor: ['#008000', '#FFBF00', '#A9A9A9'],
//       hoverBackgroundColor: ['#218838', '#c82333', '#e0a800'],
//     }
//   ]
// };

// const config: ChartConfiguration = {
//   type: 'pie',
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'right',
//         labels: {color:'#000000',font:{size:11,family:'Arial'}},
//         align:'center',
//       },
//       datalabels:{
//         color: '#fff',
//         formatter: (value: number) => {
//           const percentage = ((value/testResults.total)* 100).toFixed(0);
//           return `${percentage}%`;
//         }
//       },
//       /*title: {
//         display: true,
//         text: `  Total:-  ${TOTAL} | Passed:-  ${PASSED} (Flaky :-  ${FLAKY}) | Failed:-  ${FAILED} | Skipped:-  ${SKIPPED}  `,
//         font: {size:13},
//         position:'bottom',
//         color: '#000000',
//         padding:{bottom: 70, top:5},
//       }*/
//     }
//   },
//   plugins: 
//   [
//     descriptionPlugin, 
//     ChartDataLabels]
// };

// (async () => {
//   const image = await chartJSNodeCanvas.renderToBuffer(config);
//   fs.writeFileSync('test-results.png', image);
//   console.log('Pie chart generated and saved as test-results.png');
// })();