import React,{ useEffect, useState } from "react";
import Select from 'react-select';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function destinoInteresse(){
    const { register } = useForm();
    const [paises, usePaises] = useState([""])
    const [cidades, useCidades] = useState([""])
    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/country")
        .then(res => usePaises(res.data))
    }, [])

    useEffect(()=>{
        axios.get("https://amazon-api.sellead.com/city")
        .then(res=> useCidades(res.data))
    },[])

    let pais = paises.map((pais)=> {return {value: pais.code, label: pais.name_ptbr, name: pais.name}})
    let  cidade = cidades.map((cidade) => { return { id: cidade.id ,value:cidade.name, name: cidade.name, pais: cidade.country_code, label: cidade.name_ptbr, url: cidade.url1}})
    return(
        
        <div className="Destino">
                <h1 className="textoDestino">Destino de Interesse</h1>
                    <Select className="select" placeholder="Países:" {...register("paises")} isMulti options={pais} ></Select>   
                    <br/>
                    <br/>             
                    <Select className="select" placeholder="Cidades" {...register("cidades")}isMulti options={cidade}></Select>
        </div>
        
    )
}