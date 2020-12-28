const $myForm = $("#myForm");
const $email = $(".email");
const $emailDiv = $("form > div:first-child");
const $errorMessage = $(".errorMessage");
const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$myForm.on("submit", (e) => {
  e.preventDefault();
  emailValidation();
});

function emailValidation() {
  if ($email.val() == "") {
    $email.addClass("error");
    $errorMessage.text("Whoops! It looks like you forgot to add your email");
    if ($(window).width <= 768) {
      $emailDiv.css("margin-bottom", "30px");
    }
  } else if (!emailIsValid($email.val())) {
    $email.addClass("error");
    $errorMessage.text("Please provide a valid email address");
    if ($(window).width <= 768) {
      $emailDiv.css("margin-bottom", "30px");
    }
  } else {
    if (!$errorMessage.text("")) {
      $errorMessage.text("");
    }
    if ($email.hasClass("error")) {
      $email.removeClass("error");
    }
    return true;
  }
}

function emailIsValid(email) {
  if (mailFormat.test(email)) {
    return true;
  } else {
    return false;
  }
}

// TODO: add cleaner function for when an email is valid after invalid email was provided
