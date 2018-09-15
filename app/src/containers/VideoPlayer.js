import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveEmbed } from 'react-bootstrap';
import { onLoaded } from '../actions';

class VideoPlayer extends Component {
    constructor() {
        super()
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleLoad() {
        this.props.onLoaded();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.title}</h1>
                    <ResponsiveEmbed>
                        <iframe
                            title={this.props.title}
                            width="560" height="315" src={this.props.source}
                            allowFullScreen
                        />
                    </ResponsiveEmbed>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ page }) => {
    return {
        title: page.title,
        source: page.source,
        download_link: page.download_link
    }
}

export default connect(mapStateToProps, { onLoaded })(VideoPlayer);