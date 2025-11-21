import "./formulario-de-evento.estilos.css"
import { CampoDeEntrada } from "@/componentes/CampoDeEntrada"
import { CampoDeFormulario } from "@/componentes/CampoDeFormulario"
import { Label } from "@/componentes/Label"
import { TituloFormulario } from "@/componentes/TituloFormulario"
import { Botao } from "@/componentes/Botao"
import { ListaSuspensa } from "@/componentes/ListaSuspensa"

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <ListaSuspensa />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}
