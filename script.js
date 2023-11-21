const like = document.querySelector('.like');
const dislike = document.querySelector('.dislike');

like.addEventListener("click", () => {
  const imglike = document.querySelector(".click_like")
  const imgdislike = document.querySelector(".click_dislike")

  if (imglike.src.includes("like_click.svg")) {
    imglike.src = "./img/like.svg"
  } else {
    imglike.src = "./img/like_click.svg"
    if (imgdislike.src.includes("dislike_click.svg")) {
      imgdislike.src = "./img/dislike.svg"
    }
  }
})

dislike.addEventListener("click", () => {
  const imgdislike = document.querySelector(".click_dislike")
  const imglike = document.querySelector(".click_like")

  if (imgdislike.src.includes("dislike_click.svg")) {
    imgdislike.src = "./img/dislike.svg"
  } else {
    imgdislike.src = "./img/dislike_click.svg"
    if (imglike.src.includes("like_click.svg")) {
      imglike.src = "./img/like.svg"
    }
  }
})
