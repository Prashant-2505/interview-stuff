//* first non repeating character in the string
#include <bits/stdc++.h>
using namespace std;

int main() {
    string str = "yyxzz";

    unordered_map<char, int> mp;

    // Count frequency of each character
    for (auto it : str) {
        mp[it]++;
    }

    // Find the first non-repeating character
    for (auto it : str) {
        if (mp[it] == 1) {
            cout << it;
            break;
        }
    }

    return 0;
}
