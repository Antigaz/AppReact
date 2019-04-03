import React from 'react';

class NewPost extends React.Component {
    state = {
        title: '',
        body: '',
        date: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        var tempDate = new Date();
        this.state.date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ (tempDate.getHours()+1)+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();

        if (this.state.title.trim() && this.state.body.trim() && this.state.date) {
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Title"
                            className="form-control"
                            name="title"
                            onChange={ this.handleInputChange }
                            value={ this.state.title }
                        />
                    </div>
                    <p onChange={ this.handleInputChange }>{this.state.date }</p>
                    <div className="form-group">
                        <textarea
                            cols="19"
                            rows="8"
                            placeholder="Body"
                            className="form-control"
                            name="body"
                            onChange={ this.handleInputChange }
                            value={ this.state.body }>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add Post</button>
                        <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;