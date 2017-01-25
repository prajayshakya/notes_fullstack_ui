var module = angular.module('myApp',[]);

module.controller('myCtrl', myList);

function myList()
{   
    this.editMode = false;
    
    this.itemList = [ 'stay focused', 'stay calm','dont give up'];
    
    this.addItems = function()
    {
        //alert("add items");
        this.itemList.push( this.itemsEnter);
        //alert(this.itemList);
        this.itemsEnter = "";
        
    }
    
    this.deleteItems = function(index)
    {
        //alert(obj);
        //alert('delete working');
       
                this.itemList.splice(index,1); 
       
    }
    
    this.editItems = function()
    {
        this.editMode = !this.editMode;
        //alert('edit working');
        
    }
    
}