import React, {Component} from 'react';

class FormReverseString extends Component {
    state = {
        stringToReverse: '',
        reversedString: ''
    };

    submitHandler = (e) => {
        e.preventDefault();
        const self = this;
        const stringToReverse = e.target[0].value;

        if (stringToReverse === '' && this.state.stringToReverse !== '') {
            self.setState({stringToReverse: stringToReverse, reversedString: stringToReverse});
            return;
        }

        if (stringToReverse !== this.state.stringToReverse) {
            self.setState({stringToReverse: stringToReverse});

            fetch('/api/reverse-string?string=' + stringToReverse)
                .then(function (response) {
                    if (!response.ok) {
                        return new Error(response);
                    }
                    return response.json();
                })
                .then(function (json) {
                    self.setState({reversedString: json.data});
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    };

    render() {
        return (
            <div>
                <h2>Form 1: Reverse string</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        String: <input name="reverse-text" type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>Result: {this.state.reversedString}</p>
            </div>
        );
    }
}

export default FormReverseString;
