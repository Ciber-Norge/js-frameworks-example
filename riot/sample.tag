<sample>

  <input name="input" onkeyup={ editFirstName }>'
  <input name="input" onkeyup={ editLastName }>'
  <div>{name}</div>
  <script>
  editFirstName(e) {
      this.firstName = e.target.value
    }

editLastName(e) {
      this.lastName = e.target.value
    }

    this.name = this.firstName + " " + this.lastName;

  </script>

</sample>