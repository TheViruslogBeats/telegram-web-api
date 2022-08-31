import $api from "./api";

export default class AuthService {
  static async login(data) {
    return $api.post("/auth/login", data);
  }

  static async registration(data) {
    return $api.post("/auth/registration", data);
  }
}
