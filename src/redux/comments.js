import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    //* NEW COMMENTS
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      //! Giving some problem in the first step, but then it's posting the comment after refreshing the page
      return { ...state, comments: state.concat(comment) };

    default:
      return state;
  }
};
