import React from 'react';

import {Route, Link} from 'react-router-dom'
import ArtworkForm from '../forms/artwork-form.component';

class ArtworkManage extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){
        this.props.getContext("Manage Artwork");
    }

    render(){
        return(
            <div className="width-12">
                <div className="layout-container">
                    <ArtworkForm/>
                </div>
            </div>
        )
    }
}

export default ArtworkManage;