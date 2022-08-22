const { makeAutoObservable } = require("mobx");

class tgwa {
  tg = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async startWebApi(tg) {
    await console.log(tg);
    await this.setTg(tg);
  }

  async setTg(tg) {
    this.tg = tg;
  }
}

export default new tgwa();
