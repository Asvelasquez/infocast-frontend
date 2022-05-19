import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import Swal from 'sweetalert2';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                INFOCAST
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

    const[nombre, setNombre] = useState('');
    const[username, setUsername] = useState('');
    const[apellidos, setApellido] = useState('');
    const[correo, setCorreo] = useState('');
    const[contrasena, setContrasena] = useState('');
    const[documento, setDocumento] = useState('');
    const[telefono, setTelefono] = useState('');
    const[direccion, setDireccion] = useState('');
    const[ciudad, setCiudad] = useState('');
    const[barrio, setBarrio] = useState('');

    const registrarUsuario = async (e) => {
        e.preventDefault();
        const regitrarUsuario = {nombre, username, apellidos, correo, contrasena, documento, telefono, direccion, ciudad, barrio};
        const respuesta = await Axios.post('/user/crear', regitrarUsuario);
        console.log(respuesta);
        const mensaje = respuesta.data.mensaje;

        if(nombre === '' || username === '' || apellidos === '' || correo === '' || contrasena === '' || documento === '' || telefono === '' || direccion === '' || ciudad === '' || barrio === ''){
            Swal.fire({
                icon:'error',
                title:'alguno de los campos esta vacio',
                showConfirmButton:false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButton:false,
                timer: 1500
            })
            e.target.reset();
            setNombre("");
            setUsername("");
            setApellido("");
            setCorreo("");
            setContrasena("");
            setDocumento("");
            setTelefono("");
            setDireccion("");
            setCiudad("");
            setBarrio("");
            window.location.href='/Login'
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrar
                    </Typography>
                    <Box component="form" noValidate onSubmit={registrarUsuario} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellidos"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="username"
                                    autoFocus
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="telefono"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => setContrasena(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Documento"
                                    type="number"
                                    id="password"
                                    autoComplete="number"
                                    onChange={(e) => setDocumento(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Direccion"
                                    type="text"
                                    id="password"
                                    autoComplete="text"
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Barrio"
                                    type="text"
                                    id="password"
                                    autoComplete="text"
                                    onChange={(e) => setBarrio(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Ciudad"
                                    type="text"
                                    id="password"
                                    autoComplete="text"
                                    onChange={(e) => setCiudad(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Acepto los términos y condiciones"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Registrar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    ¿Ya tienes una cuenta? Inicia sesión
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
