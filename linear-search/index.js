console.log("Linear search")

function linearSearch(arr, val) { 
   for (let i = 0; i < arr.length; i++){
      if (arr[i] === val) {
         return i;
      }
   }

   return -1
}

console.log(linearSearch([34, 20, 100, 50, 30, 1, 50, 80], 1000))

const countryArray = [
   "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan","Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
   "Jamaica",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
]

function countryLinearSearch(arr, val) {
   for (let i = 0; i < arr.length; i++){
      if (arr[i] === val) {
         return i;
      }
   }

   return -1
}

console.log(countryLinearSearch(countryArray, "Northern Mariana Islands (the)"))