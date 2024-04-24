// when #button-r clicked: (on-click-element event snippet)
//   show next slide (next slide snippet)
//   fill in next bubble

// when #button-l clicked: (on-click-element event snippet)
//   show previous slide (next slide snippet)
//   fill in previous bubble

/* TODO: Replace TODO_SLIDES_CSS_SELECTOR with a CSS selector that selects _all_ slides. (See "hint" above in access element snippet.) */

/* TODO: Replace TODO_SLIDES_CSS_SELECTOR with a CSS selector that selects _all_ slides. (See "hint" above in access element snippet.) */

const SLIDES = $('.slides > .slide');

/* See "show next slide snippet" to use */
function nextSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let nextNum = SLIDES.index($('.slides > .slide:not(.hidden)')) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
  console.log('hi');
  console.log(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let prevNum = SLIDES.index($('.slides > .slide:not(.hidden)')) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass('hidden');
  currentSlide.removeClass('hidden');

  /* TODO: snippets to hide SLIDES and then show currentSlide
     Use `SLIDES` or `currentSlide` as the "Access Element Snippet"
     (e.g. `SLIDES.addClass()` or `currentSlide.removeClass()`) */
}


$("#button-r").on('click', function() {
    nextSlide();
});

$("#button-l").click(function() {
    prevSlide();
});
