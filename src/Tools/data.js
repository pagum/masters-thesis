export const header = [
  { label: '', id: 0 },
  { label: 'Name', id: 1 },
  { label: 'Application', id: 2 },
  {
    label: 'Producent',
    id: 3,
  },

  {
    label: 'Location',
    id: 4,
  },
  {
    label: 'Units',
    id: 5,
  },
];
//   content: [
//     {
//       name: 'tool 1',
//       application: 'milling',
//       producent: 'sandvik',
//       code: 'code',
//       location: 'location',
//       units: 3,
//       notes: 'blablabla',
//       id: 1,
//     },
//     {
//       name: 'tool 2',
//       application: 'milling',
//       producent: 'walter',
//       code: 'code',
//       location: 'location',
//       units: 3,
//       notes: 'blablabla',
//       id: 2,
//     },
//     {
//       name: 'tool 3',
//       application: 'turning',
//       producent: 'sandvik',
//       code: 'code',
//       location: 'location',
//       units: 3,
//       notes: 'blablabla',
//       id: 3,
//     },
//   ],
// };

const applications = ['milling', 'turning', 'drilling'];
const conditions = ['good', 'to control', 'bad'];

export const infoFields = [
  {
    label: 'Name',
    name: 'name',
    required: true,
    type: 'input',
  },
  {
    label: 'Application',
    name: 'application',
    required: true,
    type: 'dropdown',
    menuItems: applications,
  },
  {
    label: 'Producent',
    name: 'producent',
    required: false,
    type: 'input',
  },
  {
    label: 'Location',
    name: 'location',
    required: false,
    type: 'input',
  },
  {
    label: 'Units',
    name: 'units',
    required: true,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Price',
    name: 'price',
    required: true,
    type: 'input',
    dataType: 'number',
  },
];

export const techFields = [
  {
    label: 'Condition',
    name: 'condition',
    required: true,
    type: 'dropdown',
    menuItems: conditions,
  },
  {
    label: 'Time of being used',
    name: 'timeOfBeingUsed',
    required: true,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Bought',
    name: 'bought',
    required: false,
    type: 'input',
  },
  {
    label: 'Overhaul',
    name: 'overhaul',
    required: false,
    type: 'input',
  },
];

export const turningParamFields = [
  {
    label: 'Active angle',
    name: 'activeAngle',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Clereance angle',
    name: 'clearanceAngle',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Insert thickness',
    name: 'insertThickness',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Length',
    name: 'length',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Radius of cutting edge',
    name: 'radiusOfCuttingEdge',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Hole diameter',
    name: 'holeDiameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Cutting-edge life',
    name: 'cuttingEdgeLife',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Protective counterink',
    name: 'protectiveCounterink',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Inscribed circle',
    name: 'inscribedCircle',
    required: false,
    type: 'input',
    dataType: 'number',
  },
];

export const millingParamFields = [
  {
    label: 'Shaft diameter',
    name: 'shaftDiameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Overhang',
    name: 'overhang',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Length',
    name: 'length',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Cutting edge length',
    name: 'cuttingEdgeLength',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Diameter',
    name: 'diameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Tool length offset',
    name: 'toolLengthOffset',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Teeth number',
    name: 'teethNumber',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Radius of cutting edge',
    name: 'radiusOfCuttingEdge',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Active angle',
    name: 'activeAngle',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Cutting edge life',
    name: 'cuttingEdgeLife',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Angle of inclination',
    name: 'angleOfInclination',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Usable length',
    name: 'usableLength',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Colar diameter',
    name: 'colarDiameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
];

export const drillingParamFields = [
  {
    label: 'Shaft diameter',
    name: 'shaftDiameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Overhang',
    name: 'overhang',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Overall length',
    name: 'overallLength',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Diameter',
    name: 'diameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Point angle',
    name: 'pointAngle',
    required: false,
    type: 'input',
    dataType: 'number',
  },

  {
    label: 'Spiral length',
    name: 'spiralLength',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Tool length offset',
    name: 'toolLengthOffset',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Cutting edge life',
    name: 'cuttingEdgeLife',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Teeth number',
    name: 'teethNumber',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Max drill depth',
    name: 'maxDrillDepth',
    required: false,
    type: 'input',
    dataType: 'number',
  },
  {
    label: 'Core diameter',
    name: 'coreDiameter',
    required: false,
    type: 'input',
    dataType: 'number',
  },
];
export const paramFields = [
  {
    type: 'milling',
    params: millingParamFields,
  },
  {
    type: 'drilling',
    params: drillingParamFields,
  },
  {
    type: 'turning',
    params: turningParamFields,
  },
];
const insertData = [
  {
    type: 'D',
    activeAngle: 35,
    clearanceAngle: 5,
    insertThickness: 3.18,
    length: 11.1,
    radiusOfCuttingEdge: 0.2,
    holeDiameter: 2.8,
    cuttingEdgeLife: 900,
    countOfSegments: 8,
    protectiveCountersink: 3.75,
    inscribedCircle: 6.3,
  },
];
const cylinderShaftMillData = [
  {
    shaftDiameter: 20,
    overhang: 64.1,
    length: 104,
    cuttingEdgeLength: 38,
    diameter: 20,
    toolLengthOffset: 0,
    teethNumber: 4,
    radiusOfCuttingEdge: 0.2,
    activeAngle: 80,
    cuttingEdgeLife: 900,
    angleOfInclination: 25,
    countOfSegments: 8,
    usableLength: 51.2,
    collarDiameter: 19,
  },
];

const cylinderShaftDrillData = [
  {
    shaftDiameter: 6.8,
    overhang: 72,
    overallLength: 109,
    diameter: 6.8,
    pointAngle: 118,
    spiralLength: 69,
    toolLengthOffset: 0,
    cuttingEdgeLife: 900,
    teethNumber: 2,
    countOfSegments: 8,
    maxDrillDepth: 69,
    coreDiameter: 0.17,
  },
];
