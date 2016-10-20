function nameTag(opts) {
    var self = this;
    this.fullName = opts.firstName + ' ' + opts.lastName;
    editFirstName = function (e) {
        opts.firstName = e.target.value;
        self.setFullName();
    }

    editLastName = function (e) {
        opts.lastName = e.target.value;
        self.setFullName();
    }

    this.setFullName = function () {
        self.fullName = opts.firstName + ' ' + opts.lastName;
        self.update();
    }
}