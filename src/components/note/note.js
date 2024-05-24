let note = document.querySelector('.note')
if (note){

  // let note_height = note.getBoundingClientRect().height
  // document.documentElement.style.setProperty('--noteHeight', `${note_height}px`)

  window.addEventListener('load', ()=>{
    // if ( localStorage.getItem('popState') !== 'shown' ) {
    //   note.style.display = 'block'
    //     localStorage.setItem('popState','shown')
    // }
    // note.style.display = 'block'
  })
  note.querySelector('.note-close').addEventListener('click', e =>{
    note.classList.add('hidden')
  })

}
