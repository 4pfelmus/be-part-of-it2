angular.module('app.directives', [])

.directive('blankDirective', [function(){
    return {
        template : "<source type='audio/mpeg' src='https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/{{video.id}}'>"
    }
}]);