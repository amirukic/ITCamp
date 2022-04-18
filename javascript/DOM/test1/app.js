function myMove(n) {
    let a = ""
    for (let i = 1; i <= n; i++) {
        if(i !== 1)
        a += "*"
        if(i === 1)
        console.log(i);
        else{
            console.log(`1${a}${i}`);
        }
    }
}
myMove(5)

let matrica = [[1,2,3],[4,5,6]]
function myMove (a){
    for (let i = 0; i <= a.length; i++) {
        console.log(`${a[0][i]}${a[1][i]}`);
    }
}
myMove(matrica)

function prva(n, m) {
  let a = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      a += i + j;
    }
    console.log(a);
    a = "";
  }
}

function druga(n, m) {
  [n, m] = [m, n];
  prva(n, m);
}
prva(5, 3);
console.log("=====================");
druga(5, 3);
