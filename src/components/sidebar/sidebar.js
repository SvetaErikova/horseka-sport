
/* Page navigation Company */

let block_with_navigation = document.querySelector(".sidebar_navigation");

if ( block_with_navigation ) {

  let anchor_links = block_with_navigation.querySelectorAll('a');

  anchor_links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let hash = event.currentTarget.hash.substring(1);

      let target = document.querySelector('a[name="'+hash+'"]');

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      let link = document.querySelector("a[href='#"+ entry.target.name +"']");

      if ( entry.isIntersecting ) {
        link.classList.add("is_active")

      } else {
        link.classList.remove("is_active")
      }

    })
  }

  let observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px 0px -40% 0px',
    threshold: [0.5]
  });


  window.addEventListener("scroll", (event) => {

    anchor_links.forEach(link => {

      let hash = link.hash.substring(1)

      let section = document.querySelector('a[name="'+hash+'"]');
      if ( section ) observer.observe(section);
    });

  });
}
