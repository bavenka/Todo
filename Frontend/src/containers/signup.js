
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (text) => {
            if (text.length !== 0) {
                dispatch(addTodo(text))
            }
        }
    }
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer