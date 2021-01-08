<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Leave a Meow</h3>
            <form @submit.prevent="createNewMeow"> <!-- refeers to method in script -->
                <div class="form-group">
                    <label for="username">Name</label>
                    <input id="username" type="text" class="form-control" v-model="meow.name" required> <!-- v-model connects field with data in scripts -->
                </div>

                <div class="form-group">
                    <label for="newMeow">Message</label>
                    <br />
                    <textarea  class="form-control" id="newMeow" rows="4" v-model="meow.content" /> 
                    <!-- TODO: 
                            * SCSS style to full width 
                            * Max character count
                    --> 
                </div>

                <div class="form-group">
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
    methods: {
        createNewMeow() {
            let apiURL = 'http://localhost:3000/api/create-meow';

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
</script>
