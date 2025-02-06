//! Problem statement
//*You are given the schedule of 'N' meetings with their start time 'Start[i]' and end time 'End[i]'.You have only 1 meeting room. So, you need to return the maximum number of meetings you can organize.

//& Note: the start time of one chosen meeting can’t be equal to the end time of the other chosen meeting.

//^ or example:
//^ 'N' = 3, Start = [1, 3, 6], End = [4, 8, 7].

//^ You can organize a maximum of 2 meetings. Meeting number 1 from 1 to 4, Meeting number 3 from 6 to 7.


#include <bits/stdc++.h>
using namespace std;

   int helper(vector<int>v, vector<int>v2)
   {
       int ans =0;
         vector<pair<int,int>>meetings;
         int last_end_time = -1;
         
         for(int i=0;i<v.size();i++)
         {
             meetings.push_back({v2[i],v[i]});
         }
         
         sort(meetings.begin(),meetings.end());
         
         for(auto it : meetings)
         {
             if(it.second > last_end_time)
             {
                 ans ++;
                 last_end_time = it.first;
             }
         }
         
         return ans;
   }

int main() {
   
    vector<int>v = {0 ,7 ,1 ,4 ,8}; 
       vector<int>v2 = {2 ,9 ,5 ,9 ,10};
   
   int n = v.size();
   
   cout<< helper(v,v2);

    return 0;
}


