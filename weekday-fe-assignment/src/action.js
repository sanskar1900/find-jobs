import { Dispatch } from "redux";
export const getJobData = (payload) => async (dispatch) => {
  dispatch({ type: "GET_JOB_DATA" });

  try {
    const body = JSON.stringify({
      limit: payload.limit,
      offset: payload.offset,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    };
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();

    dispatch({ type: "GET_JOB_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_JOB_DATA_FAILED" });
    console.error("something went wrong", error);
  }
};
export default getJobData;
