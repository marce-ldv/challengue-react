import Details from './main';

import { connect } from 'react-redux';

import { dogDetailsSelector } from 'core/Dogs/selector';
import { getDogDetails, unsetDogDetails } from 'core/Dogs/action';

function mapStateToProps (state) {
    return {
        dogDetails: dogDetailsSelector(state)
    };
}

const mapDispatchToProps = {
    getDogDetails,
    unsetDogDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
