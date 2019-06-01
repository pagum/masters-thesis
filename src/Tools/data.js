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

export const infoFields = [
  {
    label: 'Name',
    required: true,
    type: 'input',
  },
  {
    label: 'Application',
    required: true,
    type: 'dropdown',
  },
  {
    label: 'Producent',
    required: true,
    type: 'input',
  },
  {
    label: 'Location',
    required: true,
    type: 'input',
  },
  {
    label: 'Units',
    required: false,
    type: 'input',
  },
  {
    label: 'Upload image',
    required: false,
    type: 'button',
  },
];

export const paramFields = [
  {
    label: 'Type',
    required: true,
    type: 'input',
  },
  {
    label: 'Active angle',
    required: true,
    type: 'input',
  },
  {
    label: 'Clereance angle',
    required: true,
    type: 'input',
  },
  {
    label: 'Insert thickness',
    required: true,
    type: 'input',
  },
  {
    label: 'Length',
    required: true,
    type: 'input',
  },
  {
    label: 'Radius of cutting edge',
    required: true,
    type: 'input',
  },
  {
    label: 'Hole diameter',
    required: true,
    type: 'input',
  },
  {
    label: 'Cutting-edge life',
    required: true,
    type: 'input',
  },
  {
    label: 'Count of segments',
    required: true,
    type: 'input',
  },
  {
    label: 'Tolerance',
    required: true,
    type: 'input',
  },
  {
    label: 'Protective counterink',
    required: true,
    type: 'input',
  },
];

export const techFields = [
  {
    label: 'Condition',
    required: false,
    type: 'dropdownlist',
  },
  {
    label: 'Time of being used',
    required: false,
    type: 'input',
  },
  {
    label: 'Bought',
    required: false,
    type: 'input',
  },
  {
    label: 'Overhaul',
    required: false,
    type: 'input',
  },
  {
    label: 'Price',
    required: false,
    type: 'input',
  },
];
