const heightOfPrisma = (radius, perimeter, volume) => {
    const area = (perimeter/2) * radius;
    console.log(area)
    const height = volume / area;
    return (height);
}
heightOfPrisma(3,15,270);