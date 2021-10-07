class Drawer {
  has (sign) {
    return sign in this
  }
  get (sign) {
    if (sign in this) {
      return this[sign]
    } else {
      console.error('No data record named:', sign)
    }
  }
  add (sign, data) {
    this[sign] = data
    return data
  }
  delete (sign) {
    if (sign in this) {
      delete this[sign]
    }
  }
}

export default Drawer
