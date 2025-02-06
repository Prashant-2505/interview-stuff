
 //! in freeze method we cant modify ,add new field  => Object.freeze() only works shallowly. While the immediate properties of the object are frozen, nested objects are still mutable unless they are also explicitly frozen.
 
 //* in seal we can modify fields but we cant add new fields

//  Comparison Table
// Feature	                    Object.freeze()	Object.seal()
// Add Properties	            ❌ Not allowed	  ❌ Not allowed
// Delete Properties	        ❌ Not allowed	  ❌ Not allowed
// Modify Properties	        ❌ Not allowed	  ✅ Allowed
// Change Property Attributes	❌ Not allowed	  ❌ Not allowed
// Nested Objects Mutable?	    ✅ (unless frozen) ✅ (unless sealed)


 const obj = { name:"tom",age:90}
 console.log(obj)
 
 obj.name = "jerry";
 console.log(obj)
 Object.freeze(obj)
 obj.name = "bob"
 console.log(obj)
 obj.city = "London"
 console.log(obj)


 console.log("===================================================>")

 let obj2 = { post:"doctor",fruit:"nonu"}
 console.log(obj2)
 Object.seal(obj2)
 obj2.fruit = "mango"
 console.log(obj2)
 obj2.age = 100
 console.log(obj2)