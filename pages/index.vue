<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="2" />
        <v-col cols="8">
          <v-card>
            <v-card-title>Information about the SensorThings API</v-card-title>
            <v-card-text>
              The SensorThings API is shown in this local system with a database, a web interface, and sample data.
            </v-card-text>
            <v-card-text class="mt-0 pt-0">
              <v-list-item>
                To the SensorThingsAPI web interface: <a class="ml-2" :href="bwmStaHttpUrl + 'v1.1/'" target="_blank">
                  {{ bwmStaHttpUrl + 'v1.1/' }}</a>
              </v-list-item>
              <v-list-item>
                To the SensorThingsAPI documentation: <a class="ml-2" :href="staDocUrl" target="_blank"> {{ staDocUrl
                  }}</a>
              </v-list-item>
            </v-card-text>
          </v-card>

          <v-card color="mt-3 pb-2">
            <v-card-title>Sensor data for SensorThings API</v-card-title>
            <v-card-text>
              Data can be imported into the database here. This data contains series of measurements from four sensors
              from a previous measurement. The measured values ​​can be retrieved via the SensorThings API.
            </v-card-text>
          </v-card>

          <!-- displays progress through numbered steps -->
          <!-- https://vuetifyjs.com/en/components/steppers/ -->
          <v-stepper :items="['Check Connection', 'Check Database', 'Import Data', 'Ready']">
            <template v-slot:item.1>
              <v-card title="Check Connection" flat></v-card>
            </template>

            <template v-slot:item.2>
              <v-card title="Check Database" flat></v-card>
            </template>

            <template v-slot:item.3>
              <v-card title="Import Data" flat></v-card>
            </template>

            <template v-slot:item.4>
              <v-card title="Ready" flat></v-card>
            </template>
          </v-stepper>


          <!-- v-stepper-item: Primary Component -->
          <!-- https://vuetifyjs.com/en/components/steppers/#api -->
          <v-stepper v-model="step">

            <!-- step 1: check the connection to the SensorThings API. -->
            <v-stepper-item :complete="step > 1" step="1">
              <v-card>
                <v-card-text>
                  The first step is to check the connection to the SensorThings API. The service should appear
                  in Docker as 'bwm-sta'.
                </v-card-text>
                <v-card-actions>
                  <v-progress-circular class="mr-5 ml-2" :size="35" :color="loading ? 'secondary' : 'accent'"
                    :indeterminate="loading">
                    <v-icon v-if="success === true" :size="28" color="secondary">
                      {{ mdiCheck }}
                    </v-icon>
                    <v-icon v-if="error === true && success === false" :size="20" color="warning">
                      {{ mdiAlert }}
                    </v-icon>
                  </v-progress-circular>
                  <v-btn v-show="!loading && success === false" class="mr-2" color="secondary" @click="checkConnection">
                    {{ error ? 'Try again' : 'Check connection now' }}
                  </v-btn>
                  <span v-show="loading && success === false && error === false">One moment please...</span>
                  <span v-show="!loading && success === true">The connection works!</span>
                  <span v-show="!loading && error === true && success === false">An error has occurred: {{ text ? text
                  : '' }}</span>
                </v-card-actions>
              </v-card>
            </v-stepper-item>



            <v-stepper-item :complete="step > 2" step="2">
              <v-card>
                <v-card-text>
                  The first step is to check the connection to the SensorThings API. The service should appear
                  in Docker as 'bwm-sta'.
                </v-card-text>
                <v-card-actions>
                  <v-progress-circular class="mr-5 ml-2" :size="35" :color="loading ? 'secondary' : 'accent'"
                    :indeterminate="loading">
                    <v-icon v-if="success === true" :size="28" color="secondary">
                      {{ mdiCheck }}
                    </v-icon>
                    <v-icon v-if="error === true && success === false" :size="20" color="warning">
                      {{ mdiAlert }}
                    </v-icon>
                  </v-progress-circular>
                  <v-btn v-show="!loading && success === false" class="mr-2" color="secondary" @click="checkConnection">
                    {{ error ? 'Try again' : 'Check connection now' }}
                  </v-btn>
                  <span v-show="loading && success === false && error === false">One moment please...</span>
                  <span v-show="!loading && success === true">The connection works!</span>
                  <span v-show="!loading && error === true && success === false">An error has occurred: {{ text ? text
                    : '' }}</span>
                </v-card-actions>
              </v-card>
            </v-stepper-item>





          </v-stepper>


        </v-col>
      </v-row>
    </v-container>
  </v-app>


  <!--
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
  -->
</template>




<script>
export default{
  data(){
    return {
      mdiCheck: 'success',
      mdiAlert: 'no',
      bwmStaHttpUrl: this.$config.public.bwmStaHttpUrl, // refer to nuxt.config.js --> runtimeConfig --> public
      bwmSosaUrl: this.$config.public.bwmSosaUrl,
      staDocUrl: 'https://fraunhoferiosb.github.io/FROST-Server/',
      step: 1,
      loading: false,
      success: true,
      error: false,
      test: ""

    }
  },

  methods:{
    test_button(){
      console.log('check connection...')
    },
    checkConnection(){

    }
  }
}
</script>




<style scoped>
.translated-text {
  display: block; /* ensures it starts on a new line */
  font-size: 1em; /* smaller text size */
  color: #a09e9e; /* your desired color */
  margin-top: 8px; /* space between original and translated text */
}
</style>

