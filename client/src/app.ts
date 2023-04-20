// @ts-nocheck

import * as OpenFin from "@openfin/core/src/OpenFin";

declare const fin: OpenFin.Fin<"window">;

//convert degrees to string.
function toDegString(axis, degrees) {
    return 'rotate' + axis + '(' + (degrees) + 'deg) ';
}

class Cube {
    constructor(cube) {
        this.rateOfChange = 7;
        //Cube model
        this.cubeModel = {
            X: 0,
            Y: 0
        };
        //axises model
        this.axises = {
            x: 'X',
            y: "Y"
        };

        this.running = false;

        this.cube = cube;

        this.animationLoop();
    };

    increaseAxis(axis) {
        this.cubeModel[axis] += this.rateOfChange;
    };

    stop() {
        this.running = false;
    };

    animationLoop() {
        requestAnimationFrame(() => {
            //Update the cube
            this.cube.style.transform = toDegString(this.axises.x, this.cubeModel.X) +
                toDegString(this.axises.y, this.cubeModel.Y);
            //keep the loop alive.
            this.animationLoop();
        });
    };

    decreaseAxis(axis) {
        this.cubeModel[axis] -= this.rateOfChange;
    };

    animateTheCube() {
        this.running = true;
        requestAnimationFrame(() => {
            this.increaseAxis(this.axises.x);
            this.increaseAxis(this.axises.y);
            setTimeout(() => {
                if (this.running) {
                    this.animateTheCube();
                }
            }, 300);
        });
    };

};

document.addEventListener('DOMContentLoaded', async () => {
	const cubeBtn = document.querySelector('#cubestartbtn');
	cubeBtn.onclick = () => {
		const cubeElem = document.querySelector('.cube');
		const cube = new Cube(cubeElem);
		cube.animateTheCube();
	}
});



let counter = 0;
let total = 0;
let lowestTime;
let highestTime;



setInterval(async () => {
	const startTime = performance.now();
	const info = await fin.me.getInfo();
	const endTime = performance.now();
	const time = Math.floor(endTime - startTime);
	counter++;
	total+=time;
	const average = total/counter;
	
	if (counter === 1) {
		lowestTime = time;
		highestTime = time;
	} else {
		if (time < lowestTime) {
			lowestTime = time;
		}
	
		if (time > highestTime) {
			highestTime = time;
		}
	}

	console.log(`Current: ${time} ms` );
	console.log(`Average: ${average} ms`);
	console.log(`Lowest: ${lowestTime} ms`);
	console.log(`Highest: ${highestTime} ms`);
}, 1000);