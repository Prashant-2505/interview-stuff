#include <bits/stdc++.h>
using namespace std;

// Memoized helper function to calculate LIS starting at 'index'
int helper(vector<int>& v, int index, vector<int>& dp)
{
    if (dp[index] != -1) {
        return dp[index];
    }

    int len = 1; 
     
    for (int i = index + 1; i < v.size(); i++) {
        if (v[i] > v[index]) {
            len = max(len, 1 + helper(v, i, dp));  // Extend the subsequence
        }
    }

    dp[index] = len;  // Store the result for the current index
    return dp[index];
}

int main() {
    vector<int> v = {10, 9, 2, 5, 3, 7, 101, 18};
    int n = v.size();

    vector<int> dp(n, -1);

    int ans = 1;

    for (int i = 0; i < n; i++) {
        ans = max(ans, helper(v, i, dp));
    }

    cout << ans << endl;  
    return 0;
}
