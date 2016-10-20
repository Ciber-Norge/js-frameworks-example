function AppViewModel() {
    this.firstName = ko.observable("Kalle");
    this.lastName = ko.observable("Klovn");

    this.fullName = ko.computed(function () {
        return "Full name: " + this.firstName() + " " + this.lastName();
    }, this);
}