import { Controller, Post, Body } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto'

@Controller('api/v1/jogadores')
export class JogadoresController {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    async criarAtualizarJogador(
        @Body() criarJogadorDto: CriarJogadorDto
    ) {
        const { email } = criarJogadorDto;
        return JSON.stringify(`{
            "email": "${email}"
        }`)
    }

}
