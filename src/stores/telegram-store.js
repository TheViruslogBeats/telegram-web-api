import AuthService from "../authService";
const { makeAutoObservable } = require("mobx");

class tgwa {
  tg = undefined;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async startWebApi(tg) {
    await console.log(tg);
    await this.setTg(tg);
    await this.fetchAuth();
    this.tg.expand();
  }

  async fetchAuth() {
    if (localStorage.getItem("token") && this.isLoading !== true) {
      this.isLoading = true
      const response = await AuthService.login(this.tg.initDataUnsafe.user)
      localStorage.setItem("token", response.data.accessToken);
      this.isLoading = false
    } else if(!localStorage.getItem("token") && this.isLoading !== true) {
      this.isLoading = true
      const response = await AuthService.registration(
        this.tg.initDataUnsafe.user
      );
      localStorage.setItem("token", response.data.accessToken);
      this.isLoading = false
    }
  }

  async setTg(tg) {
    this.tg = tg;
  }
}

export default new tgwa();
