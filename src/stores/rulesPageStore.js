import { $api } from "../api";
const { makeAutoObservable } = require("mobx");

class rulesPageStore {
  rules = []

  constructor() {
    makeAutoObservable(this);
  }

  async getRules() {
    let data = await $api.get("/api/rules")
    this.setData(data.data)
  }

  setData(data) {
    this.rules = data
  }

}

export default new rulesPageStore();
