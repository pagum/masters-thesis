export const header = [
  { label: '', id: 0 },
  { label: 'Name', id: 1 },
  { label: 'Application', id: 2 },
  {
    label: 'Producent',
    id: 3,
  },
  {
    label: 'Code',
    id: 4,
  },
  {
    label: 'Location',
    id: 5,
  },
  {
    label: 'Units',
    id: 6,
  },
  {
    label: 'Notes',
    id: 7,
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
    required: true,
    type: 'input',
  },
  {
    label: 'Location',
    name: 'location',
    required: true,
    type: 'input',
  },
  {
    label: 'Units',
    name: 'units',
    required: false,
    type: 'input',
  },
  {
    label: 'Upload image',
    name: 'uploadImage',
    required: false,
    type: 'button',
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
  },
  {
    label: 'Bought',
    name: 'bought',
    required: true,
    type: 'input',
  },
  {
    label: 'Overhaul',
    name: 'overhaul',
    required: true,
    type: 'input',
  },
  {
    label: 'Price',
    name: 'price',
    required: true,
    type: 'input',
  },
];

export const turningParamFields = [
  {
    label: 'Active angle',
    name: 'activeAngle',
    required: true,
    type: 'input',
  },
  {
    label: 'Clereance angle',
    name: 'clearanceAngle',
    required: true,
    type: 'input',
  },
  {
    label: 'Insert thickness',
    name: 'insertThickness',
    required: true,
    type: 'input',
  },
  {
    label: 'Length',
    name: 'length',
    required: true,
    type: 'input',
  },
  {
    label: 'Radius of cutting edge',
    name: 'radiusOfCuttingEdge',
    required: true,
    type: 'input',
  },
  {
    label: 'Hole diameter',
    name: 'holeDiameter',
    required: true,
    type: 'input',
  },
  {
    label: 'Cutting-edge life',
    name: 'cuttingEdgeLife',
    required: true,
    type: 'input',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: true,
    type: 'input',
  },

  {
    label: 'Protective counterink',
    name: 'protectiveCounterink',
    required: true,
    type: 'input',
  },
  {
    label: 'Inscribed circle',
    name: 'inscribedCircle',
    required: true,
    type: 'input',
  },
];

export const millingParamFields = [
  {
    label: 'Shaft diameter',
    name: 'shaftDiameter',
    required: true,
    type: 'input',
  },
  {
    label: 'Overhang',
    name: 'overhang',
    required: true,
    type: 'input',
  },
  {
    label: 'Length',
    name: 'length',
    required: true,
    type: 'input',
  },
  {
    label: 'Cutting edge length',
    name: 'cuttingEdgeLength',
    required: true,
    type: 'input',
  },
  {
    label: 'Diameter',
    name: 'diameter',
    required: true,
    type: 'input',
  },
  {
    label: 'Tool length offset',
    name: 'toolLengthOffset',
    required: true,
    type: 'input',
  },
  {
    label: 'Teeth number',
    name: 'teethNumber',
    required: true,
    type: 'input',
  },
  {
    label: 'Radius of cutting edge',
    name: 'radiusOfCuttingEdge',
    required: true,
    type: 'input',
  },

  {
    label: 'Active angle',
    name: 'activeAngle',
    required: true,
    type: 'input',
  },
  {
    label: 'Cutting edge life',
    name: 'cuttingEdgeLife',
    required: true,
    type: 'input',
  },

  {
    label: 'Angle of inclination',
    name: 'angleOfInclination',
    required: true,
    type: 'input',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: true,
    type: 'input',
  },
  {
    label: 'Usable length',
    name: 'usableLength',
    required: true,
    type: 'input',
  },

  {
    label: 'Colar diameter',
    name: 'colarDiameter',
    required: true,
    type: 'input',
  },
];

export const drillingParamFields = [
  {
    label: 'Shaft diameter',
    name: 'shaftDiameter',
    required: true,
    type: 'input',
  },
  {
    label: 'Overhang',
    name: 'overhang',
    required: true,
    type: 'input',
  },
  {
    label: 'Overall length',
    name: 'overallLength',
    required: true,
    type: 'input',
  },
  {
    label: 'Diameter',
    name: 'diameter',
    required: true,
    type: 'input',
  },

  {
    label: 'Point angle',
    name: 'pointAngle',
    required: true,
    type: 'input',
  },

  {
    label: 'Spiral length',
    name: 'spiralLength',
    required: true,
    type: 'input',
  },
  {
    label: 'Tool length offset',
    name: 'toolLengthOffset',
    required: true,
    type: 'input',
  },
  {
    label: 'Cutting edge life',
    name: 'cuttingEdgeLife',
    required: true,
    type: 'input',
  },
  {
    label: 'Teeth number',
    name: 'teethNumber',
    required: true,
    type: 'input',
  },
  {
    label: 'Count of segments',
    name: 'countOfSegments',
    required: true,
    type: 'input',
  },
  {
    label: 'Max drill depth',
    name: 'maxDrillDepth',
    required: true,
    type: 'input',
  },
  {
    label: 'Core diameter',
    name: 'coreDiameter',
    required: true,
    type: 'input',
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
