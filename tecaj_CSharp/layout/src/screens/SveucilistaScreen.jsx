import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Table } from 'react-bootstrap';
import SveucilisteService from '../services/SveucilisteService';
import styled from 'styled-components';
import HeroText from '../components/navigation/HeroText';
import DeleteButton from '../components/buttons/DeleteButton';
import { Link } from 'react-router-dom';
import { RoutesNames } from '../constants';
import AddButton from '../components/buttons/AddButton';

const StyledTable = styled(Table)`
  margin-top: 20px;
  th {
    background-color: #89CFF0;
    border-radius: 15px;
  }
  td,
  th {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #89CFF0;
  }
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export default function SveucilistaScreen() {
  const [sveucilista, setSveucilista] = useState([]);

  async function dohvatiSveucilista() {
    try {
      const response = await SveucilisteService.get();
      setSveucilista(response);
    } catch (error) {
      console.log(error);
    }
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
        beforeText='Svučilišta'
        text='Svučilišta'
      />
      <CenteredContainer>
        <Link to={RoutesNames.SVEUCILISTE_NOVI}>
          <AddButton>Dodaj svučilište</AddButton>
        </Link>
        <StyledTable
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
                  </td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      </CenteredContainer>
    </>
  );
}
