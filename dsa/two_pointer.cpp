//! Write a function to find if two numbers in a sorted array add up to a given target.
// Example:
// Input: [1, 2, 3, 4, 6], Target: 6
// Output: [1, 3] (1-based index)


#include<bits/stdc++.h>
using namespace std ;
   
int main()
{

vector<int> nums = {1, 2, 3, 4, 6};
int target = 6;
 int l = 0;
 int r = nums.size() - 1;

 while(l<r)
 {
     if(nums[l] + nums[r] == target)
     {
        cout<<l<<" "<<r<<endl;
        break;
     }
     else if(nums[l] + nums[r] > target)
     {
        r--;
     }
     else
     {
        l++;
     }

 }
return 0;
}