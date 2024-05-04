const initialState = {
  jobData: [],
  isLoading: false,
};

const getJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOB_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_JOB_DATA_SUCCESS":
      return {
        ...state,
        isLoading: false,
        jobData: action.payload,
      };
    case "GET_JOB_DATA_FAILED":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default getJobReducer;
