<template>
  <div>
   <v-row>
    <v-col cols="12" class="pl-5 pt-6">
      <v-container class="px-0 _boxContainer"
      fluid>
        <span>VAV AHUs?</span>
        <v-checkbox
            class="_plantCheckbox"
            :label="`${plantOnOff}`"
            v-model="plantCheckbox">
        </v-checkbox>
      </v-container>
    </v-col>
   </v-row>
   <v-row v-if="plantCheckbox">
    <v-col cols="12" class="pl-5">
      <v-text-field
        label="Number of VAVAHUs"
      ></v-text-field>
    </v-col>
   </v-row>
  </div>
</template>

<script>
export default {
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