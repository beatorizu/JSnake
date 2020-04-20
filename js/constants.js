const KEY = {
    LEFT: [65, 37],
    RIGHT: [68, 39],
    DOWN: [83, 40],
    UP: [87, 38]
};
Object.freeze(KEY);

const BOX = 32;

const LEFT_WALL = 0;
const RIGHT_WALL = 15 * BOX;
const BOTTOM_WALL = 15 * BOX;
const TOP_WALL = 0;
