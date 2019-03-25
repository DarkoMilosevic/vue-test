<template>
    <div class="form-group col-md-6 text-left">
        <div>
            <label :for="labelName">{{ labelText }}:</label>
        </div>
        <input type="radio" :name="labelName" v-model="gender" :value="genders.male" @change="handleChange">
        <label :for="genders.male">{{ genders.male }}</label>

        <input type="radio" :name="labelName" v-model="gender" :value="genders.female" @change="handleChange">
        <label :for="genders.female">{{ genders.female }}</label>

        <input type="radio" :name="labelName" v-model="gender" :value="genders.other" @change="handleChange">
        <label :for="genders.other">{{ genders.other }}</label>
    </div>
</template>

<script>
import sample from '../assets/sample'
export default {
    props: ['value', 'labelText', 'labelName'],
    data() {
        return {
            gender: this.value,
            genders: ''
        }
    },
    methods: {
        handleChange (e) {
            this.$emit('input', this.gender)
        }
    },
    mounted() {
        this.genders = sample[3].options[0];
    }
}
</script>

<style>
</style>
