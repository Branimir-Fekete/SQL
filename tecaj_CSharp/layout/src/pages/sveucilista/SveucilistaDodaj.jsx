import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../constants';
import SveucilisteService from '../../services/SveucilisteService';
import AddButton from '../../components/buttons/AddButton';
import UpdateButton from '../../components/buttons/UpdateButton';
import '../../components/buttons/BackButton.css';

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

    //console.log(smjer);
    dodaj(sveuciliste);
  }

  return (
    <Container>
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
              className='BackButton'
              to={RoutesNames.SVEUCILISTE_PREGLED}
            >
              Odustani
            </Link>
          </Col>
          <Col>
            <UpdateButton type='submit'>DODAJ</UpdateButton>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
