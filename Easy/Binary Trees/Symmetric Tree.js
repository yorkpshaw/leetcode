/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Iterative
    const arr = [];

    arr.push([root.left, root.right]);

    while(arr.length) {
        let [node1, node2] = arr.pop();

        if(node1 === null && node2 === null)
            continue;

        if(node1 === null || node2 === null)
            return false;

        if(node1.val === node2.val) {
            arr.push([node1.left, node2.right]);
            arr.push([node1.right, node2.left]);
        } else {
            return false;
        }
    }

    return true;
};

// let stack = [root, root];
//     while (stack.length > 0) {
//         let t1 = stack.pop();
//         let t2 = stack.pop();

//         if (!t1 && !t2) continue;

//         if (!t1 && t2 || !t2 && t1 || t1.val !== t2.val) return false;

//         stack.push(t1.left);
//         stack.push(t2.right);

//         stack.push(t1.right);
//         stack.push(t2.left);
//     }
//     return true;




// if (root == null) return true;

//     return symmetryChecker(root.left, root.right);
// };

// function symmetryChecker(left, right) {
//     if (left == null && right == null) return true; // If both sub trees are empty
//     if (left == null || right == null) return false; // If only one of the sub trees are empty
//     if (left.val !== right.val) return false; // If the values dont match up

// 	// Check both subtrees but travelled in a mirrored/symmetric fashion
// 	// (one goes left, other goes right)  and make sure they're both symmetric
//     return symmetryChecker(left.left, right.right) &&
//     symmetryChecker(left.right, right.left);




// // Special case...
//     if (!root)
//         return true;
//     // Return the function recursively...
//     return isSame(root.left, root.right);
// };
// // A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
// var isSame = function (leftroot, rightroot) {
//     // If both root nodes are null pointers, return true...
//     // If exactly one of them is a null node, return false...
//     // If root nodes haven't same value, return false...
//     if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
//         return false;
//     // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
//     if (leftroot && rightroot)
//         return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
//     return true;




// Recursive
    // const helper = (node1, node2) => {
    //     if(node1 === null && node2 === null)
    //         return true;

    //     if(node1 === null || node2 === null)
    //         return false;

    //     if(node1.val === node2.val) {
    //         return helper(node1.left, node2.right) && helper(node1.right, node2.left);
    //     } else {
    //         return false;
    //     }
    // }

    // return helper(root.left, root.right);
