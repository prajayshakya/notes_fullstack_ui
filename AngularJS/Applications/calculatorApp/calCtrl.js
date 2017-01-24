var module = angular.module('myApp',[]);

module.controller('calCtrl',calculateCtrl);

function calculateCtrl()
{
    this.resultValue=0;
     this.clickOperator='';
    this.ButtonClicked = function(operator)
    {
        //alert(operator);
        this.clickOperator = operator;
        
    }
    
    this.result = function()
    {
        //alert("= is working");
        var number1 = parseFloat(this.num1);
        var number2 = parseFloat(this.num2);
        
        if(this.clickOperator === '+')
            {
                this.resultValue = number1 + number2;
            }
        else if(this.clickOperator === '-')
            {
                this.resultValue = number1 - number2;
            }
         else if(this.clickOperator === '*')
            {
                this.resultValue = number1 * number2;
            }
         else if(this.clickOperator === '/')
            {
                this.resultValue = number1 / number2;
            }
    }
    
    
}