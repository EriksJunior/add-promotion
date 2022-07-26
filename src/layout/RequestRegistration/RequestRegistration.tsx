import React, { useState, useCallback } from "react"

import { Card } from '../../shared/components/Card/Card'
import { Input } from '../../shared/components/Input/Input'
import { Row } from '../../shared/components/Row/Row'
import { SimpleContainer } from '../../shared/components/SimpleContainer/SimpleContainer'
import { ContentLabel } from '../../shared/components/Label/ContentLabel'
import { Button } from '../../shared/components/Button/Button'

import ICompanyRegistration from './interfaces/index'

import './RequestRegistration.scss'

export const RequestRegistrationLayout: React.FC = () => {
  const [company, setCompany] = useState<ICompanyRegistration>({
    id: '',
    companyName: '',
    address: '',
    district: '',
    number: 0,
    city: '',
    cep: '',
    cpfCnpj: '',
    email: '',
    telephone: '',
    password: '',
    secret: '',
  } as ICompanyRegistration)

  const handleCompanyRegistration = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.currentTarget.name]: e.currentTarget.value })
  }, [company])

  const teste = (): any => {
    console.log(company)
  }

  return (
    <Card className={'w-2/4 h-auto rounded-2xl p-3 generalContainer bg-cyan-900 shadow-md shadow-cyan-500/50'}>
      <Row>
        <Input hidden={true}/>

        <ContentLabel textLabel={'Empresa'}>
          <Input className='inputRegistration companyName' name={'companyName'} size={'93%'} type='text' onChange={handleCompanyRegistration}/>
        </ContentLabel>

        <ContentLabel textLabel={'Endereço'}>
          <Input className='inputRegistration address' name={'address'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Bairro'}>
          <Input className='inputRegistration district' name={'district'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Nº'}>
          <Input className='inputRegistration number' name={'number'} size={'20%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Cidade'}>
          <Input className='inputRegistration city' name={'city'} size={'40%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Cep'}>
          <Input className='inputRegistration cep' name={'cep'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Telefone'}>
          <Input className='inputRegistration telephone' name={'telephone'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'cpfCnpj'}>
          <Input className='inputRegistration cpfCnpj' name={'cpfCnpj'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Email'}>
          <Input className='inputRegistration email' name={'email'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Senha'}>
          <Input className='inputRegistration password' name={'password'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <ContentLabel textLabel={'Segredo'} size={'40%'}>
          <Input className='inputRegistration secret' name={'secret'} size={'93%'} type='text' onChange={handleCompanyRegistration} />
        </ContentLabel>

        <SimpleContainer className='w-3/5 flex justify-center items-end'>
          <Button className='w-2/4 rounded-lg h-10 font-bold bg-cyan-600 text-white hover:shadow-cyan-500 shadow-md focus:outline-none focus:ring focus:ring-cyan-400' textButton={'Solicitar Cadastro'} onClick={teste} />
        </SimpleContainer>
      </Row>
    </Card>
  )
}