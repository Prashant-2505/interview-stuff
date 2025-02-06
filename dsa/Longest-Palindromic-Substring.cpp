#include <bits/stdc++.h>
using namespace std;

string approach1(string s) {
    string ans;

    for (int i = 0; i < s.length(); i++) {
        for (int j = i; j < s.length(); j++) {
            string temp = s.substr(i, j - i + 1); // Extract substring from i to j.
            string tempReverse = temp; // Copy original substring.
            reverse(tempReverse.begin(), tempReverse.end()); // Reverse it.
            if (tempReverse == temp) { // Check if it's a palindrome.
                if (ans.size() < temp.size()) {
                    ans = temp; // Update longest palindrome found.
                }
            }
        }
    }
    return ans;
}

int main() {
    string str = "babad";

    cout << approach1(str) << endl; // Output should be "bab" or "aba".

    return 0;
}
