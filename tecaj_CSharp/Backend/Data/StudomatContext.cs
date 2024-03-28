using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class StudomatContext : DbContext
    {
        public StudomatContext(DbContextOptions<StudomatContext> options) : base(options) { }

        public DbSet<Sveucilista> Sveucilista { get; set; }

    }
}
