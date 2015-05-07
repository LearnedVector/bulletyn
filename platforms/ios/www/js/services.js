angular.module('starter.services', [])

.factory('Details', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var details = [{
    id: 0,
    title: 'ACM Nerd Night',
    type: 'CompSci',
    img: 'img/ACMnerd.jpg',
    details: 'Come meet fellow CS students, chill out, play some board games, and grab some snacks!',
    location: 'Flarsheim Hall 560L ',
    date: 'May 6th ',
    time: '6:00',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 1,
    title: 'Free Tutorial Help: Math Success Lab',
    type: 'Math Tutor',
    img: 'img/MathTutor.jpg',
    details: 'Free Math tutorial session. For Calc 1-3, Math 210, 220, 250 and 300 level math courses ',
    location: 'Royal Hall room 210 ',
    date: 'May 6th',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  },{
    id: 2,
    title: 'Pizza with Professors',
    type: 'Sociology Club',
    img: 'img/pizzawithprof.jpg',
    details: 'Join the sociology club and sociology department professors for pizza and studying on reading days.',
    location: 'Royal 104',
    date: 'May 7th',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 3,
    title: ' "REEBOOT" Tournament',
    type: 'Gaming',
    img: 'img/RebootTourn.jpg',
    details: 'Come play games and win cash and prizes!',
    location: '1600 S withers Rd. Liberty Mo 64068',
    date: 'May 8th',
    time: '3:00 p.m. - 10:00 p.m.',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 4,
    title: 'UMKC Stress less fest',
    type: 'UMKC University',
    img: 'img/Stressless.jpg',
    details: 'Join us so we can help you stress less',
    location: 'Student Union',
    date: 'May 8th',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  },{
    id: 5,
    title: 'Apply to Study Abroad in Portugal!!',
    type: 'Travel',
    img: 'img/studyprot.jpg',
    details: ' $2000 competitive scholar ship available. Come Study abroad in Portugal! Have a great life experience as well as meet awesome people.',
    location: ' portugese UNI in Lisbon',
    date: 'May 9th',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  },{
    id: 6,
    title: 'SUMMER JOBS',
    type: 'Sponsor',
    img: 'img/Sumjobs.jpg',
    details: 'Equality for all, end poverty, protect civil liberties. Work with Grassroots Campaign.',
    location: '',
    date: 'May 11th',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  },{
    id: 7,
    title: 'Official Textbook sellback & return',
    type: 'UMKC University',
    img: 'img/textbook.jpg',
    details: 'Sell your books to us and get ripped off!!! forreal though. Sell it to other students',
    location: 'UMKC bootstore',
    date: 'May 15th',
    time: 'time on flyers',
    contact: 'person@mail.umkc.edu'
  },{
    id: 8,
    title: 'Vote for Alad!!',
    type: 'Student Council',
    img: 'img/voteAlad.jpg',
    details: 'You will be glad you vote for ALAD!!',
    location: ' ',
    date: 'May 15th',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  }];

  return {
    all: function() {
      return details;
    },
    remove: function(detail) {
      chats.splice(details.indexOf(detail), 1);
    },
    get: function(detailId) {
      for (var i = 0; i < details.length; i++) {
        if (details[i].id === parseInt(detailId)) {
          return details[i];
        }
      }
      return null;
    }
  };
})

.factory('Forums', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var forums = [{
    id: 0,
    title: 'Looking for Hackathon Mate',
    details: 'I am looking for a hackathon mate for Hack midwest. Email me if you need a partner.. person@mail.umkc.edu',
    name: 'Anonymous',
    time: '5 mins',
  }, {
    id: 1,
    title: 'Need someone to mow my lawn!! $20!',
    details: 'I need someone to mow my lawn because I am lazy. Serious inquiries only. Email me at lazy@mail.umkc.edu',
    name: 'Anonymous',
    time: '30 mins'
  },{
    id: 2,
    title: 'Need help on school project. Anyone know how to build a robot?',
    details: 'I want to build a robot. Maybe to take over the world? JK I just need help to make a simple drawing of a robot so I can show my product development class. I can\'t draw',
    name: 'non creative guy',
    time: '1 hr'
  }, {
    id: 3,
    title: 'Looking for study buddy. Calc 3 anyone??',
    details: 'Title says it all. I need a study buddy for calc 3 because it\'s boring as **** studying by myself. email me guy@mail.umkc.edu',
    name: 'hopeless guy',
    time: '1 hr'
  }, {
    id: 4,
    title: 'FOUND YOUR TEXTBOOK!! BUT YOU DIDNT LEAVE A CONTACT NUMBER',
    details: 'I found your textbook... email me at helpfulperson@mail.umkc.edu',
    name: 'ANON',
    time: '1 hr'
  },{
    id: 5,
    title: 'HELP! LOST MY CS 394R TEXT-BOOK!!',
    details: 'I have a test in a day and I haven\'t study. I am screwed so please if you found a textbook with coffee stain in the right hand corner please let me know.',
    name: 'going to fail guy',
    time: '2 hrs'
  },{
    id: 6,
    title: 'Can someone let me borrow a calculator. I will need it in 20 mins....',
    details: 'My calculator died. I have an Econ test in 30 mins. I can\'t add.. help',
    name: 'calc guy',
    time: '2 hrs'
  },{
    id: 7,
    title: 'I will build you a website for $50!',
    details: 'I am a student. I am poor. I will build you a personal website for $50 bucks. contact me at webdev@mail.umkc.edu',
    name: 'web dev',
    time: '3 hrs'
  },{
    id: 8,
    title: 'Need a roomate!!',
    details: 'my other roomate is leaving and we need to sublease his space. It is right next to the school. Does anyone need a space or knows someone who needs a space? contact me at 555 555 5555',
    name: 'Andrew',
    time: '3 hrs'
  }];

  return {
    all: function() {
      return forums;
    },
    remove: function(forum) {
      forums.splice(forums.indexOf(forum), 1);
    },
    get: function(forumId) {
      for (var i = 0; i < forums.length; i++) {
        if (forums[i].id === parseInt(forumId)) {
          return forums[i];
        }
      }
      return null;
    }
  };
});
