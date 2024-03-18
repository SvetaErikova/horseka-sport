/* Booking */
let block_booking = document.querySelectorAll('.js-booking');


block_booking.forEach(block => {

  // Date Picker Input
  let calendar_input = block.querySelector('.booking--calendar');
  let booking_button = block.querySelector('.booking--button');


  let booking_link = "", arrival_date = "", leave_date = "", room = "";


  if ( calendar_input ) {
    let today = new Date()

    const picker = new Litepicker({
      element: document.getElementById('checkin'),
      elementEnd: document.getElementById('checkout'),
      singleMode: false,
      autoApply: true,
      format: 'DD MMM',
      lang: "ru-RU",
      minDate: today,
      startDate: today,
      endDate: new Date(+new Date() + 86400000),
      position: 'right auto',
      numberOfMonths: 2,
      numberOfColumns: 2,
      tooltipText: {
        one: 'ночь',
        two: 'ночи',
        few: 'ночи',
        many: 'ночей'
      },
      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      },
      showTooltip: true,
      setup: (picker) => {
        picker.on('selected', (date1, date2) => {
          arrival_date = date1.format('DD-MM-YYYY')
          leave_date = date2.format('DD-MM-YYYY')
        });
      },
      plugins: ['mobilefriendly'],
      mobilefriendly: {
        breakpoint: 668,
      },
      buttonText: {
        "previousMonth": '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M6.43433 11.4343L14.4343 3.43431L15.5657 4.56568L8.13138 12L15.5657 19.4343L14.4343 20.5657L6.43433 12.5657V11.4343Z"/>' +
          '</svg>',
        'nextMonth': '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M17.5657 11.4343L9.5657 3.43431L8.43433 4.56568L15.8686 12L8.43433 19.4343L9.5657 20.5657L17.5657 12.5657V11.4343Z" />' +
          '</svg>'
      }
    });
  }

  // Create link from inputs
  booking_button.addEventListener('click', (e)=>{
    if ( typeof ROOM_ID !== 'undefined' ) {
      console.log(ROOM_ID)
      room = "?room-type=" + ROOM_ID
    }
    let link = "";


    if ( SITE.LANG === "en" ) {
      link = "/en/booking/" + room +"?date=" + arrival_date + "&nights=" + total_days
    } else {
      link = "/booking/" + room +"?date=" + arrival_date + "&nights=" + total_days
    }

    window.open(link, '_blank')
  })

})
