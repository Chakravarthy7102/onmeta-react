type Subscriber = (...args: unknown[]) => unknown;

class Observable {
	private observers: Array<Subscriber> = [];

	subscribe(subscriber: Subscriber) {
		this.observers.push(subscriber);
	}

	unsubscribe(subscriber: Subscriber) {
		this.observers.filter((observer) => observer !== subscriber);
	}

	clearListners() {
		this.observers = [];
	}

	notify(...args: unknown[]) {
		this.observers.forEach((observer) => observer(...args));
	}
}

// creating a widget event observable.
export const widgetObeservable = new Observable();
