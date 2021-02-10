/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const state = {
  especialidades: [
    {
      id: 1,
      nombre: "Especialidad en fiscalización de impuestos en México",
      descripcion: "El programa surge con el objetivo de promover la profesionalización de los funcionarios públicos en los diferentes ámbitos de gobierno en México y en los demás países de Latinoamérica. Como consecuencia de los procesos de transformación política que tienen lugar en México y diversos países, se requiere de funcionarios públicos altamente capacitados y con un profundo sentido ético para realizar una gestión pública eficaz.",
      fecha: "11 de enero de 2020",
      division: 1,
    },
  ],
  cursos: [
    {
      id: 1,
      name: "Vue.js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Daniel Cristhian Vázquez Hernández",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20IMP%20Remoto.png"
    },
    {
      id: 2,
      name: "Angular",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg"
    },
    {
      id: 3,
      name: "NodeJS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/Bienes%20OL%20sinAsesor.jpg"
    },
    {
      id: 4,
      name: "CSS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png"
    },
    {
      id: 5,
      name: "PHP",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png"
    },
    {
      id: 6,
      name: "Curso Completo Power BI Desktop - Última versión de Power BI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg"
    },
    {
      id: 7,
      name: "SQL - MySQL for Data Analytics and Business Intelligence",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/Imp_02_19.jpg"
    },
    {
      id: 8,
      name: "SCRUM Práctico en Proyectos de Software",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png"
    },
    {
      id: 9,
      name: "Premiere Pro CC for Beginners: Video Editing in Premiere",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg"
    },
    {
      id: 10,
      name: "Adobe Lightroom CC Photo Editing: Your Lightroom Masterclass",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
      by: "Someone",
      price: 1500,
      date: "30 de marzo de 2020",
      image:
        "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg"
    }
  ],
  mis_cursos: [
    {
      id: 1,
      nombre: "Maestría en Gestión Pública",
      avance: 67,
      descripcion: "El programa surge con el objetivo de promover la profesionalización de los funcionarios públicos en los diferentes ámbitos de gobierno en México y en los demás países de Latinoamérica. Como consecuencia de los procesos de transformación política que tienen lugar en México y diversos países, se requiere de funcionarios públicos altamente capacitados y con un profundo sentido ético para realizar una gestión pública eficaz.",
      fecha: "24 de junio de 2020"
    },
    {
      id: 2,
      nombre: "Administración integral de Riesgos de la Hacienda Municipal en tiempos de COVID19",
      avance: 100,
      descripcion: "Introducción a la Administración (Gestión) Integral de Riesgos en el Sector Público.",
      fecha: "4 de agosto de 2019"
    }
  ]

}

export default state
