import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

export default class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = { person: [], show: true };

        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    componentDidMount() {

        this.UserList();

        /*const interval = setInterval(() => {
            this.UserList();
        }, 5000)

        return () => clearInterval(interval);*/

    }

    handleClick() {
        this.UserList();
    }

    handleClick2() {
        this.setState({ show: false })
    }

    async UserList() {
        await fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => this.setState({ person: data.results }))
            .then(this.setState({ show: true }));

    }

    render() {
        var persons = [];
        if (this.state.show) {
            persons = this.state.person.map((item, i) => (
                <div key={i}>
                    <Alert variant="success" onClick={this.handleClick2} dismissible>
                        <Alert.Heading><h3>{item.name.first}</h3></Alert.Heading>
                        <hr />
                        <p>
                            <img src={item.picture.large} alt='' style={{ borderRadius: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'lightgreen' }}></img>
                            <br />
                            <span>{item.cell} , {item.email}</span>
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button  variant="outline-success" >
                                بستن
                            </Button>
                        </div>
                    </Alert>
                </div>

            ));
        }
        return (

            <div id="layout-content" className="layout-content-wrapper">

                <Button type='button' variant="success" onClick={this.handleClick}>کاربر بعدی</Button>
                <h3>setState , fetch , componentDidMount , Handling events</h3>

                <div style={{
                    width: '50%', margin: '0 auto', padding: '10px', marginBottom: '30px'
                }}>{persons}</div>
            </div>

        )

    }
}
