var module=angular.module('myApp',[]);

module.controller('showCtrl', ngShowCtrl);

function ngShowCtrl()
{
    this.myList = [
        
        {name:"prajay", city:"commerce"},
        {name:"Tekendra", city:"houston"},
        {name:"Islamodin", city:"baltimore"},
        {name:"Abhishek", city:"Moorehead"},
        {name:"Chadani", city:"Plano"}
    ]
    
}