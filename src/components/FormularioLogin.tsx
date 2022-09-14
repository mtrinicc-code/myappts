import React, {Component, FormEvent} from 'react';

interface LoginData {
    email?: string;
    pwd?: string;
}
class FormularioLogin extends Component<{}, LoginData> {

    constructor()  {
        super({});
        this.state = {
            email: 'email defecto',
            pwd: '1234'
        }
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePwd = this.onChangePwd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
    }

    render() {
        return (
            <div>
                <h2>Formulario</h2>
                <form onSubmit={this.onSubmit}>
                    <label>email
                        <input type="text" value={this.state.email} onChange={this.onChangeUser}/>
                    </label>
                    <label> password
                        <input type="password" value={this.state.pwd} onChange={this.onChangePwd}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
    onChangeUser(event: FormEvent) {
        event.preventDefault();
        console.log('onChangeUser ' + event);
        this.setState( state => ({
            ...state,
            email: (event.target as HTMLInputElement).value
        }))
    }
    
    onChangePwd(event: FormEvent) {
        event.preventDefault();
        console.log('onChangePwd ' + event);
        this.setState( state => ({
            ...state,
            pwd: (event.target as HTMLInputElement).value
        }))
    }
    onSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(`${this.state.email} ${this.state.pwd}`);
    }
}
export default FormularioLogin;
