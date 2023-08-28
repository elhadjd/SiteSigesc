import axios from "axios"
import React, { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'

interface Country{
    list: string[],
    store: string[]
}
interface CountryChoose{
    name: string,
    code: string
}

interface formularyType{
    name: string,
    fiscalIdentification: string,
    phone: string,
    email: string,
    country: {
        name: string,
        code: string
    },
    city: string,
    rua: string,
    id: any,
}
export const newCompanyService = (()=>{
    const [countries,setCountries] = useState<Country>({
        list:[],
        store:[]
    })
    const [FormPayment,setFormPayment] = useState<boolean>(true)
    const {numberChoose } = useParams()

    const [formulary, setFormulary] = useState<formularyType>({
        name: '',
        fiscalIdentification: '',
        phone: '',
        email: '',
        country: {
            name: '',
            code: ''
        },
        city: '',
        rua: '',
        id: numberChoose
    })
    
    const [stateFormListCountry,setStateFormListCountry] = useState<boolean>(false)
    useEffect(()=>{
        (async()=>{
            axios.get('/data/country.json')
            .then((response) => {
                countries.list = response.data
                countries.store = response.data
                setCountries({...countries})                
            }).catch((err) => {
                console.log(err);
            });
        })()
    },[])
    
    const handlerSearchCountry = (text: string) => {
        const filter = countries.store.filter((country: {name:string}) =>
          country.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        );
        setCountries((prevCountries) => ({
          ...prevCountries,
          list: filter
        }));
    };

    const handelChangeInputs = ((event: {target:{id: string,value: string}})=>{
        formulary[event.target.id] = event.target.value
        setFormulary({...formulary})        
    })

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formulary.country.name == '') return toast.info('O campo pais é obligatorio',{position: "top-right"})
        setFormPayment(false)
    };
      
    const handlerChoseCountry = (country: { name: string; code: string }) => {
        formulary.country = country
        setFormulary({...formulary})
        setStateFormListCountry(false)
    };

    return {
        countries,
        handlerSearchCountry,
        stateFormListCountry,
        setStateFormListCountry,
        handlerChoseCountry,
        formulary,
        handelChangeInputs,
        handleSubmitForm,
        FormPayment
    }
})