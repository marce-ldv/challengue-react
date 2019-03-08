import { List as Item } from 'views/components/List';
import { Layout } from 'views/components/Layout';

import React, { Component } from 'react';
import { array, func } from 'prop-types';

class List extends Component {

    static propTypes = {
        dogList: array.isRequired,
        getDogList: func.isRequired
    }

    componentDidMount () {
        const { getDogList } = this.props;
        getDogList();
    }

    render () {
        const { dogList } = this.props;

        return (
            <Layout>
                {
                    dogList.map((dog, i) => <Item key={ i } label={ dog } />)
                }
            </Layout>
        );
    }

}

export default List;
