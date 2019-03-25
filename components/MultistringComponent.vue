<template>
    <div class="form-group col-md-6 text-left">
        <label :for="labelName">{{ labelText }}</label>
        <textarea :name="labelName" v-model="content" @input="handleInput" class="form-control"></textarea>
    </div>
</template>

<script>
export default {
    props: ['inputValue', 'labelText', 'labelName'],
    data() {
        return {
            content: this.inputValue,
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
