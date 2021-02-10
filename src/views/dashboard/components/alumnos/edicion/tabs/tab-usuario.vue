<template>
  <div id="user-edit-tab-info">
    <vx-card>
      <!-- ÚLTIMO INICIO DE SESIÓN -->
      <template slot="actions">
        <p
          v-if="data_local.lastActivityDate && data_local.lastActivityDate != null && data_local.lastActivityDate != 'null'"
        >
          Último inicio de sesión:
          <b
            class="text-success"
          >{{ data_local.lastActivityDate | timestamp_toDate }}</b>
        </p>
        <p v-else>
          <b class="text-danger">Este usuario no ha iniciado sesión</b>
        </p>
      </template>

      <!-- INFORMACIÓN DEL USUARIO  -->
      <vx-card no-shadow card-border>
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="UserIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Datos del usuario</span>
            </div>
            <vs-divider />
          </div>
        </div>

        <!-- Avatar Row -->
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-start flex-col sm:flex-row">
              <img :src="data.avatar" class="mr-8 rounded h-24 w-24" />
              <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
              <div>
                <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">{{ data.name }}</p>
                <input
                  type="file"
                  class="hidden"
                  ref="update_avatar_input"
                  @change="update_avatar"
                  accept="image/*"
                />

                <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
                <!-- <vs-button class="mr-4 mb-4">Change Avatar</vs-button> -->
                <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> -->

                <!-- <vs-button type="border" color="danger">Remove Avatar</vs-button> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Content Row -->
        <div class="vx-row">
          <div class="vx-col md:w-1/2 w-full">
            <vs-input
              class="w-full mt-4"
              label="Username"
              v-model="data_local.username"
              name="username"
            />

            <vs-input class="w-full mt-4" label="Nombre" v-model="data_local.name" name="name" />
            <!-- <span class="text-danger text-sm"  v-show="errors.has('username')">{{ errors.first('username') }}</span> -->

            <!-- <vs-input class="w-full mt-4" label="Name" v-model="data_local.lastActivityDate" name="name" /> -->
            <!-- <span class="text-danger text-sm"  v-show="errors.has('name')">{{ errors.first('name') }}</span> -->

            <vs-input
              class="w-full mt-4"
              label="Email"
              v-model="data_local.email"
              type="email"
              name="email"
            />
            <!-- <span class="text-danger text-sm"  v-show="errors.has('email')">{{ errors.first('email') }}</span> -->

            <!-- <vs-input class="w-full mt-4" label="Primer inicio de sesión" :value="data_local.lastActivityDate | timestamp_toDate" disabled type="text" name="lastActivityDate" /> -->
            
            
            <vs-row class="mt-4">
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-radio color="primary" v-model="data_local.gender" vs-value="M">Masculino</vs-radio>
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-radio color="primary" v-model="data_local.gender" vs-value="F">Femenino</vs-radio>
              </vs-col>
            </vs-row>
          </div>

          <div class="vx-col md:w-1/2 w-full">
            <div class="mt-4">
              <label class="vs-input--label">Status</label>
              <v-select
                v-model="status_local"
                :clearable="false"
                :options="statusOptions"
                name="status"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
              <!-- <span class="text-danger text-sm"  v-show="errors.has('status')">{{ errors.first('status') }}</span> -->
            </div>

            <div class="mt-4">
              <label class="vs-input--label">Role</label>
              <v-select
                v-model="role_local"
                :clearable="false"
                :options="roleOptions"
                name="role"
                :dir="$vs.rtl ? 'rtl' : 'ltr'"
              />
              <!-- <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span> -->
            </div>

            <!-- <vs-input class="w-full mt-4" label="Company" v-model="data_local.company" name="company" /> -->
            <!-- <span class="text-danger text-sm"  v-show="errors.has('company')">{{ errors.first('company') }}</span> -->
          </div>
        </div>
      </vx-card>

      <!-- Save & Reset Button -->
      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="mt-8 flex flex-wrap items-center justify-end">
            <vs-button class="ml-auto mt-2" @click="save_changes">Save Changes</vs-button>
            <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button>
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),

      statusOptions: [
        { label: "Active", value: "active" },
        { label: "Blocked", value: "blocked" },
        { label: "Deactivated", value: "deactivated" },
      ],
      roleOptions: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "Staff", value: "staff" },
      ],
      switchArray: [],
    };
  },
  computed: {
    status_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status,
        };
      },
      set(obj) {
        this.data_local.status = obj.value;
      },
    },
    role_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.role),
          value: this.data_local.role,
        };
      },
      set(obj) {
        this.data_local.role = obj.value;
      },
    },
    // validateForm () {
    //   return !this.errors.any()
    // }
  },
  methods: {
    capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
    },
    save_changes() {
      /* eslint-disable */
      // if (!this.validateForm) return
      // Here will go your API call for updating data
      // You can get data in "this.data_local"
      /* eslint-enable */
    },
    reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data));
    },
    update_avatar() {
      // You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    },
  },
};
</script>
