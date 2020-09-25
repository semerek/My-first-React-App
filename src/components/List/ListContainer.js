import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js'; 

//dodawanie propsów komponentu List
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return{
    ...listParams,
    columns: getColumnsForList(state, id),

  };

};

// dodawanie propsów List za pomocą funkcji, wysyłanie akcji do magazynu
//akcja- zmiana stanu aplikacji
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);