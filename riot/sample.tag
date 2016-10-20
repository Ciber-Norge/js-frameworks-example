<sample>

  <label>First name: </label><input name="input" onkeyup={ editFirstName }>
  <label>Last name: </label><input name="input" onkeyup={ editLastName }>
  <div>Full name: {name}</div>
  <script>
  var self = this;
  editFirstName(e) {
    this.firstName = e.target.value
    self.updateFields();
  }
  editLastName(e) {
    this.lastName = e.target.value
    self.updateFields();
  }
  this.updateFields = function(){
    self.name = (typeof self.firstName != 'undefined' ? self.firstName : "")+ " " + (typeof self.lastName != 'undefined' ? self.lastName : "");
    this.update();
  }
  </script>

</sample>