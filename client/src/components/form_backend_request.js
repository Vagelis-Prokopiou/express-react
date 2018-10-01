import React, {Component} from 'react';

class FormBackendRequest extends Component {
    state = {
        url: '',
        method: '',
        stringResult: ''
    };

    submitHandler = (e) => {
        e.preventDefault();
        const self = this;
        const url = e.target[0].value;
        const method = e.target[1].value;

        if ((url && url !== this.state.url) || method !== this.state.method) {
            self.setState({url, method});

            fetch('/api/data?url=' + url + '&method=' + method)
                .then(function (response) {
                    if (!response.ok) {
                        return new Error(response);
                    }
                    return response.json();
                })
                .then(function (json) {
                    self.setState({stringResult: JSON.stringify(json.data)});
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    };

    render() {
        return (
            <div>
                <h2>Form 2: Backend request</h2>
                <p>Alternate url 1: http://jsonplaceholder.typicode.com/todos</p>
                <p>Alternate url 2: http://jsonplaceholder.typicode.com/posts</p>
                <form onSubmit={this.submitHandler}>
                    URL: <input size="40" name="url" type="url"
                                defaultValue="http://jsonplaceholder.typicode.com/users"/>
                    <br/>
                    Method:
                    <select name="method">
                        <option value="get">GET</option>
                        <option value="post">POST</option>
                    </select>
                    <br/>
                    <input type="submit" name="submit"/>
                </form>
                <p>Result: {this.state.stringResult}</p>
            </div>
        );
    }
}

export default FormBackendRequest;
