

 function add(x)
 {
    return function(y)
    {
        return function(z)
        {
            return x + y + z;
        }
    }
 }

 let res = add(2)
 let res2 = res(3)
 let res3 = res2(4)
 console.log(res3)



 // practilce example suppose there is multiple item in shop and there is only one type of discount

 function caluclateDiscount(discount)
 {
    return function(itemPrice)
    {
        return itemPrice - (itemPrice * discount);
    }
 }

 let carItem = 90;
 let bikeItem = 150;
 let discount = 0.2;
 let carDiscountedPrice = caluclateDiscount(discount)(carItem);
 let bikeDiscountedPrice = caluclateDiscount(discount)(bikeItem);
 console.log("Car discounted price: ", carDiscountedPrice);
 console.log("Bike discounted price: ", bikeDiscountedPrice);