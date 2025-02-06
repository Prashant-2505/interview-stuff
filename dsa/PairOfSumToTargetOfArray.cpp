// Given a sorted array, find a pair of numbers that sum up to a target value. Write a solution with O(n) time complexity.

#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> arr = {1, 2, 4, 45, 67, 8, 9};
    set<int> st;
    int target = 10;

    for (auto it : arr)
    {
        int remaining = target - it;
        if (st.find(remaining) != st.end())
        {
            cout << it << " " << remaining << endl;
            break;
        }
        else
        {
            st.insert(it);
        }
    }

    return 0;
}