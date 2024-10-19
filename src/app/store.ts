import { makeAutoObservable, observable, action, computed } from "mobx";
import { getAST, getEvaluated } from "monkeylang";

export class Store {
    input: string = ''
    ast: any = null

    constructor() {
        makeAutoObservable(this, {
            input: observable,
            ast: observable.struct,
            handleSubmit: action.bound,
            getAST: computed,
            getEval: computed
        })
    }

    handleSubmit(event: any) {
        event.preventDefault()
        this.input = event.target[0].value
    }

    get getAST() {
        return getAST(this.input)
    }

    get getEval() {
        console.log('action: ', action)
        return getEvaluated(this.input)
    }
}

export default new Store()
