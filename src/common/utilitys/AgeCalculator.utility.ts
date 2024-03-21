export function AgeCalculator(fechaNacimientoStr: string): number  {
    const fechaNacimiento: Date = new Date(fechaNacimientoStr);
    const hoy: Date = new Date();
    let edad: number = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual: number = hoy.getMonth() + 1;
    const mesNacimiento: number = fechaNacimiento.getMonth() + 1;

    // Si el mes actual es anterior al mes de nacimiento, aún no ha cumplido años este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}

