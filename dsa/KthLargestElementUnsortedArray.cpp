#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> arr = {11, 2, 12, 32, 2, 11, 222, 31, 2};
    int k = 3;

    priority_queue<int> pq;

    for (auto it : arr)
    {
        pq.push(it);
    }

    while (k != 1)
    {
        pq.pop();
        k--;
    }

    cout << pq.top();
    return 0;
}