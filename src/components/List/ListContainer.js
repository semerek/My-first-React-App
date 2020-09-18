import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js'; 

//dodawanie propsów komponentu List
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),

});

// dodawanie propsów List za pomocą funkcji, wysyłanie akcji do magazynu
//akcja- zmiana stanu aplikacji
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);