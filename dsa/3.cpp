//*  Write a function that takes an array of integers and returns the kth largest number in the array.

//^ optimization : use max heap

#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v = {2, 4, 3, 5, 6, 7, 8};
    int k = 1;

    sort(v.begin(), v.end());

    cout << v[v.size() - k ];
    return 0;
}