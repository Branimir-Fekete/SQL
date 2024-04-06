import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesNames } from '../../constants';
import SveucilisteService from '../../services/SveucilisteService';
import HeroText from '../../components/navigation/HeroText';
import AddButton from '../../components/buttons/AddButton';
import DeleteButton from '../../components/buttons/DeleteButton';
import UpdateButton from '../../components/buttons/UpdateButton';

export default function Sveucilista() {
  const [sveucilista, setSveucilista] = useState();
  const navigate = useNavigate();

  async function dohvatiSveucilista() {
    await SveucilisteService.get()
      .then((odg) => {
        setSveucilista(odg);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    dohvatiSveucilista();
  }, []);

  async function obrisiAsync(sifra) {
    const odgovor = await SveucilisteService._delete(sifra);
    if (odgovor.greska) {
      console.log(odgovor.poruka);
      alert('Pogledaj konzolu');
      return;
    }
    dohvatiSveucilista();
  }

  function obrisi(sifra) {
    obrisiAsync(sifra);
  }

  return (
    <>
      <HeroText
        beforeText='Sveučilišta'
        text='Sveučilišta'
      />
      <Container>
        <AddButton>
          <Link to={RoutesNames.SVEUCILISTE_NOVI}> Dodaj </Link>
        </AddButton>
        <Table
          striped
          bordered
          hover
          responsive
        >
          <thead>
            <tr>
              <th>Naziv</th>
              <th>Adresa</th>
              <th>Akcija</th>
            </tr>
          </thead>
          <tbody>
            {sveucilista &&
              sveucilista.map((sveuciliste, index) => (
                <tr key={index}>
                  <td>{sveuciliste.naziv}</td>
                  <td>{sveuciliste.adresa}</td>

                  <td>
                    <DeleteButton onClick={() => obrisi(sveuciliste.sifra)}>
                      Obriši
                    </DeleteButton>
                    <UpdateButton
                      onClick={() => {
                        navigate(`/sveucilista/${sveuciliste.sifra}`);
                      }}
                    >
                      Promijeni
                    </UpdateButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
