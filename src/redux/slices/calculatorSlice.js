// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    result: 0,
  },
  reducers: {
    addCount: (state, action) => {
      state.result += action.payload;
    },
    decreaseCount: (state, action) => {
    state.result -= action.payload;
    }
  },
});


export const { addCount, decreaseCount } = counterSlice.actions;

export default counterSlice.reducer;
