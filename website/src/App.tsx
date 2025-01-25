import React from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ControllerIcon from '@mui/icons-material/SportsEsports';

import darkSolarImage from './assets/darkSolar.png';
import critterImage from './assets/critter.png';
import shaaftImage from './assets/shaaft.png';
import cherryImage from './assets/cherry.png';
import darkSolarSnap from './assets/darkSolarSnap.png';
import critterSnap from './assets/critterSnap.jpg';
import shaaftSnap from './assets/shaaftSnap.png';
import cherrySnap from './assets/cherrySnap.png';

const PREFIX = 'MyApp';
const classes = {
    title: `${PREFIX}-title`,
    description: `${PREFIX}-description`,
    gameIcon: `${PREFIX}-gameIcon`,
    screenshot: `${PREFIX}-screenshot`,
    gameCard: `${PREFIX}-gameCard`,
    footer: `${PREFIX}-footer`,
};

const GridRoot = styled(Grid)(() => ({
    [`& .${classes.title}`]: {
        fontSize: '3rem',
    },
    [`& .${classes.description}`]: {
        padding: '0.7rem',
    },
    [`& .${classes.gameIcon}`]: {
        float: 'left',
        height: '4rem',
        padding: '1rem',
    },
    [`& .${classes.screenshot}`]: {
        height: '10rem',
    },
}));


const DarkSolar: React.FC = () => {
    const darkSolarMsg1 = 'Dark Solar is a "swarmy" galactic conquest type of game.';
    const darkSolarMsg2 = 'Send your army of ships out to conquer. Select strategic assets via mouse. The last selected object is the destination.';
    const darkSolarMsg3 = 'You are blue.';

    return (
        <GridRoot container spacing={3}>
            <Grid item xs={12} sm={9}>
                <div className={classes.title}>Dark Solar</div>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.description}>
                    <img
                        className={classes.gameIcon}
                        src={darkSolarImage}
                        alt=""
                    />
                    <div>{darkSolarMsg1}</div>
                    <br />
                    <div>{darkSolarMsg2}</div>
                    <br />
                    <div>{darkSolarMsg3}</div>
                    <br />
                    <div>
                        <img
                            className={classes.screenshot}
                            src={darkSolarSnap}
                            alt=""
                        />
                    </div>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PlayCircleIcon />}
                        target="_blank"
                        href="https://mooflu.itch.io/darksolar"
                    >
                        Play in your browser (Itch.io)
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<ControllerIcon />}
                        target="_blank"
                        href="https://mooflu.itch.io/"
                        sx={{ ml: 1 }}
                    >
                        Itch.io
                    </Button>
                </Paper>
            </Grid>
        </GridRoot>
    );
};

const critterMsg1 = 'Critical Mass (aka Critter) is a vertical arcade shooter. Save the world while you fly through some beautiful space scenery filled with stars and nebulas.';
const critterMsg2 = 'Your world has been infested by an aggressive army of space critters. Overrun and unprepared, your government was unable to defend its precious resources. As a last effort to recapture some of the “goodies”, you have been placed into a tiny spacecraft and sent after them.';
const critterMsg3 = 'You control your spacecraft at the bottom of the screen, moving left and right in order to avoid incoming bombs and kamikaze attacks from the alien space critters while at the same time firing your own missiles. Collect the goodie containers dropped by defeated critters.';

const Critter: React.FC = () => {
    return (
        <GridRoot container spacing={3}>
            <Grid item xs={12} sm={9}>
                <div className={classes.title}>Critical Mass</div>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.description}>
                    <img
                        className={classes.gameIcon}
                        src={critterImage}
                        alt=""
                    />
                    <div>{critterMsg1}</div>
                    <br />
                    <div>{critterMsg2}</div>
                    <br />
                    <div>{critterMsg3}</div>
                    <br />
                    <div>
                        <img
                            className={classes.screenshot}
                            src={critterSnap}
                            alt=""
                        />
                    </div>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PlayCircleIcon />}
                        target="_blank"
                        href="https://mooflu.github.io/critter/critter.html"
                    >
                        Play in your browser
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        target="_blank"
                        href="https://github.com/mooflu/critter"
                        sx={{ ml: 1 }}
                    >
                        Github
                    </Button>
                </Paper>
            </Grid>
        </GridRoot>
    );
};

const Shaaft: React.FC = () => {
    const shaaftMsg1 = 'Shaaft is a three-dimensional block stacking game. The blocks fall into a shaft (also known as the pit). The aim of the game is to complete layers (instead of rows). Incomplete layers cause the blocks to build up and reduce the available space. The game ends when some blocks no longer fit into the shaft.';
    const shaaftMsg2 = 'Practice your box stacking skills. The next time you help a friend move, you will be able to show just how many boxes you really can stuff into a moving van. Just be aware of your new found powers so the poor moving van doesn\'t break an axle...';
    const shaaftMsg3 = 'No moving vans were harmed during the production of this game. Some moo-juice was consumed.';

    return (
        <GridRoot container spacing={3}>
            <Grid item xs={12} sm={9}>
                <div className={classes.title}>Shaaft</div>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.description}>
                    <img
                        className={classes.gameIcon}
                        src={shaaftImage}
                        alt=""
                    />
                    <div>{shaaftMsg1}</div>
                    <br />
                    <div>{shaaftMsg2}</div>
                    <br />
                    <div>{shaaftMsg3}</div>
                    <br />
                    <div>
                        <img
                            className={classes.screenshot}
                            src={shaaftSnap}
                            alt=""
                        />
                    </div>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PlayCircleIcon />}
                        target="_blank"
                        href="https://mooflu.github.io/shaaft/shaaft.html"
                    >
                        Play in your browser
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        target="_blank"
                        href="https://github.com/mooflu/shaaft"
                        sx={{ ml: 1 }}
                    >
                        Github
                    </Button>
                </Paper>
            </Grid>
        </GridRoot>
    );
};

const Cherries: React.FC = () => {
    const omgMsg1 = 'OMG Cherries is a maze game.';
    const omgMsg2 = 'Help Larry collect all cherries and avoid Willy the worm. Willy is really grouchy and wants all the cherries for himself. Him and his friends will chase you but they are not too clever. When you eat a magic banana you will make the worms run away for a while.';

    return (
        <GridRoot container spacing={3}>
            <Grid item xs={12} sm={9}>
                <div className={classes.title}>OMG Cherries!</div>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper className={classes.description}>
                    <img
                        className={classes.gameIcon}
                        src={cherryImage}
                        alt=""
                    />
                    <div>{omgMsg1}</div>
                    <br />
                    <div>{omgMsg2}</div>
                    <br />
                    <div>
                        <img
                            className={classes.screenshot}
                            src={cherrySnap}
                            alt=""
                        />
                    </div>
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PlayCircleIcon />}
                        target="_blank"
                        href="https://mooflu.github.io/omgcherries/omgcherries.html"
                    >
                        Play in your browser
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        target="_blank"
                        href="https://github.com/mooflu/omgcherries"
                        sx={{ ml: 1 }}
                    >
                        Github
                    </Button>
                </Paper>
            </Grid>
        </GridRoot>
    );
};

const AppRoot = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    [`& .${classes.gameCard}`]: {
        maxWidth: '60rem',
        padding: '1rem',
        margin: '1rem',
        boxSizing: 'border-box',
        backgroundColor: '#dddddd52',
    },
    [`& .${classes.footer}`]: {
        fontSize: '0.7rem',
    },
}));

const App: React.FC = () => {
    return (
        <AppRoot>
            <Paper className={classes.gameCard} elevation={3}>
                <DarkSolar />
            </Paper>
            <Paper className={classes.gameCard} elevation={3}>
                <Shaaft />
            </Paper>
            <Paper className={classes.gameCard} elevation={3}>
                <Critter />
            </Paper>
            <Paper className={classes.gameCard} elevation={3}>
                <Cherries />
            </Paper>
            <div className={classes.footer}>
                Copyright (C) 2023 Frank Becker
            </div>
        </AppRoot>
    );
};

export default App;
