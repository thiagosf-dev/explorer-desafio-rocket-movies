import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies 🎬</h1>

      <Search>
        <Input placeholder={`Pesquisar pelo título...`} />
      </Search>

      <Profile to={`/profile`}>
        <div>
          <Link to={`/profile`}>Thiago Figueiredo</Link>
          <Link to={`/`}>Sair</Link>
        </div>

        <img src="https://github.com/thiagosf-dev.png" alt="minha foto" />
      </Profile>
    </Container>
  );
}
