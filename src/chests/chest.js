class Chest {
  constructor (name, initialState = {}) {
    this.name = name;
    this.state = initialState;
    this.listeners = [];
    this.setState(this.persistedState())
    return this;
  }

  setState (state) {
    this.state = Object.assign(this.state, state);
    this.callListeners();
  }

  callListeners () {
    this.listeners.forEach((listener) => {
      listener.forceUpdate()
    })
  }

  register (listener) {
    this.listeners.push(listener);
  }

  unregister (listener) {
    delete(this.listeners[this.listeners.indexOf(listener)])
  }

  setPersistedState (info = {}, callback = () => {}) {
    this.setState(info);
    var stateToPersist = this.persistedState();
    stateToPersist = Object.assign(stateToPersist, info);
    localStorage.setItem(this.chestStorageName(), JSON.stringify(stateToPersist))
    callback();
  }

  persistedState () {
    return JSON.parse(localStorage.getItem(this.chestStorageName()) || "{}")
  }

  clearPersistedState () {
    localStorage.setItem(this.chestStorageName(), JSON.stringify({}))
  }

  chestStorageName () {
    return this.name + "-chest";
  }

  has (...args) {
    return args.every(item => item in this.state)
  }

  get (...args) {
    return args.reduce((result,item) => { result[item] = this.state[item]; return result; }, {})
  }

  clear (...args) {
    return args.forEach((key) => {delete(this.state[key])})
  }
}

export default Chest;
