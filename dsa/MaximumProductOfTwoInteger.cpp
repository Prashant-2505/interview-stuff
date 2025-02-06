#include <bits/stdc++.h>
using namespace std;

//! time O(n log n)
int appr1(vector<int> arr)
{
    sort(arr.begin(), arr.end());
    return (arr[arr.size() - 1] * arr[arr.size() - 2]);
}

//! time O(n)
int appr2(vector<int> arr)
{
    int maxi1 = 0;
    int maxi2 = 0;
    for (int i = 0; i < arr.size(); i++)
    {
        maxi1 = max(maxi1, arr[i]);
    }
    for (int i = 0; i < arr.size(); i++)
    {
        if (arr[i] != maxi1)
        {
            maxi2 = max(maxi2, arr[i]);
        }
    }
    return (maxi1 * maxi2);
}

//* time O(N)
int appr3(vector<int> arr)
{
    priority_queue<int> pq;
    for (int i = 0; i < arr.size(); i++)
    {
        pq.push(arr[i]);
    }

    int maxi1 = pq.top();
    pq.pop();
    int maxi2 = pq.top();
    return (maxi1 * maxi2);
}

int main()
{
    vector<int> arr = {2, 4, 5, 6, 8, 9, 7, 5, 4, 2, 43, 4};
    cout << appr1(arr) << endl;
    cout << appr2(arr) << endl;
    cout << appr3(arr) << endl;

    return 0;
}