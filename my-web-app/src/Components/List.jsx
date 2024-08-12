import PropTypes from 'prop-types'
function List(props) {
    const itemList = props.items;
    const category = props.category;
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>);
    return (
        <>
            <div className="ListDiv">
                <h3 className="ListCategory">{category}</h3>
                <ol className="ListItems">{listItems}</ol>
            </div>
        </>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired
    })).isRequired,
    category: PropTypes.string.isRequired
};

List.defaultProps = {
    category: "Default Category",
    items: []
};

export default List