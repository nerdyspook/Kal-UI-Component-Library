/* ================ Input ================ */
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const formItems = [username, email, password];

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control form-error";
};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control form-success";
};

const isEmail = (email) =>
    // Regex to check email
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

const isPassword = (password) => password.length > 8;

const checkInputs = () => {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    usernameValue === ""
        ? setErrorFor(username, "Username cannot be blank!")
        : setSuccessFor(username);

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank!");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    if (password === "") {
        setErrorFor(password, "Password cannot be empty");
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, "Length should be more than 8!");
    } else {
        setSuccessFor(password);
    }
};

formItems.forEach((item) =>
    item.addEventListener("keyup", (e) => {
        console.log(e.target.value);

        checkInputs();
    })
);
