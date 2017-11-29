/*function renderMovie(data){
  document.querySelector(".infosection h1").textContent = data.title;
  document.querySelector(".infosection p").textContent = data.review;
  document.querySelector(".poster").setAttribute("src", data.imgUrl);

  let actorList = "";
  for(let i=0; i<data.actors.length; i++){
    actorList += "<li>" + data.actors[i] + "</li>";
  }
  document.querySelector(".infosection ul").innerHTML = actorList;
}

function changeStarRating(rating){
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    if (i <= rating){
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  }
}

for(let i=1; i<=5; i++){
  let star = document.getElementById("star" + i);
  star.addEventListener("click", function(){
    changeStarRating(i);
  });
}

renderMovie(movieData);
*/

// let $ = require("jquery");
import * as $ from "jquery";

import {Inception} from "./data";

import { Review } from "./interfaces";
// let reviewData = require("./data");

function renderMovie(data: Review){
  $(".infosection h1").text(data.title);
  $(".infosection p").text(data.review);
  $(".poster").attr("src", data.imgUrl);

  $(".infosection ul").empty();
  for(let i=0; i<data.actors.length; i++){
    $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
  }
}

function changeStarRating(rating){
  $(".filled").removeClass("filled");
  for(let i=1; i<=rating; i++){
    $("[data-rating-id=" + i + "]").addClass("filled");
  }
}


$(".stars").on("click", "span", (e) =>{
  let star = $(e.target);
  let rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

renderMovie(Inception);

/*
ui.rating.on("click", "span", (e) => {
  // truncated
});
*/
