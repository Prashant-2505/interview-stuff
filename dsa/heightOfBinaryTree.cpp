#include <iostream>
using namespace std;

class TreeNode
{
public:
    int data;
    TreeNode *left;
    TreeNode *right;

    TreeNode(int val)
    {
        data = val;
        left = nullptr;
        right = nullptr;
    }
};

int calculateHeight(TreeNode *root)
{
     if(root == nullptr) return 0;

     int leftHeight = calculateHeight(root->left);
     int rightHeight = calculateHeight(root->right);

     return max(leftHeight, rightHeight) + 1;
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

    int height = calculateHeight(root);
    cout << "Height of the tree: " << height << endl;

    return 0;
}
