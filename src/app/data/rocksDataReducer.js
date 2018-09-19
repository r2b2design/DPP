
import { FETCH_ROCKSDATA_BEGIN, FETCH_ROCKSDATA_SUCCESS, FETCH_ROCKSDATA_FAILURE } from './rocksDataActions';

const initialState = {
    rocksdata: [],
    loading: false,
    error: null
  };
  
  export default function rocksDataReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ROCKSDATA_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ROCKSDATA_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          rocksdata: action.payload.rocksdata
        };
  
      case FETCH_ROCKSDATA_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          rocksdata: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }