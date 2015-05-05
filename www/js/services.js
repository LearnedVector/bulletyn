angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    title: 'ACM Nerd Ngiht',
    type: 'CompSci',
    img: 'img/ACMnerd.jpg'
  }, {
    id: 1,
    title: 'Free Tutorial Help: Math Success Lab',
    type: 'Math Tutor',
    img: 'img/MathTutor.jpg'
  },{
    id: 2,
    title: 'Pizza with Professors',
    type: 'Sociology Club',
    img: 'img/pizzawithprof.jpg'
  }, {
    id: 3,
    title: ' "REEBOOT" Tournament',
    type: 'Gaming',
    img: 'img/RebootTourn.jpg'
  }, {
    id: 4,
    title: 'UMKC Stress less fest',
    type: 'UMKC University',
    img: 'img/Stressless.jpg'
  },{
    id: 5,
    title: 'Study Abroad in Portugal!!',
    type: 'Travel',
    img: 'img/studyprot.jpg'
  },{
    id: 6,
    title: 'SUMMER JOBS',
    type: 'Sponsor',
    img: 'img/Sumjobs.jpg'
  },{
    id: 7,
    title: 'Official Textbook sellback & return',
    type: 'UMKC University',
    img: 'img/textbook.jpg'
  },{
    id: 8,
    title: 'Vote for Alad!!',
    type: 'Student Council',
    img: 'img/voteAlad.jpg'
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
