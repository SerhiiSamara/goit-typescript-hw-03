class Key {
	private signature: number

	constructor() {
		this.signature = Math.random();
	}

	getSignature(): number {
		return this.signature;
	}
}

class Person {
	private key: Key

	constructor(key: Key) {
		this.key = key;
	}

	getKey(): Key {
		return this.key;
	}
}

abstract class Hous {
	protected door: boolean
	protected key: Key
	protected tenants: Person[]

	constructor(key: Key) {
		this.key = key;
		this.door = false;
	}

	public comeIn(tenant: Person): void {
		this.tenants.push(tenant);
	};

	public abstract openDoor(key: Key): boolean;
}

class MyHouse extends Hous {

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
