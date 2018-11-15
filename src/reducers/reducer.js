const defaultState = {
  username: "",
  targets: [],
}

export default function(state = defaultState, action) {

  switch (action.type) {
    case '':
      return state

    default:
      return state
  }
}
