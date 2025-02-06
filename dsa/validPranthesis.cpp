#include <bits/stdc++.h>
using namespace std;

bool check(string s)
{
    stack<char> st;

    for (auto it : s)
    {
        if (it == '(' || it == '{')
        {
            st.push(it);
        }
        else if (it == ')')
        {
            if (!st.empty() && st.top() == '(')
            {
                st.pop();
            }
            else
            {
                return false;  
            }
        }
        else if (it == '}')
        {
            if (!st.empty() && st.top() == '{')
            {
                st.pop();
            }
            else
            {
                return false;  
            }
        }
    }

    return st.empty();
}

int main()
{
    string s = "(()){}";

    if (check(s))
    {
        cout << "true";
    }
    else
    {
        cout << "false";
    }

    return 0;
}
