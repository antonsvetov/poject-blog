export default class Validators {
  static emptyString(data = "") {
    return data && data.trim();
  }
}
