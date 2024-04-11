using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public record SveucilisteDTORead(string Naziv, string Adresa);

    public record SveucilisteDTOInsertUpdate(
        [Required(ErrorMessage = "Naziv je obavezan")]
        string Naziv,

        [Required(ErrorMessage = "Adresa je obavezna")]
        string Adresa);


}
