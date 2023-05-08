
export function validation(datos) {
    const emailRegex = new RegExp(/^(?=.{1,35}$)\S+@\S+\.\S+$/);
    const passRegexp = new RegExp(/^(?=.*\d).{6,10}$/);
    let errors = {};

    if(!emailRegex.test(datos.email)) errors.email = "Debe ingresar un correo valido";
    if(!datos.password || !passRegexp.test(datos.password)) errors.password = "Debe contener al menos un número y 6-10 caracteres";

    return errors;

}