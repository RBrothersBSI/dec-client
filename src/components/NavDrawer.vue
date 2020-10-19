<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="200px"
    >
     <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(route, i) in routes"
          :key="i"
          :to="route.path"
        >
          <v-list-item-icon>
            <v-icon v-text="route.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="route.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ routeName }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>     
  </div>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      routes: [
        { name: 'Discovery', icon: 'mdi-home-search-outline', path: '/DiscoveryHome' },
        { name: 'Engineering', icon: 'mdi-pencil', path: '/EngineeringHome' },
        { name: 'Commissioning', icon: 'mdi-cog', path: '/CommissioningHome' },
      ], 
    }),
    computed: {
      routeName: function() {
        return this.$route.name
        //.match(/[A-Z][a-z]+/g).join(' ')
      }
    }
  }
</script>>
