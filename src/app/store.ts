import { makeAutoObservable, observable, action, computed } from "mobx";
import { getAST, getEvaluated } from "monkeylang";

let TREE: any = null
export class Store {
    input: string = ''
    ast: any = null
    stack: any[] = []
    popAmount: number = 0

    constructor() {
        makeAutoObservable(this, {
            input: observable,
            stack: observable,
            popAmount: observable,
            ast: observable.struct,
            handleSubmit: action.bound,
            iterate: action,
            getAST: computed,
            getEval: computed
        })
    }

    handleSubmit(input: string) {
        this.input = input
    }

    iterate(obj: any, path: any) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                const node = { [property]: obj[property] }
                // console.log('node: ', property, node)
                this.stack.push(node)
                path.push(node)
                this.popAmount++
                if (typeof obj[property] === "object") {
                    this.iterate(obj[property], path)
                } else {
                    for (let i = 0; i < this.popAmount; i++) {
                        // const popped = this.stack.shift()
                        // console.log(toJS(popped), toJS(this.stack))
                        const node: any = { title: property, children: [TREE] }
                        TREE = node
                    }
                    this.popAmount = 0
                }
            } 
        }
        
        return path
    }   

    get getAST() {
        const ast = getAST(this.input)
        const statements = ast.statements
        const path = this.iterate(statements, [])
        const tree = [{title: "Program", key: '1', children: path}]
        // console.log('path: ', path, TREE)
        return statements.length ? tree : []
    }

    get getEval() {
        return getEvaluated(this.input)
    }
}

export default new Store()
