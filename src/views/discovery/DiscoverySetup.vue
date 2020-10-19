<template>
    <div class="text-center">
        <v-progress-circular
        v-if="loading"
        id="_discoveryLoader"
        indeterminate
        color="primary"
        ></v-progress-circular>
        <div v-else>
        <h2>Chilled Water System</h2>
        <v-chip
            v-for="(chiller, i) in chillers"
            :key="i"
            close-icon="mdi-close-outline"
            color="blue"
            link
        >{{ chiller.name }}</v-chip>
        </div>
        <h2>Boiler System</h2>
        <v-chip
            v-for="(boiler) in boilers"
            :key="boiler.name"
            close-icon="mdi-close-outline"
            color="secondary"
            link
        >{{ boiler.name }}</v-chip>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            chillers: [],
            boilers: []
        }
    },
    mounted() {
        setTimeout(()=>{
            this.loading = false
        }, 200)
        this.chillers = this.$store.state.chillers
        this.boilers = this.$store.state.boilers
    }
}
</script>

<style>
#_discoveryLoader{
    top: 450px;
}
</style>