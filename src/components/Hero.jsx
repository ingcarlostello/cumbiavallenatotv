import React from 'react';
import image from '../images/imgCaja1.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const Hero = () => {

    const classes = useStyles();

    let anoActual = new Date();
    let fecha = anoActual.getFullYear()

    return (
        <section id='hero'>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-2 bg-yellow-300">
                <div className="flex justify-end">
                    <div className="h-3/5">
                        <img src={image} alt="Curso Timbal"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <div>
                            <h1 className="xs:text-4xl text-center md:text-6xl font-sans font-bold text-white">Curso Timbal Básico {fecha}</h1>
                        </div>
                        <div className="flex justify-center m-5 ">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                startIcon={ <CloudDownloadIcon />}
                                href="https://www.google.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Comprar Curso
                            </Button>
                        </div>                        
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Hero;