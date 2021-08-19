import { $$ } from "../lib/util.js";

class TodoListItem {
  constructor({ onDeleteItem, onCompleteItem, onEditingItem, onEditItem, onSetPriority }) {
    this.onDeleteItem = onDeleteItem;
    this.onCompleteItem = onCompleteItem;
    this.onEditingItem = onEditingItem;
    this.onEditItem = onEditItem;
    this.onSetPriority = onSetPriority;
    this.init();
  }

  init() {
    this.registerEventListener();
  }

  registerEventListener() {
    $$(".destroy").forEach((element) => {
      element.addEventListener("click", (event) => this.onDeleteItem(event));
    });
    $$(".toggle").forEach((element) => {
      element.addEventListener("click", (event) => this.onCompleteItem(event));
    });
    $$(".label").forEach((element) => {
      element.addEventListener("dblclick", (event) => this.onEditingItem(event));
    });
    $$(".edit").forEach((element) => {
      element.addEventListener("keydown", (event) => this.onEditItem(event));
    });
    $$(".select").forEach((element) => {
      element.addEventListener("click", (event) => {
        this.onSetPriority(event);
      });
    });
  }
}

export default TodoListItem;
