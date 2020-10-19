<template>
  <div>
    <h1 id="_discoveryTitle" class="pt-4">Discovery</h1>
    <h2>Site Overview</h2>
    <v-row>
      <v-col cols="3">
        <CheckboxFile title="Mechanical Drawings?"/>
      </v-col>
      <v-col cols="3">
        <CheckboxFile title="Electrical Drawings?"/>
      </v-col>
      <v-col cols="3">
        <CheckboxFile title="Plumbing Drawings?"/>
      </v-col>
      <v-col cols="3">
        <CheckboxFile title="Equipment Schedules?"/>
      </v-col>
    </v-row>
       <h2 class="pt-10">Plant Configuration</h2>
       <CHWSysConfig 
       :numChillersVal="numChillersParent"
       :numPrimCHWPumpsVal="numPrimCHWPumpsParent"
       :numSecCHWPumpsVal="numSecCHWPumpsParent"
       :hasCHWBypassVal="hasCHWBypassParent"
       @updateChillers='setNumChillers'
       @updatePrimCHWPumps='setPrimCHWPumps'
       @updateSecCHWPumps='setSecCHWPumps'
       @updateCHWBypass='setCHWBypass'
       />
       <HWSysConfig 
       :numBoilersVal="numBoilersParent"
       @updateBoilers='setNumBoilers'/>
       <h2 class="pt-10">VAV Air Handling Unit Configuration</h2>
       <VAVAHUConfig />
       <h2 class="pt-10">VAV Configuration</h2>
       <VAVConfig />
       <h2 class="pt-10">FPB Configuration</h2>
       <FPBConfig />
       <h2 class="pt-10">CVAHU Configuration</h2>
       <CVAHUConfig />
       <h2 class="pt-10">Exhaust Fan Configuration</h2>
       <EXFanConfig />
       <h2 class="pt-10">Computer Room Configuration</h2>
       <CRACConfig />
       <h2 class="pt-10">Roof Top Configuration</h2>
       <RTUConfig />
       <v-btn color="secondary" class="mb-2" @click="storeInfo()">Submit</v-btn>
       <v-btn color="primary" to='/DiscoverySetup' class="mb-2">Next ></v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import CheckboxFile from '../../components/CheckboxFile.vue'
import CHWSysConfig from '../../views/discovery/CHWSysConfig.vue'
import HWSysConfig from '../../views/discovery/HWSysConfig.vue'
import VAVAHUConfig from '../../views/discovery/VAVAHUConfig.vue'
import VAVConfig from '../../views/discovery/VAVConfig.vue'
import FPBConfig from '../../views/discovery/FPBConfig.vue'
import CVAHUConfig from '../../views/discovery/CVAHUConfig.vue'
import EXFanConfig from '../../views/discovery/EXFanConfig.vue'
import CRACConfig from '../../views/discovery/CRACConfig.vue'
import RTUConfig from '../../views/discovery/RTUConfig.vue'
export default {
components: {
  CheckboxFile,
  CHWSysConfig,
  HWSysConfig,
  VAVAHUConfig,
  VAVConfig,
  FPBConfig,
  CVAHUConfig,
  EXFanConfig,
  CRACConfig,
  RTUConfig
},
data() {
    return {
      bool : [
          { title: 'Yes' },
          { title: 'No' },
      ],
        numChillersParent: 1,
        numPrimCHWPumpsParent: 1,
        numSecCHWPumpsParent: 0,
        hasCHWBypassParent: false,
        numBoilersParent: 1
    }
  },
  methods: {
    storeInfo(){
      this.$store.dispatch('setChillers', this.numChillersParent)
      this.$store.dispatch('setBoilers', this.numBoilersParent)
      this.$router.push('/DiscoverySetup')
    },
    setCHWPumpStyle() {
      if(event.target.innerText == "Yes"){
        this.secondaryPumps = true
      } else {
        this.secondaryPumps = false
      }
    },
    setNumChillers (v) {
      this.numChillersParent = +v
    },
    setPrimCHWPumps (v) {
      this.numPrimCHWPumpsParent = +v
    },
    setSecCHWPumps(v){
      this.numSecCHWPumpsParent = +v
    },
    setCHWBypass(v){
      this.hasCHWBypassParent = v
    },
    setNumBoilers(v){
      this.numBoilersParent = +v
    }
  },
  mounted() {
    this.numChillersParent = this.$store.state.chillers.length
  }
}

</script>

<style scoped>
._dropdown{
  font-size: 10px;
  text-align: center;
}
._spacer{
  height: 50px;
}
</style>
