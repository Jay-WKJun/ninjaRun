const state = {
  player: "",
  score: 0,
};

export default new Proxy(state, {
  set: function(obj, prop, value) {
    console.log(prop, value);
    switch (prop) {
      case "player":
        if (typeof value !== "string") return false;
        console.log(prop, value);
        obj.player = value;
        break;
      case "score":
        if (!Number.isInteger(value)) return false;
        obj.score = value;
        break;
      default:
        break;
    }

    return true;
  },
  get: function(obj, prop) {
    return prop in obj ? obj[prop] : null;
  },
});
