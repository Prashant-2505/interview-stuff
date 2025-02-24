//* Run time polymorphism is achieved using inheritance and virtual functions.

//& In C++, run-time polymorphism is achieved through method overriding. The base class defines a method, and derived classes provide their own implementation of that method.


//In this example

//* The base class Animal has a speak() method marked as virtual, indicating that it can be overridden by derived classes.
//& The Dog and Cat classes override the speak() method to provide specific behavior.
//^ The pointer animal can point to objects of both Dog and Cat, and at runtime, the appropriate speak() method is called based on the type of object that animal points to.


#include <bits/stdc++.h>
using namespace std;

class Animal
{
public:
     virtual void speak()
    {
        cout << "Animal speaks" << endl;
    }
};

class Dog : public Animal
{
public:
    void speak()
    {
        cout << "Dog barks" << endl;
    }
};

class Cat : public Animal
{
public:
    void speak()
    {
        cout << "Cat meows" << endl;
    }
};



int main()
{

    Animal *a;
    Dog dog;
    Cat cat;

    a = &dog;
    a->speak();

    a= &cat;
    a->speak();

    return 0;
}