import React from 'react'

import { Card } from '../../shared/components/Card/Card'
import { Input } from '../../shared/components/Input/Input'
import { Row } from '../../shared/components/Row/Row'
import { Column } from '../../shared/components/Col/Col'
import { ContentLabel } from '../../shared/components/Label/ContentLabel'

import './RequestRegistration.scss'

export const RequestRegistrationLayout: React.FC = () => {
  return (
    <Card className={'w-2/4 h-auto rounded-2xl p-3 generalContainer bg-cyan-600 shadow-lg shadow-cyan-500/50'}>
      <Row>
        <ContentLabel textLabel={'Empresa'}>
          <Input className='companyName' size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Endereço'}>
          <Input className='address'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Bairro'}>
          <Input className='district'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Nº'}>
          <Input className='number'  size={'20%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Cidade'}>
          <Input className='city' size={'40%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Cep'}>
          <Input className='cep'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Telefone'}>
          <Input className='telephone'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'cpfCnpj'}>
          <Input className='cpfCnpj'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Email'}>
          <Input className='email'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Senha'}>
          <Input className='password'  size={'93%'} type='text' />
        </ContentLabel>

        <ContentLabel textLabel={'Segredo'}>
          <Input className='secret'  size={'93%'} type='text' />
        </ContentLabel>

      </Row>
    </Card>
  )
}