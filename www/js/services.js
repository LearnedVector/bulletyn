angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    title: 'ACM Nerd Night',
    type: 'CompSci',
    img: 'img/ACMnerd.jpg',
    details: 'Come meet fellow CS students, chill out, play some board games, and grab some snacks!',
    location: 'Flarsheim Hall 560L ',
    date: 'Thursday April 30th ',
    time: '6:00',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 1,
    title: 'Free Tutorial Help: Math Success Lab',
    type: 'Math Tutor',
    img: 'img/MathTutor.jpg',
    details: 'Free Math tutorial session. For Calc 1-3, Math 210, 220, 250 and 300 level math courses ',
    location: 'Royal Hall room 210 ',
    date: 'date in flyer',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  },{
    id: 2,
    title: 'Pizza with Professors',
    type: 'Sociology Club',
    img: 'img/pizzawithprof.jpg',
    details: 'Join the sociology club and sociology department professors for pizza and studying on reading days.',
    location: 'Royal 104',
    date: 'date in flyer',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 3,
    title: ' "REEBOOT" Tournament',
    type: 'Gaming',
    img: 'img/RebootTourn.jpg',
    details: 'Come play games and win cash and prizes!',
    location: '1600 S withers Rd. Liberty Mo 64068',
    date: 'May 14th',
    time: '3:00 p.m. - 10:00 p.m.',
    contact: 'person@mail.umkc.edu'
  }, {
    id: 4,
    title: 'UMKC Stress less fest',
    type: 'UMKC University',
    img: 'img/Stressless.jpg',
    details: 'Join us so we can help you stress less',
    location: 'Student Union',
    date: ' ',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  },{
    id: 5,
    title: 'Apply to Study Abroad in Portugal!!',
    type: 'Travel',
    img: 'img/studyprot.jpg',
    details: ' $2000 competitive scholar ship available. Come Study abroad in Portugal! Have a great life experience as well as meet awesome people.',
    location: ' portugese UNI in Lisbon',
    date: 'date in flyer',
    time: 'time in flyer',
    contact: 'person@mail.umkc.edu'
  },{
    id: 6,
    title: 'SUMMER JOBS',
    type: 'Sponsor',
    img: 'img/Sumjobs.jpg',
    details: 'Equality for all, end poverty, protect civil liberties. Work with Grassroots Campaign.',
    location: '',
    date: ' ',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  },{
    id: 7,
    title: 'Official Textbook sellback & return',
    type: 'UMKC University',
    img: 'img/textbook.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  },{
    id: 8,
    title: 'Vote for Alad!!',
    type: 'Student Council',
    img: 'img/voteAlad.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' ',
    contact: 'person@mail.umkc.edu'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
