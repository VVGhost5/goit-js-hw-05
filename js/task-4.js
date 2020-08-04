"use strict";

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    return (this._value = str + this.value);
  }

  prepend(str) {
    return (this._value = this.value + str);
  }

  pad(str) {
    return (this._value = str + this.value + str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
