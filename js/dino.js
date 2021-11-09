class Dino {
    constructor(fileData) {
        this.dinoPoints = this.drawLine(this.readDino(fileData));
    }

    readDino(data) {
        var lineByLine = data.split('\r\n');
        console.log('LineByLine', lineByLine);
        var xAxis = [],
            yAxis = [],
            x = [],
            y = [],
            i = 1,
            numberPolyLines = lineByLine[0];
        console.log("Polylines = ", numberPolyLines);
        while (i < lineByLine.length) {
            for (let j = 0; j < numberPolyLines; j++) {
                let pointsInLine = lineByLine[i],
                    points = [];
                i++;
                for (let k = 0; k < pointsInLine; k++) {
                    points = lineByLine[i].split(' ');
                    x.push(points[0]);
                    y.push(points[1]);
                    i++;
                }
                xAxis.push(x);
                yAxis.push(y);
                x = [];
                y = [];
            }
        }
        return [xAxis, yAxis];
    }

    drawLine(xyAxis) {
        var xAxis = xyAxis[0];
        var yAxis = xyAxis[1];
        let vertices = [];
        let lines = []
        for (let i = 0; i < xAxis.length; i++) {
            for (let j = 0; j < xAxis[i].length; j++) {
                vertices.push(new THREE.Vector3(
                    xAxis[i][j],
                    yAxis[i][j],
                    0));
            }
            console.log(vertices);
            lines.push(vertices);
            vertices = [];
        }
        return lines;
    }

}