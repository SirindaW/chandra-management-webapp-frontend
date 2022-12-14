import { dashboardUrl, eventUrl, reservationUrl, housekeepUrl, guestsUrl } from './pathUrl.js';

import moment from 'moment';

export const menu = [
   { title: 'Dashboard', path: `${dashboardUrl}` },
   { title: 'Reservation', path: `${reservationUrl}` },
   { title: 'Event', path: `${eventUrl}` },
   { title: 'Housekeeping', path: `${housekeepUrl}` },
   { title: 'Guests', path: `${guestsUrl}` },
];

// House Keeping - Inspection page

export const pageList = ['Inspection', 'Housekeepers'];

export const filterSelect = [
   {
      label: 'Room Type',
      options: [
         { label: 'SUP', value: 'sup' },
         { label: 'DEL', value: 'del' },
         { label: 'BEH', value: 'beh' },
         { label: 'FAM', value: 'fam' },
      ],
   },
   {
      label: 'Room status',
      options: [
         { label: 'Vacant', value: 'vacant' },
         { label: 'Occupied', value: 'occupied' },
      ],
   },
   {
      label: 'Room Condition',
      options: [
         { label: 'Clean', value: 'clean' },
         { label: 'Dirty', value: 'dirty' },
      ],
   },
   {
      label: 'Frontdeak status',
      options: [
         { label: 'NOT-RESERVED', value: 'notRerserve' },
         { label: 'CHECK-IN', value: 'checkIn' },
         { label: 'CHECK-OUT', value: 'checkOut' },
      ],
   },
];

export const bookingStatus = [
   { label: 'Confirmed', value: 'Confirmed' },
   { label: 'Cancelled', value: 'Cancelled' },
   { label: 'Stayover', value: 'Stayover' },
   { label: 'Checked Out', value: 'Checked Out' },
];

export const tableHeaderList = ['ROOM', 'TYPE', 'CONDITION', 'ROOM STATUS', 'ARRIVAL DATE', 'DEPARTURE DATE', 'FRONTDESK STATUS', 'ASSIGNED TO', 'DO NOT DISTURB', 'COMMENTS'];

//Guests

export const filterSelect_Guest = {
   guestType: {
      label: 'New or Attended guests',
      options: [
         { label: 'New', value: 'New' },
         { label: 'Attended', value: 'Attended' },
      ],
   },
   country: {
      label: 'Country',
      options: [
         { label: 'Thailand', value: 'Thailand' },
         { label: 'USA', value: 'USA' },
         { label: 'UK', value: 'UK' },
         { label: 'China', value: 'China' },
      ],
   },
   status: {
      label: 'Guest Status',
      options: [
         { label: 'Confirmed', value: 'Confirmed' },
         { label: 'Cancelled', value: 'Cancelled' },
         { label: 'Stayover', value: 'Stayover' },
         { label: 'Checked Out', value: 'Checked Out' },
      ],
   },
};

export const tableHeaderList_Guests = ['NAME', 'EMAIL', 'PHONE', 'COUNTRY', 'ATTENDED GUEST', 'GUEST STATUS'];
export const guestDetails = [
   {
      title: 'Check-In',
      value: '10/23/2022', //dummie value, we have to use API from backend to get value from DB
   },
   {
      title: 'Check-Out',
      value: '10/25/2022', //dummie value, we have to use API from backend to get value from DB
   },
   {
      title: 'Nights',
      value: '2', //dummie value, we have to use API from backend to get value from DB
   },
   {
      title: 'Reservation date',
      value: '10/22/2022', //dummie value, we have to use API from backend to get value from DB
   },
   {
      title: 'Guests',
      value: '2', //dummie value, we have to use API from backend to get value from DB
   },
];
export const navList_specific_guest = ['Accommodation', 'Guest Datails', 'Notes'];

export const tableHeaderList_Event = [
   //header for guest_accomodation table
   'RES ID',
   'NAME',
   'TYPE',
   'PLACE',
   'START',
   'END',
   'BUDGET (THB)',
   'STATUS',
];

export const tableHeaderList_Accommodation = [
   //header for guest_accomodation table
   'RES ID',
   'TYPE',
   'ROOM #',
   'ARRIVAL',
   'DEPARTURE',
   'GUEST(S)',
   'TOTAL',
   'STATUS',
];
export const tableHeaderList_specific_Guest_detail = [
   // header for guest_main and specific_guest_detail and reservation table
   'FIRST NAME',
   'LAST NAME',
   'EMAIL',
   'PHONE',
   'COUNTRY',
   'ATTENDED GUEST',
];

export const guestsDetailDataMockUp = [
   //for guest_accomodation table
   // {
   // RES_ID: 1,
   // TYPE: "BeachHouse" ,
   // ROOM_NUM: "111",
   // ARRIVAL: "2022-11-01",
   // DEPARTURE:  "2022-11-03" ,
   // GUESTS: 2,
   // NIGHTS: 2,
   // TOTAL: 1300,
   //         // "EDIT"
   // },
   // {
   //     RES_ID: 2,
   //     TYPE: "BeachHouse" ,
   //     ROOM_NUM: "112",
   //     ARRIVAL: "2022-11-01",
   //     DEPARTURE:  "2022-11-03" ,
   //     GUESTS: 2,
   //     NIGHTS: 2,
   //     TOTAL: 1300,
   // }
   [1, 'BeachHouse', '111', '2022-11-01', '2022-11-03', 2, 2, 1300],
   [2, 'BeachHouse', '112', '2022-11-01', '2022-11-03', 2, 2, 1300],
];

export const guestMainDataMockUp = [
   //for guest_main and specific_guest_detail and reservation table
   {
      _id: '1',
      fname: 'Jonh',
      lname: 'Doe',
      email: 'JohnDoe@gmail.com',
      phone: '0234567891',
      country: 'USA',
      attended: true,
   },
   {
      _id: '2',
      fname: 'Somsri',
      lname: 'Thangdee',
      email: 'SomsriThangdee@gmail.com',
      phone: '0298765432',
      country: 'Thailand',
      attended: false,
   },
];

export const eventDataMockUp = [
   //for guest_main and specific_guest_detail and reservation table
   {
      _id: '1',
      prefix: 'Mr.',
      fname: 'Chinakit',
      lname: 'Pinclay',
      phone: '0617385146',
      email: 'chinnakitglock@gmail.com',
      min_budget: 100000,
      max_budget: 9999000,
      company: 'ABC Co., Ltd.',
      address: 'Bangladesh',
      zip: '10520',
      addition: 'nice hotel. :)',
      start: '11/11/11',
      end: '11/11/11',
      type: 'Wedding',
      place: 'Hall',
      status: 'Confirmed',
   },
   {
      _id: '2',
      prefix: 'Mr.',
      fname: 'Gung',
      lname: 'Pinclay',
      phone: '0617385146',
      email: 'chinnakitglock@gmail.com',
      min_budget: 100000,
      max_budget: 50088000,
      company: 'ABC Co., Ltd.',
      address: 'Thailand',
      zip: '10520',
      addition: 'nice hotel. :)',
      start: '11/11/11',
      end: '11/11/11',
      type: 'Social',
      place: 'Yard',
      status: 'Confirmed',
   },
];

//Reservation
export const Display_Type_list = [
   {
      label: 'Display',
      options: [
         { label: 'Base Rate', value: 'Base Rate' },
         { label: 'Special', value: 'Special' },
         { label: 'Promotional', value: 'Promotional' },
         { label: 'Package', value: 'Package' },
      ],
   },
   {
      label: 'Select Accommodation',
      options: [
         { label: 'Superior Room', value: 'Superior Room' },
         { label: 'Deluxe Room', value: 'Deluxe Room' },
         { label: 'Beach House', value: 'Beach House' },
         { label: 'Family Premium', value: 'Family Premium' },
      ],
   },
];
export const Availability_header_list = ['TYPE', 'STARTING FROM', 'ARRIVE', 'DEPART', 'AVAILABLE', 'ADULT', 'CHILD', 'QUANTITY', ' '];
export const Availability_dataMockup = [
   {
      TYPE: 'Superior Room',
      START: 'THB 1,590',
      ARRIVE: '10/23/2022',
      DEPART: '10/25/2022',
      AVAILABLE: 14,
   },
   {
      TYPE: 'Deluxe Room',
      START: 'THB 1,690',
      ARRIVE: '10/23/2022',
      DEPART: '10/25/2022',
      AVAILABLE: 7,
   },
];

export const reservation_info_list = ['First Name', 'Last Name', 'Mobile Phone', 'Email Address', 'Address', 'County'];

export const tableHeaderList_payment = [
   // header for guest_main and specific_guest_detail and reservation table
   'FIRST NAME',
   'LAST NAME',
   'EMAIL',
   'PHONE',
   'COUNTRY',
   'ADDRESS',
];

//peak

export const InspDataMockup = [
   {
      room: 'SUP(1)',
      type: 'SUP',
      condition: 'clean',
      roomStatus: 'vacant',
      arrivalData: '10/22/2022',
      departureDate: '10/25/2022',
      frontdeskStatus: 'Ckeck-in',
      assignedTo: 'Susy',
      donotDisturb: 'false',
      comments: ['Lovely room'],
   },
   {
      room: 'SUP(1)',
      type: 'SUP',
      condition: 'clean',
      roomStatus: 'vacant',
      arrivalData: '10/22/2022',
      departureDate: '10/25/2022',
      frontdeskStatus: 'Ckeck-in',
      assignedTo: 'Susy',
      donotDisturb: 'false',
      comments: ['Lovely room'],
   },
   {
      room: 'SUP(1)',
      type: 'SUP',
      condition: 'clean',
      roomStatus: 'vacant',
      arrivalData: '10/22/2022',
      departureDate: '10/25/2022',
      frontdeskStatus: 'Ckeck-in',
      assignedTo: 'Susy',
      donotDisturb: 'false',
      comments: ['Lovely room'],
   },
];

export const table = {
   head: ['GUEST', 'CONF#', 'ROOM', 'STATUS', ''],
   body: {
      arrivals: {
         today: [
            {
               fname: 'Watcharaporn',
               lname: 'C',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Chanwanit',
               lname: 'Nuchyoo',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
         tomorrow: [
            {
               fname: 'Coby',
               lname: 'Paterson',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Antony',
               lname: 'Finnegan',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
      },
      departures: {
         today: [
            {
               fname: 'Rowan',
               lname: 'Horn',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Aine',
               lname: 'Pitts',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
         tomorrow: [
            {
               fname: 'Eadie',
               lname: 'Mooney',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Ritik',
               lname: 'Sawyer',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
      },
      stayovers: {
         today: [
            {
               fname: 'Clarissa',
               lname: 'Wainwright',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Suzanna',
               lname: 'Broadhurst',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
         tomorrow: [
            {
               fname: 'Cydney',
               lname: 'Coulson',
               conf: '1234567890',
               room: 'DEL(1)',
               status: 'Arrival',
            },
            {
               fname: 'Arun',
               lname: 'Camacho',
               conf: '7777777777',
               room: 'DEL(2)',
               status: 'Arrival',
            },
         ],
      },
   },
};

export const table2 = {
   head: ['GUEST', 'REVENUE', 'CHECK-IN', 'NIGHTS'],
   sales: [
      {
         fname: 'Alan',
         lname: 'Lees',
         revenue: '4770',
         checkIn: '10/22/2022',
         nights: '3',
      },
      {
         fname: 'Raihan',
         lname: 'Lester',
         revenue: '9180',
         checkIn: '10/22/2022',
         nights: '4',
      },
   ],
   cancellation: [
      {
         fname: 'Ronny',
         lname: 'Akhtar',
         revenue: '9999',
         checkIn: '10/22/2022',
         nights: '5',
      },
      {
         fname: 'Ieuan',
         lname: 'Cunningham',
         revenue: '5899',
         checkIn: '10/22/2022',
         nights: '4',
      },
   ],
};

export const Calendar_DB_Data = [
   {
      roomType: 'Superior Room',
      data: [6, 7, 0, 9, 15, 11, 9, 8, 12, 2, 2, 7, 0, 9],
   },
   {
      roomType: 'Deluxe Room',
      data: [5, 2, 5, 2, 2, 3, 9, 2, 1, 3, 6, 4, 2, 5],
   },
   {
      roomType: 'Beach House',
      data: [2, 1, 3, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 2],
   },
   {
      roomType: 'Family Premium',
      data: [2, 1, 0, 0, 0, 3, 1, 2, 1, 0, 1, 0, 0, 2],
   },
];

const today = moment();
const dateList = [...Array(14)].map((d, index) => moment(today).add(index, 'days'));
const dayOrdinalSF = (date) => {
   const _date = parseInt(date);
   const lastNumber = _date % 10;
   switch (lastNumber) {
      case 1:
         return date + ' st';
      case 2:
         return date + ' nd';
      case 3:
         return date + ' rd';
      default:
         return date + ' th';
   }
};

const labels = dateList.map((e, index) => e.format('ddd') + ' ' + dayOrdinalSF(e.format('D')));

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top',
      },
      title: {
         display: true,
         text: '',
      },
   },
};

export const data = {
   labels,
   datasets: [
      {
         label: 'Booked Rooms',
         data: [50, 30, 40, 55, 15, 20, 25, 25, 40, 50, 50, 30, 25, 20],
         borderColor: 'rgb(212, 153, 13)',
         backgroundColor: 'rgba(212, 153, 13, 0.5)',
      },
   ],
};
