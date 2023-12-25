import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button/index";
import { Input } from "../../components/Input/index";
import { BackgroundImg, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>

        <p>Aplicação para acompanhar tudo que assistir..</p>

        <h2>Crie sua conta!</h2>

        <Input
          type={`text`}
          placeholder={`Informe o seu nome...`}
          icon={FiUser}
        />

        <Input
          type={`text`}
          placeholder={`Informe o seu e-mail...`}
          icon={FiMail}
        />

        <Input
          type={`password`}
          placeholder={`Informe a sua senha...`}
          icon={FiLock}
        />

        <Button title={`Cadastrar`} />

        <Link to={`/`}>
          <FiArrowLeft />
          {`Voltar para o login`}
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  );
}
