import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../constants';
import SveucilisteService from '../../services/SveucilisteService';
import '../../components/buttons/BackButton.css';
import '../../components/buttons/UpdateButton.css';
import HeroText from '../../components/navigation/HeroText';

export default function SveucilistaDodaj() {
  const navigate = useNavigate();

  async function dodaj(sveuciliste) {
    const odgovor = await SveucilisteService.post(sveuciliste);
    if (odgovor.greska) {
      console.log(odgovor.poruka);
      alert('Pogledaj konzolu');
      return;
    }
    navigate(RoutesNames.SVEUCILISTE_PREGLED);
  }

  function obradiSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);

    const sveuciliste = {
      naziv: podaci.get('naziv'),
      adresa: podaci.get('naziv'),
    };

    dodaj(sveuciliste);
  }

  return (
    <Container>
      <HeroText
        beforeText='DODAVANJE SVEUČILIŠTA'
        text='DODAVANJE SVEUČILIŠTA'
      />
      <Form onSubmit={obradiSubmit}>
        <Form.Group controlId='naziv'>
          <Form.Label>Naziv</Form.Label>
          <Form.Control
            type='text'
            name='naziv'
            required
          />
        </Form.Group>

        <Form.Group controlId='trajanje'>
          <Form.Label>Adresa</Form.Label>
          <Form.Control
            type='text'
            name='trajanje'
          />
        </Form.Group>

        <hr />
        <Row>
          <Col>
            <Link
              className='backBtn'
              to={RoutesNames.SVEUCILISTE_PREGLED}
            >
              Odustani
            </Link>
          </Col>
          <Col>
            <button
              type='submit'
              className='addBtn'
            >
              DODAJ
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
