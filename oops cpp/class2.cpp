#include <bits/stdc++.h>
using namespace std;

class Calculator {
private:
    int a;
    int b;

public:
    // ✅ Parameterized Constructor
    Calculator(int a, int b) {
        this->a = a;
        this->b = b;
    }

   

    // ✅ Setter Methods
    void setA(int a) {
        this->a = a;
    }
    void setB(int b) {
        this->b = b;
    }

    // ✅ Getter Methods
    int getA() {
        return a;
    }
    int getB() {
        return b;
    }

    int add() {
        return a + b;
    }
};

int main() {
    // ✅ Correct way to create an object
    Calculator *c1 = new Calculator(10,20); // Using default constructor

    // ✅ Using setters to set values when we need to modify
    c1->setA(10);
    c1->setB(5);

    cout << "Value of A: " << c1->getA() << endl;
    cout << "Value of B: " << c1->getB() << endl;

    cout << "Addition Result: " << c1->add() << endl;

    delete c1;

    return 0;
}


// here while we are declaring object using parameterized constructor we passing values 10 , 20 and latter we modify it using setter method

// now try to comment setter now the value with paremeterized constructor will be printed