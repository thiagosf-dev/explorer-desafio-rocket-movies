import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "./../../components/Input/index";
import { Avatar, Container, Form } from "./styles";

export function Profile() {
	return (
		<Container>
			<header>
				<Link to={`/`}>
					<FiArrowLeft />
				</Link>
			</header>

			<Form>
				<Avatar>
					<img
						src="https://github.com/thiagosf-dev.png"
						alt="foto so usuário"
					/>

					<label htmlFor={`avatar`}>
						<FiCamera />

						<input id={`avatar`} type={`file`} />
					</label>
				</Avatar>

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
					placeholder={`Informe a sua senha atual...`}
					icon={FiLock}
				/>

				<Input
					type={`password`}
					placeholder={`Informe a sua nova senha...`}
					icon={FiLock}
				/>

				<Button title={`Salvar`} />
			</Form>
		</Container>
	);
}
