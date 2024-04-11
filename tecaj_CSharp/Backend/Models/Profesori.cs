using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Profesori : Entitet
    {
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Oib { get; set; }
        [ForeignKey("sveuciliste_sifra")]
        public required Sveucilista Sveucilista { get; set; }


    }
}
