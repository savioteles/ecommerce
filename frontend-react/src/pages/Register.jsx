import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

const Register = () => {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        documento: '',
        tipoDocumento: '', // 'CPF' ou 'CNPJ'
        telefone: '',
        endereco: '',
        rg: '',
        razaoSocial: '',
        inscricaoEstadual: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rg') {
            const cleaned = value.replace(/[^0-9.-]/g, '');
            setForm(prevState => ({
                ...prevState,
                [name]: cleaned
            }));
        } else if (name === 'razaoSocial') {
            const cleaned = value.replace(/[^a-zA-Z\u00C0-\u00FF\s]/g, '');
            setForm(prevState => ({
                ...prevState,
                [name]: cleaned
            }));
        } else if (name === 'inscricaoEstadual') {
            const cleaned = value.replace(/\D/g, '');
            setForm(prevState => ({
                ...prevState,
                [name]: cleaned
            }));
        } else {
            setForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(form.email)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }
        console.log('Formulário enviado:', form);
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Cadastro</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-6 col-lg-6 col-sm-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <label htmlFor="Nome">Nome Completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Nome"
                                    name="nome"
                                    placeholder="Digite seu nome completo"
                                    value={form.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Email">Endereço de E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    name="email"
                                    placeholder="nome@exemplo.com"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Password">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    name="senha"
                                    placeholder="Senha"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="DataNascimento">Data de Nascimento</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="DataNascimento"
                                    name="dataNascimento"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group my-3">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="tipoDocumento"
                                            value="CPF"
                                            onChange={handleChange}
                                            checked={form.tipoDocumento === 'CPF'}
                                        /> CPF
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="tipoDocumento"
                                            value="CNPJ"
                                            onChange={handleChange}
                                            checked={form.tipoDocumento === 'CNPJ'}
                                        /> CNPJ
                                    </label>
                                </div>
                            </div>
                            {form.tipoDocumento === 'CPF' && (
                                <>
                                    <div className="form-group my-3">
                                        <label htmlFor="Documento">CPF</label>
                                        <InputMask
                                            mask="999.999.999-99"
                                            className="form-control"
                                            id="Documento"
                                            name="documento"
                                            placeholder="Digite seu CPF"
                                            onChange={handleChange}
                                            value={form.documento}
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="RG">RG</label>
                                        <InputMask
                                            mask="99.999.999-9"
                                            className="form-control"
                                            id="RG"
                                            name="rg"
                                            placeholder="Digite seu RG"
                                            onChange={handleChange}
                                            value={form.rg}
                                        />
                                    </div>
                                </>
                            )}
                            {form.tipoDocumento === 'CNPJ' && (
                                <>
                                    <div className="form-group my-3">
                                        <label htmlFor="Documento">CNPJ</label>
                                        <InputMask
                                            mask="99.999.999/9999-99"
                                            className="form-control"
                                            id="Documento"
                                            name="documento"
                                            placeholder="Digite seu CNPJ"
                                            onChange={handleChange}
                                            value={form.documento}
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="RazaoSocial">Razão Social</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="RazaoSocial"
                                            name="razaoSocial"
                                            placeholder="Digite a razão social"
                                            onChange={handleChange}
                                            value={form.razaoSocial}
                                        />
                                    </div>
                                    <div className="form-group my-3">
                                        <label htmlFor="InscricaoEstadual">Inscrição Estadual</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="InscricaoEstadual"
                                            name="inscricaoEstadual"
                                            placeholder="Digite a inscrição estadual"
                                            onChange={handleChange}
                                            value={form.inscricaoEstadual}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="form-group my-3">
                                <label htmlFor="Telefone">Telefone para Contato</label>
                                <InputMask
                                    mask="(99) 99999-9999"
                                    className="form-control"
                                    id="Telefone"
                                    name="telefone"
                                    placeholder="Digite seu telefone"
                                    onChange={handleChange}
                                    value={form.telefone}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="Endereco">Endereço de Entrega</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Endereco"
                                    name="endereco"
                                    placeholder="Digite seu endereço de entrega"
                                    onChange={handleChange}
                                    value={form.endereco}
                                />
                            </div>
                            <div className="my-3">
                                <p>Já possui uma conta? <Link to="/login" className="text-decoration-underline text-info">Entrar</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;
