const dateOfBirth = document.querySelector("#dateofbirth");
const luckNumber = document.querySelector("#lucknumber");
const checkNumber = document.querySelector("#checknumber");
const luckyStatus = document.querySelector("#luckstatus");

checkNumber.addEventListener("click", function checkIfBirthdayIsLucky() {
  let sumOfDateofBirthDate = calculateSumOfDigitsOfBirthday(dateOfBirth.value);
  findSumOfDateOfBirthDateIsDivisibleByLuckNumber(
    sumOfDateofBirthDate,
    luckNumber.value
  );
});

function calculateSumOfDigitsOfBirthday(dateOfBirth) {
  let sum = 0;
  dateOfBirth = dateOfBirth.replaceAll("-", "");
  for (let index = 0; index < dateOfBirth.length; index++) {
    sum = sum + parseInt(dateOfBirth.charAt(index));
  }
  return sum;
}

function findSumOfDateOfBirthDateIsDivisibleByLuckNumber(
  sumOfDateOfBirth,
  luckyNumber
) {
  if (sumOfDateOfBirth % luckyNumber === 0) {
    luckyStatus.innerText = "Your Birthday is Lucky 😀";
  } else {
    luckyStatus.innerText = "Your Birthday is not Lucky 😞";
  }
}
