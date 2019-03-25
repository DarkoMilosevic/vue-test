<template>
    <div class="form-group col-md-6 text-left">
        <label :for="labelName">{{ labelText }}</label>
        <input type="email" :name="labelName" v-model="content" @input="handleInput" class="form-control">
    </div>
</template>

<script>
import sample from '../assets/sample'
export default {
    props: ['value', 'labelText', 'labelName'],
    data() {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput (e) {
            this.$emit('input', this.content)
        }
    }
}
</script>

<style>
</style>
