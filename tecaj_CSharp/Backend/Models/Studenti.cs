using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Studenti : Entitet
    {
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Email { get; set; }
        public int? Jmbag { get; set; }
        [ForeignKey("svuciliste_sifra")]
        public required Sveucilista Sveucilista { get; set; }

    }
}
