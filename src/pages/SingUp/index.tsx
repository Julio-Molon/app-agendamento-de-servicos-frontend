import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, BackGround } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => (
  <Container>
    <BackGround />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>
        <Input name="Nome" icon={FiUser} placeholder="Nome" />
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
