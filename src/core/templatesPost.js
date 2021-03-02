export default class TemplatesPosts {
  static createPost(arr) {
    return arr.map(([id, { date, fulltext, title, type }]) => {
      return `<div class="panel">
      <div class="panel-head">
        <p class="panel-title">${title}</p>
        <ul class="tags">
          <li class="tag tag-blue tag-rounded">${
            type === "note" ? "Заметка" : "Новость"
          }</li>
        </ul>
      </div>
      <div class="panel-body">
        <p class="multi-line">${fulltext}</p>
      </div>
      <div class="panel-footer w-panel-footer">
        <small>${date}</small>
        <button class="button-primary button-round button-small" type="submit" data-id = ${id}>
            Сохранить
          </button>
      </div>

    </div>`;
    });
  }

  static createFavoritePost(arr) {
    return arr.map(([id, { date, fulltext, title, type }]) => {
      return `<div class="panel">
                <div class="panel-head">
                  <p class="panel-title">${title}</p>
                  <ul class="tags">
                    <li class="tag tag-blue tag-rounded">${
                      type === "note" ? "Заметка" : "Новость"
                    }</li>
                  </ul>
                </div>
                <div class="hide panel-wrapper">
                  <div class="panel-body" >
                    <p class="multi-line">${fulltext}</p>
                  </div>
                  <div class="panel-footer w-panel-footer">
                    <small>${date}</small>
                  </div>
                </div>
              </div>`;
    });
  }

  static successRequestMessage() {
    const message = document.createElement("div");
    message.classList.add("request__message");
    message.innerHTML = `<p>Пост успешно создан</p>`;
    document.body.append(message);
    setTimeout(() => message.remove(), 3000);
  }

  static errorRequestMessage() {
    const message = document.createElement("div");
    message.classList.add("request__message");
    message.classList.add("error__message");
    message.innerHTML = `<p>Что-то пошло не так. Проверьте правильность заполнения полей формы</p>`;
    document.body.append(message);
    setTimeout(() => message.remove(), 3000);
  }
}
