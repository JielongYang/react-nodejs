import React from 'react';
  import connect from './connect';
  
  class ChildComponent extends React.Component {
      render() {
          return (
              <div>
                  {this.props.count}
                  <button onClick={() => {
                      this.props.AddOne()
                  }}>
                      Add 1
                  </button>
                  <button onClick={() => {
                      this.props.DividedByTwo()
                  }}>
                      Divided By 2
                  </button>
              </div>
          )
      }
  }
  
  const mapStateToProps = (state) => {
      return {
          count: state.count
      }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
         AddOne: () => {
              dispatch({ type: 'AddOne' })
          },
          DividedByTwo: () => {
              dispatch({ type: 'DividedByTwo' })
          }
      }
 }
  
  export default connect(mapStateToProps)(mapDispatchToProps)(ChildComponent);