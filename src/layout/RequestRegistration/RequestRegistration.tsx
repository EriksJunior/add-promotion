import React from 'react'

import { Card } from '../../shared/components/Card/Card'
import { Input } from '../../shared/components/Input/Input'
import { Row } from '../../shared/components/Row/Row'
import { Column } from '../../shared/components/Col/Col'

import './RequestRegistration.scss'

export const RequestRegistrationLayout: React.FC = () => {
  return (
    <Card className={'w-2/4 h-auto rounded-2xl p-3 generalContainer bg-cyan-600 shadow-lg shadow-cyan-500/50'}>
      <Row>
        <Input className='companyName' placeholder='nomeEmpresa' size={'40%'} type='text' />
        <Input className='address' placeholder='endereço' size={'40%'} type='text' />
        <Input className='district' placeholder='bairro' size={'25%'} type='text' />
        <Input className='number' placeholder='numero' size={'25%'} type='text' />
        <Input className='city' placeholder='cidade' size={'25%'} type='text' />
        <Input className='cep' placeholder='cep' size={'25%'} type='text' />
        <Input className='telephone' placeholder='telefone' size={'25%'} type='text' />

       
        <Input className='cpfCnpj' placeholder='cpfCnpj' size={'25%'} type='text' />
        <Input className='email' placeholder='email' size={'25%'} type='text' />
        <Input className='password' placeholder='senha' size={'25%'} type='text' />
        <Input className='secret' placeholder='secredo' size={'25%'} type='text' />
      </Row>
    </Card>
  )
}