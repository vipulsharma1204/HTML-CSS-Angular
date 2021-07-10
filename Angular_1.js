var myApp = angular.module("myApp", [])
myApp.controller("myCtrl", function($scope){
    $scope.msg = 'Anubhav';
    $scope.xlist = [
        {
            "id":1,
            "name" : "Nature Fresh Mustard Oil",
            "price" : 175,
            "quantity" : 0,
            "amount" : 0,
        },
        {
            "id":2,
            
            "name" : "Dates",
            "price" : 300,
            "quantity" : 0,
            "amount" : 0
        },
        {
            "id":3,
            
            "name" : "Cashewnuts",
            "price" : 1000,
            "quantity" : 0,
            "amount" : 0
        },
        {
            "id":4,
            "name": "Aashirwad Aata_1 KG",
            "price" : 150,
            "quantity" : 0,
            "amount": 0,

        },
        {
            "id":5,
            "name" : "Haldiram bhujia_400gm",
            "price": 36,
            "quantity" : 0,
            "amount": 0,
        }
    ];
    $scope.xvar = 24;
    $scope.inc = function(item){
        item.quantity += 1;
        $scope.getTotal();
    }
    $scope.dec = function(item){
        if(item.quantity>0)item.quantity -= 1;
        $scope.getTotal();
    }
    $scope.gtotal = 0;
    $scope.getTotal = function(){
        var res = 0;
        for(var i=0;i<$scope.xlist.length; i++){
            res += $scope.xlist[i].price*$scope.xlist[i].quantity;
        }
        $scope.gtotal = res;
    }
    $scope.show = function(item) 
    {
        $scope.gtotal=item.quantity;
        
    }
})