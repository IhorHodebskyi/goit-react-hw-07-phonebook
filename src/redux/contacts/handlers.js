export const handleFulfilledContacts = (
  state,
  { payload }
) => {
  state.items = payload;
};

export const handleFulfilledAddContact = (
  state,
  { payload }
) => {
  state.items.unshift(payload);
};

export const handleFulfilledDelete = (
  state,
  { payload }
) => {
  state.items = state.items.filter(
    items => items.id !== payload.id
  );
};

export const handleFulfilled = state => {
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
