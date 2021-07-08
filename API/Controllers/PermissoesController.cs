using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.DataContext;
using API.Models;

namespace API.Controllers
{
    [Route("/Permissoes")]
    [ApiController]
    public class PermissoesController : ControllerBase
    {
        private readonly APIContext _context;

        public PermissoesController(APIContext context)
        {
            _context = context;
        }

        // GET: api/Permissoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Permissao>>> GetPermissoes()
        {
            return await _context.Permissoes.ToListAsync();
        }

        // GET: api/Permissoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Permissao>> GetPermissao(int id)
        {
            var permissao = await _context.Permissoes.FindAsync(id);

            if (permissao == null)
            {
                return NotFound();
            }

            return permissao;
        }

        // PUT: api/Permissoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPermissao(int id, Permissao permissao)
        {
            if (id != permissao.Id)
            {
                return BadRequest();
            }

            _context.Entry(permissao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PermissaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Permissoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Permissao>> PostPermissao(Permissao permissao)
        {
            _context.Permissoes.Add(permissao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPermissao", new { id = permissao.Id }, permissao);
        }

        // DELETE: api/Permissoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePermissao(int id)
        {
            var permissao = await _context.Permissoes.FindAsync(id);
            if (permissao == null)
            {
                return NotFound();
            }

            _context.Permissoes.Remove(permissao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PermissaoExists(int id)
        {
            return _context.Permissoes.Any(e => e.Id == id);
        }
    }
}
