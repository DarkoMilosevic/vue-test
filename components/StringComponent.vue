<template>
    <div :class="'text-left form-group col-md-' + col">
        <label :for="name" v-if="label">{{ label }}:</label>
        <input type="text" :name="name" v-model="content" @input="handleInput" class="form-control">
    </div>
</template>

<script>
export default {
    props: ['value', 'label', 'name', 'col'],
    data() {
        return {
            content: this.value
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', this.content)

            this.$store.commit(e.target.name, this.content)
        }
    },
}
</script>

<style>
</style>
