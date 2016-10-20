function AppViewModel() {
    this.firstName = ko.observable("")
    this.lastName = ko.observable("")

    this.fullName = ko.computed(function () {
        return "Full name: " + this.firstName() + " " + this.lastName();
    }, this);
}