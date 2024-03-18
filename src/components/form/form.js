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
