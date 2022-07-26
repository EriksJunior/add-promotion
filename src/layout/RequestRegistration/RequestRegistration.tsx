import React from 'react'

import { Card } from '../../shared/components/Card/Card'
import { Input } from '../../shared/components/Input/Input'
import { Row } from '../../shared/components/Row/Row'
import { SimpleContainer } from '../../shared/components/SimpleContainer/SimpleContainer'
import { ContentLabel } from '../../shared/components/Label/ContentLabel'
import { Button } from '../../shared/components/Button/Button'

import './RequestRegistration.scss'

export const RequestRegistrationLayout: React.FC = () => {
  return (
    <Card className={'w-2/4 h-auto rounded-2xl p-3 generalContainer bg-cyan-900 shadow-md shadow-cyan-500/50'}>
      <Row>
        <ContentLabel textLabel={'Empresa'}>
          <Input className='inputRegistration companyName' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Endereço'}>
          <Input className='inputRegistration address' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Bairro'}>
          <Input className='inputRegistration district' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Nº'}>
          <Input className='inputRegistration number' size={'20%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Cidade'}>
          <Input className='inputRegistration city' size={'40%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Cep'}>
          <Input className='inputRegistration cep' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Telefone'}>
          <Input className='inputRegistration telephone' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'cpfCnpj'}>
          <Input className='inputRegistration cpfCnpj' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Email'}>
          <Input className='inputRegistration email' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Senha'}>
          <Input className='inputRegistration password' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Segredo'} size={'40%'}>
          <Input className='inputRegistration secret' size={'93%'} type='text' />
        </ContentLabel>

        <SimpleContainer className='w-3/5 flex justify-center items-end'>
          <Button className='w-2/4 rounded-lg h-10 font-bold bg-cyan-600 text-white hover:shadow-cyan-500 shadow-md focus:outline-none focus:ring focus:ring-cyan-400' textButton={'Solicitar Cadastro'} />
        </SimpleContainer>
      </Row>
    </Card>
  )
}