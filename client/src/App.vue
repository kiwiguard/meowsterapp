<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation_logo">
          MEVN Stack - Meowster
        </div>
      </router-link>
      <ul>
        <li>
          <router-link to="/view">
            <div>
              View Meows
            </div>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
  
  a {
    color:#003d3d;

    :visited {
      color: white;
    }

    &:hover {
      text-decoration: none;
      color:#006363;
    }

  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    background-color: teal;
    color: white;

    .navigation_logo {
      font-weight: bold;
      font-size: 24px;
    }

    ul {
      margin: 0;

      li {
        display: inline-block;
        margin-right: 1.5rem;
        font-size: 20px;
      }
    }
    

  }
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;

}

</style>