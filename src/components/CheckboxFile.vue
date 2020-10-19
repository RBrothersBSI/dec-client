<template>
<v-card>
    <v-container
      class="px-0 _boxContainer"
      fluid
    >
    <span>{{ title }}</span>
      <v-checkbox
        v-model="checkbox"
        :label="`${onOff}`"
        class="_checkbox"
      ></v-checkbox>
    </v-container>
    <v-file-input
      v-if="checkbox"
      truncate-length="15"
      :label="title.match(/[A-Z][a-z]+/g).join(' ')"
    ></v-file-input>
  </v-card>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        checkbox: true,
      }
    },
    computed: {
      onOff: function(){
        if (this.checkbox == true){
          return 'Yes'
        } else {
          return 'No'
        }
      }
    }
  }
</script>

<style>
._checkbox{
  margin-left: 40%;
}
/* ._boxContainer{
  align-items: center;
} */
</style>