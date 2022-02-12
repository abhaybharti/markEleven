const dateOfBirth = document.querySelector("#dateofbirth");
const luckNumber = document.querySelector("#lucknumber");
const checkNumber = document.querySelector("#checknumber");
const luckyStatus = document.querySelector("#luckstatus");

checkNumber.addEventListener("click", function checkIfBirthdayIsLucky() {
  if (dateOfBirth.value.length === 0) {
    luckyStatus.innerText = "Date Of Birth value not entered";
    dateOfBirth.style.border = "1px solid red";
    luckyStatus.style.color = "red";
    return;
  } else {
    dateOfBirth.style.border = "1px solid black";
  }

  if (luckNumber.value.length === 0) {
    luckyStatus.innerText = "Lucky Number not entered";
    luckNumber.style.border = "1px solid red";
    luckyStatus.style.color = "red";
    return;
  } else {
    luckNumber.style.border = "1px solid black";
  }

  let sumOfDateofBirthDate = calculateSumOfDigitsOfBirthday(dateOfBirth.value);
  findSumOfDateOfBirthDateIsDivisibleByLuckNumber(
    sumOfDateofBirthDate,
    luckNumber.value
  );
});

/**
 * Calculate the sum of the digits of a date of birth
 * @param dateOfBirth - The date of birth of the user.
 * @returns The sum of the digits of the birthday.
 */
function calculateSumOfDigitsOfBirthday(dateOfBirth) {
  let sum = 0;
  /* It removes the hyphens from the date of birth. */
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
    /* It changes the color of the text to green. */
    luckyStatus.style.color = "green";
    luckyStatus.innerText = "Your Birthday is Lucky 😀";
  } else {
    /* It changes the color of the text to red. */
    luckyStatus.style.color = "red";
    luckyStatus.innerText = "Your Birthday is not Lucky 😞";
  }
}
