/**
 * @description 该文件 主要是设计模式 相关
 * @author LLQ
 */

/**
 * @description 工厂模式（new出统一的产品）： 提供一个方法，返回new （实例化对象），调用该方法即可。不用一次次写 new Product()
 *              场景：eg：jquery 的设计思路
 */
class Jquery {
    constructor(selector) {
        // len = document.querySelectorAll  ...提供属性
        // this.length = len;
    }
    // 提供方法
    append() {

    }
}
window.$ = function (selector) {
    return new Jquery(selector)
}

/**
 * @description 单例模式：只实例化一次。用闭包实现单例模式。
 *              场景：jq的$只实例化一次。系统中的公共库方法，实例化一次就好。
 */

class SingleMode {
    static
        login() {
        console.log('单例模式')
    }
}
SingleMode.getInstance = (function () {
    let instance; //闭包内的变量不会消亡，私有属性。把函数当成返回值.
    return function () {
        if (!instance) { //判断是否实例化过。因为闭包内的变量不会消失，实例化过便一直存在。
            instance = new SingleMode()
        }
        return instance
    }
})();

const log1 = SingleMode.getInstance()
const log2 = SingleMode.getInstance()
// console.log('true', log1 === log2)

let log3 = SingleMode.getInstance() //无法避免，，因为es6 没有private


    /**
     * @description 适配器模式。
     */
    ; (function () {
        class Adaptee {
            specRequest() {
                return '德国插头'
            }
        }

        class Target {
            constructor() {
                this.adaptee = new Adaptee
            }
            request() {
                let info = this.adaptee.specRequest()
                return info + '转换器'
            }
        }

        let target = new Target()
        target.request()


        // 场景一：老旧系统中的$.ajax()。在弃用jq的时候，可以添加装饰器，用axios来代替。
        var $ = {
            ajax: function () {
                // ajax({ ...}) // axios
            }
        }
        // 场景二：vue中的computed计算属性，是一种适配器模式，如果新需求过来，在原有属性上扩展。
        // export default {
        //     data() {
        //         return {
        //             msg: 'hellp'
        //         }
        //     },
        //     computed: {
        //         msgTar() {
        //             return this.msg + ' world'
        //         }
        //     },
        // }


    })()

    /**
     * @description 装饰器模式。装饰原有的方法，保留原有功能。
     * 
     */
    ; (function () {
        class Circle {
            constructor() {
                this.border = 'solid'
            }
            draw() {
                console.log('原有。。')
            }
        }
        class Decorator {
            constructor(circle) {
                this.circle = circle
            }
            draw() {
                this.circle.draw() //保留原有功能
                this.write(this.circle) //扩展原有方法
            }
            write() {
                let bor = this.circle.border
                console.log('扩展。。')
                return bor = '1px solid #ccc';
            }
        }

        // 使用
        const circle = new Circle()
        circle.draw

        const decorator = new Decorator(circle) //装饰
        decorator.draw() //用装饰器调用原有方法

        // 场景：ES7 decorator 可以装饰类，也可以装饰方法。
        function log(target, name, descriptor) {

        }

        // @log
        class Math {
            add(a, b) {
                return a + b
            }
        }
    })()

    /**
     * @description 观察者模式
     * 
     */
    ; (function () {
        // 主题，一旦被修改，依赖他的所有对象（观察者）都修改
        class Subject {
            constructor() {
                this.state = 0 //状态
                this.observer = [] //依赖的所有对象
            }
            getState() {
                return this.state
            }
            setState(state) {
                this.state = state;
                // 当状态改变，触发所有观察者更新
                this.nofityAllObserver()
            }
            // 添加观察者
            attch(observer) {
                this.observer.push(observer)
            }
            nofityAllObserver() {
                this.observer.forEach(observer => {
                    observer.update() // new Observer()调用upadte
                })
            }
        }

        class Observer {
            constructor(name, subject) {
                this.name = name //观察者名称
                this.subject = subject //依赖的对象 new Subject()
                // 将观察者添加进 依赖的对象中 this 指的是实例化对象 new Observer()
                this.subject.attch(this)
            }
            update() {
                console.log(`${this.name} -- ${this.subject.getState()}`)
            }
        }

        // 验证
        let sub = new Subject()
        let o1 = new Observer('o1', sub) //定义一个观察者，传入依赖的对象
        let o2 = new Observer('o2', sub) //定义一个观察者，传入依赖的对象


        // 当依赖的对象发生改变时：
        sub.setState('22')
    })()



