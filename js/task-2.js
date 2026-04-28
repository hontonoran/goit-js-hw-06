class Storage {
  #items;

  constructor(items) {
    this.#items = [...items];
  }

  getItems() {
    return this.#items;
  }

  addItem(name) {
    this.#items.push(name);
  }

  removeItem(name) {
    this.#items = this.#items.filter(item => item !== name);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
