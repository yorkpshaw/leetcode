/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

    if (node === null) {
        return null;
    }

    const map = new Map();
    function clone(root) {
        if (!map.has(root.val)) {
            let copy = new Node(root.val);
            map.set(root.val, copy);

            for (let i = 0; i < root.neighbors.length; i++) {
                copy.neighbors.push(clone(root.neighbors[i]))
            }
            // map.get(root.val).neighbors = root.neighbors.map(clone);
        }
        return map.get(root.val);
    }

    return clone(node);
};

// https://leetcode.com/problems/clone-graph/
