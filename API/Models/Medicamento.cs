using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Medicamento
    {
        public int Id { get; set; }

        [Required]
        [MinLength(5, ErrorMessage ="O nome não pode ter menos que 5 letras")]
        [MaxLength(30, ErrorMessage = "O nome não pode ser muito longo")]
        public string Nome { get; set; }

        [Required]
        public int Qtd { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Preco { get; set; }

        [Required]
        public string Categoria { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Total { get; set; }
    }
}
