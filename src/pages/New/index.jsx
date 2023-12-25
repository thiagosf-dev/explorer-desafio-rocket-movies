import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "./../../components/Button/index";
import { Header } from "./../../components/Header/index";
import { Input } from "./../../components/Input/index";
import { NoteItem } from "./../../components/NoteItem/index";
import { Section } from "./../../components/Section/index";
import { Textarea } from "./../../components/Textarea/index";
import { ButtonGroup, Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <Link to={`/`}>
        <FiArrowLeft />
        {`voltar`}
      </Link>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <article>
            <Input placeholder={`Título...`} />
            <Input
              placeholder={`Sua nota (0 a 5)...`}
              type={`number`}
              min={0}
              max={5}
              maxlenght={1}
            />
          </article>

          <Textarea placeholder={`Observações...`} value={``} />

          <Section title={`Marcadores`}>
            <div className="tags">
              <NoteItem value={`Suspense`} />
              <NoteItem placeholder={`Novo marcador...`} isNew />
            </div>
          </Section>

          <ButtonGroup>
            <Button title={`Excluir filme`} />
            <Button title={`Salvar alterações`} />
          </ButtonGroup>
        </Form>
      </main>
    </Container>
  );
}
