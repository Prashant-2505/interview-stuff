#include <bits/stdc++.h>
using namespace std;

vector<int> merge(vector<int> nums1, vector<int> nums2)
{
    int n = nums1.size();
    int m = nums2.size();

    vector<int> merged(n + m);

    int i = 0, j = 0, k = 0;

    while (i < n && j < m)
    {
        if (nums1[i] <= nums2[j])
        {
            merged[k++] = nums1[i++];
        }
        else
        {
            merged[k++] = nums2[j++];
        }
    }

    while (i < n)
    {
        merged[k++] = nums1[i++];
    }

    while (j < m)
    {
        merged[k++] = nums2[j++];
    }

    return merged;
}

double median(vector<int> nums1, vector<int> nums2)
{
    vector<int> vec = merge(nums1, nums2);
    int len = vec.size();
    if (len % 2 != 0)
    {
        return vec[len / 2]; 
    }
    else
    {
        return (vec[len / 2 - 1] + vec[len / 2]) / 2.0; // Even length -> average of two middle elements
    }
}

int main()
{
    vector<int> nums1 = {1, 2};
    vector<int> nums2 = {3, 4};

    cout << "Median = " << median(nums1, nums2) << endl;

    return 0;
}
