export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_MESSAGES":
      return action.payload.messages;
    case "CREATE_MESSAGE":
      let newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    default:
      return state;
  }
}
