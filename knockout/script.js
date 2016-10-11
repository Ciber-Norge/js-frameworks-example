function AppViewModel() {
    this.firstName = ko.observable("")
    this.lastName = ko.observable("")

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}