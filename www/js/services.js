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
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  },{
    id: 2,
    title: 'Pizza with Professors',
    type: 'Sociology Club',
    img: 'img/pizzawithprof.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  }, {
    id: 3,
    title: ' "REEBOOT" Tournament',
    type: 'Gaming',
    img: 'img/RebootTourn.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  }, {
    id: 4,
    title: 'UMKC Stress less fest',
    type: 'UMKC University',
    img: 'img/Stressless.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  },{
    id: 5,
    title: 'Study Abroad in Portugal!!',
    type: 'Travel',
    img: 'img/studyprot.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  },{
    id: 6,
    title: 'SUMMER JOBS',
    type: 'Sponsor',
    img: 'img/Sumjobs.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  },{
    id: 7,
    title: 'Official Textbook sellback & return',
    type: 'UMKC University',
    img: 'img/textbook.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
  },{
    id: 8,
    title: 'Vote for Alad!!',
    type: 'Student Council',
    img: 'img/voteAlad.jpg',
    details: ' ',
    location: ' ',
    date: ' ',
    time: ' '
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
