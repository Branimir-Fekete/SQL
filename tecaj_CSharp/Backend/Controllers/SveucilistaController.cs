using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class SveucilistaController : StudomatController<Sveucilista, SveucilisteDTORead, SveucilisteDTOInsertUpdate>
    {
        public SveucilistaController(StudomatContext context) : base(context)
        {
            DbSet = _context.Sveucilista;
        }


        //private readonly StudomatContext _context;

        //public SveucilistaController(StudomatContext context)
        //{
        //    _context = context;
        //}

        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return new JsonResult(_context.Sveucilista.ToList());
        //}

        //[HttpGet]
        //[Route("{sifra:int}")]
        //public IActionResult GetBySifra(int sifra)
        //{
        //    return new JsonResult(_context.Sveucilista.Find(sifra));
        //}

        //[HttpPost]
        //public IActionResult Post(Sveucilista sveucilista)
        //{
        //    _context.Sveucilista.Add(sveucilista);
        //    _context.SaveChanges();
        //    return new JsonResult(sveucilista);
        //}

        //[HttpPut]
        //[Route("{sifra:int}")]
        //public IActionResult Put(int sifra, Sveucilista sveucilista)
        //{
        //    var sveucilistaIzBaze = _context.Sveucilista.Find(sifra);

        //    sveucilistaIzBaze.Naziv = sveucilista.Naziv;
        //    sveucilistaIzBaze.Adresa = sveucilista.Adresa;

        //    _context.Sveucilista.Update(sveucilistaIzBaze);
        //    _context.SaveChanges();

        //    return new JsonResult(sveucilistaIzBaze);
        //}

        //[HttpDelete]
        //[Route("{sifra:int}")]
        //[Produces("application/json")]
        //public IActionResult Delete(int sifra)
        //{
        //    var sveucilistaIzBaze = _context.Sveucilista.Find(sifra);

        //    _context.Sveucilista.Remove(sveucilistaIzBaze);
        //    _context.SaveChanges();
        //    return new JsonResult(new { poruka = "Obrisano" });
        //}

    }
}
