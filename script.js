/*
const h1 = document.getElementsByTagName('h1');
const title = document.getElementsByClassName('title');
const Id = document.getElementById('title1')
console.log(h1);

h1.item(0).innerHTML = "Hello, Earth!";
*/

/*
const h1 = document.querySelector("#title1");
h1.innerHTML = "Hello, Earth!";
h1.style.color = "blue";
h1.style.fontSize = "64px";
h1.style.backgroundColor = "black";

const img = document.querySelector("img");
img.src =
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=";

const a = document.querySelector("a");
a.href = "https://www.reddit.com/";
a.textContent = 'Reddit Website'
*/

/*
const newP = document.createElement("p");
const newP1 = document.createElement("p");
newP.textContent = "This is new!";
newP1.textContent = "This is something new!";

const main = document.querySelector("main");
// main.appendChild(newP)
// main.appendChild(newP1)


main.innerHTML += `<p> this is new </p>
                    <p> this is something new to see
`;
*/

const animals = [
  {
    title: "Choco Toucan Perched on a Branch",
    img_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiytJ4pSu3FKTjIyyzx1p1SuLqeqTZUKLPEN-k610Fb17dA1rBDIV6-dlZp-xm22vqSk&usqp=CAU",
    desc: "A vibrant Choco Toucan rests on a branch, displaying its striking yellow chest and large colorful beak, typical of this rainforest bird native to Colombia and Ecuador.",
  },
  {
    title: "Panda Relaxing on a Tree Branch",
    img_src:
      "https://i.pinimg.com/564x/6e/cf/0f/6ecf0f03d9e82b6e5c816f6a50cd2e41.jpg",
    desc: "A giant panda lounges on a tree branch, resting peacefully with its fluffy black and white fur blending into the forest background.",
  },
  {
    title: "Three Adorable Kittens in the Grass",
    img_src:
      "https://www.pixelstalk.net/wp-content/uploads/2016/03/Animal-wallpaper-HD-photo.jpg",
    desc: "Three fluffy kittens sit closely together in a grassy field, their wide eyes and soft fur radiating pure cuteness and innocence.",
  },
];

const nature_view = [
  {
    title: "Peyto Lake in Banff National Park, Canada",
    img_src:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    desc: "A breathtaking view of Peyto Lake, nestled in the Canadian Rockies within Banff National Park. The lake's unique wolf-head shape and vibrant turquoise waters make it a popular destination for nature enthusiasts.",
  },
  {
    title: "Hintersee Lake with Thunderstorm Clouds",
    img_src:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    desc: "A serene scene of Hintersee Lake in Germany, with its calm waters reflecting the surrounding alpine landscape. Thunderstorm clouds loom overhead, adding a dramatic touch to the tranquil setting.",
  },
  {
    title: "Sunset Over Mountainous Landscape",
    img_src:
      "https://cdn-ccekl.nitrocdn.com/hPteaPRxTMTDWUapiAUgFsmhwGsGLOZC/assets/images/optimized/rev-1577b37/wp-content/uploads/2018/10/nature-full-hd-wallpapers-0.jpg",
    desc: "A stunning sunset casts warm hues over a rugged mountainous landscape, highlighting the natural beauty and tranquility of the wilderness.",
  },
  {
    title: "Lush Green Valley Surrounded by Mountains",
    img_src:
      "https://c4.wallpaperflare.com/wallpaper/431/451/684/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg",
    desc: "A picturesque green valley lies nestled between towering mountains, showcasing the harmonious blend of lush vegetation and majestic peaks.",
  },
];
const cars = [
  {
    title: "Lamborghini Aventador in Matte Black",
    img_src:
      "https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg",
    desc: "A sleek Lamborghini Aventador showcases its aerodynamic design and matte black finish, exuding power and elegance on the open road.",
  },
  {
    title: "Lamborghini Egoista Concept Car",
    img_src:
      "https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg",
    desc: "The Lamborghini Egoista, a one-seater concept car, features a futuristic design with sharp angles and a cockpit-inspired canopy, embodying exclusivity and innovation.",
  },
  {
    title: "Lamborghini Aventador",
    img_src:
      "https://i.pinimg.com/736x/77/2e/be/772ebe0e93b9d934c992f867f998d0c5.jpg",
    desc: "An eye-catching Lamborghini Aventador stands out against the urban backdrop, highlighting its aggressive styling and performance prowess.",
  },
];

const card_container = document.querySelector(".card_Container");
const btns = document.querySelectorAll(".btn");
let activeBtn = null;

function displayCard(itemsArray) {
  let html = "";
  itemsArray.forEach((item) => {
    html += `<section class="card">
          <img src='${item.img_src}' alt="">
          <div class="desc">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
         </section>`;
  });
  card_container.innerHTML = html;
}

displayCard(animals);
btns[0].classList.add("active");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const title = e.target.textContent;
    btns[0].classList.remove("active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }

    if (title === "Animals") {
      displayCard(animals);
      btn.classList.add("active");
      activeBtn = btn;
    }
    if (title === "Nature View") {
      displayCard(nature_view);
      btn.classList.add("active");
      activeBtn = btn;
    }
    if (title === "Cars") {
      displayCard(cars);
      btn.classList.add("active");
      activeBtn = btn;
    }
  });
});
