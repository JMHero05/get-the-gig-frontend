const initState = {
  gigs: [
    {
      id: 1,
      casting_director_id: 4,
      title: 'Little Shop of Horrors',
      gig_type: 'Musical',
      union: false,
      producer: 'Brittaney Walter',
      director: "Henry O'Kon",
      choreographer: 'Brittni Cummings',
      music_director: 'Sen. Doreatha Leuschke',
      opening_date: 'Mon, 01 Feb 2021',
      closing_date: 'Sat, 17 Apr 2021',
      gig_location: "Shea's Performing Arts Center",
      pay_rate: '311/week',
      audition_date: 'Thu, 19 Nov 2020',
      audition_location: 'Pearl Studios',
    },
    {
      id: 2,
      casting_director_id: 2,
      title: 'Hairspray',
      gig_type: 'Musical',
      union: false,
      producer: 'Jaimie Homenick',
      director: 'Miss Neil Lakin',
      choreographer: 'Jessie Willms',
      music_director: 'Yuk Stroman',
      opening_date: 'Sun, 28 Mar 2021',
      closing_date: 'Mon, 24 May 2021',
      gig_location: "Shea's Performing Arts Center",
      pay_rate: '538/week',
      audition_date: 'Tue, 01 Dec 2020',
      audition_location: 'Pearl Studios',
    },
    {
      id: 3,
      casting_director_id: 5,
      title: 'Chicago',
      gig_type: 'Musical',
      union: true,
      producer: 'Nicky Block',
      director: 'Gov. Andre Auer',
      choreographer: 'Josh Schaden',
      music_director: 'Hoa Gislason',
      opening_date: 'Sun, 24 Jan 2021',
      closing_date: 'Thu, 03 Jun 2021',
      gig_location: "Shea's Performing Arts Center",
      pay_rate: '414/week',
      audition_date: 'Sat, 21 Nov 2020',
      audition_location: 'Pearl Studios',
    },
  ],
};

const gigReducer = (state = initState, action) => {
  return state;
};

export default gigReducer;
