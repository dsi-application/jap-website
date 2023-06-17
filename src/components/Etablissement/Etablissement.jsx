import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { Icon, InlineIcon } from '@iconify/react';

import './etablissement.css'

const Etablissement = () => {

    const reactPlayerRef = useRef();

    return (
      <Container className="main"  fluid>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                  <MDBRow className="mt-2">
                    
                      
                      <MDBCol md="12" lg="12" xl="12" className="mb-1 dark-grey-text">
                      
                      
                          <h6  style={{ color: '#78c2ad'}} className="font-weight-bold">
                          <InlineIcon icon="mdi:pillar"  width="30" height="30" inline={false} /> Historique
                          <br/> <br/>
                          Les Jeux africains de Plage (JAP) sont un événement multi-sports regroupant des disciplines qui se déroulent sur la plage.
                          <br/> <br/>
                          Ils sont organisés par l'Association des Comités Nationaux Olympiques d'Afrique (ACNOA).
                          
                          </h6>

                        <br/> <br/>

                        <h6  style={{ color: '#78b2c2 '}} className="font-weight-bold">
                          <InlineIcon icon="mdi:calendar-star"  width="30" height="30" inline={false} /> Présentation de l’événement
                          <br/> <br/>
                          La 2ème édition des Jeux Africains de Plage aura lieu du 23 au 30 Juin 2023 dans la ville de Hammamet en Tunisie. La précédente édition à Sal (Cap Vert) a regroupé 42 nations africaines. 
                          <br/> <br/>
                          L’édition 2023 est ouverte aux 54 CNOs membres de l’Association des Comités Nationaux Olympiques d’Afrique (ACNOA). Plus de 800 athlètes (environ 1400 accrédités) sont attendus. 

                        <br/> <br/>
                        Les Jeux Africains de Plage seront précédés par l’Assemblée Générale de l’ACNOA programmée au 22 juin en présence de l’ensemble des présidents et secrétaires généraux des 54 Comités Nationaux Olympiques Africains. 
                        <br/> <br/>
                        La cérémonie d’ouverture aura lieu le 23 juin et sera précédée par la célébration de la Journée Olympique par l’ensemble des délégations présentes sous le signe de : « l’Afrique Solidaire, au rendez-vous de Paris 2024 ! ».
                        <br/> <br/>
                        Dix jours durant, Hammamet sera l’épicentre du continent africain et tous les regards se porteront sur la 2ème édition des Jeux Africains de Plage qui constituera le plus grand rassemblement africain de l’année.  
                        <br/> <br/>
                        Un vrai challenge pour lequel toute la Tunisie s’est mobilisée, à travers les institutions de l’Etat, le comité d’organisation, la famille sportive et olympique, la Société Civile et toute la population, appuyées par l’ ACNOA et  différents partenaires internationaux et nationaux, pour conférer à cet méga évènement fondamentalement sportif, la dimension d’un festival sportif, artistique, culturel et écologique digne de l’ Afrique, de ses grands champions, de son patrimoine et de son  potentiel de développement.

                           </h6>

                

                      </MDBCol>
                      <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      
                      


                    

  
                      </MDBCol>
                      <iframe maxWidth="100%" width="100%"  height="500"   position= "relative"  
                       src="./presentation.mp4" title="conference" frameborder="0" 
                         allow="autoplay; encrypted-media " 
                     allowfullscreen>
                     </iframe>
                  </MDBRow>
              </MDBContainer>

        
      </Container>
    )
}

export default Etablissement
