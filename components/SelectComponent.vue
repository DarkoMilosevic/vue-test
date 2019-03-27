<template>
    <div :class="'text-left form-group col-md-' + col">
        <label :for="name" v-if="label">{{ label }}:</label>
        <select :name="name" class="form-control" @change="handleChange" v-model="optionSelected">
            <option value="" selected disabled>Please select an option</option>
            <option :value="key" v-for="(option,key) in selectOptions" :key="key">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['label', 'name', 'options', 'col'],

    data() {
        return {
            optionSelected: '',
            selectOptions: []
        }
    },
    methods: {
        handleChange(e) {
            this.$emit('selected-option', this.optionSelected)

            this.$store.commit(e.target.name, this.optionSelected)
        }
    },
    mounted() {
        console.log('opt', this.options)
        this.selectOptions = this.options[0];
    }
}
</script>

<style>
</style>
