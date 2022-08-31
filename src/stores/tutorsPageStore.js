import { $api } from "../api";
const { makeAutoObservable } = require("mobx");

class tutorsPageStore {
  tutors = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getTutors() {
    let data = await $api.get("/api/tutors");
    this.setData(data.data);
  }

  setData(data) {
    this.tutors = data;
  }
}

export default new tutorsPageStore();
