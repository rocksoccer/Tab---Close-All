'use strict'

const allListeners = {}

exports.listeners = {
  recordListener: (host, type, listener) => {
    allListeners[host] = allListeners[host] || {}
    allListeners[host][type] = allListeners[host][type] || []
    allListeners[host][type].push(listener)
  },
  clear: () => {
    for (var prop in allListeners) {
      if (allListeners.hasOwnProperty(prop)) {
        delete allListeners[prop]
      }
    }
  },
  trigger: (host, type, params)=>{
    allListeners[host][type].forEach((listener)=>{
      listener.apply(null, params);
    });
  }
}
