class RequestApi {
  constructor(url) {
    this.url = url;
  }

  async postRequest(data) {
    try {
      const response = await fetch(`${this.url}post.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.log(`Произошла ошибка ${error}`);
    }
  }

  async getRequest() {
    try {
      const response = await fetch(`${this.url}post.json`);
      return await response.json();
    } catch (error) {
      console.log(`Произошла ошибка ${error}`);
    }
  }
}

export const requestsApi = new RequestApi(
  "https://blog-project-2e4a9-default-rtdb.firebaseio.com/"
);
