import axios from "axios";
import { API_URL } from "../api";
import AuthService from "../authService";
const { makeAutoObservable } = require("mobx");

class tgwa {
  tg = undefined;

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
    if (localStorage.getItem("token")) {
      const response = await AuthService.login(this.tg.initDataUnsafe.user)
      localStorage.setItem("token", response.data.accessToken);
    } else {
      const response = await AuthService.registration(
        this.tg.initDataUnsafe.user
      );
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
    }
  }

  async setTg(tg) {
    this.tg = tg;
  }
}

export default new tgwa();
