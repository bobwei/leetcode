/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
var postorderTraversal = function(root) {
    if (!root){

        return [];
    }

    var stack = [root];
    var rootStack = [];
    var path = [];

    while (stack.length || rootStack.length){
        var node = stack.pop();
        if (node){
            if (node.left || node.right){
                rootStack.push(node);
            }
            if (node.right){
                stack.push(node.right);
            }
            if (node.left){
                stack.push(node.left);
            }
            if (node.left === null && node.right === null){
                path.push(node.val);
            }
        }

        while (rootStack.length){
            var rootNode = rootStack.pop();
            if (rootNode){
                if (rootNode.left && (rootNode.right === null) &&
                    path.indexOf(rootNode.left.val) > -1){
                    path.push(rootNode.val);
                }else if (rootNode.right && (rootNode.left === null) &&
                            path.indexOf(rootNode.right.val) > -1){
                    path.push(rootNode.val);
                }else if (rootNode.left && rootNode.right &&
                            path.indexOf(rootNode.right.val) > -1 &&
                            path.indexOf(rootNode.left.val) > -1){
                    path.push(rootNode.val);
                }else{
                    rootStack.push(rootNode);
                    break;
                }
            }
        }
    }

    return path;
};

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var root;

root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(6);
root.left.left.right = new TreeNode(7);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(8);
root.right.right.right = new TreeNode(9);

console.log(postorderTraversal(root));

root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(4);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(3);

console.log(postorderTraversal(root));

root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(6);
root.left.left.right = new TreeNode(7);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(8);
root.right.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
root.left.right.right = new TreeNode(11);
root.left.left.left.left = new TreeNode(12);
root.left.left.left.left.left = new TreeNode(13);

console.log(postorderTraversal(root));
