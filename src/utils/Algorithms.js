/**
 * @description 算法 与 数据结构相关
 * @author LLQ
 */

/**
 * @description 链表。
 * 
 */
var a = {
    val: 'a',
    next: {
        val: 'b',
        next: {
            val: 'c',
            next: {
                val: 'd',
                next: null
            }
        }
    }
};
var A = {
    A: '1'
};
(function () {
    let p = a;
    p = A
    // while (p) {
    //     console.log('遍历', p.val)
    //     p = p.next
    // }


})();


/**
 * @description 字典Map。本质上是键值对的集合（Hash结构）, 各种类型的值（包括对象）都可以当作键(值-值)。
 */

const m = new Map()
var o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true

// 接收数组
var map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name')

// 遍历
for (let key of map.keys()) {
    // console.log(key);
}
for (let value of map.values()) {
    // console.log(value);
}

for (let item of map.entries()) {
    // console.log(item[0], item[1]);
}
// 或者
for (let [key, value] of map.entries()) {
    // console.log(key, value);
}
// 等同于使用map.entries()
for (let [key, value] of map) {
    // console.log(key, value);
}

/**
 * @description 树(有一个根结点，有一个children)
 *              遍历：采用递归。
 */

; (function () {
    var tree = {
        val: 'a',
        children: [
            {
                val: 'b',
                children: [
                    {
                        val: 'd',
                        children: []
                    },
                    {
                        val: 'e',
                        children: []
                    }
                ]
            },
            {
                val: 'c',
                children: [
                    {
                        val: 'f',
                        children: []
                    },
                    {
                        val: 'g',
                        children: []
                    }
                ]
            }
        ]
    }
    //深度优先遍历：递归
    function deefFor(tree) {
        // console.log('深度', tree.val)
        tree.children.forEach(deefFor) //for接收一个回调函数，参数默认是item。
    }
    deefFor(tree)
    // 广度优先遍历：运用队列（先进先出）
    // 1，根结点入队。2，对头出队并且访问。3，把队头的children 挨个入队。4，重复2，3步骤。直到结束。
    function gdFor(tree) {
        var arr = [tree];
        while (arr.length > 0) {
            const n = arr.shift()
            var val = n.val
            // console.log('广度', val)
            n.children.forEach(item => {
                arr.push(item)
            })

        }
    }
    gdFor(tree)

})()

    /**
     * @description 二叉树
     * 
     */

    ; (function () {
        var bt = {
            val: '1',
            left: {
                val: '2',
                left: {
                    val: '4',
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                val: '3',
                left: null,
                right: null
            }
        }
        // 递归版本：
        //  先序遍历

        // 中序遍历

        // 后序遍历

        //  非递归版本：
        //  先序遍历

        // 中序遍历

        // 后序遍历
    })()

    /**
     * @description 图
     */

    ; (function () {
        var tu = {
            'A': ['B'],
            'B': ['C', 'D'],
            'C': ['D'],
            'D': ['A']
        }
    })()