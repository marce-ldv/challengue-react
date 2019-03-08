import List from './main';

import { connect } from 'react-redux';

import { dogListSelector } from 'core/Dogs/selector';
import { getDogList } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        dogList: dogListSelector(state)
    };
}

const mapDispatchToProps = { getDogList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
