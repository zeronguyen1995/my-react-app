import { connect } from "react-redux";
import todoComponent from "./todoComponent.js";
import { CALL_API_REQUEST } from "../../utils/constants";
const mapStateToProps = (state) => Object.assign({}, state.todo);

const mapDispatchToProps = dispatch => ({
    fetchingTodoList: () => dispatch({ type: CALL_API_REQUEST }),
});
export default connect(mapStateToProps, mapDispatchToProps)(todoComponent);