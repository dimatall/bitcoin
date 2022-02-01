import React, {useEffect} from "react"
import setIframeIdAndSize from "../utils/iframe";

const Modal = () => {

  useEffect(() => {
    const modal = document.querySelector(".modal")
    const btn = document.querySelectorAll(".show-modal")

    btn.forEach(elem => {
      elem.onclick = (event) => {
        event.preventDefault();
        const iframe = document.querySelector('.modal iframe');
        if (!iframe.src) {
          iframe.setAttribute('src', iframe.dataset.src);
          setIframeIdAndSize(iframe);
        }
        modal.style.display = "block"
      }
    })
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none"
      }
    }
    document.onkeydown = function(evt) {
      if (evt.key === "Escape" || evt.key === "Esc") {
        modal.style.display = "none"
      }
    };
  })

  return (
    <div className="modal">
      <div className="modal__content">
        <iframe data-src="https://registerhappy.net/box_eb35d32d5cbb20c7c8ae738d2286653a" style={{border:0,width:"100%",height:625}}></iframe>
      </div>
    </div>
  )
}
export default Modal
