<template>
  <div>
   <v-row>
    <v-col cols="12" class="pl-5 pt-6">
      <v-container class="px-0 _boxContainer"
      fluid>
        <span>CHW System?</span>
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
        label="Number of Chillers"
        :value='numChillersVal'
        @change="sendNumChillers"
      ></v-text-field>
    </v-col>
     <v-col cols="3" class="pl-5">
      <v-text-field
        label="Number of Primary Pumps"
        :value='numPrimCHWPumpsVal'
        @change="sendNumPrimCHWPumps"
     ></v-text-field>
    </v-col>
    <v-col cols="3" class="pl-5">
      <v-text-field
        label="Number of Secondary Pumps"
        :value='numSecCHWPumpsVal'
        @change="sendNumSecCHWPumps"
     ></v-text-field>
    </v-col>
     <v-col cols="3" class="pl-1 pt-2">
        <span>CHW Bypass?</span>
        <v-checkbox
            class="_bypassCheckbox"
            :label="`${bypassOnOff}`"
            v-model="bypassCheckbox"
            :value="hasCHWBypassVal"
            @change="sendHasCHWBypass"
            >
        </v-checkbox>
    </v-col>
   </v-row>
  </div>
</template>

<script>
export default {
    props: [ 'numChillersVal', 'numPrimCHWPumpsVal', 'numSecCHWPumpsVal', 'hasCHWBypassVal'],
    data () {
      return {
        plantCheckbox: true,
        bypassCheckbox: true,
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
        if (this.bypassCheckbox == true){
          return 'Yes'
        } else {
          return 'No'
        }
      }
    },
    methods: {
      sendNumChillers (newChillers){
        //console.log(`sendNumChillers ${newChillers}`)
        this.$emit('updateChillers', newChillers)
      },
      sendNumPrimCHWPumps (newPrimCHWPumps) {
        this.$emit('updatePrimCHWPumps', newPrimCHWPumps)
      },
      sendNumSecCHWPumps (newSecCHWPumps) {
        this.$emit('updateSecCHWPumps', newSecCHWPumps)
      },
      sendHasCHWBypass (hasCHWBypass) {
        this.$emit('updateCHWBypass', hasCHWBypass)
      }
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