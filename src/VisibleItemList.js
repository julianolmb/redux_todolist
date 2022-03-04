import {connect} from "react-redux";
import { toggleItem, removeItem } from "./actions";
import VisibleItems from "./VisibleItems";
function getVisibleItems(items, filter){
    console.log(filter, items)
    switch(filter){
        case "SHOW_COMPLETED":
            return items.filter((i) => i.completed);
        case "SHOW_ACTIVE":
            return items.filter((i) => !i.completed);
        case "SHOW_ALL":
        default:
            return items;
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        items: getVisibleItems(state.item, state.visibilityFilter)
    }
}
function mapDispatchToProps(dispatch){
    return {
        onItemClick: (id) => {
            dispatch(toggleItem(id));
        },
        removeClick: (id) => {
            dispatch(removeItem(id));
        },
    };
}
const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleItems);
export default VisibleItemList;