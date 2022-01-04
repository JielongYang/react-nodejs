import React from 'react';
  
export default class ChildComponent extends React.Component {
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