import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import * as C from "./style_f";

const Footer = () => {
    return(
        <C.Footer>
            <p>
                ALN Sistemas
            </p>
            <FontAwesomeIcon icon={faCopyright} />
            <p>
                Todos os direitos reservados
            </p>
        </C.Footer>
    );
};
export default Footer;