let div1 = document.querySelector(".div1");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.background = "gray";
div1.style.margin = "10px";

// fetch("https://catfact.ninja/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     let fact = response.data.map((el) => {
//         return el.fact;
//       });
//     div1.innerHTML = fact[0];
//     for (let i = 1; i < 4; i++) {
//         const clone = div1.cloneNode(true)
//         document.body.appendChild(clone)
//         clone.innerHTML = fact[i]
//     }
// });

let page = 1;
let but1 = document.querySelector(".dugme1");
let but2 = document.querySelector(".dugme2");
let but3 = document.querySelector(".dugme3");
let but4 = document.querySelector(".dugme4");
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
const BASE_URL = "https://catfact.ninja";
async function mymove() {
  try {
    const response = await fetch(`${BASE_URL}/facts?page=${page}`);
    const resJson = await response.json();
    let fact = resJson.data.map((el) => {
      return el.fact;
    });
    div1.innerHTML = fact[0];
    for (let i = 1; i < 4; i++) {
      const clone = div1.cloneNode(true);
      document.body.appendChild(clone);
      clone.innerHTML = fact[i];
    }
  } catch (e) {
    console.log(e);
  }
}
but1.innerHTML = page;
but2.innerHTML = page + 1;
but3.innerHTML = page + 2;
but4.innerHTML = page + 3;
but2.addEventListener("click", butFunc);
next.addEventListener("click", function () {
  page += 1;
  but2.innerHTML = page;
  but1.innerHTML = page - 1;
  but3.innerHTML = page + 1;
  but4.innerHTML = page + 2;
  butFunc()
});
mymove();







function butFunc () {
  page += 1;
  but2.innerHTML = page;
  but1.innerHTML = page - 1;
  but3.innerHTML = page + 1;
  but4.innerHTML = page + 2;
  prev()
  mymove();
}

function prev() {
  if (page === 2) {
    pre.style.display = "inline-block";
    pre.addEventListener("click", function () {
      page -= 1;
      but2.innerHTML = page;
      but1.innerHTML = page - 1;
      but3.innerHTML = page + 1;
      but4.innerHTML = page + 2;
    });
  }
}