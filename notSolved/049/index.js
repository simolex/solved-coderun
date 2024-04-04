const a = (s) => {
    const f = "geo";
    return s.split("").reduce((sum, v, i) => sum + Math.abs(f.charCodeAt(i) - v.charCodeAt(0)), 0);
};
module.exports = function (pass) {};

//((x-"a")-(x-"z")+27)/2
