import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import JSONResult from '../public/data.json';

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  { markerOffset: 15, name: "Mongolia", coordinates: [105, 50] },
  { markerOffset: 15, name: "China", coordinates: [104, 38] },
  { markerOffset: 15, name: "Japan", coordinates: [135.6, 38] },
  { markerOffset: 15, name: "Ukraine", coordinates: [31, 53.5] },
  { markerOffset: 15, name: "Russia", coordinates: [40, 60] },
  { markerOffset: -2, name: "Hong Kong", coordinates: [114, 25] },
  { markerOffset: 15, name: "Canada", coordinates: [-122, 61] },
];

const usmarkers = [
	{ markerOffset: 10, markerXOffset: 5, name: "WA", coordinates: [-124, 49] },
	{ markerOffset: 10, markerXOffset: 5, name: "OR", coordinates: [-126, 46 ] },
	{ markerOffset: 10, markerXOffset: 7, name: "CA", coordinates: [-124, 40]},
	{ markerOffset: 10, markerXOffset: 6,name: "ID", coordinates: [-118, 46] },
	{ markerOffset: 10, markerXOffset: 8,name: "NV", coordinates: [-120, 42] },
	{ markerOffset: 10, markerXOffset: 8,name: "AZ", coordinates: [-118, 38] },
	{ markerOffset: 10, markerXOffset: 8,name: "TX", coordinates: [-99, 36] },
	{ markerOffset: 0, markerXOffset:0, name: "FL", coordinates: [-83, 30] },
	{ markerOffset: 10, markerXOffset: 6, name: "NY", coordinates: [-75, 44] },
	{ markerOffset: 10, markerXOffset: 6, name: "MA", coordinates: [-73, 46] },
	{ markerOffset: 10, markerXOffset: 0, name: "MI", coordinates: [-87, 46] },
	{ markerOffset: 10, markerXOffset: 0, name: "PA", coordinates: [-77, 45] },
	{ markerOffset: 10, markerXOffset: 7, name: "HI", coordinates: [-150, 20] },
  ];

const MapChart = () => {	
    return (
		<ComposableMap>
			<Geographies geography={JSONResult}>
			{({ geographies }) =>
				geographies.map((geo) => (
				<Geography key={geo.rsmKey} geography={geo} fill="#ECECEC" stroke="#899EAC" strokeWidth="0.5" />
				))
			}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<g transform="scale(0.1)">
						<path d="M 45 90 c -0.558 0 -1.011 -0.452 -1.011 -1.011 V 41.062 c 0 -0.558 0.453 -1.011 1.011 -1.011 s 1.011 0.453 1.011 1.011 v 47.927 C 46.011 89.548 45.558 90 45 90 z" fill="#b6465f" />
						<circle cx="45.001" cy="20.531" r="20.531" fill="#c14953"/>
						<circle cx="52.076" cy="13.456" r="5.056" fill="#ffffff" />
					</g>
					<text
						textAnchor="middle"
						y={markerOffset}
						
						style={{ fontFamily: "system-ui", fill: "#21272A", fontSize: "8px" }}
					>
						{name}
					</text>
				</Marker>
			))}
			{usmarkers.map(({ name, coordinates, markerOffset, markerXOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<g transform="scale(0.07)">
						<path d="M 45 90 c -0.558 0 -1.011 -0.452 -1.011 -1.011 V 41.062 c 0 -0.558 0.453 -1.011 1.011 -1.011 s 1.011 0.453 1.011 1.011 v 47.927 C 46.011 89.548 45.558 90 45 90 z" fill="#b6465f" />
						<circle cx="45.001" cy="20.531" r="20.531" fill="#c14953"/>
						<circle cx="52.076" cy="13.456" r="5.056" fill="#ffffff" />
					</g>
					<text
						textAnchor="middle"
						y={markerOffset}
						x={markerXOffset}
						style={{ fontFamily: "system-ui", fill: "#21272A", fontSize: "5px" }}
					>
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
  );
};

export default MapChart;
