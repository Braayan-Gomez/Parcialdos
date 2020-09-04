const {
    firebase
} = require('../configFirebase');

const controlador = {};
const db = firebase.firestore();

controlador.inicio = (req, res) => {
    res.render('index');
}

controlador.admin = (req, res) => {
    res.render('./admin')
}

controlador.admin = (req, res) => {
    res.render('./admin', {
        modulo: 'Modulo Administrador'
    })
}

controlador.agregar = (req, res) => {
    console.log(req.body);

    db.collection("usuario").add({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            sexo: req.body.sexo,
            profesion: req.body.profesion,
            telefono: req.body.telefono,
            correoelectronico: req.body.correoelectronico,
            perfil: req.body.perfil,

        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Reserva realizada', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    res.render('./admin', {
        modulo: 'Modulo Administrador'
    });
}



controlador.leerDatos = (req, res) => {
    console.log(req.body);

    listaUsuario.innerHTML = "";
    db.collection("usuario").get()

        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaUsuario.innerHTML += `
                   <tr>
                       <td>${doc.data().nombre}</td>
                       <td>${doc.data().apellido}</td>
                       <td>${doc.data().edad}</td>
                       <td>${doc.data().sexo}</td>
                       <td>${doc.data().profesion}</td>
                       <td>${doc.data().telefono}</td>
                       <td>${doc.data(). correoelectronico}</td>
                       <td>${doc.data().perfil}</td>
                       <td>
                            <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                            <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                        </td>                  
                   </tr>           
               `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });

    res.render('./admin');
}

module.exports = controlador;