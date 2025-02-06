//& LOngest subarray with sume of zero return its length

//* ALgo : hashmap + prfix 

#include <bits/stdc++.h>
#include <vector>
using namespace std;

bool checkZero(vector<int>temp)
{
    int sum ;
    
    for(auto it:temp)
    {
        sum+=it;
    }
    return sum==0 ? true : false;
}

 int helper(  vector<int>v, int n, int i)
 {   
     int ans =0;
     vector<int>temp;
       for(int i=0;i<n;i++)
       {
           for(int j=i;j<n;j++)
           {   
               for(int k=i;k<=j;k++)
               {
                   temp.push_back(v[k]);
               }
               
               int size = temp.size();
               checkZero(temp) ? ans=max(ans,size ): ans;
                temp.clear(); // Clear the vector
           }
       }
       return ans;
 }

int main() {
   
   vector<int>v = {3 ,-2, 1, -2, 1};
   
   int n = v.size();
   
   cout<< helper(v,n,0);

    return 0;
}


