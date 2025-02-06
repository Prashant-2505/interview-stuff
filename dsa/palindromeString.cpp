//! Write a function to check whether a given string is a valid palindrome, ignoring spaces, punctuation, and capitalization.

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false

// Input: "No lemon, no melon"
// Output: true

#include <bits/stdc++.h>
using namespace std;

bool check(string s)
{
    int l = 0;
    int r = s.length() - 1;

    while (l <= r)
    {

        if (!isalnum(s[l]))
            l++;
        else if (!isalnum(s[r]))
            r--;
        else
        {
            char t = tolower(s[l]);
            char t2 = tolower(s[r]);

            if (t != t2)
            {
                return false;
            }
            l++;
            r--;
        }
    }

    return true;
}

int main()
{

    string s = "A man, a plan, a canal: Panama";
    string s2 = "race a car";
    string s3 = "No lemon, no melon";

    cout << (check(s) ? "true" : "false") << endl; // Output: true
    cout << (check(s2) ? "true" : "false") << endl; // Output: false
    cout << (check(s3) ? "true" : "false") << endl; // Output: true
    return 0;
}