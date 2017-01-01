import { observable, computed } from 'mobx';

export default class Bank {
    @observable name = '';

    constructor({ name }) {
        this.name = name;
    }

    add() {
        this.name += 1;
    }
}