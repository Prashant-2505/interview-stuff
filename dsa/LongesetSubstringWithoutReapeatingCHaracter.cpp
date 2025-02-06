#include <bits/stdc++.h>
using namespace std;

int helper(string s, int i) {
    unordered_map<char, int> charIndex; // To store the last seen index of characters
    int maxLength = 0;                 // To store the maximum length
    int start = 0;                     // Start index of the current window

    for (int end = 0; end < s.size(); ++end) {
        char currentChar = s[end];

        // If the character is already in the window, move the start
        if (charIndex.find(currentChar) != charIndex.end()) {
            start = max(start, charIndex[currentChar] + 1);
        }

        // Update the character's last seen index
        charIndex[currentChar] = end;

        // Update the maximum length
        maxLength = max(maxLength, end - start + 1);
    }

    return maxLength;
}

int main() {
    string s = "abcabcbb";
    cout << helper(s, 0) << endl;
    return 0;
}
