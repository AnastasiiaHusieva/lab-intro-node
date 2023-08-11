class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    let i = 0
    while(i < this.length && this.items[i]<item) {
      i++
    }
    this.items.splice(i, 0, item)
    this.length = this.items.length
  }

  get(pos) {
    if (pos<0 || pos >= this.length) {
      throw new Error ("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return this.items[this.length-1]
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    } 
    return this.items[0]
  }

  sum() {
    let sum = 0
    if (this.length === 0) {
      return 0
    } 
    this.items.forEach(element => {
      sum += element
    });
    return sum
  }

  avg() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    } 
    return this.sum() / this.length
  }
}

module.exports = SortedList;
