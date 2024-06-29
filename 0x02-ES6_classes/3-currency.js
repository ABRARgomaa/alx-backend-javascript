export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name  = name;
	}
	get code() {
		return this._code;
	}
	set code(fcode) {
		this._code = fcode;
	}
	get name() {
		return this._name;
	}
	set name(fname) {
		this._name = fname;
	}
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}
