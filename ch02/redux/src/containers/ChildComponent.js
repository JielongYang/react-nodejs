import { connect } from 'react-redux';
  import { AddOne, DividedByTwo } from '../actions';
  import ChildComponent from '../components/ChildComponent';
  
  const mapStateToProps = state => ({
      count: state.count
  });
  
  const mapDispatchToProps = dispatch => {
      return ({
          AddOne: () => dispatch(AddOne()),
          DividedByTwo: () => dispatch(DividedByTwo())
      })
  };
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ChildComponent);