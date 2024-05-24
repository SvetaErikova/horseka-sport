
let blockCalendar = document.querySelector('.content_events-calendar')
let calendar = document.querySelector('.block--calendar')
if(calendar){
  let numberOfMonths = 3
  if ( window.matchMedia('(max-width: 575px)').matches ) {
    numberOfMonths = 1
  } else if(window.matchMedia('(max-width: 1024px)').matches){
    numberOfMonths = 2
  } else{
    numberOfMonths = 3
  }

  let btnReset = blockCalendar.querySelector('.block--calendar .reset-button')
  let blockSection = blockCalendar.querySelector('.block--sections')
  let input = document.getElementById('datepicker')

  let ALLOWEDDATES = [];
  if (  ALLOWEDDATES.length < 1 ){
    ALLOWEDDATES = [
      '2024-05-07', '2024-05-08', '2024-05-09',
      '2024-05-11', '2024-05-13', '2024-05-15',
    ];
  } else {
    ALLOWEDDATES = {...ALLOWEDDATES}
  }

  // PRELODER


  // CALENDAR
  let calendar = new Litepicker({
    element: input,
    inlineMode: true,
    numberOfMonths: numberOfMonths,
    numberOfColumns: numberOfMonths,
    singleMode: true,
    lang: 'RU',
    splitView: false,
    lockDaysFilter: (date1, date2, pickedDates) => {
      return !ALLOWEDDATES.includes(date1.format('YYYY-MM-DD'));
    },
    setup: (picker) => {
      picker.on('selected', (date1, date2) => {
        let date = new Date(input.value).toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        btnReset.querySelector('.date').innerText = date
        btnReset.classList.add('is_active')
        blockSection.classList.add('hidden')
        console.log(input.value)
      });
    },
  })

  // RESET
  btnReset.addEventListener('click', (btn) =>{
    btnReset.classList.remove('is_active')
    blockSection.classList.remove('hidden')
    calendar.clearSelection()
  })
  // TABS
  let  tabs = blockCalendar.querySelectorAll('.block--sections button')
  tabs.forEach(tab =>{
    tab.addEventListener('click', (e) =>{
      e = e.currentTarget.dataset.date
      calendar.gotoDate(e)
    })
  })

  let filterReset = blockCalendar.querySelector('.filter [type="reset"]')
  filterReset.addEventListener('click', (e)=>{
    calendar.clearSelection()
    ALLOWEDDATES = [
      '2024-07-07', '2024-07-08', '2024-07-09',
      '2024-07-11', '2024-07-13', '2024-05-15',
    ];
    btnReset.click()
    calendar.setOptions(ALLOWEDDATES)
  })

  // FILTERS
  window.addEventListener('load', (e) => {
    let filterSelect = blockCalendar.querySelectorAll('.filter .select--option')
    filterSelect.forEach(s =>{
      s.addEventListener('click', (e) =>{
        // ALLOWEDDATES = [
        //   '2024-06-07', '2024-06-08', '2024-05-09',
        //   '2024-06-11', '2024-06-13', '2024-05-15',
        // ];
        // calendar.clearSelection()
        btnReset.click()
        calendar.setOptions(ALLOWEDDATES)
      })
    })
  })

}

// console.log(calendar)
