using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Ispiti : Entitet
    {
        public string? Naziv { get; set; }
        public DateTime? Datum { get; set; }
        public int? Ocijena { get; set; }
        public bool? Prolaz { get; set; }
        [ForeignKey("kolegij_sifra")]
        public required Kolegiji Kolegiji { get; set; }

    }
}
