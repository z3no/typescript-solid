interface PasswordAuth {
    checkPassword(password: string) : boolean;
    resetPassword():void;
}

interface GoogleAuth {
    setGoogleToken(token : string):void;
    checkGoogleLogin(token : string) : boolean;
}

interface FacebookAuth {
    setFacebookToken(token : string):void;
    getFacebookLogin(token : string) : boolean;
}

class User implements PasswordAuth, GoogleAuth, FacebookAuth {

    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

}

//admin cannot use Google or Facebook token
class Admin implements PasswordAuth {

    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }

}

// Feature request
class GoogleBot implements GoogleAuth {

    private _googleToken : string;

    checkGoogleLogin(token: string): boolean {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }
}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User();
let admin = new Admin();
let bot = new GoogleBot();

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let auth = false;

    //Admin
    if(loginAsAdminElement.checked && typePasswordElement.checked){
        auth = admin.checkPassword(passwordElement.value);
    }
    //User
    else if(typePasswordElement.checked && !loginAsAdminElement.checked){
        guest.setGoogleToken('secret_token_google');
        guest.setFacebookToken('secret_token_fb');
        auth = guest.checkPassword(passwordElement.value);
    }
    else if(typeFacebookElement.checked && !loginAsAdminElement.checked){
        auth = guest.getFacebookLogin('secret_token_fb');
    }
    else if (typeGoogleElement.checked && !loginAsAdminElement.checked){
        auth = guest.checkGoogleLogin('secret_token_google');
    }
    debugger;


    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});