import { NavLink } from "react-router-dom";

export function RegisterMain() {

    const inputs = [
        { label: 'Nome completo', type: 'text', name: 'name', placeholder: 'Digite seu nome' },
        { label: 'E-mail', type: 'text', name: 'email', placeholder: 'Digite seu e-mail' },
        { label: 'Senha', type: 'password', name: 'password', placeholder: 'Digite sua senha' },
        { label: 'Data de nascimento', type: 'date', name: 'birthdate', placeholder: 'Digite sua data de nascimento' },
        { label: 'CPF ou CNPJ', type: 'text', name: 'cpf', placeholder: 'Digite seu CPF ou CNPJ' },
        { label: 'Telefone', type: 'text', name: 'phone', placeholder: 'Digite seu telefone' },
        { label: 'Endereço', type: 'text', name: 'address', placeholder: 'Digite seu endereço' },
    ];

    return (
        <main className="flex-1 p-5 flex flex-col gap-10 md:pt-32 justify-center items-center">
            <h1 className='text-4xl font-semibold text-black/80 w-full text-center p-2.5 border-b-[1px] border-b-black/30'>Cadastrar</h1>
            <form className="w-full max-w-96 h-full flex flex-col gap-5 items-center justify-center">
                {
                    inputs.map((input, index) => (
                        <label key={index} className="w-full flex flex-col gap-2.5">
                            <span className="text-black/50">
                                {input.label}:
                            </span>
                            <input className="w-full p-2.5 rounded ring-[1px] ring-black/30 focus:pl-4 transition-all" type={input.type} name={input.name} placeholder={input.placeholder} />
                        </label>
                    ))
                }
                <button className="cursor-pointer bg-black/85 w-full rounded p-2.5 font-bold text-white hover:bg-black/100 transition-all">
                    Cadastrar
                </button>
            </form>
        </main>
    )
}
