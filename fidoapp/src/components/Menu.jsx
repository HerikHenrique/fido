import React, {Component} from "react";
import "./Estilo.css";
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';


export class Menu extends Component{

    render(){
        return(
            <section className="containerGrid">
                <nav className="Menu">
                    <ul>
                        {/* <div className="logoFido">

                        </div> */}
 
                        <ol><AccountBalanceWalletTwoToneIcon/>INVESTIR </ol>
                        <ol>EXTRATO</ol>
                        <ol>CONTRATOS</ol>
                        <ol>PERFIL</ol>
                        <ol>AJUDA</ol>
                    </ul>
                </nav>
            </section>
        );
    }
}

