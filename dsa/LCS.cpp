// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;

int LCS(string str1,string str2,int i, int j,int n, int m, vector<vector<int>>&dp)
{
        if(i > n-1 || j > m-1) return 0;
        
        if(dp[i][j] != -1)return dp[i][j];
        
        if(str1[i] == str2[j]) return 1+LCS(str1,str2,i+1,j+1,n,m,dp);
        
        int call1 = LCS(str1,str2,i+1,j,n,m,dp);
        int call2 = LCS(str1,str2,i,j+1,n,m,dp);
        return  dp[i][j] = max(call1,call2);
        
}

int main() {
    
    string s1 = "ABCBDAB";
   string s2=  "BDCAB";
   
   
   int n = s1.size();
   int m = s2.size();
      vector<vector<int>>dp(n,vector<int>(m,-1));

   
   cout<<LCS(s1,s2,0,0,n,m,dp);


    return 0;
}