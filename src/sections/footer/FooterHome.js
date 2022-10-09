import React from "react"
import estilo from '../../css/footer.module.css'

export default function FooterHome() {
  return (
    <footer>
      <div class={`${estilo.fimFooterAdmin} p-2`}>
        <span>@Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
