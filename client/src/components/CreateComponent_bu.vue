<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Leave a Meow</h3>
            <form @submit.prevent="createNewMeow"> <!-- refeers to method in script -->
                <div class="form-group">
                    <label for="username">Name</label>
                    <input id="username" type="text" class="form-control" v-model="meow.name" required> <!-- v-model connects field with data in scripts -->
                </div>

                <div class="form-group createMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
                    <label for="newMeow">Your Meow ({{ newMeowCharacterCount}}/180) </label>
                    <br />
                    <textarea  class="form-control" id="newMeow" rows="4" v-model="meow.content" required/> 
                </div>

                <div class="form-group createMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
                    <button class="btn btn-danger btn-block">Meow It!</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            meow: {
                name: '',
                content: ''
            }
        }
    },
    computed: {
        newMeowCharacterCount() {
            return this.meow.content.length;
        }
    },
    methods: {
        createNewMeow() {
            let apiURL = 'http://localhost:3000/api/create-meow';

            if (this.meow.content.length <= 180) {
                axios.post(apiURL, this.meow).then(() => {
                    this.$router.push('/view')
                    this.meow = {
                        name: '',
                        content: '',
                    }
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    .createMeow {

        &.--exceeded {
            color: red;
            border-color: red;

            button {
                background-color: lightgray;
                border-color: lightgray;
            }
        }

    }

</style>