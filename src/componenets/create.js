import Component from "../core/component";
import Form from "../core/form";
import Validators from "../core/validators";
import { requestsApi } from "../services/requestApi";
import TemplatesPosts from "../core/templatesPost";

export default class CreateForm extends Component {
  constructor(id) {
    super(id);
    this.init();
  }

  init() {
    this.element.addEventListener("submit", submitHandler.bind(this));
  }
}

async function submitHandler(event) {
  event.preventDefault();
  const data = new Form(this.element, {
    title: [Validators.emptyString],
    fulltext: [Validators.emptyString],
  });

  if (data.isValidate()) {
    data.formData.date = new Date().toLocaleDateString();
    await requestsApi.postRequest(data.formData);
    TemplatesPosts.successRequestMessage();
    this.element.reset();
  } else {
    TemplatesPosts.errorRequestMessage();
    console.error("Поля не заполнены");
  }
}
