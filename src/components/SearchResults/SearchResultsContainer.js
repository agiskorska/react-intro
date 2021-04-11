import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearch, createActionAddCard} from '../../redux/cardRedux';


const mapStateToProps = (state, props) => {
  console.log(state, props);
  return {
    cards: getCardsForSearch(state, props.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);