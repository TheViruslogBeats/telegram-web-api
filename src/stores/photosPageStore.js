import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { $api } from "../api";
const { makeAutoObservable } = require("mobx");

class photosPageStore {
  path = "";
  paths = [];
  photos = [];
  mode = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async getPhotos() {
    let path = this.path;
    let mode = this.mode;
    let data = await $api.post("/api/photos", { path, mode })
    this.setData(data.data);
  }

  setData(data) {
    this.paths = data.paths;
    this.photos = data.photos;
  }

  setPath(path) {
    this.path += path;
    this.getPhotos()
  }

  goBack() {
    let newPath = this.path
    newPath = newPath.split('/').slice(1)
    if(newPath.length > 1) {
      newPath.pop()
      this.setNewPath("/" + newPath.join("/"))
      this.photos = []
    } else {
      this.setNewPath("")
      this.photos = []
    }
  }

  setNewPath(path) {
    this.path = path
    this.getPhotos()
  }

  setMode(mode) {
    this.mode = mode
  }
}

export default new photosPageStore();
