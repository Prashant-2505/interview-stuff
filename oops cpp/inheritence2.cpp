// supose if we use private as shown in example
// here if we create object in derived class and try to access will give error because all the memeber and method of base class become private in derived class

// now if we make it public then it will work

// inshort public make everything public in derived expect private memeber or method of base class
// private access specifier make everything private

#include <iostream>
using namespace std;

class Engine
{
public:
    void start() { cout << "Engine started!" << endl; }
};

class Car : private Engine
{ // Private inheritance
public:
    void drive()
    {
        start(); // Access Engine's start method inside Car class
        cout << "Car is driving!" << endl;
    }
};

int main()
{
    Car myCar;
    // ❌ ERROR: Can't access start()
    //  myCar.start();   // because it's private in Car
    myCar.drive(); // ✅ Works fine
    return 0;
}
