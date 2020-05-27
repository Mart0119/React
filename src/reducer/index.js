const initState = {
  value: 'Defalut'
}

const reducer = (state, action) => {
  console.log(state, action,"action")
  switch (action.type) {
    case "send_type":
      return Object.assign({}, state, action)
    default:
      return initState
  }
}

module.exports = {
  reducer
}