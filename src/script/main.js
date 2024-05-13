let array = [2, 5, 7];
function edediOrta(arr) {
    let a = 0;
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        a += arr[i]
        sum = a / arr.length
    }
    console.log(sum);
}
edediOrta(array);

function tersyaz(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);

    }
};

tersyaz("Togrul");

function faktorial(x) {
    if (x === 0) {
        return 1;
    }
    else {
        return x * faktorial(x - 1);

    };
}
let fakto = faktorial(5);
console.log(fakto);


let text = ["Togrul", "Kazimli", "SalamSalam"]; 
let largestElement = text[0];

const boyukElement = (arr) => {
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i].length > largestElement.length) {
            largestElement = arr[i];
        }

    }
    console.log(largestElement);
};

boyukElement(text);

function topla(num1 , num2) {
    
    let sum = num1 + num2;
    return sum;

}
let result = topla(5,6);
console.log(result);





