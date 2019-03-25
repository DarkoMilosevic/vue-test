<template>
    <div class="form-group col-md-6 text-left">
        <label :for="labelName" v-if="labelName">{{ labelText }}:</label>
        <input type="text" :name="labelName" v-model="content" @input="handleInput" class="form-control">
    </div>
</template>

<script>
export default {
    props: ['inputValue', 'labelText', 'labelName'],
    data() {
        return {
            content: this.inputValue
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
