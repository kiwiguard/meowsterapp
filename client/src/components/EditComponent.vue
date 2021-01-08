<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update your Meow</h3>
            <form @submit.prevent="updateMeow">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="meow.name" required>
                </div>

                <div class="form-group updateMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
                <label for="updateMeow">Message ({{ newMeowCharacterCount}}/180)</label>
                <br />
                <textarea class="form-control" id="updateMeow" rows="4" v-model="meow.content" required /> 
                </div>

                <div class="form-group updateMeow" :class="{ '--exceeded': newMeowCharacterCount > 180 }">
                    <button class="btn btn-danger btn-block">Update</button>
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
            meow: { }
        }
    },
    created() {
        let apiURL = `/api/edit-meow/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.meow = res.data;
        })
    },
    computed: {
        newMeowCharacterCount() {
            return this.meow.content.length;
        }
    },
    methods: {
        updateMeow() {
            let apiURL = `/api/update-meow/${this.$route.params.id}`;

            if (this.meow.content.length <= 180) {
                axios.post(apiURL, this.meow).then((res) => {
                    console.log(res)
                    this.$router.push('/view')
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>