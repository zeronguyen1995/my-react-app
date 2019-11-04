import React from "react";
class todoComponent extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.props = props;
    }
    UNSAFE_componentWillMount()
    {
        this.props.fetchingTodoList();
    }
    render()
    {
        const { todoList, fetching } = this.props;
        return (
            <React.Fragment>
                {todoList && (<table className="table table-bordered">
                    <tbody>
                        {todoList.map(todo => <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed.toString()}</td>
                        </tr>)}
                    </tbody>
                </table>)}
                {fetching && "fetching"}
            </React.Fragment>
        );
    }
}
export default todoComponent;