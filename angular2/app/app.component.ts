import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent { 
    firstName = 'Kalle';
    lastName = 'Klovn';
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}