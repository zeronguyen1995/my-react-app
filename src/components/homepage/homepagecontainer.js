import { connect } from 'react-redux';
import homepageComponent from './homepagecomponent.js'
import { INCREMENT, DECREMENT } from '../../utils/constants.js'

function mapStateToProps(state)
{
    return { counter: state.counter };
}

function mapDispatchToProps(dispatch)
{
    return {
        increment: () => dispatch({ type: INCREMENT }),
        decrement: () => dispatch({ type: DECREMENT }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homepageComponent);