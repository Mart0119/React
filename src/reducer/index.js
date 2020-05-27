const initState = {
  value: 'Defalut'
}

const reducer = (state, action) => {
  switch (action.type) {
    case "send_type":
      return Object.assign({}, state, action)
    default:
      return state
  }
}

module.exports = {
  reducer
}