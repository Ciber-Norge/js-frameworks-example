new Vue({
  el: '#app',
  data: {
    firstName: 'Kalle',
    lastName: 'Klovn',
    fullName: 'Kalle Klovn'
  },
  methods: {
      setFullName: function() {
          this.fullName = this.firstName + ' ' + this.lastName;
      }
  }
})