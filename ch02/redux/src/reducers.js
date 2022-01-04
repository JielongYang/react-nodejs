export default function reducer(state, action) {
    if (!state) {
        state = {
          count: 1
              }
          }
          switch (action.type) {
              case 'AddOne':
                  state.count++;
                  break;
              case 'MinusThree':
                  state.count = state.count * 3;
                  break;
              case 'DividedByTwo':
                  state.count = state.count / 2;
                  break;
              default:
                  break;
          }
          return { ...state }
      }