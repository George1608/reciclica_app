import { EmailValidator, FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form"

describe ('LoginPageForm' ,( )=>  {

    let loginPageForm : LoginPageForm;
    let form : FormGroup <any>;

    beforeEach(() =>{
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })
    it('should create login form empty',()=>{

        

        expect(form).not.toBeNull ();
        expect(form.get('email')).not.toBeNull ();
        expect(form.get('email')?.value).toEqual ("");
        expect(form.get('email')?.valid).toBeFalsy ();
        expect(form.get('password')).not.toBeNull ();
        expect(form.get('password')?.value).toEqual ("");
        expect(form.get('password')?.valid).toBeFalsy ();
    })
})