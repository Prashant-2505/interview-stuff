// check in given rang os string can . substring can be palindrome after modicication

// hack==> for palindrom the the character frequcny os similarity has to be even or at max 1 odd or no odd then only it can be palindrome

#include <bits/stdc++.h>
using namespace std;

int main() {
    string s = "aadsjdjspopd";
    int l = 8;
    int r = 11;

    int no = 0;
    unordered_map<char, int> mp;

    cout << "String: " << s << endl;
    cout << "l: " << l << ", r: " << r << endl;

    for (int i = l; i <= r; i++) {
        mp[s[i]]++;
        cout << "Adding character: " << s[i] << endl; // Debug
    }

    for (auto it : mp) {
        cout << it.first << " -> " << it.second << endl; // Debug
        if (it.second % 2 != 0) {
            no++;
        }
    }

    cout << "Odd frequency count: " << no << endl; // Debug
    no > 1 ? cout << "No" : cout << "yes";

    return 0;
}
