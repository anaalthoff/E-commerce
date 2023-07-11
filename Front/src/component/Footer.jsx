import React from 'react';
import '../style/footer.css';

function FooterApp() {
    return (
        <div className="footer">
            <div className="footer-text">
                <p>O app Fitness no iPad requer iPadOS 14.3 ou posterior.</p>
                <p>Para ter acesso aos recursos mais novos, seus aparelhos precisam ter a versão mais recente do software.</p>
                <p>Os treinos e as meditações do Apple Fitness+ serão em inglês com opção de legendas em português do Brasil, francês, espanhol, alemão, italiano e russo.</p>

                <p>Somos uma das revendedoras Apple na sua região.</p>

                <p>Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.</p>

                <p>Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.</p>
                <hr />

                <p className="copyright">Copyright © 2023 Malum Inc.</p></div>
        </div>
    );
}
export default FooterApp;