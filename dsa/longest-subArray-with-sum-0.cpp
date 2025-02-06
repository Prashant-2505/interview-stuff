#include<bits/stdc++.h>
using namespace std ;
   
int main()
{
 vector<int> arr = {1, 2, -3, 1, 2, -2, -2};

 map<int,int>mp;

 int prefxSum = 0;
 int maxLen = 0;

 for(int i=0;i<arr.size();i++)
 {
     prefxSum+=arr[i];

     if(prefxSum == 0)
     {
        maxLen = i+1;
     }

     if(mp.find(prefxSum) != mp.end())
     {
        maxLen = max(maxLen, i-mp[prefxSum]);
     }
     else
     {
        mp[prefxSum]=i;
     }

 }

 cout<<"maxLen: "<<maxLen<<endl;

return 0;
}