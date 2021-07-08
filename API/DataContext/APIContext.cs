using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DataContext
{
    public class APIContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Permissao> Permissoes { get; set; }
        public DbSet<Medicamento> Medicamentos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        public APIContext(DbContextOptions options) : base(options)
        {
        }
        
    }
    
}
