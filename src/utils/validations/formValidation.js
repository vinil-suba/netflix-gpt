export const formValidation = function(email, password, name, isSignInForm) {
    // eslint-disable-next-line 
    const isEmailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // eslint-disable-next-line 
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     // eslint-disable-next-line
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isEmailValidate) return 'Please enter a valid email: '+ email;
    if(!isPasswordValidate) return 'Please enter a valid password: '+ password;
    
    if(!isSignInForm)
        if(name === undefined || name ==='') return 'Please enter a valid name: '+  name;

    return null;
}
