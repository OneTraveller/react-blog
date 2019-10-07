
export default function (state = {}, action) {
  if (action.type === 'setUserInfo') {
    state = action.data;
    return state;
  }
  return state;
}