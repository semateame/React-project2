import React from 'react';
import { Form, Input, Col, FormGroup,Button } from 'reactstrap';
import Payment from "./payment/payment"
import styles from './sendmoney.module.css'


class Sendmoneyform extends React.Component {

    state = {
        method: [],
        loading: false,
        Amount: null,
    
        name: '',

    }

    componentDidMount() {
        if (!this.state.loading) {
            let arr = [...this.state.method]
            arr = [...["Debit", 'Credit']]
            this.setState({ method: arr, loading: true })
        }


    }


    clickHandler = () => {

        this.props.history.push({ pathname: "/signup" })
        console.log(this.props);
    }



    render() {
        let arr = []
        if (this.state.loading) {
            arr = this.state.method.map((item, index) => {
                return (


                    <Payment
                        click={this.PostHandler}
                        key={index}
                        title={item}
                    />
                )
            })
        }

        let country = this.props.posts ? this.props.posts.map(item => {
            return (

                <option key={item._id}>
                    {item.country}
                </option>
            )
        }) : null





        return (
            <div className={styles.Post}>
                <h1 className={styles.Title}>Send Money Online</h1><br />
                <h3 className={styles.Title}>Your receiver’s country and send amount</h3><br />
                <Form>
                    <Col sm={10}>
                        <FormGroup>
                            <label>Country</label>
                            <Input type="select" bsSize="md"
                                onChange={(event) => { this.setState({ name: event.target.value }) }}
                            >
                                {country}
                            </Input>
                        </FormGroup>


                        <FormGroup>

                            <Input type="number" name="money" id="id1" onChange={(event) => {

                                this.setState({ Amount: event.target.value })

                            }} placeholder="Amount" />
                        </FormGroup>
                    </Col>
                    <hr /><br />
                    <h4 className={styles.Title}> How would you like to pay ?</h4>
                    <FormGroup row>
                        {arr}
                    </FormGroup>
                </Form >
                <hr /> <br />
                <Button
                    color="primary" size="lg" block
                    onClick={() => this.clickHandler()
                    }>
                    Continue
                 </Button>
            </div>
        );
    }
}

export default Sendmoneyform;