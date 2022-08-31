import { $api } from "../api";
const { makeAutoObservable } = require("mobx");

class articlesPageStore {
  articles = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getArticles() {
    let data = await $api.get("/api/articles");
    await data.data.map((data) => {
      data.isOpened = false
    })
    this.setData(data.data);
  }

  setData(data) {
    this.articles = data;
  }
}

export default new articlesPageStore();
