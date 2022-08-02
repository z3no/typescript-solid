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
let googleBot = new GoogleBot();

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user;

    if(loginAsAdminElement.checked) {
        user = admin;
    } else if (!loginAsAdminElement.checked && typeGoogleElement.checked){
        user = googleBot;
    } else {
        user = guest;
    }
    debugger;

    let auth = false;
    if(user === guest){
        user.setFacebookToken('secret_token_fb');
        switch(true) {
            case typePasswordElement.checked:
                auth = user.checkPassword(passwordElement.value);
                break;
            case typeFacebookElement.checked:
                debugger;
                auth = user.getFacebookLogin('secret_token_fb');
                break;
        }
    } else if(user === googleBot) {
        user.setGoogleToken('secret_token_google');
        auth = user.checkGoogleLogin('secret_token_google');
    } else if(user === admin) {
        if (!typeGoogleElement.checked && !typeFacebookElement.checked) {
            auth = user.checkPassword(passwordElement.value);
        }
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