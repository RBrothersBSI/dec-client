<template>
  <div>
   <v-row>
    <v-col cols="12" class="pl-5 pt-6">
      <v-container class="px-0 _boxContainer"
      fluid>
        <span>HW System?</span>
        <v-checkbox
            class="_plantCheckbox"
            :label="`${plantOnOff}`"
            v-model="plantCheckbox">
        </v-checkbox>
      </v-container>
    </v-col>
   </v-row>
   <v-row v-if="plantCheckbox">
    <v-col cols="3" class="pl-5">
      <v-text-field
        label="Number of Boilers"
        :value='numBoilersVal'
        @change="sendNumBoilers"
      ></v-text-field>
    </v-col>
     <v-col cols="3" class="pl-5">
      <v-text-field
        label="Number of Primary Pumps"
     ></v-text-field>
    </v-col>
    <v-col cols="3" class="pl-5">
      <v-text-field
        label="Number of Secondary Pumps"
     ></v-text-field>
    </v-col>
     <v-col cols="3" class="pl-1 pt-2">
        <span>HW Bypass?</span>
        <v-checkbox
            class="_bypassCheckbox"
            :label="`${bypassOnOff}`"
            v-model="bypassCheckbox">
        </v-checkbox>
    </v-col>
   </v-row>
  </div>
</template>

<script>
export default {
    props: [ 'numBoilersVal', 'numPrimHWPumpsVal', 'numSecHWPumpsVal', 'hasHWBypassVal'],
    data () {
      return {
        plantCheckbox: true,
        bypassCheckbox: true
      }
    },
    computed: {
      plantOnOff: function(){
        if (this.plantCheckbox == true){
          return 'Yes'
        } else {
          return 'No'
        }
      },
      bypassOnOff: function(){
        if (this.plantCheckbox == true){
          return 'Yes'
        } else {
          return 'No'
        }
      }
    },
    methods: {
      sendNumBoilers (newBoilers){
        //console.log(`sendNumBoilers ${newBoilers}`)
        this.$emit('updateBoilers', newBoilers)
      },
    }
}
</script>

<style>
._plantCheckbox{
  margin-left: 48%;
}
._bypassCheckbox{
    margin-left: 40%;
}
</style>