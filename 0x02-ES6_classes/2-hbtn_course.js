export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(fname) {
    if (typeof fname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = fname;
  }

  get length() {
    return this._length;
  }

  set length(flength) {
    if (typeof flength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = flength;
  }

  get students() {
    return this._students;
  }

  set students(fstudents) {
    if (!Array.isArray(fstudents)) {
      throw new TypeError('Students must be an array');
    }
    if (!fstudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = fstudents;
  }
}
