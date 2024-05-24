let blockFilter = document.querySelectorAll('.filter')


function resetSelect(block){
  let select = block.querySelectorAll('.select')
  let reset = block.querySelector('[type="reset"]')

  reset.addEventListener('click', (e)=>{
    if(select.length >= 1){
      select.forEach(sel=>{
        sel.querySelector('.select--button').textContent = sel.querySelector('.select--option').textContent
        sel.querySelectorAll('.select--option').forEach(s =>{
          s.classList.remove('is_selected')
        })
      })
    }
  })
}
if (blockFilter){
  blockFilter.forEach(block =>{
    resetSelect(block)
  })



}

