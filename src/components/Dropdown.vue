<template>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }" class="mt-4 _dropdown">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="_dropdown"
          v-model="yesNo"
        >
          {{ name }}
        </v-btn>
      </template>
      <v-list-item-group>
        <v-list-item
          v-for="(item, index) in bool"
          :key="index"
          @click="setYesNo($event)"
        >
          <v-list-item-content >{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-menu>
</template>

<script>
export default {
props: ['name'],
components: {
  
},
data() {
    return {
      bool : [
          { title: 'Yes' },
          { title: 'No' },
      ],
        yesNo: false,
    }
  },
  methods: {
    setYesNo() {
      if(event.target.innerText == "Yes"){
        this.yesNo = true
      } else {
        this.yesNo = false
      }
    }
  },
  computed: {

  }
}
</script>

<style scoped>
._dropdown{
  font-size: 10px;
  text-align: center;
}
</style>