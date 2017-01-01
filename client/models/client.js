import { observable, computed } from 'mobx';

export default class Client {
    image = '/client/images/client.jpg'; // fixme

    @observable name = '';
    @observable money = 0;

    @computed get count() {
        return this.money + 'g';
    }

    @computed get initials() {
        return this.name[0];
    }

    constructor({ name, money }) {
        this.name = name;
        this.money = money;
    }
}