

//^ Abstraction in C++ allows you to hide the complex implementation details of a class and expose only the necessary interface. A simple example of abstraction is to create an abstract class with a pure virtual function and then derive concrete classes that implement that function. Here’s a basic example:


//& Explanation:
//^ Abstract Class (Animal):
//^ The Animal class contains a pure virtual function sound(), which means it cannot be instantiated directly. This class serves as an interface for all derived classes.

//! Derived Classes (Dog and Cat):
//! The Dog and Cat classes inherit from Animal and provide their own implementation of the sound() function.

//~ Usage in main():
//~ In the main() function, we create pointers of type Animal* and assign them to new objects of Dog and Cat. We can call sound() on these pointers without knowing the specific implementation details. This is abstraction at work: we only interact with the high-level interface defined by the Animal class.

//* This example demonstrates abstraction by hiding the implementation details of how each animal produces its sound while providing a simple interface (sound()) that can be used to interact with any type of animal.

#include <bits/stdc++.h>
using namespace std;

class Animal
{
public:
    virtual void sound() = 0;
};
// Derived class: Dog
// Implements the sound() function.
class Dog : public Animal
{
public:
    void sound() { cout << "Woof" << endl; }
};

// Derived class: Cat
// Implements the sound() function.
class Cat : public Animal
{
public:
    void sound() override
    {
        cout << "Meow!" << endl;
    }
};

int main()
{
    Animal *a1 = new Dog();
    Animal *a2 = new Cat();

    a1->sound(); // Output: Woof!
    a2->sound(); // Output: Meow!

    // Clean up
    delete a1;
    delete a2;
    return 0;
}