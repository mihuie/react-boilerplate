export const simpleAction = value => ({
  type: 'ACTION_TYPE',
  value
});

export const compositeAction = ({param}) => (dispatch, getState) => {
  const formState = getState().form;
  dispatch(simpleAction({param}));
  dispatch(simpleAction({param: formState.foo}));
};
