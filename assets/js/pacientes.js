// Inicio Lista de Pacientes JS

let listadoPacientes = [
    { RUTPaciente: '12.345.678-9', nombrePaciente: 'Juan Pérez', edadPaciente: '45 años', motivoConsulta: 'Dolor de cabeza', RUTMedico: '22.334.556-7', medicoTratante: 'Dr. Ricardo Soto', Especialidad: 'Neurología' },
    { RUTPaciente: '23.456.789-0', nombrePaciente: 'María González', edadPaciente: '32 años', motivoConsulta:  'Dolor abdominal', RUTMedico: '33.445.667-8', medicoTratante: 'Dra. Laura Morales', Especialidad: 'Gastroenterología' },
    { RUTPaciente: '34.567.890-1', nombrePaciente: 'Carlos Díaz', edadPaciente: '28 años', motivoConsulta:  'Fatiga', RUTMedico: '44.556.778-9', medicoTratante: 'Dr. Andrés Muñoz¡, Especialidad: Medicina General' },
    { RUTPaciente: '45.678.901-2', nombrePaciente: 'Ana López', edadPaciente: '50 años', motivoConsulta:  'Dolor en el pecho', RUTMedico: '55.667.889-0', medicoTratante: 'Dr. Sebastián Rojas', Especialidad: 'Cardiología' },
    { RUTPaciente: '56.789.012-3', nombrePaciente: 'Luis Morales', edadPaciente: '60 años', motivoConsulta:  'Problemas respiratorios', RUTMedico: '66.778.990-1', medicoTratante: 'Dra. Claudia Fuentes', Especialidad: 'Broncopulmonar' },
];

// Función para agregar los pacientes a la tabla
function agregarPacientesATabla() {
    const tablaPacientes = document.getElementById('tabla-pacientes');

    listadoPacientes.forEach(paciente => {
        // Crear una nueva fila
        const fila = document.createElement('tr');

        // Crear las celdas y agregar los datos
        const celdaRut = document.createElement('td');
        celdaRut.textContent = paciente.RUTPaciente;
        fila.appendChild(celdaRut);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = paciente.nombrePaciente;
        fila.appendChild(celdaNombre);

        const celdaMotivo = document.createElement('td');
        celdaMotivo.textContent = paciente.motivoConsulta;
        fila.appendChild(celdaMotivo);

        // Agregar la fila a la tabla
        tablaPacientes.appendChild(fila);
    });
}

// Llamar a la función para agregar los pacientes a la tabla
agregarPacientesATabla();
