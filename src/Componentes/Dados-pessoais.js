import React,{useState} from "react";
import { useForm} from "react-hook-form";
import Destino from "./Destino-de-Interesse";
import Botao from "./botaoSubmit";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    Nome: yup.string().required("O nome é obrigatório"),
    Email: yup.string().required("Digite um Email é válido"),
    Telefone: yup.string().min(11, "No minimo 11 numeros").required("O Telefone é obrigatório"),
    CPF: yup.string().required("Digite um CPF válido")
}).required();


export default function dados(){
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const [valor, setValue] = useState("");
    function onSubmit(userData){
        console.log(userData)
    }
    
    console.log(errors)
    return(
    <>
    <div className="formulario">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">           
                <div className="Dados">
                    <h1 className="textodados">Dados Pessoais</h1>

                    <input type="text" placeholder="Nome:" {...register("Nome", {required: true})} />
                    <span>{errors.Nome?.message}</span>
                    <input placeholder="Email:"  {...register("Email", {required: true})} />
                    <span>{errors.Email?.message}</span>
                    <input type="number" placeholder="Telefone:" {...register("Telefone", {required: true})}/>
                    <span>{errors.Telefone?.message}</span>

                    <input type="text" placeholder="CPF:" {...register("CPF", {required: true})} value={valor} />
                    <span>{errors.CPF?.message}</span>
                </div>
                <Destino/>
            </div>
            <Botao />
        </form>
    </div>
    </>
    )
}