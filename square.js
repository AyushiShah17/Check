
function area(a) { return a * a; }
function perimeter(a) { return 4 * a; }
const _area = area; //the first area is area from this module and 2nd is from where it is going to be export
export { _area as area };
const _perimeter = perimeter;
export { _perimeter as perimeter };