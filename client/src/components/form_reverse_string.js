import React, {Component} from 'react';

class FormReverseString extends Component {
    state = {
        stringToReverse: '',
        reversedString: ''
    };

    submitHandler = (e) => {
        const self = this;
        e.preventDefault();
        const stringToReverse = e.target[0].value;

        if (stringToReverse === '' && this.state.stringToReverse !== '') {
            console.log('I run')
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
                <form onSubmit={this.submitHandler}>
                    <input id="reverse-text" name="reverse-text" type="text"/>
                    <input type="submit" name="submit"/>
                </form>
                <p>Reversed string: {this.state.reversedString}</p>
            </div>
        );
    }
}

export default FormReverseString;
