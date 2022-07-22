class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class lineSegment {
  constructor() {
    this.point1 = null;
    this.point2 = null;
  }
  addPoint(x, y) {
    let p = { x, y };
    if (!this.point1) {
      this.point1 = p;
      return;
    }

    if (this.point1 && !this.point2) {
      this.point2 = p;
      return;
    }

    if (this.point1 && this.point2) return;
  }
  distance() {
    if (!this.point1 || !this.point2) {
      return;
    }
    return Math.sqrt(
      (this.point2.x - this.point1.x) ** 2 +
        (this.point2.y - this.point1.y) ** 2
    );
  }
}

let myLine = new lineSegment();
myLine.addPoint(13, 9);
myLine.addPoint(22, 10);
console.log(myLine.distance());