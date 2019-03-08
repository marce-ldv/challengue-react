import { ImgContainer } from './styled';
import { Layout } from 'views/components/Layout';

import { history } from 'core/store.config';

import React, { Component } from 'react';
import { func, string } from 'prop-types';

class Details extends Component {

    static propTypes = {
        dogDetails: string.isRequired,
        getDogDetails: func.isRequired,
        unsetDogDetails: func.isRequired
    }

    componentDidMount () {
        const { getDogDetails } = this.props;
        const { location: { state } } = history;
        getDogDetails(state);
    }

    componentWillUnmount () {
        const { unsetDogDetails } = this.props;
        unsetDogDetails();
    }

    render () {
        const { dogDetails } = this.props;

        return (
            <Layout>
                <ImgContainer>
                    { dogDetails && <img alt={ dogDetails } src={ dogDetails } /> }
                </ImgContainer>
            </Layout>
        );
    }

}

export default Details;
