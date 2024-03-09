using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class SveucilistaController
    {
        private readonly StudomatContext _context;

        public SveucilistaController(StudomatContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(_context.Sveucilista.ToList());
        }

        [HttpPost]
        public IActionResult Post(Sveucilista sveucilista)
        {
            _context.Sveucilista.Add(sveucilista);
            _context.SaveChanges();
            return new JsonResult(sveucilista);
        }

        [HttpPut]
        [Route("{sveuciliste_id:int}")]
        public IActionResult Put(int sveuciliste_id, Sveucilista sveucilista)
        {
            var sveucilistaIzBaze = _context.Sveucilista.Find(sveuciliste_id);

            sveucilistaIzBaze.Naziv = sveucilista.Naziv;
            sveucilistaIzBaze.Adresa = sveucilista.Adresa;

            _context.Sveucilista.Update(sveucilistaIzBaze);
            _context.SaveChanges();

            return new JsonResult(sveucilistaIzBaze);
        }

        [HttpDelete]
        [Route("{sveuciliste_id:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sveuciliste_id)
        {
            var sveucilistaIzBaze = _context.Sveucilista.Find(sveuciliste_id);

            _context.Sveucilista.Remove(sveucilistaIzBaze);
            _context.SaveChanges();
            return new JsonResult(new { poruka = "Obrisano" });
        }

    }
}
