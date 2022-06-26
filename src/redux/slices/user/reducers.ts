import { register, getUser } from './actions';

export const registerReducer = (builder) => {
  builder
    .addCase(register.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(register.fulfilled, (state, action) => {
      state.status = 'idle';
      state.currUser = action.payload;
    })
    .addCase(register.rejected, (state) => {
      state.status = 'failed';
    });
};

export const getUserReducer = (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.currUser = action.payload;
    })
    .addCase(getUser.rejected, (state) => {
      state.status = 'failed';
    });
};
