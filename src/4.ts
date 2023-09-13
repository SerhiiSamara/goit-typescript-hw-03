class Key {
	private signature: number

	constructor() {
		this.signature = Math.random();
	}

	getSignature() {
		return this.signature;
	}
}

class Person {
	private key: Key

	constructor(key: Key) {
		this.key = key;
	}

	getKey() {
		return this.key;
	}
}

abstract class Hous {
	door: boolean
	key: Key
	tenants: Person[]

	constructor(key: Key) {
		this.key = key;
		this.door = false;
	}

	public comeIn(tenant: Person) {
		this.tenants.push(tenant);
	};

	public abstract openDoor(key: Key): boolean;
}

class MyHouse extends Hous {
	door: boolean

	constructor(key: Key) {
		super(key)
		this.key = key;
		this.door = false;
	}

	public comeIn(tenant: Person) {
		if (this.door) {
			super.tenants.push(tenant);
		}
	};

	public openDoor(key: Key): boolean {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
			return this.door;
		}
		return false;
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
