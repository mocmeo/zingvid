import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'; 
import { fetchLink, onLoading } from '../actions';

class VideoForm extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            valid: false,
            placeholder: 'https://news.zing.vn/video-singapore-chuan-bi-don-trung-thu-voi-den-long-rong-phuong-ruc-ro-post873952.html'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.fetchLink(this.state.value);
    }

    handleSubmit(evt) {
        evt.preventDefault();

        const link = this.state.value;
        this.setState({
            value: '',
            valid: false,
            placeholder: link
        })
    }

    handleChange(evt) {
        const text = evt.target.value;
        const pattern = new RegExp("zing.vn/video.*");
        this.setState({ 
            value: text, 
            valid: (pattern.test(text)) ? true : false
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.value}
                        placeholder={this.state.placeholder} 
                        onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleClick}>Get link</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({link}) => {
    return { link }
} 

VideoForm.propTypes = {
    getLink: PropTypes.func,
    onLoading: PropTypes.func
}

export default connect(mapStateToProps, { fetchLink, onLoading })(VideoForm);