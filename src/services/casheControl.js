export default class CasheControl {
  static casheControlPosts(data, cashe) {
    return data.filter(([id]) => {
      let result = true;
      cashe.forEach(([casheId]) => {
        if (id === casheId) result = false;
      });
      return result;
    });
  }
}
