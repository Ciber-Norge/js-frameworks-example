class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Kalle',
            lastName: 'Klovn'
        };
    }

    componentWillMount() {
        this.computeFullName();
    }

    computeFullName() {
        this.setState({
            fullName: this.state.firstName + ' ' + this.state.lastName
        });
    }

    firstNameChanged(event) {
        this.setState({
            firstName: event.target.value
        }, this.computeFullName);
    }

    lastNameChanged(event) {
        this.setState({
            lastName: event.target.value
        }, this.computeFullName);
    }

    render() {
        return (
            <div>
                First Name: <input type="text" value={this.state.firstName} onChange={this.firstNameChanged.bind(this)} /><br />
                Last Name:  <input type="text" value={this.state.lastName} onChange={this.lastNameChanged.bind(this)} /><br />
                Full Name: {this.state.fullName}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);