export class App {
    firstName = 'Kalle';
    lastName = 'Klovn';

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}