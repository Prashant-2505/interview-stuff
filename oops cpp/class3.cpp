//! hy Do We Need Getters and Setters

//* Getters and Setters are used to encapsulate and control access to class data. They provide a safe and structured way to access and modify private member variables.

//~ Key Reasons to Use Getters & Setters
//^ Scenario	              Why Use Getters & Setters?
//* Encapsulation	          Protects data by keeping it private and controlling access via methods.
//^ Data Validation	Ensures   only valid values are assigned (e.g., preventing negative age).
//& Read-Only Properties	  Prevents modification of certain values (only getter, no setter).
//~ Code Maintainability	  Changes in internal data handling don't affect outside code.
//* Access Control	          Can allow only specific modifications to an attribute.




//^ When to Use Getters & Setters
// Scenario	                     Use Getter?	          Use Setter?	Why?
// Encapsulation	                 ✅ Yes	                ✅ Yes	     Controls access to private data
// Data Validation	                 ✅ Yes	                ✅ Yes	     Ensures only valid values are assigned
// Read-Only Properties              ✅ Yes	                ❌ No	     Prevents modification after initialization
// Business Rules	                 ✅ Yes	                ✅ Yes	     Enforces constraints (e.g., salary limits)
// Directly Accessible Data	         ❌ No	                ❌ No	     Unnecessary for simple data storage

#include <iostream>
using namespace std;

class Person
{
private:
    string name; // Private data member

public:
    // Setter method
    void setName(string newName)
    {
        name = newName;
    }

    // Getter method
    string getName()
    {
        return name;
    }
};

int main()
{
    Person p;
    p.setName("Alice"); // ✅ Allowed (controlled modification)
    cout << "Name: " << p.getName() << endl;

    // ❌ This would be invalid if `name` was private:
    // p.name = "Bob";  // Compiler error: ‘name’ is private

    //! this only possible when we have name variable private
    // p.name = "Bob";
    // cout << "Name: " << p.getName() << endl;

    return 0;
}
