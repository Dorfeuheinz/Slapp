import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import {Button,Flex} from 'antd';
import { LineChart } from '@mui/x-charts/LineChart';

const Analytics: React.FC = () => {

  const [seriesNb, setSeriesNb] = React.useState(4);
  const [itemNb, setItemNb] = React.useState(8);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  const lightdata = [
    { id: 0, value: 60, label: 'On' },
    { id: 1, value: 20, label: 'Off' },
    { id: 2, value: 20, label: 'Scheduled' },
  ];

  const gatewaydata = [
    { id: 0, value: 80, label: 'Connected' },
    { id: 1, value: 10, label: 'Disconnected' },
  ];

  const totalassetsdata = [
    { id: 0, value: 10, label: 'Gateways' },
    { id: 1, value: 80, label: 'Lights' },
  
  ];

  return (
    <div style={{width:"100%",height:"100%"}}>
      <div className="flex">
     <Box sx={{ width: '50%', backgroundColor:"transparent" }}>
      <BarChart 
        height={400}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
        skipAnimation={skipAnimation}
      />
      {/* <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="skipAnimation"
        labelPlacement="end"
      /> */}
      {/* <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography> */}
      {/* <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      /> */}
      {/* <Typography id="input-series-number" gutterBottom>
        Number of series
      </Typography> */}
      {/* <Slider
        value={seriesNb}
        onChange={handleSeriesNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={10}
        aria-labelledby="input-series-number"
      /> */}
    </Box>
    <div  style={{width:"50%"}}>
    <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  height={380}
  margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
  grid={{ vertical: true, horizontal: true }}
/>
    </div>
    </div>
    <div style={{display:"flex"}} >
    <div  style={{width: '33%',display:"flex",alignItems:"center",justifyContent:"center"}}>
    <PieChart
      series={[
        {
          data : lightdata,
          innerRadius: 20,
          cornerRadius: 10,
          paddingAngle: 2,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      slotProps={{}}
      height={200}
    />
    </div>
    <div  style={{width: '33%',display:"flex",alignItems:"center",justifyContent:"center"}}>
    <PieChart
      series={[
        {
          data : gatewaydata,
          innerRadius: 20,
          cornerRadius: 10,
          paddingAngle: 2,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </div>
    <div  style={{width: '33%',display:"flex",alignItems:"center",justifyContent:"center"}}>
    <PieChart
      series={[
        {
          data : totalassetsdata,
          innerRadius: 20,
          cornerRadius: 10,
          paddingAngle: 2,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    </div>
    </div>
    </div>
  );
};

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;

const series = [
  {
    label: 'series 1',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
  {
    label: 'series 2',
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
      910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
  {
    label: 'series 3',
    data: [
      1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
      2000, 1716, 2253, 619, 1626, 1209, 1786,
    ],
  },
  {
    label: 'series 4',
    data: [
      2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935, 2262,
      1580, 692, 1559, 1344, 1442, 1593, 1889,
    ],
  },
  {
    label: 'series 5',
    data: [
      968, 1371, 1381, 1060, 1327, 934, 1779, 1361, 878, 1055, 1737, 2380, 875, 2408,
      1066, 1802, 1442, 1567, 1552, 1742,
    ],
  },
  {
    label: 'series 6',
    data: [
      2316, 1845, 2057, 1479, 1859, 1015, 1569, 1448, 1354, 1007, 799, 1748, 1454,
      1968, 1129, 1196, 2158, 540, 1482, 880,
    ],
  },
  {
    label: 'series 7',
    data: [
      2140, 2082, 708, 2032, 554, 1365, 2121, 1639, 2430, 2440, 814, 1328, 883, 1811,
      2322, 1743, 700, 2131, 1473, 957,
    ],
  },
  {
    label: 'series 8',
    data: [
      1074, 744, 2487, 823, 2252, 2317, 2139, 1818, 2256, 1769, 1123, 1461, 672,
      1335, 960, 1871, 2305, 1231, 2005, 908,
    ],
  },
  {
    label: 'series 9',
    data: [
      1792, 886, 2472, 1546, 2164, 2323, 2435, 1268, 2368, 2158, 2200, 1316, 552,
      1874, 1771, 1038, 1838, 2029, 1793, 1117,
    ],
  },
  {
    label: 'series 10',
    data: [
      1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665,
    ],
  },
].map((s) => ({ ...s, highlightScope }));

export default Analytics;