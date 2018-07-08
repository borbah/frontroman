<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
              <h1 class="title">Noteit</h1>
            </router-link>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
              <router-link to="/create" class="button is-success is-inverted">
                <span class="icon">
                  <b-icon
                    icon="pen"
                    size="is-small"
                  >
                  </b-icon>
                </span>
                <span>Add note</span>
              </router-link>
            </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style lang="scss" scoped>

</style>
