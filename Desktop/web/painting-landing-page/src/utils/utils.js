


export function scrollToElement(id){
  const targetElement = document.getElementById(id);
  const headerHeight = document.querySelector("nav").offsetHeight;

  if (targetElement) {
    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top;

    window.scrollBy({ top: elementTop - headerHeight, behavior: "smooth" })
  }
}