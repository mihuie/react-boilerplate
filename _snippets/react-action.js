export const simpleAction = ({param}) => ({
  type: 'ACTION_TYPE',
  param
});

export const compositeAction = ({param}) => (dispatch, getState) => {
  const formState = getState().form;
  dispatch(simpleAction({param}));
  dispatch(simpleAction({param: formState.foo}));
};
