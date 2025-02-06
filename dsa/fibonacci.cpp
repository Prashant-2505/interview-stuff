// F(n)=F(n−1)+F(n−2)
// 0,1,1,2,3,5,8,13,21,34,55,89,…
// Each term is the sum of the two previous terms:
// F(2)=1+0=1
// F(3)=1+1=2
// F(4)=2+1=3
// F(5)=3+2=5, and so on.

#include <bits/stdc++.h>
using namespace std;

int fibo(int n, vector<int> dp)
{
    if (n <= 2)
        return 1;

    if (dp[n] != -1)
        return dp[n];

    int call1 = fibo(n - 1, dp);
    int call2 = fibo(n - 2, dp);
    return dp[n] = call1 + call2;
}

int main()
{
    int n = 5;
    vector<int> dp(n + 1, -1);

    cout << fibo(n, dp);
    return 0;
}