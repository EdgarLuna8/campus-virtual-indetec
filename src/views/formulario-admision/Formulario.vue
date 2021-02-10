<template>
  <div class="vx-row container">
    <!-- MULTIPLE COLUMNS-->
    <div class="vx-col w-full mb-base">
      <vx-card
        v-if="!error_page"
        :title="
          formulario.preregistro
            ? 'Solicitud No. ' + formulario.preregistro
            : '---'
        "
      >
        <form-wizard
          shape="tab"
          color="rgba(var(--vs-primary), 1)"
          title="Formulario de admisión"
          :subtitle="null"
          @on-complete="openConfirmFunction"
          nextButtonText="Siguiente"
          backButtonText="Anterior"
          finishButtonText="Terminar"
          stepSize="sm"
        >
          <!-- HISTORIAL CON INDETEC -->
          <tab-content
            title="Historial con INDETEC"
            class="mb-5"
            icon="feather icon-database"
            :before-change="validateStep1"
          >
            <div class="vx-row">
              <div class="vx-col w-full mt-5 text-center">
                <label>¿Has sido parte de la comunidad <b>INDETEC</b>?</label>
              </div>
            </div>

            <!-- RADIO BUTTON [ SÍ | NO ] -->
            <div class="vx-row">
              <div class="vx-col w-full mt-5 text-center">
                <vs-radio v-model="soy_comunidad" vs-value="true" class="mr-5"
                  >Sí</vs-radio
                >
                <vs-radio v-model="soy_comunidad" vs-value="false" class="ml-5"
                  >No</vs-radio
                >
              </div>
            </div>

            <!-- INPUT DE FOLIO - SI RADIO BUTTON = TRUE -->
            <form data-vv-scope="step-1">
              <div v-if="soy_comunidad == 'true'" class="vx-row">
                <div class="vx-col sm:w-1/4 w-full mb-2"></div>
                <div class="vx-col sm:w-1/2 w-full mt-5">
                  <vs-input
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-database"
                    label-placeholder="La carga de datos la puedes realizar por tu Número de Folio."
                    v-model="formulario.folio"
                    name="folio"
                    v-validate="'required|alpha_num'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('folio')
                        ? getError_message('folio').msg
                        : ''
                    "
                  ></span>

                  <vs-alert class="mt-3 text-center">
                    Una ves ingresado su folio, presione <b>ENTER</b> para
                    cargar sus datos
                  </vs-alert>
                </div>
                <div class="vx-col sm:w-1/4 w-full mb-2"></div>
              </div>
            </form>
          </tab-content>

          <!-- DATOS PERSONALES -->
          <tab-content
            title="Datos Personales"
            class="mb-5"
            icon="feather icon-user"
            :before-change="validateStep2"
          >
            <form data-vv-scope="step-2">
              <!-- NOMBRE Y SEGUNDO NOMBRE -->
              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-user"
                    label-placeholder="Primer nombre"
                    v-model="formulario.persona.nombre"
                    v-validate="'required|alpha_spaces|min:3'"
                    name="nombre"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('nombre')
                        ? getError_message('nombre').msg
                        : ''
                    "
                  ></span>
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="Segundo nombre"
                    v-model="formulario.persona.segundoNombre"
                  />
                </div>
              </div>
              <!-- APELLIDOS -->
              <div class="vx-row">
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="Apellido paterno"
                    v-model="formulario.persona.apellidoPaterno"
                    name="apellido_p"
                    v-validate="'required|alpha_spaces'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('apellido_p')
                        ? getError_message('apellido_p').msg
                        : ''
                    "
                  ></span>
                </div>
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="Apellido materno"
                    v-model="formulario.persona.apellidoMaterno"
                  />
                </div>
              </div>
              <!-- TELÉFONO Y CORREO -->
              <div class="vx-row">
                <!-- TELÉFONO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    icon-pack="feather"
                    icon="icon-phone"
                    class="w-full"
                    label-placeholder="Teléfono"
                    v-model="formulario.persona.telefono"
                    name="telefono"
                    v-validate="'required|numeric|min:10'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('telefono')
                        ? getError_message('telefono').msg
                        : ''
                    "
                  ></span>
                </div>
                <!-- CORREO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    icon-pack="feather"
                    icon="icon-mail"
                    class="w-full"
                    label-placeholder="Correo electrónico"
                    v-model="formulario.persona.email"
                    name="email"
                    v-validate="'required|email'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('email')
                        ? getError_message('email').msg
                        : ''
                    "
                  ></span>
                </div>
              </div>
              <!-- CURP Y RFC -->
              <div class="vx-row">
                <!-- CURP -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="CURP"
                    v-model="formulario.persona.curp"
                    name="curp"
                    v-validate="'required|alpha_num|length:18'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('curp')
                        ? getError_message('curp').msg
                        : ''
                    "
                  ></span>
                </div>
                <!-- RFC -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="RFC de persona fisica"
                    v-model="formulario.persona.rfc"
                    name="rfc"
                    v-validate="'required|alpha_num|length:13'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('rfc') ? getError_message('rfc').msg : ''
                    "
                  ></span>
                </div>
              </div>
            </form>
          </tab-content>

          <!-- INFORMACIÓN DE OCUPACIÓN -->
          <tab-content
            title="Datos de ocupación"
            class="mb-5"
            icon="feather icon-briefcase"
            :before-change="validateStep3"
          >
            <form data-vv-scope="step-3">
              <!-- DEPENDENCIA Y ENTIDAD FEDERATIVA -->
              <div class="vx-row">
                <!-- DEPENDENCIA -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    disabled
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-home"
                    label-placeholder="Dependencia"
                    v-model="formulario.dependencia.nombre"
                    v-validate="'required|alpha_spaces|min:3'"
                    name="dependencia"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('dependencia')
                        ? getError_message('dependencia').msg
                        : ''
                    "
                  ></span>
                </div>
                <!-- ENTIDAD FEDERATIVA -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    disabled
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-map-pin"
                    label-placeholder="Entidad Federativa"
                    v-model="formulario.entidadFederativa.nombre"
                    v-validate="'required|alpha_spaces|min:3'"
                    name="ent_fed"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('ent_fed')
                        ? getError_message('ent_fed').msg
                        : ''
                    "
                  ></span>
                </div>
              </div>

              <!-- DEPARTAMENTO Y PUESTO -->
              <div class="vx-row">
                <!-- DEPARTAMENTO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <div class="vx-col w-full mb-2">
                    <v-select
                      placeholder="Departamento"
                      label="nombre"
                      :options="departamentos"
                      style="margin-top: 17px"
                      v-model="formulario.ocupacion.departamento"
                      name="select_departamento"
                      v-validate="'required'"
                    />
                    <span
                      class="text-danger text-sm"
                      v-html="
                        getError_message('select_departamento')
                          ? getError_message('select_departamento').msg
                          : ''
                      "
                    ></span>
                  </div>
                </div>
                <!-- PUESTO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <div class="vx-col w-full mb-2">
                    <v-select
                      placeholder="Puesto"
                      label="nombre"
                      :options="puestos"
                      style="margin-top: 17px"
                      v-model="formulario.ocupacion.puesto"
                      name="select_puesto"
                      v-validate="'required'"
                    />
                    <span
                      class="text-danger text-sm"
                      v-html="
                        getError_message('select_puesto')
                          ? getError_message('select_puesto').msg
                          : ''
                      "
                    ></span>
                  </div>
                </div>
              </div>
            </form>
          </tab-content>

          <!-- INFORMACIÓN ACADÉMICA -->
          <tab-content
            title="Información Académica"
            class="mb-5"
            icon="feather icon-book"
            :before-change="validateStep4"
          >
            <form data-vv-scope="step-4">
              <!-- PROGRAMA ACADÉMICO Y GRADO ACADÉMICO -->
              <div class="vx-row">
                <!-- PROGRAMA ACADÉMICO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <vs-input
                    class="w-full"
                    label-placeholder="Programa académico"
                    v-model="especialidad.nombre"
                    disabled
                  />
                </div>
                <!-- GRADO ACADÉMICO -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <v-select
                    placeholder="Grado académico del aspirante"
                    label="nombre"
                    :options="nivel_educativo"
                    style="margin-top: 17px"
                    v-model="formulario.academico.nivel_educativo"
                    name="select_nivel_educativo"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('select_nivel_educativo')
                        ? getError_message('select_nivel_educativo').msg
                        : ''
                    "
                  ></span>
                </div>
              </div>
              <!-- TIPO DE ADMISIÓN Y CICLO DE ADMISIÓN -->
              <div class="vx-row">
                <!-- TIPO DE ADMISIÓN -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <v-select
                    placeholder="Tipo de admisión"
                    label="nombre"
                    :options="tipo_admision"
                    style="margin-top: 17px"
                    v-model="formulario.academico.tipo_admision"
                    name="select_tipo_admision"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('select_tipo_admision')
                        ? getError_message('select_tipo_admision').msg
                        : ''
                    "
                  ></span>
                </div>
                <!-- CICLO DE ADMISIÓN -->
                <div class="vx-col sm:w-1/2 w-full mb-2">
                  <v-select
                    placeholder="Ciclo de admisión"
                    label="nombre"
                    :options="ciclo_admision"
                    style="margin-top: 17px"
                    v-model="formulario.academico.ciclo_admision"
                    name="select_ciclo_admision"
                    v-validate="'required'"
                  >
                    <!-- COMO SE VEN LAS OPCIONES -->
                    <!-- <template slot="option" slot-scope="data">
                      <div class="d-center" :name="data.id">
                        <b>{{ data.nombre }}</b> - {{ data.cobertura }}
                      </div>
                    </template> -->
                  </v-select>
                  <span
                    class="text-danger text-sm"
                    v-html="
                      getError_message('select_ciclo_admision')
                        ? getError_message('select_ciclo_admision').msg
                        : ''
                    "
                  ></span>
                </div>
              </div>
            </form>
          </tab-content>

          <!-- VERFICAR DATOS -->
          <tab-content
            title="Verifica tus datos"
            class="mb-5"
            icon="feather icon-check-circle"
          >
            <vs-alert
              active="true"
              color="danger"
              class="mb-6 text-center"
              style="height: auto"
            >
              Antes de continuar, asegúrece de que su información sea la
              correcta, posteriormente presione el botón <b>Terminar</b>
            </vs-alert>

            <div class="vx-row">
              <!-- DATOS PERSONALES -->
              <div class="vx-col md:w-1/3 w-full mb-3">
                <vs-list>
                  <vs-list-header
                    icon-pack="feather"
                    icon="icon-user"
                    title="Datos personales"
                    color="primary"
                  ></vs-list-header>
                  <vs-list-item
                    title="Nombre"
                    :subtitle="formulario.persona.nombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Segundo nombre"
                    :subtitle="formulario.persona.segundoNombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Apellido Paterno"
                    :subtitle="formulario.persona.apellidoPaterno"
                  ></vs-list-item>
                  <vs-list-item
                    title="Apellido Materno"
                    :subtitle="formulario.persona.apellidoMaterno"
                  ></vs-list-item>
                  <vs-list-item
                    title="CURP"
                    :subtitle="formulario.persona.curp"
                  ></vs-list-item>
                  <vs-list-item
                    title="RFC"
                    :subtitle="formulario.persona.rfc"
                  ></vs-list-item>
                  <vs-list-item
                    title="Teléfono"
                    :subtitle="formulario.persona.telefono"
                  ></vs-list-item>
                  <vs-list-item
                    title="Correo"
                    :subtitle="formulario.persona.email"
                  ></vs-list-item>
                </vs-list>
              </div>
              <!-- DATOS DE OCUPACIÓN -->
              <div class="vx-col md:w-1/3 w-full mb-3">
                <vs-list>
                  <vs-list-header
                    icon-pack="feather"
                    icon="icon-briefcase"
                    title="Datos de ocupación"
                    color="primary"
                  ></vs-list-header>
                  <vs-list-item
                    title="Dependencia"
                    :subtitle="formulario.dependencia.nombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Entidad Federativa"
                    :subtitle="formulario.entidadFederativa.nombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Departamento"
                    :subtitle="
                      formulario.ocupacion.departamento
                        ? formulario.ocupacion.departamento.nombre
                        : ''
                    "
                  ></vs-list-item>
                  <vs-list-item
                    title="Puesto"
                    :subtitle="
                      formulario.ocupacion.puesto
                        ? formulario.ocupacion.puesto.nombre
                        : ''
                    "
                  ></vs-list-item>
                </vs-list>
              </div>
              <!-- DATOS ACADÉMICOS -->
              <div class="vx-col md:w-1/3 w-full mb-3">
                <vs-list>
                  <vs-list-header
                    icon-pack="feather"
                    icon="icon-book"
                    title="Datos académicos"
                    color="primary"
                  ></vs-list-header>
                  <vs-list-item
                    title="Especialidad"
                    :subtitle="especialidad.nombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Grado académico del aspirante"
                    :subtitle="
                      formulario.academico.nivel_educativo
                        ? formulario.academico.nivel_educativo.nombre
                        : ''
                    "
                  ></vs-list-item>
                  <vs-list-item
                    title="Tipo de admisión"
                    :subtitle="
                      formulario.academico.tipo_admision
                        ? formulario.academico.tipo_admision.nombre
                        : ''
                    "
                  ></vs-list-item>
                  <vs-list-item
                    title="Ciclo de admisión"
                    :subtitle="
                      formulario.academico.ciclo_admision
                        ? String(formulario.academico.ciclo_admision.nombre)
                        : ''
                    "
                  ></vs-list-item>
                </vs-list>
              </div>
            </div>

            <vs-popup
              title="¿Estás seguro de querer continuar?"
              :active.sync="openConfirm"
            >
              <p>
                Una vez registrados tus datos,
                <b class="text-primary">enviaremos un correo de confirmación</b
                >, porfavor sigue los pasos mencionados en el mismo.
              </p>

              <div class="mt-10 text-center">
                <vs-button
                  @click="openConfirm = false"
                  color="danger"
                  type="relief"
                  class="mr-5"
                  >Cancelar</vs-button
                >
                <vs-button
                  @click="formSubmitted"
                  color="primary"
                  type="relief"
                  class="ml-5"
                  >Continuar</vs-button
                >
              </div>
            </vs-popup>

            <!-- DATOS PERSONALES -->
            <div v-if="false" class="mb-6">
              <a class="inline-block text-2xl mb-2"> Datos personales </a>
              <!-- FOLIO -->
              <div v-if="soy_comunidad == 'true'" class="vx-row">
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Folio</h5>
                    <span>{{ formulario.folio }}</span>
                  </div>
                </div>
              </div>
              <!-- NOMBRE Y APELLIDOS -->
              <div class="vx-row">
                <vs-list>
                  <vs-list-item
                    title="Nombre"
                    :subtitle="formulario.persona.nombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Segundo nombre"
                    :subtitle="formulario.persona.segundoNombre"
                  ></vs-list-item>
                  <vs-list-item
                    title="Apellido Paterno"
                    :subtitle="formulario.persona.apellidoPaterno"
                  ></vs-list-item>
                  <vs-list-item
                    title="Apellido Materno"
                    :subtitle="formulario.persona.apellidoMaterno"
                  ></vs-list-item>
                  <vs-list-item
                    title="CURP"
                    :subtitle="formulario.persona.curp"
                  ></vs-list-item>
                  <vs-list-item
                    title="Teléfono"
                    :subtitle="formulario.persona.telefono"
                  ></vs-list-item>
                  <vs-list-item
                    title="Correo"
                    :subtitle="formulario.persona.email"
                  ></vs-list-item>
                </vs-list>

                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Nombre</h5>
                    <span>{{ formulario.persona.nombre }}</span>
                  </div>
                </div>
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Segundo nombre</h5>
                    <span>{{ formulario.persona.segundoNombre }}</span>
                  </div>
                </div>
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Apellido Paterno</h5>
                    <span>{{ formulario.persona.apellidoPaterno }}</span>
                  </div>
                </div>
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Apellido Materno</h5>
                    <span>{{ formulario.persona.apellidoMaterno }}</span>
                  </div>
                </div>
              </div>
              <!-- CURP, TELÉFONO Y CORREO -->
              <div class="vx-row">
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">CURP</h5>
                    <span>{{ formulario.persona.curp }}</span>
                  </div>
                </div>
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Teléfono</h5>
                    <span>{{ formulario.persona.telefono }}</span>
                  </div>
                </div>
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Correo</h5>
                    <span>{{ formulario.persona.email }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- INFORMACIÓN DE OCUPACIÓN -->
            <div v-if="false">
              <a class="inline-block text-2xl mb-2">
                Información de ocupación
              </a>
              <div class="vx-row">
                <!-- DEPENDENCIA -->
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Dependencia</h5>
                    <span>{{
                      formulario.dependencia.nombre
                        ? formulario.dependencia.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
                <!-- ENTIDAD FEDERATIVA -->
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Entidad Federtiva</h5>
                    <span>{{
                      formulario.entidadFederativa.nombre
                        ? formulario.entidadFederativa.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
                <!-- DEPARTAMENTO -->
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Departamento</h5>
                    <span>{{
                      formulario.ocupacion.departamento
                        ? formulario.ocupacion.departamento.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
                <!-- PUESTO -->
                <div class="vx-col w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Puesto</h5>
                    <span>{{
                      formulario.ocupacion.puesto
                        ? formulario.ocupacion.puesto.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- INFORMACIÓN ACADÉMICA -->
            <div v-if="false">
              <a class="inline-block text-2xl mb-2"> Información académica </a>
              <div class="vx-row">
                <!-- PROGRAMA ACADÉMICO -->
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col w-5/6">
                    <h5 class="font-semibold">Programa académico</h5>
                    <span>{{ get_especialidadByID }}</span>
                  </div>
                </div>
                <!-- GRADO ACADÉMICO -->
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Grado académico</h5>
                    <span>{{
                      formulario.academico.nivel_educativo
                        ? formulario.academico.nivel_educativo.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
                <!-- TIPO DE ADMISIÓN -->
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Tipo de admisión</h5>
                    <span>{{
                      formulario.academico.tipo_admision
                        ? formulario.academico.tipo_admision.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
                <!-- CICLO DE ADMISIÓN -->
                <div class="vx-col md:w-1/4 w-full mb-3">
                  <div class="flex flex-col truncate w-5/6">
                    <h5 class="font-semibold">Ciclo de admisión</h5>
                    <span>{{
                      formulario.academico.ciclo_admision
                        ? formulario.academico.ciclo_admision.nombre
                        : ""
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </vx-card>
      <vx-card
        v-else
        title="Algo ha ocurrido"
        title-color="#fff"
        card-background="danger"
        content-color="#fff"
      >
        <p class="mb-3">
          Por favor,
          <b
            >verifique que la liga del correo de confirmación coincida con la
            ingresada en el navegador</b
          >. Si el error continúa pónganse en contacto con nosotros.
        </p>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { get_tbl_nla, post_data } from "@/http/formulario-admision";
import { get_data } from "@/http/oferta-academica";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
  custom: {
    folio: {
      required: "El folio es <b>obligatorio</b>",
      alpha_num:
        "El folio debe contener sólo caracteres <b>alfanuméricos</b> (letras y números)",
    },
    nombre: {
      required: "El nombre es <b>obligatorio</b>",
      alpha_spaces: "El nombre debe contener sólo <b>letras</b>",
      min: "Debe ingresar un nombre mínimo con <b>3 letras</b>",
    },
    apellido_p: {
      required: "El apellido paterno es <b>obligatorio</b>",
      alpha_spaces: "El apellido paterno debe contener sólo <b>letras</b>",
    },
    telefono: {
      required: "El teléfono es <b>obligatorio</b>",
      numeric: "El teléfono debe contener sólo <b>números</b>",
      min: "Debe ingresar un teléfono de <b>10 dígitos</b>",
    },
    email: {
      required: "El correo electrónico es <b>obligatorio</b>",
      email: "El correo electrónico <b>no es válido</b>",
    },
    curp: {
      required: "El CURP es <b>obligatorio</b>",
      alpha_num:
        "El CURP debe contener sólo caracteres <b>alfanuméricos</b> (letras y números)",
      length: "Debe ingresar un CURP de <b>18 caracteres</b>",
    },
    rfc: {
      required: "El RFC es <b>obligatorio</b>",
      alpha_num:
        "El RFC debe contener sólo caracteres <b>alfanuméricos</b> (letras y números)",
      length: "Debe ingresar un RFC de <b>13 caracteres</b> (persona fisica)",
    },
    dependencia: {
      required: "La dependencia es <b>obligatoria</b>",
      alpha_spaces: "La dependencia debe contener sólo <b>letras</b>",
      min: "Debe ingresar una dependencia mínimo con <b>3 letras</b>",
    },
    ent_fed: {
      required: "La entidad federativa es <b>obligatoria</b>",
      alpha_spaces: "La entidad federativa debe contener sólo <b>letras</b>",
      min: "Debe ingresar una entidad federativa mínimo con <b>3 letras</b>",
    },
    select_nivel_educativo: {
      required: "Debe <b>seleccionar</b> un grado académico",
    },
    select_tipo_admision: {
      required: "Debe <b>seleccionar</b> un tipo de admisión",
    },
    select_ciclo_admision: {
      required: "Debe <b>seleccionar</b> un ciclo de admisión",
    },
    select_departamento: {
      required: "Debe <b>seleccionar</b> un departamento",
    },
    select_puesto: {
      required: "Debe <b>seleccionar</b> un puesto",
    },
    select_grado: {
      required: "Debe <b>seleccionar</b> un grado académico",
    },
    // select_rfc: {
    //   required: "Debe <b>seleccionar</b> una opción",
    // },
    // select_ef: {
    //   required: "Debe <b>seleccionar</b> una opción",
    // },
  },
};

// register custom messages
Validator.localize("es", dict);

var interval; // INTERVALO PARA HACER REDIRECT DESPUÉS DE 45MIN SIN HACER SUBMIT

/**
 * Formulario de registro a especialidad
 * @displayName Formulario
 * @example [none]
 */
export default {
  data() {
    return {
      counter: 1,
      message_error_input: [],
      soy_comunidad: "false",
      pre_registro: null,
      timestamp: null,
      error_page: false,

      formulario: {
        preregistro: "",
        folio: "",
        persona: {},
        dependencia: {},
        ocupacion: {},
        entidadFederativa: {},
        academico: {},
      },
      especialidad: {},
      tipo_admision: [],
      nivel_educativo: [],
      ciclo_admision: [],
      entidades_fed: [],
      dependencias: [],
      departamentos: [],
      puestos: [],
      entidadFederativa_selected: "",
      dependencia_selected: "",
      tbl: "",
      old_tbl: "",
      nla: "",
      openConfirm: false,
    };
  },
  computed: {
    // get_especialidadByID: function () {
    //   // return (id_especialidad) => this.$store.getters["cursos/get_EspecialidadByID"](id_especialidad);
    //   return "ESPECIALIDAD EN FISCALIZACIÓN DE IMPUESTOS EN MÉXICO";
    // },
    // dataEspecialidad: function () {
    //   return (id_especialidad) =>
    //     this.$store.getters["especialidades/get_EspecialidadByID"](
    //       id_especialidad
    //     );
    // },
    /**
     * Ésta función computada, retorna el mensaje de error, de un arreglo de errores, estos serán visibles en los inputs del step actual
     * @public
     */
    getError_message: function () {
      return (nombre_item) =>
        this.message_error_input.find((item) => item.field == nombre_item);
    },
  },
  watch: {
    dependencia_selected: function (value) {
      if (value != "" && value != null) {
        this.entidadFederativa_selected = value.entidadFederativa;
        this.formulario.dependencia = value.id_dependencia;
      }
    },
    entidadFederativa_selected: function (value) {
      if (value != "" && value != null)
        this.formulario.entidadFederativa = value.id;
    },
    "formulario.persona.curp": function (text) {
      if (text !== text.toUpperCase()) this.formulario.persona.curp = text.toUpperCase();
    },
    "formulario.persona.rfc": function (text) {
      if (text !== text.toUpperCase()) this.formulario.persona.rfc = text.toUpperCase();
    },
  },
  created: function () {
    this.pre_registro = this.$route.params.id;
    this.timestamp = this.$route.params.time;

    if (this.$route.params.id && this.$route.params.time) {
      this.$vs.loading();
      let promesa = new Promise((resolve, reject) => {
        this.get_tbl_nla(resolve, reject);
      });
      let promesa2 = new Promise((resolve, reject) => {
        this.get_data_registered(resolve, reject);
      });

      const vm = this;

      Promise.all([promesa, promesa2])
        .then(() => {
          vm.old_tbl = vm.tbl;
          vm.intervalRedirect();
          vm.get_entidades();
          // vm.get_nivel_educativo();
          vm.get_tipo_admision();
          vm.get_ciclo_admision();
          vm.get_departamentos();
          vm.get_puestos();
          vm.get_grados();
          vm.$vs.loading.close();
        })
        .catch(function (reason) {
          vm.$vs.loading.close();
          vm.error_page = true;
          vm.$vs.notify({
            title: "Error catched in promise all",
            text: reason,
            icon: "cancel",
            position: "top-right",
            color: "danger",
            time: 8000,
          });
        });
    } else this.error_page = true;
  },
  methods: {
    /**
     * Éste método verifica la cantidad de intentos, si es menor o igual a 10, realiza petición para almacenar datos, si es mayor a 10, muestra mensaje de 'exceso de intentos'
     * @public
     */
    formSubmitted: function () {
      if (this.counter <= 10) {
        this.$vs.loading();
        this.counter += 1;
        this.openConfirm = false;

        var params = new FormData();
        params.append("task", "wspublico");
        params.append("origin", process.env.VUE_APP_ORIGIN_API);
        params.append("action", 12);
        params.append("tbl", this.tbl);
        params.append("nla", this.nla);
        params.append("data", JSON.stringify(this.formulario));

        post_data(params)
          .then((response) => {
            if (response.status == 200 && response.data.status == 200) {
              this.registroExitoso();
            } else {
              this.$vs.notify({
                color: "danger",
                position: "top-right",
                time: 5000,
                title: "Error al generar registro",
                text: response.data.message,
              });

              this.tbl = response.data.tbl;
            }

            this.$vs.loading.close();
          })
          .catch((err) => {
            this.promise_tbl_nla(); // MAKE PROMISE TO TBL REQUEST
            this.$vs.loading.close();
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error",
              text: err,
            });
          });
      } else {
        this.$vs.notify({
          color: "danger",
          position: "top-right",
          time: 10000,
          title: "Exceso de intentos",
          text:
            "Ha superado la cantidad de intentos disponibles, por favor, intente nuevamente más tarde",
        });
      }
    },
    /**
     * Éste método verifica la cantidad de intentos, si es menor o igual a 10, muestra modal de confirmación. El usuario decide si continua o no, si lo así, se llama formSubmitted(). Si la cantidad de intentos es mayor de 10, se muestra mensaje de 'exceso de intentos'
     * @public
     */
    openConfirmFunction: function () {
      if (this.counter <= 10) {
        /**
         * @event openConfirm
         */
        this.openConfirm = true;
      } else {
        this.$vs.notify({
          color: "danger",
          position: "top-right",
          time: 10000,
          title: "Exceso de intentos",
          text:
            "Ha superado la cantidad de intentos disponibles, por favor, intente nuevamente más tarde",
        });
      }
    },
    /**
     * Obtener tbl & nla
     * @param {function} resolve - Promise resolve
     * @param {function} reject - Promise reject
     * @public
     */
    get_tbl_nla: function (resolve, reject) {
      get_tbl_nla()
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.tbl = response.data.data.tbl;
            this.nla = response.data.data.nla;
            resolve();
          } else {
            reject(response.data.message);
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: response.data.status + " - Error obteniendo datos",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          reject(err);
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error obteniendo datos",
            text: err,
          });
        });
    },
    /**
     * Obtener información de pre-registro para precargar datos
     * @param {function} resolve - Promise resolve
     * @param {function} reject - Promise reject
     * @public
     */
    get_data_registered: function (resolve, reject) {
      get_data({ action: 8, tkn: this.pre_registro, date: this.timestamp })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.formulario.preregistro = response.data.id;
            this.formulario.persona = response.data.data;
            this.formulario.dependencia = response.data.dependencia;
            this.formulario.entidadFederativa = response.data.entidadFederativa;
            this.especialidad = response.data.especialidad;
            resolve();
          } else {
            reject(response.data.message);
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              time: 10000,
              title: "Error al cargar opciones de ciclo de admisión",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          reject(err);
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            time: 10000,
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Catálogo de nivel educativo
     * @public
     */
    get_nivel_educativo: function () {
      get_data({ action: 5 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.nivel_educativo = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar opciones de nivel educativo",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Catálogo de tipo de admisión
     * @public
     */
    get_tipo_admision: function () {
      get_data({ action: 6 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.tipo_admision = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar opciones de tipo de admisión",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Catálogo del ciclo de admisión
     * @public
     */
    get_ciclo_admision: function () {
      get_data({ action: 7 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.ciclo_admision = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar opciones de ciclo de admisión",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Listado de entidades federativas
     * @public
     */
    get_entidades: function () {
      get_data({ action: 2 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.entidades_fed = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar entidades federativas",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error al cargar entidades federativas",
            text: err,
          });
        });
    },
    /**
     * Listado de depoartamentos
     * @public
     */
    get_departamentos: function () {
      get_data({ action: 9 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.departamentos = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar departamentos",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error al cargar departamentos",
            text: err,
          });
        });
    },
    /**
     * Listado puestos/cargos
     * @public
     */
    get_puestos: function () {
      get_data({ action: 10 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.puestos = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar puestos",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error al cargar puestos",
            text: err,
          });
        });
    },
    /**
     * Listado de grados
     * @public
     */
    get_grados: function () {
      get_data({ action: 11 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.nivel_educativo = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar grados",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error al cargar grados",
            text: err,
          });
        });
    },
    /**
     * Método para validación de datos step 1
     * @public
     */
    validateStep1() {
      if (this.soy_comunidad == "true") {
        return new Promise((resolve, reject) => {
          this.$validator.validateAll("step-1").then((result) => {
            if (result) {
              resolve(true);
            } else {
              this.message_error_input = this.$validator.errors.items;
              reject("correct all values");
            }
          });
        });
      } else return true;
    },
    /**
     * Método para validación de datos step 2
     * @public
     */
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then((result) => {
          if (result) {
            resolve(true);
          } else {
            this.message_error_input = this.$validator.errors.items;
            reject("correct all values");
          }
        });
      });
    },
    /**
     * Método para validación de datos step 3
     * @public
     */
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then((result) => {
          if (result) {
            resolve(true);
          } else {
            this.message_error_input = this.$validator.errors.items;
            reject("correct all values");
          }
        });
      });
    },
    /**
     * Método para validación de datos step 4
     * @public
     */
    validateStep4() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-4").then((result) => {
          if (result) {
            resolve(true);
          } else {
            this.message_error_input = this.$validator.errors.items;
            reject("correct all values");
          }
        });
      });
    },
    /**
     * Muestra el mensaje de éxito al pre-registrarse a una especialidad, así como un mensaje de correo envíado
     * @public
     */
    registroExitoso: function () {
      // NOTIFY SUCCESS REGISTER
      this.$vs.notify({
        title: "Correo de verificación enviado",
        text:
          "Hemos enviado un correo de verificación a su cuenta de correo electrónico, siga los pasos mencionados en el mismo para continuar con el proceso de inscripción.",
        time: 20000,
        position: "top-right",
        color: "primary",
        iconPack: "feather",
        icon: "icon-mail",
      });
      // NOTIFY MAIL SENT
      this.$vs.notify({
        title: "Registro exitoso",
        text: "Se ha registrado exitosamente",
        time: 20000,
        position: "top-right",
        color: "primary",
        iconPack: "feather",
        icon: "icon-check",
      });
      this.clearForm();
    },
    /**
     * Limpia el formulario
     * @public
     */
    clearForm: function () {
      this.formulario = {
        preregistro: "",
        folio: "",
        persona: {},
        dependencia: {},
        ocupacion: {},
        entidadFederativa: {},
        academico: {},
      };
      this.especialidad = {};
    },
    /**
     * Método encargado de realizar petición para cargar el tbl y nal, éste método maneja una promesa, al terminar la promesa, se hace el llamado a intervalRedirect(), e iguala el valor de banderas de tbl
     * @public
     */
    promise_tbl_nla: function () {
      const vm = this;

      let promesa = new Promise((resolve, reject) => {
        this.get_tbl_nla(resolve, reject);
      });

      promesa
        .then(() => {
          vm.old_tbl = vm.tbl;
          vm.intervalRedirect();
        })
        .catch(function (error) {
          vm.$vs.notify({
            title: "Error obteniendo tbl/nla",
            text: error + " Por favor inténtelo más tarde.",
            icon: "cancel",
            position: "top-right",
            color: "danger",
            time: 15000,
          });
        });
    },
    /**
     * Éste metodo es llamado para realizar un setInterval de 45min, el cual compara banderas de tbl para saber si realizó una petición en este periodo de tiempo, de lo contrario redirecciona a pantalla principal y muestra mensaje de 'formulario caducado'
     * @public
     */
    intervalRedirect: function () {
      interval = setInterval(() => {
        if (this.tbl == this.old_tbl) {
          this.$router.push("/");
          this.$vs.notify({
            time: 10000,
            color: "warning",
            position: "top-right",
            title: "Formulario caducado",
            text: "El formulario de registro ha expirado, ingrese nuevamente",
          });
        }
        this.old_tbl = this.tbl;
      }, 2700000);
    },
  },
  destroyed: function () {
    clearInterval(interval);
  },
  components: {
    "v-select": vSelect,
    FormWizard,
    TabContent,
  },
};
</script>
