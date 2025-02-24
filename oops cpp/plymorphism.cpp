//! Polymorphism is one of the core concepts of Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It refers to the ability of a single function, method, or operator to operate on different types of data. Polymorphism allows for code flexibility and reusability.

//~ There are two types of polymorphism in C++: compile-time polymorphism and runtime polymorphism.

//^ Compile-time polymorphism is achieved using function overloading and operator overloading,

//* while runtime polymorphism is achieved using virtual functions and inheritance. Polymorphism is a powerful feature of OOP that allows for code abstraction and modularity.

//^ 1. Compile-time Polymorphism (Static Polymorphism)
//* This type is resolved at compile time.
//*It is achieved through method overloading and operator overloading.
//* Method Overloading: The same method name is used with different parameters (either in number, type, or both).

//& exmaple function/method overloading

#include <bits/stdc++.h>
using namespace std;

class Printer
{
public:
    void print(string message)
    {
        cout << message << endl;
    }
    void print(string message, int times)
    {
        for (int i = 0; i < times; i++)
        {
            cout << message << endl;
        }
    }
   
};

int main()
{

    Printer p1;
    p1.print("yoyo");
    p1.print("yoyo ji", 5);

    return 0;
}