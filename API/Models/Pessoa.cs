using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Pessoa
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(80, ErrorMessage = "O nome não pode ser tão longo!")]
        public string Nome { get; set; }
        [Required]
        [RegularExpression(@"^\d{3}\.\d{3}\.\d{3}-\d{2}$", ErrorMessage ="O CPF precisa estar no fomarto correto!")]
        public string Cpf { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime DataNacimento { get; set; }

    }
}
