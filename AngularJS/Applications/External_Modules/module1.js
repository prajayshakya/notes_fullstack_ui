var module = angular.module('myApp',['module2','ngTagsInput']);

module.controller('DemoCtrl', function(){
    this.tags = [
    { text: 'option1' },
    { text: 'option2' },
    { text: 'option3' }
  ];
})