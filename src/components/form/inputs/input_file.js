// /* Input type file */
// function returnFileSize(number) {
//   if (number < 1024) {
//     return `${number} bytes`;
//   } else if (number >= 1024 && number < 1048576) {
//     return `${(number / 1024).toFixed(1)} KB`;
//   } else if (number >= 1048576) {
//     return `${(number / 1048576).toFixed(1)} MB`;
//   }
// }
//
// function checkFileSize(number, max_number) {
//   if(number > max_number){
//
//   }
// }
//
//
// let inputs_file = document.querySelectorAll(".js-input_file")
//
// inputs_file.forEach(input => {
//
//   let file_text = input.parentElement.querySelector(".js-changeDescriptionText")
//   let changeFileButton = input.parentElement.querySelector(".js-clearFile")
//
//   let input_max_size = parseInt(input.dataset.maxsize)
//
//   input.addEventListener("change", function(e){
//     checkFileSize(this.files[0].size, input_max_size)
//
//     file_text.textContent = input.files.item(0).name + " (" + returnFileSize(this.files[0].size) + ")";
//     input.parentElement.classList.add("loaded");
//
//   })
//
//   changeFileButton.addEventListener("click", function(e){
//     e.stopPropagation()
//     e.preventDefault()
//
//     input.value = ""
//     input.parentElement.classList.remove("loaded")
//     file_text.innerHTML = "<span>Выберите файл</span> с резюме или перетащите его в поле (doc, pdf, до 10мб)"
//   })
//
// })
