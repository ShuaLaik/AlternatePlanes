class Util {
    static between(x, y, z) {
        if (z <= y && z >= x) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Util;
