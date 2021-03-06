window.app = angular.module('rm', 
['ngCookies',
'ngResource',
'ui.bootstrap',
'ui.route',
'rm.system',
'rm.articles.service',
'rm.articles.controller',
'rm.questions.service',
'rm.questions.controller',
'rm.users', 
'rm.roommates.controller',
'rm.roommate.service',
'rm.compatibility.service',
'rm.roommateHelpers.service',
'rm.mutualQuestions.controller',
'rm.getMutual.service',
'rm.mutualQuestions.service',
'rm.mutualModal.directive',
'rm.userProfile.service',
'rm.userProfile.directive',
'rm.sendRoommate.service',
'rm.userPref.service',
'rm.slider.directive',
'rm.favorites.controller']);//,
// 'rm.carousel.controller']);

angular.module('rm.system', []);
angular.module('rm.articles.service', []);
angular.module('rm.articles.controller', []);
angular.module('rm.questions.service', []);
angular.module('rm.questions.controller', []);
angular.module('rm.users', []);
angular.module('rm.roommates.controller', []);
angular.module('rm.roommate.service', []);
angular.module('rm.compatibility.service', []);
angular.module('rm.mutualQuestions.controller', []);
angular.module('rm.getMutual.service', []);
angular.module('rm.roommateHelpers.service', []);
angular.module('rm.mutualQuestions.service', []);
angular.module('rm.mutualModal.directive', []);
angular.module('rm.userProfile.service', []);
angular.module('rm.userProfile.directive', []);
angular.module('rm.sendRoommate.service', []);
angular.module('rm.userPref.service', []);
angular.module('rm.slider.directive', []);
angular.module('rm.favorites.controller', []);
// angular.module('rm.carousel.controller', []);

