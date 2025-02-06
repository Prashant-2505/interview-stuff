//! nheritance is one of the four pillars of Object-Oriented Programming (OOP). It allows a new class (child class or derived class) to acquire the properties and behavior of an existing class (parent class or base class).


//^ why Use Inheritance?
//&  ✅ Code Reusability   – Avoids rewriting the same code.
//*  ✅ Extensibility      – Allows adding new features while keeping the existing structure.
//~  ✅ Reduces Redundancy – Prevents code duplication.
//^  ✅ Enhances Maintainability – Easier to modify and update code.


//! Types of Inheritance in C++
//^ Type	                         Description
//~ Single Inheritance	             One class inherits from another class.
//~ Multiple Inheritance	         A class inherits from more than one class.
//~ Multilevel Inheritance	         A derived class inherits from another derived class.
//~ Hierarchical Inheritance	     Multiple classes inherit from a single base class.
//~ Hybrid Inheritance	             A combination of different types of inheritance.



//^ 🔹 Access Specifiers in Inheritance
//&         Inheritance Mode	     Public Members of Parent	  Protected Members of Parent	Private Members of Parent
//*         Public	                 Public in child	          Protected in child	        Not inherited
 //^        Protected	             Protected in child	          Protected in child	        Not inherited
//&         Private	                 Private in child	          Private in child	            Not inherited
       

#include <bits/stdc++.h>
using namespace std;

class claculator
{
    int a;
    int b;

public:
    claculator(int a, int b)
    {
        this->a = a;
        this->b = b;
    }
};

class add : private claculator
{
public:
    add(int a, int b) : claculator(a, b)
    {
        cout << "Addition is : " << a + b << endl;
    }
};

int main()
{
    
    add a(10, 20);
    return 0;
}