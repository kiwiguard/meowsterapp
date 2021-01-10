<template>
  <div class="user-profile">
    <div class="user-profile_sidebar">
      <div class="user-profile_user-panel">
          <h1 class="user-profile_username">Leave a Meow</h1>
      </div>
      <CreateMeowPanel/>
    </div>
        <div class="user-profile_meows-wrapper">
          <MeowItem />
        </div>
  </div>
</template>

<script>
import MeowItem from '../components/ListComponent';
import CreateMeowPanel from '../components/CreateComponent';


export default {
  name: 'Home',
  components: {
    MeowItem,
    CreateMeowPanel
  }
}
</script>

<style lang="scss" scoped> /* scoped styles applies to this component and this component only */
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;

  .user-profile_user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

  }
  .user-profile_meows-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>
