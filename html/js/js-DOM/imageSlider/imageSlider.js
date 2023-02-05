const body = document.getElementsByTagName("body")[0];
const newDiv = document.createElement("div");
body.appendChild(newDiv);
// const img = document.createElement("img");
// newDiv.appendChild(img);

const images = [
  "https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1675472574322-50633f897b2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
];
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1670272498425-e13ce4fcf5f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
// );

images.map((image) => {
  const img = document.createElement("img");
  img.setAttribute("src", image);
  newDiv.appendChild(img);
});
