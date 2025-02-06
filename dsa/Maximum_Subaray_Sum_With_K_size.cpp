
#include <bits/stdc++.h>
using namespace std;

int findSum(vector<int>& arr, int k)
{
    int n = arr.size();
    int sum =0;
    int ans=0;

    for(int i = 0; i <= n-k; i++)
    {
         for(int j=i;j<i+k;j++)
         {
            sum+=arr[j];
         }
         if(sum > ans)
         {
            ans = sum;
         }
         sum =0;

    }
    return ans;
}

int findSum2(vector<int>& arr, int k) {
    int n = arr.size();
    int sum = 0, ans = 0;

    // Calculate the sum of the first window
    for (int i = 0; i < k; i++) {
        sum += arr[i];
    }
    ans = sum;

    // Slide the window
    for (int i = k; i < n; i++) {
        sum += arr[i] - arr[i - k]; // Add the next element and remove the first element of the current window
        ans = max(ans, sum);       // Update the maximum sum if the current window's sum is greater
    }

    return ans;
}
int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};
    int k = 2;

    cout << findSum(arr, k) << endl;
    return 0;
}