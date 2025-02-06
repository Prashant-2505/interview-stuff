#include <bits/stdc++.h>
using namespace std;

int LCS(string s, string t, int m, int n, vector<vector<int>>& dp)
{
    if (m == s.size() || n == t.size())
    {
        return 0;
    }

    if (dp[m][n] != -1)
    {
        return dp[m][n];
    }

    if (s[m] == t[n])
    {
        return dp[m][n] = 1 + LCS(s, t, m + 1, n + 1, dp);
    }

    int call1 = LCS(s, t, m, n + 1, dp); // skip character from t
    int call2 = LCS(s, t, m + 1, n, dp); // skip character from s

    return dp[m][n] = max(call1, call2);
}

int main()
{
    string s1 = "ABCBDAB";
    string s2 = "BDCABB";

    int m = s1.size(); 
    int n = s2.size(); 

    vector<vector<int>> dp(m + 1, vector<int>(n + 1, -1));

    cout << LCS(s1, s2, 0, 0, dp);

    return 0;
}
