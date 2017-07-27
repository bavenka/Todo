import {connect} from 'react-redux';
import FooterComponent from '../components/footer';

const mapStateToProps = (state) => {
    return {
        display: Boolean(state.todos.length)
    }
};

const Footer = connect(
    mapStateToProps
)(FooterComponent);

export default Footer