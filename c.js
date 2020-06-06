data = {
    "country": 'US',
    "data": [
      { date: 'Jan 1 – 7, 2017', value: 26 },
      { date: 'Jan 8 – 14, 2017', value: 46 },
      { date: 'Jan 15 – 21, 2017', value: 100 },
      { date: 'Jan 22 – 28, 2017', value: 81 },
      { date: 'Jan 29 – Feb 4, 2017', value: 65 },
      { date: 'Feb 5 – 11, 2017', value: 50 },
      { date: 'Feb 12 – 18, 2017', value: 43 },
      { date: 'Feb 19 – 25, 2017', value: 32 },
      { date: 'Feb 26 – Mar 4, 2017', value: 33 },
      { date: 'Mar 5 – 11, 2017', value: 27 },
      { date: 'Mar 12 – 18, 2017', value: 25 },
      { date: 'Mar 19 – 25, 2017', value: 28 },
      { date: 'Mar 26 – Apr 1, 2017', value: 22 },
      { date: 'Apr 2 – 8, 2017', value: 23 },
      { date: 'Apr 9 – 15, 2017', value: 19 },
      { date: 'Apr 16 – 22, 2017', value: 18 },
      { date: 'Apr 23 – 29, 2017', value: 17 },
      { date: 'Apr 30 – May 6, 2017', value: 19 },
      { date: 'May 7 – 13, 2017', value: 21 },
      { date: 'May 14 – 20, 2017', value: 29 },
      { date: 'May 21 – 27, 2017', value: 22 },
      { date: 'May 28 – Jun 3, 2017', value: 30 },
      { date: 'Jun 4 – 10, 2017', value: 26 },
      { date: 'Jun 11 – 17, 2017', value: 23 },
      { date: 'Jun 18 – 24, 2017', value: 16 },
      { date: 'Jun 25 – Jul 1, 2017', value: 19 },
      { date: 'Jul 2 – 8, 2017', value: 21 },
      { date: 'Jul 9 – 15, 2017', value: 27 },
      { date: 'Jul 16 – 22, 2017', value: 19 },
      { date: 'Jul 23 – 29, 2017', value: 24 },
      { date: 'Jul 30 – Aug 5, 2017', value: 20 },
      { date: 'Aug 6 – 12, 2017', value: 19 },
      { date: 'Aug 13 – 19, 2017', value: 31 },
      { date: 'Aug 20 – 26, 2017', value: 22 },
      { date: 'Aug 27 – Sep 2, 2017', value: 18 },
      { date: 'Sep 3 – 9, 2017', value: 16 },
      { date: 'Sep 10 – 16, 2017', value: 14 },
      { date: 'Sep 17 – 23, 2017', value: 18 },
      { date: 'Sep 24 – 30, 2017', value: 30 },
      { date: 'Oct 1 – 7, 2017', value: 21 },
      { date: 'Oct 8 – 14, 2017', value: 25 },
      { date: 'Oct 15 – 21, 2017', value: 20 },
      { date: 'Oct 22 – 28, 2017', value: 18 },
      { date: 'Oct 29 – Nov 4, 2017', value: 21 },
      { date: 'Nov 5 – 11, 2017', value: 16 },
      { date: 'Nov 12 – 18, 2017', value: 20 },
      { date: 'Nov 19 – 25, 2017', value: 17 },
      { date: 'Nov 26 – Dec 2, 2017', value: 21 },
      { date: 'Dec 3 – 9, 2017', value: 20 },
      { date: 'Dec 10 – 16, 2017', value: 20 },
      { date: 'Dec 17 – 23, 2017', value: 16 },
      { date: 'Dec 24 – 30, 2017', value: 16 },
      { date: 'Dec 31, 2017 – Jan 6, 2018', value: 20 }
    ]
}

dataarr = []


data.data.forEach(element => {
    dataarr.push(element.value)
});

console.log(dataarr)