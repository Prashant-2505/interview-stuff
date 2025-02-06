
//^ shallow copy
 let obj =  {
    name: 'John',
    age: 25,
    city: 'New York'
 }

 let obj2 = obj

 console.log(obj, obj2)


 obj2.name = 'tom'

 console.log(obj, obj2)


 


//!   deep copy
 let obj3 =  {
    name: 'John cena',
    age: 25,
    address:{
        city: 'New York'
    }

 }

 let obj4 = {...obj3}
 console.log(obj3, obj4)

 obj4.name = 'tom cena'
 obj4.address.city="delhi"
 console.log(obj3, obj4)





 