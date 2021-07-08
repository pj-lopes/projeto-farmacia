
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Usuario : Pessoa
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [MinLength(5, ErrorMessage ="Sua senha deve ter no mínimo 5 caracteres")]
        [MaxLength(16, ErrorMessage = "Sua senha deve ter no máximo 16 caracteres")]
        public string Senha { get; set; }
        public string Permissao { get; set; }
        
    }
}
