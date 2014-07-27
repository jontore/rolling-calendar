var testData = [
  {
    summary: 'Morning meeting',
    start: moment().subtract(2, 'hour').toDate(),
    end: moment().subtract(1, 'hour').toDate()
  },
  {
    summary: 'meeting now',
    start: moment().subtract(10, 'minute').toDate(),
    end: moment().add(20, 'minute').toDate()
  }
];
// {
//   "VCALENDAR": [
//     {
//       "PRODID": "-//Calendar Labs//Calendar 1.0//EN",
//       "VERSION": "2.0",
//       "CALSCALE": "GREGORIAN",
//       "METHOD": "PUBLISH",
//       "X-WR-CALNAME": "Usa Holidays",
//       "X-WR-TIMEZONE": "America/New_York",
//       "VEVENT": [
//         {
//           "DTSTART;VALUE=DATE": "20130101",
//           "DTEND;VALUE=DATE": "20130102",
//           "DTSTAMP": "20111213T124028Z",
//           "UID": "9d6fa48343f70300fe3109efe@calendarlabs.com",
//           "CREATED": "20111213T123901Z",
//           "DESCRIPTION": "Visit http",
//           "LAST-MODIFIED": "20111213T123901Z",
//           "LOCATION": "",
//           "SEQUENCE": "0",
//           "STATUS": "CONFIRMED",
//           "SUMMARY": "New Year's Day",
//           "TRANSP": "TRANSPARENT"
//         },
//         {
//           "DTSTART;VALUE=DATE": "20130121",
//           "DTEND;VALUE=DATE": "20130122",
//           "DTSTAMP": "20111213T124028Z",
//           "UID": "03fd8b92ac65ba1d2883d915c@calendarlabs.com",
//           "CREATED": "20111213T123901Z",
//           "DESCRIPTION": "Visit http",
//           "LAST-MODIFIED": "20111213T123901Z",
//           "LOCATION": "",
//           "SEQUENCE": "0",
//           "STATUS": "CONFIRMED",
//           "SUMMARY": "M L King Day",
//           "TRANSP": "TRANSPARENT"
//         },
//         {
//           "DTSTART;VALUE=DATE": "20130214",
//           "DTEND;VALUE=DATE": "20130215",
//           "DTSTAMP": "20111213T124028Z",
//           "UID": "4ea01fceaa9f61bbacb7d7ba6@calendarlabs.com",
//           "CREATED": "20111213T123901Z",
//           "DESCRIPTION": "Visit http",
//           "LAST-MODIFIED": "20111213T123901Z",
//           "LOCATION": "",
//           "SEQUENCE": "0",
//           "STATUS": "CONFIRMED",
//           "SUMMARY": "Valentine's Day",
//           "TRANSP": "TRANSPARENT"
//         }
//       ]
//     }
//   ]
// }
