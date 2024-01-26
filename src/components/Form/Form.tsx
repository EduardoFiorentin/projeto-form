import { FieldValues, UseFormHandleSubmit, useForm } from "react-hook-form"
// import * as validator from 'validator'

function validarEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Form = () => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    
    const onSubmit = (data: FieldValues) => {
        console.log(data)
        window.alert("Inscrissão enviada!")
    }
    console.log(errors)

    const watchPassword = watch("pass")
    
    return(
        <div className="form">
            <h1 className="title">Formulario de Inscrissão</h1>

            <div className="form__cells">
                <div className="form__cell">
                    <p className="form__label">Nome</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form__input"
                        {...register('name', {
                            required: true,
                        })}
                    />
                    {errors?.name?.type === 'required' && <p className="form__error-message">Nome é obrigatorio</p>}
                </div>
                <div className="form__cell">
                    <p className="form__label">email</p>
                    <input
                        type="text"
                        className="form__input"
                        placeholder="Email"
                        {...register('email', {
                            required: true,
                            validate: event => validarEmail(event)
                        })}
                        />
                    {errors?.email?.type === 'required' && <p className="form__error-message">Email é obrigatório!</p>}
                    {errors?.email?.type === 'validate' && <p className="form__error-message">Este tipo de email não é válido!</p>}
                
                </div>
                
                <div className="form__cell">
                    <p className="form__label">Senha</p>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form__input"
                        {...register('pass', {
                            required: true,
                            minLength: 7
                        })}
                        />
                    {errors?.pass?.type === 'required' && <p className="form__error-message">Campo senha é obrigatorio</p>}
                    {errors?.pass?.type === 'minLength' && <p className="form__error-message">Senha deve ter pelo menos 7 caracteres</p>}
                </div>
                <div className="form__cell">
                    <p className="form__label">Confirmar senha</p>
                    <input
                        type="password"
                        className="form__input"
                        placeholder="ConfirmPassword"
                        {...register('confirmPass', {
                            required: true,
                            minLength: 7,
                            validate: value => {
                                console.log(value, watchPassword)
                                return (value === watchPassword)
                            }
                        })}
                        />
                    {errors?.confirmPass?.type === 'minLength' && <p className="form__error-message">Senha deve ter pelo menos 7 caracteres</p>}
                    {errors?.confirmPass?.type === 'required' && <p className="form__error-message">Confirmação de senha é obrigatorio</p>}
                    {errors?.confirmPass?.type === 'validate' && <p className="form__error-message">Confirmação de senha deve ser igual a senha</p>}
                </div>
                <div className="form__cell">
                    <p className="form__label">Profissão</p>
                    <select id="" className="form__select" placeholder="Profession"
                        {...register('profession', {
                            required: true,
                            validate: value => {
                                return value !== "0"
                            }
                        })}
                    >
                        <option value="0">Selecione sua profissão</option>
                        <option value="1">Desenvolvedor</option>
                        <option value="2">Outra</option>
                    </select>
                    {errors?.profession?.type === 'validate' && <p className="form__error-message">Selecione uma das opções</p>}
                </div>
            </div>
            
            <div className="form__cell form__submit">
                <button className="form__button" onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
            </div>

        </div>
    )
}

export default Form