import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "./../../components/Button/index";
import { Input } from "./../../components/Input/index";
import { BackgroundImg, Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>

				<p>Aplicação para acompanhar tudo que assistir.</p>

				<h2>Faça seu login!</h2>

				<Input
					type={`text`}
					placeholder={`Informe o seu e-mail...`}
					icon={FiMail}
				/>

				<Input
					type={`password`}
					placeholder={`Informe o sua senha...`}
					icon={FiLock}
				/>

				<Button title={`Entrar`} />

				<Link to={`/register`}>{`Criar conta`}</Link>
			</Form>

			<BackgroundImg />
		</Container>
	);
}
