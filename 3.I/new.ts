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