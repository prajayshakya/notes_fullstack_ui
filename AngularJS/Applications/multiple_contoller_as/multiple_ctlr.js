var module = angular.module('myApp',[]);

module.controller('ctrl1', ctrl1);
module.controller('ctrl2', ctrl2);

function ctrl1()
{
    this.message = "from controller1";
}

function ctrl2()
{
    this.message = "from controller2";
}


