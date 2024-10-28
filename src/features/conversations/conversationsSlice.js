import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
  },
});

export const { setConversations } = conversationsSlice.actions;

export default conversationsSlice.reducer;
