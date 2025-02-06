#include <bits/stdc++.h>
using namespace std;

class Area
{
    int length;
    int breadth;

     // here we not create a constructor it create by defualt and it is default contrucot where an class object invoked a defualt constructor created
public:
    // setter
    void setLength(int L)
    {
        if (L < 0)
        {
            length = 0;
        }
        else
        {
            length = L;
        }
    }
    void setBreadth(int B)
    {
        if (B < 0)
        {
            breadth = 0;
        }
        else
        {
            breadth = B;
        }
    }

    // getter
    int getLength()
    {
        return length;
    }
    int getBreadth()
    {
        return breadth;
    }

    // area
    int area()
    {
        return length * breadth;
    }
};

int main()
{

    Area *a1;
    a1 = new Area();

    a1->setLength(10);
    a1->setBreadth(5);
    a1->getLength();
    a1->getBreadth();
    cout<<a1->area();

    delete(a1);
    a1 = nullptr;

    // Area a1;
    // a1.setLength(10);
    // a1.setBreadth(5);
    // cout << a1.area();
    return 0;
}