import { makeAutoObservable, observable, action, computed } from "mobx";
import { getAST, getEvaluated } from "monkeylang";
export class Store {
    input: string = ''
    exampleInput: string = ''
    ast: any = null

    constructor() {
        makeAutoObservable(this, {
            input: observable,
            exampleInput: observable,
            ast: observable.struct,
            handleSubmit: action.bound,
            getAST: computed,
            getEval: computed
        })
    }

    handleSubmit(input: string) {
        this.input = input
    }

    get getAST() {
        return getAST(this.input)
    }

    get getEval() {
        const evaluated = getEvaluated(this.input)
        if(evaluated === 'null') {
            return ''
        }
        return evaluated
    }
}

export default new Store()
