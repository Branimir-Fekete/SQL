import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RoutesNames } from '../../constants';
import { useEffect, useState } from 'react';
import SveucilisteService from '../../services/SveucilisteService';
import '../../components/buttons/BackButton.css';
import '../../components/buttons/UpdateButton.css';
import HeroText from '../../components/navigation/HeroText';

export default function SveucilistaPromjena() {
  const navigate = useNavigate();
  const routeParams = useParams();
  const [sveuciliste, setSveuciliste] = useState({});

  async function dohvatiSveuciliste() {
    const o = await SveucilisteService.getBySifra(routeParams.sifra);
    if (o.greska) {
      console.log(o.poruka);
      alert('pogledaj konzolu');
      return;
    }
    setSveuciliste(o.poruka);
  }

  async function promjeni(sveuciliste) {
    const odgovor = await SveucilisteService.put(
      routeParams.sifra,
      sveuciliste
    );
    if (odgovor.greska) {
      console.log(odgovor.poruka);
      alert('Pogledaj konzolu');
      return;
    }
    navigate(RoutesNames.SVEUCILISTE_PREGLED);
  }

  useEffect(() => {
    dohvatiSveuciliste();
  }, []);

  function obradiSubmit(e) {
    e.preventDefault();

    const podaci = new FormData(e.target);

    const sveuciliste = {
      naziv: podaci.get('naziv'),
      adresa: podaci.get('adresa'),
    };

    promjeni(sveuciliste);
  }

  return (
    <Container>
      <HeroText
        beforeText='SVEUČILIŠTE PROMIJENA'
        text='SVEUČILIŠTE PROMIJENA'
      />
      <Form onSubmit={obradiSubmit}>
        <Form.Group controlId='naziv'>
          <Form.Label>Naziv</Form.Label>
          <Form.Control
            type='text'
            name='naziv'
            defaultValue={sveuciliste.naziv}
            required
          />
        </Form.Group>

        <Form.Group controlId='adresa'>
          <Form.Label>Adresa</Form.Label>
          <Form.Control
            type='text'
            name='adresa'
            defaultValue={sveuciliste.adresa}
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
            <Button
              className='updateBtn'
              type='submit'
            >
              Promjeni
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
