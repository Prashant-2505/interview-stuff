#include <bits/stdc++.h>
using namespace std;

class TreeNode
{
public:
    int val;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int val)
    {
        this->val = val;
        this->left = nullptr;
        this->right = nullptr;
    }
};

int LCA(TreeNode *root, int l, int r)
{
    if (root == nullptr)
        return 0;

    if(root->val == l || root->val == r)
    {
        return root->val;
    }
    int left_lca = LCA(root->left, l, r);
    int right_lca = LCA(root->right, l, r);

    if(left_lca && right_lca)
    { return root->val; }

   if(left_lca )
   return left_lca;
   if(right_lca)
   return right_lca;
}

int main()
{
    // Create a sample tree
    //        1
    //       / \
    //      2   3
    //     / \
    //    4   5

    TreeNode *root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);

    cout << LCA(root, 4, 5);
    return 0;
}