Inputmask({
  mask: "+7 999 999 99 99",
  inputmode: 'numeric',
  showMaskOnFocus: true,
  "clearIncomplete": true,
  clearMaskOnLostFocus: true,
  greedy: false,
  nullable: true,
}).mask("input[type='tel']");

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

function validateInputs(form) {
  let inputs = form.querySelectorAll('input:not([type="hidden"])')
  let submit_button = form.querySelector('button[type="submit"]')

  inputs.forEach(i => {
    let parent = i.closest('.form--input');
    let error_text = parent.querySelector('.form--input_error')

    if ( i.classList.contains('js-input_file') ){

      let file_text = i.parentElement.querySelector(".js-changeDescriptionText")
      let changeFileButton = i.parentElement.querySelector(".js-clearFile")
      let input_max_size = parseInt(i.dataset.maxsize)

      i.addEventListener("change", function(){
        file_text.textContent = i.files.item(0).name + " (" + returnFileSize(this.files[0].size) + ")";
        i.parentElement.classList.add("loaded");

        if ( this.files[0].size > input_max_size) {
          i.setCustomValidity("Файл слишком большой")
          i.reportValidity(false)
        }
      })

      changeFileButton.addEventListener("click", function(e){
        e.stopPropagation()
        e.preventDefault()

        i.value = ""
        i.parentElement.classList.remove("loaded")
        file_text.innerHTML = file_text.dataset.text || "Выберите файл в допустимом формате ("+ i.accept+ "), размером не более " + returnFileSize(input_max_size)
      })
    }

    if ( i.parentElement.classList.contains('js-toggle') ){
      let toggle = i.parentElement
      let hidden_value = toggle.querySelector('input[type="hidden"]').value
      let toggle_text_element = toggle.querySelector('span')

      i.addEventListener('change', ()=>{
        i.checked
          ? toggle_text_element.textContent = i.value
          : toggle_text_element.textContent = hidden_value
      })
    }

    i.addEventListener('change', ()=>{


      if ( !i.checkValidity() ) {

        i.setAttribute("invalid", '');
        i.removeAttribute("valid", '');

        parent ? parent.classList.add('error') : null;

        if ( i.validity.valueMissing ) {
          error_text ? error_text.textContent = "Данное поле обязательно к заполнению" : "";
        }
        else if ( i.validity.patternMismatch || i.validity.typeMismatch ) {
          error_text ? error_text.textContent = "Проверьте правильность заполнения поля" : "";
        }
        else if ( i.validity.rangeOverflow ) {
          error_text ? error_text.textContent = "Проверьте правильность заполнения поля" : "";
        }
        else if ( i.validity.rangeUnderflow ) {
          error_text ? error_text.textContent = "Проверьте правильность заполнения поля" : "";
        }
        else if (i.validity.customError){
          error_text ? error_text.textContent = "Файл слишком большой" : "";
        }
        else {
          error_text ? error_text.textContent = "Данное поле не заполнено или заполнено неверно" : "";
        }

        form.checkValidity()
          ? submit_button.removeAttribute('disabled')
          : submit_button.setAttribute('disabled', "")
      }
      else {

        i.removeAttribute("invalid", '');
        i.setAttribute("valid", '');

        form.checkValidity()
        ? submit_button.removeAttribute('disabled')
          : submit_button.setAttribute('disabled', "")

        parent ? parent.classList.remove('error') : null;
        error_text ? error_text.textContent = "Данное поле не заполнено или заполнено неверно" : "";
      }


    })

  })

}

let forms = document.querySelectorAll('form')

forms.forEach(form => {
  validateInputs(form)
})

//date input

let date_inputs = document.querySelectorAll('.form--input_date')

date_inputs.forEach( input => {

  let i_today_date = new Date()
  // i_today_date.setDate(i_today_date.getDate() - 1);

  const picker = new Litepicker({
    element: input,
    singleMode: true,
    autoApply: true,
    format: 'DD.MM.YYYY',
    lang: "ru-RU",
    // startDate: i_today_date,
    minDate: input.dataset.min,
    maxDate: input.dataset.max,
    position: 'left auto',
    numberOfMonths: 1,
    numberOfColumns: 1,
    showTooltip: false,
    plugins: ['mobilefriendly'],
    mobilefriendly: {
      breakpoint: 668,
    },
    buttonText: {
      "previousMonth": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">\n' +
        '<path d="M6.43359 11.4343L14.4336 3.43433L15.565 4.5657L8.13065 12L15.565 19.4343L14.4336 20.5657L6.43359 12.5657V11.4343Z" />\n' +
        '</svg>',
      "nextMonth": '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">\n' +
        '<path d="M17.565 11.4343L9.56496 3.43433L8.43359 4.5657L15.8679 12L8.43359 19.4343L9.56496 20.5657L17.565 12.5657V11.4343Z" />\n' +
        '</svg>',
    },
    setup: (picker) => {
      picker.on('before:render', (ui) => {
        input.placeholder = i_today_date.toLocaleDateString("ru-RU")
      });
    },
  });
})

let createCustomSelect = ( block ) =>{
  let select_inputs = block.querySelectorAll('.form--input_select')

  select_inputs.forEach(i => {

    let select = document.createElement('div')
    select.classList.add('select')
    i.appendChild(select)

    let select_button = document.createElement('div')
    select_button.classList.add('select--button')
    select.appendChild(select_button)

    let select_option_list_container = document.createElement('div')
    select_option_list_container.classList.add('select--option_wrapper')
    select.appendChild(select_option_list_container)

    let select_option_list = document.createElement('div')
    select_option_list.classList.add('select--option_list')
    select_option_list_container.appendChild(select_option_list)


    let options = i.querySelectorAll('option')

    options.forEach(opt => {
      let customCheckbox = document.createElement('div')
      customCheckbox.classList.add('select--checkbox')
      let select_option = document.createElement('div')
      select_option.classList.add('select--option')
      select_option.dataset.value = opt.value
      select_option.textContent = opt.value
      select_option.appendChild(customCheckbox)
      select_option_list.appendChild(select_option)

    })

    let select_options = i.querySelectorAll('.select--option')
    select_options.forEach((option,index) => {
      option.addEventListener('click',(op)=>{
        select_button.textContent = option.dataset.value
        select_options.forEach(o => {
          o !== option ? o.classList.remove('is_selected') : o.classList.add('is_selected')
        })
        select_option_list_container.classList.remove('is_opened')
        options.forEach(opt => {
          op.currentTarget.dataset.value === opt.value ? opt.setAttribute('selected', '') : opt.removeAttribute('selected', '')
        })
      })
    })

    select_button.textContent = options[0].value

  })
  let selectBtn = block.querySelectorAll('.select--button')
  selectBtn.forEach(sel =>{
    sel.addEventListener('click', (e) =>{
      selectBtn.forEach(se =>{
        let s = se.parentElement.querySelector('.select--option_wrapper')
        se === e.currentTarget ? s.classList.toggle('is_opened')  : s.classList.remove('is_opened')

      })
    })
  })
  let selects = block.querySelectorAll('.select')
  selects.forEach(s =>{
  window.addEventListener("keydown", function (e) {

      if (e.code === "Escape") {
        s.querySelector('.select--option_wrapper').classList.remove('is_opened')
      }
    })
    window.addEventListener("click", function (e) {
      if (e.target !== s ){
          if ( e.target.closest('.form--input_select') === null ) {
            s.querySelector('.select--option_wrapper').classList.remove('is_opened')
          }
      }
    });
  });
}

createCustomSelect(document)


function checkSelect(){
  let select_inputs = document.querySelectorAll('.form--input_select')

    select_inputs.forEach(i => {
    let select_options = i.querySelectorAll('.select--option')
      let options = i.querySelectorAll('option')
    select_options.forEach((option,index) => {
      option.addEventListener('click',(op)=>{
        // select_button.textContent = option.dataset.value
        select_options.forEach(o => {
          o !== option ? o.classList.remove('is_selected') : o.classList.add('is_selected')
        })
        options.forEach(opt => {
          op.currentTarget.dataset.value === opt.value ? opt.setAttribute('selected', '') : opt.removeAttribute('selected', '')
        })
      })
    })
  })
}

