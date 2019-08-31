class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charChodeAt(i);
    }
    return total % this.table.length;
  }

  showDisTro() {

  }
  put(data) {
    let pos = this.simpleHash(data);
    this.table[pos] = data;
  }
  get() {

  }
}