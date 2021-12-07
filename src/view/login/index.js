import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <div className="form-signin mx-auto">
                <form>
                    {/* <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal text-white font-weight-bold">Login </h1>

                    <input type="email" className="form-control my-2" id="floatingInput" placeholder="Email" />

                    <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />



                    <button className="w-100 btn btn-lg btn-login" type="submit">Sign in</button>


                    <div className="opcoes-login mt-5">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <a href="#" className="mx-2">Quero Cadastrar</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;